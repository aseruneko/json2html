const FILE_PATH: string = "./data.json";
const TARGET_DIV_ID: string = "json2html";
const USE_H_TAG: boolean = true;

async function main(): Promise<void> {
    readJson(FILE_PATH).then(jsonObj => {
        const htmlElements: HTMLElement[] = makeHtmlElements(jsonObj);
        appendHtmlElements(htmlElements, TARGET_DIV_ID);
    });
}

async function readJson(path: string): Promise<object> {
    const response = await fetch("./data.json");
    const data = await response.json();
    return data;
}

function jsonObjToData(jsonObj: object): Data[] {
    const keys = Object.keys(jsonObj);
    const objects = Object.values(jsonObj);
    if (typeof jsonObj === "string") {
        return [new Data(jsonObj)];
    } else {
        return keys.map((key, idx) => {
            const childObj = objects[idx]
            return new Data(key, jsonObjToData(childObj))
        })
    }
}

function makeHtmlElementForH(data: Data): HTMLElement {
    const regex = /^\d{1,}$/;
    function iterator(data: Data, recursiveLevel: number): [string, number][] {
        if(!data.hasData()) {
            return [[data.value(), 0]];
        } else if (regex.test(data.value())) {
            return data.data.flatMap(datum => iterator(datum, recursiveLevel));
        } else {
            const thisData: [string, number] = [data.value(), recursiveLevel];
            const iterData = data.data.flatMap(datum => iterator(datum, recursiveLevel + 1));
            return [thisData].concat(iterData);
        }
    }
    const iteratedData = iterator(data, 1);
    let element = document.createElement("div");
    iteratedData.forEach(([datum, level]) => {
        const tag = (level === 0 ? "p" : "h" + Math.min(level, 6));
        let elem = document.createElement(tag)
        elem.appendChild(document.createTextNode(datum))
        element.appendChild(elem);
    })
    return element;
}

function makeHtmlElementIteratorForDiv(data: Data): HTMLElement {
    const regex = /^\d{1,}$/;
    if(!data.hasData()) {
        let element: HTMLElement = document.createElement("div");
        element.appendChild(document.createTextNode(data.value()));
        return element;
    } else if (regex.test(data.value())) {
        let element: HTMLElement = document.createElement("div");
        data.data.forEach(datum =>
            element.appendChild(makeHtmlElementIteratorForDiv(datum))
        );
        return element;
    } else {
        let element: HTMLElement = document.createElement("div");
        element.appendChild(document.createTextNode(data.value()));
        data.data.forEach(datum =>
            element.appendChild(makeHtmlElementIteratorForDiv(datum))
        );
        return element;
    }
}

function makeHtmlElements(jsonObj: object): HTMLElement[] {
    const data = jsonObjToData(jsonObj);
    return data.map(datum => {
        if(USE_H_TAG) {
            return makeHtmlElementForH(datum);
        } else {
            return makeHtmlElementIteratorForDiv(datum);
        };
    })
}

function appendHtmlElements(elements: HTMLElement[], target: string): void {
    const targetElement = document.getElementById(target);
    if(targetElement) {
        elements.forEach(element => 
            targetElement.appendChild(element)
            )
    }
}

class Data{
    title: string;
    data: Data[];
    constructor(title: string, data: Data[] = []) {
        this.title = title;
        this.data = data;
    }
    hasData(): boolean {
        return this.data.length !== 0;
    }
    value(): string {
        return this.title;
    }
}

main()
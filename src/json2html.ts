const FILE_PATH: string = "./data.json";
const TARGET_DIV_ID: string = "json2html";

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

function makeHtmlElementIterator(data: Data): HTMLElement {
    let element: HTMLElement = document.createElement("div");
    element.appendChild(document.createTextNode(data.value()));
    if(!data.hasData) {
        return element;
    } else {
        data.data.forEach(datum =>
            element.appendChild(makeHtmlElementIterator(datum))
        );
        return element;
    }
}

function makeHtmlElements(jsonObj: object): HTMLElement[] {
    const data = jsonObjToData(jsonObj);
    return data.map(datum => makeHtmlElementIterator(datum));
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
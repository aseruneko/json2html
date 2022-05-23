console.log("test");

async function readJson() {
    const response = await fetch("./data.json");
    const data = await response.json();
    return data;
}

async function main() {
    readJson().then(json => {
        console.log(json);
    });
}

main()
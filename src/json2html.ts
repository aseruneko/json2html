console.log("test");

async function readJson() {
    const response = await fetch("./data.json");
    const data = await response.json();
    return data;
}

async function main() {
    const json = readJson();
    console.log(readJson);
}

main()
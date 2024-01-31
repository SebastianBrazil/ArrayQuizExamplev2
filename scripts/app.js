//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array  

let q1 = document.getElementById("q1")
let q2 = document.getElementById("q2")
let q3 = document.getElementById("q3")
let q4 = document.getElementById("q4")
let q5 = document.getElementById("q5")
let q5b = document.getElementById("q5b")
let ec1 = document.getElementById("ec1")
let ec2 = document.getElementById("ec2")

let globalData = [];

async function GatherData() {
    const response = await fetch("../data/quizdata.json");
    const data = await response.json();
    globalData = data.People;
    runTests();
}

function runTests() {
    const q1Response = globalData.filter(person => person.age > 19 && person.age < 30);
    q1.innerText = `There are ${q1Response.length} people who are in their 20's.`;

    const q2Response = globalData.filter(person => person.Active === true);
    q2.innerText = `There are ${q2Response.length} people who are active.`;

    const q3Response = globalData.filter(person => parseInt(person.height.split(" ")[0]) < 72);
    q3.innerText = `There are ${q3Response.length} people who shorter that 6'0".`;

    const q4Response = globalData.findIndex(person => parseInt(person.height.split(" ")[0]) > 56);
    q4.innerText = `The first person in the array that is taller than 56 inches is ${globalData[q4Response].name}`;

    const q5Response = globalData.every(person => person.name.split("").length > 15);
    q5.innerText = `It is ${q5Response} that everyone in the array has a name that is longer than 15 characters.`;

    const q5bResponse = globalData.every(person => parseInt(person.height.split(" ")[0]) > 50);
    q5b.innerText = `It is ${q5bResponse} that everyone in the array is taller than 50 inches.`;

    const ec1Response = [...globalData.map(person => person.name)].sort();
    ec1.innerText = `The array sorted by alphabetical first name would look like: ${ec1Response.join(", ")}.`;

    const ec2Response = [...globalData.map(person => person.name.split(" ").reverse().join(", "))].sort();
    ec2.innerText = `The array sorted by alphabetical last name would look like: ${ec2Response.join("; ")}.`;
};

GatherData();
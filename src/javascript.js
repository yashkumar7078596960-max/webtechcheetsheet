import React from "react";
import "./javascript.css";
const Javascript = () => {
    return (
        <>
            <div
                style={{
                    minHeight: "100vh",
                    background: "#0b1020",
                    color: "#ffffff",
                    padding: "40px 20px",
                    fontFamily: "Arial, sans-serif"
                }}
            >

                <h1
                    style={{
                        textAlign: "center",
                        fontSize: "45px",
                        color: "#00e5ff",
                        marginBottom: "10px"
                    }}
                >
                    ⚡ JavaScript Cheat Sheet
                </h1>

                <p
                    style={{
                        textAlign: "center",
                        color: "#aab3c5",
                        marginBottom: "40px"
                    }}
                >
                    JavaScript ke important concepts ek jagah
                </p>


                {/* VARIABLES */}
                <section style={cardStyle}>
                    <h2 style={headingStyle}>1. Variables</h2>

                    <Code>{`let name = "Yash";
const age = 19;
var city = "Moradabad";`}</Code>

                    <p>let → value change ho sakti hai</p>
                    <p>const → value reassign nahi kar sakte</p>
                    <p>var → old JavaScript syntax</p>
                </section>


                {/* DATA TYPES */}
                <section style={cardStyle}>
                    <h2 style={headingStyle}>2. Data Types</h2>

                    <Code>{`String      → "Hello"
Number      → 100
Boolean     → true / false
Undefined   → undefined
Null        → null
Object      → { name: "Yash" }
Array       → [1, 2, 3]`}</Code>
                </section>


                {/* OPERATORS */}
                <section style={cardStyle}>
                    <h2 style={headingStyle}>3. Operators</h2>

                    <Code>{`+   Addition
-   Subtraction
*   Multiplication
/   Division
%   Remainder
**  Power

==   Equal
===  Strict Equal
!=   Not Equal
!==  Strict Not Equal

&&   AND
||   OR
!    NOT`}</Code>
                </section>


                {/* IF ELSE */}
                <section style={cardStyle}>
                    <h2 style={headingStyle}>4. If / Else</h2>

                    <Code>{`let age = 19;

if (age >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}`}</Code>
                </section>


                {/* TERNARY */}
                <section style={cardStyle}>
                    <h2 style={headingStyle}>5. Ternary Operator</h2>

                    <Code>{`let age = 19;

let result = age >= 18
    ? "Adult"
    : "Minor";

console.log(result);`}</Code>
                </section>


                {/* SWITCH */}
                <section style={cardStyle}>
                    <h2 style={headingStyle}>6. Switch</h2>

                    <Code>{`let day = 1;

switch (day) {
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    default:
        console.log("Invalid Day");
}`}</Code>
                </section>


                {/* FOR LOOP */}
                <section style={cardStyle}>
                    <h2 style={headingStyle}>7. For Loop</h2>

                    <Code>{`for (let i = 1; i <= 5; i++) {
    console.log(i);
}`}</Code>
                </section>


                {/* WHILE LOOP */}
                <section style={cardStyle}>
                    <h2 style={headingStyle}>8. While Loop</h2>

                    <Code>{`let i = 1;

while (i <= 5) {
    console.log(i);
    i++;
}`}</Code>
                </section>


                {/* FUNCTIONS */}
                <section style={cardStyle}>
                    <h2 style={headingStyle}>9. Functions</h2>

                    <Code>{`function greet() {
    console.log("Hello Yash");
}

greet();`}</Code>
                </section>


                {/* FUNCTION PARAMETERS */}
                <section style={cardStyle}>
                    <h2 style={headingStyle}>10. Function with Parameters</h2>

                    <Code>{`function add(a, b) {
    return a + b;
}

console.log(add(10, 20));`}</Code>
                </section>


                {/* ARROW FUNCTION */}
                <section style={cardStyle}>
                    <h2 style={headingStyle}>11. Arrow Function</h2>

                    <Code>{`const add = (a, b) => {
    return a + b;
};

console.log(add(5, 10));`}</Code>
                </section>


                {/* ARRAY */}
                <section style={cardStyle}>
                    <h2 style={headingStyle}>12. Arrays</h2>

                    <Code>{`let fruits = ["Apple", "Mango", "Banana"];

console.log(fruits[0]);

fruits.push("Orange");
fruits.pop();

fruits.unshift("Grapes");
fruits.shift();`}</Code>
                </section>


                {/* ARRAY METHODS */}
                <section style={cardStyle}>
                    <h2 style={headingStyle}>13. Array Methods</h2>

                    <Code>{`map()
filter()
reduce()
forEach()
find()
includes()
indexOf()
slice()
splice()
sort()
reverse()`}</Code>
                </section>


                {/* MAP */}
                <section style={cardStyle}>
                    <h2 style={headingStyle}>14. map()</h2>

                    <Code>{`let numbers = [1, 2, 3, 4];

let result = numbers.map((num) => {
    return num * 2;
});

console.log(result);`}</Code>
                </section>


                {/* FILTER */}
                <section style={cardStyle}>
                    <h2 style={headingStyle}>15. filter()</h2>

                    <Code>{`let numbers = [10, 15, 20, 25, 30];

let result = numbers.filter((num) => {
    return num > 20;
});

console.log(result);`}</Code>
                </section>


                {/* REDUCE */}
                <section style={cardStyle}>
                    <h2 style={headingStyle}>16. reduce()</h2>

                    <Code>{`let numbers = [10, 20, 30];

let total = numbers.reduce((sum, num) => {
    return sum + num;
}, 0);

console.log(total);`}</Code>
                </section>


                {/* OBJECT */}
                <section style={cardStyle}>
                    <h2 style={headingStyle}>17. Objects</h2>

                    <Code>{`let student = {
    name: "Yash",
    age: 19,
    course: "B.Tech CSE"
};

console.log(student.name);
console.log(student.age);`}</Code>
                </section>


                {/* STRING */}
                <section style={cardStyle}>
                    <h2 style={headingStyle}>18. String Methods</h2>

                    <Code>{`let text = "JavaScript";

text.length
text.toUpperCase()
text.toLowerCase()
text.includes("Script")
text.startsWith("Java")
text.endsWith("Script")
text.indexOf("Script")
text.slice(0, 4)
text.replace("Java", "Type")
text.trim()`}</Code>
                </section>


                {/* TEMPLATE LITERAL */}
                <section style={cardStyle}>
                    <h2 style={headingStyle}>19. Template Literals</h2>

                    <Code>{`let name = "Yash";
let age = 19;

console.log(
    \`My name is \${name} and I am \${age} years old\`
);`}</Code>
                </section>


                {/* DESTRUCTURING */}
                <section style={cardStyle}>
                    <h2 style={headingStyle}>20. Destructuring</h2>

                    <Code>{`const person = {
    name: "Yash",
    age: 19
};

const { name, age } = person;

console.log(name);
console.log(age);`}</Code>
                </section>


                {/* SPREAD */}
                <section style={cardStyle}>
                    <h2 style={headingStyle}>21. Spread Operator</h2>

                    <Code>{`let a = [1, 2, 3];
let b = [4, 5, 6];

let result = [...a, ...b];

console.log(result);`}</Code>
                </section>


                {/* DOM */}
                <section style={cardStyle}>
                    <h2 style={headingStyle}>22. DOM</h2>

                    <Code>{`document.getElementById("title");

document.querySelector(".box");

document.querySelectorAll("p");

element.innerText = "Hello";

element.style.color = "red";`}</Code>
                </section>


                {/* EVENTS */}
                <section style={cardStyle}>
                    <h2 style={headingStyle}>23. Events</h2>

                    <Code>{`button.addEventListener("click", () => {
    alert("Button Clicked!");
});`}</Code>
                </section>


                {/* LOCAL STORAGE */}
                <section style={cardStyle}>
                    <h2 style={headingStyle}>24. Local Storage</h2>

                    <Code>{`localStorage.setItem("name", "Yash");

let name = localStorage.getItem("name");

localStorage.removeItem("name");

localStorage.clear();`}</Code>
                </section>


                {/* JSON */}
                <section style={cardStyle}>
                    <h2 style={headingStyle}>25. JSON</h2>

                    <Code>{`const user = {
    name: "Yash",
    age: 19
};

const jsonData = JSON.stringify(user);

const objectData = JSON.parse(jsonData);`}</Code>
                </section>


                {/* MATH */}
                <section style={cardStyle}>
                    <h2 style={headingStyle}>26. Math Methods</h2>

                    <Code>{`Math.round(4.6);
Math.floor(4.9);
Math.ceil(4.1);
Math.random();
Math.max(10, 20, 30);
Math.min(10, 20, 30);
Math.sqrt(25);
Math.pow(2, 3);`}</Code>
                </section>


                {/* DATE */}
                <section style={cardStyle}>
                    <h2 style={headingStyle}>27. Date</h2>

                    <Code>{`const date = new Date();

date.getFullYear();
date.getMonth();
date.getDate();
date.getDay();
date.getHours();
date.getMinutes();`}</Code>
                </section>


                {/* PROMISE */}
                <section style={cardStyle}>
                    <h2 style={headingStyle}>28. Promise</h2>

                    <Code>{`const promise = new Promise((resolve, reject) => {

    let success = true;

    if (success) {
        resolve("Success!");
    } else {
        reject("Error!");
    }

});

promise
    .then(result => console.log(result))
    .catch(error => console.log(error));`}</Code>
                </section>


                {/* ASYNC AWAIT */}
                <section style={cardStyle}>
                    <h2 style={headingStyle}>29. Async / Await</h2>

                    <Code>{`async function getData() {

    const response = await fetch(
        "https://api.example.com/data"
    );

    const data = await response.json();

    console.log(data);
}

getData();`}</Code>
                </section>


                {/* TRY CATCH */}
                <section style={cardStyle}>
                    <h2 style={headingStyle}>30. Try / Catch</h2>

                    <Code>{`try {
    let result = 10 / 0;
    console.log(result);
} catch (error) {
    console.log(error);
} finally {
    console.log("Completed");
}`}</Code>
                </section>


                {/* CONSOLE */}
                <section style={cardStyle}>
                    <h2 style={headingStyle}>31. Console Methods</h2>

                    <Code>{`console.log("Hello");

console.error("Error");

console.warn("Warning");

console.table(["HTML", "CSS", "JavaScript"]);

console.clear();`}</Code>
                </section>


                {/* FOOTER */}
                <div
                    style={{
                        textAlign: "center",
                        marginTop: "45px",
                        padding: "25px",
                        color: "#9da8bd"
                    }}
                >
                    <h2 style={{ color: "#00e5ff" }}>
                        🚀 Keep Learning JavaScript
                    </h2>

                    <p>
                        Learn → Practice → Build Projects → Get Better
                    </p>
                </div>

            </div>
        </>
    );
};


// Card Style
const cardStyle = {
    width: "min(1000px, 100%)",
    margin: "0 auto 25px",
    padding: "25px",
    background: "#111827",
    border: "1px solid #263249",
    borderRadius: "16px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.3)"
};


// Heading Style
const headingStyle = {
    color: "#00e5ff",
    fontSize: "24px",
    marginBottom: "18px"
};


// Code Component
const Code = ({ children }) => {
    return (
        <pre
            style={{
                background: "#050816",
                color: "#d7faff",
                padding: "20px",
                borderRadius: "10px",
                overflowX: "auto",
                fontSize: "15px",
                lineHeight: "1.7",
                fontFamily: "Consolas, monospace",
                border: "1px solid #263249",
                whiteSpace: "pre-wrap"
            }}
        >
            {children}
        </pre>
    );
};

export default Javascript;

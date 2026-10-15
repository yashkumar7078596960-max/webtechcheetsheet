import React from "react";
import "./node.css";

const Node = () => {
    return (
        <div className="node-page">
            <div className="node-container">

                <h1>🚀 Node.js Cheat Sheet</h1>
                <p className="subtitle">
                    Quick reference for Node.js developers
                </p>

                {/* 1. What is Node.js */}
                <section className="node-card">
                    <h2>1. What is Node.js?</h2>
                    <p>
                        Node.js is a JavaScript runtime that allows JavaScript
                        to run outside the browser.
                    </p>

                    <pre>
                        <code>{`console.log("Hello Node.js");`}</code>
                    </pre>
                </section>

                {/* 2. Node Commands */}
                <section className="node-card">
                    <h2>2. Basic Node.js Commands</h2>

                    <div className="code-row">
                        <span>Check Node version</span>
                        <code>node -v</code>
                    </div>

                    <div className="code-row">
                        <span>Check npm version</span>
                        <code>npm -v</code>
                    </div>

                    <div className="code-row">
                        <span>Run JavaScript file</span>
                        <code>node app.js</code>
                    </div>

                    <div className="code-row">
                        <span>Create package.json</span>
                        <code>npm init -y</code>
                    </div>

                    <div className="code-row">
                        <span>Install package</span>
                        <code>npm install package-name</code>
                    </div>

                    <div className="code-row">
                        <span>Install development package</span>
                        <code>npm install package-name --save-dev</code>
                    </div>

                    <div className="code-row">
                        <span>Remove package</span>
                        <code>npm uninstall package-name</code>
                    </div>
                </section>

                {/* 3. Modules */}
                <section className="node-card">
                    <h2>3. Modules</h2>

                    <h3>CommonJS</h3>

                    <pre>
                        <code>{`const fs = require("fs");`}</code>
                    </pre>

                    <h3>ES Module</h3>

                    <pre>
                        <code>{`import fs from "fs";`}</code>
                    </pre>
                </section>

                {/* 4. File System */}
                <section className="node-card">
                    <h2>4. File System (fs)</h2>

                    <pre>
                        <code>{`const fs = require("fs");

// Write file
fs.writeFileSync("hello.txt", "Hello World");

// Read file
const data = fs.readFileSync("hello.txt", "utf8");

console.log(data);

// Add data
fs.appendFileSync("hello.txt", "\\nNode.js");`}</code>
                    </pre>
                </section>

                {/* 5. Path */}
                <section className="node-card">
                    <h2>5. Path Module</h2>

                    <pre>
                        <code>{`const path = require("path");

console.log(path.basename(__filename));

console.log(path.dirname(__filename));

console.log(path.extname(__filename));

console.log(path.join("folder", "file.txt"));`}</code>
                    </pre>
                </section>

                {/* 6. OS */}
                <section className="node-card">
                    <h2>6. OS Module</h2>

                    <pre>
                        <code>{`const os = require("os");

console.log(os.platform());

console.log(os.arch());

console.log(os.cpus());

console.log(os.totalmem());

console.log(os.freemem());`}</code>
                    </pre>
                </section>

                {/* 7. HTTP Server */}
                <section className="node-card">
                    <h2>7. Create HTTP Server</h2>

                    <pre>
                        <code>{`const http = require("http");

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-Type": "text/html"
    });

    res.end("<h1>Hello Node.js</h1>");
});

server.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});`}</code>
                    </pre>
                </section>

                {/* 8. Express */}
                <section className="node-card">
                    <h2>8. Express.js</h2>

                    <p>Install Express:</p>

                    <pre>
                        <code>{`npm install express`}</code>
                    </pre>

                    <p>Basic Express server:</p>

                    <pre>
                        <code>{`const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Hello Express!");
});

app.listen(3000, () => {
    console.log("Server started");
});`}</code>
                    </pre>
                </section>

                {/* 9. Routes */}
                <section className="node-card">
                    <h2>9. Express Routes</h2>

                    <pre>
                        <code>{`app.get("/", (req, res) => {
    res.send("Home Page");
});

app.get("/about", (req, res) => {
    res.send("About Page");
});

app.get("/contact", (req, res) => {
    res.send("Contact Page");
});`}</code>
                    </pre>
                </section>

                {/* 10. Middleware */}
                <section className="node-card">
                    <h2>10. Middleware</h2>

                    <pre>
                        <code>{`app.use(express.json());

app.use((req, res, next) => {
    console.log("Middleware running");
    next();
});`}</code>
                    </pre>
                </section>

                {/* 11. JSON */}
                <section className="node-card">
                    <h2>11. JSON</h2>

                    <pre>
                        <code>{`const user = {
    name: "Yash",
    age: 19
};

console.log(JSON.stringify(user));

const data = '{"name":"Yash"}';

console.log(JSON.parse(data));`}</code>
                    </pre>
                </section>

                {/* 12. Environment Variables */}
                <section className="node-card">
                    <h2>12. Environment Variables</h2>

                    <pre>
                        <code>{`console.log(process.env.PORT);`}</code>
                    </pre>

                    <p>Run with:</p>

                    <pre>
                        <code>{`PORT=5000 node app.js`}</code>
                    </pre>
                </section>

                {/* 13. Process */}
                <section className="node-card">
                    <h2>13. Process Object</h2>

                    <pre>
                        <code>{`console.log(process.version);

console.log(process.platform);

console.log(process.argv);`}</code>
                    </pre>
                </section>

                {/* 14. Async */}
                <section className="node-card">
                    <h2>14. Async / Await</h2>

                    <pre>
                        <code>{`const getData = async () => {
    try {
        const response = await fetch(
            "https://api.example.com/data"
        );

        const data = await response.json();

        console.log(data);
    } catch (error) {
        console.log(error);
    }
};

getData();`}</code>
                    </pre>
                </section>

                {/* 15. Package.json */}
                <section className="node-card">
                    <h2>15. package.json</h2>

                    <pre>
                        <code>{`{
    "name": "my-app",
    "version": "1.0.0",
    "main": "app.js",
    "scripts": {
        "start": "node app.js",
        "dev": "node app.js"
    }
}`}</code>
                    </pre>
                </section>

                {/* 16. npm scripts */}
                <section className="node-card">
                    <h2>16. npm Scripts</h2>

                    <pre>
                        <code>{`npm start

npm run dev`}</code>
                    </pre>
                </section>

                {/* 17. HTTP Methods */}
                <section className="node-card">
                    <h2>17. HTTP Methods</h2>

                    <div className="method-grid">
                        <div>
                            <strong>GET</strong>
                            <p>Get data</p>
                        </div>

                        <div>
                            <strong>POST</strong>
                            <p>Create data</p>
                        </div>

                        <div>
                            <strong>PUT</strong>
                            <p>Update data</p>
                        </div>

                        <div>
                            <strong>PATCH</strong>
                            <p>Partially update data</p>
                        </div>

                        <div>
                            <strong>DELETE</strong>
                            <p>Delete data</p>
                        </div>
                    </div>
                </section>

                {/* 18. API */}
                <section className="node-card">
                    <h2>18. Simple API</h2>

                    <pre>
                        <code>{`const express = require("express");

const app = express();

app.use(express.json());

app.get("/api/users", (req, res) => {
    res.json([
        {
            id: 1,
            name: "Yash"
        }
    ]);
});

app.listen(3000);`}</code>
                    </pre>
                </section>

                {/* 19. Error Handling */}
                <section className="node-card">
                    <h2>19. Error Handling</h2>

                    <pre>
                        <code>{`try {
    // Code
} catch (error) {
    console.log(error.message);
}`}</code>
                    </pre>
                </section>

                {/* 20. Important Concepts */}
                <section className="node-card">
                    <h2>20. Important Node.js Topics</h2>

                    <div className="topic-grid">
                        <span>Node.js Runtime</span>
                        <span>npm</span>
                        <span>Modules</span>
                        <span>File System</span>
                        <span>HTTP</span>
                        <span>Express.js</span>
                        <span>REST API</span>
                        <span>Middleware</span>
                        <span>JSON</span>
                        <span>Async/Await</span>
                        <span>Promises</span>
                        <span>Environment Variables</span>
                        <span>Authentication</span>
                        <span>MongoDB</span>
                        <span>JWT</span>
                        <span>API Development</span>
                    </div>
                </section>

                <footer>
                    <p>💻 Keep Coding • Keep Learning • Node.js</p>
                </footer>

            </div>
        </div>
    );
};

export default Node;

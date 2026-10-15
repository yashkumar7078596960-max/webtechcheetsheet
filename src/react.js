import React, { useState, useEffect, useRef, useMemo, useCallback } from "react";
import "./react.css";

const ReactCheatSheet = () => {
    return (
        <div className="react-page">
            <h1>⚛️ React Cheat Sheet</h1>
            <p className="subtitle">React.js Quick Reference — Beginner to Advanced Basics</p>

            {/* 1. React Component */}
            <section className="card">
                <h2>1. Basic React Component</h2>
                <pre>
                    {`import React from "react";

const App = () => {
  return (
    <div>
      <h1>Hello React</h1>
    </div>
  );
};

export default App;`}
                </pre>
            </section>

            {/* 2. JSX */}
            <section className="card">
                <h2>2. JSX</h2>
                <pre>
                    {`const name = "Yash";

return (
  <div>
    <h1>Hello {name}</h1>
    <p>Welcome to React</p>
  </div>
);`}
                </pre>
            </section>

            {/* 3. Variables */}
            <section className="card">
                <h2>3. JavaScript in JSX</h2>
                <pre>
                    {`const age = 19;
const isLoggedIn = true;

return (
  <>
    <h2>Age: {age}</h2>
    <p>{isLoggedIn ? "Logged In" : "Please Login"}</p>
  </>
);`}
                </pre>
            </section>

            {/* 4. Props */}
            <section className="card">
                <h2>4. Props</h2>
                <pre>
                    {`function User({ name, age }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{age}</p>
    </div>
  );
}

// Use
<User name="Yash" age={19} />`}
                </pre>
            </section>

            {/* 5. useState */}
            <section className="card">
                <h2>5. useState Hook</h2>
                <pre>
                    {`const [count, setCount] = useState(0);

const increase = () => {
  setCount(count + 1);
};

return (
  <>
    <h2>{count}</h2>
    <button onClick={increase}>+</button>
  </>
);`}
                </pre>
            </section>

            {/* 6. Events */}
            <section className="card">
                <h2>6. Events</h2>
                <pre>
                    {`const handleClick = () => {
  alert("Button clicked!");
};

<button onClick={handleClick}>
  Click Me
</button>`}
                </pre>
            </section>

            {/* 7. Input */}
            <section className="card">
                <h2>7. Input Handling</h2>
                <pre>
                    {`const [name, setName] = useState("");

<input
  type="text"
  value={name}
  onChange={(e) => setName(e.target.value)}
  placeholder="Enter name"
/>

<p>Hello {name}</p>`}
                </pre>
            </section>

            {/* 8. Conditional */}
            <section className="card">
                <h2>8. Conditional Rendering</h2>
                <pre>
                    {`{isLoggedIn ? (
  <h2>Welcome User</h2>
) : (
  <h2>Please Login</h2>
)}

{isLoggedIn && <p>Dashboard</p>}`}
                </pre>
            </section>

            {/* 9. Lists */}
            <section className="card">
                <h2>9. Lists & map()</h2>
                <pre>
                    {`const fruits = ["Apple", "Mango", "Banana"];

return (
  <ul>
    {fruits.map((fruit, index) => (
      <li key={index}>{fruit}</li>
    ))}
  </ul>
);`}
                </pre>
            </section>

            {/* 10. useEffect */}
            <section className="card">
                <h2>10. useEffect Hook</h2>
                <pre>
                    {`useEffect(() => {
  console.log("Component Loaded");
}, []);`}
                </pre>

                <p>
                    <b>[]</b> = runs once<br />
                    <b>[value]</b> = runs when value changes
                </p>
            </section>

            {/* 11. useRef */}
            <section className="card">
                <h2>11. useRef Hook</h2>
                <pre>
                    {`const inputRef = useRef();

const focusInput = () => {
  inputRef.current.focus();
};

<input ref={inputRef} />

<button onClick={focusInput}>
  Focus
</button>`}
                </pre>
            </section>

            {/* 12. useMemo */}
            <section className="card">
                <h2>12. useMemo</h2>
                <pre>
                    {`const result = useMemo(() => {
  return expensiveCalculation(number);
}, [number]);`}
                </pre>
                <p>Used for optimizing expensive calculations.</p>
            </section>

            {/* 13. useCallback */}
            <section className="card">
                <h2>13. useCallback</h2>
                <pre>
                    {`const handleClick = useCallback(() => {
  console.log("Hello");
}, []);`}
                </pre>
                <p>Used to memorize a function.</p>
            </section>

            {/* 14. Forms */}
            <section className="card">
                <h2>14. Form</h2>
                <pre>
                    {`const [email, setEmail] = useState("");

const handleSubmit = (e) => {
  e.preventDefault();
  console.log(email);
};

<form onSubmit={handleSubmit}>
  <input
    value={email}
    onChange={(e) => setEmail(e.target.value)}
  />

  <button type="submit">
    Submit
  </button>
</form>`}
                </pre>
            </section>

            {/* 15. Component Communication */}
            <section className="card">
                <h2>15. Parent → Child</h2>
                <pre>
                    {`function Parent() {
  return <Child name="Yash" />;
}

function Child({ name }) {
  return <h2>Hello {name}</h2>;
}`}
                </pre>
            </section>

            {/* 16. Children */}
            <section className="card">
                <h2>16. Children Props</h2>
                <pre>
                    {`function Card({ children }) {
  return (
    <div className="box">
      {children}
    </div>
  );
}

<Card>
  <h2>Hello React</h2>
  <p>Learning React</p>
</Card>`}
                </pre>
            </section>

            {/* 17. React Router */}
            <section className="card">
                <h2>17. React Router</h2>
                <pre>
                    {`import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

<BrowserRouter>
  <nav>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
  </nav>

  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
  </Routes>
</BrowserRouter>`}
                </pre>
            </section>

            {/* 18. API */}
            <section className="card">
                <h2>18. Fetch API</h2>
                <pre>
                    {`useEffect(() => {
  fetch("https://api.example.com/data")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
}, []);`}
                </pre>
            </section>

            {/* 19. Async Await */}
            <section className="card">
                <h2>19. Async / Await</h2>
                <pre>
                    {`const getData = async () => {
  try {
    const response = await fetch(
      "https://api.example.com/data"
    );

    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.log(error);
  }
};`}
                </pre>
            </section>

            {/* 20. Context */}
            <section className="card">
                <h2>20. Context API</h2>
                <pre>
                    {`import {
  createContext,
  useContext
} from "react";

const UserContext = createContext();

<UserContext.Provider value="Yash">
  <App />
</UserContext.Provider>

const user = useContext(UserContext);`}
                </pre>
            </section>

            {/* 21. useReducer */}
            <section className="card">
                <h2>21. useReducer</h2>
                <pre>
                    {`const [state, dispatch] = useReducer(
  reducer,
  initialState
);

dispatch({ type: "INCREMENT" });`}
                </pre>
            </section>

            {/* 22. Fragment */}
            <section className="card">
                <h2>22. Fragment</h2>
                <pre>
                    {`<>
  <h1>Hello</h1>
  <p>React</p>
</>`}
                </pre>
            </section>

            {/* 23. Important Rules */}
            <section className="card important">
                <h2>🔥 Important React Rules</h2>

                <ul>
                    <li>Component name generally starts with Capital letter.</li>
                    <li>Use className instead of class.</li>
                    <li>Every mapped item should have a unique key.</li>
                    <li>Do not directly modify state.</li>
                    <li>Hooks should be called at the top level.</li>
                    <li>Props are read-only.</li>
                    <li>Use useEffect for side effects.</li>
                </ul>
            </section>

            {/* 24. Folder Structure */}
            <section className="card">
                <h2>24. Basic React Folder Structure</h2>
                <pre>
                    {`src/
│
├── components/
│   ├── Navbar.jsx
│   └── Card.jsx
│
├── pages/
│   ├── Home.jsx
│   └── About.jsx
│
├── App.jsx
├── main.jsx
└── index.css`}
                </pre>
            </section>

            <div className="footer">
                ⚛️ React • JSX • Components • Props • State • Hooks • Router • API
            </div>
        </div>
    );
};

export default ReactCheatSheet;

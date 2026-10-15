import React from "react";
import "./css.css"
const Cssq = () => {
    return (
        <>
            <div className="css-cheatsheet">
                <h1>CSS Cheat Sheet</h1>
                <p className="subtitle">
                    Important CSS properties, selectors, units and examples
                </p>

                {/* CSS Syntax */}
                <section>
                    <h2>1. CSS Syntax</h2>

                    <div className="code">
                        <pre>{`selector {
  property: value;
}`}</pre>
                    </div>

                    <div className="code">
                        <pre>{`p {
  color: red;
  font-size: 20px;
}`}</pre>
                    </div>
                </section>

                {/* Selectors */}
                <section>
                    <h2>2. CSS Selectors</h2>

                    <table>
                        <thead>
                            <tr>
                                <th>Selector</th>
                                <th>Example</th>
                                <th>Meaning</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>Element</td>
                                <td>p</td>
                                <td>Selects all p elements</td>
                            </tr>

                            <tr>
                                <td>Class</td>
                                <td>.box</td>
                                <td>Selects class="box"</td>
                            </tr>

                            <tr>
                                <td>ID</td>
                                <td>#title</td>
                                <td>Selects id="title"</td>
                            </tr>

                            <tr>
                                <td>Universal</td>
                                <td>*</td>
                                <td>Selects all elements</td>
                            </tr>

                            <tr>
                                <td>Grouping</td>
                                <td>h1, p</td>
                                <td>Selects multiple elements</td>
                            </tr>
                        </tbody>
                    </table>
                </section>

                {/* Text */}
                <section>
                    <h2>3. Text Properties</h2>

                    <div className="code">
                        <pre>{`color: red;
font-size: 20px;
font-family: Arial;
font-weight: bold;
text-align: center;
text-decoration: underline;
text-transform: uppercase;
line-height: 1.5;
letter-spacing: 2px;
word-spacing: 5px;`}</pre>
                    </div>
                </section>

                {/* Background */}
                <section>
                    <h2>4. Background</h2>

                    <div className="code">
                        <pre>{`background-color: blue;
background-image: url("image.jpg");
background-size: cover;
background-position: center;
background-repeat: no-repeat;`}</pre>
                    </div>
                </section>

                {/* Box Model */}
                <section>
                    <h2>5. Box Model</h2>

                    <div className="code">
                        <pre>{`width: 300px;
height: 200px;

padding: 20px;
margin: 20px;

border: 2px solid black;
border-radius: 10px;

box-sizing: border-box;`}</pre>
                    </div>
                </section>

                {/* Display */}
                <section>
                    <h2>6. Display</h2>

                    <div className="code">
                        <pre>{`display: block;
display: inline;
display: inline-block;
display: none;
display: flex;
display: grid;`}</pre>
                    </div>
                </section>

                {/* Flexbox */}
                <section>
                    <h2>7. Flexbox</h2>

                    <div className="code">
                        <pre>{`.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
}`}</pre>
                    </div>

                    <table>
                        <thead>
                            <tr>
                                <th>Property</th>
                                <th>Example</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>justify-content</td>
                                <td>center</td>
                            </tr>

                            <tr>
                                <td>align-items</td>
                                <td>center</td>
                            </tr>

                            <tr>
                                <td>flex-direction</td>
                                <td>column</td>
                            </tr>

                            <tr>
                                <td>flex-wrap</td>
                                <td>wrap</td>
                            </tr>

                            <tr>
                                <td>gap</td>
                                <td>20px</td>
                            </tr>
                        </tbody>
                    </table>
                </section>

                {/* Grid */}
                <section>
                    <h2>8. CSS Grid</h2>

                    <div className="code">
                        <pre>{`.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}`}</pre>
                    </div>
                </section>

                {/* Position */}
                <section>
                    <h2>9. Position</h2>

                    <div className="code">
                        <pre>{`position: static;
position: relative;
position: absolute;
position: fixed;
position: sticky;

top: 0;
right: 0;
bottom: 0;
left: 0;`}</pre>
                    </div>
                </section>

                {/* Colors */}
                <section>
                    <h2>10. Colors</h2>

                    <div className="code">
                        <pre>{`color: red;
color: #ff0000;
color: rgb(255, 0, 0);
color: rgba(255, 0, 0, 0.5);`}</pre>
                    </div>
                </section>

                {/* Units */}
                <section>
                    <h2>11. CSS Units</h2>

                    <table>
                        <thead>
                            <tr>
                                <th>Unit</th>
                                <th>Meaning</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>px</td>
                                <td>Pixels</td>
                            </tr>

                            <tr>
                                <td>%</td>
                                <td>Percentage</td>
                            </tr>

                            <tr>
                                <td>em</td>
                                <td>Relative to parent font-size</td>
                            </tr>

                            <tr>
                                <td>rem</td>
                                <td>Relative to root font-size</td>
                            </tr>

                            <tr>
                                <td>vh</td>
                                <td>Viewport height</td>
                            </tr>

                            <tr>
                                <td>vw</td>
                                <td>Viewport width</td>
                            </tr>

                            <tr>
                                <td>fr</td>
                                <td>Grid fraction unit</td>
                            </tr>
                        </tbody>
                    </table>
                </section>

                {/* Border */}
                <section>
                    <h2>12. Border</h2>

                    <div className="code">
                        <pre>{`border: 2px solid black;
border-width: 2px;
border-style: solid;
border-color: red;

border-radius: 10px;`}</pre>
                    </div>
                </section>

                {/* Shadow */}
                <section>
                    <h2>13. Shadow</h2>

                    <div className="code">
                        <pre>{`box-shadow: 0 5px 15px rgba(0,0,0,0.3);

text-shadow: 2px 2px 5px gray;`}</pre>
                    </div>
                </section>

                {/* Hover */}
                <section>
                    <h2>14. Hover Effect</h2>

                    <div className="code">
                        <pre>{`.button {
  background: blue;
  color: white;
}

.button:hover {
  background: black;
  transform: scale(1.05);
}`}</pre>
                    </div>
                </section>

                {/* Transition */}
                <section>
                    <h2>15. Transition</h2>

                    <div className="code">
                        <pre>{`.box {
  transition: 0.3s ease;
}

.box:hover {
  transform: translateY(-5px);
}`}</pre>
                    </div>
                </section>

                {/* Transform */}
                <section>
                    <h2>16. Transform</h2>

                    <div className="code">
                        <pre>{`transform: scale(1.2);
transform: rotate(45deg);
transform: translateX(20px);
transform: translateY(20px);
transform: skew(10deg);`}</pre>
                    </div>
                </section>

                {/* Overflow */}
                <section>
                    <h2>17. Overflow</h2>

                    <div className="code">
                        <pre>{`overflow: visible;
overflow: hidden;
overflow: scroll;
overflow: auto;`}</pre>
                    </div>
                </section>

                {/* Cursor */}
                <section>
                    <h2>18. Cursor</h2>

                    <div className="code">
                        <pre>{`cursor: pointer;
cursor: default;
cursor: not-allowed;
cursor: grab;
cursor: text;`}</pre>
                    </div>
                </section>

                {/* Opacity */}
                <section>
                    <h2>19. Opacity</h2>

                    <div className="code">
                        <pre>{`opacity: 1;
opacity: 0.5;
opacity: 0;`}</pre>
                    </div>
                </section>

                {/* Media Query */}
                <section>
                    <h2>20. Responsive Design</h2>

                    <div className="code">
                        <pre>{`@media (max-width: 768px) {
  .container {
    width: 100%;
  }
}`}</pre>
                    </div>
                </section>

                {/* Variables */}
                <section>
                    <h2>21. CSS Variables</h2>

                    <div className="code">
                        <pre>{`:root {
  --primary-color: blue;
  --font-size: 20px;
}

.box {
  color: var(--primary-color);
  font-size: var(--font-size);
}`}</pre>
                    </div>
                </section>

                {/* Important Properties */}
                <section>
                    <h2>22. Most Important Properties</h2>

                    <div className="tags">
                        <span>color</span>
                        <span>background</span>
                        <span>width</span>
                        <span>height</span>
                        <span>margin</span>
                        <span>padding</span>
                        <span>border</span>
                        <span>display</span>
                        <span>flex</span>
                        <span>grid</span>
                        <span>position</span>
                        <span>font-size</span>
                        <span>box-shadow</span>
                        <span>transform</span>
                        <span>transition</span>
                        <span>animation</span>
                    </div>
                </section>

                <footer>
                    <h3>🚀 Keep Learning CSS</h3>
                    <p>Practice CSS every day and build real projects.</p>
                </footer>
            </div>
        </>
    );
};

export default Cssq;

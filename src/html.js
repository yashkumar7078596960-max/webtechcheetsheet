import React from "react";
const Html = () => {
    return (
        <div className="html-cheatsheet">

            {/* Header */}
            <header className="cheat-header">
                <span className="badge">HTML 5</span>

                <h1>HTML Cheat Sheet</h1>

                <p>
                    HTML ke important tags, attributes aur examples ek hi jagah.
                </p>
            </header>

            {/* HTML Structure */}
            <section className="cheat-section">
                <h2>1. Basic HTML Structure</h2>

                <div className="code-box">
                    <pre>{`<!DOCTYPE html>
<html>
<head>
    <title>My Website</title>
</head>

<body>

    <h1>Hello World</h1>
    <p>Welcome to my website.</p>

</body>
</html>`}</pre>
                </div>
            </section>

            {/* Headings */}
            <section className="cheat-section">
                <h2>2. Headings</h2>

                <div className="tag-grid">
                    <div className="tag-card">
                        <code>&lt;h1&gt;</code>
                        <p>Main Heading</p>
                    </div>

                    <div className="tag-card">
                        <code>&lt;h2&gt;</code>
                        <p>Second Heading</p>
                    </div>

                    <div className="tag-card">
                        <code>&lt;h3&gt;</code>
                        <p>Third Heading</p>
                    </div>

                    <div className="tag-card">
                        <code>&lt;h4&gt;</code>
                        <p>Fourth Heading</p>
                    </div>

                    <div className="tag-card">
                        <code>&lt;h5&gt;</code>
                        <p>Fifth Heading</p>
                    </div>

                    <div className="tag-card">
                        <code>&lt;h6&gt;</code>
                        <p>Smallest Heading</p>
                    </div>
                </div>
            </section>

            {/* Text Tags */}
            <section className="cheat-section">
                <h2>3. Text Formatting</h2>

                <div className="table-wrapper">
                    <table>
                        <thead>
                            <tr>
                                <th>Tag</th>
                                <th>Use</th>
                                <th>Example</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td><code>&lt;p&gt;</code></td>
                                <td>Paragraph</td>
                                <td><p>Hello World</p></td>
                            </tr>

                            <tr>
                                <td><code>&lt;b&gt;</code></td>
                                <td>Bold Text</td>
                                <td><b>Bold</b></td>
                            </tr>

                            <tr>
                                <td><code>&lt;strong&gt;</code></td>
                                <td>Important Text</td>
                                <td><strong>Important</strong></td>
                            </tr>

                            <tr>
                                <td><code>&lt;i&gt;</code></td>
                                <td>Italic Text</td>
                                <td><i>Italic</i></td>
                            </tr>

                            <tr>
                                <td><code>&lt;em&gt;</code></td>
                                <td>Emphasized Text</td>
                                <td><em>Emphasis</em></td>
                            </tr>

                            <tr>
                                <td><code>&lt;u&gt;</code></td>
                                <td>Underline</td>
                                <td><u>Underline</u></td>
                            </tr>

                            <tr>
                                <td><code>&lt;mark&gt;</code></td>
                                <td>Highlight</td>
                                <td><mark>Highlight</mark></td>
                            </tr>

                            <tr>
                                <td><code>&lt;small&gt;</code></td>
                                <td>Small Text</td>
                                <td><small>Small text</small></td>
                            </tr>

                            <tr>
                                <td><code>&lt;del&gt;</code></td>
                                <td>Deleted Text</td>
                                <td><del>Deleted</del></td>
                            </tr>

                            <tr>
                                <td><code>&lt;ins&gt;</code></td>
                                <td>Inserted Text</td>
                                <td><ins>Inserted</ins></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            {/* Links */}
            <section className="cheat-section">
                <h2>4. Links</h2>

                <div className="code-box">
                    <pre>{`<a href="https://google.com">
    Google
</a>

<a href="https://google.com" target="_blank">
    Open Google in New Tab
</a>`}</pre>
                </div>
            </section>

            {/* Images */}
            <section className="cheat-section">
                <h2>5. Images</h2>

                <div className="code-box">
                    <pre>{`<img
    src="image.jpg"
    alt="My Image"
    width="300"
/>`}</pre>
                </div>
            </section>

            {/* Lists */}
            <section className="cheat-section">
                <h2>6. Lists</h2>

                <div className="two-column">

                    <div className="example-card">
                        <h3>Unordered List</h3>

                        <div className="code-box">
                            <pre>{`<ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
</ul>`}</pre>
                        </div>
                    </div>

                    <div className="example-card">
                        <h3>Ordered List</h3>

                        <div className="code-box">
                            <pre>{`<ol>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
</ol>`}</pre>
                        </div>
                    </div>

                </div>
            </section>

            {/* Div and Span */}
            <section className="cheat-section">
                <h2>7. Div & Span</h2>

                <div className="code-box">
                    <pre>{`<div>
    This is a block element.
</div>

<p>
    This is <span>inline content</span>.
</p>`}</pre>
                </div>
            </section>

            {/* Semantic Tags */}
            <section className="cheat-section">
                <h2>8. Semantic HTML</h2>

                <div className="tag-grid semantic-grid">
                    <div className="tag-card">
                        <code>&lt;header&gt;</code>
                        <p>Top/Header Section</p>
                    </div>

                    <div className="tag-card">
                        <code>&lt;nav&gt;</code>
                        <p>Navigation</p>
                    </div>

                    <div className="tag-card">
                        <code>&lt;main&gt;</code>
                        <p>Main Content</p>
                    </div>

                    <div className="tag-card">
                        <code>&lt;section&gt;</code>
                        <p>Page Section</p>
                    </div>

                    <div className="tag-card">
                        <code>&lt;article&gt;</code>
                        <p>Article Content</p>
                    </div>

                    <div className="tag-card">
                        <code>&lt;aside&gt;</code>
                        <p>Side Content</p>
                    </div>

                    <div className="tag-card">
                        <code>&lt;footer&gt;</code>
                        <p>Bottom/Footer</p>
                    </div>
                </div>
            </section>

            {/* Tables */}
            <section className="cheat-section">
                <h2>9. Tables</h2>

                <div className="code-box">
                    <pre>{`<table>
    <tr>
        <th>Name</th>
        <th>Age</th>
    </tr>

    <tr>
        <td>Yash</td>
        <td>19</td>
    </tr>
</table>`}</pre>
                </div>
            </section>

            {/* Forms */}
            <section className="cheat-section">
                <h2>10. Forms</h2>

                <div className="code-box">
                    <pre>{`<form>

    <label>Name:</label>
    <input type="text" />

    <label>Email:</label>
    <input type="email" />

    <label>Password:</label>
    <input type="password" />

    <button type="submit">
        Submit
    </button>

</form>`}</pre>
                </div>
            </section>

            {/* Common Input Types */}
            <section className="cheat-section">
                <h2>11. Input Types</h2>

                <div className="tag-grid">
                    <div className="tag-card">
                        <code>text</code>
                        <p>Normal Text</p>
                    </div>

                    <div className="tag-card">
                        <code>password</code>
                        <p>Password</p>
                    </div>

                    <div className="tag-card">
                        <code>email</code>
                        <p>Email</p>
                    </div>

                    <div className="tag-card">
                        <code>number</code>
                        <p>Numbers</p>
                    </div>

                    <div className="tag-card">
                        <code>date</code>
                        <p>Date Picker</p>
                    </div>

                    <div className="tag-card">
                        <code>file</code>
                        <p>File Upload</p>
                    </div>

                    <div className="tag-card">
                        <code>checkbox</code>
                        <p>Checkbox</p>
                    </div>

                    <div className="tag-card">
                        <code>radio</code>
                        <p>Radio Button</p>
                    </div>
                </div>
            </section>

            {/* Buttons */}
            <section className="cheat-section">
                <h2>12. Buttons</h2>

                <div className="code-box">
                    <pre>{`<button>
    Click Me
</button>

<button type="submit">
    Submit
</button>

<button type="reset">
    Reset
</button>`}</pre>
                </div>
            </section>

            {/* Audio Video */}
            <section className="cheat-section">
                <h2>13. Audio & Video</h2>

                <div className="code-box">
                    <pre>{`<audio controls>
    <source src="music.mp3" type="audio/mpeg" />
</audio>

<video controls width="500">
    <source src="video.mp4" type="video/mp4" />
</video>`}</pre>
                </div>
            </section>

            {/* Comments */}
            <section className="cheat-section">
                <h2>14. Comments</h2>

                <div className="code-box">
                    <pre>{`<!-- This is an HTML comment -->`}</pre>
                </div>
            </section>

            {/* Useful Attributes */}
            <section className="cheat-section">
                <h2>15. Important Attributes</h2>

                <div className="table-wrapper">
                    <table>
                        <thead>
                            <tr>
                                <th>Attribute</th>
                                <th>Purpose</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td><code>id</code></td>
                                <td>Unique element identify karna</td>
                            </tr>

                            <tr>
                                <td><code>class</code></td>
                                <td>CSS styling ke liye</td>
                            </tr>

                            <tr>
                                <td><code>href</code></td>
                                <td>Link ka address</td>
                            </tr>

                            <tr>
                                <td><code>src</code></td>
                                <td>Image/Video/File ka source</td>
                            </tr>

                            <tr>
                                <td><code>alt</code></td>
                                <td>Image ka alternative text</td>
                            </tr>

                            <tr>
                                <td><code>title</code></td>
                                <td>Extra information</td>
                            </tr>

                            <tr>
                                <td><code>name</code></td>
                                <td>Form field identify karna</td>
                            </tr>

                            <tr>
                                <td><code>value</code></td>
                                <td>Input ki value</td>
                            </tr>

                            <tr>
                                <td><code>placeholder</code></td>
                                <td>Input ke andar hint</td>
                            </tr>

                            <tr>
                                <td><code>required</code></td>
                                <td>Field ko compulsory banana</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            {/* HTML Entities */}
            <section className="cheat-section">
                <h2>16. HTML Entities</h2>

                <div className="entity-grid">
                    <div>
                        <code>&amp;lt;</code>
                        <span>&lt;</span>
                    </div>

                    <div>
                        <code>&amp;gt;</code>
                        <span>&gt;</span>
                    </div>

                    <div>
                        <code>&amp;amp;</code>
                        <span>&amp;</span>
                    </div>

                    <div>
                        <code>&amp;copy;</code>
                        <span>©</span>
                    </div>

                    <div>
                        <code>&amp;reg;</code>
                        <span>®</span>
                    </div>

                    <div>
                        <code>&amp;nbsp;</code>
                        <span>Space</span>
                    </div>
                </div>
            </section>

            {/* Important Tags */}
            <section className="cheat-section">
                <h2>17. Most Important HTML Tags</h2>

                <div className="important-tags">
                    <span>&lt;html&gt;</span>
                    <span>&lt;head&gt;</span>
                    <span>&lt;body&gt;</span>
                    <span>&lt;h1&gt;</span>
                    <span>&lt;p&gt;</span>
                    <span>&lt;a&gt;</span>
                    <span>&lt;img&gt;</span>
                    <span>&lt;ul&gt;</span>
                    <span>&lt;ol&gt;</span>
                    <span>&lt;li&gt;</span>
                    <span>&lt;div&gt;</span>
                    <span>&lt;span&gt;</span>
                    <span>&lt;form&gt;</span>
                    <span>&lt;input&gt;</span>
                    <span>&lt;button&gt;</span>
                    <span>&lt;table&gt;</span>
                    <span>&lt;header&gt;</span>
                    <span>&lt;nav&gt;</span>
                    <span>&lt;section&gt;</span>
                    <span>&lt;article&gt;</span>
                    <span>&lt;footer&gt;</span>
                </div>
            </section>

            {/* Footer */}
            <footer className="cheat-footer">
                <h3>Keep Coding 🚀</h3>
                <p>
                    HTML → CSS → JavaScript → React → Node.js
                </p>
            </footer>

        </div>
    );
};

export default Html;

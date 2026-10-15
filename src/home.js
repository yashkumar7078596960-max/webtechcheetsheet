import { Link } from "react-router-dom";
import Carara from "./carara";

function Home() {
    return (
        <div>
            <section className="hero">
                <h1>Learn Coding Easily</h1>

                <p>
                    Learn HTML, CSS, JavaScript, React and Node.js
                </p>

                <Link to="/startlearning">
                    <button className="main-btn">
                        Start Learning
                    </button>
                </Link>
            </section>

            <Carara />
        </div>
    );
}

export default Home;

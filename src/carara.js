
import React from "react";
import { Link } from "react-router-dom";

const Carara = () => {
    const data = [
        {
            hh: "HTML",
            tt: "Learn how to create the structure of a website.",
            bb: "Learn HTML",
            url: "/html"
        },
        {
            hh: "CSS",
            tt: "Learn how to create the structure of a website.",
            bb: "Learn CSS",
            url: "/css"
        },
        {
            hh: "JS",
            tt: "Learn how to create the structure of a website.",
            bb: "Learn JS",
            url: "/javascript"
        },
        {
            hh: "React",
            tt: "Learn how to create the structure of a website.",
            bb: "Learn React",
            url: "/react"
        },
        {
            hh: "Node",
            tt: "Learn how to create the structure of a website.",
            bb: "Learn Node",
            url: "/node"
        }
    ];

    return (
        <>
            <section className="courses">
                <h2>Our Courses</h2>

                <p className="course-text">
                    Start learning web development with simple courses.
                </p>

                <div className="cards">
                    {data.map((a) => (
                        <div className="card" key={a.url}>
                            <h3>{a.hh}</h3>

                            <p>{a.tt}</p>

                            <Link to={a.url}>
                                <button>
                                    {a.bb}
                                </button>
                            </Link>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default Carara;

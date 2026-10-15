import { Link } from 'react-router-dom';

function Nav() {
    return (

<>
        <div className="navbar">

            <div className="logo">
                CodeLearn
            </div>

            <div className="nav-links">

                <Link to="/">
                    Home
                </Link>

                <Link to="/about">
                    About
                </Link>

                <Link to="/contact">
                    Contact
                </Link>

            </div>
        </div>




            <div className='secondnav'>

                <Link to="/html">HTML</Link>
                <Link to="/css">CSS</Link>
                <Link to="/javascript">JavaScript</Link>
                <Link to="/react">React</Link>
                <Link to="/node">Node</Link>
                <Link to="/c">C</Link>
                <Link to="/cpp">C++</Link>
                <Link to="/python">PYTHON</Link>
                <Link to="/java">Java</Link>
                <Link to="/sql">SQL</Link>


            </div>
        </>
    );
}

export default Nav;

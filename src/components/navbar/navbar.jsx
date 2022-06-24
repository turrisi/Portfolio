import { useParams } from "react-router-dom";
import './navbar.css'
import { Link } from 'react-router-dom'

//css menu hover effects (youtube)

const NavBar = () => {
    const { lan } = useParams()
    return (
        <div >
            {lan === "es" ?
                <div className="navbar">
                    <Link to={`/portfolio/${lan}/about`}>
                        <h2>¿Quien soy?</h2>
                    </Link>
                    <Link to={`/portfolio/${lan}/skills`}>
                        <h2>Skills</h2>
                    </Link>
                    <Link to={`/portfolio/${lan}/academics`}>
                        <h2>Estudios</h2>
                    </Link>
                    <Link to={`/portfolio/${lan}/experience`}>
                        <h2>Experiencia</h2>
                    </Link>
                    <Link to={`/portfolio/${lan}/proyects`}>
                        <h2>Proyectos</h2>
                    </Link>
                    <Link to={`/portfolio/${lan}/contact`}>
                        <h2>Contáctame!</h2>
                    </Link>
                </div> :
                <div className="navbar">
                    <Link to={`/portfolio/${lan}/about`}>
                        <h2>Who am I?</h2>
                    </Link>
                    <Link to={`/portfolio/${lan}/skills`}>
                        <h2>Skills</h2>
                    </Link>
                    <Link to={`/portfolio/${lan}/academics`}>
                        <h2>Studies</h2>
                    </Link>
                    <Link to={`/portfolio/${lan}/experience`}>
                        <h2>Experience</h2>
                    </Link>
                    <Link to={`/portfolio/${lan}/proyects`}>
                        <h2>Projects</h2>
                    </Link>
                    <Link to={`/portfolio/${lan}/contact`}>
                        <h2>Contact me!</h2>
                    </Link>
                </div>
            }

        </div>
    )
}

export default NavBar;
import { useParams } from "react-router-dom";
import './navbar.css'
import { Link } from 'react-router-dom'

const NavBar = () => {
    const { lan } = useParams()
    console.log(lan)
    return (
        <div >
            {lan === "es" ?
                <div className="navbar">
                    <h2>¿Quien soy?</h2>
                    <h2>Proyectos</h2>
                    <h2>Estudios</h2>
                    <h2>Experiencia</h2>
                </div> :
                <div className="navbar">
                    <h2>Who I am?</h2>
                    <h2>Projects</h2>
                    <h2>Studies</h2>
                    <h2>Experience</h2>
                </div>
            }

        </div>
    )
}

export default NavBar;
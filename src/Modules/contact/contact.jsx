import NavBar from "../navbar/navbar"
import { Link } from "react-router-dom"
import './contact.css'
import gitIco from '../../assets/gitIco.png'

export const ContactMe = () => {
return(
    <div>
        <NavBar />
        <div className="contacts">
            <Link to="">
            <img src="" alt="git" />
            </Link>
            <Link to="">
            <img src="" alt="" />
            </Link>
            <Link to="">
            <img src="" alt="" />
            </Link>
            <Link to="">
            <img src="" alt="" />
            </Link>
        </div>
    </div>
)
}
export const Contactame = () => {
return(
    <div>
        <NavBar />
    </div>
)
}
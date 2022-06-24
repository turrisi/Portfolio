import NavBar from "../navbar/navbar"
import './contact.css'
import gitIcon from "../../assets/github.png"
import linkedinIcon from "../../assets/linkedin.png"
import emailIcon from "../../assets/email.png"
import { Mailer } from "../mailer/mailer"

export const ContactMe = () => {
    return (
        <div>
            <NavBar />
            <div className="contacts">
                <p>
                <a href='https://github.com/turrisi' target={'_blank'} className='gitField'>
                    <img src={gitIcon} alt="git" className="gitIcon" />
                    <h2 className="gitLink">Github:
                        <h2>'https://github.com/turrisi'</h2>
                    </h2>
                </a>
                </p>
                <p>
                <a href='https://www.linkedin.com/in/alejandroturrisi' target={'_blank'} className='linkedField'>
                    <img src={linkedinIcon} alt="linkedIn" className="linkedinIcon" />
                    <h2>Linkedin:
                        <h2>'https://www.linkedin.com/in/alejandroturrisi'</h2>
                    </h2>
                </a>
                </p>
                <a href='mailto:dip.aturrisi@gmail.com' target={'_blank'} className='emailField'>
                    <img src={emailIcon} alt="email" className="emailIcon" />
                    <h2>e-mail:
                        <h2>'dip.aturrisi@gmail.com'</h2>
                    </h2>
                </a>
                <Mailer />
            </div>
        </div>
    )
}
export const Contactame = () => {
    return (
        <div>
            <NavBar />
            <div className="contacts">
                <a href='https://github.com/turrisi' target={'_blank'} className='gitField'>
                    <img src={gitIcon} alt="git" className="gitIcon" />
                    <h2 className="gitLink">Github:
                        <h2>'https://github.com/turrisi'</h2>
                    </h2>
                </a>
                <a href='https://www.linkedin.com/in/alejandroturrisi' target={'_blank'} className='linkedField'>
                    <img src={linkedinIcon} alt="linkedIn" className="linkedinIcon" />
                    <h2>Linkedin:
                        <h2>'https://www.linkedin.com/in/alejandroturrisi'</h2>
                    </h2>
                </a>
                <a href='mailto:dip.aturrisi@gmail.com' target={'_blank'} className='emailField'>
                    <img src={emailIcon} alt="email" className="emailIcon" />
                    <h2>e-mail:
                        <h2>'dip.aturrisi@gmail.com'</h2>
                    </h2>
                </a>
                <Mailer />
            </div>
        </div>
    )
}
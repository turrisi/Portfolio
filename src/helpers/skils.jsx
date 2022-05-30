import { useParams } from "react-router-dom"
import { Skills, Habilidades } from "../Modules/skills/skills"

const SkilHab = ()=>{
    const lamguage = useParams()
    return(
        <div className="sk">
            {lamguage.lan==="es"
            ? <Habilidades/>
            : <Skills/>}
        </div>
    )
}

export default SkilHab
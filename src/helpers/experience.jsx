import { useParams } from "react-router-dom"
import {Experience, Experiencia} from '../components/experience/experience'

const Expe = ()=>{
    const lamguage = useParams()
    return(
        <div className="me">
            {lamguage.lan==="es"
            ? <Experiencia/>
            : <Experience/>}
        </div>
    )
}

export default Expe
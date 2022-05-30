import { useParams } from "react-router-dom"
import { Abaut, Acerca } from "../Modules/abaut/abaut"

const Quien = ()=>{
    const lamguage = useParams()
    return(
        <div className="me">
            {lamguage.lan==="es"
            ? <Acerca/>
            : <Abaut/>}
        </div>
    )
}

export default Quien
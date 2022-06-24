import { useParams } from "react-router-dom"
import { About, Acerca } from "../components/about/about"

const Quien = ()=>{
    const lamguage = useParams()
    return(
        <div className="me">
            {lamguage.lan==="es"
            ? <Acerca/>
            : <About/>}
        </div>
    )
}

export default Quien
import { useParams } from "react-router-dom"
import {Estudios, Studies} from '../components/studies/studies'

const Academic = ()=>{
    const lamguage = useParams()
    return(
        <div>
            {lamguage.lan==="es"
            ? <Estudios/>
            : <Studies/>}
        </div>
    )
}

export default Academic
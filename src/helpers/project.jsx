import { useParams } from "react-router-dom"
import { Projects, Proyectos } from "../components/projects/projects"

const Project = ()=>{
    const lamguage = useParams()
    return(
        <div className="me">
            {lamguage.lan==="es"
            ? <Proyectos/>
            : <Projects/>}
        </div>
    )
}

export default Project;
import { useParams } from "react-router-dom";
import NavBar from "../navbar/navbar";
import Quien from "../../helpers/quien";
import SkilHab from "../../helpers/skils";
import './portfolio.css';

function Portfolio(){
    const {lan} = useParams()
    return(
        <div className="portfolio"> 
            {/* {lan==="es"?
            <h1> Este es el portfolio </h1>
            : <h1> This is the portfolio </h1>} */}
            <NavBar/>
            <Quien/>
            <SkilHab/>
        </div>
    )
}

export default Portfolio;
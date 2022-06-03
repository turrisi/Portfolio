import { useParams } from "react-router-dom";
import NavBar from "../navbar/navbar";
// import './portfolio.css';

function Portfolio() {
    const { lan } = useParams()
    return (
        <div className="portfolio">
            <NavBar />
            <div className="container">
                {lan === "en"
                    ? <h2 className="cuote">"Do what you love, and you will not work a single day of your life"</h2>
                    : <h2 className="cuote">"Haz lo que amas y no trabajarás un solo día de tu vida"</h2>}
            </div>
        </div>
    )
}

export default Portfolio;
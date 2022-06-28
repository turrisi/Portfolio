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
                    ? <h2 className="cuote" style={
                        {
                            "padding-top": "15%",
                            "margin-left": "3px",
                            "color": "gainsboro",
                            "text-shadow": "0.5rem 0.5rem 0.2rem black",
                            "font-size": "4rem"
                        }
                    }>"Do what you love, and you will not work a single day of your life"</h2>
                    : <h2 className="cuote" style={
                        {
                            "padding-top": "15%",
                            "margin-left": "3px",
                            "color": "gainsboro",
                            "text-shadow": "0.5rem 0.5rem 0.2rem black",
                            "font-size": "4rem"
                        }
                    }>"Haz lo que amas y no trabajarás un solo día de tu vida"</h2>}
            </div>
        </div>
    )
}

export default Portfolio;

<h2 class="cuote" style="
    margin-block: 10%;
    margin-left: 3px;
    color: gainsboro;
    text-shadow: 0.5rem 0.5rem 0.2rem black;
    font-size: 4rem;
">"Do what you love, and you will not work a single day of your life"</h2>
import en from '../../assets/en.png';
import es from '../../assets/es.png';
import { Link } from 'react-router-dom'
import './landing.css'

function Landing() {

    return (
        <div  className='mainDiv'>
            <div class="row" >
                <h1 className='headLine'>    WELCOME / BIENVENIDO    </h1>
            </div>
            <div class="row">
                <h4 className='headLine'>Choose language / Elija el lenguaje</h4>
            </div>
            <div className="row">
                <div className="col">
                    <Link to="/portfolio/en" >
                        <div>
                            <img src={en} alt="english" className='en'/>
                        </div>
                    </Link>
                </div>
                <div className="col">
                    <Link to="/portfolio/es" >
                        <div >
                            <img src={es} alt="spanish" className='es'/>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Landing
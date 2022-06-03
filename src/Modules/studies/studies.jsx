import './studies.css';
import img1 from '../../assets/devCertificate.png';
import img2 from '../../assets/lanCertificate.png';
import NavBar from '../navbar/navbar';

export const Studies = () => {
    return (
        <div>
            <NavBar />
            <div className='container'>
                <div className="studyPage">
                    <h1 className="header">Education</h1>
                    <h2 className="subtitle">This is not over yet! 😁</h2>
                    <div className="soft">
                        <h4 className='title1'>#SoyHenry</h4>
                        <p />
                        <h5>Full Stack web developer</h5>
                        <p />
                        <h6>2021 - 2022</h6>
                    </div>
                    <div className='tec'>
                        <h4 className='title1'>National Technological University (UTN)</h4>
                        <p />
                        <h5>Senior programming technician</h5>
                        <p />
                        <h6>2006 - 2007</h6>
                    </div>
                    <h1 className="header2">Certificates</h1>
                    <div className='imgcont1'>
                        <img className='img' src={img1} alt="certificate1" />
                    </div>
                    <div className='imgcont2'>
                        <a href='https://www.efset.org/cert/X8WjN4' target={'_blank'}>
                            <img className='img' src={img2} alt="certificate2" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export const Estudios = () => {
    return (
        <div>
            <NavBar />
            <div className='container'>
                <div className="studyPage">
                    <h1 className="header">Education</h1>
                    <h2 className="subtitle">¡Todavía falta! 😁</h2>
                    <div className='soft'>
                        <p />
                        <h4 className='title1'>#SoyHenry</h4>
                        <p />
                        <h5 >Full Stack web developer</h5>
                        <p />
                        <h6 >2021 - 2022</h6>
                        <p />
                    </div>
                    <div className='tec'>
                        <p />
                        <h4 className='title1'>Universidad Tecnológica Nacional (UTN)</h4>
                        <p />
                        <h5 >Técnico superior en programación</h5>
                        <p />
                        <h6 >2006 - 2007</h6>
                        <p />
                    </div>
                    <h1 className="header2">Certificates</h1>
                    <div className='imgcont1'>
                        <img className='img' src={img1} alt="certificate1" />
                    </div>
                    <div className='imgcont2'>
                        <a href='https://www.efset.org/cert/X8WjN4' target={'_blank'}>
                            <img className='img' src={img2} alt="certificate2" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
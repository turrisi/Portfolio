import NavBar from "../navbar/navbar"
import ReactPlayer from "react-player"
import pokevideo from "../../assets/poke-pi.mp4"
import funkovideo from "../../assets/funko.mp4"
import bookimage from "../../assets/bookflix.png"
import './projects.css'

export const Projects = () => {
    return (
        <div>
            <NavBar />
            <ul className="projects-container">
                <li className="item-container">
                    <ReactPlayer
                        url={pokevideo}
                        className='react-player'
                        controls={true}
                        volume={0.1}
                    />
                    <h2>👉Pokemon app👈</h2>
                    <h6>SPA made as an individual project for Henry's bootcamp. Consumes an external API and a SQL database. It allows filters, orders and searches, as well as the creation of new pokemons with a controlled form.
                        <h3>Used technologys:</h3>
                        <h5>Node.js, Javascript, Express, PostgreSQL, React, Redux, CSS</h5>
                    </h6>
                </li>
                <li className="item-container">
                    <ReactPlayer
                        url={funkovideo}
                        className='react-player'
                        playing={true}
                        controls={true}
                        volume={0.1}
                        loop={true}
                        playbackRate={2}
                    />
                    <h2>👉Funkommerce👈</h2>
                    <h6>Henry's first bootcamp group project. It consists of an e-commerce for funko products. In addition to the typical filters and sorts, this app has a sign in, and the corresponding log in. It has an SQL database to store user data such as purchases, carts, favorites, etc. It has a payment gateway so that users can pay by credit card and a chatbot so that users can interact with the system..
                        <h3>Used technologys:</h3>
                        <h5>Node.js, Typescript, Express, Prisma, React, Redux, CSS, JWT, Stripe, Aut0</h5>
                    </h6>
                </li>
                <li className="item-container">
                    <a href="https://booksflix.vercel.app/" target={'_blank'}>
                        <img src={bookimage} alt="bookflix" className="bookLink" />
                    </a>
                    <h2>👉Bookflix👈</h2>
                    <h6>Final group project at Henry's bootcamp. It consists of a streaming platform for books. In addition to the typical filters and sorts, this app has a sign in (own or through social networks), and the corresponding log in. It has a SQL database to store user data and book information and a bucket for .epub files and corresponding images. It has a payment gateway so that users can pay by credit card and a chatbot so that users can interact with the system. In addition, depending on the plan to which he subscribes, the user can choose to read the book online or download it. This platform has an independent application for administrators, where you can make changes to the databases, send emails to users with new additions, etc.
                        <h3>Used technologys:</h3>
                        <h5>Node.js, Typescript, Express, Prisma, React (con Vite), Redux, CSS, Chakra, JWT, Stripe, Aut0</h5>
                    </h6>
                </li>
            </ul>
        </div >
    )
}

export const Proyectos = () => {
    return (
        <div>
            <NavBar />
            <ul className="projects-container">
                <li className="item-container">
                    <ReactPlayer
                        url={pokevideo}
                        className='react-player'
                        controls={true}
                        volume={0.1}
                    />
                    <h2>👉Pokemon app👈</h2>
                    <h6>SPA realizada como proyecto individual para bootcamp de Henry. Consume una API externa y una base de datos SQL. Permite filtrados, ordenamientos y búsquedas, así como la creación de nuevos pokemons con un formulario controlado.
                        <h3>Tecnologías utilizadas:</h3>
                        <h5>Node.js, Javascript, Express, PostgreSQL, React, Redux, CSS</h5>
                    </h6>
                </li>
                <li className="item-container">
                    <ReactPlayer
                        url={funkovideo}
                        className='react-player'
                        controls={true}
                        volume={0.1}
                        playing={true}
                        loop={true}
                        playbackRate={2}
                    />
                    <h2>👉Funkommerce👈</h2>
                    <h6>Primer proyecto grupal en bootcamp de Henry. Consiste en un e-commerce para productos funkos. Ademas de los tipicos filtrados y ordenamientos esta app posee un sign in, y el correspondiente log in. Posee una base de datos SQL para almacenar los datos de los usuarios como sus compras, carritos, favoritos, etc. Cuenta con una pasarela de pagos para que los usuarios puedan pagar con tarjeta de credito y con un chatbot para que los usuarios puedan interactuar con el sistema.
                        <h3>Tecnologías utilizadas:</h3>
                        <h5>Node.js, Typescript, Express, Prisma, React, Redux, CSS, JWT, Stripe, Aut0</h5>
                    </h6>
                </li>
                <li className="item-container">
                    <a href="https://booksflix.vercel.app/" target={'_blank'}>
                        <img src={bookimage} alt="bookflix" className="bookLink" />
                    </a>
                    <h2>👉Bookflix👈</h2>
                    <h6>Proyecto grupal final en bootcamp de Henry. Consiste en una plataforma de streaming para libros. Ademas de los tipicos filtrados y ordenamientos esta app posee un sign in (propio o a travez de redes sociales), y el correspondiente log in. Posee una base de datos SQL para almacenar los datos de los usuarios e informacion de los libros y un bucket para los archivos .epub y las imágenes correspondientes. Cuenta con una pasarela de pagos para que los usuarios puedan pagar con tarjeta de credito y con un chatbot para que los usuarios puedan interactuar con el sistema. Además, dependiendo del plan al que se subscribe, el usuario puede optar por leer el libro on line o descargarlo. Esta plataforma posee una aplicación independiente para los administradores, donde se pueden realizar cambios a las bases de datos, enviar mails a los usuarios con nuevas incorporaciones, etc.
                        <h3>Tecnologías utilizadas:</h3>
                        <h5>Node.js, Typescript, Express, Prisma, React (con Vite), Redux, CSS, Chakra, JWT, Stripe, Aut0</h5>
                    </h6>
                </li>
            </ul>
        </div>
    )
}
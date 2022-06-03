import { Routes, Route } from 'react-router-dom'
import Portfolio from './Modules/portfolio/portfolio'
import { About } from './Modules/about/about'
import './App.css'
import Landing from './Modules/landing/landing'
import NavBar from './Modules/navbar/navbar'
import Academic from './helpers/studies'
import Exp from './helpers/experience'
import SkilHab from './helpers/skils'
import Contact from './helpers/contact'


function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element ={<Landing/>} />
        <Route path="/portfolio/:lan" element = {<NavBar/>} />
        <Route path="/portfolio/:lan" element = {<Portfolio/>} />
        <Route path="/portfolio/:lan/about" element = {<About/>} />
        <Route path="/portfolio/:lan/skills" element = {<SkilHab/>} />
        <Route path="/portfolio/:lan/academics" element = {<Academic/>} />
        <Route path="/portfolio/:lan/experience" element = {<Exp/>} />
        <Route path="/portfolio/:lan/contact" element = {<Contact/>} />
      </Routes>
    </div>
  )
}

export default App

import { Routes, Route } from 'react-router-dom'
import Portfolio from './Modules/portfolio'
import './App.css'
import Landing from './Modules/landing'

function App() {


  return (
    <div>
      <Routes>
        <Route path="/" element ={<Landing/>} />
        <Route path="/portfolio/:lan" element = {<Portfolio/>} />
      </Routes>
    </div>
  )
}

export default App

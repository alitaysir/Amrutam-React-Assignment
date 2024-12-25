import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Docdata from "./pages/Docdata"
import Navbar from './components/Navbar'
import Home from './pages/Home'



const App = () => {
  return (
    <div>
    <Navbar/>
    <Routes>
      <Route path='' element={<Home/>} />
      <Route path="/doctors/:id" element={<Docdata/>}/>
    </Routes>
    </div>

  )
}

export default App
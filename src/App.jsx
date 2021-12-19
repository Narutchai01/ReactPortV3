import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Navbar from './componacnt/Nav'
import Home from './componacnt/Home'
import About from './componacnt/About'
import Certificate from './componacnt/Certificate'
import Contact from './componacnt/Contact'
// import Last from './componacnt/last'
import {BsFacebook , BsInstagram , BsGithub} from 'react-icons/bs'








function App() {

  return (
    <div className="App">

      <Navbar />
      <a name="/"><Home /></a>
      <a name="About"> <About /></a>
      <a name="Certificate"> <Certificate /></a>
      <a name="Contact"> <Contact /></a>
      <footer>
        <div className="footer">
          <p>&copy;Narutchai Mauensaen 2021</p>
          <div className="social-footer">
              <a href="https://www.facebook.com/narutchai.mauensaen/" ><BsFacebook /></a>
              <a href="https://www.instagram.com/naruaichai/" ><BsInstagram /></a>
              <a href="https://github.com/Narutchai01" ><BsGithub /></a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

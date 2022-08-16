import { HashRouter, Routes, Route } from 'react-router-dom'
import Navbar from 'src/components/NavBar/NavBar'
import Home from 'src/pages/Home'
import About from 'src/pages/About'

const Main = () => {
  return (
    <div>
      <HashRouter>
      <Navbar />
        <div className='content'>
          <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          </Routes>
        </div>
        </HashRouter>
    </div>
  )
}

export default Main

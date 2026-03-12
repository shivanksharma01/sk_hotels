import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import Room from './pages/Room'
import Booking from './pages/Booking'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import About from './pages/About'

function App() {

  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={
          <>
            <div className="pt-15">
              <Hero/>
            </div>
            <Room/>
          </>
        } />
        <Route path="/booking" element={<Booking />} />
        <Route path="/booking/:roomId" element={<Booking />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />

      </Routes>
      <Footer/>
    </Router>
  )
}

export default App

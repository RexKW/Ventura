
import './App.css'
import Navbar from './components/Navbar'
import LandingPage from './pages/LandingPage'
import { ParallaxProvider } from 'react-scroll-parallax';

function App() {

  return (
    <>
    <ParallaxProvider>
      <Navbar/>
      <LandingPage/>
    </ParallaxProvider>
    </>
  )
}

export default App

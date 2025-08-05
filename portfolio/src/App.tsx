import Navbar from './components/Navbar'
import HeroHighlightDemo from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
    <div className="overflow-x-hidden">
      <Navbar />
      <main>
        <HeroHighlightDemo />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </div>
    </>
  )
}

export default App

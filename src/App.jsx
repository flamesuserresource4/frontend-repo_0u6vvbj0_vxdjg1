import Navbar from './components/Navbar'
import Hero from './components/Hero'
import StoryScroll from './components/StoryScroll'
import AngledShowcase from './components/AngledShowcase'
import DemoCTA from './components/DemoCTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#0b0f17] text-slate-200">
      <Navbar />
      <main>
        <Hero />
        <StoryScroll />
        <AngledShowcase />
        <DemoCTA />
      </main>
      <Footer />
    </div>
  )
}

export default App

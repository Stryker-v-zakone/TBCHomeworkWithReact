import { ThemeProvider } from './context/ThemeContext';
import './App.css';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import {
  Hero,
  About,
  Skills,
  Projects,
  Experience,
  Contact
} from './components/sections';

function App() {
  return (
    <ThemeProvider>
      <div className="portfolio-app">
        {/* Background ambient lighting effects */}
        <div className="ambient-glow top-right" aria-hidden="true" />
        <div className="ambient-glow bottom-left" aria-hidden="true" />

        {/* Header Navigation */}
        <Navbar />

        {/* Main Sections */}
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;

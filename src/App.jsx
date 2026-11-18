import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import './App.css';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { ScrollToTop } from './components/common';
import { HomePage, UsersPage, NotFoundPage } from './pages';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="portfolio-app">
          {/* Background ambient lighting effects */}
          <div className="ambient-glow top-right" aria-hidden="true" />
          <div className="ambient-glow bottom-left" aria-hidden="true" />

          {/* Header Navigation */}
          <Navbar />

          {/* Main Routed Content */}
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/users" element={<UsersPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>

          {/* Footer */}
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

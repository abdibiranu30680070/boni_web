import { useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Products from './components/Products';
import About from './components/About';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />

      {currentPage === 'home' && (
        <>
          <Hero />
          <Products />
          <Gallery />
        </>
      )}

      {currentPage === 'products' && <Products />}
      {currentPage === 'about' && <About />}
      {currentPage === 'gallery' && <Gallery />}
      {currentPage === 'contact' && <Contact />}

      <Footer />
    </div>
  );
}

export default App;

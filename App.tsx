import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Journey from './components/Journey';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import NeuralNetworkBackground from './components/NeuralNetworkBackground';

import FloatingHomeButton from './components/FloatingHomeButton';

const App: React.FC = () => {
  return (
    <div className="bg-[#030409] text-text-primary overflow-x-hidden">
      <NeuralNetworkBackground />
      <FloatingHomeButton />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Header />
        <main>
          <Hero />
          <Journey />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
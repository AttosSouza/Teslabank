import React from 'react';
import { Footer, Header } from './components';
import {
  About,
  Blog,
  Cards,
  Download,
  Faq,
  Hero,
  Innovation,
  Testimonials,
} from './sections';

const App = () => {
  return (
    <main>
      <div className="heroBackground">
        <Header />
        <Hero />
      </div>
      <About />
      <Innovation />
      <Testimonials />
      <Cards />
      <Download />
      <Blog />
      <Faq />
      <Footer />
    </main>
  );
};

export default App;

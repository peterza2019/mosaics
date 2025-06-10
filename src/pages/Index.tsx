
import Hero from '../components/Hero';
import About from '../components/About';
import Tutorial from '../components/Tutorial';
import Gallery from '../components/Gallery';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Tutorial />
      <Gallery />
       <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;

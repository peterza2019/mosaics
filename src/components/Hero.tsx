
import { Waves, Palette, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50">
      {/* Animated background waves */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-blue-300 to-transparent animate-pulse"></div>
        <div className="absolute bottom-8 left-0 w-full h-24 bg-gradient-to-t from-cyan-300 to-transparent animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-16 left-0 w-full h-16 bg-gradient-to-t from-teal-300 to-transparent animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="mb-8 flex justify-center space-x-4 animate-fade-in">
          <div className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:scale-110 transition-transform duration-300">
            <Waves className="w-8 h-8 text-blue-600" />
          </div>
          <div className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:scale-110 transition-transform duration-300" style={{ animationDelay: '0.5s' }}>
            <Palette className="w-8 h-8 text-teal-600" />
          </div>
          <div className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:scale-110 transition-transform duration-300" style={{ animationDelay: '1s' }}>
            <Heart className="w-8 h-8 text-cyan-600" />
          </div>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-in bg-gradient-to-r from-blue-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
          Arlene's
        </h1>
        
        <h2 className="text-2xl md:text-4xl font-light mb-8 text-gray-700 animate-fade-in" style={{ animationDelay: '0.5s' }}>
          Aspiring Mosaic Artist , Ocean Soul , Loving Mom
        </h2>
        
        <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '1s' }}>
          This is my creative space, where I share my passion for mosaic art and the joy it brings to my life. 
          I don’t create to sell, every piece is made from the heart, simply for the love of it.
          Creating beautiful mosaic art & gifting them to friends and loved ones, brings me inner piece and warmth.
          <br />
          Inspired by the coastal beauty of Amanzimtoti, South Africa. 
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in" style={{ animationDelay: '1.5s' }}>
          <Link 
            to="/showcase-gallery"
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-teal-500 text-white rounded-full text-lg font-medium hover:scale-105 hover:shadow-lg transition-all duration-300 hover:from-blue-600 hover:to-teal-600"
          >
            Inspiration Gallery
          </Link>
          <Link 
            to="#contact"
            className="px-8 py-4 bg-white/30 backdrop-blur-sm border-2 border-white/50 text-gray-700 rounded-full text-lg font-medium hover:scale-105 hover:bg-white/40 transition-all duration-300"
          >
            Get In Touch
          </Link>
        </div>
        
        {/* Quick Navigation Links */}
        <div className="mt-16 flex flex-wrap justify-center gap-4 animate-fade-in" style={{ animationDelay: '2s' }}>
          <Link 
            to="/art-supplies"
            className="px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full text-gray-700 hover:bg-white/30 transition-all duration-300 hover:scale-105"
          >
            Mosaic Art Supplies
          </Link>
          <Link 
            to="/art-kits"
            className="px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full text-gray-700 hover:bg-white/30 transition-all duration-300 hover:scale-105"
          >
            Mosaic Art Starter Kits
          </Link>
        </div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-blue-300 rounded-full animate-bounce opacity-60"></div>
      <div className="absolute top-40 right-20 w-6 h-6 bg-teal-300 rounded-full animate-bounce opacity-60" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-40 left-20 w-5 h-5 bg-cyan-300 rounded-full animate-bounce opacity-60" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-20 right-10 w-3 h-3 bg-blue-400 rounded-full animate-bounce opacity-60" style={{ animationDelay: '0.5s' }}></div>
    </section>
  );
};

export default Hero;

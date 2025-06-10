
import { Heart, Waves, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-teal-900 text-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-to-br from-blue-400 to-teal-400 rounded-lg">
                <Waves className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Arlene</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Creating beautiful mosaic art inspired by the ocean and nature of Amanzimtoti, 
              South Africa. Where creativity meets the endless rhythm of the sea.
            </p>
            <div className="flex items-center space-x-2 text-gray-300">
              <Heart className="w-4 h-4 text-red-400" />
              <span className="text-sm">Made with love by the ocean</span>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-gray-300 hover:text-white transition-colors duration-300 hover:underline">
                  About Arlene
                </a>
              </li>
              <li>
                <Link to="/showcase-gallery" className="text-gray-300 hover:text-white transition-colors duration-300 hover:underline">
                  Showcase Gallery
                </Link>
              </li>
              <li>
                <Link to="/art-supplies" className="text-gray-300 hover:text-white transition-colors duration-300 hover:underline">
                  Art Supplies
                </Link>
              </li>
              <li>
                <Link to="/art-kits" className="text-gray-300 hover:text-white transition-colors duration-300 hover:underline">
                  Art Kits
                </Link>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors duration-300 hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold">Get In Touch</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">Amanzimtoti, South Africa</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-teal-400" />
                <span className="text-gray-300">arlene@mosaicart.co.za</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-cyan-400" />
                <span className="text-gray-300">+27 (0)31 000 0000</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Arlene Mosaic Art. All rights reserved. | Crafted with passion in Amanzimtoti
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

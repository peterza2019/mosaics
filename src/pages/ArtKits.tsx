
import { ArrowLeft, Package, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const ArtKits = () => {
  const kits = [
    {
      id: 1,
      name: "Ocean-Inspired Mosaic Kit 1",
      description: "Everything you need to create your first mosaic artwork. Inspired by Arlene's coastal designs, this kit brings the beauty of Amanzimtoti to your home.",
      image: "/images/shell.jpg",
      level: "Beginner",
      includes: ["Pre-cut glass tiles", "Wooden base", "Adhesive", "Grout", "Step-by-step tutorial"]
    },
    {
      id: 2,
      name: "Ocean-Inspired Mosaic Kit 2",
      description: "Everything you need to create your first mosaic artwork. Inspired by Arlene's coastal designs, this kit brings the beauty of Amanzimtoti to your home.",
      image: "/images/starfish.jpg",
      level: "Beginner",
      includes: ["Pre-cut glass tiles", "Wooden base", "Adhesive", "Grout", "Step-by-step tutorial"]
    },
    {
      id: 3,
      name: "Ocean-Inspired Mosaic Kit 3",
      description: "Capture the beauty of the ocean like Arlene does. This kit includes everything you need to start your mosaic journey.",
      image: "/images/sandals.jpg",
      level: "Beginner",
      includes: ["Pre-cut glass tiles", "Wooden base", "Adhesive", "Grout", "Step-by-step tutorial"]
    },
    {
      id: 4,
      name: "Ocean-Inspired Mosaic Kit 4",
      description: "Dive into the blues and greens of the ocean with this comprehensive kit. Create artwork that captures the essence of coastal South Africa.",
      image: "/images/seahorse.jpg",
      level: "Beginner",
      includes: ["Pre-cut glass tiles", "Wooden base", "Adhesive", "Grout", "Step-by-step tutorial"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-50 to-white">
      {/* Header */}
      <div className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <Link to="/" className="inline-flex items-center space-x-2 text-cyan-600 hover:text-cyan-800 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-600 via-teal-600 to-blue-600 bg-clip-text text-transparent">
            Starter Mosaic Kits
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Start your artistic journey with our carefully curated beginner-friendly mosaic art kits. 
            Each kit is designed to help you explore different mediums and techniques.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-teal-500 mx-auto rounded-full mt-8"></div>
        </div>
      </section>

      {/* Kits Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {kits.map((kit, index) => (
              <div 
                key={kit.id} 
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={kit.image} 
                    alt={kit.name}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="flex items-center space-x-1 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-cyan-700">
                      <Star className="w-3 h-3" />
                      <span>{kit.level}</span>
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-3 group-hover:text-cyan-600 transition-colors duration-300">
                    {kit.name}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {kit.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-700 mb-3 flex items-center space-x-2">
                      <Package className="w-4 h-4" />
                      <span>What's Included:</span>
                    </h4>
                    <ul className="space-y-1">
                      {kit.includes.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-sm text-gray-600 flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <button className="w-full px-4 py-3 bg-gradient-to-r from-cyan-500 to-teal-500 text-white rounded-lg hover:scale-105 transition-all duration-300 hover:from-cyan-600 hover:to-teal-600 font-medium">
                    Release Date August 2025
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ArtKits;

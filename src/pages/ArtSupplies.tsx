
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const ArtSupplies = () => {
  const supplies = [
    {
      id: 1,
      name: "Professional Sketchbook Set",
      description: "High-quality sketchbooks with various paper textures, perfect for planning your mosaic designs and sketching inspiration from nature.",
      image: "/images/4.webp",
      price: "From R450"
    },
    {
      id: 2,
      name: "Mosaic Tile Collection",
      description: "Curated collection of glass and ceramic tiles in ocean-inspired colors. Perfect for creating your own coastal masterpieces.",
      image: "/images/4.webp",
      price: "From R550"
    },
    {
      id: 3,
      name: "Artist Brush Set",
      description: "Premium brushes for detail work and grout application. Essential tools for adding finishing touches to your mosaic creations.",
      image: "/images/4.webp",
      price: "From R450"
    },
    {
      id: 4,
      name: "Adhesive & Grout Kit",
      description: "Professional-grade adhesives and grouts specially selected for mosaic work. Includes tools for proper application and finishing.",
      image: "/images/4.webp",
      price: "From R650"
    },
    {
      id: 5,
      name: "Cutting Tools Set",
      description: "Precision tools for cutting and shaping tiles. Includes nippers, score-and-break tools, and safety equipment for your mosaic projects.",
      image: "/images/4.webp",
      price: "From R520"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white">
      {/* Header */}
      <div className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <Link to="/" className="inline-flex items-center space-x-2 text-teal-600 hover:text-teal-800 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-teal-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
            Mosaic Art Supplies
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the essential tools and materials that bring mosaic art to life. Each item has been carefully selected to help you create beautiful, lasting artwork.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-blue-500 mx-auto rounded-full mt-8"></div>
        </div>
      </section>

      {/* Supplies Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {supplies.map((supply, index) => (
              <div 
                key={supply.id} 
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={supply.image} 
                    alt={supply.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-teal-700">
                      {supply.price}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-teal-600 transition-colors duration-300">
                    {supply.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {supply.description}
                  </p>
                  <button className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-gradient-to-r from-teal-500 to-blue-500 text-white rounded-lg hover:scale-105 transition-all duration-300 hover:from-teal-600 hover:to-blue-600">
                    <span>Available August 2025 </span>
                    <ExternalLink className="w-4 h-4" />
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

export default ArtSupplies;

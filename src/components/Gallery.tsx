
import { Eye, Heart, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Gallery = () => {
  const artworks = [
    {
      id: 1,
      title: "Ocean Waves",
      description: "Inspired by the eternal dance of waves against the Amanzimtoti shore",
      image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=800&q=80",
      category: "Ocean Series"
    },
    {
      id: 2,
      title: "Coastal Sunrise",
      description: "Capturing the golden hour as it paints the South African coastline",
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&w=800&q=80",
      category: "Nature Series"
    },
    {
      id: 3,
      title: "Tidal Pools",
      description: "The intricate beauty found in nature's small sanctuaries",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      category: "Ocean Series"
    },
    {
      id: 4,
      title: "African Blooms",
      description: "Celebrating the vibrant flora of our beautiful continent",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=800&q=80",
      category: "Nature Series"
    },
    {
      id: 5,
      title: "Forest Light",
      description: "Where sunlight meets shadow in perfect harmony",
      image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=800&q=80",
      category: "Nature Series"
    },
    {
      id: 6,
      title: "Coral Dreams",
      description: "An underwater fantasy in mosaic form",
      image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=800&q=80",
      category: "Ocean Series"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore a collection of mosaic artworks inspired by the ocean, nature, and the vibrant life of coastal South Africa
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto rounded-full mt-8"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artworks.map((artwork, index) => (
            <div 
              key={artwork.id} 
              className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={artwork.image} 
                  alt={artwork.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-4">
                    <button className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:scale-110 transition-transform duration-300">
                      <Eye className="w-5 h-5 text-white" />
                    </button>
                    <button className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:scale-110 transition-transform duration-300">
                      <Heart className="w-5 h-5 text-white" />
                    </button>
                    <button className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:scale-110 transition-transform duration-300">
                      <Share2 className="w-5 h-5 text-white" />
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="mb-2">
                  <span className="text-sm text-teal-600 font-medium bg-teal-50 px-3 py-1 rounded-full">
                    {artwork.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-teal-600 transition-colors duration-300">
                  {artwork.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {artwork.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <Link 
            to="/showcase-gallery"
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-teal-500 text-white rounded-full text-lg font-medium hover:scale-105 hover:shadow-lg transition-all duration-300 hover:from-blue-600 hover:to-teal-600"
          >
            View Full Gallery
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Gallery;

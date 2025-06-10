
import { ArrowLeft, Eye, Heart, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const ShowcaseGallery = () => {
  const artworks = [
    {
      id: 1,
      title: "Ocean Waves Mosaic",
      description: "A mesmerizing mosaic capturing the eternal dance of waves against the Amanzimtoti shore, using blues and whites to represent the endless ocean.",
      image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=800&q=80",
      category: "Abstract"
    },
    {
      id: 2,
      title: "Coastal Sunrise",
      description: "This piece captures the golden hour as it paints the South African coastline, with warm oranges and soft yellows creating a peaceful morning scene.",
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&w=800&q=80",
      category: "Nature"
    },
    {
      id: 3,
      title: "Tidal Pool Reflection",
      description: "Inspired by the intricate beauty found in nature's small sanctuaries, this mosaic celebrates the delicate ecosystem of coastal tidal pools.",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      category: "Nature"
    },
    {
      id: 4,
      title: "African Blooms",
      description: "A vibrant celebration of South African flora, featuring the rich colors and textures of indigenous flowers in intricate mosaic detail.",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=800&q=80",
      category: "Nature"
    },
    {
      id: 5,
      title: "Geometric Harmony",
      description: "A minimalist approach to mosaic art, exploring the beauty of simple geometric patterns and the interplay of light and shadow.",
      image: "https://images.unsplash.com/photo-1486718448742-163732cd1544?auto=format&fit=crop&w=800&q=80",
      category: "Minimalism"
    },
    {
      id: 6,
      title: "Digital Art Inspiration",
      description: "A modern take on traditional mosaic art, where digital tools meet handcrafted techniques to create contemporary masterpieces.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
      category: "Abstract"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <div className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <Link to="/" className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
            Showcase Gallery
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore Arlene's collection of mosaic artworks, each piece telling a unique story inspired by the ocean, nature, and the vibrant life of coastal South Africa.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto rounded-full mt-8"></div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {artworks.map((artwork, index) => (
              <div 
                key={artwork.id} 
                className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in"
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
                  <div className="mb-3">
                    <span className="text-sm text-teal-600 font-medium bg-teal-50 px-3 py-1 rounded-full">
                      {artwork.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-teal-600 transition-colors duration-300">
                    {artwork.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {artwork.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShowcaseGallery;

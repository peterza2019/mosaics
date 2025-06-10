
import { CheckCircle, Palette, Sparkles } from 'lucide-react';

const Tutorial = () => {
  const steps = [
    {
      id: 1,
      title: "What is a Mosaic?",
      description: "Select a sturdy surface like wood, canvas board, or terracotta pot for your mosaic foundation.",
      image: "images/1.webp"
    },
    {
      id: 2,
      title: "The Language of Mosaics",
      description: "Sketch your design lightly on the base. Start simple with geometric shapes or nature motifs.",
      image: "images/2.webp"
    },
    {
      id: 3,
      title: "Supply List for DIY Mosaic Projects",
      description: "Collect colorful tiles, broken ceramics, or glass pieces. Sort them by color and size.",
      image: "images/3.webp"
    },
    {
      id: 4,
      title: "Other Items You Might Find Helpful",
      description: "Set up a well-lit area with newspaper, safety glasses, and all your tools within reach.",
      image: "images/4.webp"
    },
    {
      id: 5,
      title: "Planning your Design",
      description: "Use tile nippers to cut pieces to size. Always wear safety glasses and work slowly.",
      image: "images/5.webp"
    },
    {
      id: 6,
      title: "Starting Your Project",
      description: "Spread a thin, even layer of tile adhesive on a small section of your base.",
      image: "images/6.webp"
    },
    {
      id: 7,
      title: "Figure Out Your Design",
      description: "Start from the center or focal point, pressing each piece firmly into the adhesive.",
      image: "images/7.webp"
    },
    {
      id: 8,
      title: "Glue Your Pieces Down",
      description: "Continue adding pieces section by section, maintaining consistent spacing between tiles.",
      image: "images/8.webp"
    },
    {
      id: 9,
      title: "Add the Grout",
      description: "Play with colors and textures to create flowing patterns inspired by ocean waves.",
      image: "images/9.webp"
    },
    {
      id: 10,
      title: "Display it!",
      description: "Allow your mosaic to dry completely for 24 hours before moving to the next step.",
      image: "images/9.webp"
    },
   
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 via-white to-teal-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex justify-center items-center space-x-3 mb-6">
            <div className="p-3 bg-gradient-to-br from-blue-400 to-teal-400 rounded-full">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
              Create Your First Mosaic
            </h2>
            <div className="p-3 bg-gradient-to-br from-teal-400 to-cyan-400 rounded-full">
              <Palette className="w-6 h-6 text-white" />
            </div>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Follow Arlene's step-by-step guide to create your very own mosaic masterpiece. 
            Perfect for beginners wanting to dive into the magical world of mosaic art!
            These 10 simple steps will guide you through creating your first beautiful mosaic. 
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={step.id} 
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Step Number Badge */}
              <div className="absolute top-4 left-4 z-10 w-8 h-8 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">{step.id}</span>
              </div>

              {/* Completion Indicator */}
              <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <CheckCircle className="w-6 h-6 text-green-500" />
              </div>

              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={step.image} 
                  alt={step.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Progress Bar */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-200">
                <div 
                  className="h-full bg-gradient-to-r from-blue-500 to-teal-500 transition-all duration-500 group-hover:from-teal-500 group-hover:to-cyan-500"
                  style={{ width: `${(step.id / 12) * 100}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-br from-blue-100 via-teal-100 to-cyan-100 rounded-3xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Remember, every expert was once a beginner!</h3>
            <p className="text-gray-600 mb-6">
              Ready to Start Your Journey?
              
              
              
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#contact"
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-teal-500 text-white rounded-full font-medium hover:scale-105 hover:shadow-lg transition-all duration-300"
              >
                Browse Supplies
              </a>
              <a 
                href="/art-kits"
                className="px-8 py-3 bg-white/50 backdrop-blur-sm border-2 border-white/70 text-gray-700 rounded-full font-medium hover:scale-105 hover:bg-white/70 transition-all duration-300"
              >
                Browse Starter Kits
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tutorial;
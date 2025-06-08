
import { MapPin, Waves, Users, Sparkles } from 'lucide-react';

const About = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            Meet Arlene
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex items-start space-x-4 group">
              <div className="p-3 bg-blue-100 rounded-full group-hover:scale-110 transition-transform duration-300">
                <MapPin className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Coastal Inspiration</h3>
                <p className="text-gray-600 leading-relaxed">
                  Based in the beautiful coastal town of Amanzimtoti, South Africa, where the Indian Ocean meets endless creativity. 
                  The rhythm of the waves and the colors of the shore flow through every piece I create.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 group">
              <div className="p-3 bg-teal-100 rounded-full group-hover:scale-110 transition-transform duration-300">
                <Waves className="w-6 h-6 text-teal-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Ocean & Nature</h3>
                <p className="text-gray-600 leading-relaxed">
                  My art is deeply inspired by the natural world around me. From the shifting blues of the ocean 
                  to the warm earth tones of the African landscape, nature guides every color choice and pattern.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 group">
              <div className="p-3 bg-cyan-100 rounded-full group-hover:scale-110 transition-transform duration-300">
                <Users className="w-6 h-6 text-cyan-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Community Heart</h3>
                <p className="text-gray-600 leading-relaxed">
                  As a warm, loving soul, I believe art has the power to bring people together. 
                  I love helping others discover their creative potential and building connections through shared artistic experiences.
                </p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-100 via-teal-100 to-cyan-100 rounded-3xl p-8 hover:scale-105 transition-transform duration-500">
              <div className="text-center space-y-6">
                <div className="mx-auto w-32 h-32 bg-gradient-to-br from-blue-200 to-teal-200 rounded-full flex items-center justify-center mb-6">
                  <Sparkles className="w-16 h-16 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Mosaic Magic</h3>
                <p className="text-gray-600 leading-relaxed">
                  "Every broken piece has the potential to become part of something beautiful. 
                  That's the magic of mosaic art – taking fragments and creating wholeness, 
                  just like life itself."
                </p>
                <div className="text-right text-teal-600 font-medium">- Arlene</div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-300 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-teal-300 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

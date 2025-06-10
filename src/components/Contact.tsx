
import { Mail, Phone, MapPin, MessageCircle, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-teal-50 via-blue-50 to-cyan-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            Let's Create Together
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Whether you're interested learning about mosaic art, need help with a project,
            or simply want to connect, I'd love to hear from you!
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto rounded-full mt-8"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Get In Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4 group">
                  <div className="p-3 bg-blue-100 rounded-full group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Location</h4>
                    <p className="text-gray-600">Amanzimtoti, South Africa</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 group">
                  <div className="p-3 bg-teal-100 rounded-full group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Email</h4>
                    <p className="text-gray-600">xxxx@xxxxx.lol</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 group">
                  <div className="p-3 bg-cyan-100 rounded-full group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-6 h-6 text-cyan-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Phone</h4>
                    <p className="text-gray-600">+27 (0)31 xxx 0xxx</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 group">
                  <div className="p-3 bg-purple-100 rounded-full group-hover:scale-110 transition-transform duration-300">
                    <MessageCircle className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">WhatsApp</h4>
                    <p className="text-gray-600">Available for quick chats</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-100 to-teal-100 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Comming Soon</h3>
              <ul className="space-y-3 text-gray-700">

                  <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                  <span>Free Monthly Tips & Tricks - Comming Soon</span>
                </li>

                 <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                  <span>Mosaic Art Supplies - August 2025</span>
                </li>
                
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                  <span>Mosaic Art Starter Kits - August 2025</span>
                </li>
               
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                  <span>Mosaic Art Workshops - 2026</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                  <span>Mosaic Art Therapy - 2026</span>
                </li>
               
               
              </ul>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Send a Message</h3>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Your last name"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="What would you like to talk about?"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea 
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Tell me about your project or just say hello!"
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full flex items-center justify-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-teal-500 text-white rounded-lg font-medium hover:scale-105 hover:shadow-lg transition-all duration-300 hover:from-blue-600 hover:to-teal-600"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

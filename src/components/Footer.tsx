import { ShoppingBag, Phone, MapPin, Heart, Mail, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  const quickLinks = ['Home', 'Products', 'About Us', 'Gallery', 'Contact'];
  const services = ['Purchase Items', 'Rental Services', 'Custom Orders', 'Traditional Clothing', 'Crochet Pieces'];
  
  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 relative overflow-hidden">
      {/* Background with Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)'
        }}
      ></div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-emerald-900/80 via-gray-900/90 to-amber-900/70 pointer-events-none"></div>

      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-emerald-500 rounded-full blur-3xl opacity-10 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-amber-500 rounded-full blur-3xl opacity-10 animate-pulse"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="relative">
                <ShoppingBag className="w-8 h-8 text-emerald-400 animate-bounce" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-amber-400 rounded-full animate-ping"></div>
              </div>
              <h3 className="text-2xl font-extrabold text-white tracking-wide bg-gradient-to-r from-white to-emerald-200 bg-clip-text text-transparent">
                Bonny Design
              </h3>
            </div>
            <p className="text-sm leading-relaxed mb-6 max-w-md">
              Handmade crochet and authentic Oromoo cultural clothing, crafted with love and tradition. 
              Each piece tells a story of cultural heritage and artistic excellence.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-emerald-600 hover:scale-110 transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                </a>
              ))}
              <a
                href="tel:0917627169"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-emerald-600 hover:scale-110 transition-all duration-300 group"
                aria-label="Call us"
              >
                <Phone className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6 tracking-wide text-lg border-l-4 border-emerald-500 pl-3">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="flex items-center group hover:text-emerald-400 transition-all duration-300 hover:translate-x-2"
                  >
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="text-sm">{link}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-6 tracking-wide text-lg border-l-4 border-amber-500 pl-3">
              Our Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service} className="group hover:text-amber-400 transition-all duration-300">
                  <div className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="text-sm">{service}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-white font-semibold mb-6 tracking-wide text-lg border-l-4 border-teal-500 pl-3">
              Contact Info
            </h4>
            <div className="space-y-4">
              {/* Phone */}
              <div className="flex items-start space-x-3 group hover:text-emerald-400 transition-colors duration-300">
                <div className="w-10 h-10 bg-emerald-600/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-600/40 transition-colors duration-300">
                  <Phone className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div>
                  <a href="tel:0917627169" className="text-white group-hover:text-emerald-400 transition-colors font-medium block">
                    0917627169
                  </a>
                  <p className="text-xs text-gray-400 mt-1">Call or WhatsApp</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start space-x-3 group hover:text-amber-400 transition-colors duration-300">
                <div className="w-10 h-10 bg-amber-600/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-amber-600/40 transition-colors duration-300">
                  <MapPin className="w-4 h-4 text-amber-400 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div>
                  <p className="text-white group-hover:text-amber-400 transition-colors font-medium">
                    Visit Our Store
                  </p>
                  <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                    Teessoo Buraayyuu, Mariyam<br />
                    Building 1, Room #37
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-3 group hover:text-teal-400 transition-colors duration-300">
                <div className="w-10 h-10 bg-teal-600/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-teal-600/40 transition-colors duration-300">
                  <Mail className="w-4 h-4 text-teal-400 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div>
                  <p className="text-white group-hover:text-teal-400 transition-colors font-medium">
                    Get In Touch
                  </p>
                  <p className="text-xs text-gray-400 mt-1">Use our contact form</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action Bar */}
        <div className="bg-gradient-to-r from-emerald-600/20 to-amber-600/20 rounded-2xl p-6 mb-8 border border-emerald-500/30 backdrop-blur-sm">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
            <div className="text-center lg:text-left">
              <h4 className="text-white font-bold text-lg mb-1">Ready to Get Started?</h4>
              <p className="text-emerald-100 text-sm">Contact us today for your custom order or rental needs</p>
            </div>
            <a
              href="tel:0917627169"
              className="inline-flex items-center px-6 py-3 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call Now: 0917627169
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-sm">
                © 2024 <span className="text-emerald-400 font-semibold">Bonny Design</span>. All rights reserved.
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Handcrafted with cultural pride in Ethiopia
              </p>
            </div>
            
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-1 text-amber-300">
                <span>Proudly Ethiopian</span>
                <div className="w-4 h-4 bg-gradient-to-r from-green-500 to-yellow-500 to-red-500 rounded-full"></div>
              </div>
              <div className="w-px h-4 bg-gray-700"></div>
              <div className="flex items-center space-x-1">
                <span>Made with</span>
                <Heart className="w-4 h-4 text-red-400 fill-current animate-pulse" />
                <span>and tradition</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

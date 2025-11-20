import { ShoppingBag, Phone, MapPin, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-tr from-emerald-900 via-gray-900 to-amber-900 opacity-20 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <ShoppingBag className="w-6 h-6 text-emerald-400 animate-bounce-slow" />
              <h3 className="text-xl font-extrabold text-white tracking-wide">Bonny Design</h3>
            </div>
            <p className="text-sm leading-relaxed">
              Handmade crochet and authentic Oromoo cultural clothing, crafted with love and tradition.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 tracking-wide">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {['Home', 'Products', 'About Us', 'Gallery', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="hover:text-emerald-400 transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4 tracking-wide">Services</h4>
            <ul className="space-y-2 text-sm">
              {['Purchase Items', 'Rental Services', 'Custom Orders', 'Traditional Clothing', 'Crochet Pieces'].map(
                (service) => (
                  <li key={service} className="hover:text-emerald-400 transition-colors duration-300">
                    {service}
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4 tracking-wide">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <Phone className="w-4 h-4 text-emerald-400 mt-1 flex-shrink-0 animate-pulse" />
                <a href="tel:0917627169" className="hover:text-emerald-400 transition-colors">
                  0917627169
                </a>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-emerald-400 mt-1 flex-shrink-0" />
                <div>
                  <p>Teessoo Buraayyuu, Mariyam</p>
                  <p>Building 1, Room #37</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-center md:text-left">
              © 2024 Bonny Design. All rights reserved.
            </p>
            <div className="flex items-center space-x-1 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-emerald-400 fill-current animate-pulse" />
              <span>in Ethiopia</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

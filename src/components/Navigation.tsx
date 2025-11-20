import { Menu, X, ShoppingBag, Phone, MapPin } from 'lucide-react';
import { useState } from 'react';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'products', label: 'Products' },
    { id: 'about', label: 'About Us' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100 transition-all duration-300">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMxMGI5ODEiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDE4YzMuMzEzIDAgNiAyLjY4NyA2IDZzLTIuNjg3IDYtNiA2LTYtMi42ODctNi02IDIuNjg3LTYgNi02ek0yNCA0OGMzLjMxMyAwIDYgMi42ODcgNiA2cy0yLjY4NyA2LTYgNi02LTIuNjg3LTYtNiAyLjY4Ny02IDYtNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-50 pointer-events-none"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div
            className="flex items-center space-x-3 cursor-pointer group"
            onClick={() => onNavigate('home')}
          >
            <div className="relative">
              <ShoppingBag className="w-10 h-10 text-emerald-600 group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-amber-400 rounded-full animate-pulse"></div>
            </div>
            <div className="flex flex-col">
              <h1 className="text-2xl font-extrabold text-gray-900 group-hover:text-emerald-700 transition-colors duration-300">
                Bonny Design
              </h1>
              <p className="text-xs text-emerald-600 tracking-wide font-medium flex items-center">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-1 animate-pulse"></span>
                Handmade with Cultural Pride
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`relative px-6 py-3 text-sm font-semibold transition-all duration-300 group ${
                  currentPage === item.id
                    ? 'text-emerald-600'
                    : 'text-gray-700 hover:text-emerald-600'
                }`}
              >
                <span className="relative z-10">{item.label}</span>
                
                {/* Active Indicator */}
                {currentPage === item.id && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-emerald-500 rounded-full animate-bounce"></div>
                )}
                
                {/* Hover Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r from-emerald-50 to-amber-50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                  currentPage === item.id ? 'opacity-100' : ''
                }`}></div>
              </button>
            ))}
          </div>

          {/* Desktop Contact CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:0917627169"
              className="flex items-center space-x-2 px-4 py-2 bg-emerald-600 text-white text-sm font-semibold rounded-lg hover:bg-emerald-700 transform hover:-translate-y-0.5 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <Phone className="w-4 h-4" />
              <span>Call Now</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-3 rounded-xl hover:bg-emerald-50 transition-all duration-300 group"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="relative">
              {isMenuOpen ? (
                <X className="w-6 h-6 text-emerald-600 group-hover:scale-110 transition-transform duration-300" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700 group-hover:text-emerald-600 transition-colors duration-300" />
              )}
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isMenuOpen ? 'max-h-96 border-t border-gray-200' : 'max-h-0'
        }`}
      >
        <div className="px-4 pt-4 pb-6 space-y-2 bg-white/80 backdrop-blur-sm">
          {/* Mobile Navigation Items */}
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                onNavigate(item.id);
                setIsMenuOpen(false);
              }}
              className={`flex items-center w-full text-left px-4 py-4 rounded-xl transition-all duration-300 group ${
                currentPage === item.id
                  ? 'bg-gradient-to-r from-emerald-50 to-amber-50 text-emerald-600 border-l-4 border-emerald-500 shadow-md'
                  : 'text-gray-700 hover:bg-gray-50 hover:text-emerald-600 hover:border-l-4 hover:border-emerald-300'
              }`}
            >
              <div className={`w-2 h-2 rounded-full mr-3 transition-all duration-300 ${
                currentPage === item.id 
                  ? 'bg-emerald-500 scale-125' 
                  : 'bg-gray-300 group-hover:bg-emerald-400'
              }`}></div>
              <span className="font-semibold">{item.label}</span>
            </button>
          ))}

          {/* Mobile Contact Section */}
          <div className="pt-4 mt-4 border-t border-gray-200">
            <div className="space-y-3">
              {/* Phone CTA */}
              <a
                href="tel:0917627169"
                className="flex items-center justify-center w-full px-4 py-4 bg-emerald-600 text-white font-semibold rounded-xl hover:bg-emerald-700 transform hover:-translate-y-0.5 transition-all duration-300 shadow-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                <Phone className="w-5 h-5 mr-2" />
                Call: 0917627169
              </a>

              {/* Location Info */}
              <div className="flex items-start space-x-3 px-4 py-3 bg-amber-50 rounded-xl border border-amber-200">
                <MapPin className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  <p className="font-semibold text-gray-900">Visit Our Store</p>
                  <p className="text-gray-600 mt-1">Teessoo Buraayyuu, Mariyam</p>
                  <p className="text-gray-600">Building 1, Room #37</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 via-amber-400 to-emerald-400 opacity-80"></div>
    </nav>
  );
}

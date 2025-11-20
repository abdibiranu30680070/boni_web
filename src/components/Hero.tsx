import { Sparkles, Phone, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-emerald-50 via-white to-amber-50 overflow-hidden">
      {/* Animated floating blobs */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-emerald-200 rounded-full opacity-30 animate-pulse"></div>
      <div className="absolute -bottom-24 -right-16 w-96 h-96 bg-amber-300 rounded-full opacity-25 animate-pulse"></div>

      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMxMGI5ODEiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE4YzMuMzEzIDAgNiAyLjY4NyA2IDZzLTIuNjg3IDYtNiA2LTYtMi42ODctNi02IDIuNjg3LTYgNi02ek0yNCA0OGMzLjMxMyAwIDYgMi42ODcgNiA2cy0yLjY4NyA2LTYgNi02LTIuNjg3LTYtNiAyLjY4Ny02IDYtNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Text Section */}
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-3 bg-emerald-100 text-emerald-800 px-5 py-2 rounded-full text-sm font-semibold animate-bounce">
              <Sparkles className="w-5 h-5" />
              <span>Authentic Oromoo Culture & Handmade Crochet</span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight">
              Bonny Design
              <span className="block text-emerald-600 mt-3">Handmade Excellence</span>
            </h1>

            <p className="text-lg text-gray-700 leading-relaxed">
              Discover unique handmade crochet pieces and authentic Oromoo cultural clothing.
              Each item is crafted with love and attention to detail, celebrating tradition and artistry.
            </p>

            <div className="space-y-4">
              <div className="flex items-start space-x-3 text-gray-700 hover:text-emerald-600 transition-all duration-300">
                <MapPin className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">Visit Our Store</p>
                  <p className="text-sm">Teessoo Buraayyuu, Mariyam - City Administration Front</p>
                  <p className="text-sm">Iraangadee Kaartoonii - Cardboard Factory Front</p>
                  <p className="text-sm">Building 1, Room #37</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 text-gray-700 hover:text-emerald-600 transition-all duration-300">
                <Phone className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                <div>
                  <p className="font-medium">Call Us: 0917627169</p>
                  <p className="text-sm">For purchases and rentals</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <a
                href="tel:0917627169"
                className="inline-flex items-center justify-center px-8 py-4 bg-emerald-600 text-white font-semibold rounded-lg shadow-lg hover:bg-emerald-700 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                <Phone className="w-5 h-5 mr-2" />
                Contact Us Now
              </a>
              <button className="inline-flex items-center justify-center px-8 py-4 bg-white text-emerald-600 font-semibold rounded-lg border-2 border-emerald-600 hover:bg-emerald-50 shadow-sm hover:shadow-md transition-all duration-300">
                Browse Collection
              </button>
            </div>
          </div>

          {/* Right Hero Image */}
          <div className="relative">
            <div className="relative h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl border-2 border-emerald-200">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-amber-400 flex items-center justify-center animate-fadeIn">
                <div className="text-center text-white p-8">
                  <Sparkles className="w-28 h-28 mx-auto mb-4 opacity-90 animate-spin-slow" />
                  <p className="text-2xl font-semibold">Handcrafted with Love</p>
                  <p className="text-lg mt-2 opacity-90">Traditional & Modern Designs</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-8 -right-8 w-36 h-36 bg-amber-300 rounded-full blur-3xl opacity-30 animate-pulse"></div>
            <div className="absolute -top-8 -left-8 w-36 h-36 bg-emerald-300 rounded-full blur-3xl opacity-30 animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { Image as ImageIcon, ExternalLink } from 'lucide-react';

export default function Gallery() {
  const galleryItems = [
    { 
      id: 1, 
      title: 'Traditional Dress Collection', 
      category: 'Cultural Clothing',
      image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    { 
      id: 2, 
      title: 'Crochet Handbags', 
      category: 'Accessories',
      image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    { 
      id: 3, 
      title: 'Cultural Accessories', 
      category: 'Traditional',
      image: 'https://images.unsplash.com/photo-1506629905607-e48b0e67d879?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    { 
      id: 4, 
      title: 'Home Decor Items', 
      category: 'Home & Living',
      image: 'https://images.unsplash.com/photo-1583496661160-fb5886a13d77?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    { 
      id: 5, 
      title: 'Fashion Pieces', 
      category: 'Modern Fashion',
      image: 'https://images.unsplash.com/photo-1599458254924-2dca4bfb73b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    { 
      id: 6, 
      title: 'Custom Creations', 
      category: 'Bespoke',
      image: 'https://images.unsplash.com/photo-1519457431-44ccd64a579b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-emerald-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Our Gallery
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our beautiful collection of handmade creations and cultural pieces
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="group relative h-80 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2"
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${item.image})` }}
              >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-500" />
                
                {/* Pattern Overlay */}
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNNjAgMzBjLTMuMzEzIDAtNiAyLjY4Ny02IDZzMi42ODcgNiA2IDYgNi0yLjY4NyA2LTYtMi42ODctNi02LTZ6TTAgNDhjMy4zMTMgMCA2IDIuNjg3IDYgNnMtMi42ODcgNi02IDYtNi0yLjY4Ny02LTYgMi42ODctNiA2LTZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30" />
              </div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-white z-10">
                {/* Category Badge */}
                <div className="absolute top-6 left-6">
                  <span className="inline-flex items-center px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-semibold rounded-full border border-white/30">
                    {item.category}
                  </span>
                </div>

                {/* View Icon */}
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                  <ExternalLink className="w-6 h-6 text-white" />
                </div>

                {/* Main Content */}
                <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <ImageIcon className="w-12 h-12 mb-4 mx-auto group-hover:scale-110 transition-transform duration-500 opacity-90 group-hover:opacity-100" />
                  <h3 className="text-xl lg:text-2xl font-bold mb-2 group-hover:tracking-wide transition-all duration-300 leading-tight">
                    {item.title}
                  </h3>
                  <div className="w-12 h-0.5 bg-emerald-400 mx-auto mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200" />
                </div>

                {/* Hover Button */}
                <div className="absolute bottom-6 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                  <button className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/30 border border-white/30 transition-all duration-300">
                    <span>View Collection</span>
                  </button>
                </div>
              </div>

              {/* Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-700 mb-6 text-lg">
            Want to see more? Visit our store or call us for a complete catalog!
          </p>
          <a
            href="tel:0917627169"
            className="inline-flex items-center px-8 py-4 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <ImageIcon className="w-5 h-5 mr-2" />
            Contact Us for More Photos
          </a>
        </div>
      </div>
    </section>
  );
}

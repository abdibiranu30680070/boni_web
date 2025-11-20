import { ShoppingBag, Heart, Star } from 'lucide-react';

export default function Products() {
  const products = [
    {
      id: 1,
      name: 'Traditional Oromoo Dress',
      category: 'Cultural Clothing',
      description: 'Authentic handmade traditional dress with intricate patterns',
      price: 'Contact for Price',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 2,
      name: 'Handmade Crochet Bag',
      category: 'Accessories',
      description: 'Beautiful crochet handbag perfect for any occasion',
      price: 'Contact for Price',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 3,
      name: 'Crochet Home Decor',
      category: 'Home & Living',
      description: 'Elegant crochet pieces to beautify your home',
      price: 'Contact for Price',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1583496661160-fb5886a13d77?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 4,
      name: 'Cultural Accessories',
      category: 'Accessories',
      description: 'Traditional accessories handcrafted with care',
      price: 'Contact for Price',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1506629905607-e48b0e67d879?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 5,
      name: 'Crochet Clothing',
      category: 'Fashion',
      description: 'Modern crochet fashion pieces for contemporary style',
      price: 'Contact for Price',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1599458254924-2dca4bfb73b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 6,
      name: 'Custom Orders',
      category: 'Special',
      description: 'Personalized designs tailored to your preferences',
      price: 'Contact for Quote',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1519457431-44ccd64a579b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-emerald-50 to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Our Collection
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our handpicked selection of handmade crochet items and traditional Oromoo cultural clothing.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:-translate-y-2"
            >
              {/* Product Image */}
              <div className="relative h-72 overflow-hidden bg-gray-100">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center px-3 py-1 bg-white/90 backdrop-blur-sm text-emerald-600 text-xs font-semibold rounded-full border border-emerald-200">
                    {product.category}
                  </span>
                </div>

                {/* Favorite Button */}
                <button className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-md hover:bg-emerald-50 transition-all duration-300 transform hover:scale-110">
                  <Heart className="w-5 h-5 text-gray-600 group-hover:text-red-500 transition-colors duration-300" />
                </button>

                {/* Quick View Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center space-x-2 bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-emerald-50">
                    <ShoppingBag className="w-5 h-5" />
                    <span>Quick View</span>
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors duration-300 line-clamp-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-2">
                  {product.description}
                </p>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 ${i < product.rating ? 'text-amber-400 fill-current' : 'text-gray-300'} mr-1`} 
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-600">({product.rating}.0)</span>
                </div>

                {/* Price & CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-lg font-bold text-gray-900">{product.price}</span>
                  <a
                    href="tel:0917627169"
                    className="px-5 py-2.5 bg-emerald-600 text-white text-sm font-semibold rounded-lg shadow-md hover:bg-emerald-700 transform hover:scale-105 transition-all duration-300"
                  >
                    Inquire Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-700 mb-6 text-lg">
            Available for both purchase and rental. Contact us for more information!
          </p>
          <a
            href="tel:0917627169"
            className="inline-flex items-center px-8 py-4 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <ShoppingBag className="w-5 h-5 mr-2" />
            Call to Order: 0917627169
          </a>
        </div>
      </div>
    </section>
  );
}

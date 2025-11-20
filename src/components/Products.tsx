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
    },
    {
      id: 2,
      name: 'Handmade Crochet Bag',
      category: 'Accessories',
      description: 'Beautiful crochet handbag perfect for any occasion',
      price: 'Contact for Price',
      rating: 5,
    },
    {
      id: 3,
      name: 'Crochet Home Decor',
      category: 'Home & Living',
      description: 'Elegant crochet pieces to beautify your home',
      price: 'Contact for Price',
      rating: 5,
    },
    {
      id: 4,
      name: 'Cultural Accessories',
      category: 'Accessories',
      description: 'Traditional accessories handcrafted with care',
      price: 'Contact for Price',
      rating: 5,
    },
    {
      id: 5,
      name: 'Crochet Clothing',
      category: 'Fashion',
      description: 'Modern crochet fashion pieces for contemporary style',
      price: 'Contact for Price',
      rating: 5,
    },
    {
      id: 6,
      name: 'Custom Orders',
      category: 'Special',
      description: 'Personalized designs tailored to your preferences',
      price: 'Contact for Quote',
      rating: 5,
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:-translate-y-1"
            >
              {/* Image / Icon */}
              <div className="relative h-64 bg-gradient-to-br from-emerald-100 to-amber-100 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <ShoppingBag className="w-20 h-20 text-emerald-600 opacity-40 group-hover:scale-110 transition-transform duration-500" />
                </div>
                {/* Favorite Button */}
                <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-emerald-50 transition-all duration-300">
                  <Heart className="w-5 h-5 text-gray-600 group-hover:text-emerald-600 transition-colors duration-300" />
                </button>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <div className="text-sm text-emerald-600 font-semibold mb-2 tracking-wide">
                  {product.category}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-emerald-600 transition-colors duration-300">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{product.description}</p>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(product.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-current mr-1" />
                  ))}
                  <span className="ml-2 text-sm text-gray-600">({product.rating}.0)</span>
                </div>

                {/* Price & CTA */}
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-gray-900">{product.price}</span>
                  <a
                    href="tel:0917627169"
                    className="px-4 py-2 bg-emerald-600 text-white text-sm font-semibold rounded-lg shadow-md hover:bg-emerald-700 transition-all duration-300"
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
          <p className="text-gray-700 mb-6">
            Available for both purchase and rental. Contact us for more information!
          </p>
          <a
            href="tel:0917627169"
            className="inline-flex items-center px-8 py-4 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-colors shadow-lg"
          >
            Call to Order: 0917627169
          </a>
        </div>
      </div>
    </section>
  );
}

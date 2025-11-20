import { Image as ImageIcon } from 'lucide-react';

export default function Gallery() {
  const galleryItems = [
    { id: 1, title: 'Traditional Dress Collection', color: 'from-emerald-400 to-teal-500' },
    { id: 2, title: 'Crochet Handbags', color: 'from-amber-400 to-orange-500' },
    { id: 3, title: 'Cultural Accessories', color: 'from-rose-400 to-pink-500' },
    { id: 4, title: 'Home Decor Items', color: 'from-blue-400 to-cyan-500' },
    { id: 5, title: 'Fashion Pieces', color: 'from-purple-400 to-indigo-500' },
    { id: 6, title: 'Custom Creations', color: 'from-green-400 to-emerald-500' },
  ];

  return (
    <section className="py-20 bg-gray-50">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="group relative h-80 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-90 group-hover:opacity-100 transition-opacity duration-500`}
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-white">
                  <ImageIcon className="w-16 h-16 mb-4 group-hover:scale-125 transition-transform duration-500" />
                  <h3 className="text-xl lg:text-2xl font-bold text-center group-hover:tracking-wide transition-all duration-300">
                    {item.title}
                  </h3>
                </div>
              </div>
              {/* Optional subtle overlay blur */}
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-700 mb-6">
            Want to see more? Visit our store or call us for a complete catalog!
          </p>
          <a
            href="tel:0917627169"
            className="inline-flex items-center px-8 py-4 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Contact Us for More
          </a>
        </div>
      </div>
    </section>
  );
}

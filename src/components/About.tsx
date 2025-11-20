import { Heart, Award, Users, Sparkles, MapPin, Phone } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: Heart,
      title: 'Handmade with Love',
      description: 'Every piece is carefully handcrafted with attention to detail and passion',
    },
    {
      icon: Award,
      title: 'Quality Craftsmanship',
      description: 'We use premium materials and traditional techniques to ensure lasting quality',
    },
    {
      icon: Users,
      title: 'Cultural Heritage',
      description: 'Celebrating and preserving Oromoo cultural traditions through our designs',
    },
    {
      icon: Sparkles,
      title: 'Unique Designs',
      description: 'Each item is one-of-a-kind, combining traditional and modern aesthetics',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white via-emerald-50 to-amber-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            About Bonny Design
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Your destination for authentic handmade crochet and traditional Oromoo cultural clothing
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Sparkles className="w-4 h-4" />
              <span>Since 2015</span>
            </div>
            
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
              Preserving Tradition Through<br />Modern Craftsmanship
            </h3>
            
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Bonny Design is dedicated to preserving and celebrating the rich traditions of Oromoo culture
                while creating beautiful handmade crochet pieces that blend traditional craftsmanship with
                contemporary style.
              </p>
              <p>
                Each item in our collection is carefully handcrafted with love and attention to detail.
                We believe in the beauty of handmade items and the stories they tell. Whether you're looking
                for traditional cultural clothing or modern crochet accessories, we have something special for you.
              </p>
              <p>
                We offer both purchase and rental options, making our beautiful pieces accessible for special
                occasions, everyday wear, and everything in between.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-600">500+</div>
                <div className="text-sm text-gray-600">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-600">8+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-600">100%</div>
                <div className="text-sm text-gray-600">Handmade</div>
              </div>
            </div>
          </div>

          {/* Image Gallery */}
          <div className="relative">
            {/* Main Image */}
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl group">
              <img 
                src="https://images.unsplash.com/photo-1519457431-44ccd64a579b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Handmade crochet and cultural clothing craftsmanship"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              
              {/* Floating Element */}
              <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <div className="flex items-center space-x-2">
                  <Heart className="w-5 h-5 text-emerald-600" />
                  <span className="text-sm font-semibold text-gray-900">Since 2015</span>
                </div>
              </div>
            </div>

            {/* Secondary Images */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 rounded-2xl overflow-hidden shadow-xl border-4 border-white z-10">
              <img 
                src="https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Traditional Oromoo cultural clothing"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-amber-300 rounded-full blur-2xl opacity-30 animate-pulse"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-emerald-300 rounded-full blur-2xl opacity-30 animate-pulse"></div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:-translate-y-2 overflow-hidden"
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMxMGI5ODEiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDE4YzMuMzEzIDAgNiAyLjY4NyA2IDZzLTIuNjg3IDYtNiA2LTYtMi42ODctNi02IDIuNjg3LTYgNi02ek0yNCA0OGMzLjMxMyAwIDYgMi42ODcgNiA2cy0yLjY4NyA2LTYgNi02LTIuNjg3LTYtNiAyLjY4Ny02IDYtNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-emerald-700 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-emerald-500 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10">
                <div className="absolute inset-[2px] rounded-2xl bg-white"></div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: 'url(https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/90 to-teal-600/90" />
          </div>
          
          <div className="relative z-10 p-8 lg:p-12 text-center text-white">
            <h3 className="text-3xl lg:text-4xl font-bold mb-6">
              Visit Our Store Today
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-8">
              <div className="text-center">
                <div className="flex items-center justify-center space-x-3 mb-4">
                  <MapPin className="w-6 h-6 text-amber-300" />
                  <h4 className="text-xl font-semibold">Main Store</h4>
                </div>
                <p className="text-emerald-100 leading-relaxed">
                  Teessoo Buraayyuu, Mariyam<br />
                  City Administration Front<br />
                  Building 1, Room #37
                </p>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center space-x-3 mb-4">
                  <MapPin className="w-6 h-6 text-amber-300" />
                  <h4 className="text-xl font-semibold">Second Location</h4>
                </div>
                <p className="text-emerald-100 leading-relaxed">
                  Iraangadee Kaartoonii<br />
                  Cardboard Factory Front<br />
                  Same Building Complex
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:0917627169"
                className="inline-flex items-center px-8 py-4 bg-white text-emerald-600 font-semibold rounded-lg hover:bg-gray-50 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Us: 0917627169
              </a>
              <button className="inline-flex items-center px-8 py-4 bg-transparent text-white font-semibold rounded-lg border-2 border-white hover:bg-white hover:text-emerald-600 transform hover:-translate-y-1 transition-all duration-300">
                Get Directions
              </button>
            </div>
          </div>

          {/* Floating Elements */}
          <div className="absolute top-8 left-8 w-24 h-24 bg-amber-300 rounded-full blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-8 right-8 w-32 h-32 bg-emerald-300 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}

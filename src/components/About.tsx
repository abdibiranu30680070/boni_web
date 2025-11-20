import { Heart, Award, Users, Sparkles } from 'lucide-react';

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
    <section className="py-20 bg-gradient-to-br from-white via-emerald-50 to-white">
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
            <h3 className="text-3xl font-bold text-gray-900">
              Our Story
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Bonny Design is dedicated to preserving and celebrating the rich traditions of Oromoo culture
              while creating beautiful handmade crochet pieces that blend traditional craftsmanship with
              contemporary style.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Each item in our collection is carefully handcrafted with love and attention to detail.
              We believe in the beauty of handmade items and the stories they tell. Whether you're looking
              for traditional cultural clothing or modern crochet accessories, we have something special for you.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We offer both purchase and rental options, making our beautiful pieces accessible for special
              occasions, everyday wear, and everything in between.
            </p>
          </div>

          <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 via-teal-400 to-amber-400 flex items-center justify-center">
              <div className="text-center text-white p-8">
                <Heart className="w-24 h-24 mx-auto mb-4" />
                <p className="text-2xl font-semibold">Crafted with Passion</p>
                <p className="text-lg mt-2">Celebrating Culture & Creativity</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-emerald-600 rounded-2xl p-8 lg:p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">
            Visit Us Today
          </h3>
          <p className="text-lg mb-2 opacity-90">
            Teessoo Buraayyuu, Mariyam - City Administration Front
          </p>
          <p className="text-lg mb-2 opacity-90">
            Iraangadee Kaartoonii - Cardboard Factory Front
          </p>
          <p className="text-lg mb-6 opacity-90">
            Building 1, Room #37
          </p>
          <a
            href="tel:0917627169"
            className="inline-block px-8 py-4 bg-white text-emerald-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors shadow-lg"
          >
            Call Us: 0917627169
          </a>
        </div>
      </div>
    </section>
  );
}

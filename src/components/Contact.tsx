import { Phone, MapPin, Clock, Mail, Send, CheckCircle } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    interest: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', phone: '', interest: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 2000);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-white to-emerald-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We'd love to hear from you! Contact us for inquiries, orders, or to schedule a visit
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Info */}
          <div className="space-y-8">
            {/* Contact Card with Image Background */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl group">
              {/* Background Image with Overlay */}
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ 
                  backgroundImage: 'url(https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80)'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/90 to-teal-600/90" />
              </div>
              
              <div className="relative z-10 p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4 group/item hover:bg-white/10 rounded-lg p-3 transition-all duration-300">
                    <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover/item:bg-emerald-500 transition-colors duration-300">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Phone</h4>
                      <a href="tel:0917627169" className="text-emerald-100 hover:text-white transition-colors text-lg font-medium">
                        0917627169
                      </a>
                      <p className="text-sm text-emerald-100 mt-1">
                        Call us for orders and inquiries
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 group/item hover:bg-white/10 rounded-lg p-3 transition-all duration-300">
                    <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover/item:bg-emerald-500 transition-colors duration-300">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Store Locations</h4>
                      <p className="text-emerald-100 leading-relaxed">
                        <strong>Main Store:</strong><br />
                        Teessoo Buraayyuu, Mariyam<br />
                        City Administration Front<br />
                        Building 1, Room #37
                      </p>
                      <p className="text-emerald-100 leading-relaxed mt-2">
                        <strong>Second Location:</strong><br />
                        Iraangadee Kaartoonii<br />
                        Cardboard Factory Front
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 group/item hover:bg-white/10 rounded-lg p-3 transition-all duration-300">
                    <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover/item:bg-emerald-500 transition-colors duration-300">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Business Hours</h4>
                      <p className="text-emerald-100">
                        Monday - Saturday: 8:00 AM - 8:00 PM<br />
                        Sunday: 10:00 AM - 6:00 PM<br />
                        <em className="text-emerald-200">Call for appointment</em>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 group/item hover:bg-white/10 rounded-lg p-3 transition-all duration-300">
                    <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover/item:bg-emerald-500 transition-colors duration-300">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Services</h4>
                      <p className="text-emerald-100">
                        ✓ Purchase & Rental Available<br />
                        ✓ Custom Orders Welcome<br />
                        ✓ Cultural Event Styling<br />
                        ✓ Bulk Order Discounts
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Choose Us Card */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 border border-amber-200 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <CheckCircle className="w-6 h-6 text-emerald-600 mr-2" />
                Why Choose Bonny Design?
              </h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start group">
                  <span className="text-emerald-600 mr-3 mt-1 group-hover:scale-110 transition-transform duration-300">✓</span>
                  <span className="group-hover:text-emerald-700 transition-colors duration-300">Authentic handmade quality with traditional techniques</span>
                </li>
                <li className="flex items-start group">
                  <span className="text-emerald-600 mr-3 mt-1 group-hover:scale-110 transition-transform duration-300">✓</span>
                  <span className="group-hover:text-emerald-700 transition-colors duration-300">Genuine Oromoo cultural pieces and modern designs</span>
                </li>
                <li className="flex items-start group">
                  <span className="text-emerald-600 mr-3 mt-1 group-hover:scale-110 transition-transform duration-300">✓</span>
                  <span className="group-hover:text-emerald-700 transition-colors duration-300">Flexible purchase or rental options for every need</span>
                </li>
                <li className="flex items-start group">
                  <span className="text-emerald-600 mr-3 mt-1 group-hover:scale-110 transition-transform duration-300">✓</span>
                  <span className="group-hover:text-emerald-700 transition-colors duration-300">Custom orders tailored to your preferences</span>
                </li>
                <li className="flex items-start group">
                  <span className="text-emerald-600 mr-3 mt-1 group-hover:scale-110 transition-transform duration-300">✓</span>
                  <span className="group-hover:text-emerald-700 transition-colors duration-300">Expert guidance and styling advice</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Send Us a Message
            </h3>
            <p className="text-gray-600 mb-6">
              Fill out the form below and we'll get back to you within 24 hours
            </p>

            {isSubmitted ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 text-center">
                <CheckCircle className="w-16 h-16 text-emerald-600 mx-auto mb-4" />
                <h4 className="text-xl font-bold text-emerald-900 mb-2">Message Sent Successfully!</h4>
                <p className="text-emerald-700">
                  Thank you for your inquiry. We'll contact you soon at {formData.phone || 'your provided number'}.
                </p>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all outline-none hover:border-emerald-300"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all outline-none hover:border-emerald-300"
                      placeholder="0917627169"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-2">
                    Interested In *
                  </label>
                  <select
                    id="interest"
                    required
                    value={formData.interest}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all outline-none hover:border-emerald-300"
                  >
                    <option value="">Select an option</option>
                    <option value="Traditional Clothing">Traditional Clothing</option>
                    <option value="Crochet Items">Crochet Items</option>
                    <option value="Custom Order">Custom Order</option>
                    <option value="Rental">Rental</option>
                    <option value="General Inquiry">General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all outline-none resize-none hover:border-emerald-300"
                    placeholder="Tell us about your requirements, event date, or any specific needs..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 disabled:bg-emerald-400 transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            )}

            <div className="mt-8 p-4 bg-gray-50 rounded-lg text-center">
              <p className="text-gray-700 mb-2">
                <strong>Prefer to call?</strong>
              </p>
              <a 
                href="tel:0917627169" 
                className="inline-flex items-center text-lg text-emerald-600 font-semibold hover:text-emerald-700 transition-colors"
              >
                <Phone className="w-5 h-5 mr-2" />
                0917627169
              </a>
              <p className="text-sm text-gray-600 mt-2">
                Available for calls and WhatsApp messages
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

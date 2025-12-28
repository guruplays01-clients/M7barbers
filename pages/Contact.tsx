
import React from 'react';
import { MapPin, Phone, Instagram, Clock, Send } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';
import Reveal from '../components/Reveal';

const Contact: React.FC = () => {
  return (
    <div className="pt-24 lg:pt-32">
      <section className="bg-black py-20 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <Reveal>
            <p className="text-amber-500 font-bold uppercase tracking-widest text-xs mb-4">Get In Touch</p>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tighter font-serif italic">Find Us.</h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Ready to elevate your grooming? Reach out via phone, social media, or drop by our Holt location.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Details */}
            <div className="space-y-12">
              <Reveal>
                <h2 className="text-2xl font-bold text-white mb-8 uppercase tracking-widest border-l-4 border-amber-600 pl-4">Location Details</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-amber-600/10 p-4 rounded-sm">
                      <MapPin className="text-amber-500" size={24} />
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-1">Our Address</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">{BUSINESS_INFO.address}</p>
                      <a 
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(BUSINESS_INFO.address)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-amber-500 text-xs font-bold uppercase tracking-widest mt-2 inline-block hover:underline"
                      >
                        Get Directions
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-amber-600/10 p-4 rounded-sm">
                      <Phone className="text-amber-500" size={24} />
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-1">Phone Enquiries</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">Call to check availability or book.</p>
                      <a 
                        href={`tel:${BUSINESS_INFO.phone}`}
                        className="text-amber-500 text-lg font-bold mt-1 inline-block hover:text-white transition-colors"
                      >
                        {BUSINESS_INFO.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-amber-600/10 p-4 rounded-sm">
                      <Clock className="text-amber-500" size={24} />
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-1">Trading Hours</h4>
                      <div className="grid grid-cols-2 gap-x-8 gap-y-1 mt-2">
                        {BUSINESS_INFO.hours.map(h => (
                          <React.Fragment key={h.day}>
                            <span className="text-gray-400 text-xs uppercase">{h.day}</span>
                            <span className="text-white text-xs font-bold text-right">{h.hours}</span>
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={200}>
                <h2 className="text-2xl font-bold text-white mb-8 uppercase tracking-widest border-l-4 border-amber-600 pl-4">Social Presence</h2>
                <a 
                  href={BUSINESS_INFO.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 bg-white/5 p-6 rounded-sm border border-white/5 hover:border-amber-500/50 transition-all group"
                >
                  <Instagram className="text-amber-500 group-hover:scale-110 transition-transform" size={32} />
                  <div>
                    <h4 className="text-white font-bold">Follow @m7_barbers</h4>
                    <p className="text-gray-500 text-xs">For style inspiration and shop news.</p>
                  </div>
                </a>
              </Reveal>
            </div>

            {/* Form Placeholder & Map Placeholder */}
            <div className="space-y-8">
              <Reveal delay={200} className="bg-black p-10 rounded-sm border border-white/5 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-600/5 rounded-full -mr-16 -mt-16 blur-3xl"></div>
                <h3 className="text-2xl font-bold text-white mb-6">Send an Inquiry</h3>
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Full Name</label>
                      <input type="text" className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Phone Number</label>
                      <input type="tel" className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors" placeholder="+61 400 000 000" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Inquiry Type</label>
                    <select className="w-full bg-[#111] border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors appearance-none">
                      <option>General Booking Inquiry</option>
                      <option>Group Booking (Wedding/Event)</option>
                      <option>Product Question</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Message</label>
                    <textarea className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors h-32 resize-none" placeholder="Tell us what you're looking for..."></textarea>
                  </div>
                  <button className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold uppercase tracking-[0.2em] py-4 rounded-sm transition-all flex items-center justify-center space-x-2">
                    <Send size={16} />
                    <span>Send Message</span>
                  </button>
                </form>
              </Reveal>

              {/* Map Placeholder */}
              <Reveal delay={400} className="bg-[#111] aspect-video w-full border border-white/10 relative group overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-center p-8 z-10 group-hover:bg-black/40 transition-colors">
                   <div>
                     <MapPin className="text-amber-500 mx-auto mb-4" size={48} />
                     <p className="text-white font-bold mb-2">Google Maps Embed</p>
                     <p className="text-gray-500 text-xs">Holt Shopping Centre Precinct</p>
                   </div>
                </div>
                <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop" className="w-full h-full object-cover opacity-20 grayscale" alt="Map Area" />
              </Reveal>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

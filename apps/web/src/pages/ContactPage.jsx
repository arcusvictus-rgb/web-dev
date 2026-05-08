import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ContactForm from '@/components/ContactForm.jsx';
import WhatsAppButton from '@/components/WhatsAppButton.jsx';
import CallButton from '@/components/CallButton.jsx';

function ContactPage() {
  return (
    <>
      <Helmet>
        <title>Contact us - Brinda Clinic</title>
        <meta name="description" content="Get in touch with Brinda Clinic in Port Blair, Andaman. Book appointments, ask questions, or visit us at Aarav Square, Garacharama." />
      </Helmet>

      <div className="min-h-screen flex flex-col bg-white">
        <Header />

        <main className="flex-1">
          <section className="py-24 bg-black text-white border-b-2 border-black">
            <div className="container-custom">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center max-w-3xl mx-auto"
              >
                <h1 className="text-5xl md:text-6xl font-bold leading-none uppercase tracking-tighter mb-6">
                  Get in touch
                </h1>
                <p className="text-xl leading-relaxed text-gray-300 font-medium">
                  We're here to help. Reach out to us for appointments, inquiries, or any health concerns.
                </p>
              </motion.div>
            </div>
          </section>

          <section className="py-24 bg-white text-black">
            <div className="container-custom">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-12"
                >
                  <div>
                    <h2 className="text-4xl font-bold leading-none uppercase tracking-tight mb-10">
                      Contact information
                    </h2>
                    <div className="space-y-8">
                      <div className="flex items-start space-x-6">
                        <div className="flex items-center justify-center w-14 h-14 border-2 border-black bg-black text-white flex-shrink-0 rounded-xl">
                          <MapPin className="w-7 h-7" />
                        </div>
                        <div>
                          <p className="font-bold uppercase tracking-wider mb-2">Address</p>
                          <p className="text-gray-700 leading-relaxed text-lg">
                            Aarav Square, Opposite Govt. Medical College<br />
                            Garacharama, Sri Vijaya Puram (Port Blair)<br />
                            Andaman and Nicobar Islands 744105
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-6">
                        <div className="flex items-center justify-center w-14 h-14 border-2 border-black bg-black text-white flex-shrink-0 rounded-xl">
                          <Phone className="w-7 h-7" />
                        </div>
                        <div>
                          <p className="font-bold uppercase tracking-wider mb-2">Phone</p>
                          <a href="tel:+919476021494" className="text-gray-700 hover:text-black transition-colors text-lg font-medium block">
                            +91 94760 21494
                          </a>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-6">
                        <div className="flex items-center justify-center w-14 h-14 border-2 border-black bg-black text-white flex-shrink-0 rounded-xl">
                          <Mail className="w-7 h-7" />
                        </div>
                        <div>
                          <p className="font-bold uppercase tracking-wider mb-2">Email</p>
                          <a href="mailto:info@brindaclinic.com" className="text-gray-700 hover:text-black transition-colors text-lg font-medium block">
                            info@brindaclinic.com
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start space-x-6">
                        <div className="flex items-center justify-center w-14 h-14 border-2 border-black bg-black text-white flex-shrink-0 rounded-xl">
                          <Clock className="w-7 h-7" />
                        </div>
                        <div>
                          <p className="font-bold uppercase tracking-wider mb-2">Hours</p>
                          <p className="text-gray-700 text-lg">Monday - Saturday: 9:00 AM - 8:00 PM</p>
                          <p className="text-gray-700 text-lg">Sunday: Closed</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <CallButton className="flex-1 rounded-xl border-2 border-black bg-black text-white hover:bg-white hover:text-black font-bold uppercase tracking-wider" />
                    <WhatsAppButton variant="outline" className="flex-1 rounded-xl border-2 border-black text-black hover:bg-gray-100 font-bold uppercase tracking-wider" />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="bg-white border-4 border-black p-10 rounded-3xl"
                >
                  <h2 className="text-3xl font-bold uppercase tracking-tight mb-8">Send us a message</h2>
                  <ContactForm />
                </motion.div>
              </div>
            </div>
          </section>

          <section className="py-24 bg-black text-white">
            <div className="container-custom">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-8"
              >
                <h2 className="text-4xl font-bold leading-none uppercase tracking-tight text-center">
                  Find us on the map
                </h2>
                <div 
                  className="border-4 border-white overflow-hidden rounded-3xl grayscale hover:grayscale-0 transition-all duration-700 aspect-video md:aspect-auto md:h-[500px]"
                  data-lat="11.6366" 
                  data-lng="92.7214"
                >
                  <iframe
                    src="https://www.google.com/maps?q=Brinda+Clinic,+Aarav+Square,+Garacharama,+Sri+Vijaya+Puram,+Andaman+and+Nicobar+Islands+744105&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Brinda Clinic location in Port Blair, Andaman and Nicobar Islands"
                  ></iframe>
                </div>
              </motion.div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default ContactPage;

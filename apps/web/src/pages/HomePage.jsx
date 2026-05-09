import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Stethoscope, Sparkles, Smile, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import AppointmentModal from '@/components/AppointmentModal.jsx';
import CallButton from '@/components/CallButton.jsx';
import WhatsAppButton from '@/components/WhatsAppButton.jsx';

function HomePage() {
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);
  
  const services = [{
    icon: Stethoscope,
    title: 'General consultation',
    description: 'Comprehensive medical check-ups and consultations for all age groups. Our experienced doctors provide personalized care for your health concerns.'
  }, {
    icon: Sparkles,
    title: 'Skin care & dermatology',
    description: 'Advanced dermatological treatments for various skin conditions. From acne to aging, we offer evidence-based solutions for healthy, radiant skin.'
  }, {
    icon: Smile,
    title: 'Cosmetic treatments',
    description: 'Safe and effective cosmetic procedures to enhance your natural beauty. Our treatments are performed with the highest standards of care and hygiene.'
  }];
  
  return (
    <>
      <Helmet>
        <title>Brinda Clinic - Reveal your best skin with expert dermatology care </title>
        <meta name="description" content="Quality healthcare services in Port Blair, Andaman. Offering general consultation, dermatology, and cosmetic treatments with experienced medical professionals." />
      </Helmet>

      <div className="min-h-screen flex flex-col bg-white">
        <Header />

        <main className="flex-1">
          <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-black text-white">
            <div className="absolute inset-0 z-0 opacity-40 grayscale">
              <img src="https://horizons-cdn.hostinger.com/245c0052-f696-4e08-b2f4-5856085fd0c3/img_20260504_202336-AJoL4.jpg" alt="Modern medical clinic interior" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/60"></div>
            </div>

            <div className="container-custom relative z-10 py-20">
              <div className="max-w-3xl">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="space-y-8">
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-none uppercase tracking-tighter">
                    Reveal your best skin with expert dermatology care
                  </h1>
                  <p className="text-lg md:text-xl leading-relaxed text-gray-300 max-w-prose font-medium">
                    At Brinda Clinic, we are committed to providing exceptional medical care with compassion and professionalism. Located in the heart of Port Blair, we serve the community with dedication to your health and well-being.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Button size="lg" onClick={() => setIsAppointmentModalOpen(true)} className="rounded-xl bg-white text-black hover:bg-gray-200 font-bold uppercase tracking-wider transition-all duration-200 active:scale-[0.98]">
                      Book appointment
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                    <CallButton size="lg" variant="outline" className="rounded-xl border-2 border-white text-black hover:bg-white hover:bg-gray-200 font-bold uppercase tracking-wider" />
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          <section className="py-24 bg-white text-black border-b-2 border-black">
            <div className="container-custom">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-4xl md:text-5xl font-bold leading-none uppercase tracking-tight mb-6">
                  Comprehensive healthcare
                </h2>
                <p className="text-lg leading-relaxed text-gray-600 font-medium">
                  We offer a wide range of medical services to meet your healthcare needs, delivered with expertise and care.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {services.map((service, index) => (
                  <motion.div key={service.title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} className="bg-white border-2 border-black p-8 rounded-2xl transition-all duration-300 hover:bg-black hover:text-white group hover:shadow-xl">
                    <div className="flex flex-col h-full space-y-6">
                      <div className="inline-flex items-center justify-center w-16 h-16 border-2 border-black bg-black text-white group-hover:bg-white group-hover:text-black transition-colors rounded-xl">
                        <service.icon className="w-8 h-8" />
                      </div>
                      <h3 className="text-2xl font-bold uppercase tracking-tight">{service.title}</h3>
                      <p className="text-base leading-relaxed text-gray-600 group-hover:text-gray-300 flex-1">
                        {service.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-24 bg-black text-white">
            <div className="container-custom">
              <div className="border-2 border-white p-12 md:p-16 text-center rounded-3xl">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-2xl mx-auto space-y-8">
                  <h2 className="text-4xl md:text-5xl font-bold leading-none uppercase tracking-tight">
                    Ready to take care of your health?
                  </h2>
                  <p className="text-xl leading-relaxed text-gray-300">
                    Book an appointment today or reach out to us for any health concerns. We're here to help.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                    <Button size="lg" onClick={() => setIsAppointmentModalOpen(true)} className="rounded-xl bg-white text-black hover:bg-gray-200 font-bold uppercase tracking-wider transition-all duration-200 active:scale-[0.98]">
                      Book appointment
                    </Button>
                    <WhatsAppButton size="lg" variant="outline" className="rounded-xl border-2 border-white text-black hover:bg-gray-200 font-bold uppercase tracking-wider" />
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>

      <AppointmentModal isOpen={isAppointmentModalOpen} onClose={() => setIsAppointmentModalOpen(false)} />
    </>
  );
}

export default HomePage;

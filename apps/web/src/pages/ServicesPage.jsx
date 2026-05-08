import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Stethoscope, Sparkles, Smile } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ServiceCard from '@/components/ServiceCard.jsx';
import AppointmentModal from '@/components/AppointmentModal.jsx';

function ServicesPage() {
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);

  const services = [
    {
      icon: Stethoscope,
      title: 'General medical consultation',
      description: 'Our general consultation services cover a wide range of health concerns for patients of all ages. From routine check-ups to diagnosis and treatment of common illnesses, our experienced doctors provide comprehensive care. We take the time to understand your symptoms, medical history, and lifestyle to develop effective treatment plans. Whether you need preventive care, management of chronic conditions, or treatment for acute illnesses, we are here to help.',
      imageUrl: 'https://images.unsplash.com/photo-1666887359800-60e37f543dbd'
    },
    {
      icon: Sparkles,
      title: 'Skin care & dermatology',
      description: 'Our dermatology services address various skin, hair, and nail conditions with evidence-based treatments. We treat acne, eczema, psoriasis, fungal infections, and other dermatological concerns. Our approach combines medical expertise with the latest treatment protocols to help you achieve healthy, clear skin. We also provide guidance on proper skincare routines and preventive measures to maintain long-term skin health.',
      imageUrl: 'https://images.unsplash.com/photo-1552693673-1bf958298935'
    },
    {
      icon: Smile,
      title: 'Cosmetic procedures',
      description: 'We offer safe and effective cosmetic treatments designed to enhance your natural beauty and boost your confidence. Our cosmetic services are performed with meticulous attention to detail and the highest standards of hygiene. From anti-aging treatments to skin rejuvenation procedures, we use proven techniques to deliver natural-looking results. Each treatment plan is customized to your unique needs and aesthetic goals.',
      imageUrl: 'https://images.unsplash.com/photo-1675270714610-11a5cadcc7b3'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Our services - Brinda Clinic</title>
        <meta name="description" content="Comprehensive healthcare services including general consultation, dermatology, and cosmetic treatments at Brinda Clinic in Port Blair, Andaman." />
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
                  Our services
                </h1>
                <p className="text-xl leading-relaxed text-gray-300 font-medium">
                  Comprehensive healthcare solutions tailored to your needs, delivered with expertise and compassion.
                </p>
              </motion.div>
            </div>
          </section>

          <section className="py-24 bg-white text-black">
            <div className="container-custom">
              <div className="space-y-16">
                {services.map((service, index) => (
                  <ServiceCard
                    key={service.title}
                    icon={service.icon}
                    title={service.title}
                    description={service.description}
                    imageUrl={service.imageUrl}
                    ctaText="Book appointment"
                    onCtaClick={() => setIsAppointmentModalOpen(true)}
                    index={index}
                  />
                ))}
              </div>
            </div>
          </section>

          <section className="py-24 bg-black text-white">
            <div className="container-custom">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="border-2 border-white p-12 md:p-16 text-center max-w-4xl mx-auto rounded-3xl"
              >
                <h2 className="text-4xl md:text-5xl font-bold leading-none uppercase tracking-tight mb-6">
                  Not sure which service you need?
                </h2>
                <p className="text-xl leading-relaxed text-gray-300 mb-8">
                  Our team is here to help you find the right treatment for your health concerns. Book a consultation and we'll guide you through the best options.
                </p>
                <button
                  onClick={() => setIsAppointmentModalOpen(true)}
                  className="px-8 py-4 bg-white text-black font-bold uppercase tracking-wider hover:bg-gray-200 transition-colors rounded-xl active:scale-[0.98]"
                >
                  Consult with us
                </button>
              </motion.div>
            </div>
          </section>
        </main>

        <Footer />
      </div>

      <AppointmentModal
        isOpen={isAppointmentModalOpen}
        onClose={() => setIsAppointmentModalOpen(false)}
      />
    </>
  );
}

export default ServicesPage;

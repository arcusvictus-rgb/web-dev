import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Heart, Shield, Users, Award } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: 'Patient-centered care',
      description: 'Every patient receives personalized attention and treatment plans tailored to their unique needs.'
    },
    {
      icon: Shield,
      title: 'Hygiene & safety',
      description: 'We maintain the highest standards of cleanliness and follow strict protocols to ensure patient safety.'
    },
    {
      icon: Users,
      title: 'Experienced team',
      description: 'Our medical professionals bring years of expertise and stay updated with the latest medical advances.'
    },
    {
      icon: Award,
      title: 'Quality treatment',
      description: 'We use evidence-based practices and modern equipment to deliver the best possible outcomes.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>About us - Brinda Clinic</title>
        <meta name="description" content="Learn about Brinda Clinic's commitment to quality healthcare, patient care, and medical excellence in Andaman and Nicobar Islands." />
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
                  About Brinda Clinic
                </h1>
                <p className="text-xl leading-relaxed text-gray-300 font-medium">
                  Dedicated to providing exceptional healthcare services to the community of Andaman and Nicobar Islands.
                </p>
              </motion.div>
            </div>
          </section>

          <section className="py-24 bg-white text-black border-b-2 border-black">
            <div className="container-custom">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-8"
                >
                  <h2 className="text-4xl md:text-5xl font-bold leading-none uppercase tracking-tight">
                    Our mission
                  </h2>
                  <div className="space-y-6 text-lg leading-relaxed text-gray-700">
                    <p>
                      Brinda Clinic was established with a vision to provide accessible, high-quality healthcare to the residents of Port Blair and surrounding areas. We believe that everyone deserves compassionate medical care delivered with professionalism and respect.
                    </p>
                    <p>
                      Our clinic combines modern medical practices with a patient-first approach. We take the time to listen to your concerns, understand your health goals, and develop treatment plans that work for you.
                    </p>
                    <p>
                      Located conveniently at Aarav Square in Garacharama, we serve as a trusted healthcare partner for families across the Andaman and Nicobar Islands. Our commitment to excellence extends beyond treatment to building lasting relationships with our patients.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="border-4 border-black p-2 bg-black rounded-3xl"
                >
                  <img
                    src="https://images.unsplash.com/photo-1563932127565-699eeea1e17a"
                    alt="Modern medical clinic reception area"
                    className="w-full h-full object-cover grayscale rounded-2xl"
                  />
                </motion.div>
              </div>
            </div>
          </section>

          <section className="py-24 bg-gray-100 text-black">
            <div className="container-custom">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center max-w-3xl mx-auto mb-16"
              >
                <h2 className="text-4xl md:text-5xl font-bold leading-none uppercase tracking-tight mb-6">
                  Our core values
                </h2>
                <p className="text-lg leading-relaxed text-gray-600 font-medium">
                  The principles that guide everything we do at Brinda Clinic.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {values.map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white border-2 border-black p-8 hover:bg-black hover:text-white transition-colors group rounded-2xl shadow-sm hover:shadow-lg"
                  >
                    <div className="flex items-start space-x-6">
                      <div className="flex items-center justify-center w-14 h-14 border-2 border-black bg-black text-white group-hover:bg-white group-hover:text-black flex-shrink-0 transition-colors rounded-xl">
                        <value.icon className="w-7 h-7" />
                      </div>
                      <div className="space-y-3">
                        <h3 className="text-2xl font-bold uppercase tracking-tight">{value.title}</h3>
                        <p className="text-base leading-relaxed text-gray-600 group-hover:text-gray-300">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default AboutPage;

import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import TeamMemberCard from '@/components/TeamMemberCard.jsx';

function TeamPage() {
  const teamMembers = [
    {
      name: 'Dr. Rajesh Kumar',
      qualification: 'MBBS, MD',
      specialization: 'General physician',
      imageUrl: 'https://images.unsplash.com/photo-1666887359800-60e37f543dbd'
    },
    {
      name: 'Dr. Priya Sharma',
      qualification: 'MBBS, MD (Dermatology)',
      specialization: 'Dermatologist',
      imageUrl: 'https://images.unsplash.com/photo-1552693673-1bf958298935'
    },
    {
      name: 'Dr. Anil Verma',
      qualification: 'MBBS, DNB',
      specialization: 'Cosmetic specialist',
      imageUrl: 'https://images.unsplash.com/photo-1666887359800-60e37f543dbd'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Our team - Brinda Clinic</title>
        <meta name="description" content="Meet our experienced medical professionals at Brinda Clinic. Dedicated doctors providing quality healthcare in Port Blair, Andaman." />
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
                  Meet our team
                </h1>
                <p className="text-xl leading-relaxed text-gray-300 font-medium">
                  Experienced medical professionals dedicated to your health and well-being.
                </p>
              </motion.div>
            </div>
          </section>

          <section className="py-24 bg-white text-black">
            <div className="container-custom">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {teamMembers.map((member, index) => (
                  <TeamMemberCard
                    key={member.name}
                    name={member.name}
                    qualification={member.qualification}
                    specialization={member.specialization}
                    imageUrl={member.imageUrl}
                    index={index}
                  />
                ))}
              </div>
            </div>
          </section>

          <section className="py-24 bg-gray-100 text-black border-t-2 border-black">
            <div className="container-custom">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-4xl mx-auto text-center space-y-8 bg-white border-2 border-black p-12 rounded-3xl shadow-sm"
              >
                <h2 className="text-4xl md:text-5xl font-bold leading-none uppercase tracking-tight">
                  Committed to excellence
                </h2>
                <div className="space-y-6 text-lg leading-relaxed text-gray-700">
                  <p>
                    Our medical team brings together years of experience, specialized training, and a genuine commitment to patient care. Each member of our team stays current with the latest medical advances to provide you with the best possible treatment.
                  </p>
                  <p>
                    We believe in building lasting relationships with our patients, taking the time to understand your concerns, and working together to achieve your health goals.
                  </p>
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

export default TeamPage;

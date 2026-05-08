import React from 'react';
import { motion } from 'framer-motion';

function TeamMemberCard({ name, qualification, specialization, imageUrl, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white border-2 border-black p-6 rounded-2xl transition-all duration-300 hover:bg-black hover:text-white group hover:shadow-lg"
    >
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="w-32 h-32 border-2 border-black overflow-hidden bg-muted rounded-full">
          <img
            src={imageUrl}
            alt={name}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
          />
        </div>
        <div className="space-y-2">
          <h3 className="text-xl font-semibold">{name}</h3>
          <p className="text-sm font-medium group-hover:text-gray-300">{qualification}</p>
          <p className="text-sm text-muted-foreground group-hover:text-gray-400">{specialization}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default TeamMemberCard;

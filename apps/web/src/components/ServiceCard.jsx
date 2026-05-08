import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

function ServiceCard({ icon: Icon, title, description, ctaText, onCtaClick, index = 0, imageUrl }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white border-2 border-black p-6 md:p-8 rounded-2xl">
        {index % 2 === 0 ? (
          <>
            <div className="space-y-4">
              <div className="inline-flex items-center justify-center w-14 h-14 border-2 border-black bg-black text-white rounded-xl">
                <Icon className="w-7 h-7" />
              </div>
              <h3 className="text-2xl md:text-3xl font-semibold leading-snug">{title}</h3>
              <p className="text-base leading-relaxed text-muted-foreground max-w-prose">
                {description}
              </p>
              {ctaText && onCtaClick && (
                <div className="pt-2">
                  <Button
                    onClick={onCtaClick}
                    variant="outline"
                    className="group/btn border-2 border-black rounded-lg transition-all duration-200 hover:bg-black hover:text-white active:scale-[0.98]"
                  >
                    {ctaText}
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </div>
              )}
            </div>
            {imageUrl && (
              <div className="border-2 border-black overflow-hidden rounded-xl">
                <img
                  src={imageUrl}
                  alt={title}
                  className="w-full h-64 md:h-80 object-cover grayscale transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            )}
          </>
        ) : (
          <>
            {imageUrl && (
              <div className="border-2 border-black overflow-hidden rounded-xl md:order-1">
                <img
                  src={imageUrl}
                  alt={title}
                  className="w-full h-64 md:h-80 object-cover grayscale transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            )}
            <div className="space-y-4 md:order-2">
              <div className="inline-flex items-center justify-center w-14 h-14 border-2 border-black bg-black text-white rounded-xl">
                <Icon className="w-7 h-7" />
              </div>
              <h3 className="text-2xl md:text-3xl font-semibold leading-snug">{title}</h3>
              <p className="text-base leading-relaxed text-muted-foreground max-w-prose">
                {description}
              </p>
              {ctaText && onCtaClick && (
                <div className="pt-2">
                  <Button
                    onClick={onCtaClick}
                    variant="outline"
                    className="group/btn border-2 border-black rounded-lg transition-all duration-200 hover:bg-black hover:text-white active:scale-[0.98]"
                  >
                    {ctaText}
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </motion.div>
  );
}

export default ServiceCard;

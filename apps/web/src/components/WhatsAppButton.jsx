import React from 'react';
import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

function WhatsAppButton({ className = '', variant = 'default', size = 'default' }) {
  const phoneNumber = '919476021494';
  const message = encodeURIComponent('Hello Brinda Clinic, I would like to inquire about your services.');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  const handleClick = () => {
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <Button
      onClick={handleClick}
      variant={variant}
      size={size}
      className={`transition-all duration-200 active:scale-[0.98] ${className}`}
    >
      <MessageCircle className="w-4 h-4 mr-2" />
      WhatsApp
    </Button>
  );
}

export default WhatsAppButton;

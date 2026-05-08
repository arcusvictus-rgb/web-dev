import React from 'react';
import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

function CallButton({ className = '', variant = 'default', size = 'default', showIcon = true }) {
  const phoneNumber = '+919476021494';

  return (
    <Button
      asChild
      variant={variant}
      size={size}
      className={`transition-all duration-200 active:scale-[0.98] ${className}`}
    >
      <a href={`tel:${phoneNumber}`}>
        {showIcon && <Phone className="w-4 h-4 mr-2" />}
        Call now
      </a>
    </Button>
  );
}

export default CallButton;

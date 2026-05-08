import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[+]?[\d\s-()]{10,}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    setTimeout(() => {
      const submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
      submissions.push({
        ...formData,
        timestamp: new Date().toISOString()
      });
      localStorage.setItem('contactSubmissions', JSON.stringify(submissions));
      
      toast.success('Message sent successfully. We will contact you soon.');
      
      setFormData({ name: '', phone: '', message: '' });
      setErrors({});
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name" className="font-semibold">Full name</Label>
        <Input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
          className="border-2 border-black rounded-lg text-black placeholder:text-gray-500 focus-visible:ring-0 focus-visible:border-black"
        />
        {errors.name && (
          <p className="text-sm font-medium text-black">{errors.name}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone" className="font-semibold">Phone number</Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          placeholder="+91 94760 21494"
          className="border-2 border-black rounded-lg text-black placeholder:text-gray-500 focus-visible:ring-0 focus-visible:border-black"
        />
        {errors.phone && (
          <p className="text-sm font-medium text-black">{errors.phone}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className="font-semibold">Message</Label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="How can we help you?"
          rows={5}
          className="border-2 border-black rounded-lg text-black placeholder:text-gray-500 focus-visible:ring-0 focus-visible:border-black"
        />
        {errors.message && (
          <p className="text-sm font-medium text-black">{errors.message}</p>
        )}
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-lg border-2 border-black bg-black text-white hover:bg-white hover:text-black transition-all duration-200 active:scale-[0.98]"
      >
        {isSubmitting ? 'Sending...' : 'Send message'}
      </Button>
    </form>
  );
}

export default ContactForm;

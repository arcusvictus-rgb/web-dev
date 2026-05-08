import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { toast } from 'sonner';

function AppointmentModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[+]?[\d\s-()]{10,}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    if (!formData.date) newErrors.date = 'Date is required';
    if (!formData.time) newErrors.time = 'Time is required';
    if (!formData.service) newErrors.service = 'Please select a service';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    setTimeout(() => {
      const appointments = JSON.parse(localStorage.getItem('appointments') || '[]');
      appointments.push({
        ...formData,
        timestamp: new Date().toISOString()
      });
      localStorage.setItem('appointments', JSON.stringify(appointments));
      
      toast.success('Appointment booked successfully. We will confirm shortly.');
      
      setFormData({ name: '', phone: '', date: '', time: '', service: '', message: '' });
      setErrors({});
      setIsSubmitting(false);
      onClose();
    }, 1000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleServiceChange = (value) => {
    setFormData(prev => ({ ...prev, service: value }));
    if (errors.service) {
      setErrors(prev => ({ ...prev, service: '' }));
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md border-2 border-black rounded-xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Book an appointment</DialogTitle>
          <DialogDescription className="text-black">
            Fill in your details and we will confirm your appointment shortly.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="font-semibold">Full name</Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="border-2 border-black rounded-lg text-black placeholder:text-gray-500 focus-visible:ring-0"
            />
            {errors.name && <p className="text-sm font-medium text-black">{errors.name}</p>}
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
              className="border-2 border-black rounded-lg text-black placeholder:text-gray-500 focus-visible:ring-0"
            />
            {errors.phone && <p className="text-sm font-medium text-black">{errors.phone}</p>}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="date" className="font-semibold">Preferred date</Label>
              <Input
                id="date"
                name="date"
                type="date"
                value={formData.date}
                onChange={handleChange}
                min={new Date().toISOString().split('T')[0]}
                className="border-2 border-black rounded-lg text-black focus-visible:ring-0"
              />
              {errors.date && <p className="text-sm font-medium text-black">{errors.date}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="time" className="font-semibold">Preferred time</Label>
              <Input
                id="time"
                name="time"
                type="time"
                value={formData.time}
                onChange={handleChange}
                className="border-2 border-black rounded-lg text-black focus-visible:ring-0"
              />
              {errors.time && <p className="text-sm font-medium text-black">{errors.time}</p>}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="service" className="font-semibold">Service type</Label>
            <Select value={formData.service} onValueChange={handleServiceChange}>
              <SelectTrigger className="border-2 border-black rounded-lg text-black focus:ring-0">
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent className="border-2 border-black rounded-lg">
                <SelectItem value="general">General consultation</SelectItem>
                <SelectItem value="dermatology">Dermatology</SelectItem>
                <SelectItem value="cosmetic">Cosmetic treatments</SelectItem>
              </SelectContent>
            </Select>
            {errors.service && <p className="text-sm font-medium text-black">{errors.service}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="font-semibold">Additional notes (optional)</Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Any specific concerns or requirements?"
              rows={3}
              className="border-2 border-black rounded-lg text-black placeholder:text-gray-500 focus-visible:ring-0"
            />
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1 border-2 border-black rounded-lg hover:bg-gray-100 transition-all duration-200 active:scale-[0.98]"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 border-2 border-black rounded-lg bg-black text-white hover:bg-white hover:text-black transition-all duration-200 active:scale-[0.98]"
            >
              {isSubmitting ? 'Booking...' : 'Book appointment'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default AppointmentModal;

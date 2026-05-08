import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import WhatsAppButton from './WhatsAppButton.jsx';
import CallButton from './CallButton.jsx';

function Header() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/team', label: 'Team' },
    { path: '/contact', label: 'Contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b-2 border-black bg-white">
      <div className="container-custom">
        <div className="flex h-16 md:h-20 items-center justify-between">
          <Link to="/" className="flex items-center space-x-3 transition-opacity hover:opacity-80">
            <img
              src="https://horizons-cdn.hostinger.com/245c0052-f696-4e08-b2f4-5856085fd0c3/bb0cfd7197054be658d983047ef529f7.jpg"
              alt="Brinda Clinic Logo"
              className="h-10 md:h-12 w-auto object-contain rounded-sm"
            />
            <span className="text-lg md:text-2xl font-extrabold tracking-tight uppercase text-black">
              BRINDA CLINIC
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 text-sm font-bold uppercase tracking-wider transition-all duration-200 rounded-lg ${
                  isActive(link.path)
                    ? 'bg-black text-white'
                    : 'text-black hover:bg-gray-100'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-3">
            <CallButton variant="outline" size="sm" className="border-2 border-black rounded-lg font-bold uppercase tracking-wider hover:bg-black hover:text-white" />
          </div>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="rounded-lg hover:bg-gray-100">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 border-l-2 border-black bg-white rounded-l-2xl">
              <SheetHeader>
                <SheetTitle className="flex items-center space-x-3 text-left">
                  <img
                    src="https://horizons-cdn.hostinger.com/245c0052-f696-4e08-b2f4-5856085fd0c3/bb0cfd7197054be658d983047ef529f7.jpg"
                    alt="Brinda Clinic Logo"
                    className="h-8 w-auto object-contain rounded-sm"
                  />
                  <span className="text-lg font-extrabold tracking-tight uppercase text-black">
                    BRINDA CLINIC
                  </span>
                </SheetTitle>
              </SheetHeader>
              
              <nav className="flex flex-col space-y-2 mt-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`px-4 py-3 text-sm font-bold uppercase tracking-wider transition-all duration-200 rounded-lg ${
                      isActive(link.path)
                        ? 'bg-black text-white'
                        : 'text-black hover:bg-gray-100'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              <div className="flex flex-col space-y-3 mt-8 pt-8 border-t-2 border-black">
                <CallButton className="w-full rounded-lg border-2 border-black bg-black text-white hover:bg-white hover:text-black font-bold uppercase" />
                <WhatsAppButton variant="outline" className="w-full rounded-lg border-2 border-black font-bold uppercase hover:bg-gray-100" />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

export default Header;

import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, Utensils, Heart, Sunset, ChevronRight } from 'lucide-react';
import { ASSETS } from '../data/assets.ts';

interface HeaderProps {
  onOpenBooking: (occasion?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#our-story' },
    { name: 'Menu', href: '#menu' },
    { name: 'Favorites', href: '#signature' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Private Dining', href: '#events' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Banner: Exact match to "Why guests dine with us." from reference */}
      <div className="bg-[#1E1714] text-stone-300 text-xs py-2 px-4 border-b border-[#30241F] relative z-50">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-[11px] sm:text-xs">
          <div className="flex items-center gap-2 font-medium text-stone-300">
            <span className="text-[#BA704F] text-xs font-serif italic tracking-wider">Why guests dine with us</span>
          </div>

          <div className="hidden md:flex items-center gap-6 text-stone-400">
            <div className="flex items-center gap-1.5">
              <span className="w-4 h-4 rounded-full bg-[#352520] flex items-center justify-center text-[#D9875F]">
                <Sparkles className="w-2.5 h-2.5" />
              </span>
              <span>100% Pure Veg & Jain</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-4 h-4 rounded-full bg-[#352520] flex items-center justify-center text-[#D9875F]">
                <Utensils className="w-2.5 h-2.5" />
              </span>
              <span>Chef-Crafted Mewari</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-4 h-4 rounded-full bg-[#352520] flex items-center justify-center text-[#D9875F]">
                <Heart className="w-2.5 h-2.5" />
              </span>
              <span>Warm Hospitality</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-4 h-4 rounded-full bg-[#352520] flex items-center justify-center text-[#D9875F]">
                <Sunset className="w-2.5 h-2.5" />
              </span>
              <span>Lake Pichola Terrace</span>
            </div>
          </div>

          <div className="flex items-center gap-4 text-stone-300 text-[11px]">
            <span className="hidden sm:inline">Daily: 10:00 AM – 11:00 PM</span>
            <a
              href="tel:+918619845277"
              className="text-[#D9875F] hover:text-[#E89E79] font-medium transition-colors"
            >
              +91 8619845277
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <header
        id="main-header"
        className={`sticky top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF6EF]/95 backdrop-blur-md py-3 shadow-[0_4px_20px_-4px_rgba(40,25,18,0.08)] border-b border-[#ECE3D6]'
            : 'bg-[#FAF6EF] py-4 border-b border-[#ECE3D6]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo matching reference */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
            className="flex items-center gap-3 group focus:outline-none"
            id="brand-logo-link"
          >
            <div className="w-9 h-9 rounded-full bg-[#A44A29]/10 border border-[#A44A29]/30 flex items-center justify-center p-1 group-hover:scale-105 transition-transform">
              <img
                src={ASSETS.logo.favicon}
                alt="Jalsa Emblem"
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain"
                loading="eager"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-medium tracking-wider text-[#241C18] leading-none">
                Jalsa Udaipur
              </span>
              <span className="text-[9px] tracking-[0.24em] uppercase text-[#A44A29] font-sans font-medium mt-0.5">
                Lake View Dining
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-9" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-xs tracking-wider font-sans text-[#52443C] hover:text-[#A44A29] transition-colors duration-200 uppercase font-medium py-1"
                id={`nav-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action: Pill button matching reference */}
          <div className="flex items-center gap-3">
            <button
              id="header-book-table-btn"
              onClick={() => onOpenBooking()}
              className="inline-flex items-center justify-center px-5 py-2.5 text-xs font-sans tracking-wider uppercase font-medium transition-all duration-300 rounded-full bg-[#451A14] hover:bg-[#2D100C] text-white shadow-sm hover:shadow-md cursor-pointer active:scale-98"
            >
              Reserve a Table
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-full text-[#241C18] hover:bg-[#EFE7DC] transition-colors focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#FAF6EF] border-b border-[#ECE3D6] px-6 py-6 animate-fadeIn shadow-xl">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="text-sm font-sans tracking-wide text-[#241C18] hover:text-[#A44A29] py-1 border-b border-[#EFE7DC] flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-[#A44A29]/60" />
                </a>
              ))}
              <div className="pt-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full py-3 rounded-full bg-[#451A14] text-white text-xs font-sans tracking-wider uppercase font-medium text-center shadow-md"
                >
                  Reserve a Table
                </button>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

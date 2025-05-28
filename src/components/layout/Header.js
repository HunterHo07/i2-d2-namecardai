'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const Logo = () => (
  <div className="flex items-center space-x-3">
    {/* Custom SVG Logo */}
    <motion.div
      className="relative"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="glow-effect"
      >
        {/* Outer Ring */}
        <circle
          cx="20"
          cy="20"
          r="18"
          stroke="url(#gradient1)"
          strokeWidth="2"
          fill="none"
          className="animate-pulse-slow"
        />
        
        {/* Inner Card Shape */}
        <rect
          x="8"
          y="12"
          width="24"
          height="16"
          rx="3"
          fill="url(#gradient2)"
          className="opacity-80"
        />
        
        {/* AR Lines */}
        <path
          d="M12 16 L16 12 M28 16 L24 12 M12 24 L16 28 M28 24 L24 28"
          stroke="#00f5ff"
          strokeWidth="1.5"
          strokeLinecap="round"
          className="animate-pulse"
        />
        
        {/* Center Dot */}
        <circle
          cx="20"
          cy="20"
          r="2"
          fill="#00f5ff"
          className="animate-ping"
        />
        
        {/* Gradients */}
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00f5ff" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1a1a1a" />
            <stop offset="100%" stopColor="#2a2a2a" />
          </linearGradient>
        </defs>
      </svg>
    </motion.div>
    
    {/* Brand Name */}
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <h1 className="text-2xl font-bold gradient-text">
        NameCard<span className="text-primary-cyan">AI</span>
      </h1>
    </motion.div>
  </div>
);

const Navigation = ({ isOpen, onClose }) => {
  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/demo', label: 'Demo' },
    { href: '/pitch', label: 'Pitch' },
    { href: '/why-us', label: 'Why Us' },
    { href: '/roadmap', label: 'Roadmap' },
    { href: '/signup', label: 'Get Started' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Mobile Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
            onClick={onClose}
          />
          
          {/* Mobile Menu */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-80 bg-surface/95 backdrop-blur-lg border-l border-border z-50 lg:hidden"
          >
            <div className="flex flex-col h-full p-6">
              <div className="flex justify-between items-center mb-8">
                <Logo />
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-border rounded-lg transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <nav className="flex-1">
                <ul className="space-y-4">
                  {navItems.map((item, index) => (
                    <motion.li
                      key={item.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        onClick={onClose}
                        className={`block px-4 py-3 rounded-lg transition-all duration-200 ${
                          item.label === 'Get Started'
                            ? 'bg-gradient-to-r from-primary-cyan to-primary-purple text-black font-semibold hover:shadow-lg hover:shadow-primary-cyan/25'
                            : 'hover:bg-border hover:text-primary-cyan'
                        }`}
                      >
                        {item.label}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </nav>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/demo', label: 'Demo' },
    { href: '/pitch', label: 'Pitch' },
    { href: '/why-us', label: 'Why Us' },
    { href: '/roadmap', label: 'Roadmap' },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-surface/80 backdrop-blur-lg border-b border-border shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <Logo />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-text-secondary hover:text-primary-cyan transition-colors duration-200 font-medium"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* CTA Button & Mobile Menu */}
            <div className="flex items-center space-x-4">
              <Link
                href="/signup"
                className="hidden sm:inline-flex items-center px-6 py-2 bg-gradient-to-r from-primary-cyan to-primary-purple text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-primary-cyan/25 transition-all duration-200"
              >
                Get Started
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="lg:hidden p-2 hover:bg-border rounded-lg transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Navigation */}
      <Navigation isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  );
}

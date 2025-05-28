'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import Button from '../ui/Button';

// Typing Effect Component
const TypingText = ({ text, delay = 0, speed = 50 }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex < text.length) {
        setDisplayText(text.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }
    }, delay + currentIndex * speed);

    return () => clearTimeout(timer);
  }, [currentIndex, text, delay, speed]);

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorTimer);
  }, []);

  return (
    <span>
      {displayText}
      <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}>|</span>
    </span>
  );
};

// 3D Card Preview Component
const ARCardPreview = () => {
  const cardRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        setMousePosition({
          x: (e.clientX - centerX) / 10,
          y: (e.clientY - centerY) / 10
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <motion.div
      ref={cardRef}
      className="relative w-80 h-48 mx-auto"
      style={{
        transform: `perspective(1000px) rotateX(${mousePosition.y}deg) rotateY(${mousePosition.x}deg)`,
        transformStyle: 'preserve-3d'
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      {/* Main Card */}
      <div className="absolute inset-0 bg-gradient-to-br from-surface to-border rounded-xl shadow-2xl border border-primary-cyan/30">
        {/* AR Corner Indicators */}
        <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-primary-cyan animate-pulse" />
        <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-primary-cyan animate-pulse" />
        <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-primary-cyan animate-pulse" />
        <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-primary-cyan animate-pulse" />
        
        {/* Card Content */}
        <div className="p-6 h-full flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 bg-gradient-to-br from-primary-cyan to-primary-purple rounded-full mb-3 animate-pulse" />
            <h3 className="text-lg font-bold text-text-primary mb-1">John Doe</h3>
            <p className="text-sm text-text-secondary">Senior Developer</p>
            <p className="text-xs text-text-muted">TechCorp Inc.</p>
          </div>
          
          <div className="flex space-x-2">
            <div className="w-6 h-6 bg-primary-cyan/20 rounded border border-primary-cyan animate-pulse" />
            <div className="w-6 h-6 bg-primary-purple/20 rounded border border-primary-purple animate-pulse" />
            <div className="w-6 h-6 bg-accent-green/20 rounded border border-accent-green animate-pulse" />
          </div>
        </div>
        
        {/* Holographic Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-cyan/10 to-transparent animate-pulse rounded-xl" />
      </div>
      
      {/* Floating Particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-primary-cyan rounded-full"
          style={{
            left: `${20 + i * 15}%`,
            top: `${30 + (i % 2) * 40}%`,
          }}
          animate={{
            y: [-10, 10, -10],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 2 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
    </motion.div>
  );
};

export default function HeroSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section 
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-surface to-background"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-20">
          <div className="grid grid-cols-12 grid-rows-8 h-full w-full">
            {[...Array(96)].map((_, i) => (
              <motion.div
                key={i}
                className="border border-primary-cyan/10"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.3, 0] }}
                transition={{
                  duration: 3,
                  delay: i * 0.05,
                  repeat: Infinity,
                  repeatDelay: 2
                }}
              />
            ))}
          </div>
        </div>
        
        {/* Floating Orbs */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary-cyan/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-block px-4 py-2 bg-primary-cyan/10 border border-primary-cyan/30 rounded-full text-primary-cyan text-sm font-medium mb-4">
                🚀 The Future of Networking is Here
              </span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-hero mb-6">
              <span className="gradient-text">Your Name.</span>
              <br />
              <TypingText text="Reinvented." delay={1000} speed={100} />
            </motion.h1>

            <motion.p variants={itemVariants} className="text-xl text-text-secondary mb-8 max-w-2xl">
              AR-enhanced digital business cards that let you share stunning, interactive profiles via QR, NFC, facial recognition, or camera scan—
              <span className="text-primary-cyan font-semibold">no app required</span>.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                href="/demo"
                className="group"
              >
                <span className="mr-2">🎮</span>
                Try Live Demo
                <motion.span
                  className="ml-2"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                href="/signup"
              >
                <span className="mr-2">✨</span>
                Get Started Free
              </Button>
            </motion.div>

            <motion.div variants={itemVariants} className="mt-8 flex items-center justify-center lg:justify-start space-x-6 text-sm text-text-muted">
              <div className="flex items-center">
                <span className="w-2 h-2 bg-accent-green rounded-full mr-2 animate-pulse" />
                No App Required
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-accent-green rounded-full mr-2 animate-pulse" />
                Works Everywhere
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-accent-green rounded-full mr-2 animate-pulse" />
                AR-Powered
              </div>
            </motion.div>
          </div>

          {/* Right Content - AR Card Preview */}
          <motion.div variants={itemVariants} className="relative">
            <ARCardPreview />
            
            {/* Stats Overlay */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.5 }}
              className="absolute -bottom-6 -left-6 bg-surface/90 backdrop-blur-sm border border-border rounded-lg p-4 shadow-lg"
            >
              <div className="text-2xl font-bold text-primary-cyan">70%</div>
              <div className="text-xs text-text-secondary">Higher Retention</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.8 }}
              className="absolute -top-6 -right-6 bg-surface/90 backdrop-blur-sm border border-border rounded-lg p-4 shadow-lg"
            >
              <div className="text-2xl font-bold text-accent-green">7B+</div>
              <div className="text-xs text-text-secondary">Cards Replaced</div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-primary-cyan rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-primary-cyan rounded-full mt-2"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}

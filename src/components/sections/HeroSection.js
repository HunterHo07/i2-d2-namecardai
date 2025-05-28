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

// Next-Level 3D AR Card Preview Component
const ARCardPreview = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [currentCard, setCurrentCard] = useState(0);
  const cardRef = useRef(null);

  const cardVariants = [
    {
      name: "Alex Chen",
      title: "AI Engineer",
      company: "QuantumTech",
      email: "alex@quantumtech.ai",
      avatar: "AC",
      gradient: "from-primary-cyan via-primary-purple to-accent-blue",
      accent: "#00f5ff",
      skills: ['AI/ML', 'React', 'AR/VR']
    },
    {
      name: "Sarah Kim",
      title: "Blockchain Dev",
      company: "CryptoLabs",
      email: "sarah@cryptolabs.io",
      avatar: "SK",
      gradient: "from-primary-purple via-accent-pink to-accent-orange",
      accent: "#8b5cf6",
      skills: ['Web3', 'Solidity', 'DeFi']
    },
    {
      name: "Marcus Rodriguez",
      title: "AR Designer",
      company: "MetaStudio",
      email: "marcus@metastudio.com",
      avatar: "MR",
      gradient: "from-accent-green via-accent-blue to-primary-cyan",
      accent: "#10b981",
      skills: ['3D Design', 'Unity', 'Blender']
    }
  ];

  const currentCardData = cardVariants[currentCard];

  // Auto-rotate cards every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCard((prev) => (prev + 1) % cardVariants.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      setMousePosition({
        x: Math.max(-25, Math.min(25, (e.clientX - centerX) / 12)),
        y: Math.max(-25, Math.min(25, (e.clientY - centerY) / 12))
      });
    }
  };

  return (
    <div className="relative w-full max-w-lg mx-auto">
      {/* Ambient Glow Effect */}
      <div
        className="absolute inset-0 rounded-3xl blur-3xl opacity-60 animate-pulse"
        style={{
          background: `radial-gradient(circle, ${currentCardData.accent}20, transparent 70%)`
        }}
      />

      {/* Floating Particles Around Card */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              background: currentCardData.accent,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -60, 0],
              x: [0, Math.random() * 40 - 20, 0],
              opacity: [0, 1, 0],
              scale: [0, 2, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Main Card Container */}
      <motion.div
        ref={cardRef}
        className="relative w-96 h-64 mx-auto cursor-pointer"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          setMousePosition({ x: 0, y: 0 });
        }}
        whileHover={{ scale: 1.02 }}
        style={{
          transform: `perspective(1200px) rotateX(${mousePosition.y}deg) rotateY(${mousePosition.x}deg)`,
          transformStyle: 'preserve-3d'
        }}
      >
        {/* Card Shadow */}
        <div className="absolute inset-0 bg-black/30 rounded-2xl blur-2xl transform translate-y-8 scale-95" />

        {/* Main Card */}
        <motion.div
          key={currentCard}
          initial={{ opacity: 0, rotateY: 90, scale: 0.8 }}
          animate={{ opacity: 1, rotateY: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={`relative w-full h-full bg-gradient-to-br ${currentCardData.gradient} rounded-2xl shadow-2xl border-2 overflow-hidden`}
          style={{
            borderColor: currentCardData.accent,
            boxShadow: `0 0 50px ${currentCardData.accent}30, 0 25px 50px rgba(0,0,0,0.4)`
          }}
        >
          {/* Neural Network Background */}
          <div className="absolute inset-0 opacity-10">
            <svg width="100%" height="100%" viewBox="0 0 400 270">
              {[...Array(25)].map((_, i) => (
                <motion.circle
                  key={i}
                  cx={40 + (i % 6) * 60}
                  cy={40 + Math.floor(i / 6) * 50}
                  r="2"
                  fill="white"
                  animate={{
                    opacity: [0.3, 1, 0.3],
                    scale: [1, 1.8, 1]
                  }}
                  transition={{
                    duration: 2.5,
                    delay: i * 0.1,
                    repeat: Infinity
                  }}
                />
              ))}
              {[...Array(20)].map((_, i) => (
                <motion.line
                  key={`line-${i}`}
                  x1={40 + (i % 6) * 60}
                  y1={40 + Math.floor(i / 6) * 50}
                  x2={100 + (i % 5) * 60}
                  y2={90 + (i % 4) * 50}
                  stroke="white"
                  strokeWidth="1"
                  animate={{
                    opacity: [0.2, 0.9, 0.2]
                  }}
                  transition={{
                    duration: 3.5,
                    delay: i * 0.15,
                    repeat: Infinity
                  }}
                />
              ))}
            </svg>
          </div>

          {/* Advanced AR Corner Indicators */}
          {[
            { position: "top-4 left-4", corners: "border-l-4 border-t-4 rounded-tl-xl" },
            { position: "top-4 right-4", corners: "border-r-4 border-t-4 rounded-tr-xl" },
            { position: "bottom-4 left-4", corners: "border-l-4 border-b-4 rounded-bl-xl" },
            { position: "bottom-4 right-4", corners: "border-r-4 border-b-4 rounded-br-xl" }
          ].map((corner, i) => (
            <div key={i} className={`absolute ${corner.position} w-10 h-10`}>
              <motion.div
                className={`absolute inset-0 ${corner.corners} border-white`}
                animate={{
                  opacity: [0.4, 1, 0.4],
                  scale: [1, 1.15, 1]
                }}
                transition={{
                  duration: 2.5,
                  delay: i * 0.4,
                  repeat: Infinity
                }}
              />
              <motion.div
                className="absolute top-1 left-1 w-3 h-3 bg-white rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.6, 1, 0.6]
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.3,
                  repeat: Infinity
                }}
              />
            </div>
          ))}

          {/* Scanning Line Effect */}
          {isHovered && (
            <motion.div
              className="absolute left-0 right-0 h-1 pointer-events-none"
              style={{
                background: `linear-gradient(90deg, transparent, ${currentCardData.accent}, transparent)`,
                boxShadow: `0 0 15px ${currentCardData.accent}`
              }}
              animate={{
                top: ['0%', '100%'],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          )}

          {/* Card Content */}
          <div className="relative z-10 p-8 h-full flex flex-col justify-between">
            {/* Header Section */}
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-4">
                {/* 3D Avatar */}
                <motion.div
                  className="relative w-18 h-18 rounded-xl overflow-hidden bg-white/20 backdrop-blur-sm border border-white/30"
                  animate={{
                    boxShadow: [
                      `0 0 25px ${currentCardData.accent}40`,
                      `0 0 40px ${currentCardData.accent}70`,
                      `0 0 25px ${currentCardData.accent}40`
                    ]
                  }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                  style={{
                    transform: `rotateY(${mousePosition.x * 0.3}deg) rotateX(${mousePosition.y * 0.3}deg)`
                  }}
                >
                  <div className="absolute inset-2 rounded-lg bg-black/20 flex items-center justify-center text-xl font-bold text-white">
                    {currentCardData.avatar}
                  </div>
                  {/* Holographic overlay */}
                  <motion.div
                    className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    animate={{
                      x: isHovered ? ['-100%', '100%'] : 0
                    }}
                    transition={{
                      duration: 1.8,
                      ease: "easeInOut",
                      repeat: isHovered ? Infinity : 0
                    }}
                  />
                </motion.div>

                {/* Name and Title */}
                <div>
                  <motion.h3
                    className="text-2xl font-bold text-white mb-1"
                    animate={{
                      textShadow: [
                        `0 0 15px ${currentCardData.accent}50`,
                        `0 0 25px ${currentCardData.accent}80`,
                        `0 0 15px ${currentCardData.accent}50`
                      ]
                    }}
                    transition={{ duration: 2.5, repeat: Infinity }}
                  >
                    {currentCardData.name}
                  </motion.h3>
                  <p className="text-white/90 text-sm mb-1 font-medium">{currentCardData.title}</p>
                  <p className="text-white/70 text-xs">{currentCardData.company}</p>

                  {/* Status Indicator */}
                  <div className="flex items-center space-x-2 mt-3">
                    <motion.div
                      className="w-2 h-2 bg-white rounded-full"
                      animate={{
                        scale: [1, 1.4, 1],
                        opacity: [0.7, 1, 0.7]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <span className="text-xs text-white/70">Available for Projects</span>
                  </div>
                </div>
              </div>

              {/* AR Badge */}
              <motion.div
                className="w-14 h-14 rounded-xl border-2 border-white/40 bg-white/15 backdrop-blur-sm flex items-center justify-center"
                whileHover={{
                  scale: 1.1,
                  boxShadow: `0 0 25px ${currentCardData.accent}50`
                }}
                animate={{
                  rotateY: [0, 360]
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                <span className="text-white font-bold text-sm">AR</span>
              </motion.div>
            </div>

            {/* Skills Tags */}
            <div className="flex flex-wrap gap-2 my-4">
              {currentCardData.skills.map((skill, i) => (
                <motion.span
                  key={skill}
                  className="px-3 py-1 rounded-full text-xs font-medium bg-white/20 text-white border border-white/30 backdrop-blur-sm"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.15 + 1.2 }}
                  whileHover={{
                    scale: 1.05,
                    background: 'rgba(255,255,255,0.3)'
                  }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>

            {/* Contact Information */}
            <div className="space-y-2">
              <motion.div
                className="flex items-center space-x-3 text-sm text-white/90"
                whileHover={{ x: 5 }}
              >
                <span className="text-white text-lg">📧</span>
                <span className="font-mono text-xs">{currentCardData.email}</span>
              </motion.div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-3 mt-4">
              {[
                { icon: '💼', platform: 'LinkedIn' },
                { icon: '💻', platform: 'GitHub' },
                { icon: '🌐', platform: 'Portfolio' }
              ].map((social, i) => (
                <motion.div
                  key={social.platform}
                  className="w-10 h-10 rounded-lg bg-white/20 border border-white/30 flex items-center justify-center text-lg cursor-pointer backdrop-blur-sm"
                  whileHover={{
                    scale: 1.1,
                    background: 'rgba(255,255,255,0.3)',
                    boxShadow: `0 0 20px ${currentCardData.accent}50`
                  }}
                  whileTap={{ scale: 0.95 }}
                  animate={{
                    y: [0, -3, 0]
                  }}
                  transition={{
                    duration: 2.5,
                    delay: i * 0.4,
                    repeat: Infinity
                  }}
                >
                  {social.icon}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Holographic Sweep Effect */}
          <motion.div
            className="absolute inset-0 rounded-2xl pointer-events-none"
            style={{
              background: `linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.15) 50%, transparent 70%)`,
            }}
            animate={{
              x: isHovered ? ['-100%', '100%'] : 0,
              opacity: isHovered ? [0, 1, 0] : 0
            }}
            transition={{
              duration: 2.5,
              ease: "easeInOut",
              repeat: isHovered ? Infinity : 0
            }}
          />

          {/* Data Stream Effect */}
          {isHovered && (
            <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
              {[...Array(10)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-px h-full opacity-40"
                  style={{
                    background: `linear-gradient(to bottom, transparent, ${currentCardData.accent}, transparent)`,
                    left: `${10 + i * 9}%`
                  }}
                  animate={{
                    y: ['-100%', '100%']
                  }}
                  transition={{
                    duration: 2,
                    delay: i * 0.15,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
              ))}
            </div>
          )}
        </motion.div>

        {/* Card Indicator Dots */}
        <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {cardVariants.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentCard(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentCard
                  ? 'scale-125'
                  : 'hover:scale-110'
              }`}
              style={{
                background: index === currentCard ? currentCardData.accent : 'rgba(255,255,255,0.3)',
                boxShadow: index === currentCard ? `0 0 15px ${currentCardData.accent}60` : 'none'
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Floating Action Buttons */}
      <div className="absolute -right-16 top-1/2 transform -translate-y-1/2 space-y-4">
        {[
          { icon: '📱', label: 'Scan', color: '#00f5ff' },
          { icon: '📤', label: 'Share', color: '#10b981' },
          { icon: '📊', label: 'Analytics', color: '#8b5cf6' }
        ].map((action, i) => (
          <motion.div
            key={action.label}
            className="w-12 h-12 rounded-full border-2 flex items-center justify-center cursor-pointer backdrop-blur-sm"
            style={{
              background: `${action.color}20`,
              borderColor: `${action.color}40`
            }}
            whileHover={{
              scale: 1.15,
              boxShadow: `0 0 25px ${action.color}50`
            }}
            whileTap={{ scale: 0.95 }}
            animate={{
              y: [0, -8, 0]
            }}
            transition={{
              duration: 3,
              delay: i * 0.6,
              repeat: Infinity
            }}
            title={action.label}
          >
            <span className="text-xl">{action.icon}</span>
          </motion.div>
        ))}
      </div>
    </div>
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

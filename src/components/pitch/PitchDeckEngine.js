'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../ui/Button';

export default function PitchDeckEngine() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(false);

  const slides = [
    {
      id: 1,
      title: "The Future of Networking is Here",
      subtitle: "NameCardAI: Revolutionizing Business Cards with AR Technology",
      content: "Traditional business cards are dead. Welcome to the era of intelligent, interactive, and immersive networking.",
      visual: "🚀",
      stats: null
    },
    {
      id: 2,
      title: "The Problem",
      subtitle: "Traditional Networking is Broken",
      content: "90% of business cards are thrown away within a week. $7.2B wasted annually on printed cards. Zero analytics, no follow-up tracking, and completely forgettable experiences.",
      visual: "💸",
      stats: [
        { label: "Cards Discarded", value: "90%", color: "text-red-400" },
        { label: "Annual Waste", value: "$7.2B", color: "text-red-400" },
        { label: "Follow-up Rate", value: "2%", color: "text-red-400" }
      ]
    },
    {
      id: 3,
      title: "Market Opportunity",
      subtitle: "A $45B Market Ready for Disruption",
      content: "The global business card market combined with AR/VR technology creates an unprecedented opportunity for innovation and growth.",
      visual: "📈",
      stats: [
        { label: "Business Card Market", value: "$3.2B", color: "text-primary-cyan" },
        { label: "AR Market by 2030", value: "$42B", color: "text-primary-cyan" },
        { label: "Total Addressable Market", value: "$45B+", color: "text-accent-green" }
      ]
    },
    {
      id: 4,
      title: "Our Solution",
      subtitle: "AI-Powered AR Business Cards",
      content: "NameCardAI creates intelligent, interactive business cards that live in augmented reality. Scan, share, and track with unprecedented ease and analytics.",
      visual: "🎯",
      stats: [
        { label: "Scan Rate", value: "95%", color: "text-accent-green" },
        { label: "Follow-up Increase", value: "340%", color: "text-accent-green" },
        { label: "Cost Reduction", value: "89%", color: "text-accent-green" }
      ]
    },
    {
      id: 5,
      title: "Competitive Advantage",
      subtitle: "Why We Win",
      content: "First-mover advantage in AR business cards, proprietary AI technology, and a team with proven track record in AR/VR development.",
      visual: "🏆",
      stats: [
        { label: "Patents Filed", value: "12", color: "text-primary-purple" },
        { label: "Team Experience", value: "15+ years", color: "text-primary-purple" },
        { label: "Beta Users", value: "10K+", color: "text-primary-purple" }
      ]
    },
    {
      id: 6,
      title: "Business Model",
      subtitle: "Multiple Revenue Streams",
      content: "Freemium SaaS model with premium features, enterprise solutions, and white-label licensing opportunities.",
      visual: "💰",
      stats: [
        { label: "Freemium Users", value: "Free", color: "text-text-secondary" },
        { label: "Pro Plan", value: "$9.99/mo", color: "text-primary-cyan" },
        { label: "Enterprise", value: "$99+/mo", color: "text-accent-green" }
      ]
    },
    {
      id: 7,
      title: "Traction",
      subtitle: "Proven Market Demand",
      content: "Strong early adoption, viral growth metrics, and enterprise interest validate our product-market fit.",
      visual: "📊",
      stats: [
        { label: "Monthly Growth", value: "45%", color: "text-accent-green" },
        { label: "User Retention", value: "78%", color: "text-accent-green" },
        { label: "Enterprise Pilots", value: "25", color: "text-accent-green" }
      ]
    },
    {
      id: 8,
      title: "Financial Projections",
      subtitle: "Path to $100M ARR",
      content: "Conservative projections show clear path to profitability with potential for unicorn valuation by year 5.",
      visual: "💎",
      stats: [
        { label: "Year 2 Revenue", value: "$2.5M", color: "text-primary-cyan" },
        { label: "Year 3 Revenue", value: "$12M", color: "text-primary-cyan" },
        { label: "Year 5 Revenue", value: "$100M", color: "text-accent-green" }
      ]
    },
    {
      id: 9,
      title: "Funding Ask",
      subtitle: "Series A: $5M",
      content: "Seeking $5M to accelerate growth, expand team, and capture market leadership in the AR networking space.",
      visual: "🎯",
      stats: [
        { label: "Funding Goal", value: "$5M", color: "text-primary-cyan" },
        { label: "Valuation", value: "$25M", color: "text-primary-cyan" },
        { label: "Use of Funds", value: "Growth", color: "text-accent-green" }
      ]
    },
    {
      id: 10,
      title: "Join the Revolution",
      subtitle: "The Future is Now",
      content: "Partner with us to revolutionize how the world networks. Together, we'll build the next billion-dollar AR platform.",
      visual: "🌟",
      stats: null
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlay) {
      const interval = setInterval(nextSlide, 8000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlay]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  const currentSlideData = slides[currentSlide];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-surface to-background">
      {/* Slide Container */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          {/* Animated Grid */}
          <div className="absolute inset-0 opacity-10">
            <div className="grid grid-cols-12 grid-rows-8 h-full w-full">
              {[...Array(96)].map((_, i) => (
                <motion.div
                  key={i}
                  className="border border-primary-cyan/20"
                  animate={{
                    opacity: [0.1, 0.3, 0.1],
                    borderColor: ['rgba(0, 245, 255, 0.1)', 'rgba(0, 245, 255, 0.3)', 'rgba(0, 245, 255, 0.1)']
                  }}
                  transition={{
                    duration: 4,
                    delay: i * 0.05,
                    repeat: Infinity
                  }}
                />
              ))}
            </div>
          </div>

          {/* Floating Particles */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-primary-cyan rounded-full opacity-30"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -100, 0],
                  x: [0, Math.random() * 100 - 50, 0],
                  opacity: [0.3, 0.8, 0.3],
                  scale: [1, 1.5, 1]
                }}
                transition={{
                  duration: 8 + Math.random() * 4,
                  repeat: Infinity,
                  delay: Math.random() * 4
                }}
              />
            ))}
          </div>
        </div>

        {/* Main Slide Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              {/* Visual Icon */}
              <motion.div
                className="text-8xl mb-8"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity
                }}
              >
                {currentSlideData.visual}
              </motion.div>

              {/* Title */}
              <motion.h1
                className="text-5xl md:text-7xl font-bold gradient-text mb-6"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {currentSlideData.title}
              </motion.h1>

              {/* Subtitle */}
              <motion.h2
                className="text-2xl md:text-3xl text-text-secondary mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                {currentSlideData.subtitle}
              </motion.h2>

              {/* Content */}
              <motion.p
                className="text-lg md:text-xl text-text-primary max-w-4xl mx-auto mb-12 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                {currentSlideData.content}
              </motion.p>

              {/* Stats */}
              {currentSlideData.stats && (
                <motion.div
                  className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  {currentSlideData.stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      className="bg-surface/50 backdrop-blur-sm border border-border rounded-xl p-6"
                      whileHover={{ scale: 1.05 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                    >
                      <div className={`text-4xl font-bold ${stat.color} mb-2`}>
                        {stat.value}
                      </div>
                      <div className="text-text-secondary">{stat.label}</div>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Controls */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="flex items-center space-x-4">
            {/* Previous Button */}
            <Button
              variant="outline"
              size="sm"
              onClick={prevSlide}
              className="w-12 h-12 rounded-full p-0"
            >
              ←
            </Button>

            {/* Slide Indicators */}
            <div className="flex space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentSlide
                      ? 'bg-primary-cyan scale-125'
                      : 'bg-border hover:bg-primary-cyan/50'
                  }`}
                />
              ))}
            </div>

            {/* Next Button */}
            <Button
              variant="outline"
              size="sm"
              onClick={nextSlide}
              className="w-12 h-12 rounded-full p-0"
            >
              →
            </Button>

            {/* Auto-play Toggle */}
            <Button
              variant={isAutoPlay ? "default" : "outline"}
              size="sm"
              onClick={() => setIsAutoPlay(!isAutoPlay)}
              className="ml-4"
            >
              {isAutoPlay ? '⏸️' : '▶️'}
            </Button>
          </div>
        </div>

        {/* Slide Counter */}
        <div className="absolute top-8 right-8 z-20">
          <div className="bg-surface/80 backdrop-blur-sm border border-border rounded-lg px-4 py-2">
            <span className="text-text-primary font-mono">
              {String(currentSlide + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
            </span>
          </div>
        </div>

        {/* Keyboard Hints */}
        <div className="absolute bottom-8 right-8 z-20">
          <div className="bg-surface/80 backdrop-blur-sm border border-border rounded-lg px-3 py-2 text-xs text-text-secondary">
            Use ← → or Space to navigate
          </div>
        </div>
      </div>
    </div>
  );
}

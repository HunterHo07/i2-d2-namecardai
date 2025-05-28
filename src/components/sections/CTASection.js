'use client';

import { useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import Button from '../ui/Button';

// Particle System Component
const ParticleSystem = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-primary-cyan rounded-full opacity-60"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 50 - 25, 0],
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 4 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 4,
            ease: "easeInOut"
          }}
        />
      ))}
      
      {/* Smoke Effect */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`smoke-${i}`}
          className="absolute rounded-full opacity-20"
          style={{
            width: `${20 + Math.random() * 40}px`,
            height: `${20 + Math.random() * 40}px`,
            background: `radial-gradient(circle, ${i % 2 === 0 ? '#00f5ff' : '#8b5cf6'} 0%, transparent 70%)`,
            left: `${Math.random() * 100}%`,
            top: `${80 + Math.random() * 20}%`,
          }}
          animate={{
            y: [0, -200],
            x: [0, Math.random() * 100 - 50],
            scale: [0.5, 2],
            opacity: [0.3, 0],
          }}
          transition={{
            duration: 6 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 6,
            ease: "easeOut"
          }}
        />
      ))}
    </div>
  );
};

// Stats Counter Component
const StatCounter = ({ end, label, prefix = '', suffix = '', delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start({
        opacity: 1,
        scale: 1,
        transition: { duration: 0.6, delay }
      });
    }
  }, [isInView, controls, delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={controls}
      className="text-center"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 2, delay: delay + 0.5 }}
        className="text-4xl font-bold gradient-text mb-2"
      >
        {prefix}
        <motion.span
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1.5, delay: delay + 0.5 }}
        >
          {end}
        </motion.span>
        {suffix}
      </motion.div>
      <div className="text-text-secondary text-sm">{label}</div>
    </motion.div>
  );
};

export default function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
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

  const stats = [
    { end: '7B+', label: 'Paper Cards Replaced', prefix: '', suffix: '' },
    { end: '88%', label: 'Waste Reduction', prefix: '', suffix: '' },
    { end: '70%', label: 'Higher Retention', prefix: '', suffix: '' },
    { end: '0', label: 'Apps Required', prefix: '', suffix: '' }
  ];

  return (
    <section 
      ref={ref}
      className="relative py-20 bg-gradient-to-br from-background via-surface to-background overflow-hidden"
    >
      {/* Background Effects */}
      <ParticleSystem />
      
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-8 grid-rows-6 h-full w-full">
          {[...Array(48)].map((_, i) => (
            <motion.div
              key={i}
              className="border border-primary-cyan/20"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.5, 0] }}
              transition={{
                duration: 4,
                delay: i * 0.1,
                repeat: Infinity,
                repeatDelay: 3
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="text-center"
        >
          {/* Main CTA Content */}
          <motion.div variants={itemVariants} className="mb-16">
            <h2 className="text-section gradient-text mb-6">
              Ready to Reinvent Your Name?
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto mb-8">
              Join thousands of professionals who've already transformed their networking with AR-enhanced digital business cards. 
              <span className="text-primary-cyan font-semibold"> Start your journey today.</span>
            </p>
          </motion.div>

          {/* Stats Section */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          >
            {stats.map((stat, index) => (
              <StatCounter key={stat.label} {...stat} delay={index * 0.2} />
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            <Button 
              size="xl" 
              href="/demo"
              className="group relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                <span className="mr-3 text-2xl">🎮</span>
                Try Interactive Demo
                <motion.span
                  className="ml-2"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </span>
              {/* Button Glow Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary-cyan/20 to-primary-purple/20"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </Button>
            
            <Button 
              variant="outline" 
              size="xl"
              href="/signup"
              className="group"
            >
              <span className="mr-3 text-2xl">✨</span>
              Start Free Today
              <motion.div
                className="ml-2 w-2 h-2 bg-accent-green rounded-full"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              />
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm text-text-muted"
          >
            <div className="flex items-center">
              <span className="w-2 h-2 bg-accent-green rounded-full mr-2 animate-pulse" />
              No Credit Card Required
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 bg-accent-green rounded-full mr-2 animate-pulse" />
              30-Day Money Back Guarantee
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 bg-accent-green rounded-full mr-2 animate-pulse" />
              Setup in Under 5 Minutes
            </div>
          </motion.div>

          {/* Social Proof */}
          <motion.div 
            variants={itemVariants}
            className="mt-16 p-8 bg-surface/50 backdrop-blur-sm border border-border rounded-xl"
          >
            <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
              <div className="text-left">
                <h3 className="text-lg font-semibold text-text-primary mb-2">
                  Join the AR Revolution
                </h3>
                <p className="text-text-secondary">
                  Be part of the future of professional networking
                </p>
              </div>
              
              <div className="flex items-center space-x-4">
                {/* Simulated User Avatars */}
                <div className="flex -space-x-2">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      className="w-10 h-10 rounded-full border-2 border-background"
                      style={{
                        background: `linear-gradient(135deg, hsl(${i * 60}, 70%, 60%), hsl(${i * 60 + 60}, 70%, 60%))`
                      }}
                    />
                  ))}
                </div>
                <div className="text-left">
                  <div className="text-sm font-semibold text-text-primary">1,000+ Users</div>
                  <div className="text-xs text-text-secondary">Already networking in AR</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Final Tagline */}
          <motion.div 
            variants={itemVariants}
            className="mt-12"
          >
            <p className="text-lg text-text-secondary italic">
              "Make even an unknown freelancer feel like a keynote speaker."
            </p>
            <p className="text-sm text-text-muted mt-2">
              — NameCardAI Mission
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}

'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

const FeatureCard = ({ icon, title, description, delay = 0, isActive = false, onClick }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    whileHover={{ scale: 1.02 }}
    className={`p-6 rounded-lg border cursor-pointer transition-all duration-300 ${
      isActive 
        ? 'bg-primary-cyan/10 border-primary-cyan shadow-lg shadow-primary-cyan/25' 
        : 'bg-surface border-border hover:border-primary-cyan/50'
    }`}
    onClick={onClick}
  >
    <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-2xl mb-4 ${
      isActive ? 'bg-primary-cyan/20' : 'bg-border'
    }`}>
      {icon}
    </div>
    <h3 className="text-lg font-semibold text-text-primary mb-2">{title}</h3>
    <p className="text-text-secondary text-sm">{description}</p>
  </motion.div>
);

const FeatureDemo = ({ activeFeature }) => {
  const demoContent = {
    ar: {
      title: "AR Business Cards",
      description: "3D animated cards that appear in real-world environments",
      visual: (
        <div className="relative w-full h-64 bg-gradient-to-br from-surface to-border rounded-lg overflow-hidden">
          {/* AR Card Simulation */}
          <div className="absolute inset-4 bg-gradient-to-br from-primary-cyan/20 to-primary-purple/20 rounded-lg border border-primary-cyan/50">
            {/* AR Corners */}
            <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-primary-cyan animate-pulse" />
            <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-primary-cyan animate-pulse" />
            <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-primary-cyan animate-pulse" />
            <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-primary-cyan animate-pulse" />
            
            {/* Floating Card */}
            <motion.div
              animate={{ y: [-5, 5, -5], rotateY: [0, 5, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute inset-6 bg-gradient-to-br from-surface to-border rounded-lg shadow-lg border border-primary-cyan/30 p-4"
            >
              <div className="w-8 h-8 bg-primary-cyan rounded-full mb-2" />
              <div className="h-2 bg-text-primary/20 rounded mb-1" />
              <div className="h-2 bg-text-primary/10 rounded w-3/4" />
            </motion.div>
          </div>
          
          {/* Particles */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-primary-cyan rounded-full"
              style={{
                left: `${20 + i * 10}%`,
                top: `${30 + (i % 2) * 40}%`,
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                delay: i * 0.2,
                repeat: Infinity,
              }}
            />
          ))}
        </div>
      )
    },
    sharing: {
      title: "Multiple Sharing Methods",
      description: "QR codes, NFC, camera scan, or name lookup",
      visual: (
        <div className="grid grid-cols-2 gap-4 h-64">
          {/* QR Code */}
          <div className="bg-surface rounded-lg p-4 flex flex-col items-center justify-center border border-border">
            <div className="w-16 h-16 bg-gradient-to-br from-primary-cyan to-primary-purple rounded-lg mb-2 grid grid-cols-4 gap-1 p-2">
              {[...Array(16)].map((_, i) => (
                <div key={i} className={`rounded-sm ${Math.random() > 0.5 ? 'bg-black' : 'bg-white'}`} />
              ))}
            </div>
            <span className="text-xs text-text-secondary">QR Code</span>
          </div>
          
          {/* NFC */}
          <div className="bg-surface rounded-lg p-4 flex flex-col items-center justify-center border border-border">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-16 h-16 bg-accent-green/20 rounded-full flex items-center justify-center mb-2"
            >
              <span className="text-2xl">📱</span>
            </motion.div>
            <span className="text-xs text-text-secondary">NFC Tap</span>
          </div>
          
          {/* Camera */}
          <div className="bg-surface rounded-lg p-4 flex flex-col items-center justify-center border border-border">
            <div className="w-16 h-16 bg-accent-orange/20 rounded-lg flex items-center justify-center mb-2">
              <span className="text-2xl">📷</span>
            </div>
            <span className="text-xs text-text-secondary">Camera Scan</span>
          </div>
          
          {/* Name Search */}
          <div className="bg-surface rounded-lg p-4 flex flex-col items-center justify-center border border-border">
            <div className="w-16 h-16 bg-accent-pink/20 rounded-lg flex items-center justify-center mb-2">
              <span className="text-2xl">🔍</span>
            </div>
            <span className="text-xs text-text-secondary">Name Lookup</span>
          </div>
        </div>
      )
    },
    customization: {
      title: "Full Customization",
      description: "3D avatars, custom animations, and branded experiences",
      visual: (
        <div className="h-64 bg-surface rounded-lg p-4 border border-border">
          <div className="grid grid-cols-3 gap-4 h-full">
            {/* Avatar Options */}
            <div className="space-y-2">
              <h4 className="text-xs font-semibold text-text-primary">Avatars</h4>
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.1 }}
                  className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-cyan to-primary-purple cursor-pointer"
                  style={{
                    background: `linear-gradient(135deg, hsl(${i * 60}, 70%, 60%), hsl(${i * 60 + 60}, 70%, 60%))`
                  }}
                />
              ))}
            </div>
            
            {/* Animation Options */}
            <div className="space-y-2">
              <h4 className="text-xs font-semibold text-text-primary">Effects</h4>
              {['Glow', 'Float', 'Spin', 'Pulse'].map((effect, i) => (
                <div key={effect} className="text-xs text-text-secondary bg-border rounded px-2 py-1">
                  {effect}
                </div>
              ))}
            </div>
            
            {/* Color Themes */}
            <div className="space-y-2">
              <h4 className="text-xs font-semibold text-text-primary">Themes</h4>
              {[
                'linear-gradient(135deg, #00f5ff, #8b5cf6)',
                'linear-gradient(135deg, #10b981, #f59e0b)',
                'linear-gradient(135deg, #ec4899, #3b82f6)',
                'linear-gradient(135deg, #f59e0b, #ec4899)'
              ].map((gradient, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.1 }}
                  className="w-8 h-4 rounded cursor-pointer"
                  style={{ background: gradient }}
                />
              ))}
            </div>
          </div>
        </div>
      )
    },
    analytics: {
      title: "Smart Analytics",
      description: "Track engagement, scan rates, and networking ROI",
      visual: (
        <div className="h-64 bg-surface rounded-lg p-4 border border-border">
          <div className="grid grid-cols-2 gap-4 h-full">
            {/* Chart */}
            <div className="space-y-2">
              <h4 className="text-xs font-semibold text-text-primary">Scan Activity</h4>
              <div className="flex items-end space-x-1 h-32">
                {[40, 65, 30, 80, 55, 90, 70].map((height, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${height}%` }}
                    transition={{ duration: 1, delay: i * 0.1 }}
                    className="bg-primary-cyan/60 rounded-t flex-1"
                  />
                ))}
              </div>
            </div>
            
            {/* Stats */}
            <div className="space-y-3">
              <h4 className="text-xs font-semibold text-text-primary">Metrics</h4>
              {[
                { label: 'Total Scans', value: '1,247' },
                { label: 'Unique Views', value: '892' },
                { label: 'Conversion Rate', value: '23%' },
                { label: 'Avg. Time', value: '45s' }
              ].map((stat, i) => (
                <div key={stat.label} className="flex justify-between text-xs">
                  <span className="text-text-secondary">{stat.label}</span>
                  <span className="text-primary-cyan font-semibold">{stat.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    }
  };

  return (
    <motion.div
      key={activeFeature}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="lg:col-span-2"
    >
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-text-primary mb-2">
          {demoContent[activeFeature].title}
        </h3>
        <p className="text-text-secondary">
          {demoContent[activeFeature].description}
        </p>
      </div>
      {demoContent[activeFeature].visual}
    </motion.div>
  );
};

export default function FeaturesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeFeature, setActiveFeature] = useState('ar');

  const features = [
    {
      id: 'ar',
      icon: '🥽',
      title: 'AR Business Cards',
      description: '3D animated cards that appear in real-world environments through your camera'
    },
    {
      id: 'sharing',
      icon: '📤',
      title: 'Universal Sharing',
      description: 'Multiple ways to share: QR codes, NFC, camera scan, or name lookup'
    },
    {
      id: 'customization',
      icon: '🎨',
      title: 'Full Customization',
      description: 'Custom 3D avatars, animations, colors, and branded experiences'
    },
    {
      id: 'analytics',
      icon: '📊',
      title: 'Smart Analytics',
      description: 'Track engagement, scan rates, and measure your networking ROI'
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #00f5ff 2px, transparent 2px),
                           radial-gradient(circle at 75% 75%, #8b5cf6 2px, transparent 2px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-section gradient-text mb-6">
            Revolutionary Features
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Experience the future of networking with AR-powered business cards that work everywhere, 
            require no apps, and create unforgettable first impressions.
          </p>
        </motion.div>

        {/* Interactive Feature Demo */}
        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Feature Cards */}
          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <FeatureCard
                key={feature.id}
                {...feature}
                delay={index * 0.1}
                isActive={activeFeature === feature.id}
                onClick={() => setActiveFeature(feature.id)}
              />
            ))}
          </div>

          {/* Feature Demo */}
          <FeatureDemo activeFeature={activeFeature} />
        </div>

        {/* Additional Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 grid md:grid-cols-3 gap-8"
        >
          {[
            {
              icon: '🌐',
              title: 'No App Required',
              description: 'Works in any browser on any device without downloads'
            },
            {
              icon: '⚡',
              title: 'Instant Loading',
              description: 'Cards load in under 2 seconds with optimized 3D rendering'
            },
            {
              icon: '🔒',
              title: 'Privacy First',
              description: 'Your data stays secure with end-to-end encryption'
            }
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center p-6 bg-surface/50 backdrop-blur-sm border border-border rounded-lg hover:border-primary-cyan/50 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-text-primary mb-2">{feature.title}</h3>
              <p className="text-text-secondary">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

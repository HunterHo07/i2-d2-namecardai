'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Button from '../ui/Button';

export default function RoadmapEngine() {
  const [selectedQuarter, setSelectedQuarter] = useState('Q1-2024');
  const timelineRef = useRef(null);
  const isInView = useInView(timelineRef, { once: true });

  const roadmapData = [
    {
      quarter: 'Q4-2023',
      title: 'Foundation & Launch',
      status: 'completed',
      progress: 100,
      features: [
        { name: 'Core AR Card Engine', status: 'completed', description: 'Basic AR business card creation and viewing' },
        { name: 'Mobile App MVP', status: 'completed', description: 'iOS and Android apps with core functionality' },
        { name: 'Web Dashboard', status: 'completed', description: 'User management and card customization portal' },
        { name: 'QR Code Integration', status: 'completed', description: 'Seamless QR code generation and scanning' }
      ],
      metrics: {
        users: '10K+',
        features: '15',
        platforms: '3'
      }
    },
    {
      quarter: 'Q1-2024',
      title: 'Enhanced Experience',
      status: 'completed',
      progress: 100,
      features: [
        { name: 'Advanced Analytics', status: 'completed', description: 'Comprehensive tracking and insights dashboard' },
        { name: 'Team Management', status: 'completed', description: 'Enterprise features for team collaboration' },
        { name: 'Custom Branding', status: 'completed', description: 'White-label solutions for businesses' },
        { name: 'API Integration', status: 'completed', description: 'Third-party integrations and webhooks' }
      ],
      metrics: {
        users: '100K+',
        features: '25',
        platforms: '5'
      }
    },
    {
      quarter: 'Q2-2024',
      title: 'AI & Automation',
      status: 'in-progress',
      progress: 75,
      features: [
        { name: 'AI-Powered Recommendations', status: 'completed', description: 'Smart networking suggestions based on behavior' },
        { name: 'Auto-Follow-up System', status: 'completed', description: 'Automated email sequences and reminders' },
        { name: 'Smart Card Templates', status: 'in-progress', description: 'AI-generated card designs and layouts' },
        { name: 'Voice Commands', status: 'planned', description: 'Voice-activated card sharing and management' }
      ],
      metrics: {
        users: '500K+',
        features: '35',
        platforms: '7'
      }
    },
    {
      quarter: 'Q3-2024',
      title: 'Advanced AR Features',
      status: 'planned',
      progress: 25,
      features: [
        { name: 'Holographic Displays', status: 'in-progress', description: '3D holographic card projections' },
        { name: 'Gesture Recognition', status: 'planned', description: 'Hand gesture-based interactions' },
        { name: 'Spatial Audio', status: 'planned', description: '3D audio experiences in AR space' },
        { name: 'Multi-User AR Sessions', status: 'planned', description: 'Collaborative AR networking spaces' }
      ],
      metrics: {
        users: '1M+',
        features: '45',
        platforms: '10'
      }
    },
    {
      quarter: 'Q4-2024',
      title: 'Enterprise & Scale',
      status: 'planned',
      progress: 0,
      features: [
        { name: 'Enterprise SSO', status: 'planned', description: 'Single sign-on for large organizations' },
        { name: 'Advanced Security', status: 'planned', description: 'End-to-end encryption and compliance' },
        { name: 'Global CDN', status: 'planned', description: 'Worldwide content delivery network' },
        { name: 'White-label Platform', status: 'planned', description: 'Complete rebrandable solution' }
      ],
      metrics: {
        users: '2M+',
        features: '60',
        platforms: '15'
      }
    },
    {
      quarter: 'Q1-2025',
      title: 'Next-Gen Innovation',
      status: 'future',
      progress: 0,
      features: [
        { name: 'Neural Interface', status: 'research', description: 'Brain-computer interface integration' },
        { name: 'Quantum Encryption', status: 'research', description: 'Quantum-secured data transmission' },
        { name: 'Metaverse Integration', status: 'planned', description: 'Virtual world networking experiences' },
        { name: 'AI Avatars', status: 'planned', description: 'Intelligent digital representatives' }
      ],
      metrics: {
        users: '5M+',
        features: '100+',
        platforms: '25+'
      }
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'text-accent-green';
      case 'in-progress': return 'text-primary-cyan';
      case 'planned': return 'text-accent-orange';
      case 'research': return 'text-primary-purple';
      default: return 'text-text-secondary';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed': return '✅';
      case 'in-progress': return '🔄';
      case 'planned': return '📋';
      case 'research': return '🔬';
      default: return '⏳';
    }
  };

  const selectedData = roadmapData.find(item => item.quarter === selectedQuarter);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-surface to-background">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold gradient-text mb-6">
              Product Roadmap
            </h1>
            <p className="text-xl md:text-2xl text-text-secondary mb-12 max-w-4xl mx-auto">
              See what's coming next for NameCardAI. We're building the future of networking, 
              one innovative feature at a time.
            </p>
          </motion.div>

          {/* Current Status */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="bg-surface/50 backdrop-blur-sm border border-border rounded-xl p-6">
              <div className="text-3xl mb-2">🚀</div>
              <div className="text-2xl font-bold text-primary-cyan mb-1">2.5M+</div>
              <div className="text-text-secondary">Active Users</div>
            </div>
            <div className="bg-surface/50 backdrop-blur-sm border border-border rounded-xl p-6">
              <div className="text-3xl mb-2">⚡</div>
              <div className="text-2xl font-bold text-accent-green mb-1">35+</div>
              <div className="text-text-secondary">Features Shipped</div>
            </div>
            <div className="bg-surface/50 backdrop-blur-sm border border-border rounded-xl p-6">
              <div className="text-3xl mb-2">🌍</div>
              <div className="text-2xl font-bold text-accent-orange mb-1">150+</div>
              <div className="text-text-secondary">Countries</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" ref={timelineRef}>
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl font-bold text-text-primary text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            Development Timeline
          </motion.h2>

          {/* Quarter Selector */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {roadmapData.map((item, index) => (
              <motion.button
                key={item.quarter}
                onClick={() => setSelectedQuarter(item.quarter)}
                className={`px-4 py-2 rounded-lg border transition-all ${
                  selectedQuarter === item.quarter
                    ? 'bg-primary-cyan text-black border-primary-cyan'
                    : 'bg-surface border-border text-text-primary hover:border-primary-cyan/50'
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.quarter}
              </motion.button>
            ))}
          </div>

          {/* Timeline Visualization */}
          <div className="relative mb-16">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-border" />
            
            {roadmapData.map((item, index) => (
              <motion.div
                key={item.quarter}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.8 }}
              >
                {/* Timeline Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full border-4 border-background bg-primary-cyan z-10" />
                
                {/* Content Card */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'mr-auto pr-8' : 'ml-auto pl-8'}`}>
                  <motion.div
                    className={`bg-surface/50 backdrop-blur-sm border rounded-xl p-6 ${
                      selectedQuarter === item.quarter
                        ? 'border-primary-cyan shadow-lg shadow-primary-cyan/25'
                        : 'border-border'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    onClick={() => setSelectedQuarter(item.quarter)}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-text-primary">{item.title}</h3>
                      <span className={`text-2xl ${getStatusColor(item.status)}`}>
                        {getStatusIcon(item.status)}
                      </span>
                    </div>
                    
                    <div className="text-sm text-text-secondary mb-3">{item.quarter}</div>
                    
                    {/* Progress Bar */}
                    <div className="w-full bg-border rounded-full h-2 mb-4">
                      <motion.div
                        className="bg-gradient-to-r from-primary-cyan to-primary-purple h-2 rounded-full"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${item.progress}%` } : {}}
                        transition={{ delay: index * 0.2 + 0.5, duration: 1 }}
                      />
                    </div>
                    
                    <div className="text-sm text-text-secondary">
                      {item.progress}% Complete • {item.features.length} Features
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed View */}
      {selectedData && (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-surface/30">
          <div className="max-w-6xl mx-auto">
            <motion.div
              key={selectedQuarter}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-text-primary mb-4">
                  {selectedData.title}
                </h2>
                <p className="text-xl text-text-secondary">
                  {selectedData.quarter} • {selectedData.progress}% Complete
                </p>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="bg-surface/50 backdrop-blur-sm border border-border rounded-xl p-6 text-center">
                  <div className="text-3xl mb-2">👥</div>
                  <div className="text-2xl font-bold text-primary-cyan mb-1">
                    {selectedData.metrics.users}
                  </div>
                  <div className="text-text-secondary">Target Users</div>
                </div>
                <div className="bg-surface/50 backdrop-blur-sm border border-border rounded-xl p-6 text-center">
                  <div className="text-3xl mb-2">⚡</div>
                  <div className="text-2xl font-bold text-accent-green mb-1">
                    {selectedData.metrics.features}
                  </div>
                  <div className="text-text-secondary">Total Features</div>
                </div>
                <div className="bg-surface/50 backdrop-blur-sm border border-border rounded-xl p-6 text-center">
                  <div className="text-3xl mb-2">🌐</div>
                  <div className="text-2xl font-bold text-accent-orange mb-1">
                    {selectedData.metrics.platforms}
                  </div>
                  <div className="text-text-secondary">Platforms</div>
                </div>
              </div>

              {/* Features */}
              <div className="grid md:grid-cols-2 gap-6">
                {selectedData.features.map((feature, index) => (
                  <motion.div
                    key={feature.name}
                    className="bg-surface/50 backdrop-blur-sm border border-border rounded-xl p-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-lg font-bold text-text-primary">{feature.name}</h3>
                      <span className={`text-lg ${getStatusColor(feature.status)}`}>
                        {getStatusIcon(feature.status)}
                      </span>
                    </div>
                    <p className="text-text-secondary text-sm mb-3">{feature.description}</p>
                    <div className={`text-xs font-semibold ${getStatusColor(feature.status)}`}>
                      {feature.status.charAt(0).toUpperCase() + feature.status.slice(1).replace('-', ' ')}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-4xl mx-auto text-center bg-gradient-to-r from-primary-cyan/10 to-primary-purple/10 border border-primary-cyan/30 rounded-2xl p-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-text-primary mb-6">
            Shape the Future with Us
          </h2>
          <p className="text-xl text-text-secondary mb-8">
            Have ideas for features? Want to influence our roadmap? 
            Join our community and help build the future of networking.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" href="/signup">
              🚀 Join Beta Program
            </Button>
            <Button variant="outline" size="lg">
              💬 Share Feedback
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

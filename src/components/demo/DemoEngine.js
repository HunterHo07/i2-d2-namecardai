'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../ui/Button';

export default function DemoEngine() {
  const [currentLevel, setCurrentLevel] = useState(1);
  const [completedLevels, setCompletedLevels] = useState(new Set());
  const [showInstructions, setShowInstructions] = useState(true);
  const [demoData, setDemoData] = useState({
    userName: 'Alex Johnson',
    userTitle: 'AI Engineer & Blockchain Developer',
    userCompany: 'QuantumTech Innovations',
    userEmail: 'alex.johnson@quantumtech.ai',
    userPhone: '+1 (555) 123-4567',
    website: 'alexjohnson.dev',
    linkedin: 'linkedin.com/in/alexjohnson',
    github: 'github.com/alexjohnson',
    cardStyle: 'holographic',
    cardColor: 'cyan',
    arEffect: 'hologram',
    backgroundPattern: 'neural',
    avatarStyle: '3d',
    scanCount: 0,
    shareCount: 0,
    achievements: ['AI Expert', 'Blockchain Pioneer', 'Tech Speaker'],
    skills: ['React', 'AI/ML', 'Blockchain', 'WebXR'],
    location: 'San Francisco, CA',
    timezone: 'PST',
    availability: 'Available for Projects'
  });

  const levels = [
    {
      id: 1,
      title: 'Basic AR Card',
      description: 'View your first 3D business card',
      instruction: 'Welcome! This is your AR business card. Click on it to see the 3D effect in action.',
    },
    {
      id: 2,
      title: 'AR Camera View',
      description: 'See how it looks in AR camera mode',
      instruction: 'Now let\'s see how your card appears through AR camera. This simulates the real-world experience.',
    },
    {
      id: 3,
      title: 'Customize Your Card',
      description: 'Change colors, effects, and information',
      instruction: 'Customize your card! Try different colors and effects.',
    },
    {
      id: 4,
      title: 'Sharing Methods',
      description: 'Generate QR codes and sharing links',
      instruction: 'Learn how to share your card. Generate QR codes and direct links.',
    },
    {
      id: 5,
      title: 'Analytics Dashboard',
      description: 'Track scans and engagement',
      instruction: 'See how your networking performs with real-time analytics.',
    }
  ];

  const currentLevelData = levels.find(level => level.id === currentLevel);

  const completeLevel = (levelId) => {
    setCompletedLevels(prev => new Set([...prev, levelId]));
    if (levelId === currentLevel && levelId < levels.length) {
      setTimeout(() => setCurrentLevel(levelId + 1), 1000);
    }
  };

  const resetDemo = () => {
    setCurrentLevel(1);
    setCompletedLevels(new Set());
    setShowInstructions(true);
    setDemoData(prev => ({
      ...prev,
      scanCount: 0,
      shareCount: 0
    }));
  };

  // Next-Level Futuristic AR Card Component
  const ARCard = ({ data, onInteraction }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isFlipped, setIsFlipped] = useState(false);
    const [activeLayer, setActiveLayer] = useState(0);
    const [scanlinePosition, setScanlinePosition] = useState(0);
    const cardRef = useRef(null);

    // Advanced mouse tracking with smooth interpolation
    const handleMouseMove = (e) => {
      if (cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const rawX = (e.clientX - centerX) / 10;
        const rawY = (e.clientY - centerY) / 10;

        setMousePosition({
          x: Math.max(-25, Math.min(25, rawX)),
          y: Math.max(-25, Math.min(25, rawY))
        });
      }
    };

    // Advanced theme system with multiple variants
    const themes = {
      cyan: {
        primary: '#00f5ff',
        secondary: '#0891b2',
        accent: '#67e8f9',
        gradient: 'linear-gradient(135deg, #00f5ff, #0891b2, #67e8f9)',
        glow: '0 0 30px rgba(0, 245, 255, 0.6)',
        particle: '#00f5ff'
      },
      purple: {
        primary: '#8b5cf6',
        secondary: '#7c3aed',
        accent: '#a78bfa',
        gradient: 'linear-gradient(135deg, #8b5cf6, #7c3aed, #a78bfa)',
        glow: '0 0 30px rgba(139, 92, 246, 0.6)',
        particle: '#8b5cf6'
      },
      green: {
        primary: '#10b981',
        secondary: '#059669',
        accent: '#34d399',
        gradient: 'linear-gradient(135deg, #10b981, #059669, #34d399)',
        glow: '0 0 30px rgba(16, 185, 129, 0.6)',
        particle: '#10b981'
      },
      orange: {
        primary: '#f59e0b',
        secondary: '#d97706',
        accent: '#fbbf24',
        gradient: 'linear-gradient(135deg, #f59e0b, #d97706, #fbbf24)',
        glow: '0 0 30px rgba(245, 158, 11, 0.6)',
        particle: '#f59e0b'
      },
      rainbow: {
        primary: '#ff0080',
        secondary: '#7928ca',
        accent: '#ff4081',
        gradient: 'linear-gradient(135deg, #ff0080, #7928ca, #ff4081, #00d4ff)',
        glow: '0 0 30px rgba(255, 0, 128, 0.6)',
        particle: '#ff0080'
      }
    };

    const theme = themes[data.cardColor] || themes.cyan;

    // Scanline animation effect
    useEffect(() => {
      if (isHovered) {
        const interval = setInterval(() => {
          setScanlinePosition(prev => (prev + 2) % 100);
        }, 50);
        return () => clearInterval(interval);
      }
    }, [isHovered]);

    // Layer cycling for depth effect
    useEffect(() => {
      const interval = setInterval(() => {
        setActiveLayer(prev => (prev + 1) % 3);
      }, 3000);
      return () => clearInterval(interval);
    }, []);

    return (
      <div className="flex items-center justify-center min-h-[500px] relative">
        {/* Ambient Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full"
              style={{
                background: theme.particle,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                x: [0, Math.random() * 50 - 25, 0],
                opacity: [0, 1, 0],
                scale: [0, 1.5, 0],
              }}
              transition={{
                duration: 4 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 4,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        {/* Main Card Container */}
        <motion.div
          ref={cardRef}
          className="relative w-96 h-60 cursor-pointer"
          style={{
            transform: `perspective(1200px) rotateX(${mousePosition.y}deg) rotateY(${mousePosition.x}deg) ${isFlipped ? 'rotateY(180deg)' : ''}`,
            transformStyle: 'preserve-3d'
          }}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => {
            setIsHovered(false);
            setMousePosition({ x: 0, y: 0 });
          }}
          onClick={() => {
            setIsFlipped(!isFlipped);
            onInteraction?.();
          }}
          whileHover={{ scale: 1.02 }}
          animate={{
            boxShadow: [theme.glow, `0 0 40px ${theme.primary}80`, theme.glow]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          {/* Front Face */}
          <div
            className="absolute inset-0 rounded-xl shadow-2xl border-2 overflow-hidden"
            style={{
              background: `linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 30%, #2a2a2a 70%, #1a1a1a 100%)`,
              borderColor: theme.primary,
              boxShadow: isHovered ? theme.glow : '0 15px 35px rgba(0,0,0,0.4)',
              backfaceVisibility: 'hidden'
            }}
          >
            {/* Neural Network Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <svg width="100%" height="100%" viewBox="0 0 400 250">
                {[...Array(12)].map((_, i) => (
                  <motion.circle
                    key={i}
                    cx={50 + (i % 4) * 100}
                    cy={50 + Math.floor(i / 4) * 75}
                    r="2"
                    fill={theme.primary}
                    animate={{
                      opacity: [0.3, 1, 0.3],
                      scale: [1, 1.5, 1]
                    }}
                    transition={{
                      duration: 2,
                      delay: i * 0.2,
                      repeat: Infinity
                    }}
                  />
                ))}
                {[...Array(8)].map((_, i) => (
                  <motion.line
                    key={`line-${i}`}
                    x1={50 + (i % 4) * 100}
                    y1={50 + Math.floor(i / 4) * 75}
                    x2={150 + (i % 3) * 100}
                    y2={125 + (i % 2) * 75}
                    stroke={theme.primary}
                    strokeWidth="1"
                    animate={{
                      opacity: [0.2, 0.8, 0.2]
                    }}
                    transition={{
                      duration: 3,
                      delay: i * 0.3,
                      repeat: Infinity
                    }}
                  />
                ))}
              </svg>
            </div>

            {/* Advanced AR Corner Indicators */}
            <div className="absolute top-3 left-3 w-8 h-8">
              <motion.div
                className="absolute inset-0 border-l-3 border-t-3 rounded-tl-lg"
                style={{ borderColor: theme.primary }}
                animate={{
                  opacity: [0.5, 1, 0.5],
                  scale: [1, 1.1, 1]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <div className="absolute top-1 left-1 w-2 h-2 rounded-full" style={{ background: theme.primary }} />
            </div>
            <div className="absolute top-3 right-3 w-8 h-8">
              <motion.div
                className="absolute inset-0 border-r-3 border-t-3 rounded-tr-lg"
                style={{ borderColor: theme.primary }}
                animate={{
                  opacity: [0.5, 1, 0.5],
                  scale: [1, 1.1, 1]
                }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              />
              <div className="absolute top-1 right-1 w-2 h-2 rounded-full" style={{ background: theme.primary }} />
            </div>
            <div className="absolute bottom-3 left-3 w-8 h-8">
              <motion.div
                className="absolute inset-0 border-l-3 border-b-3 rounded-bl-lg"
                style={{ borderColor: theme.primary }}
                animate={{
                  opacity: [0.5, 1, 0.5],
                  scale: [1, 1.1, 1]
                }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              />
              <div className="absolute bottom-1 left-1 w-2 h-2 rounded-full" style={{ background: theme.primary }} />
            </div>
            <div className="absolute bottom-3 right-3 w-8 h-8">
              <motion.div
                className="absolute inset-0 border-r-3 border-b-3 rounded-br-lg"
                style={{ borderColor: theme.primary }}
                animate={{
                  opacity: [0.5, 1, 0.5],
                  scale: [1, 1.1, 1]
                }}
                transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
              />
              <div className="absolute bottom-1 right-1 w-2 h-2 rounded-full" style={{ background: theme.primary }} />
            </div>

            {/* Scanning Line Effect */}
            {isHovered && (
              <motion.div
                className="absolute left-0 right-0 h-0.5 pointer-events-none"
                style={{
                  background: `linear-gradient(90deg, transparent, ${theme.primary}, transparent)`,
                  top: `${scanlinePosition}%`,
                  boxShadow: `0 0 10px ${theme.primary}`
                }}
                animate={{
                  opacity: [0, 1, 0]
                }}
                transition={{
                  duration: 0.5,
                  repeat: Infinity
                }}
              />
            )}

            {/* Main Content */}
            <div className="p-8 h-full flex flex-col justify-between relative z-10">
              {/* Header Section */}
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4">
                  {/* 3D Avatar */}
                  <motion.div
                    className="relative w-16 h-16 rounded-xl overflow-hidden"
                    style={{
                      background: theme.gradient,
                      transform: `rotateY(${mousePosition.x * 0.5}deg) rotateX(${mousePosition.y * 0.5}deg)`
                    }}
                    animate={{
                      boxShadow: [
                        `0 0 20px ${theme.primary}40`,
                        `0 0 30px ${theme.primary}60`,
                        `0 0 20px ${theme.primary}40`
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <div className="absolute inset-2 rounded-lg bg-black/20 flex items-center justify-center text-xl font-bold text-white">
                      {data.userName.split(' ').map(n => n[0]).join('')}
                    </div>
                    {/* Holographic overlay */}
                    <motion.div
                      className="absolute inset-0 rounded-xl"
                      style={{
                        background: `linear-gradient(45deg, transparent 30%, ${theme.accent}20 50%, transparent 70%)`
                      }}
                      animate={{
                        x: isHovered ? ['-100%', '100%'] : 0
                      }}
                      transition={{
                        duration: 1.5,
                        ease: "easeInOut",
                        repeat: isHovered ? Infinity : 0
                      }}
                    />
                  </motion.div>

                  {/* Name and Title */}
                  <div>
                    <motion.h3
                      className="text-xl font-bold text-white mb-1"
                      animate={{
                        textShadow: [
                          `0 0 10px ${theme.primary}40`,
                          `0 0 20px ${theme.primary}60`,
                          `0 0 10px ${theme.primary}40`
                        ]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      {data.userName}
                    </motion.h3>
                    <p className="text-gray-300 text-sm mb-1 font-medium">{data.userTitle}</p>
                    <p className="text-gray-400 text-xs">{data.userCompany}</p>

                    {/* Status Indicator */}
                    <div className="flex items-center space-x-2 mt-2">
                      <motion.div
                        className="w-2 h-2 rounded-full"
                        style={{ background: theme.accent }}
                        animate={{
                          scale: [1, 1.3, 1],
                          opacity: [0.7, 1, 0.7]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      <span className="text-xs text-gray-400">{data.availability}</span>
                    </div>
                  </div>
                </div>

                {/* QR Code Placeholder */}
                <motion.div
                  className="w-12 h-12 rounded-lg border-2 flex items-center justify-center text-xs font-bold"
                  style={{
                    borderColor: theme.primary,
                    background: `${theme.primary}10`,
                    color: theme.primary
                  }}
                  whileHover={{
                    scale: 1.1,
                    boxShadow: `0 0 20px ${theme.primary}40`
                  }}
                >
                  QR
                </motion.div>
              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2 my-4">
                {data.skills.slice(0, 4).map((skill, i) => (
                  <motion.span
                    key={skill}
                    className="px-2 py-1 rounded-full text-xs font-medium border"
                    style={{
                      borderColor: theme.primary + '40',
                      background: theme.primary + '10',
                      color: theme.primary
                    }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{
                      scale: 1.05,
                      background: theme.primary + '20'
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>

              {/* Contact Information */}
              <div className="space-y-2">
                <motion.div
                  className="flex items-center space-x-3 text-sm text-gray-300"
                  whileHover={{ x: 5 }}
                >
                  <span style={{ color: theme.primary }}>📧</span>
                  <span className="text-xs font-mono">{data.userEmail}</span>
                </motion.div>
                <motion.div
                  className="flex items-center space-x-3 text-sm text-gray-300"
                  whileHover={{ x: 5 }}
                >
                  <span style={{ color: theme.primary }}>📱</span>
                  <span className="text-xs font-mono">{data.userPhone}</span>
                </motion.div>
                <motion.div
                  className="flex items-center space-x-3 text-sm text-gray-300"
                  whileHover={{ x: 5 }}
                >
                  <span style={{ color: theme.primary }}>🌐</span>
                  <span className="text-xs font-mono">{data.website}</span>
                </motion.div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-3 mt-4">
                {[
                  { platform: 'LinkedIn', icon: '💼', url: data.linkedin },
                  { platform: 'GitHub', icon: '💻', url: data.github },
                  { platform: 'Portfolio', icon: '🎨', url: data.website }
                ].map((social, i) => (
                  <motion.div
                    key={social.platform}
                    className="w-8 h-8 rounded-lg border flex items-center justify-center text-sm cursor-pointer"
                    style={{
                      borderColor: theme.primary + '40',
                      background: theme.primary + '10'
                    }}
                    whileHover={{
                      scale: 1.1,
                      background: theme.primary + '20',
                      boxShadow: `0 0 15px ${theme.primary}40`
                    }}
                    whileTap={{ scale: 0.95 }}
                    animate={{
                      y: [0, -2, 0]
                    }}
                    transition={{
                      duration: 2,
                      delay: i * 0.3,
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
              className="absolute inset-0 rounded-xl pointer-events-none"
              style={{
                background: `linear-gradient(45deg, transparent 30%, ${theme.accent}15 50%, transparent 70%)`,
              }}
              animate={{
                x: isHovered ? ['-100%', '100%'] : 0,
                opacity: isHovered ? [0, 1, 0] : 0
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                repeat: isHovered ? Infinity : 0
              }}
            />

            {/* Data Stream Effect */}
            {isHovered && (
              <div className="absolute inset-0 overflow-hidden rounded-xl pointer-events-none">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-px h-full opacity-30"
                    style={{
                      background: `linear-gradient(to bottom, transparent, ${theme.primary}, transparent)`,
                      left: `${20 + i * 20}%`
                    }}
                    animate={{
                      y: ['-100%', '100%']
                    }}
                    transition={{
                      duration: 1.5,
                      delay: i * 0.2,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                ))}
              </div>
            )}
          </div>
        </motion.div>

        {/* Stats Display */}
        <div className="absolute top-4 right-4 bg-surface/90 backdrop-blur-sm border border-border rounded-lg p-3">
          <div className="text-xs text-text-secondary mb-1">Card Stats</div>
          <div className="text-sm text-text-primary">
            Scans: <span style={{ color: theme.primary }}>{data.scanCount}</span>
          </div>
          <div className="text-sm text-text-primary">
            Shares: <span style={{ color: theme.primary }}>{data.shareCount}</span>
          </div>
        </div>
      </div>
    );
  };

  // Simple Camera Simulator
  const CameraSimulator = ({ data, onScan }) => {
    const [isScanning, setIsScanning] = useState(false);
    const [showCard, setShowCard] = useState(false);

    const startScan = () => {
      setIsScanning(true);
      setTimeout(() => {
        setIsScanning(false);
        setShowCard(true);
        onScan?.();
      }, 2000);
    };

    return (
      <div className="space-y-6">
        <div className="text-center">
          <Button onClick={startScan} disabled={isScanning}>
            {isScanning ? '🔍 Scanning...' : '📷 Start AR Scan'}
          </Button>
        </div>

        <div className="relative w-full max-w-lg mx-auto aspect-video bg-black rounded-xl overflow-hidden border-2 border-border">
          {/* Simulated Camera Feed */}
          <div className="relative w-full h-full bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900">
            {isScanning && (
              <motion.div
                className="absolute left-0 right-0 h-1 bg-primary-cyan"
                animate={{ top: ['0%', '100%'] }}
                transition={{ duration: 2, ease: "linear" }}
              />
            )}

            {showCard && (
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              >
                <div className="w-48 h-32 bg-surface border-2 border-primary-cyan rounded-lg p-3">
                  <div className="text-primary-cyan text-sm font-bold">{data.userName}</div>
                  <div className="text-text-secondary text-xs">{data.userTitle}</div>
                  <div className="text-text-muted text-xs">{data.userCompany}</div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    );
  };

  const renderCurrentComponent = () => {
    switch (currentLevel) {
      case 1:
        return <ARCard data={demoData} onInteraction={() => completeLevel(1)} />;
      case 2:
        return (
          <CameraSimulator 
            data={demoData} 
            onScan={() => {
              setDemoData(prev => ({ ...prev, scanCount: prev.scanCount + 1 }));
              completeLevel(2);
            }}
          />
        );
      case 3:
        return (
          <div className="space-y-8">
            <ARCard data={demoData} />

            {/* Advanced Customization Panel */}
            <div className="bg-surface/50 backdrop-blur-sm border border-border rounded-xl p-6">
              <h3 className="text-lg font-bold text-text-primary mb-6">Customize Your AR Card</h3>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Color Themes */}
                <div>
                  <h4 className="font-semibold text-text-primary mb-3">Color Theme</h4>
                  <div className="grid grid-cols-3 gap-3">
                    {['cyan', 'purple', 'green', 'orange', 'rainbow'].map(color => (
                      <motion.button
                        key={color}
                        onClick={() => {
                          setDemoData(prev => ({ ...prev, cardColor: color }));
                          completeLevel(3);
                        }}
                        className={`h-16 rounded-lg border-2 transition-all relative overflow-hidden ${
                          demoData.cardColor === color ? 'border-white scale-105' : 'border-transparent'
                        }`}
                        style={{
                          background: color === 'cyan' ? 'linear-gradient(135deg, #00f5ff, #0891b2)' :
                                    color === 'purple' ? 'linear-gradient(135deg, #8b5cf6, #7c3aed)' :
                                    color === 'green' ? 'linear-gradient(135deg, #10b981, #059669)' :
                                    color === 'orange' ? 'linear-gradient(135deg, #f59e0b, #d97706)' :
                                    'linear-gradient(135deg, #ff0080, #7928ca, #00d4ff)'
                        }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-white font-bold text-xs capitalize">{color}</span>
                        </div>
                        {demoData.cardColor === color && (
                          <motion.div
                            className="absolute inset-0 border-2 border-white rounded-lg"
                            animate={{
                              boxShadow: ['0 0 0 0 rgba(255,255,255,0.7)', '0 0 0 4px rgba(255,255,255,0)', '0 0 0 0 rgba(255,255,255,0)']
                            }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          />
                        )}
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* Card Styles */}
                <div>
                  <h4 className="font-semibold text-text-primary mb-3">Card Style</h4>
                  <div className="space-y-2">
                    {[
                      { id: 'holographic', name: 'Holographic', desc: 'Futuristic hologram effect' },
                      { id: 'neural', name: 'Neural Network', desc: 'AI-inspired connections' },
                      { id: 'quantum', name: 'Quantum', desc: 'Particle-based design' },
                      { id: 'matrix', name: 'Matrix', desc: 'Digital rain effect' }
                    ].map((style) => (
                      <motion.button
                        key={style.id}
                        onClick={() => {
                          setDemoData(prev => ({ ...prev, cardStyle: style.id }));
                          completeLevel(3);
                        }}
                        className={`w-full text-left p-3 rounded-lg border transition-all ${
                          demoData.cardStyle === style.id
                            ? 'border-primary-cyan bg-primary-cyan/10'
                            : 'border-border hover:border-primary-cyan/50'
                        }`}
                        whileHover={{ x: 5 }}
                      >
                        <div className="font-medium text-text-primary text-sm">{style.name}</div>
                        <div className="text-text-secondary text-xs">{style.desc}</div>
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* AR Effects */}
                <div>
                  <h4 className="font-semibold text-text-primary mb-3">AR Effects</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { id: 'hologram', name: 'Hologram', icon: '✨' },
                      { id: 'particle', name: 'Particles', icon: '🌟' },
                      { id: 'glow', name: 'Glow', icon: '💫' },
                      { id: 'scan', name: 'Scan Lines', icon: '📡' }
                    ].map((effect) => (
                      <motion.button
                        key={effect.id}
                        onClick={() => {
                          setDemoData(prev => ({ ...prev, arEffect: effect.id }));
                          completeLevel(3);
                        }}
                        className={`p-3 rounded-lg border text-center transition-all ${
                          demoData.arEffect === effect.id
                            ? 'border-primary-cyan bg-primary-cyan/10'
                            : 'border-border hover:border-primary-cyan/50'
                        }`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="text-lg mb-1">{effect.icon}</div>
                        <div className="text-xs font-medium text-text-primary">{effect.name}</div>
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* Personal Info */}
                <div>
                  <h4 className="font-semibold text-text-primary mb-3">Quick Edit</h4>
                  <div className="space-y-3">
                    <input
                      type="text"
                      placeholder="Your Name"
                      value={demoData.userName}
                      onChange={(e) => setDemoData(prev => ({ ...prev, userName: e.target.value }))}
                      className="w-full px-3 py-2 bg-background border border-border rounded text-text-primary text-sm focus:outline-none focus:ring-2 focus:ring-primary-cyan focus:border-transparent"
                    />
                    <input
                      type="text"
                      placeholder="Your Title"
                      value={demoData.userTitle}
                      onChange={(e) => setDemoData(prev => ({ ...prev, userTitle: e.target.value }))}
                      className="w-full px-3 py-2 bg-background border border-border rounded text-text-primary text-sm focus:outline-none focus:ring-2 focus:ring-primary-cyan focus:border-transparent"
                    />
                    <input
                      type="text"
                      placeholder="Company"
                      value={demoData.userCompany}
                      onChange={(e) => setDemoData(prev => ({ ...prev, userCompany: e.target.value }))}
                      className="w-full px-3 py-2 bg-background border border-border rounded text-text-primary text-sm focus:outline-none focus:ring-2 focus:ring-primary-cyan focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-6 text-center">
                <motion.div
                  className="inline-flex items-center space-x-2 text-sm text-accent-green"
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <span>✨</span>
                  <span>Changes apply in real-time</span>
                  <span>✨</span>
                </motion.div>
              </div>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="space-y-8">
            {/* Sharing Methods Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  id: 'qr',
                  title: 'QR Code',
                  icon: '📱',
                  description: 'Instant scan sharing',
                  color: 'cyan'
                },
                {
                  id: 'nfc',
                  title: 'NFC Tap',
                  icon: '📡',
                  description: 'Touch to share',
                  color: 'purple'
                },
                {
                  id: 'link',
                  title: 'Direct Link',
                  icon: '🔗',
                  description: 'Copy & paste anywhere',
                  color: 'green'
                },
                {
                  id: 'ar',
                  title: 'AR Broadcast',
                  icon: '🌐',
                  description: 'Spatial sharing',
                  color: 'orange'
                }
              ].map((method, index) => (
                <motion.div
                  key={method.id}
                  className="bg-surface/50 backdrop-blur-sm border border-border rounded-xl p-6 text-center cursor-pointer"
                  whileHover={{ scale: 1.02, y: -5 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    setDemoData(prev => ({ ...prev, shareCount: prev.shareCount + 1 }));
                    completeLevel(4);
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <motion.div
                    className="text-4xl mb-4"
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{
                      duration: 2,
                      delay: index * 0.5,
                      repeat: Infinity
                    }}
                  >
                    {method.icon}
                  </motion.div>
                  <h3 className="text-lg font-bold text-text-primary mb-2">{method.title}</h3>
                  <p className="text-text-secondary text-sm mb-4">{method.description}</p>

                  {/* Demo specific content */}
                  {method.id === 'qr' && (
                    <div className="bg-white p-3 rounded-lg inline-block">
                      <div className="w-20 h-20 grid grid-cols-8 gap-px">
                        {[...Array(64)].map((_, i) => (
                          <motion.div
                            key={i}
                            className={`aspect-square ${Math.random() > 0.5 ? 'bg-black' : 'bg-white'}`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: i * 0.01 }}
                          />
                        ))}
                      </div>
                    </div>
                  )}

                  {method.id === 'nfc' && (
                    <motion.div
                      className="w-16 h-16 mx-auto rounded-full border-2 border-primary-purple flex items-center justify-center"
                      animate={{
                        borderColor: ['#8b5cf6', '#a78bfa', '#8b5cf6'],
                        boxShadow: [
                          '0 0 0 0 rgba(139, 92, 246, 0.7)',
                          '0 0 0 10px rgba(139, 92, 246, 0)',
                          '0 0 0 0 rgba(139, 92, 246, 0)'
                        ]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <span className="text-primary-purple">📡</span>
                    </motion.div>
                  )}

                  {method.id === 'link' && (
                    <div className="bg-background border border-border rounded p-2">
                      <div className="text-xs font-mono text-accent-green">
                        namecardai.com/alex-j
                      </div>
                    </div>
                  )}

                  {method.id === 'ar' && (
                    <motion.div
                      className="relative w-16 h-16 mx-auto"
                      animate={{ rotateY: [0, 360] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    >
                      <div className="absolute inset-0 rounded-full border-2 border-accent-orange opacity-60" />
                      <div className="absolute inset-2 rounded-full border-2 border-accent-orange opacity-80" />
                      <div className="absolute inset-4 rounded-full bg-accent-orange" />
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Advanced Sharing Features */}
            <div className="bg-surface/50 backdrop-blur-sm border border-border rounded-xl p-6">
              <h3 className="text-lg font-bold text-text-primary mb-6">Advanced Sharing Features</h3>

              <div className="grid md:grid-cols-3 gap-6">
                {/* Analytics Preview */}
                <div className="text-center">
                  <motion.div
                    className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary-cyan to-primary-purple flex items-center justify-center"
                    animate={{
                      boxShadow: [
                        '0 0 20px rgba(0, 245, 255, 0.3)',
                        '0 0 30px rgba(139, 92, 246, 0.5)',
                        '0 0 20px rgba(0, 245, 255, 0.3)'
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <span className="text-2xl">📊</span>
                  </motion.div>
                  <h4 className="font-semibold text-text-primary mb-2">Real-time Analytics</h4>
                  <p className="text-text-secondary text-sm">Track every scan, view, and interaction</p>
                </div>

                {/* Smart Targeting */}
                <div className="text-center">
                  <motion.div
                    className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-accent-green to-accent-orange flex items-center justify-center"
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, 180, 360]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <span className="text-2xl">🎯</span>
                  </motion.div>
                  <h4 className="font-semibold text-text-primary mb-2">Smart Targeting</h4>
                  <p className="text-text-secondary text-sm">AI-powered audience insights</p>
                </div>

                {/* Cross-Platform */}
                <div className="text-center">
                  <motion.div
                    className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-accent-pink to-accent-blue flex items-center justify-center"
                    animate={{
                      y: [0, -5, 0]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <span className="text-2xl">🌐</span>
                  </motion.div>
                  <h4 className="font-semibold text-text-primary mb-2">Cross-Platform</h4>
                  <p className="text-text-secondary text-sm">Works on any device, anywhere</p>
                </div>
              </div>
            </div>

            {/* Sharing Stats */}
            <div className="grid grid-cols-3 gap-4">
              <motion.div
                className="bg-surface border border-border rounded-lg p-4 text-center"
                whileHover={{ scale: 1.02 }}
              >
                <motion.div
                  className="text-2xl font-bold text-primary-cyan"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {demoData.shareCount + 1247}
                </motion.div>
                <div className="text-sm text-text-secondary">Total Shares</div>
              </motion.div>

              <motion.div
                className="bg-surface border border-border rounded-lg p-4 text-center"
                whileHover={{ scale: 1.02 }}
              >
                <motion.div
                  className="text-2xl font-bold text-accent-green"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                >
                  98%
                </motion.div>
                <div className="text-sm text-text-secondary">Success Rate</div>
              </motion.div>

              <motion.div
                className="bg-surface border border-border rounded-lg p-4 text-center"
                whileHover={{ scale: 1.02 }}
              >
                <motion.div
                  className="text-2xl font-bold text-accent-orange"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                >
                  2.3s
                </motion.div>
                <div className="text-sm text-text-secondary">Avg. Load Time</div>
              </motion.div>
            </div>
          </div>
        );
      case 5:
        return (
          <div className="space-y-8">
            {/* Real-time Analytics Dashboard */}
            <div className="bg-surface/50 backdrop-blur-sm border border-border rounded-xl p-6">
              <h3 className="text-lg font-bold text-text-primary mb-6">Real-time Analytics Dashboard</h3>

              {/* Key Metrics */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {[
                  {
                    label: 'Total Scans',
                    value: 1247 + demoData.scanCount,
                    change: '+12%',
                    color: 'primary-cyan',
                    icon: '📱'
                  },
                  {
                    label: 'Unique Views',
                    value: 892 + demoData.shareCount,
                    change: '+8%',
                    color: 'accent-green',
                    icon: '👥'
                  },
                  {
                    label: 'Conversion Rate',
                    value: '23%',
                    change: '+5%',
                    color: 'accent-orange',
                    icon: '🎯'
                  },
                  {
                    label: 'Avg. Time',
                    value: '45s',
                    change: '+15%',
                    color: 'primary-purple',
                    icon: '⏱️'
                  }
                ].map((metric, i) => (
                  <motion.div
                    key={metric.label}
                    className="bg-surface border border-border rounded-lg p-4 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="text-2xl mb-2">{metric.icon}</div>
                    <motion.div
                      className={`text-2xl font-bold text-${metric.color} mb-1`}
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                    >
                      {metric.value}
                    </motion.div>
                    <div className="text-sm text-text-secondary mb-1">{metric.label}</div>
                    <div className="text-xs text-accent-green">{metric.change} this week</div>
                  </motion.div>
                ))}
              </div>

              {/* Interactive Chart */}
              <div className="bg-background border border-border rounded-lg p-6 mb-6">
                <h4 className="text-lg font-semibold text-text-primary mb-4">Scan Activity (Last 7 Days)</h4>
                <div className="flex items-end space-x-2 h-40 mb-4">
                  {[40, 65, 30, 80, 55, 90, 70].map((height, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      animate={{ height: `${height}%` }}
                      transition={{ duration: 1, delay: i * 0.1 }}
                      className="bg-gradient-to-t from-primary-cyan to-primary-purple rounded-t flex-1 min-w-8 cursor-pointer relative group"
                      whileHover={{ scale: 1.05 }}
                    >
                      {/* Tooltip */}
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                        {height * 10} scans
                      </div>
                    </motion.div>
                  ))}
                </div>
                <div className="flex justify-between text-xs text-text-secondary">
                  {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
                    <span key={day}>{day}</span>
                  ))}
                </div>
              </div>

              {/* Engagement Breakdown */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-text-primary mb-4">Interaction Types</h4>
                  <div className="space-y-3">
                    {[
                      { label: 'Card Views', value: 85, color: 'primary-cyan' },
                      { label: 'Contact Saves', value: 65, color: 'accent-green' },
                      { label: 'Social Clicks', value: 45, color: 'accent-orange' },
                      { label: 'Shares', value: 25, color: 'primary-purple' }
                    ].map((item, i) => (
                      <div key={item.label}>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-text-secondary">{item.label}</span>
                          <span className="text-text-primary font-semibold">{item.value}%</span>
                        </div>
                        <div className="w-full bg-border rounded-full h-2">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${item.value}%` }}
                            transition={{ duration: 1, delay: i * 0.2 }}
                            className={`h-2 rounded-full bg-${item.color}`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-text-primary mb-4">Geographic Distribution</h4>
                  <div className="space-y-3">
                    {[
                      { country: 'United States', percentage: 45, flag: '🇺🇸' },
                      { country: 'United Kingdom', percentage: 22, flag: '🇬🇧' },
                      { country: 'Germany', percentage: 15, flag: '🇩🇪' },
                      { country: 'Japan', percentage: 18, flag: '🇯🇵' }
                    ].map((country, i) => (
                      <motion.div
                        key={country.country}
                        className="flex items-center justify-between p-2 bg-surface border border-border rounded"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        whileHover={{ x: 5 }}
                      >
                        <div className="flex items-center space-x-2">
                          <span className="text-lg">{country.flag}</span>
                          <span className="text-text-primary text-sm">{country.country}</span>
                        </div>
                        <span className="text-primary-cyan font-semibold">{country.percentage}%</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* AI Insights */}
            <div className="bg-gradient-to-r from-primary-cyan/10 to-primary-purple/10 border border-primary-cyan/30 rounded-xl p-6">
              <h3 className="text-lg font-bold text-text-primary mb-4 flex items-center">
                <span className="mr-2">🤖</span>
                AI-Powered Insights
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-text-primary mb-2">Optimization Suggestions</h4>
                  <ul className="space-y-2 text-sm text-text-secondary">
                    <li className="flex items-start space-x-2">
                      <span className="text-accent-green">✓</span>
                      <span>Peak engagement occurs at 2-4 PM PST</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-accent-orange">⚡</span>
                      <span>Consider adding video content for 23% boost</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-primary-cyan">📱</span>
                      <span>Mobile users prefer QR code sharing</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-text-primary mb-2">Predicted Growth</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-text-secondary">Next Week</span>
                      <span className="text-accent-green font-semibold">+15% scans</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-text-secondary">Next Month</span>
                      <span className="text-accent-green font-semibold">+45% engagement</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-text-secondary">ROI Projection</span>
                      <span className="text-primary-cyan font-semibold">340% increase</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={() => completeLevel(5)} size="lg">
                📊 Complete Analytics Tour
              </Button>
              <Button variant="outline" size="lg">
                📧 Email Report
              </Button>
              <Button variant="outline" size="lg">
                📈 Export Data
              </Button>
            </div>
          </div>
        );
      default:
        return <div>Loading...</div>;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-surface to-background py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-hero gradient-text mb-6">
            Interactive AR Demo
          </h1>
          <p className="text-xl text-text-secondary mb-8 max-w-3xl mx-auto">
            Experience the complete NameCardAI journey. Go through each level to see how AR business cards revolutionize networking.
          </p>
          
          {/* Progress */}
          <div className="max-w-md mx-auto mb-8">
            <div className="flex justify-between text-sm text-text-secondary mb-2">
              <span>Progress</span>
              <span>{completedLevels.size}/{levels.length} Complete</span>
            </div>
            <div className="w-full bg-border rounded-full h-2">
              <motion.div
                className="bg-gradient-to-r from-primary-cyan to-primary-purple h-2 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${(completedLevels.size / levels.length) * 100}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Level Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-surface/50 backdrop-blur-sm border border-border rounded-xl p-6 sticky top-24">
              <h3 className="text-lg font-bold text-text-primary mb-4">Demo Levels</h3>
              <div className="space-y-3">
                {levels.map((level) => (
                  <motion.div
                    key={level.id}
                    whileHover={{ scale: 1.02 }}
                    className={`p-3 rounded-lg border cursor-pointer transition-all ${
                      currentLevel === level.id
                        ? 'bg-primary-cyan/10 border-primary-cyan shadow-lg shadow-primary-cyan/25'
                        : completedLevels.has(level.id)
                        ? 'bg-accent-green/10 border-accent-green'
                        : 'bg-surface border-border hover:border-primary-cyan/50'
                    }`}
                    onClick={() => setCurrentLevel(level.id)}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                        completedLevels.has(level.id)
                          ? 'bg-accent-green text-black'
                          : currentLevel === level.id
                          ? 'bg-primary-cyan text-black'
                          : 'bg-border text-text-secondary'
                      }`}>
                        {completedLevels.has(level.id) ? '✓' : level.id}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-text-primary text-sm">{level.title}</h4>
                        <p className="text-xs text-text-secondary">{level.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-6 pt-6 border-t border-border">
                <Button variant="outline" size="sm" onClick={resetDemo} className="w-full">
                  🔄 Reset Demo
                </Button>
              </div>
            </div>
          </div>

          {/* Demo Area */}
          <div className="lg:col-span-3">
            <motion.div
              key={currentLevel}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-surface/50 backdrop-blur-sm border border-border rounded-xl p-8 min-h-[600px] relative"
            >
              {/* Level Header */}
              <div className="mb-8">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-primary-cyan text-black rounded-full flex items-center justify-center font-bold">
                    {currentLevel}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-text-primary">
                      {currentLevelData?.title}
                    </h2>
                    <p className="text-text-secondary">
                      {currentLevelData?.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Demo Component */}
              <div className="relative">
                {renderCurrentComponent()}
              </div>

              {/* Instructions Overlay */}
              <AnimatePresence>
                {showInstructions && currentLevelData && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
                  >
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.8, opacity: 0 }}
                      className="bg-surface border border-border rounded-xl p-8 max-w-md mx-4 text-center"
                    >
                      <div className="text-4xl mb-4">💡</div>
                      <h3 className="text-xl font-bold text-text-primary mb-4">Instructions</h3>
                      <p className="text-text-secondary mb-6">{currentLevelData.instruction}</p>
                      <div className="flex space-x-3 justify-center">
                        <Button onClick={() => setShowInstructions(false)}>Got it!</Button>
                        <Button variant="ghost" onClick={() => setShowInstructions(false)}>Skip Tutorial</Button>
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>

        {/* Completion Message */}
        <AnimatePresence>
          {completedLevels.size === levels.length && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              className="mt-12 text-center bg-gradient-to-r from-accent-green/10 to-primary-cyan/10 border border-accent-green/30 rounded-xl p-8"
            >
              <div className="text-6xl mb-4">🎉</div>
              <h3 className="text-2xl font-bold text-text-primary mb-4">
                Demo Complete!
              </h3>
              <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
                Congratulations! You've experienced the full NameCardAI journey. Ready to create your own AR business card?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" href="/signup">
                  ✨ Start Your AR Journey
                </Button>
                <Button variant="outline" size="lg" onClick={resetDemo}>
                  🔄 Try Demo Again
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

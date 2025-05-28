'use client';

import { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

const StatCard = ({ number, label, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6, delay }}
    className="text-center p-6 bg-surface/50 backdrop-blur-sm border border-border rounded-lg hover:border-primary-cyan/50 transition-all duration-300"
  >
    <div className="text-3xl font-bold gradient-text mb-2">{number}</div>
    <div className="text-text-secondary text-sm">{label}</div>
  </motion.div>
);

const ProblemCard = ({ icon, title, description, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6, delay }}
    className="flex items-start space-x-4 p-6 bg-red-900/10 border border-red-500/20 rounded-lg hover:border-red-500/40 transition-all duration-300"
  >
    <div className="flex-shrink-0 w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center text-red-400 text-xl">
      {icon}
    </div>
    <div>
      <h3 className="text-lg font-semibold text-text-primary mb-2">{title}</h3>
      <p className="text-text-secondary">{description}</p>
    </div>
  </motion.div>
);

const SolutionCard = ({ icon, title, description, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, x: 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6, delay }}
    className="flex items-start space-x-4 p-6 bg-accent-green/10 border border-accent-green/20 rounded-lg hover:border-accent-green/40 transition-all duration-300"
  >
    <div className="flex-shrink-0 w-12 h-12 bg-accent-green/20 rounded-lg flex items-center justify-center text-accent-green text-xl">
      {icon}
    </div>
    <div>
      <h3 className="text-lg font-semibold text-text-primary mb-2">{title}</h3>
      <p className="text-text-secondary">{description}</p>
    </div>
  </motion.div>
);

export default function ProblemSolutionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  const problems = [
    {
      icon: "🗑️",
      title: "Massive Waste",
      description: "7 billion+ paper cards printed yearly with 88% thrown away within a week"
    },
    {
      icon: "📱",
      title: "Tech Limitations",
      description: "QR/NFC cards require specific apps, compatible devices, and battery life"
    },
    {
      icon: "😴",
      title: "Forgettable",
      description: "Traditional cards lack visual impact and memorable experiences"
    },
    {
      icon: "🔄",
      title: "Manual Effort",
      description: "Physical cards require manual data entry and offer no digital engagement"
    }
  ];

  const solutions = [
    {
      icon: "🌐",
      title: "Universal Access",
      description: "Works in any browser without app downloads or special hardware"
    },
    {
      icon: "🎯",
      title: "Multiple Methods",
      description: "Share via QR, NFC, camera scan, or just remembering a name"
    },
    {
      icon: "✨",
      title: "Memorable AR",
      description: "3D animations and immersive experiences boost retention by 70%"
    },
    {
      icon: "🌱",
      title: "Eco-Friendly",
      description: "Digital-first approach eliminates paper waste and environmental impact"
    }
  ];

  const stats = [
    { number: "7B+", label: "Cards Printed Yearly" },
    { number: "88%", label: "Thrown Away" },
    { number: "70%", label: "Higher Retention" },
    { number: "0", label: "Apps Required" }
  ];

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-background to-surface relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Animated Lines */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-primary-cyan/30 to-transparent"
            style={{
              top: `${20 + i * 20}%`,
              left: 0,
              right: 0,
            }}
            animate={{
              opacity: [0, 0.5, 0],
              scaleX: [0, 1, 0],
            }}
            transition={{
              duration: 4,
              delay: i * 0.5,
              repeat: Infinity,
              repeatDelay: 2
            }}
          />
        ))}
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
            The Problem with Traditional Networking
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Paper business cards are outdated, wasteful, and forgettable. 
            Current digital solutions still fall short of creating meaningful connections.
          </p>
        </motion.div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <StatCard key={stat.label} {...stat} delay={index * 0.1} />
          ))}
        </motion.div>

        {/* Problem vs Solution */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Problems */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <h3 className="text-2xl font-bold text-red-400 mb-4 flex items-center">
                <span className="mr-3">❌</span>
                Current Problems
              </h3>
              <p className="text-text-secondary">
                Traditional networking methods are broken and need a complete reimagining.
              </p>
            </motion.div>
            
            <div className="space-y-6">
              {problems.map((problem, index) => (
                <ProblemCard key={problem.title} {...problem} delay={index * 0.1} />
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <h3 className="text-2xl font-bold text-accent-green mb-4 flex items-center">
                <span className="mr-3">✅</span>
                Our Solutions
              </h3>
              <p className="text-text-secondary">
                NameCardAI revolutionizes networking with AR-powered digital business cards.
              </p>
            </motion.div>
            
            <div className="space-y-6">
              {solutions.map((solution, index) => (
                <SolutionCard key={solution.title} {...solution} delay={index * 0.1} />
              ))}
            </div>
          </div>
        </div>

        {/* Visual Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl font-bold text-text-primary mb-8">
            The Transformation
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8 items-center">
            {/* Before */}
            <div className="p-8 bg-red-900/10 border border-red-500/20 rounded-lg">
              <div className="text-6xl mb-4">📄</div>
              <h4 className="text-lg font-semibold text-red-400 mb-2">Before</h4>
              <p className="text-text-secondary text-sm">
                Paper cards that get lost, damaged, or thrown away
              </p>
            </div>

            {/* Arrow */}
            <div className="hidden md:block">
              <motion.div
                animate={{ x: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-4xl text-primary-cyan"
              >
                →
              </motion.div>
            </div>

            {/* After */}
            <div className="p-8 bg-accent-green/10 border border-accent-green/20 rounded-lg">
              <div className="text-6xl mb-4">✨</div>
              <h4 className="text-lg font-semibold text-accent-green mb-2">After</h4>
              <p className="text-text-secondary text-sm">
                AR-enhanced digital cards that create lasting impressions
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

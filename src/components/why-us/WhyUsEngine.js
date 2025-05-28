'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import Button from '../ui/Button';

export default function WhyUsEngine() {
  const [activeSection, setActiveSection] = useState(0);
  const sectionsRef = useRef([]);

  const advantages = [
    {
      id: 1,
      title: "First-Mover Advantage",
      subtitle: "Leading the AR Business Card Revolution",
      description: "We're not just following trends—we're creating them. As the first comprehensive AR business card platform, we've established market leadership and brand recognition.",
      icon: "🚀",
      stats: [
        { label: "Market Entry", value: "2+ Years Ahead", color: "text-primary-cyan" },
        { label: "Patent Applications", value: "12 Filed", color: "text-primary-cyan" },
        { label: "Brand Recognition", value: "85%", color: "text-accent-green" }
      ],
      features: [
        "First AR business card platform",
        "Proprietary technology stack",
        "Established user base",
        "Industry partnerships"
      ]
    },
    {
      id: 2,
      title: "Superior Technology",
      subtitle: "AI-Powered AR Innovation",
      description: "Our cutting-edge technology combines artificial intelligence with augmented reality to create experiences that competitors simply can't match.",
      icon: "🧠",
      stats: [
        { label: "AI Accuracy", value: "99.7%", color: "text-primary-purple" },
        { label: "Load Time", value: "< 2 seconds", color: "text-primary-purple" },
        { label: "Device Support", value: "95%", color: "text-accent-green" }
      ],
      features: [
        "Advanced computer vision",
        "Real-time AR rendering",
        "Cross-platform compatibility",
        "Cloud-based processing"
      ]
    },
    {
      id: 3,
      title: "Proven Results",
      subtitle: "Data-Driven Success Stories",
      description: "Our platform delivers measurable results that transform how businesses network. Real metrics from real users prove our value proposition.",
      icon: "📊",
      stats: [
        { label: "Engagement Increase", value: "340%", color: "text-accent-green" },
        { label: "Follow-up Rate", value: "78%", color: "text-accent-green" },
        { label: "Cost Reduction", value: "89%", color: "text-accent-green" }
      ],
      features: [
        "Comprehensive analytics",
        "ROI tracking",
        "Performance optimization",
        "Success metrics"
      ]
    },
    {
      id: 4,
      title: "Enterprise Ready",
      subtitle: "Built for Scale and Security",
      description: "From startups to Fortune 500 companies, our platform scales seamlessly while maintaining enterprise-grade security and compliance.",
      icon: "🏢",
      stats: [
        { label: "Enterprise Clients", value: "250+", color: "text-primary-cyan" },
        { label: "Uptime", value: "99.9%", color: "text-accent-green" },
        { label: "Security Rating", value: "A+", color: "text-accent-green" }
      ],
      features: [
        "SOC 2 compliance",
        "GDPR compliant",
        "Enterprise SSO",
        "24/7 support"
      ]
    },
    {
      id: 5,
      title: "Global Reach",
      subtitle: "Worldwide Network Effect",
      description: "Our platform connects professionals across 150+ countries, creating a global network that grows stronger with every new user.",
      icon: "🌍",
      stats: [
        { label: "Countries", value: "150+", color: "text-primary-cyan" },
        { label: "Active Users", value: "2.5M+", color: "text-primary-cyan" },
        { label: "Daily Scans", value: "500K+", color: "text-accent-green" }
      ],
      features: [
        "Multi-language support",
        "Local compliance",
        "Regional partnerships",
        "Global CDN"
      ]
    },
    {
      id: 6,
      title: "Continuous Innovation",
      subtitle: "Always Ahead of the Curve",
      description: "Our dedicated R&D team continuously pushes the boundaries of what's possible, ensuring we stay ahead of competition and user expectations.",
      icon: "⚡",
      stats: [
        { label: "R&D Investment", value: "35%", color: "text-primary-purple" },
        { label: "New Features/Month", value: "12+", color: "text-primary-purple" },
        { label: "Innovation Score", value: "9.8/10", color: "text-accent-green" }
      ],
      features: [
        "Monthly feature releases",
        "Beta testing program",
        "User feedback integration",
        "Future-proof architecture"
      ]
    }
  ];

  // Intersection Observer for active section tracking
  useEffect(() => {
    const observers = sectionsRef.current.map((ref, index) => {
      if (!ref) return null;
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(index);
          }
        },
        { threshold: 0.5 }
      );
      
      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
  }, []);

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
              Why Choose NameCardAI?
            </h1>
            <p className="text-xl md:text-2xl text-text-secondary mb-12 max-w-4xl mx-auto">
              We're not just another business card app. We're the future of professional networking, 
              backed by cutting-edge technology and proven results.
            </p>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {[
              { label: "Years Leading", value: "3+", icon: "🏆" },
              { label: "Happy Users", value: "2.5M+", icon: "😊" },
              { label: "Countries", value: "150+", icon: "🌍" },
              { label: "Success Rate", value: "98%", icon: "✅" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="bg-surface/50 backdrop-blur-sm border border-border rounded-xl p-6"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
              >
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-2xl font-bold text-primary-cyan mb-1">{stat.value}</div>
                <div className="text-sm text-text-secondary">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Advantages Sections */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {advantages.map((advantage, index) => (
            <motion.div
              key={advantage.id}
              ref={el => sectionsRef.current[index] = el}
              className="mb-32 last:mb-0"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <div className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}>
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                  >
                    <div className="flex items-center mb-6">
                      <span className="text-6xl mr-4">{advantage.icon}</span>
                      <div>
                        <h2 className="text-4xl font-bold text-text-primary mb-2">
                          {advantage.title}
                        </h2>
                        <h3 className="text-xl text-primary-cyan">
                          {advantage.subtitle}
                        </h3>
                      </div>
                    </div>

                    <p className="text-lg text-text-secondary mb-8 leading-relaxed">
                      {advantage.description}
                    </p>

                    {/* Features List */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                      {advantage.features.map((feature, featureIndex) => (
                        <motion.div
                          key={feature}
                          className="flex items-center space-x-3"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.4 + featureIndex * 0.1 }}
                        >
                          <div className="w-2 h-2 bg-primary-cyan rounded-full" />
                          <span className="text-text-primary">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Stats Cards */}
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <motion.div
                    className="grid grid-cols-1 gap-6"
                    initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                  >
                    {advantage.stats.map((stat, statIndex) => (
                      <motion.div
                        key={stat.label}
                        className="bg-surface/50 backdrop-blur-sm border border-border rounded-xl p-6"
                        whileHover={{ scale: 1.02 }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 + statIndex * 0.1 }}
                      >
                        <div className={`text-3xl font-bold ${stat.color} mb-2`}>
                          {stat.value}
                        </div>
                        <div className="text-text-secondary">{stat.label}</div>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

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
            Ready to Experience the Difference?
          </h2>
          <p className="text-xl text-text-secondary mb-8">
            Join millions of professionals who've already made the switch to the future of networking.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" href="/demo">
              🚀 Try Live Demo
            </Button>
            <Button variant="outline" size="lg" href="/signup">
              ✨ Start Free Trial
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Navigation Sidebar */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block">
        <div className="bg-surface/80 backdrop-blur-sm border border-border rounded-lg p-2">
          {advantages.map((advantage, index) => (
            <button
              key={advantage.id}
              onClick={() => {
                sectionsRef.current[index]?.scrollIntoView({ 
                  behavior: 'smooth',
                  block: 'center'
                });
              }}
              className={`block w-3 h-3 rounded-full mb-2 transition-all ${
                activeSection === index
                  ? 'bg-primary-cyan scale-125'
                  : 'bg-border hover:bg-primary-cyan/50'
              }`}
              title={advantage.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

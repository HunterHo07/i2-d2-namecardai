'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';

export default function LandingEngine() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Sarah Chen",
      title: "VP of Sales, TechCorp",
      content: "NameCardAI increased our follow-up rate by 340%. It's completely transformed how we network at conferences.",
      avatar: "👩‍💼",
      company: "TechCorp Inc."
    },
    {
      name: "Marcus Rodriguez",
      title: "Startup Founder",
      content: "I've saved over $5,000 on printing costs and my networking ROI has never been higher. This is the future.",
      avatar: "👨‍💻",
      company: "InnovateLab"
    },
    {
      name: "Dr. Emily Watson",
      title: "Medical Director",
      content: "The analytics alone are worth it. I can see exactly who's engaging with my card and when to follow up.",
      avatar: "👩‍⚕️",
      company: "HealthTech Solutions"
    }
  ];

  const benefits = [
    {
      icon: "💰",
      title: "Save 89% on Costs",
      description: "No more printing, shipping, or reprinting costs. One-time setup, lifetime savings."
    },
    {
      icon: "📈",
      title: "340% More Follow-ups",
      description: "Interactive AR cards are impossible to ignore. Get real engagement, not trash bins."
    },
    {
      icon: "📊",
      title: "Real-time Analytics",
      description: "See who scanned your card, when, and where. Track your networking ROI like never before."
    },
    {
      icon: "🌍",
      title: "Global Reach",
      description: "Share instantly worldwide. No geographical limits, no shipping delays."
    },
    {
      icon: "⚡",
      title: "Instant Updates",
      description: "Change your info once, update everywhere. No more outdated cards in circulation."
    },
    {
      icon: "🔒",
      title: "Enterprise Security",
      description: "Bank-level encryption and SOC 2 compliance. Your data is always protected."
    }
  ];

  // Rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      // Here you would typically send the email to your backend
      console.log('Email submitted:', email);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-surface to-background">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-accent-green/10 border border-accent-green/30 rounded-full px-4 py-2 inline-block mb-6">
                <span className="text-accent-green font-semibold">🔥 2.5M+ Professionals Trust Us</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold text-text-primary mb-6">
                Stop Wasting Money on 
                <span className="gradient-text block">Paper Business Cards</span>
              </h1>

              <p className="text-xl text-text-secondary mb-8 leading-relaxed">
                Create stunning AR business cards that get <strong>340% more follow-ups</strong> 
                while saving <strong>89% on costs</strong>. Join the networking revolution.
              </p>

              {/* Key Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                {[
                  { value: "340%", label: "More Follow-ups" },
                  { value: "89%", label: "Cost Savings" },
                  { value: "< 2min", label: "Setup Time" }
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    <div className="text-2xl font-bold text-primary-cyan">{stat.value}</div>
                    <div className="text-sm text-text-secondary">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* CTA Form */}
              {!isSubmitted ? (
                <motion.form
                  onSubmit={handleSubmit}
                  className="flex flex-col sm:flex-row gap-4 mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <input
                    type="email"
                    placeholder="Enter your email to get started"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 px-4 py-3 bg-surface border border-border rounded-lg text-text-primary placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-primary-cyan focus:border-transparent"
                    required
                  />
                  <Button type="submit" size="lg" className="whitespace-nowrap">
                    🚀 Start Free Trial
                  </Button>
                </motion.form>
              ) : (
                <motion.div
                  className="bg-accent-green/10 border border-accent-green/30 rounded-lg p-6 mb-6"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">✅</span>
                    <div>
                      <h3 className="font-bold text-accent-green">Welcome to the Future!</h3>
                      <p className="text-text-secondary">Check your email for next steps.</p>
                    </div>
                  </div>
                </motion.div>
              )}

              <p className="text-sm text-text-secondary">
                ✨ Free 14-day trial • No credit card required • Cancel anytime
              </p>
            </motion.div>

            {/* Right Column - Visual */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* AR Card Preview */}
              <div className="relative">
                <motion.div
                  className="w-80 h-48 mx-auto bg-gradient-to-br from-primary-cyan to-primary-purple rounded-xl shadow-2xl border-2 border-primary-cyan/50 overflow-hidden"
                  animate={{
                    rotateY: [0, 5, -5, 0],
                    boxShadow: [
                      '0 0 30px rgba(0, 245, 255, 0.3)',
                      '0 0 50px rgba(139, 92, 246, 0.5)',
                      '0 0 30px rgba(0, 245, 255, 0.3)'
                    ]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  {/* AR Corners */}
                  <div className="absolute top-2 left-2 w-6 h-6 border-l-2 border-t-2 border-white animate-pulse" />
                  <div className="absolute top-2 right-2 w-6 h-6 border-r-2 border-t-2 border-white animate-pulse" />
                  <div className="absolute bottom-2 left-2 w-6 h-6 border-l-2 border-b-2 border-white animate-pulse" />
                  <div className="absolute bottom-2 right-2 w-6 h-6 border-r-2 border-b-2 border-white animate-pulse" />

                  {/* Card Content */}
                  <div className="p-6 h-full flex flex-col justify-between">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-white font-bold mb-3">
                          JD
                        </div>
                        <h3 className="text-white font-bold text-lg">John Doe</h3>
                        <p className="text-white/80 text-sm">CEO & Founder</p>
                        <p className="text-white/60 text-xs">TechStartup Inc.</p>
                      </div>
                      <div className="w-8 h-8 bg-white/20 rounded flex items-center justify-center text-white text-xs font-bold">
                        AR
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2 text-white/80 text-xs">
                        <span>📧</span>
                        <span>john@techstartup.com</span>
                      </div>
                      <div className="flex items-center space-x-2 text-white/80 text-xs">
                        <span>📱</span>
                        <span>+1 (555) 123-4567</span>
                      </div>
                    </div>
                  </div>

                  {/* Holographic Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  />
                </motion.div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 bg-accent-green text-white px-3 py-1 rounded-full text-sm font-bold animate-bounce">
                  89% Savings!
                </div>
                <div className="absolute -bottom-4 -left-4 bg-primary-purple text-white px-3 py-1 rounded-full text-sm font-bold animate-pulse">
                  340% More Leads!
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-surface/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-text-primary mb-4">
              Why 2.5M+ Professionals Choose NameCardAI
            </h2>
            <p className="text-xl text-text-secondary">
              Stop throwing money away on outdated paper cards. Get real results.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                className="bg-surface/50 backdrop-blur-sm border border-border rounded-xl p-6 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-text-primary mb-3">{benefit.title}</h3>
                <p className="text-text-secondary">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-text-primary mb-12">
              What Our Users Say
            </h2>

            <motion.div
              key={currentTestimonial}
              className="bg-surface/50 backdrop-blur-sm border border-border rounded-xl p-8"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-6xl mb-4">{testimonials[currentTestimonial].avatar}</div>
              <blockquote className="text-xl text-text-primary mb-6 italic">
                "{testimonials[currentTestimonial].content}"
              </blockquote>
              <div>
                <div className="font-bold text-text-primary">
                  {testimonials[currentTestimonial].name}
                </div>
                <div className="text-text-secondary">
                  {testimonials[currentTestimonial].title}
                </div>
                <div className="text-primary-cyan text-sm">
                  {testimonials[currentTestimonial].company}
                </div>
              </div>
            </motion.div>

            {/* Testimonial Indicators */}
            <div className="flex justify-center space-x-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentTestimonial
                      ? 'bg-primary-cyan scale-125'
                      : 'bg-border hover:bg-primary-cyan/50'
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-4xl mx-auto text-center bg-gradient-to-r from-primary-cyan/10 to-primary-purple/10 border border-primary-cyan/30 rounded-2xl p-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-text-primary mb-6">
            Ready to Transform Your Networking?
          </h2>
          <p className="text-xl text-text-secondary mb-8">
            Join 2.5M+ professionals who've already made the switch. 
            Start your free trial today—no credit card required.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Button size="lg" href="/signup">
              🚀 Start Free Trial
            </Button>
            <Button variant="outline" size="lg" href="/demo">
              👀 Watch Demo
            </Button>
          </div>

          <div className="flex items-center justify-center space-x-6 text-sm text-text-secondary">
            <span>✅ 14-day free trial</span>
            <span>✅ No setup fees</span>
            <span>✅ Cancel anytime</span>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

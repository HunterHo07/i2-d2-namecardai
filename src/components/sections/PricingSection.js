'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import Button from '../ui/Button';

const PricingCard = ({ plan, isPopular = false, delay = 0 }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ 
        scale: 1.02,
        rotateY: isHovered ? 5 : 0,
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={`relative p-8 rounded-xl border transition-all duration-300 ${
        isPopular
          ? 'bg-gradient-to-br from-primary-cyan/10 to-primary-purple/10 border-primary-cyan shadow-lg shadow-primary-cyan/25'
          : 'bg-surface border-border hover:border-primary-cyan/50'
      }`}
      style={{
        transformStyle: 'preserve-3d',
      }}
    >
      {/* Popular Badge */}
      {isPopular && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: delay + 0.2 }}
          className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-primary-cyan to-primary-purple text-black px-4 py-1 rounded-full text-sm font-semibold"
        >
          Most Popular
        </motion.div>
      )}

      {/* Plan Header */}
      <div className="text-center mb-8">
        <div className="text-4xl mb-4">{plan.icon}</div>
        <h3 className="text-2xl font-bold text-text-primary mb-2">{plan.name}</h3>
        <p className="text-text-secondary mb-4">{plan.description}</p>
        
        {/* Price */}
        <div className="mb-6">
          {plan.price === 'Free' ? (
            <div className="text-4xl font-bold text-accent-green">Free</div>
          ) : (
            <div className="flex items-baseline justify-center">
              <span className="text-4xl font-bold text-text-primary">${plan.price}</span>
              <span className="text-text-secondary ml-1">/month</span>
            </div>
          )}
          {plan.yearlyDiscount && (
            <div className="text-sm text-accent-green mt-1">
              Save 20% with yearly billing
            </div>
          )}
        </div>
      </div>

      {/* Features */}
      <div className="space-y-4 mb-8">
        {plan.features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: delay + index * 0.1 }}
            className="flex items-start space-x-3"
          >
            <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${
              feature.included ? 'bg-accent-green text-black' : 'bg-border text-text-muted'
            }`}>
              {feature.included ? '✓' : '×'}
            </div>
            <span className={`text-sm ${
              feature.included ? 'text-text-primary' : 'text-text-muted line-through'
            }`}>
              {feature.text}
            </span>
          </motion.div>
        ))}
      </div>

      {/* CTA Button */}
      <Button
        variant={isPopular ? 'primary' : 'outline'}
        size="lg"
        className="w-full"
        href="/signup"
      >
        {plan.cta}
      </Button>

      {/* 3D Effect Overlay */}
      <div 
        className="absolute inset-0 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, rgba(0,245,255,0.1) 0%, rgba(139,92,246,0.1) 100%)',
          transform: 'translateZ(10px)',
        }}
      />
    </motion.div>
  );
};

export default function PricingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const plans = [
    {
      name: 'Basic AR',
      icon: '🆓',
      price: 'Free',
      description: 'Perfect for trying out AR business cards',
      cta: 'Start Free',
      features: [
        { text: '1 AR business card', included: true },
        { text: 'Random preset effect', included: true },
        { text: 'QR code sharing', included: true },
        { text: 'Basic contact information', included: true },
        { text: 'NameCardAI branding', included: true },
        { text: 'Custom branding', included: false },
        { text: 'Analytics dashboard', included: false },
        { text: 'Team features', included: false },
      ]
    },
    {
      name: 'Pro AR',
      icon: '⭐',
      price: '19',
      description: 'For professionals who want to stand out',
      cta: 'Start Pro Trial',
      yearlyDiscount: true,
      features: [
        { text: '3 AR business cards', included: true },
        { text: 'Choose from 20+ AR effects', included: true },
        { text: 'Custom intro video (30s)', included: true },
        { text: 'QR + NFC + Camera sharing', included: true },
        { text: 'Basic analytics', included: true },
        { text: 'Remove NameCardAI branding', included: true },
        { text: 'Priority support', included: true },
        { text: 'Team collaboration', included: false },
      ]
    },
    {
      name: 'Premium AR',
      icon: '🚀',
      price: '39',
      description: 'Full AR studio with unlimited customization',
      cta: 'Go Premium',
      yearlyDiscount: true,
      features: [
        { text: 'Unlimited AR business cards', included: true },
        { text: 'Full customization suite', included: true },
        { text: 'Custom 3D avatars', included: true },
        { text: 'Extended intro videos (2min)', included: true },
        { text: 'All sharing methods', included: true },
        { text: 'Advanced analytics', included: true },
        { text: 'Team collaboration', included: true },
        { text: 'API access', included: true },
      ]
    },
    {
      name: 'Enterprise',
      icon: '🏢',
      price: '99',
      description: 'For teams and organizations at scale',
      cta: 'Contact Sales',
      yearlyDiscount: true,
      features: [
        { text: 'Everything in Premium', included: true },
        { text: 'White-label solution', included: true },
        { text: 'Custom AR effect development', included: true },
        { text: 'Bulk card management', included: true },
        { text: 'SSO integration', included: true },
        { text: 'Dedicated account manager', included: true },
        { text: 'SLA guarantee', included: true },
        { text: 'Custom integrations', included: true },
      ]
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-surface to-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Floating Orbs */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-32 h-32 rounded-full opacity-10"
            style={{
              background: `radial-gradient(circle, ${i % 2 === 0 ? '#00f5ff' : '#8b5cf6'} 0%, transparent 70%)`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "easeInOut"
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
            Choose Your AR Experience
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto mb-8">
            From free AR cards to enterprise solutions, find the perfect plan to revolutionize your networking.
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4">
            <span className="text-text-secondary">Monthly</span>
            <div className="relative">
              <input type="checkbox" className="sr-only" />
              <div className="w-12 h-6 bg-border rounded-full cursor-pointer">
                <div className="w-5 h-5 bg-primary-cyan rounded-full shadow-md transform transition-transform translate-x-0.5 translate-y-0.5"></div>
              </div>
            </div>
            <span className="text-text-secondary">
              Yearly <span className="text-accent-green text-sm">(Save 20%)</span>
            </span>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {plans.map((plan, index) => (
            <PricingCard
              key={plan.name}
              plan={plan}
              isPopular={plan.name === 'Pro AR'}
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl font-bold text-text-primary mb-8">
            Frequently Asked Questions
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "Can I upgrade or downgrade anytime?",
                answer: "Yes! You can change your plan at any time. Upgrades take effect immediately, and downgrades apply at your next billing cycle."
              },
              {
                question: "Do you offer refunds?",
                answer: "We offer a 30-day money-back guarantee for all paid plans. If you're not satisfied, we'll refund your payment."
              },
              {
                question: "Is there a setup fee?",
                answer: "No setup fees ever. You only pay the monthly or yearly subscription fee for your chosen plan."
              },
              {
                question: "Can I use my own domain?",
                answer: "Yes! Premium and Enterprise plans include custom domain support for your AR business cards."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-left p-6 bg-surface/50 backdrop-blur-sm border border-border rounded-lg"
              >
                <h4 className="text-lg font-semibold text-text-primary mb-2">
                  {faq.question}
                </h4>
                <p className="text-text-secondary">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Enterprise CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center p-8 bg-gradient-to-r from-primary-cyan/10 to-primary-purple/10 border border-primary-cyan/30 rounded-xl"
        >
          <h3 className="text-2xl font-bold text-text-primary mb-4">
            Need a Custom Solution?
          </h3>
          <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
            We work with enterprise clients to create custom AR experiences, integrations, and white-label solutions.
          </p>
          <Button variant="primary" size="lg" href="/contact">
            Contact Enterprise Sales
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

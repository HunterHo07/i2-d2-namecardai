'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../ui/Button';

export default function SignUpEngine() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    company: '',
    title: '',
    industry: '',
    plan: 'pro',
    agreeToTerms: false,
    subscribeNewsletter: true
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const plans = [
    {
      id: 'free',
      name: 'Free',
      price: '$0',
      period: 'forever',
      features: [
        '1 AR Business Card',
        'Basic Analytics',
        'QR Code Sharing',
        'Mobile App Access',
        'Community Support'
      ],
      popular: false
    },
    {
      id: 'pro',
      name: 'Pro',
      price: '$9.99',
      period: 'per month',
      features: [
        'Unlimited AR Cards',
        'Advanced Analytics',
        'Custom Branding',
        'Team Collaboration',
        'Priority Support',
        'API Access'
      ],
      popular: true
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: 'Custom',
      period: 'contact us',
      features: [
        'Everything in Pro',
        'White-label Solution',
        'Enterprise SSO',
        'Advanced Security',
        'Dedicated Support',
        'Custom Integrations'
      ],
      popular: false
    }
  ];

  const industries = [
    'Technology', 'Healthcare', 'Finance', 'Education', 'Real Estate',
    'Marketing', 'Sales', 'Consulting', 'Manufacturing', 'Retail',
    'Legal', 'Non-profit', 'Government', 'Other'
  ];

  const validateStep = (stepNumber) => {
    const newErrors = {};

    if (stepNumber === 1) {
      if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
      if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
      if (!formData.email.trim()) {
        newErrors.email = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = 'Email is invalid';
      }
    }

    if (stepNumber === 2) {
      if (!formData.password) {
        newErrors.password = 'Password is required';
      } else if (formData.password.length < 8) {
        newErrors.password = 'Password must be at least 8 characters';
      }
      if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match';
      }
    }

    if (stepNumber === 4) {
      if (!formData.agreeToTerms) {
        newErrors.agreeToTerms = 'You must agree to the terms and conditions';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(step)) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    setStep(step - 1);
    setErrors({});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateStep(step)) return;

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  const updateFormData = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-surface to-background flex items-center justify-center px-4">
        <motion.div
          className="max-w-md w-full text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-surface/50 backdrop-blur-sm border border-border rounded-2xl p-8">
            <motion.div
              className="text-6xl mb-6"
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 10, -10, 0]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              🎉
            </motion.div>
            
            <h1 className="text-3xl font-bold text-text-primary mb-4">
              Welcome to NameCardAI!
            </h1>
            
            <p className="text-text-secondary mb-8">
              Your account has been created successfully. Check your email for verification instructions.
            </p>
            
            <div className="space-y-4">
              <Button size="lg" href="/demo" className="w-full">
                🚀 Try the Demo
              </Button>
              <Button variant="outline" size="lg" className="w-full">
                📧 Resend Email
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-surface to-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Start Your AR Journey
          </h1>
          <p className="text-xl text-text-secondary">
            Join 2.5M+ professionals revolutionizing networking
          </p>
        </motion.div>

        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex justify-between text-sm text-text-secondary mb-2">
            <span>Step {step} of 4</span>
            <span>{Math.round((step / 4) * 100)}% Complete</span>
          </div>
          <div className="w-full bg-border rounded-full h-2">
            <motion.div
              className="bg-gradient-to-r from-primary-cyan to-primary-purple h-2 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${(step / 4) * 100}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>

        {/* Form Container */}
        <div className="bg-surface/50 backdrop-blur-sm border border-border rounded-2xl p-8">
          <form onSubmit={handleSubmit}>
            <AnimatePresence mode="wait">
              {/* Step 1: Personal Information */}
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-2xl font-bold text-text-primary mb-6">Personal Information</h2>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-text-primary font-medium mb-2">First Name</label>
                      <input
                        type="text"
                        value={formData.firstName}
                        onChange={(e) => updateFormData('firstName', e.target.value)}
                        className={`w-full px-4 py-3 bg-background border rounded-lg text-text-primary focus:outline-none focus:ring-2 focus:ring-primary-cyan focus:border-transparent ${
                          errors.firstName ? 'border-red-400' : 'border-border'
                        }`}
                        placeholder="Enter your first name"
                      />
                      {errors.firstName && <p className="text-red-400 text-sm mt-1">{errors.firstName}</p>}
                    </div>
                    
                    <div>
                      <label className="block text-text-primary font-medium mb-2">Last Name</label>
                      <input
                        type="text"
                        value={formData.lastName}
                        onChange={(e) => updateFormData('lastName', e.target.value)}
                        className={`w-full px-4 py-3 bg-background border rounded-lg text-text-primary focus:outline-none focus:ring-2 focus:ring-primary-cyan focus:border-transparent ${
                          errors.lastName ? 'border-red-400' : 'border-border'
                        }`}
                        placeholder="Enter your last name"
                      />
                      {errors.lastName && <p className="text-red-400 text-sm mt-1">{errors.lastName}</p>}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label className="block text-text-primary font-medium mb-2">Email Address</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => updateFormData('email', e.target.value)}
                      className={`w-full px-4 py-3 bg-background border rounded-lg text-text-primary focus:outline-none focus:ring-2 focus:ring-primary-cyan focus:border-transparent ${
                        errors.email ? 'border-red-400' : 'border-border'
                      }`}
                      placeholder="Enter your email address"
                    />
                    {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
                  </div>
                </motion.div>
              )}

              {/* Step 2: Security */}
              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-2xl font-bold text-text-primary mb-6">Create Password</h2>
                  
                  <div className="mb-6">
                    <label className="block text-text-primary font-medium mb-2">Password</label>
                    <input
                      type="password"
                      value={formData.password}
                      onChange={(e) => updateFormData('password', e.target.value)}
                      className={`w-full px-4 py-3 bg-background border rounded-lg text-text-primary focus:outline-none focus:ring-2 focus:ring-primary-cyan focus:border-transparent ${
                        errors.password ? 'border-red-400' : 'border-border'
                      }`}
                      placeholder="Create a strong password"
                    />
                    {errors.password && <p className="text-red-400 text-sm mt-1">{errors.password}</p>}
                  </div>
                  
                  <div className="mb-6">
                    <label className="block text-text-primary font-medium mb-2">Confirm Password</label>
                    <input
                      type="password"
                      value={formData.confirmPassword}
                      onChange={(e) => updateFormData('confirmPassword', e.target.value)}
                      className={`w-full px-4 py-3 bg-background border rounded-lg text-text-primary focus:outline-none focus:ring-2 focus:ring-primary-cyan focus:border-transparent ${
                        errors.confirmPassword ? 'border-red-400' : 'border-border'
                      }`}
                      placeholder="Confirm your password"
                    />
                    {errors.confirmPassword && <p className="text-red-400 text-sm mt-1">{errors.confirmPassword}</p>}
                  </div>
                </motion.div>
              )}

              {/* Step 3: Professional Info */}
              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-2xl font-bold text-text-primary mb-6">Professional Information</h2>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-text-primary font-medium mb-2">Company</label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => updateFormData('company', e.target.value)}
                        className="w-full px-4 py-3 bg-background border border-border rounded-lg text-text-primary focus:outline-none focus:ring-2 focus:ring-primary-cyan focus:border-transparent"
                        placeholder="Your company name"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-text-primary font-medium mb-2">Job Title</label>
                      <input
                        type="text"
                        value={formData.title}
                        onChange={(e) => updateFormData('title', e.target.value)}
                        className="w-full px-4 py-3 bg-background border border-border rounded-lg text-text-primary focus:outline-none focus:ring-2 focus:ring-primary-cyan focus:border-transparent"
                        placeholder="Your job title"
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label className="block text-text-primary font-medium mb-2">Industry</label>
                    <select
                      value={formData.industry}
                      onChange={(e) => updateFormData('industry', e.target.value)}
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg text-text-primary focus:outline-none focus:ring-2 focus:ring-primary-cyan focus:border-transparent"
                    >
                      <option value="">Select your industry</option>
                      {industries.map(industry => (
                        <option key={industry} value={industry}>{industry}</option>
                      ))}
                    </select>
                  </div>

                  {/* Plan Selection */}
                  <div className="mb-6">
                    <label className="block text-text-primary font-medium mb-4">Choose Your Plan</label>
                    <div className="grid md:grid-cols-3 gap-4">
                      {plans.map(plan => (
                        <motion.div
                          key={plan.id}
                          className={`relative border rounded-xl p-4 cursor-pointer transition-all ${
                            formData.plan === plan.id
                              ? 'border-primary-cyan bg-primary-cyan/10'
                              : 'border-border hover:border-primary-cyan/50'
                          }`}
                          onClick={() => updateFormData('plan', plan.id)}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          {plan.popular && (
                            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-primary-cyan text-black px-3 py-1 rounded-full text-xs font-bold">
                              Most Popular
                            </div>
                          )}
                          
                          <div className="text-center">
                            <h3 className="font-bold text-text-primary mb-2">{plan.name}</h3>
                            <div className="text-2xl font-bold text-primary-cyan mb-1">{plan.price}</div>
                            <div className="text-xs text-text-secondary mb-4">{plan.period}</div>
                            
                            <ul className="text-xs text-text-secondary space-y-1">
                              {plan.features.slice(0, 3).map(feature => (
                                <li key={feature}>✓ {feature}</li>
                              ))}
                              {plan.features.length > 3 && (
                                <li>+ {plan.features.length - 3} more</li>
                              )}
                            </ul>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 4: Terms & Confirmation */}
              {step === 4 && (
                <motion.div
                  key="step4"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-2xl font-bold text-text-primary mb-6">Almost Done!</h2>
                  
                  <div className="bg-background border border-border rounded-lg p-6 mb-6">
                    <h3 className="font-bold text-text-primary mb-4">Account Summary</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-text-secondary">Name:</span>
                        <span className="text-text-primary">{formData.firstName} {formData.lastName}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-text-secondary">Email:</span>
                        <span className="text-text-primary">{formData.email}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-text-secondary">Plan:</span>
                        <span className="text-primary-cyan font-semibold">
                          {plans.find(p => p.id === formData.plan)?.name}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-6">
                    <label className="flex items-start space-x-3">
                      <input
                        type="checkbox"
                        checked={formData.agreeToTerms}
                        onChange={(e) => updateFormData('agreeToTerms', e.target.checked)}
                        className="mt-1 w-4 h-4 text-primary-cyan bg-background border-border rounded focus:ring-primary-cyan focus:ring-2"
                      />
                      <span className="text-sm text-text-primary">
                        I agree to the <a href="#" className="text-primary-cyan hover:underline">Terms of Service</a> and <a href="#" className="text-primary-cyan hover:underline">Privacy Policy</a>
                      </span>
                    </label>
                    {errors.agreeToTerms && <p className="text-red-400 text-sm">{errors.agreeToTerms}</p>}
                    
                    <label className="flex items-start space-x-3">
                      <input
                        type="checkbox"
                        checked={formData.subscribeNewsletter}
                        onChange={(e) => updateFormData('subscribeNewsletter', e.target.checked)}
                        className="mt-1 w-4 h-4 text-primary-cyan bg-background border-border rounded focus:ring-primary-cyan focus:ring-2"
                      />
                      <span className="text-sm text-text-primary">
                        Subscribe to our newsletter for product updates and networking tips
                      </span>
                    </label>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex justify-between pt-6">
              <Button
                type="button"
                variant="outline"
                onClick={prevStep}
                disabled={step === 1}
                className={step === 1 ? 'invisible' : ''}
              >
                ← Previous
              </Button>
              
              {step < 4 ? (
                <Button type="button" onClick={nextStep}>
                  Next →
                </Button>
              ) : (
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <span className="flex items-center space-x-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Creating Account...</span>
                    </span>
                  ) : (
                    '🚀 Create Account'
                  )}
                </Button>
              )}
            </div>
          </form>
        </div>

        {/* Trust Indicators */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <div className="flex items-center justify-center space-x-8 text-sm text-text-secondary">
            <span className="flex items-center space-x-2">
              <span>🔒</span>
              <span>SSL Encrypted</span>
            </span>
            <span className="flex items-center space-x-2">
              <span>✅</span>
              <span>GDPR Compliant</span>
            </span>
            <span className="flex items-center space-x-2">
              <span>🛡️</span>
              <span>SOC 2 Certified</span>
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

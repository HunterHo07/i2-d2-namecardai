'use client';

import { motion } from 'framer-motion';
import { forwardRef } from 'react';

const Button = forwardRef(({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  loading = false,
  onClick,
  href,
  target,
  rel,
  ...props
}, ref) => {
  const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-gradient-to-r from-primary-cyan to-primary-purple text-black hover:shadow-lg hover:shadow-primary-cyan/25 focus:ring-primary-cyan',
    secondary: 'bg-surface border border-border text-text-primary hover:bg-border hover:border-primary-cyan focus:ring-primary-cyan',
    outline: 'border border-primary-cyan text-primary-cyan hover:bg-primary-cyan hover:text-black focus:ring-primary-cyan',
    ghost: 'text-text-primary hover:bg-surface hover:text-primary-cyan focus:ring-primary-cyan',
    danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
    success: 'bg-accent-green text-black hover:bg-green-600 focus:ring-accent-green',
  };
  
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
    xl: 'px-8 py-4 text-xl',
  };
  
  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;
  
  const content = (
    <>
      {loading && (
        <svg className="animate-spin -ml-1 mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
        </svg>
      )}
      {children}
    </>
  );
  
  const motionProps = {
    whileHover: disabled ? {} : { scale: 1.02 },
    whileTap: disabled ? {} : { scale: 0.98 },
    transition: { duration: 0.1 }
  };
  
  if (href) {
    return (
      <motion.a
        ref={ref}
        href={href}
        target={target}
        rel={rel}
        className={classes}
        {...motionProps}
        {...props}
      >
        {content}
      </motion.a>
    );
  }
  
  return (
    <motion.button
      ref={ref}
      className={classes}
      disabled={disabled || loading}
      onClick={onClick}
      {...motionProps}
      {...props}
    >
      {content}
    </motion.button>
  );
});

Button.displayName = 'Button';

export default Button;

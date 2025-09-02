"use client"

import React from 'react';
import { Github, Twitter, Linkedin, Mail, Sparkles } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 bg-black/30 backdrop-blur-xl border-t border-white/10 py-12 px-4">
      <div className="max-w-7xl mx-auto text-center">
        {/* Logo */}
        <div className="flex items-center justify-center space-x-3 mb-6 group cursor-pointer">
          <div className="relative w-10 h-10 bg-gradient-to-br from-white/30 via-gray-200/20 to-white/10 rounded-xl flex items-center justify-center transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-2xl shadow-white/10 backdrop-blur-sm border border-white/20">
            <Sparkles className="w-5 h-5 text-white/90 transition-transform duration-500 group-hover:rotate-12" />
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent tracking-tight">
            3G3L
          </span>
        </div>

        {/* Navigation Links (optional, can be expanded) */}
        <nav className="mb-8">
          <ul className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-white/70 text-lg font-medium">
            <li><a href="/#features" className="hover:text-white transition-colors duration-300">Features</a></li>
            <li><a href="/#security" className="hover:text-white transition-colors duration-300">Security</a></li>
            <li><a href="/products" className="hover:text-white transition-colors duration-300">Download</a></li>
            <li><a href="/" className="hover:text-white transition-colors duration-300">Privacy Policy</a></li>
            <li><a href="/" className="hover:text-white transition-colors duration-300">Terms of Service</a></li>
          </ul>
        </nav>

        {/* Copyright */}
        <p className="text-white/50 text-sm tracking-wide">
          &copy; {currentYear} 3G3L. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

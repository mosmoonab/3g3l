"use client"

import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingCart, Shield, Zap, Users, Settings, LogIn, UserPlus, LifeBuoy, LayoutDashboard, Sparkles } from 'lucide-react'; // Added LayoutDashboard

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const navItems = [
    { name: 'Features', href: '/#features', icon: Zap },
    { name: 'Products', href: '/products', icon: ShoppingCart },
    { name: 'Security', href: '/#security', icon: Shield },
    { name: 'Support', href: '/support', icon: LifeBuoy },
];

  return (
    <>
      {/* Background overlay for mobile menu */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-md z-40 lg:hidden animate-in fade-in duration-300"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out ${
          isScrolled 
            ? 'backdrop-blur-2xl bg-black/40 border-b border-white/20 shadow-2xl shadow-black/50' 
            : 'backdrop-blur-xl bg-black/20 border-b border-white/10'
        }`}
        style={{
          background: isScrolled 
            ? `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.06), transparent 40%), rgba(0,0,0,0.4)`
            : `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.03), transparent 40%), rgba(0,0,0,0.2)`
        }}
      >
        {/* Animated border gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-1000" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a href="/" className="flex-shrink-0 group cursor-pointer"> {/* Added href="/" */}
              <div className="flex items-center space-x-3">
                <div className="relative">
                  {/* Animated glow effect */}
                  <div className="absolute -inset-2 bg-gradient-to-r from-white/20 via-gray-300/20 to-white/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse" />
                  
                  <div className="relative w-10 h-10 bg-gradient-to-br from-white/30 via-gray-200/20 to-white/10 rounded-xl flex items-center justify-center transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-2xl shadow-white/10 backdrop-blur-sm border border-white/20">
                    <Sparkles className="w-5 h-5 text-white/90 transition-transform duration-500 group-hover:rotate-12" />
                  </div>
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent tracking-tight">
                  3G3L
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:block">
              <div className="ml-10 flex items-baseline space-x-1">
                {navItems.map((item, index) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="group relative px-4 py-2.5 rounded-xl text-white/70 hover:text-white transition-all duration-500 ease-out"
                    style={{
                      animationDelay: `${index * 100}ms`
                    }}
                  >
                    {/* Glass morphism background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-white/10 to-white/5 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-sm scale-95 group-hover:scale-100" />
                    
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-700 -translate-x-full group-hover:translate-x-full" />
                    
                    {/* Border glow */}
                    <div className="absolute inset-0 rounded-xl border border-white/0 group-hover:border-white/20 transition-all duration-500" />
                    
                    <div className="relative flex items-center space-x-2 z-10">
                      <item.icon className="w-4 h-4 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12" />
                      <span className="font-medium tracking-wide">{item.name}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Dashboard Button (replaces Buy Now) */}
            <div className="hidden lg:block">
              <button className="group relative px-6 py-3 bg-gradient-to-r from-green-500/20 via-green-400/30 to-green-500/20 text-white font-semibold rounded-xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-green-500/25 hover:-translate-y-1 backdrop-blur-sm border border-green-400/30"
                onClick={() => window.location.href = '/login'} // Redirect to login page
              >
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/30 via-green-400/40 to-green-500/30 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-400/40 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 skew-x-12" />
                <div className="absolute inset-0 bg-white/10 rounded-xl animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="relative flex items-center space-x-2 z-10">
                  <LayoutDashboard className="w-4 h-4 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-12" />
                  <span className="tracking-wide">Dashboard</span>
                </span>
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="group p-2.5 rounded-xl text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300 backdrop-blur-sm border border-white/10 hover:border-white/20"
              >
                <div className="relative">
                  {isMobileMenuOpen ? (
                    <X className="w-6 h-6 transition-transform duration-300 rotate-90" />
                  ) : (
                    <Menu className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
                  )}
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-500 ease-out ${
          isMobileMenuOpen 
            ? 'max-h-96 opacity-100' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="px-4 pt-2 pb-6 bg-black/60 backdrop-blur-2xl border-t border-white/10">
            <div className="space-y-2">
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="group flex items-center space-x-3 px-4 py-3 text-white/80 hover:text-white rounded-xl hover:bg-white/10 transition-all duration-300 backdrop-blur-sm border border-transparent hover:border-white/20"
                  style={{
                    animationDelay: `${index * 50}ms`
                  }}
                >
                  <item.icon className="w-5 h-5 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12" />
                  <span className="font-medium tracking-wide">{item.name}</span>
                </a>
              ))}
              
              <div className="pt-4 mt-4 border-t border-white/10">
                <button className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-gradient-to-r from-green-500/20 via-green-400/30 to-green-500/20 text-white font-semibold rounded-xl transition-all duration-500 hover:from-green-500/30 hover:via-green-400/40 hover:to-green-500/30 backdrop-blur-sm border border-green-400/30 hover:shadow-lg hover:shadow-green-500/20"
                  onClick={() => { setIsMobileMenuOpen(false); window.location.href = '/login'; }} // Redirect to login page
                >
                  <LayoutDashboard className="w-4 h-4 transition-transform duration-300 hover:scale-110" />
                  <span className="tracking-wide">Dashboard</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;

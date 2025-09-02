"use client"

import React from 'react';
import { LayoutDashboard, Play, Shield, Zap, Users, Code, Gamepad2, Target } from 'lucide-react'; // Changed ShoppingCart to LayoutDashboard
import TextType from '@/components/ui/text-type';

const Hero = () => {
const cheatTexts = [
    "GODMODE",
    "AIMBOT", 
    "WALLHACK",
    "SPEEDHACK",
    "NOCLIP",
    "INFINITE AMMO",
    "DAMAGER",
    "EXECUTER"
];

return (
  <section className="relative min-h-screen flex items-center justify-center px-4 pt-16">
    {/* Background gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40 z-0" />
    
    <div className="relative z-10 text-center max-w-6xl mx-auto">
      {/* Main heading with text-type effect */}
      <div className="mb-8 space-y-4">
        <div className="inline-block">
          <h1 className="text-7xl md:text-9xl font-black tracking-tighter mb-4">
            <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
              3G3L
            </span>
          </h1>
        </div>
        
        {/* Animated cheat-style text */}
        <div className="h-20 flex items-center justify-center">
          <TextType
            text={cheatTexts}
            className="text-4xl md:text-6xl font-bold text-green-400 font-mono tracking-wider"
            typingSpeed={100}
            cursorCharacter={true}
            cursorClassName="text-green-400 animate-pulse"
          />
        </div>
      </div>

      {/* Subtitle */}
      <p className="text-xl md:text-2xl text-white/70 mb-12 max-w-3xl mx-auto leading-relaxed">
        The ultimate gaming enhancement suite. Professional-grade tools for competitive advantage.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
        <button className="group relative px-8 py-4 bg-gradient-to-r from-green-500/20 via-green-400/30 to-green-500/20 text-white font-bold rounded-xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-green-500/25 hover:-translate-y-1 backdrop-blur-sm border border-green-400/30 min-w-[200px]"
          onClick={() => window.location.href = '/login'} // Redirect to login page
        >
          {/* Animated background */}
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/30 via-green-400/40 to-green-500/30 opacity-0 group-hover:opacity-100 transition-all duration-500" />
          
          {/* Matrix-style effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-400/10 to-transparent translate-y-[-100%] group-hover:translate-y-[100%] transition-transform duration-1000" />
          
          <span className="relative flex items-center justify-center space-x-3 z-10">
            <LayoutDashboard className="w-5 h-5 transition-transform duration-500 group-hover:scale-110" />
            <span className="tracking-wide">DASHBOARD</span>
          </span>
        </button>

        <button className="group relative px-8 py-4 bg-white/5 text-white font-semibold rounded-xl overflow-hidden transition-all duration-500 hover:bg-white/10 backdrop-blur-sm border border-white/20 hover:border-white/40 min-w-[200px]">
          <span className="relative flex items-center justify-center space-x-3 z-10">
            <Play className="w-5 h-5 transition-transform duration-500 group-hover:scale-110" />
            <span className="tracking-wide">WATCH DEMO</span>
          </span>
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
        {[
          { number: "25+", label: "Active Users" },
          { number: "99%", label: "Undetected" },
          { number: "24/7", label: "Support" },
          { number: "3", label: "Launchers Supported" }
        ].map((stat, index) => (
          <div 
            key={index}
            className="group text-center p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500 hover:bg-white/10"
            style={{ animationDelay: `${index * 200}ms` }}
          >
            <div className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors duration-300">
              {stat.number}
            </div>
            <div className="text-sm text-white/60 uppercase tracking-wider font-medium">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </div>

    {/* Floating elements */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-green-400/30 rounded-full animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${i * 0.5}s`,
            animationDuration: `${2 + Math.random() * 2}s`
          }}
        />
      ))}
    </div>
  </section>
);
};

export default Hero;

"use client"

import React from 'react';
import { LayoutDashboard, Lock, Fingerprint, Server, Code, Zap, Globe, KeyRound } from 'lucide-react'; // Changed ShoppingCart to LayoutDashboard
import { cn } from '@/lib/utils';

const Security = () => {
  const securityFeatures = [
    {
      title: "Advanced Anti-Detection",
      description: "Our proprietary algorithms ensure your presence remains undetected by leading anti-cheat systems.",
      icon: <LayoutDashboard className="w-10 h-10 text-green-400" />,
      delay: 0.1
    },
    {
      title: "Encrypted Connections",
      description: "All data transmissions are secured with military-grade encryption, protecting your privacy.",
      icon: <Lock className="w-10 h-10 text-green-400" />,
      delay: 0.2
    },
    {
      title: "HWID Protection",
      description: "Hardware ID authentication prevents unauthorized access and account sharing, enhancing security.",
      icon: <Fingerprint className="w-10 h-10 text-green-400" />,
      delay: 0.3
    },
    {
      title: "Secure Servers",
      description: "Our infrastructure is hosted on hardened, secure servers with DDoS protection and constant monitoring.",
      icon: <Server className="w-10 h-10 text-green-400" />,
      delay: 0.4
    },
    {
      title: "Code Obfuscation",
      description: "The client's code is heavily obfuscated and polymorphic, making reverse engineering nearly impossible.",
      icon: <Code className="w-10 h-10 text-green-400" />,
      delay: 0.5
    },
    {
      title: "Real-time Updates",
      description: "Automatic updates ensure you always have the latest security patches and anti-cheat bypasses.",
      icon: <Zap className="w-10 h-10 text-green-400" />,
      delay: 0.6
    },
    {
      title: "Global Network",
      description: "Leveraging a global network of proxies and VPNs to mask your connection and location.",
      icon: <Globe className="w-10 h-10 text-green-400" />,
      delay: 0.7
    },
    {
      title: "Dynamic Keying",
      description: "Encryption keys are dynamically generated and rotated, preventing static analysis and brute-force attacks.",
      icon: <KeyRound className="w-10 h-10 text-green-400" />,
      delay: 0.8
    },
  ];

  return (
    <section id="security" className="relative py-24 px-4 overflow-hidden">
      {/* Background grid and gradient */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-6">
            <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
              STAY SAFE.
            </span>
            <br />
            <span className="bg-gradient-to-r from-green-400 via-emerald-300 to-green-500 bg-clip-text text-transparent">
              STAY UNDETECTED.
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Our commitment to your security is paramount. We employ cutting-edge technologies to ensure your peace of mind.
          </p>
        </div>

        {/* Security Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {securityFeatures.map((feature, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-black/20 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-500 hover:shadow-2xl hover:shadow-black/50 hover:-translate-y-1 flex flex-col items-center text-center"
              style={{ animationDelay: `${feature.delay}s` }}
            >
              {/* Animated border glow */}
              <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-green-400/30 transition-all duration-500 animate-pulse-slow" />
              
              {/* Icon */}
              <div className="mb-6 p-4 rounded-full bg-white/10 border border-white/20 group-hover:bg-white/20 transition-all duration-300">
                {feature.icon}
              </div>
              
              {/* Title */}
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors duration-300">
                {feature.title}
              </h3>
              
              {/* Description */}
              <p className="text-white/70 text-base leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Security;

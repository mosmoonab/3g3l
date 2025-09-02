"use client"

import React from 'react';
import { Shield, LayoutDashboard, Users, Code, Gamepad2, Target, Eye, Settings, Lock, Cpu, Zap } from 'lucide-react'; // Changed ShoppingCart to LayoutDashboard
import MagicBento, { BentoGrid, BentoCard } from '@/components/ui/MagicBento';
import { cn } from '@/lib/utils';

const Features = () => {
  const features = [
    {
      title: "Advanced Aimbot",
      description: "Precision targeting with customizable smoothness and FOV settings. Undetectable by anti-cheat systems. Aimbot types: Silent Aimbot, Vector Aimbot, Trigger Bot, Magic Bullet",
      icon: <Target className="w-8 h-8" />,
      bgGradient: "from-white/10 via-white/5 to-transparent",
      borderColor: "white/10",
      size: "large" as const // This will map to lg:col-span-2 lg:row-span-2
    },
    {
      title: "ESP Wallhack",
      description: "See through walls with player, item, and weapon ESP. Fully Customizable.",
      icon: <Eye className="w-6 h-6" />,
      bgGradient: "from-white/5 via-transparent to-white/5",
      borderColor: "white/10",
      size: "medium" as const
    },
    {
      title: "Speed Hacks",
      description: "Movement enhancement with fly, speed, and noclip modes.",
      icon: <Zap className="w-6 h-6" />,
      bgGradient: "from-white/5 via-transparent to-white/5",
      borderColor: "white/10",
      size: "medium" as const
    },
    {
      title: "Undetected",
      description: "Advanced anti-detection technology keeps you safe from bans. Regular updates ensure compatibility. Unique inject method for each user.",
      icon: <Shield className="w-8 h-8" />,
      bgGradient: "from-white/10 via-white/5 to-transparent",
      borderColor: "white/10",
      size: "large" as const
    },
    {
      title: "Multi-Launcher Support",
      description: "Works with 3 biggest launchers: RAGE MP, Alt-V, FiveM",
      icon: <Gamepad2 className="w-6 h-6" />,
      bgGradient: "from-white/5 via-transparent to-white/5",
      borderColor: "white/10",
      size: "medium" as const
    },
    {
      title: "Custom Scripts Executor",
      description: "JS scripting support for advanced users.",
      icon: <Code className="w-6 h-6" />,
      bgGradient: "from-white/5 via-transparent to-white/5",
      borderColor: "white/10",
      size: "medium" as const
    },
    {
      title: "Premium Support",
      description: "24/7 customer support with dedicated Discord server and priority assistance.",
      icon: <Users className="w-6 h-6" />,
      bgGradient: "from-white/5 via-transparent to-white/5",
      borderColor: "white/10",
      size: "medium" as const
    },
    {
      title: "Advanced Config",
      description: "Extensive customization options with profile saving and CLOUD sync capabilities.",
      icon: <Settings className="w-8 h-8" />,
      bgGradient: "from-white/10 via-white/5 to-transparent",
      borderColor: "white/10",
      size: "large" as const
    },
    {
      title: "Secure Login",
      description: "HWID authentication and encrypted connections protect your account.",
      icon: <Lock className="w-6 h-6" />,
      bgGradient: "from-white/5 via-transparent to-white/5",
      borderColor: "white/10",
      size: "medium" as const
    },
    {
      title: "Performance",
      description: "Optimized for minimal FPS impact while maintaining maximum functionality.",
      icon: <Cpu className="w-6 h-6" />,
      bgGradient: "from-white/5 via-transparent to-white/5",
      borderColor: "white/10",
      size: "medium" as const
    }
  ];

  return (
    <section id="features" className="relative py-24 px-4">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-6">
            <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
              FEATURES
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Professional-grade gaming enhancements designed for competitive advantage
          </p>
        </div>

        {/* Features grid using MagicBento */}
        <MagicBento enableSpotlight={true} glowColor="34, 197, 94"> {/* Main MagicBento wrapper */}
          <BentoGrid className="max-w-6xl mx-auto"> {/* The actual grid container */}
            {features.map((feature, index) => (
              <BentoCard
                key={index}
                className={cn(
                  "bento-card flex flex-col justify-between relative aspect-[4/3] min-h-[200px] w-full max-w-full p-5 rounded-[20px] border border-solid font-light overflow-hidden transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(0,0,0,0.15)] card--border-glow",
                  `bg-gradient-to-br ${feature.bgGradient}`,
                  `border-${feature.borderColor}`,
                  // Specific grid spans for certain cards to match the original MagicBento layout
                  // Adjust these indices based on your desired layout
                  (index === 0 || index === 3 || index === 7) && "lg:col-span-2 lg:row-span-2", // Large cards
                  // Example for a specific medium card if needed:
                  // index === 1 && "lg:col-span-1 lg:row-span-1",
                )}
                enableTilt={true}
                enableMagnetism={true}
                clickEffect={true}
                particleCount={10} // Adjust particle count per card
                glowColor="34, 197, 94" // Green glow for cards
              >
                <div className="relative z-10 flex flex-col h-full">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 rounded-xl bg-white/10 border border-white/20 group-hover:border-white/30 transition-colors duration-300">
                      {React.cloneElement(feature.icon, { className: cn(feature.icon.props.className, "text-white group-hover:text-green-400 transition-colors duration-300") })}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-white/70 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  {/* Footer indicator */}
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <div className="flex items-center space-x-2 text-white/50">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                      <span className="text-xs font-medium">ACTIVE</span>
                    </div>
                  </div>
                </div>
              </BentoCard>
            ))}
          </BentoGrid>
        </MagicBento>

      </div>
    </section>
  );
};

export default Features;

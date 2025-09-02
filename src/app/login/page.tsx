"use client"

import React from 'react';
import { LogIn, Mail, Lock } from 'lucide-react';
import Footer from '@/components/footer';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Particles from '@/components/background/Particles';
import Navigation from '@/components/navbar';

export default function LoginPage() {
  return (
    <div className="relative w-full min-h-screen bg-black overflow-x-hidden flex flex-col">
      <Particles
        particleColors={['#ffffff', '#e5e5e5', '#d4d4d4']}
        particleCount={60}
        particleSpread={8}
        speed={0.03}
        particleBaseSize={30}
        moveParticlesOnHover={false}
        alphaParticles={true}
        disableRotation={true}
        className="opacity-15"
      />
      <Navigation />
      <main className="relative z-10 flex-grow flex items-center justify-center py-24 px-4">
        <div className="max-w-md w-full bg-black/20 backdrop-blur-xl rounded-2xl border border-white/10 p-8 shadow-lg text-center">
          <div className="mb-8">
            <LogIn className="w-16 h-16 text-green-400 mx-auto mb-4" />
            <h1 className="text-4xl font-bold text-white mb-2">Login</h1>
            <p className="text-white/70">Access your CraftClient account</p>
          </div>

          <form className="space-y-6">
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-white/60" />
              <Input
                type="email"
                placeholder="Email"
                className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 text-white placeholder:text-white/50 rounded-lg focus:border-green-400 focus:ring-1 focus:ring-green-400 transition-colors duration-300"
              />
            </div>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-white/60" />
              <Input
                type="password"
                placeholder="Password"
                className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 text-white placeholder:text-white/50 rounded-lg focus:border-green-400 focus:ring-1 focus:ring-green-400 transition-colors duration-300"
              />
            </div>
            <Button className="w-full py-3 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 transition-colors duration-300">
              Login
            </Button>
          </form>

          <p className="mt-6 text-white/70 text-sm">
            Don't have an account?{' '}
            <a href="/register" className="text-green-400 hover:underline">
              Register here
            </a>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

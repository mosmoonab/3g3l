"use client"

import React from 'react';
import { ShoppingCart, Code, Settings, Shield, Zap, Gamepad2, Star, Users, Check } from 'lucide-react';
import Particles from '@/components/background/Particles';
import Navigation from '@/components/navbar';
import Footer from '@/components/footer';

const products = [
  {
    name: "7 Day Subscription",
    price: "350₽",
    period: "/week",
    link: "https://yoomoney.ru/transfer/quickpay?requestId=353539383536363030375f35613832386238666434336336343732326562663565616561333437656231383662323461336665", // Example link
    buttonText: "Buy 7 Day"
  },
  {
    name: "1 Month Subscription",
    price: "800₽",
    period: "/month",
    link: "https://yoomoney.ru/transfer/quickpay?requestId=353539383536363339325f31353433383239376439636462366637613561383938343831626338393237306266656633323164", // Example link
    buttonText: "Buy 1 Month"
  },
  {
    name: "3 Month Subscription",
    price: "2100₽",
    period: "/3 months",
    link: "https://yoomoney.ru/transfer/quickpay?requestId=353539383631303733345f39323239396664333639626234623366363039313435396632316561323132626437343337633665", // Example link
    buttonText: "Buy 3 Months"
  }
];

export default function ProductsPage() {
  return (
    <div className="relative w-full min-h-screen bg-black overflow-x-hidden">
      <Particles
        particleColors={['#ffffff', '#e5e5e5', '#d4d4d4']}
        particleCount={100}
        particleSpread={12}
        speed={0.05}
        particleBaseSize={50}
        moveParticlesOnHover={true}
        alphaParticles={true}
        disableRotation={false}
        className="opacity-30"
      />
      <Navigation />
      <main className="relative z-10 py-24 px-4">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6">
            <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
              OUR PRODUCTS
            </span>
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Explore the range of powerful tools and services offered by CraftClient.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <div
              key={index}
              className="relative p-8 rounded-2xl backdrop-blur-xl border transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 bg-black/20 border-white/10 shadow-black/20 hover:border-white/20"
            >
              <div className="text-center mb-6">
                <h2 className="text-3xl font-bold text-white mb-2">{product.name}</h2>
                <p className="text-5xl font-extrabold text-white">
                  {product.price}
                  <span className="text-xl font-medium text-white/70">{product.period}</span>
                </p>
              </div>
              <button
                onClick={() => window.location.href = product.link} // ADD THIS onClick HANDLER
                className="w-full py-3 rounded-xl font-semibold text-lg bg-green-500 text-white hover:bg-green-600 shadow-lg shadow-green-500/30 transition-all duration-300"
              >
                {product.buttonText}
              </button>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

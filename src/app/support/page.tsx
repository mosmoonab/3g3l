"use client"

import React from 'react';
import { HelpCircle, Mail, MessageSquare, Phone, ChevronDown } from 'lucide-react';
import Footer from '@/components/footer';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"; // Assuming shadcn/ui accordion is available
import Particles from '@/components/background/Particles';
import Navigation from '@/components/navbar';

const faqData = [
  {
    question: "How do I install 3G3L?",
    answer: "After purchase, you will receive a license key and by that you can register on the website where you can download a loader."
  },
  {
    question: "Is 3G3L safe to use?",
    answer: "Yes, 3G3L employs advanced anti-detection technologies and is regularly updated to ensure maximum safety and minimize the risk of bans. We prioritize your account security."
  },
  {
    question: "What games does 3G3L support?",
    answer: "3G3L supports 3 popular launchers, such as RAGE MP, Alt-V, FiveM"
  },
  {
    question: "Can I customize the features?",
    answer: "3G3L offers extensive customization options for all features, including aimbot settings, ESP visuals, and even a Lua scripting engine for advanced users."
  },
  {
    question: "What kind of support do you offer?",
    answer: "We offer 24/7 premium support via Discord, email, and a dedicated ticketing system. Pro and Ultimate users receive priority support."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept various secure payment methods, including major credit cards, and selected cryptocurrencies. All transactions are encrypted for your security."
  }
];

export default function SupportPage() {
  return (
    <div className="relative w-full min-h-screen bg-black overflow-x-hidden">
      <Particles
        particleColors={['#ffffff', '#e5e5e5', '#d4d4d4']}
        particleCount={80}
        particleSpread={10}
        speed={0.04}
        particleBaseSize={40}
        moveParticlesOnHover={false}
        alphaParticles={true}
        disableRotation={true}
        className="opacity-20"
      />
      <Navigation />
      <main className="relative z-10 py-24 px-4">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6">
            <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
              SUPPORT & FAQ
            </span>
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Find answers to your questions or get in touch with our support team.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-black/20 backdrop-blur-xl rounded-2xl border border-white/10 p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            {faqData.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-white/10">
                <AccordionTrigger className="text-lg font-medium text-white hover:text-green-400 transition-colors duration-300">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-white/70 text-base leading-relaxed pt-2 pb-4">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

      </main>
      <Footer />
    </div>
  );
}

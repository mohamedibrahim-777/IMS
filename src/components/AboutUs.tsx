/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Layers, ArrowLeft, MousePointer2, Zap, Code2, Sparkles, Target } from 'lucide-react';
import Lanyard from './Lanyard';

const VALUES = [
  { icon: Zap, title: 'Performance First', text: 'Hand-tuned bundles and a relentless focus on sub-second load times. Speed is a feature.' },
  { icon: Code2, title: 'Clean Engineering', text: 'Type-safe, component-driven React. No bloated templates, no drag-and-drop debt.' },
  { icon: Sparkles, title: 'Considered Detail', text: 'Micro-interactions, motion choreography, and pristine typography in every pixel.' },
  { icon: Target, title: 'Built to Convert', text: 'Beautiful interfaces engineered around your goals — turning visitors into advocates.' },
];

export function AboutUs() {
  return (
    <div className="min-h-screen bg-[#F8F9FA] text-slate-900 font-sans antialiased selection:bg-black selection:text-white">
      {/* Top bar */}
      <header className="sticky top-0 z-40 bg-[#F8F9FA]/90 backdrop-blur-md border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 bg-black rounded-sm flex items-center justify-center text-white">
              <Layers className="w-4.5 h-4.5" />
            </div>
            <div className="leading-none">
              <span className="font-mono text-[8px] tracking-widest uppercase block text-slate-400 font-semibold">KRAFT // WEB</span>
              <span className="font-display font-medium text-sm tracking-tight block">About Us</span>
            </div>
          </div>
          <a href="/" className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-slate-500 hover:text-black transition-colors">
            <ArrowLeft className="w-3 h-3" /> Back to site
          </a>
        </div>
      </header>

      {/* Intro + interactive lanyard */}
      <section className="max-w-7xl mx-auto px-6 pt-16 md:pt-20 pb-12 grid lg:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-mono text-[10px] text-slate-400 uppercase tracking-widest block mb-3">[ WHO WE ARE ]</span>
          <h1 className="font-display font-light text-4xl md:text-6xl tracking-tight text-slate-950 leading-[1.08]">
            A studio obsessed with <span className="font-serif italic font-normal text-slate-500">craft</span>.
          </h1>
          <p className="mt-6 text-slate-600 text-base md:text-lg leading-relaxed font-light max-w-lg">
            KRAFT // WEB is an engineering-forward design studio building high-performance,
            minimalist web experiences. We pair breathtaking visual design with lightning-fast,
            type-safe React — crafted by hand, never templated.
          </p>
          <p className="mt-4 text-slate-500 text-sm leading-relaxed font-light max-w-lg">
            From bespoke landing pages to interactive SaaS platforms, every project is built to
            load in under a second, scale across every screen, and convert.
          </p>
        </motion.div>

        {/* Draggable 3D lanyard card */}
        <div
          className="relative w-full rounded-2xl overflow-hidden bg-[radial-gradient(ellipse_at_top,#eef2ff_0%,transparent_70%)]"
          style={{ height: 600, minHeight: 600 }}
        >
          <Lanyard position={[0, 0, 18]} gravity={[0, -40, 0]} />
          <span className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-widest text-slate-400 pointer-events-none">
            <MousePointer2 className="w-3 h-3" /> Drag the card
          </span>
        </div>
      </section>

      {/* Values grid */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="border-t border-slate-200 pt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {VALUES.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="flex flex-col gap-3"
            >
              <div className="w-9 h-9 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-700">
                <v.icon className="w-4 h-4" />
              </div>
              <h3 className="font-mono text-[10px] uppercase tracking-widest text-slate-900 font-semibold">{v.title}</h3>
              <p className="text-xs text-slate-500 leading-relaxed font-light">{v.text}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

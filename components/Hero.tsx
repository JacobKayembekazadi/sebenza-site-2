
import React, { useEffect, useRef, useState } from 'react';
import Icon from './Icons';

const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [typedText, setTypedText] = useState("FOR LAW FIRMS");

  const industries = [
    "FOR LAW FIRMS",
    "FOR CONSTRUCTION",
    "FOR HEALTHCARE",
    "FOR RETAIL",
    "FOR HOSPITALITY",
    "FOR CONSULTING"
  ];

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i = (i + 1) % industries.length;
      setTypedText(industries[i]);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: { x: number; y: number; vx: number; vy: number; size: number }[] = [];
    let animationFrameId: number;

    const init = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particles = [];
      const count = window.innerWidth < 768 ? 25 : 50;
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          size: Math.random() * 1.5 + 0.5
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const isDark = document.documentElement.classList.contains('dark');
      ctx.strokeStyle = isDark ? 'rgba(59, 130, 246, 0.12)' : 'rgba(30, 58, 95, 0.06)';
      ctx.fillStyle = isDark ? 'rgba(147, 197, 253, 0.25)' : 'rgba(30, 58, 95, 0.3)';

      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 120) {
            ctx.lineWidth = (1 - dist / 120) * 0.4;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate();
    window.addEventListener('resize', init);

    return () => {
      window.removeEventListener('resize', init);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="relative min-h-[85vh] md:min-h-screen flex items-center pt-28 md:pt-40 lg:pt-48 pb-16 md:pb-24 overflow-hidden bg-white dark:bg-gray-900">
      <canvas ref={canvasRef} className="absolute inset-0 opacity-50 z-0" />

      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-[#1e3a5f]/10 dark:bg-blue-500/10 blur-[120px] rounded-full -mr-20 -mt-20 -z-10" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/3 bg-blue-100 dark:bg-blue-900/20 blur-[100px] rounded-full -ml-20 -mb-20 -z-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 w-full text-center">
        {/* Rotating Industry Badge */}
        <div className="inline-block px-4 py-2 rounded-full bg-white dark:bg-gray-800 border border-[#1e3a5f]/10 dark:border-blue-400/20 shadow-sm text-sm font-bold text-[#1e3a5f] dark:text-blue-400 mb-6 md:mb-8 animate-fade-in">
          {typedText} <span className="animate-pulse text-[#1e3a5f]/50 dark:text-blue-400/50">|</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-gray-900 dark:text-white tracking-tight leading-[1.1] mb-6 md:mb-8 max-w-5xl mx-auto">
          The Operating System for Business at{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1e3a5f] to-blue-500 dark:from-blue-400 dark:to-blue-300 italic">
            Scale
          </span>
        </h1>

        {/* Subheadline */}
        <p className="max-w-2xl mx-auto text-base md:text-xl text-gray-600 dark:text-gray-300 mb-8 md:mb-10 font-light leading-relaxed">
          CRM, Inventory, HR, Accounting, and Project Management in one platform.
          Streamline operations with integrated tools built for 21+ industries.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 md:mb-16">
          <a
            href="#signup"
            className="w-full sm:w-auto px-8 md:px-10 py-4 md:py-5 bg-[#1e3a5f] hover:bg-[#2e5a8f] text-white rounded-full font-semibold transition-all duration-300 shadow-xl shadow-[#1e3a5f]/30 active:scale-95 flex items-center justify-center gap-2"
          >
            Start Your Free Trial
            <Icon name="ArrowRight" size={16} />
          </a>
          <button className="w-full sm:w-auto px-8 md:px-10 py-4 md:py-5 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-600 hover:border-[#1e3a5f] dark:hover:border-blue-400 rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2">
            <Icon name="PlayCircle" className="text-[#1e3a5f] dark:text-blue-400" size={20} />
            Watch Demo
          </button>
        </div>

        {/* Trust Signals */}
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 font-mono text-[10px] md:text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-12 md:mb-16">
          <div className="flex items-center gap-1.5">
            <Icon name="CheckCircle" size={14} className="text-emerald-500" /> 14-day free trial
          </div>
          <div className="flex items-center gap-1.5">
            <Icon name="CheckCircle" size={14} className="text-emerald-500" /> No credit card required
          </div>
          <div className="flex items-center gap-1.5">
            <Icon name="CheckCircle" size={14} className="text-emerald-500" /> 24/7 support
          </div>
        </div>

        {/* Social Proof Stats */}
        <div className="pt-8 md:pt-12 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <div className="text-center">
              <span className="block text-2xl md:text-3xl font-black text-gray-900 dark:text-white">14,000+</span>
              <span className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">Businesses</span>
            </div>
            <div className="text-center">
              <span className="block text-2xl md:text-3xl font-black text-gray-900 dark:text-white">21+</span>
              <span className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">Industries</span>
            </div>
            <div className="text-center">
              <span className="block text-2xl md:text-3xl font-black text-gray-900 dark:text-white">99.9%</span>
              <span className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">Uptime</span>
            </div>
            <div className="text-center hidden sm:block">
              <span className="block text-2xl md:text-3xl font-black text-gray-900 dark:text-white">4.9/5</span>
              <span className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">Rating</span>
            </div>
          </div>
        </div>
      </div>

      {/* CSS for fade-in animation */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
      `}} />
    </section>
  );
};

export default Hero;

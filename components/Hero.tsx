
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
      const count = window.innerWidth < 768 ? 30 : 50;
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          size: Math.random() * 2 + 1
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const isDark = document.documentElement.classList.contains('dark');
      ctx.strokeStyle = isDark ? 'rgba(59, 130, 246, 0.15)' : 'rgba(30, 58, 95, 0.08)';
      ctx.fillStyle = isDark ? 'rgba(147, 197, 253, 0.4)' : 'rgba(30, 58, 95, 0.4)';

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
          if (dist < 100) {
            ctx.lineWidth = (1 - dist / 100) * 0.6;
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

  const scrollToFeatures = () => {
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-gradient-to-b from-white via-white to-gray-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      {/* Particle Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      {/* Background Gradients - More visible on mobile */}
      <div className="absolute top-0 right-0 w-2/3 md:w-1/3 h-1/2 bg-[#1e3a5f]/15 dark:bg-blue-500/20 blur-[100px] rounded-full -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-2/3 md:w-1/4 h-1/2 bg-blue-200/50 dark:bg-blue-900/30 blur-[80px] rounded-full -ml-20 -mb-20" />

      {/* Decorative circles - Mobile accent */}
      <div className="absolute top-1/4 right-4 w-20 h-20 md:hidden border border-[#1e3a5f]/10 dark:border-blue-400/10 rounded-full" />
      <div className="absolute bottom-1/3 left-4 w-12 h-12 md:hidden bg-[#1e3a5f]/5 dark:bg-blue-400/5 rounded-full" />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-6 w-full pt-24 md:pt-32">
        {/* Rotating Industry Badge */}
        <div className="text-center mb-6 md:mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#1e3a5f] dark:bg-blue-600 text-white text-xs md:text-sm font-bold shadow-lg shadow-[#1e3a5f]/30 animate-fade-in">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            {typedText}
          </div>
        </div>

        {/* Main Headline */}
        <h1 className="text-center text-[2.5rem] leading-[1.1] sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-gray-900 dark:text-white tracking-tight mb-6 md:mb-8 max-w-5xl mx-auto">
          <span className="block">The Operating System</span>
          <span className="block mt-1 md:mt-2">
            for Business at{' '}
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1e3a5f] via-blue-600 to-blue-500 dark:from-blue-400 dark:via-blue-300 dark:to-cyan-300">
                Scale
              </span>
              <svg className="absolute -bottom-1 left-0 w-full h-2 text-[#1e3a5f]/20 dark:text-blue-400/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0,8 Q50,0 100,8" stroke="currentColor" strokeWidth="3" fill="none" />
              </svg>
            </span>
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-center max-w-xl md:max-w-2xl mx-auto text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-300 mb-8 md:mb-10 leading-relaxed px-2">
          CRM, Inventory, HR, Accounting & Project Management — all in one platform built for <span className="font-semibold text-[#1e3a5f] dark:text-blue-400">21+ industries</span>.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 mb-10 md:mb-12 px-4 sm:px-0">
          <a
            href="#signup"
            className="w-full sm:w-auto px-8 py-4 md:py-5 bg-[#1e3a5f] hover:bg-[#2e5a8f] text-white rounded-full font-bold text-base md:text-lg transition-all duration-300 shadow-xl shadow-[#1e3a5f]/30 active:scale-[0.98] flex items-center justify-center gap-2"
          >
            Start Your Free Trial
            <Icon name="ArrowRight" size={18} />
          </a>
          <button className="w-full sm:w-auto px-8 py-4 md:py-5 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-900 dark:text-white border-2 border-gray-200 dark:border-gray-600 hover:border-[#1e3a5f] dark:hover:border-blue-400 rounded-full font-bold text-base md:text-lg transition-all duration-300 flex items-center justify-center gap-2">
            <Icon name="PlayCircle" className="text-[#1e3a5f] dark:text-blue-400" size={22} />
            Watch Demo
          </button>
        </div>

        {/* Trust Signals - Simplified on mobile */}
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-xs md:text-sm text-gray-500 dark:text-gray-400 mb-8 md:mb-12">
          <div className="flex items-center gap-1.5">
            <Icon name="CheckCircle" size={16} className="text-emerald-500" />
            <span>14-day free trial</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Icon name="CheckCircle" size={16} className="text-emerald-500" />
            <span>No credit card</span>
          </div>
          <div className="hidden sm:flex items-center gap-1.5">
            <Icon name="CheckCircle" size={16} className="text-emerald-500" />
            <span>24/7 support</span>
          </div>
        </div>

        {/* Stats Grid - More impactful on mobile */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-3xl mx-auto px-4">
          {[
            { value: '14,000+', label: 'Businesses', icon: 'Building2' },
            { value: '21+', label: 'Industries', icon: 'Layers' },
            { value: '99.9%', label: 'Uptime', icon: 'Zap' },
            { value: '4.9/5', label: 'Rating', icon: 'Star' },
          ].map((stat, idx) => (
            <div
              key={idx}
              className={`text-center p-4 md:p-6 rounded-2xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-gray-100 dark:border-gray-700 ${idx >= 2 ? 'hidden sm:block' : ''} sm:block`}
            >
              <div className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-2 md:mb-3 rounded-xl bg-[#1e3a5f]/10 dark:bg-blue-900/30 flex items-center justify-center">
                <Icon name={stat.icon} size={20} className="text-[#1e3a5f] dark:text-blue-400" />
              </div>
              <span className="block text-2xl md:text-3xl font-black text-gray-900 dark:text-white">
                {stat.value}
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 z-10">
        <button
          onClick={scrollToFeatures}
          className="flex flex-col items-center gap-2 text-gray-400 dark:text-gray-500 hover:text-[#1e3a5f] dark:hover:text-blue-400 transition-colors group"
        >
          <span className="text-xs font-medium uppercase tracking-widest hidden md:block">Scroll to explore</span>
          <div className="w-6 h-10 rounded-full border-2 border-current flex items-start justify-center p-1.5">
            <div className="w-1.5 h-3 bg-current rounded-full animate-bounce" />
          </div>
        </button>
      </div>

      {/* Styles */}
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

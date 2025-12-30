
import React, { useEffect, useRef } from 'react';
import Icon from './Icons';

const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

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
      const count = window.innerWidth < 768 ? 30 : 60; // Less particles on mobile
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          size: Math.random() * 2 + 0.5
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const isDark = document.documentElement.classList.contains('dark');
      ctx.strokeStyle = isDark ? 'rgba(59, 130, 246, 0.15)' : 'rgba(30, 58, 95, 0.08)';
      ctx.fillStyle = isDark ? 'rgba(147, 197, 253, 0.3)' : 'rgba(30, 58, 95, 0.4)';

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
          if (dist < 150) {
            ctx.lineWidth = (1 - dist / 150) * 0.5;
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
    <section className="relative min-h-[80vh] md:min-h-[90vh] flex items-center pt-24 md:pt-32 lg:pt-44 overflow-hidden bg-white dark:bg-gray-900">
      <canvas ref={canvasRef} className="absolute inset-0 opacity-60 z-0" />

      {/* Gradient Orbs - Smaller on mobile */}
      <div className="absolute top-1/4 -left-20 md:-left-32 w-48 md:w-96 h-48 md:h-96 bg-[#1e3a5f]/20 rounded-full blur-[80px] md:blur-[120px]"></div>
      <div className="absolute bottom-1/4 -right-20 md:-right-32 w-48 md:w-96 h-48 md:h-96 bg-blue-500/10 rounded-full blur-[80px] md:blur-[120px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 w-full flex flex-col gap-6 md:gap-12 py-8 md:py-20">
        <div className="flex flex-col gap-4 md:gap-6">
          <span className="font-mono text-[10px] md:text-xs uppercase text-[#1e3a5f] dark:text-blue-400 tracking-widest font-bold bg-[#1e3a5f]/5 dark:bg-blue-900/30 px-3 md:px-4 py-1.5 md:py-2 rounded-full w-fit flex items-center gap-2">
            <span className="w-1.5 md:w-2 h-1.5 md:h-2 bg-[#1e3a5f] dark:bg-blue-400 rounded-full animate-pulse"></span>
            Enterprise Operating System
          </span>

          {/* Mobile-optimized headline */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-medium tracking-tight max-w-5xl leading-[1.1] md:leading-[0.9] text-gray-900 dark:text-white">
            Manage Your <span className="text-[#1e3a5f] dark:text-blue-400">Entire</span> Business{' '}
            <span className="text-gray-400 italic dark:text-gray-500">in One Platform.</span>
          </h1>
        </div>

        <div className="flex flex-col gap-6 md:gap-12">
          <div className="max-w-xl">
            <p className="text-base md:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 font-light leading-relaxed mb-3 md:mb-6">
              Sebenza Systems brings together CRM, Inventory, HR, Accounting, and Task Management into one comprehensive solution.
            </p>
            <p className="text-sm md:text-lg text-gray-500 dark:text-gray-400 font-light hidden md:block">
              Save time, reduce costs, and make data-driven decisions with confidence.
            </p>
          </div>

          {/* Mobile-optimized CTAs */}
          <div className="flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="#signup" className="bg-[#1e3a5f] hover:bg-[#2e5a8f] text-white px-6 md:px-10 py-4 md:py-5 rounded-full font-mono text-xs md:text-sm uppercase transition-all shadow-xl shadow-[#1e3a5f]/30 active:scale-95 flex items-center justify-center gap-2 w-full sm:w-auto">
                Start Free Trial
                <Icon name="ArrowRight" size={14} />
              </a>
              <button className="flex items-center justify-center gap-2 px-6 py-4 rounded-full border border-gray-200 dark:border-gray-600 hover:border-[#1e3a5f] dark:hover:border-blue-400 transition-all bg-white dark:bg-gray-800 w-full sm:w-auto">
                <Icon name="PlayCircle" className="text-[#1e3a5f] dark:text-blue-400" size={18} />
                <span className="font-mono text-xs uppercase tracking-wider text-gray-700 dark:text-gray-200">Watch Demo</span>
              </button>
            </div>

            {/* Trust Signals - Horizontal scroll on mobile */}
            <div className="flex flex-wrap md:flex-nowrap items-center gap-3 md:gap-6 font-mono text-[9px] md:text-[10px] text-gray-500 dark:text-gray-400 uppercase tracking-tighter">
              <div className="flex items-center gap-1">
                <Icon name="CheckCircle" size={12} className="text-emerald-500" /> Free trial
              </div>
              <div className="flex items-center gap-1">
                <Icon name="CheckCircle" size={12} className="text-emerald-500" /> No credit card
              </div>
              <div className="flex items-center gap-1">
                <Icon name="CheckCircle" size={12} className="text-emerald-500" /> 24/7 Support
              </div>
            </div>
          </div>
        </div>

        {/* Trusted By - Mobile optimized */}
        <div className="pt-8 md:pt-16 border-t border-gray-200 dark:border-gray-700 hidden md:block">
          <p className="font-mono text-[10px] text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-4 md:mb-6">Trusted by 14,000+ businesses</p>
          <div className="flex flex-wrap items-center gap-6 md:gap-12 opacity-40">
            {['Acme Corp', 'Globex', 'Umbrella', 'Wayne Enterprises', 'Stark Industries'].map((company, idx) => (
              <div key={idx} className="font-mono text-sm md:text-lg font-bold text-gray-500 dark:text-gray-400">{company}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

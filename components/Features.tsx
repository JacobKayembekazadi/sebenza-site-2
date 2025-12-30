
import React, { useRef, useState, useEffect } from 'react';
import { FEATURES } from '../constants';
import Icon from './Icons';

const Features: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  // Bento grid layout for desktop (first 2 are larger)
  const bentoClasses = (idx: number) => {
    if (idx === 0) return 'md:col-span-2 md:row-span-1';
    if (idx === 1) return 'md:col-span-1 md:row-span-2';
    return '';
  };

  return (
    <section id="features" className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-32 border-t border-gray-200 dark:border-gray-700">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-8 md:mb-20">
        <span className="font-mono text-[10px] md:text-xs uppercase text-[#1e3a5f] dark:text-blue-400 tracking-widest font-bold bg-[#1e3a5f]/5 dark:bg-blue-900/30 px-3 md:px-4 py-1.5 md:py-2 rounded-full inline-flex items-center gap-2 mb-4 md:mb-6">
          <Icon name="Layers" size={12} /> Complete Suite
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-4 md:mb-6 text-gray-900 dark:text-white px-2">
          Everything You Need to <span className="text-[#1e3a5f] dark:text-blue-400">Run</span> Your Business
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-sm md:text-lg font-light px-4">
          A complete suite of integrated tools designed to streamline operations and drive growth.
        </p>
      </div>

      {/* Mobile: Horizontal Scroll Carousel */}
      <div className="md:hidden relative">
        {/* Scroll Buttons */}
        <button
          onClick={() => scroll('left')}
          className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full shadow-lg flex items-center justify-center transition-opacity ${canScrollLeft ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        >
          <Icon name="ChevronLeft" size={18} className="text-gray-600 dark:text-gray-300" />
        </button>
        <button
          onClick={() => scroll('right')}
          className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full shadow-lg flex items-center justify-center transition-opacity ${canScrollRight ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        >
          <Icon name="ChevronRight" size={18} className="text-gray-600 dark:text-gray-300" />
        </button>

        {/* Scrollable Container */}
        <div
          ref={scrollRef}
          onScroll={checkScroll}
          className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4 px-1"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {FEATURES.map((feature, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-[280px] snap-start p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl flex flex-col gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-[#1e3a5f]/10 dark:bg-blue-900/30 flex items-center justify-center text-[#1e3a5f] dark:text-blue-400">
                <Icon name={feature.icon} size={24} />
              </div>
              <div>
                <h5 className="text-base font-medium mb-2 text-gray-900 dark:text-white">{feature.title}</h5>
                <p className="text-gray-600 dark:text-gray-300 text-sm font-light leading-relaxed line-clamp-3">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Scroll Indicator Dots */}
        <div className="flex justify-center gap-1.5 mt-4">
          {Array.from({ length: Math.ceil(FEATURES.length / 2) }).map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-gray-300 dark:bg-gray-600"></div>
          ))}
        </div>
      </div>

      {/* Desktop: Bento Grid */}
      <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-4 gap-5">
        {FEATURES.map((feature, idx) => (
          <div
            key={idx}
            className={`group p-6 lg:p-8 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl hover:border-[#1e3a5f] dark:hover:border-blue-400 transition-all duration-500 hover:-translate-y-1 flex flex-col gap-4 ${bentoClasses(idx)}`}
          >
            <div className="w-12 h-12 rounded-xl bg-[#1e3a5f]/10 dark:bg-blue-900/30 flex items-center justify-center group-hover:bg-[#1e3a5f] dark:group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 text-[#1e3a5f] dark:text-blue-400">
              <Icon name={feature.icon} size={24} />
            </div>
            <div className="flex-1">
              <h5 className="text-lg font-medium mb-2 text-gray-900 dark:text-white">{feature.title}</h5>
              <p className="text-gray-600 dark:text-gray-300 text-sm font-light leading-relaxed">
                {feature.description}
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-gray-500 dark:text-gray-400 group-hover:text-[#1e3a5f] dark:group-hover:text-blue-400 transition-colors cursor-pointer pt-2">
              Learn More <Icon name="ArrowRight" size={12} />
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA - Hidden on mobile */}
      <div className="mt-8 md:mt-16 text-center hidden md:block">
        <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 border border-gray-200 dark:border-gray-600 hover:border-[#1e3a5f] dark:hover:border-blue-400 hover:text-[#1e3a5f] dark:hover:text-blue-400 rounded-full font-mono text-xs uppercase tracking-widest transition-all text-gray-600 dark:text-gray-300">
          <Icon name="MessageCircle" size={14} />
          Need a custom feature? Contact us
        </a>
      </div>
    </section>
  );
};

export default Features;

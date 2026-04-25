
import React, { useRef, useState, useEffect } from 'react';
// Features now come from translated-data
import Icon from './Icons';
import { useCountry } from '../services/country-context';
import { getFeatures } from '../services/translated-data';
import { t } from '../services/translations';

const Features: React.FC = () => {
  const { country } = useCountry();
  const lang = country.language;
  const localFeatures = getFeatures(lang);

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

  // Split features into highlighted (first 3) and regular
  const highlightedFeatures = FEATURES.slice(0, 3);
  const regularFeatures = FEATURES.slice(3);

  return (
    <section id="features" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="inline-flex items-center gap-2 bg-[#1e3a5f]/10 dark:bg-blue-900/30 text-[#1e3a5f] dark:text-blue-400 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
            <Icon name="Layers" size={14} /> Complete Suite
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-6 text-gray-900 dark:text-white">
            Everything You Need to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1e3a5f] to-blue-500 dark:from-blue-400 dark:to-blue-300">
              Run Your Business
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            A complete suite of integrated tools designed to streamline operations and drive growth.
          </p>
        </div>

        {/* Mobile: Horizontal Scroll */}
        <div className="md:hidden relative">
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

          <div
            ref={scrollRef}
            onScroll={checkScroll}
            className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4 px-1"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {localFeatures.map((feature, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-[260px] snap-start p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl"
              >
                <div className="w-12 h-12 rounded-xl bg-[#1e3a5f]/10 dark:bg-blue-900/30 flex items-center justify-center text-[#1e3a5f] dark:text-blue-400 mb-4">
                  <Icon name={feature.icon} size={24} />
                </div>
                <h5 className="text-base font-bold mb-2 text-gray-900 dark:text-white">{feature.title}</h5>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed line-clamp-3">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop: Highlighted Features (Top 3) */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 mb-8">
          {highlightedFeatures.map((feature, idx) => (
            <div
              key={idx}
              className={`group relative p-8 rounded-3xl transition-all duration-500 hover:-translate-y-1 overflow-hidden ${
                idx === 0
                  ? 'bg-[#1e3a5f] text-white'
                  : 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-[#1e3a5f] dark:hover:border-blue-400'
              }`}
            >
              {/* Background icon */}
              <div className={`absolute -right-6 -bottom-6 opacity-[0.07] group-hover:scale-110 transition-transform duration-700 ${
                idx === 0 ? 'text-white' : 'text-[#1e3a5f] dark:text-blue-400'
              }`}>
                <Icon name={feature.icon} size={160} />
              </div>

              <div className="relative z-10">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${
                  idx === 0
                    ? 'bg-white/20'
                    : 'bg-[#1e3a5f]/10 dark:bg-blue-900/30 text-[#1e3a5f] dark:text-blue-400 group-hover:bg-[#1e3a5f] group-hover:text-white dark:group-hover:bg-blue-600 transition-all duration-300'
                }`}>
                  <Icon name={feature.icon} size={28} className={idx === 0 ? 'text-white' : ''} />
                </div>
                <h5 className={`text-xl font-bold mb-3 ${idx === 0 ? 'text-white' : 'text-gray-900 dark:text-white'}`}>
                  {feature.title}
                </h5>
                <p className={`text-sm leading-relaxed mb-6 ${idx === 0 ? 'text-blue-100/80' : 'text-gray-600 dark:text-gray-300'}`}>
                  {feature.description}
                </p>
                <a
                  href="#"
                  className={`inline-flex items-center gap-2 text-sm font-semibold group/link ${
                    idx === 0
                      ? 'text-white/80 hover:text-white'
                      : 'text-[#1e3a5f] dark:text-blue-400 hover:gap-3'
                  } transition-all`}
                >
                  Learn more
                  <Icon name="ArrowRight" size={14} className="group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: Regular Features Grid */}
        <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-3 gap-4">
          {regularFeatures.map((feature, idx) => (
            <div
              key={idx}
              className="group p-6 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl hover:border-[#1e3a5f]/30 dark:hover:border-blue-400/30 hover:shadow-lg transition-all duration-300 flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-xl bg-[#1e3a5f]/10 dark:bg-blue-900/30 flex items-center justify-center text-[#1e3a5f] dark:text-blue-400 flex-shrink-0 group-hover:bg-[#1e3a5f] group-hover:text-white dark:group-hover:bg-blue-600 transition-all duration-300">
                <Icon name={feature.icon} size={20} />
              </div>
              <div>
                <h5 className="font-bold text-gray-900 dark:text-white mb-1">{feature.title}</h5>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href="https://app.sebenzas.com/#signup"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#1e3a5f] hover:bg-[#2e5a8f] text-white rounded-full font-semibold transition-all shadow-lg shadow-[#1e3a5f]/20"
          >
            Get Started
            <Icon name="ArrowRight" size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features;

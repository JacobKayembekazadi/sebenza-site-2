
import React, { useState } from 'react';
import { Theme } from './types';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import IndustrySwitcher from './components/IndustrySwitcher';
import IntegrationHub from './components/IntegrationHub';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import BusinessAssistant from './components/BusinessAssistant';
import Icon from './components/Icons';
import { MOCK_METRICS } from './constants';

const App: React.FC = () => {
  const [theme, setTheme] = useState<Theme>(Theme.LIGHT);

  const toggleTheme = () => {
    const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    if (newTheme === Theme.DARK) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <div className="min-h-screen transition-colors duration-500 bg-white dark:bg-gray-900 text-gray-900 dark:text-white overflow-x-hidden">
      <Header theme={theme} toggleTheme={toggleTheme} />

      <main>
        <Hero />

        {/* Impact Metrics Section - Mobile optimized bento grid */}
        <section className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-32 relative z-10 -mt-8 md:-mt-20">
          {/* Mobile: Horizontal scroll cards */}
          <div className="md:hidden">
            <div
              className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 -mx-4 px-4"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {MOCK_METRICS.map((metric, idx) => (
                <div
                  key={idx}
                  className={`flex-shrink-0 w-[260px] snap-center p-6 rounded-2xl overflow-hidden relative ${idx === 0
                      ? 'bg-[#1e3a5f] text-white'
                      : 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700'
                    }`}
                >
                  <span className={`text-4xl font-mono font-bold tracking-tighter ${idx === 0 ? 'text-blue-300' : 'text-[#1e3a5f] dark:text-blue-400'}`}>
                    {metric.value}
                  </span>
                  <h4 className={`text-base mt-3 font-medium ${idx === 0 ? 'text-white' : 'text-gray-900 dark:text-white'}`}>
                    {metric.label}
                  </h4>
                  <p className={`text-xs mt-2 font-light ${idx === 0 ? 'text-blue-100/70' : 'text-gray-600 dark:text-gray-300'}`}>
                    Real-world impact for our partners.
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop: Bento grid */}
          <div className="hidden md:grid md:grid-cols-3 gap-8">
            {MOCK_METRICS.map((metric, idx) => (
              <div
                key={idx}
                className={`group p-10 rounded-[2.5rem] border overflow-hidden relative transition-all duration-700 hover:-translate-y-2 ${idx === 0
                  ? 'bg-[#1e3a5f] text-white border-[#1e3a5f]'
                  : idx === 1
                    ? 'bg-white dark:bg-gray-800 border-2 border-[#1e3a5f] dark:border-blue-400 shadow-xl shadow-[#1e3a5f]/10'
                    : 'bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700'
                  }`}
              >
                <div className="relative z-10">
                  <span className={`text-6xl md:text-7xl font-mono font-bold tracking-tighter ${idx === 0 ? 'text-blue-300' : 'text-[#1e3a5f] dark:text-blue-400'}`}>
                    {metric.value}
                  </span>
                  <h4 className={`text-xl mt-6 font-medium italic ${idx === 0 ? 'text-white' : 'text-gray-900 dark:text-white'}`}>
                    {metric.label}
                  </h4>
                  <p className={`text-sm mt-4 font-light leading-relaxed ${idx === 0 ? 'text-blue-100/70' : 'text-gray-600 dark:text-gray-300'}`}>
                    Real-world operational impact delivered to our partners.
                  </p>
                  <div className={`mt-6 flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest ${idx === 0 ? 'text-blue-200/60' : 'text-gray-500 dark:text-gray-400'}`}>
                    <Icon name="RefreshCcw" size={10} /> {metric.change}
                  </div>
                </div>
                <div className={`absolute -right-8 -bottom-8 opacity-[0.05] group-hover:rotate-12 transition-transform duration-1000 ${idx === 0 ? 'text-white' : 'text-[#1e3a5f] dark:text-blue-400'}`}>
                  <Icon name={metric.icon} size={160} />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Mission Statement - Mobile optimized */}
        <section className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-32 md:grid md:grid-cols-2 md:gap-20 border-t border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-medium leading-tight md:leading-[0.95] tracking-tight text-gray-900 dark:text-white mb-6 md:mb-0">
            Built to scale modern{' '}
            <span className="text-[#1e3a5f] dark:text-blue-400">organizations</span> with confidence.
          </h2>
          <div className="space-y-6 md:space-y-8">
            <p className="text-base md:text-xl text-gray-600 dark:text-gray-300 font-light leading-relaxed">
              We build enterprise systems to unify your disconnected departments. Sebenza System provides integrated tools designed for streamlined operations and exponential growth.
            </p>

            {/* Stats - Horizontal scroll on mobile */}
            <div className="flex gap-6 md:gap-10 overflow-x-auto scrollbar-hide pb-2 -mx-1 px-1 md:flex-wrap" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              {[
                { value: '200+', label: 'Integrations' },
                { value: '14.2k', label: 'Daily Users' },
                { value: '99.9%', label: 'Uptime' },
                { value: '21+', label: 'Industries' },
              ].map((stat, idx) => (
                <div key={idx} className="flex-shrink-0">
                  <span className="block text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-1">{stat.value}</span>
                  <span className="text-[10px] md:text-xs font-mono uppercase tracking-widest text-gray-500 dark:text-gray-400 whitespace-nowrap">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Features />

        <IndustrySwitcher />

        <Pricing />

        <IntegrationHub />

        <FAQ />

        {/* Final CTA - Mobile optimized */}
        <section className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-32 flex flex-col gap-6 md:gap-12 text-center items-center border-t border-gray-200 dark:border-gray-700">
          <div className="w-14 md:w-20 h-14 md:h-20 bg-[#1e3a5f]/10 dark:bg-blue-900/30 rounded-2xl md:rounded-3xl flex items-center justify-center text-[#1e3a5f] dark:text-blue-400 animate-bounce">
            <Icon name="Zap" size={28} className="md:w-10 md:h-10" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-medium tracking-tight text-gray-900 dark:text-white max-w-4xl leading-tight">
            Ready to <span className="italic text-gray-400 dark:text-gray-500">Transform</span> Your Business?
          </h2>
          <p className="text-base md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl font-light">
            Join thousands of businesses that trust Sebenza Systems. Start your free 14-day trial today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-2 w-full sm:w-auto">
            <a href="#signup" className="px-8 md:px-14 py-4 md:py-6 bg-[#1e3a5f] hover:bg-[#2e5a8f] text-white rounded-full font-mono uppercase text-xs md:text-sm shadow-xl shadow-[#1e3a5f]/30 active:scale-95 transition-all flex items-center justify-center gap-2 w-full sm:w-auto">
              Start Free Trial
              <Icon name="ArrowRight" size={14} />
            </a>
            <a href="#contact" className="px-8 md:px-14 py-4 md:py-6 border border-gray-200 dark:border-gray-600 hover:border-[#1e3a5f] dark:hover:border-blue-400 transition-all rounded-full font-mono uppercase text-xs md:text-sm text-gray-700 dark:text-gray-200 flex items-center justify-center gap-2 w-full sm:w-auto">
              <Icon name="Phone" size={14} />
              Contact Sales
            </a>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 font-mono text-[9px] md:text-[10px] text-gray-500 dark:text-gray-400 tracking-widest uppercase mt-4">
            <div className="flex items-center gap-1.5"><Icon name="CheckCircle" size={12} className="text-emerald-500" /> Free trial</div>
            <div className="flex items-center gap-1.5"><Icon name="CheckCircle" size={12} className="text-emerald-500" /> No credit card</div>
            <div className="flex items-center gap-1.5"><Icon name="CheckCircle" size={12} className="text-emerald-500" /> 24/7 Support</div>
          </div>
        </section>
      </main>

      <Footer />
      <BusinessAssistant />
    </div>
  );
};

export default App;


import React, { useState, useRef, useEffect } from 'react';
import { INDUSTRIES } from '../constants';
import Icon from './Icons';

const IndustrySwitcher: React.FC = () => {
  const [activeTab, setActiveTab] = useState(INDUSTRIES[0].id);
  const [searchQuery, setSearchQuery] = useState('');
  const [showAllIndustries, setShowAllIndustries] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const activeIndustry = INDUSTRIES.find(i => i.id === activeTab) || INDUSTRIES[0];

  const filteredIndustries = INDUSTRIES.filter(industry =>
    industry.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Auto-scroll to active tab on mobile
  useEffect(() => {
    if (scrollRef.current && window.innerWidth < 1024) {
      const activeButton = scrollRef.current.querySelector(`[data-id="${activeTab}"]`);
      if (activeButton) {
        activeButton.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
  }, [activeTab]);

  const visibleIndustries = showAllIndustries ? filteredIndustries : filteredIndustries.slice(0, 8);
  const remainingCount = filteredIndustries.length - 8;

  return (
    <section id="industries" className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
        <span className="inline-flex items-center gap-2 bg-[#1e3a5f]/10 dark:bg-blue-900/30 text-[#1e3a5f] dark:text-blue-400 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
          <Icon name="Building2" size={14} /> 21+ Industries
        </span>
        <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-6 text-gray-900 dark:text-white">
          Tailored for{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1e3a5f] to-blue-500 dark:from-blue-400 dark:to-blue-300">
            Your Industry
          </span>
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-lg">
          Specialized tools designed for your sector's unique challenges.
        </p>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden space-y-4">
        {/* Search Bar */}
        <div className="relative">
          <Icon name="Search" size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search industries..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-xl text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-[#1e3a5f] dark:focus:border-blue-400 transition-colors"
          />
        </div>

        {/* Horizontal Scroll Industry Pills */}
        <div
          ref={scrollRef}
          className="flex gap-2 overflow-x-auto scrollbar-hide pb-2 -mx-4 px-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {visibleIndustries.map(industry => (
            <button
              key={industry.id}
              data-id={industry.id}
              onClick={() => setActiveTab(industry.id)}
              className={`flex-shrink-0 px-4 py-2.5 rounded-full text-sm font-medium transition-all whitespace-nowrap ${activeTab === industry.id
                  ? 'bg-[#1e3a5f] text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700'
                }`}
            >
              {industry.title.replace(' Management', '').replace(' Services', '')}
            </button>
          ))}
          {!showAllIndustries && remainingCount > 0 && (
            <button
              onClick={() => setShowAllIndustries(true)}
              className="flex-shrink-0 px-4 py-2.5 rounded-full text-sm font-semibold bg-[#1e3a5f]/10 dark:bg-blue-900/30 text-[#1e3a5f] dark:text-blue-400 border border-[#1e3a5f]/20 dark:border-blue-400/30 whitespace-nowrap hover:bg-[#1e3a5f]/20 transition-colors"
            >
              +{remainingCount} more
            </button>
          )}
          {showAllIndustries && (
            <button
              onClick={() => setShowAllIndustries(false)}
              className="flex-shrink-0 px-4 py-2.5 rounded-full text-sm font-semibold bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 whitespace-nowrap hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            >
              Show less
            </button>
          )}
        </div>

        {/* Active Industry Card */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 bg-[#1e3a5f] dark:bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-[#1e3a5f]/20">
              <Icon name={activeIndustry.icon} className="text-white" size={28} />
            </div>
            <div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white">{activeIndustry.title}</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">{activeIndustry.features.length} features included</p>
            </div>
          </div>

          <p className="text-gray-600 dark:text-gray-300 mb-5">{activeIndustry.description}</p>

          {/* Feature Pills */}
          <div className="flex flex-wrap gap-2 mb-6">
            {activeIndustry.features.slice(0, 6).map((feature) => (
              <span
                key={feature}
                className="inline-flex items-center gap-1.5 text-xs text-gray-700 dark:text-gray-200 bg-gray-50 dark:bg-gray-700 px-3 py-1.5 rounded-full border border-gray-200 dark:border-gray-600"
              >
                <Icon name="Check" size={10} className="text-emerald-500" />
                {feature}
              </span>
            ))}
            {activeIndustry.features.length > 6 && (
              <span className="text-xs text-gray-500 dark:text-gray-400 px-3 py-1.5">
                +{activeIndustry.features.length - 6} more
              </span>
            )}
          </div>

          <a href="#signup" className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-[#1e3a5f] hover:bg-[#2e5a8f] text-white rounded-full font-semibold transition-all shadow-lg shadow-[#1e3a5f]/20">
            Start Your Free Trial
            <Icon name="ArrowRight" size={16} />
          </a>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:grid lg:grid-cols-[1fr_1.5fr] gap-8">
        {/* Industry List */}
        <div className="space-y-4">
          {/* Search */}
          <div className="relative">
            <Icon name="Search" size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search industries..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-xl text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-[#1e3a5f] dark:focus:border-blue-400 transition-colors"
            />
          </div>

          <div className="flex flex-col gap-2 max-h-[550px] overflow-y-auto pr-2 custom-scrollbar">
            {filteredIndustries.map(industry => (
              <button
                key={industry.id}
                onClick={() => setActiveTab(industry.id)}
                className={`p-4 rounded-xl text-left transition-all border flex items-center gap-3 ${activeTab === industry.id
                    ? 'border-[#1e3a5f] dark:border-blue-400 bg-[#1e3a5f] dark:bg-blue-600 text-white shadow-lg'
                    : 'border-gray-200 dark:border-gray-700 hover:border-[#1e3a5f]/50 dark:hover:border-blue-400/50 text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800'
                  }`}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${activeTab === industry.id ? 'bg-white/20' : 'bg-gray-100 dark:bg-gray-700'}`}>
                  <Icon name={industry.icon} size={20} className={activeTab === industry.id ? 'text-white' : 'text-gray-500 dark:text-gray-400'} />
                </div>
                <div className="flex-1 min-w-0">
                  <h5 className="font-semibold text-sm truncate">{industry.title}</h5>
                </div>
                {activeTab === industry.id && (
                  <Icon name="ChevronRight" size={18} className="text-white/70 flex-shrink-0" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Industry Details */}
        <div className="bg-white dark:bg-gray-800 p-10 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-xl relative overflow-hidden">
          {/* Background Icon */}
          <div className="absolute top-0 right-0 p-8 opacity-[0.03] dark:opacity-[0.05]">
            <Icon name={activeIndustry.icon} size={280} />
          </div>

          <div className="flex flex-col gap-8 h-full relative z-10">
            {/* Header */}
            <div>
              <div className="w-16 h-16 bg-[#1e3a5f] dark:bg-blue-600 rounded-2xl flex items-center justify-center mb-5 shadow-lg shadow-[#1e3a5f]/20">
                <Icon name={activeIndustry.icon} className="text-white" size={32} />
              </div>
              <h4 className="text-3xl font-black text-gray-900 dark:text-white mb-3">{activeIndustry.title}</h4>
              <p className="text-gray-600 dark:text-gray-300 text-lg">{activeIndustry.description}</p>
            </div>

            {/* Features Grid */}
            <div>
              <h5 className="text-sm font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-4">
                Included Features
              </h5>
              <div className="grid grid-cols-2 xl:grid-cols-3 gap-3">
                {activeIndustry.features.slice(0, 12).map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-200 p-3 rounded-xl bg-gray-50 dark:bg-gray-700/50 border border-gray-100 dark:border-gray-600"
                  >
                    <div className="w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="Check" className="text-white" size={10} strokeWidth={4} />
                    </div>
                    <span className="truncate font-medium">{feature}</span>
                  </div>
                ))}
              </div>
              {activeIndustry.features.length > 12 && (
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
                  + {activeIndustry.features.length - 12} more features included
                </p>
              )}
            </div>

            {/* Footer */}
            <div className="mt-auto pt-6 border-t border-gray-200 dark:border-gray-600 flex flex-wrap items-center gap-4">
              <a href="#signup" className="inline-flex items-center gap-2 px-8 py-4 bg-[#1e3a5f] hover:bg-[#2e5a8f] text-white rounded-full font-semibold transition-all shadow-lg shadow-[#1e3a5f]/20">
                Start Your Free Trial
                <Icon name="ArrowRight" size={16} />
              </a>
              <a href="#" className="text-sm font-semibold text-[#1e3a5f] dark:text-blue-400 hover:underline flex items-center gap-2">
                View Case Studies
                <Icon name="ExternalLink" size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustrySwitcher;

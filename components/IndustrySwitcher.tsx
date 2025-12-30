
import React, { useState, useRef, useEffect } from 'react';
import { INDUSTRIES } from '../constants';
import Icon from './Icons';

const IndustrySwitcher: React.FC = () => {
  const [activeTab, setActiveTab] = useState(INDUSTRIES[0].id);
  const [searchQuery, setSearchQuery] = useState('');
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

  return (
    <section id="industries" className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-32 border-t border-gray-200 dark:border-gray-700">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-8 md:mb-16">
        <span className="font-mono text-[10px] md:text-xs uppercase text-[#1e3a5f] dark:text-blue-400 tracking-widest font-bold bg-[#1e3a5f]/5 dark:bg-blue-900/30 px-3 md:px-4 py-1.5 md:py-2 rounded-full inline-flex items-center gap-2 mb-4 md:mb-6">
          <Icon name="Building2" size={12} /> 21+ Industries
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-4 md:mb-6 text-gray-900 dark:text-white">
          Tailored for <span className="text-[#1e3a5f] dark:text-blue-400">Your</span> Industry
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-sm md:text-lg font-light px-4">
          Specialized tools designed for your sector's unique challenges.
        </p>
      </div>

      {/* Mobile Layout: Horizontal Scroll Tabs + Dropdown */}
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
          {filteredIndustries.slice(0, 8).map(industry => (
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
          {filteredIndustries.length > 8 && (
            <button className="flex-shrink-0 px-4 py-2.5 rounded-full text-sm font-medium bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-gray-700 whitespace-nowrap">
              +{filteredIndustries.length - 8} more
            </button>
          )}
        </div>

        {/* Active Industry Card */}
        <div className="bg-gray-50 dark:bg-gray-800 p-5 rounded-2xl border border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-[#1e3a5f] dark:bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-[#1e3a5f]/20">
              <Icon name={activeIndustry.icon} className="text-white" size={24} />
            </div>
            <div>
              <h4 className="text-lg font-medium text-gray-900 dark:text-white">{activeIndustry.title}</h4>
              <p className="text-xs text-gray-500 dark:text-gray-400">{activeIndustry.features.length} features included</p>
            </div>
          </div>

          <p className="text-gray-600 dark:text-gray-300 text-sm font-light mb-4">{activeIndustry.description}</p>

          {/* Feature Pills - Horizontal Scroll */}
          <div className="flex flex-wrap gap-2 mb-4">
            {activeIndustry.features.slice(0, 6).map((feature, idx) => (
              <span
                key={feature}
                className="inline-flex items-center gap-1.5 text-xs text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 px-3 py-1.5 rounded-full border border-gray-200 dark:border-gray-600"
              >
                <Icon name="Check" size={10} className="text-[#1e3a5f] dark:text-blue-400" />
                {feature}
              </span>
            ))}
            {activeIndustry.features.length > 6 && (
              <span className="text-xs text-gray-500 dark:text-gray-400 px-3 py-1.5">
                +{activeIndustry.features.length - 6} more
              </span>
            )}
          </div>

          <a href="#pricing" className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#1e3a5f] hover:bg-[#2e5a8f] text-white rounded-full font-mono text-xs uppercase tracking-widest transition-all shadow-lg shadow-[#1e3a5f]/20">
            Get Started
            <Icon name="ArrowRight" size={14} />
          </a>
        </div>
      </div>

      {/* Desktop Layout: Side-by-Side */}
      <div className="hidden lg:grid lg:grid-cols-[1fr_2fr] gap-8">
        {/* Industry List */}
        <div className="space-y-4">
          {/* Search */}
          <div className="relative mb-4">
            <Icon name="Search" size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search industries..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-xl text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-[#1e3a5f] dark:focus:border-blue-400 transition-colors"
            />
          </div>

          <div className="flex flex-col gap-2 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
            {filteredIndustries.map(industry => (
              <button
                key={industry.id}
                onClick={() => setActiveTab(industry.id)}
                className={`p-4 rounded-xl text-left transition-all border flex items-center gap-3 ${activeTab === industry.id
                    ? 'border-[#1e3a5f] dark:border-blue-400 bg-[#1e3a5f]/5 dark:bg-blue-900/20 text-[#1e3a5f] dark:text-blue-400'
                    : 'border-gray-200 dark:border-gray-700 hover:border-[#1e3a5f]/50 dark:hover:border-blue-400/50 text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800'
                  }`}
              >
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${activeTab === industry.id ? 'bg-[#1e3a5f] dark:bg-blue-600 text-white' : 'bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400'}`}>
                  <Icon name={industry.icon} size={18} />
                </div>
                <div className="flex-1 min-w-0">
                  <h5 className="font-medium text-sm truncate">{industry.title}</h5>
                </div>
                {activeTab === industry.id && (
                  <Icon name="ChevronRight" size={16} className="text-[#1e3a5f] dark:text-blue-400 flex-shrink-0" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Industry Details */}
        <div className="bg-gray-50 dark:bg-gray-800 p-8 lg:p-10 rounded-[2rem] border border-gray-200 dark:border-gray-700 relative overflow-hidden">
          {/* Background Icon */}
          <div className="absolute top-0 right-0 p-8 opacity-[0.03] dark:opacity-[0.05]">
            <Icon name={activeIndustry.icon} size={280} />
          </div>

          <div className="flex flex-col gap-8 h-full relative z-10">
            {/* Header */}
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="w-14 h-14 bg-[#1e3a5f] dark:bg-blue-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-[#1e3a5f]/20">
                  <Icon name={activeIndustry.icon} className="text-white" size={28} />
                </div>
                <h4 className="text-2xl lg:text-3xl font-medium text-gray-900 dark:text-white mb-2">{activeIndustry.title}</h4>
                <p className="text-gray-600 dark:text-gray-300 font-light">{activeIndustry.description}</p>
              </div>
            </div>

            {/* Features Grid */}
            <div>
              <h5 className="font-mono text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-4">Included Features</h5>
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
                {activeIndustry.features.slice(0, 12).map((feature, idx) => (
                  <div
                    key={feature}
                    className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-200 font-light p-2 rounded-lg bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600"
                  >
                    <div className="w-5 h-5 bg-[#1e3a5f] dark:bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="Check" className="text-white" size={10} strokeWidth={4} />
                    </div>
                    <span className="truncate">{feature}</span>
                  </div>
                ))}
              </div>
              {activeIndustry.features.length > 12 && (
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-3 font-mono">
                  + {activeIndustry.features.length - 12} more features included
                </p>
              )}
            </div>

            {/* Footer */}
            <div className="mt-auto pt-6 border-t border-gray-200 dark:border-gray-600 flex flex-wrap items-center gap-6">
              <a href="#pricing" className="inline-flex items-center gap-2 px-6 py-3 bg-[#1e3a5f] hover:bg-[#2e5a8f] text-white rounded-full font-mono text-xs uppercase tracking-widest transition-all shadow-lg shadow-[#1e3a5f]/20">
                Get Started
                <Icon name="ArrowRight" size={14} />
              </a>
              <a href="#" className="font-mono text-xs uppercase tracking-widest text-[#1e3a5f] dark:text-blue-400 font-bold hover:gap-3 transition-all flex items-center gap-2 group/link">
                View Case Studies
                <Icon name="ExternalLink" size={12} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustrySwitcher;

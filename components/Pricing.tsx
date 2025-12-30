
import React, { useRef, useState, useEffect } from 'react';
import { PRICING_TIERS } from '../constants';
import Icon from './Icons';

const Pricing: React.FC = () => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [activeCardIndex, setActiveCardIndex] = useState(1); // Default to middle (popular) card

    const handleScroll = () => {
        if (scrollRef.current) {
            const scrollLeft = scrollRef.current.scrollLeft;
            const cardWidth = 300;
            const newIndex = Math.round(scrollLeft / cardWidth);
            setActiveCardIndex(Math.min(newIndex, PRICING_TIERS.length - 1));
        }
    };

    const scrollToCard = (index: number) => {
        if (scrollRef.current) {
            scrollRef.current.scrollTo({
                left: index * 300,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section id="pricing" className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-32 border-t border-gray-200 dark:border-gray-700">
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-8 md:mb-16">
                <span className="font-mono text-[10px] md:text-xs uppercase text-[#1e3a5f] dark:text-blue-400 tracking-widest font-bold bg-[#1e3a5f]/5 dark:bg-blue-900/30 px-3 md:px-4 py-1.5 md:py-2 rounded-full inline-flex items-center gap-2 mb-4 md:mb-6">
                    <Icon name="CreditCard" size={12} /> Pricing
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-4 md:mb-6 text-gray-900 dark:text-white">
                    Simple, <span className="text-[#1e3a5f] dark:text-blue-400">Transparent</span> Pricing
                </h2>
                <p className="text-gray-600 dark:text-gray-300 text-sm md:text-lg font-light px-4">
                    Choose the plan that fits your business. All plans include a 14-day free trial.
                </p>
            </div>

            {/* Mobile: Horizontal Scroll Cards */}
            <div className="md:hidden">
                {/* Scroll Indicator Pills */}
                <div className="flex justify-center gap-2 mb-4">
                    {PRICING_TIERS.map((tier, idx) => (
                        <button
                            key={tier.id}
                            onClick={() => scrollToCard(idx)}
                            className={`px-4 py-2 rounded-full text-xs font-mono uppercase transition-all ${activeCardIndex === idx
                                    ? 'bg-[#1e3a5f] text-white'
                                    : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400'
                                }`}
                        >
                            {tier.name}
                        </button>
                    ))}
                </div>

                {/* Scrollable Cards */}
                <div
                    ref={scrollRef}
                    onScroll={handleScroll}
                    className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 -mx-4 px-4"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {PRICING_TIERS.map((tier, idx) => (
                        <div
                            key={tier.id}
                            className={`flex-shrink-0 w-[280px] snap-center p-6 rounded-2xl border flex flex-col ${tier.isPopular
                                    ? 'bg-[#1e3a5f] text-white border-[#1e3a5f]'
                                    : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700'
                                }`}
                        >
                            {/* Popular Badge */}
                            {tier.isPopular && (
                                <div className="bg-white text-[#1e3a5f] px-3 py-1 rounded-full text-xs font-mono uppercase font-bold w-fit mb-4">
                                    Popular
                                </div>
                            )}

                            <h3 className={`text-lg font-medium mb-1 ${tier.isPopular ? 'text-white' : 'text-gray-900 dark:text-white'}`}>
                                {tier.name}
                            </h3>
                            <p className={`text-xs font-light mb-4 ${tier.isPopular ? 'text-white/70' : 'text-gray-600 dark:text-gray-300'}`}>
                                {tier.description}
                            </p>
                            <div className="flex items-baseline gap-1 mb-4">
                                <span className={`text-4xl font-bold ${tier.isPopular ? 'text-white' : 'text-gray-900 dark:text-white'}`}>
                                    {tier.price}
                                </span>
                                {tier.period && (
                                    <span className={`text-sm ${tier.isPopular ? 'text-white/70' : 'text-gray-500 dark:text-gray-400'}`}>
                                        {tier.period}
                                    </span>
                                )}
                            </div>

                            {/* Features - Compact list */}
                            <ul className="space-y-2 flex-1 mb-4">
                                {tier.features.slice(0, 5).map((feature, featureIdx) => (
                                    <li key={featureIdx} className="flex items-start gap-2">
                                        <Icon name="Check" size={12} strokeWidth={3} className={tier.isPopular ? 'text-white/80 mt-0.5' : 'text-[#1e3a5f] dark:text-blue-400 mt-0.5'} />
                                        <span className={`text-xs font-light ${tier.isPopular ? 'text-white/90' : 'text-gray-700 dark:text-gray-200'}`}>
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                                {tier.features.length > 5 && (
                                    <li className={`text-xs ${tier.isPopular ? 'text-white/60' : 'text-gray-500 dark:text-gray-400'}`}>
                                        +{tier.features.length - 5} more features
                                    </li>
                                )}
                            </ul>

                            <a
                                href="#signup"
                                className={`w-full py-3 rounded-full text-center font-mono text-[10px] uppercase tracking-widest transition-all ${tier.isPopular
                                        ? 'bg-white text-[#1e3a5f] shadow-lg'
                                        : 'bg-[#1e3a5f] text-white'
                                    }`}
                            >
                                {tier.cta}
                            </a>
                        </div>
                    ))}
                </div>
            </div>

            {/* Desktop: Grid Cards */}
            <div className="hidden md:grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {PRICING_TIERS.map((tier, idx) => (
                    <div
                        key={tier.id}
                        className={`relative p-8 rounded-[2rem] border transition-all duration-500 hover:-translate-y-2 flex flex-col ${tier.isPopular
                                ? 'bg-[#1e3a5f] text-white border-[#1e3a5f] shadow-2xl shadow-[#1e3a5f]/30 scale-105'
                                : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:border-[#1e3a5f] dark:hover:border-blue-400'
                            }`}
                    >
                        {tier.isPopular && (
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-[#1e3a5f] px-4 py-1.5 rounded-full text-xs font-mono uppercase font-bold shadow-lg">
                                Most Popular
                            </div>
                        )}

                        <div className="mb-8">
                            <h3 className={`text-xl font-medium mb-2 ${tier.isPopular ? 'text-white' : 'text-gray-900 dark:text-white'}`}>
                                {tier.name}
                            </h3>
                            <p className={`text-sm font-light mb-4 ${tier.isPopular ? 'text-white/70' : 'text-gray-600 dark:text-gray-300'}`}>
                                {tier.description}
                            </p>
                            <div className="flex items-baseline gap-1">
                                <span className={`text-5xl font-bold ${tier.isPopular ? 'text-white' : 'text-gray-900 dark:text-white'}`}>
                                    {tier.price}
                                </span>
                                {tier.period && (
                                    <span className={`text-lg ${tier.isPopular ? 'text-white/70' : 'text-gray-500 dark:text-gray-400'}`}>
                                        {tier.period}
                                    </span>
                                )}
                            </div>
                        </div>

                        <ul className="space-y-4 flex-1 mb-8">
                            {tier.features.map((feature, featureIdx) => (
                                <li key={featureIdx} className="flex items-start gap-3">
                                    <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${tier.isPopular ? 'bg-white/20' : 'bg-[#1e3a5f]/10 dark:bg-blue-900/30'
                                        }`}>
                                        <Icon name="Check" size={10} strokeWidth={4} className={tier.isPopular ? 'text-white' : 'text-[#1e3a5f] dark:text-blue-400'} />
                                    </div>
                                    <span className={`text-sm font-light ${tier.isPopular ? 'text-white/90' : 'text-gray-700 dark:text-gray-200'}`}>
                                        {feature}
                                    </span>
                                </li>
                            ))}
                        </ul>

                        <a
                            href="#signup"
                            className={`w-full py-4 rounded-full text-center font-mono text-xs uppercase tracking-widest transition-all hover:scale-105 active:scale-95 ${tier.isPopular
                                    ? 'bg-white text-[#1e3a5f] shadow-lg'
                                    : 'bg-[#1e3a5f] hover:bg-[#2e5a8f] text-white shadow-lg shadow-[#1e3a5f]/20'
                                }`}
                        >
                            {tier.cta}
                        </a>
                    </div>
                ))}
            </div>

            {/* Trust Elements - Compact on mobile */}
            <div className="mt-10 md:mt-16 pt-8 md:pt-12 border-t border-gray-200 dark:border-gray-700">
                <div className="flex flex-wrap items-center justify-center gap-4 md:gap-12 text-gray-500 dark:text-gray-400">
                    <div className="flex items-center gap-2 font-mono text-[10px] md:text-xs uppercase">
                        <Icon name="ShieldCheck" size={16} className="text-emerald-500" />
                        <span className="hidden sm:inline">256-bit SSL</span>
                        <span className="sm:hidden">SSL</span>
                    </div>
                    <div className="flex items-center gap-2 font-mono text-[10px] md:text-xs uppercase">
                        <Icon name="Award" size={16} className="text-amber-500" />
                        <span>SOC2</span>
                    </div>
                    <div className="flex items-center gap-2 font-mono text-[10px] md:text-xs uppercase">
                        <Icon name="Clock" size={16} className="text-blue-500" />
                        <span>99.9% Uptime</span>
                    </div>
                    <div className="flex items-center gap-2 font-mono text-[10px] md:text-xs uppercase">
                        <Icon name="Headphones" size={16} className="text-purple-500" />
                        <span>24/7 Support</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;

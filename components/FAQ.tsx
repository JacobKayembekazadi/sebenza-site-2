
import React, { useState } from 'react';
import { FAQ_DATA } from '../constants';
import Icon from './Icons';

const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="faq" className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-32 border-t border-gray-200 dark:border-gray-700">
            {/* Mobile: Stacked Layout */}
            <div className="lg:hidden">
                {/* Header */}
                <div className="text-center mb-8">
                    <span className="font-mono text-[10px] uppercase text-[#1e3a5f] dark:text-blue-400 tracking-widest font-bold bg-[#1e3a5f]/5 dark:bg-blue-900/30 px-3 py-1.5 rounded-full inline-flex items-center gap-2 mb-4">
                        <Icon name="HelpCircle" size={12} /> FAQs
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-medium tracking-tight mb-4 text-gray-900 dark:text-white">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 text-sm font-light">
                        Can't find your answer? Contact our support team.
                    </p>
                </div>

                {/* FAQ Accordion */}
                <div className="space-y-3">
                    {FAQ_DATA.map((faq, idx) => (
                        <div
                            key={idx}
                            className={`border rounded-xl transition-all duration-300 overflow-hidden ${openIndex === idx
                                    ? 'border-[#1e3a5f] dark:border-blue-400 bg-[#1e3a5f]/5 dark:bg-blue-900/20'
                                    : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800'
                                }`}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                className="w-full p-4 flex items-center justify-between text-left"
                            >
                                <h4 className={`font-medium text-sm pr-4 ${openIndex === idx ? 'text-[#1e3a5f] dark:text-blue-400' : 'text-gray-900 dark:text-white'}`}>
                                    {faq.question}
                                </h4>
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${openIndex === idx
                                        ? 'bg-[#1e3a5f] dark:bg-blue-600 text-white rotate-180'
                                        : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300'
                                    }`}>
                                    <Icon name="ChevronDown" size={14} />
                                </div>
                            </button>

                            <div className={`overflow-hidden transition-all duration-300 ${openIndex === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                }`}>
                                <p className="px-4 pb-4 text-gray-600 dark:text-gray-300 text-sm font-light leading-relaxed">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Contact CTA */}
                <div className="mt-8 text-center">
                    <a
                        href="#contact"
                        className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 bg-[#1e3a5f] hover:bg-[#2e5a8f] text-white rounded-full font-mono text-xs uppercase tracking-widest transition-all shadow-lg shadow-[#1e3a5f]/20"
                    >
                        <Icon name="MessageCircle" size={14} />
                        Contact Support
                    </a>
                </div>
            </div>

            {/* Desktop: Side by Side */}
            <div className="hidden lg:grid lg:grid-cols-[1fr_1.5fr] gap-16">
                {/* Left Column - Header */}
                <div className="lg:sticky lg:top-32 lg:h-fit">
                    <span className="font-mono text-xs uppercase text-[#1e3a5f] dark:text-blue-400 tracking-widest font-bold bg-[#1e3a5f]/5 dark:bg-blue-900/30 px-4 py-2 rounded-full inline-flex items-center gap-2 mb-6">
                        <Icon name="HelpCircle" size={14} /> FAQs
                    </span>
                    <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6 text-gray-900 dark:text-white">
                        Frequently Asked <span className="text-[#1e3a5f] dark:text-blue-400">Questions</span>
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 text-lg font-light mb-8">
                        Can't find the answer you're looking for? Reach out to our customer support team.
                    </p>
                    <a
                        href="#contact"
                        className="inline-flex items-center gap-2 px-6 py-3 border border-gray-200 dark:border-gray-600 hover:border-[#1e3a5f] dark:hover:border-blue-400 rounded-full font-mono text-xs uppercase tracking-widest transition-all text-gray-700 dark:text-gray-300 hover:text-[#1e3a5f] dark:hover:text-blue-400"
                    >
                        <Icon name="MessageCircle" size={14} />
                        Contact Support
                    </a>
                </div>

                {/* Right Column - FAQ Items */}
                <div className="space-y-4">
                    {FAQ_DATA.map((faq, idx) => (
                        <div
                            key={idx}
                            className={`border rounded-2xl transition-all duration-300 overflow-hidden ${openIndex === idx
                                    ? 'border-[#1e3a5f] dark:border-blue-400 bg-[#1e3a5f]/5 dark:bg-blue-900/20'
                                    : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800'
                                }`}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                className="w-full p-6 flex items-center justify-between text-left"
                            >
                                <h4 className={`font-medium text-lg pr-4 ${openIndex === idx ? 'text-[#1e3a5f] dark:text-blue-400' : 'text-gray-900 dark:text-white'}`}>
                                    {faq.question}
                                </h4>
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${openIndex === idx
                                        ? 'bg-[#1e3a5f] dark:bg-blue-600 text-white rotate-180'
                                        : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300'
                                    }`}>
                                    <Icon name="ChevronDown" size={18} />
                                </div>
                            </button>

                            <div className={`overflow-hidden transition-all duration-300 ${openIndex === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                }`}>
                                <p className="px-6 pb-6 text-gray-600 dark:text-gray-300 font-light leading-relaxed">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom CTA - Desktop only */}
            <div className="hidden lg:block mt-20 text-center p-12 bg-gradient-to-r from-[#1e3a5f]/5 to-blue-500/5 dark:from-blue-900/20 dark:to-blue-800/10 rounded-[2rem] border border-[#1e3a5f]/10 dark:border-blue-400/20">
                <h3 className="text-2xl md:text-3xl font-medium mb-4 text-gray-900 dark:text-white">
                    Still have questions?
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-md mx-auto">
                    Our team is here to help. Get in touch and we'll get back to you within 24 hours.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4">
                    <a href="#callback" className="inline-flex items-center gap-2 px-8 py-4 bg-[#1e3a5f] hover:bg-[#2e5a8f] text-white rounded-full font-mono text-xs uppercase tracking-widest transition-all shadow-lg shadow-[#1e3a5f]/20">
                        <Icon name="Phone" size={14} />
                        Request Callback
                    </a>
                    <a href="#" className="inline-flex items-center gap-2 px-8 py-4 border border-gray-200 dark:border-gray-600 hover:border-[#1e3a5f] dark:hover:border-blue-400 rounded-full font-mono text-xs uppercase tracking-widest transition-all text-gray-700 dark:text-gray-300 hover:text-[#1e3a5f] dark:hover:text-blue-400">
                        <Icon name="Mail" size={14} />
                        Email Us
                    </a>
                </div>
            </div>
        </section>
    );
};

export default FAQ;

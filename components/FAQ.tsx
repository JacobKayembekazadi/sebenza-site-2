
import React, { useState } from 'react';
// FAQ now from translated-data
import Icon from './Icons';
import { useCountry } from '../services/country-context';
import { getFAQ } from '../services/translated-data';
import { t } from '../services/translations';

const FAQItem: React.FC<{
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}> = ({ question, answer, isOpen, onClick }) => (
  <div className={`border rounded-2xl transition-all duration-300 overflow-hidden ${
    isOpen
      ? 'bg-[#1e3a5f]/5 dark:bg-blue-900/20 border-[#1e3a5f]/20 dark:border-blue-400/30 shadow-sm'
      : 'bg-white dark:bg-gray-800 border-gray-100 dark:border-gray-700 hover:border-[#1e3a5f]/30 dark:hover:border-blue-400/30'
  }`}>
    <button
      className="w-full px-6 py-5 flex items-center justify-between text-left"
      onClick={onClick}
    >
      <span className={`font-bold pr-4 ${
        isOpen ? 'text-[#1e3a5f] dark:text-blue-400' : 'text-gray-900 dark:text-white'
      }`}>
        {question}
      </span>
      <div className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
        {isOpen ? (
          <Icon name="Minus" size={20} className="text-[#1e3a5f] dark:text-blue-400" />
        ) : (
          <Icon name="Plus" size={20} className="text-gray-400 dark:text-gray-500" />
        )}
      </div>
    </button>
    <div className={`px-6 transition-all duration-300 ease-in-out ${
      isOpen ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
    }`}>
      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
        {answer}
      </p>
    </div>
  </div>
);

const FAQ: React.FC = () => {
  const { country } = useCountry();
  const lang = country.language;
  const faqItems = getFAQ(lang);

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white mb-4">
            FAQ
          </h2>
          <p className="text-gray-500 dark:text-gray-400 font-medium">
            Common questions about Sebenza System.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqItems.map((faq, idx) => (
            <FAQItem
              key={idx}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === idx}
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            />
          ))}
        </div>

        {/* Still Have Questions CTA */}
        <div className="mt-12 md:mt-16 text-center p-8 md:p-12 bg-white dark:bg-gray-800 rounded-3xl border border-gray-100 dark:border-gray-700">
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-3">
            Still have questions?
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-md mx-auto">
            Our team is here to help. Get in touch and we'll respond within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="w-full sm:w-auto px-8 py-4 bg-[#1e3a5f] hover:bg-[#2e5a8f] text-white rounded-full font-semibold transition-all shadow-lg shadow-[#1e3a5f]/20 flex items-center justify-center gap-2"
            >
              <Icon name="MessageCircle" size={18} />
              Contact Support
            </a>
            <a
              href="#"
              className="w-full sm:w-auto px-8 py-4 border border-gray-200 dark:border-gray-600 hover:border-[#1e3a5f] dark:hover:border-blue-400 text-gray-700 dark:text-gray-300 rounded-full font-semibold transition-all flex items-center justify-center gap-2"
            >
              <Icon name="BookOpen" size={18} />
              View Documentation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

import React from 'react';
import { PRICING_TIERS } from '../constants';
import Icon from './Icons';
import { useCountry } from '../services/country-context';
import { t as tr } from '../services/translations';

const PER_SEAT_ROWS = [
  { users: '1 user', price: 'R300/mo' },
  { users: '5 users', price: 'R700/mo' },
  { users: '10 users', price: 'R1,200/mo' },
  { users: '20 users', price: 'R2,200/mo' },
];

const Pricing: React.FC = () => {
  const { country } = useCountry();
  const tiers = country.tiers || PRICING_TIERS;
  const lang = country.language;

  const tier = PRICING_TIERS[0]; // features come from constants, pricing from country

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
          One plan. All features. Add users as you grow.
        </p>
      </div>

      {/* Cards Grid — main tier + per-seat info card */}
      <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {/* Main Tier Card */}
        <div className="relative p-8 rounded-[2rem] border bg-[#1e3a5f] text-white border-[#1e3a5f] shadow-2xl shadow-[#1e3a5f]/30 flex flex-col">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-[#1e3a5f] px-4 py-1.5 rounded-full text-xs font-mono uppercase font-bold shadow-lg whitespace-nowrap">
            Everything Included
          </div>

          <div className="mb-8 mt-2">
            <h3 className="text-xl font-medium mb-2 text-white">{tier.name}</h3>
            <p className="text-sm font-light mb-4 text-white/70">{tier.description}</p>
            <div className="flex items-baseline gap-1">
              <span className="text-5xl font-bold text-white">{country.symbol}{country.pricing.base}</span>
              <span className="text-lg text-white/70">/month</span>
            </div>
          </div>

          <ul className="space-y-4 flex-1 mb-8">
            {tier.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-white/20">
                  <Icon name="Check" size={10} strokeWidth={4} className="text-white" />
                </div>
                <span className="text-sm font-light text-white/90">{feature}</span>
              </li>
            ))}
          </ul>

          <a
            href="https://app.sebenzas.com/#signup"
            className="w-full py-4 rounded-full text-center font-mono text-xs uppercase tracking-widest transition-all hover:scale-105 active:scale-95 bg-white text-[#1e3a5f] shadow-lg"
          >
            {tier.cta}
          </a>
        </div>

        {/* Per-Seat Info Card */}
        <div className="p-8 rounded-[2rem] border bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-[#1e3a5f]/10 dark:bg-blue-900/30 flex items-center justify-center mb-6">
              <Icon name="Users" size={24} className="text-[#1e3a5f] dark:text-blue-400" />
            </div>
            <h3 className="text-xl font-medium mb-2 text-gray-900 dark:text-white">Need more users?</h3>
            <p className="text-sm font-light text-gray-600 dark:text-gray-300 mb-6">
              Add team members at <span className="font-semibold text-[#1e3a5f] dark:text-blue-400">{country.symbol}{country.pricing.seat}/user/month</span>. Volume pricing kicks in automatically.
            </p>

            <div className="rounded-2xl border border-gray-100 dark:border-gray-700 overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 dark:bg-gray-700/50">
                    <th className="text-left px-4 py-3 font-semibold text-gray-700 dark:text-gray-200">Team size</th>
                    <th className="text-right px-4 py-3 font-semibold text-gray-700 dark:text-gray-200">Monthly total</th>
                  </tr>
                </thead>
                <tbody>
                  {PER_SEAT_ROWS.map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? 'bg-white dark:bg-gray-800' : 'bg-gray-50/50 dark:bg-gray-700/20'}>
                      <td className="px-4 py-3 text-gray-700 dark:text-gray-200">{row.users}</td>
                      <td className="px-4 py-3 text-right font-semibold text-[#1e3a5f] dark:text-blue-400">{row.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <p className="mt-6 text-xs text-gray-500 dark:text-gray-400 font-light">
            {`All prices in ${country.currency}. Billed monthly. Cancel anytime.`}
          </p>
        </div>
      </div>

      {/* Trust Elements */}
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

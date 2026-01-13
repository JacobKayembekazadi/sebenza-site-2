
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

        {/* Trust Logos Section */}
        <section className="py-12 bg-gray-50/50 dark:bg-gray-800/30">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <p className="text-center text-sm font-semibold text-gray-500 dark:text-gray-400 mb-10">
              Powering operations for leading organizations:
            </p>
            <div className="flex flex-wrap justify-center gap-6 md:gap-12">
              {[
                { name: "Momentum", color: "bg-blue-50 dark:bg-blue-900/20" },
                { name: "Velocity", color: "bg-emerald-50 dark:bg-emerald-900/20" },
                { name: "Apex", color: "bg-amber-50 dark:bg-amber-900/20" },
                { name: "Pinnacle", color: "bg-purple-50 dark:bg-purple-900/20" },
                { name: "Summit", color: "bg-rose-50 dark:bg-rose-900/20" },
                { name: "Horizon", color: "bg-cyan-50 dark:bg-cyan-900/20" }
              ].map((company, idx) => (
                <div
                  key={idx}
                  className={`h-12 w-28 md:w-32 ${company.color} rounded-lg flex items-center justify-center font-bold text-gray-400 dark:text-gray-500 border border-gray-100 dark:border-gray-700`}
                >
                  {company.name}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Metrics Section */}
        <section className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24">
          {/* Desktop: Bento grid */}
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {MOCK_METRICS.map((metric, idx) => (
              <div
                key={idx}
                className={`group p-8 md:p-10 rounded-3xl border overflow-hidden relative transition-all duration-500 hover:-translate-y-1 ${
                  idx === 0
                    ? 'bg-[#1e3a5f] text-white border-[#1e3a5f]'
                    : idx === 1
                      ? 'bg-white dark:bg-gray-800 border-2 border-[#1e3a5f] dark:border-blue-400 shadow-xl shadow-[#1e3a5f]/10'
                      : 'bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700'
                }`}
              >
                <div className="relative z-10">
                  <span className={`text-5xl md:text-6xl font-black tracking-tight ${
                    idx === 0 ? 'text-blue-300' : 'text-[#1e3a5f] dark:text-blue-400'
                  }`}>
                    {metric.value}
                  </span>
                  <h4 className={`text-lg md:text-xl mt-4 font-bold ${
                    idx === 0 ? 'text-white' : 'text-gray-900 dark:text-white'
                  }`}>
                    {metric.label}
                  </h4>
                  <p className={`text-sm mt-3 font-light leading-relaxed ${
                    idx === 0 ? 'text-blue-100/70' : 'text-gray-600 dark:text-gray-300'
                  }`}>
                    Measured across our enterprise customers.
                  </p>
                  <div className={`mt-4 flex items-center gap-2 text-xs font-semibold ${
                    idx === 0 ? 'text-blue-200/60' : 'text-gray-500 dark:text-gray-400'
                  }`}>
                    <Icon name="TrendingUp" size={14} /> {metric.change}
                  </div>
                </div>
                <div className={`absolute -right-6 -bottom-6 opacity-[0.05] group-hover:rotate-12 transition-transform duration-700 ${
                  idx === 0 ? 'text-white' : 'text-[#1e3a5f] dark:text-blue-400'
                }`}>
                  <Icon name={metric.icon} size={140} />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Mission Statement */}
        <section className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24 md:grid md:grid-cols-2 md:gap-16 items-center border-t border-gray-200 dark:border-gray-700">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-gray-900 dark:text-white mb-8 md:mb-0">
            Built to scale modern{' '}
            <span className="text-[#1e3a5f] dark:text-blue-400">organizations</span> with confidence.
          </h2>
          <div className="space-y-6">
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 font-light leading-relaxed">
              We replace 10+ disconnected tools with one unified platform. Sebenza System provides integrated software designed for streamlined operations and exponential growth.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 md:gap-10 pt-4">
              {[
                { value: '200+', label: 'Integrations' },
                { value: '14.2k', label: 'Daily Users' },
                { value: '99.9%', label: 'Uptime' },
                { value: '21+', label: 'Industries' },
              ].map((stat, idx) => (
                <div key={idx}>
                  <span className="block text-2xl md:text-3xl font-black text-gray-900 dark:text-white mb-1">
                    {stat.value}
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                    {stat.label}
                  </span>
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

        {/* Final CTA Section */}
        <section className="py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="bg-[#1e3a5f] rounded-[2rem] md:rounded-[3rem] p-10 md:p-20 text-center text-white relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-50" />

              {/* Glow Effect */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/20 blur-[150px] -z-10" />

              <div className="relative z-10">
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 md:mb-8">
                  Ready to streamline your business?
                </h2>
                <p className="text-blue-100/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 md:mb-12">
                  Join thousands of businesses making the switch. Launch your integrated platform in as little as 24 hours.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
                  <a
                    href="#signup"
                    className="w-full sm:w-auto bg-white text-[#1e3a5f] px-10 py-5 rounded-full font-black text-lg hover:bg-blue-50 transition-colors shadow-2xl flex items-center justify-center gap-2"
                  >
                    Start Your Free Trial
                    <Icon name="ArrowRight" size={20} />
                  </a>
                  <a
                    href="#contact"
                    className="w-full sm:w-auto border-2 border-white/30 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
                  >
                    <Icon name="Phone" size={18} />
                    Contact Sales
                  </a>
                </div>

                {/* Trust badges */}
                <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 mt-10 md:mt-12 text-sm text-blue-100/60">
                  <div className="flex items-center gap-2">
                    <Icon name="CheckCircle" size={16} className="text-emerald-400" />
                    14-day free trial
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="CheckCircle" size={16} className="text-emerald-400" />
                    No credit card required
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="CheckCircle" size={16} className="text-emerald-400" />
                    Cancel anytime
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <BusinessAssistant />
    </div>
  );
};

export default App;

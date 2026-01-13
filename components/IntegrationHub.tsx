
import React from 'react';
import Icon from './Icons';

interface IntegrationHubProps {
  onViewAllClick?: () => void;
}

const IntegrationHub: React.FC<IntegrationHubProps> = ({ onViewAllClick }) => {
  const integrations = [
    { icon: 'MessageCircle', title: 'WhatsApp', desc: 'Direct client communication tracking.', color: 'text-green-400' },
    { icon: 'Landmark', title: 'Bank Sync', desc: 'Automated bank reconciliation.', color: 'text-blue-300' },
    { icon: 'Mail', title: 'Email', desc: 'Sync Gmail and Outlook.', color: 'text-orange-400' },
    { icon: 'CreditCard', title: 'Payments', desc: 'Stripe, PayPal integration.', color: 'text-purple-300' }
  ];

  return (
    <section id="integrations" className="mx-4 md:mx-6 lg:mx-auto max-w-7xl px-6 md:px-8 lg:px-12 py-12 md:py-20 bg-[#1e3a5f] text-white rounded-[2rem] md:rounded-[3rem] my-8 md:my-16 overflow-hidden relative">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-blue-400 blur-[150px] md:blur-[200px] opacity-10 rounded-full translate-x-1/3 -translate-y-1/2"></div>

      <div className="relative z-10">
        {/* Mobile Layout */}
        <div className="lg:hidden">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-black mb-4 leading-tight">
              Works with the{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-100">
                tools you love.
              </span>
            </h2>
            <p className="text-blue-100/70 text-sm">
              Connect banking, communications, and payments seamlessly.
            </p>
          </div>

          <div
            className="flex gap-3 overflow-x-auto scrollbar-hide pb-4 -mx-6 px-6"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {integrations.map((item, idx) => (
              <div key={idx} className="flex-shrink-0 w-[180px] p-4 bg-white/5 border border-white/10 rounded-2xl">
                <Icon name={item.icon} className={`${item.color} w-8 h-8 mb-3`} />
                <h6 className="font-bold text-sm text-white mb-1">{item.title}</h6>
                <p className="text-[11px] text-blue-100/60 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 text-center">
            <button
              onClick={onViewAllClick}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full font-semibold text-sm transition-all"
            >
              View All 200+ Integrations
              <Icon name="ArrowRight" size={14} />
            </button>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-flex items-center gap-2 bg-white/10 text-blue-200 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
              <Icon name="Plug" size={14} /> 200+ Integrations
            </span>
            <h2 className="text-4xl lg:text-5xl font-black mb-6 leading-tight">
              Works with the{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-100">
                tools you love.
              </span>
            </h2>
            <p className="text-blue-100/70 text-lg mb-10 max-w-md">
              Connect your banking, communications, and payments directly into the Sebenza ecosystem. No more context switching.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {integrations.map((item, idx) => (
                <div key={idx} className="p-5 bg-white/5 border border-white/10 rounded-2xl hover:border-blue-300/50 hover:bg-white/10 transition-all cursor-pointer group">
                  <Icon name={item.icon} className={`${item.color} w-8 h-8 mb-3 group-hover:scale-110 transition-transform`} />
                  <h6 className="font-bold text-white mb-1">{item.title}</h6>
                  <p className="text-xs text-blue-100/60 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <button
              onClick={onViewAllClick}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#1e3a5f] rounded-full font-bold transition-all hover:bg-blue-50 shadow-xl"
            >
              View All Integrations
              <Icon name="ArrowRight" size={16} />
            </button>
          </div>

          <div className="relative flex items-center justify-center h-[450px]">
            {/* Animated circles */}
            <div className="absolute w-[400px] h-[400px] border border-white/10 rounded-full animate-[spin_30s_linear_infinite]"></div>
            <div className="absolute w-[280px] h-[280px] border border-white/5 rounded-full animate-[spin_20s_linear_infinite_reverse]"></div>
            <div className="absolute w-[160px] h-[160px] border border-white/10 rounded-full animate-[spin_15s_linear_infinite]"></div>

            {/* Center logo */}
            <div className="relative z-10 w-24 h-24 bg-white rounded-3xl flex items-center justify-center shadow-[0_0_60px_rgba(255,255,255,0.3)] p-2">
              <img src="/logo.jpg" alt="Sebenza" className="w-full h-full object-contain rounded-xl" />
            </div>

            {/* Floating integration icons */}
            <div className="absolute top-10 left-20 w-12 h-12 bg-white/10 rounded-xl border border-white/20 flex items-center justify-center animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}>
              <Icon name="Mail" className="text-white" size={20} />
            </div>
            <div className="absolute top-20 right-16 w-12 h-12 bg-white/10 rounded-xl border border-white/20 flex items-center justify-center animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '3s' }}>
              <Icon name="CreditCard" className="text-white" size={20} />
            </div>
            <div className="absolute bottom-20 left-16 w-12 h-12 bg-white/10 rounded-xl border border-white/20 flex items-center justify-center animate-bounce" style={{ animationDelay: '1s', animationDuration: '3s' }}>
              <Icon name="MessageCircle" className="text-green-400" size={20} />
            </div>
            <div className="absolute bottom-10 right-24 w-12 h-12 bg-white/10 rounded-xl border border-white/20 flex items-center justify-center animate-bounce" style={{ animationDelay: '1.5s', animationDuration: '3s' }}>
              <Icon name="Landmark" className="text-blue-300" size={20} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationHub;

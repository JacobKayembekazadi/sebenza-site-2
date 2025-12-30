
import React from 'react';
import Icon from './Icons';

const IntegrationHub: React.FC = () => {
  const integrations = [
    { icon: 'MessageCircle', title: 'WhatsApp', desc: 'Direct client communication tracking.', color: 'text-green-400' },
    { icon: 'Landmark', title: 'Bank Sync', desc: 'Automated bank reconciliation.', color: 'text-blue-300' },
    { icon: 'Mail', title: 'Email', desc: 'Sync Gmail and Outlook.', color: 'text-orange-400' },
    { icon: 'CreditCard', title: 'Payments', desc: 'Stripe, PayPal integration.', color: 'text-purple-300' }
  ];

  return (
    <section id="integrations" className="mx-4 md:mx-6 lg:mx-auto max-w-7xl px-4 md:px-6 lg:px-12 py-12 md:py-24 bg-[#1e3a5f] text-white rounded-2xl md:rounded-[4rem] my-8 md:my-32 overflow-hidden relative">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-blue-400 blur-[150px] md:blur-[200px] opacity-10 rounded-full translate-x-1/3 -translate-y-1/2"></div>

      <div className="relative z-10">
        {/* Mobile Layout */}
        <div className="lg:hidden">
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-medium mb-4 leading-tight">
              Works with the <span className="text-blue-300">tools you love.</span>
            </h2>
            <p className="text-blue-100/70 font-light text-sm">
              Connect banking, communications, and payments seamlessly.
            </p>
          </div>

          {/* Horizontal Scroll Integration Cards */}
          <div
            className="flex gap-3 overflow-x-auto scrollbar-hide pb-4 -mx-4 px-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {integrations.map((item, idx) => (
              <div key={idx} className="flex-shrink-0 w-[200px] p-4 bg-white/5 border border-white/10 rounded-2xl flex flex-col gap-3">
                <Icon name={item.icon} className={`${item.color} w-6 h-6`} />
                <h6 className="font-medium text-sm text-white">{item.title}</h6>
                <p className="text-[10px] text-blue-100/60 font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-6 text-center">
            <a href="#" className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 hover:bg-white/10 rounded-full font-mono text-xs uppercase tracking-widest transition-all">
              View All Integrations
              <Icon name="ArrowRight" size={12} />
            </a>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-20 items-center">
          <div className="p-8 lg:p-12">
            <h2 className="text-5xl lg:text-6xl font-medium mb-8 leading-tight">
              Works with the <br /><span className="text-blue-300">tools you love.</span>
            </h2>
            <p className="text-blue-100/70 font-light text-lg mb-12 max-w-md">
              Connect your banking, communications, and payments directly into the Sebenza ecosystem. No more context switching.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {integrations.map((item, idx) => (
                <div key={idx} className="p-6 bg-white/5 border border-white/10 rounded-[2rem] flex flex-col gap-4 hover:border-blue-300/50 hover:bg-white/10 transition-colors">
                  <Icon name={item.icon} className={`${item.color} w-8 h-8`} />
                  <h6 className="font-medium text-sm text-white">{item.title} Integration</h6>
                  <p className="text-[11px] text-blue-100/60 font-light leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative hidden lg:flex items-center justify-center h-[500px]">
            <div className="absolute w-[450px] h-[450px] border border-white/10 rounded-full animate-[spin_20s_linear_infinite]"></div>
            <div className="absolute w-[300px] h-[300px] border border-white/5 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>

            <div className="relative flex flex-col items-center gap-12">
              {/* Logo Center */}
              <div className="w-24 h-24 bg-white rounded-[2rem] flex items-center justify-center shadow-[0_0_50px_rgba(255,255,255,0.3)] z-20 p-2">
                <img src="/logo.jpg" alt="Sebenza" className="w-full h-full object-contain" />
              </div>

              <div className="grid grid-cols-3 gap-16 absolute -top-12 -bottom-12 -left-12 -right-12">
                <div className="w-14 h-14 bg-white/10 rounded-2xl border border-white/20 flex items-center justify-center shadow-2xl animate-bounce" style={{ animationDelay: '0s' }}>
                  <Icon name="Github" className="text-white" size={20} />
                </div>
                <div className="w-14 h-14 bg-white/10 rounded-2xl border border-white/20 flex items-center justify-center shadow-2xl animate-bounce translate-y-12" style={{ animationDelay: '0.5s' }}>
                  <Icon name="Slack" className="text-white" size={20} />
                </div>
                <div className="w-14 h-14 bg-white/10 rounded-2xl border border-white/20 flex items-center justify-center shadow-2xl animate-bounce" style={{ animationDelay: '1s' }}>
                  <Icon name="Figma" className="text-white" size={20} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationHub;

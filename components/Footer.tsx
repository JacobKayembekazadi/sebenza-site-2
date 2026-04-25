import React from 'react';
import Icon from './Icons';
import { useCountry } from '../services/country-context';
import { t } from '../services/translations';

const Footer: React.FC = () => {
  const { country } = useCountry();
  const lang = country.language;

  return (
    <footer className="bg-[#1e3a5f] text-white pt-16 md:pt-20 pb-8 md:pb-10">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Main Footer Grid */}
        <div className="grid md:grid-cols-4 gap-10 md:gap-12 mb-16 md:mb-20">
          {/* Brand Column */}
          <div className="md:col-span-1">
            <a href="#" className="flex items-center gap-3 mb-6">
              <img src="/logo.svg" alt="Sebenza System" className="h-10 w-auto rounded-lg" />
              <span className="text-xl font-black tracking-tight">SEBENZA</span>
            </a>
            <p className="text-blue-100/50 leading-relaxed mb-6 text-sm">
              The all-in-one business management platform. Streamline operations and scale with confidence.
            </p>
            <div className="flex gap-3">
              {['Twitter', 'Linkedin', 'Facebook', 'Instagram'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-500 transition-colors cursor-pointer"
                >
                  <Icon name={social} size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Products Column */}
          <div>
            <h4 className="font-bold text-lg mb-6">Products</h4>
            <ul className="space-y-4 text-blue-100/60">
              <li><a href="#features" className="hover:text-white transition-colors">CRM & Sales</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Inventory Management</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">HR & Payroll</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Project Management</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-bold text-lg mb-6">Company</h4>
            <ul className="space-y-4 text-blue-100/60">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="https://app.sebenzas.com/#login" className="hover:text-white transition-colors">Login</a></li>
              <li><a href="https://app.sebenzas.com/#signup" className="hover:text-white transition-colors">Get Started</a></li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div>
            <h4 className="font-bold text-lg mb-6">Stay Updated</h4>
            <p className="text-sm text-blue-100/60 mb-4">Get monthly updates on new features and tips.</p>
            <div className="flex bg-white/5 p-1 rounded-full border border-white/10">
              <input
                type="email"
                placeholder={t('footerEmailPlaceholder', lang)}
                className="bg-transparent border-none focus:ring-0 focus:outline-none px-4 text-sm flex-1 placeholder-blue-100/40"
              />
              <button className="bg-blue-500 hover:bg-blue-400 p-3 rounded-full transition-colors">
                <Icon name="ArrowRight" size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-blue-100/40">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
            <span>All Systems Operational</span>
            <span className="mx-2">•</span>
            <span>© 2026 Sebenza Systems. All rights reserved.</span>
          </div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">{t('footerPrivacy', lang)}</a>
            <a href="#" className="hover:text-white transition-colors">{t('footerTerms', lang)}</a>
            <a href="#" className="hover:text-white transition-colors">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

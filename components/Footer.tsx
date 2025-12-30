
import React from 'react';
import Icon from './Icons';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-700 py-10 md:py-20 bg-gray-50 dark:bg-gray-900 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Mobile Layout */}
        <div className="lg:hidden">
          {/* Logo & Description */}
          <div className="text-center mb-8">
            <a href="#" className="inline-flex items-center gap-3 mb-4">
              <img src="/logo.jpg" alt="Sebenza System" className="h-10 w-auto" />
            </a>
            <p className="text-gray-600 dark:text-gray-300 text-sm font-light max-w-xs mx-auto">
              Comprehensive business management platform for modern organizations.
            </p>
          </div>

          {/* Quick Links - Horizontal Scroll */}
          <div className="flex flex-wrap justify-center gap-4 mb-8 text-sm text-gray-600 dark:text-gray-300">
            <a href="#features" className="hover:text-[#1e3a5f] dark:hover:text-blue-400">Features</a>
            <span className="text-gray-300 dark:text-gray-700">•</span>
            <a href="#pricing" className="hover:text-[#1e3a5f] dark:hover:text-blue-400">Pricing</a>
            <span className="text-gray-300 dark:text-gray-700">•</span>
            <a href="#faq" className="hover:text-[#1e3a5f] dark:hover:text-blue-400">FAQs</a>
            <span className="text-gray-300 dark:text-gray-700">•</span>
            <a href="#contact" className="hover:text-[#1e3a5f] dark:hover:text-blue-400">Contact</a>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-3 mb-8">
            {['Twitter', 'Linkedin', 'Facebook', 'Instagram'].map((social) => (
              <a key={social} href="#" className="w-10 h-10 rounded-full border border-gray-200 dark:border-gray-600 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-[#1e3a5f] dark:hover:text-blue-400 hover:border-[#1e3a5f] dark:hover:border-blue-400 transition-all bg-white dark:bg-gray-800">
                <Icon name={social} size={16} />
              </a>
            ))}
          </div>

          {/* Bottom Bar */}
          <div className="text-center pt-6 border-t border-gray-200 dark:border-gray-700">
            <p className="font-mono text-[10px] uppercase text-gray-500 dark:text-gray-400 tracking-widest mb-4">
              © 2025 Sebenza Systems Inc.
            </p>
            <div className="flex justify-center items-center gap-4 font-mono text-[10px] uppercase text-gray-400 tracking-widest">
              <a href="#" className="hover:text-gray-900 dark:hover:text-white">Privacy</a>
              <a href="#" className="hover:text-gray-900 dark:hover:text-white">Terms</a>
              <a href="#" className="hover:text-gray-900 dark:hover:text-white">Security</a>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block">
          {/* Main Footer Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 mb-16">
            {/* Brand Column */}
            <div className="col-span-2">
              <a href="#" className="flex items-center gap-3 mb-6">
                <img src="/logo.jpg" alt="Sebenza System" className="h-12 w-auto" />
              </a>
              <p className="text-gray-600 dark:text-gray-300 max-w-sm font-light text-sm leading-relaxed mb-6">
                Comprehensive business management platform for modern organizations. Streamline operations and scale with confidence.
              </p>
              <div className="flex gap-3">
                {['Twitter', 'Linkedin', 'Facebook', 'Instagram'].map((social) => (
                  <a key={social} href="#" className="w-10 h-10 rounded-full border border-gray-200 dark:border-gray-600 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-[#1e3a5f] dark:hover:text-blue-400 hover:border-[#1e3a5f] dark:hover:border-blue-400 transition-all bg-white dark:bg-gray-800">
                    <Icon name={social} size={16} />
                  </a>
                ))}
              </div>
            </div>

            {/* Products Column */}
            <div className="space-y-4">
              <h6 className="font-mono text-[11px] uppercase text-gray-500 dark:text-gray-400 tracking-[0.2em] font-bold">Products</h6>
              <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-300 font-light">
                <li><a href="#" className="hover:text-[#1e3a5f] dark:hover:text-blue-400 transition-colors">CRM & Sales</a></li>
                <li><a href="#" className="hover:text-[#1e3a5f] dark:hover:text-blue-400 transition-colors">Inventory Control</a></li>
                <li><a href="#" className="hover:text-[#1e3a5f] dark:hover:text-blue-400 transition-colors">HR & Payroll</a></li>
                <li><a href="#" className="hover:text-[#1e3a5f] dark:hover:text-blue-400 transition-colors">Project Management</a></li>
                <li><a href="#" className="hover:text-[#1e3a5f] dark:hover:text-blue-400 transition-colors">Financial Accounting</a></li>
              </ul>
            </div>

            {/* Company Column */}
            <div className="space-y-4">
              <h6 className="font-mono text-[11px] uppercase text-gray-500 dark:text-gray-400 tracking-[0.2em] font-bold">Company</h6>
              <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-300 font-light">
                <li><a href="#" className="hover:text-[#1e3a5f] dark:hover:text-blue-400 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-[#1e3a5f] dark:hover:text-blue-400 transition-colors">Careers</a></li>
                <li><a href="#blog" className="hover:text-[#1e3a5f] dark:hover:text-blue-400 transition-colors">Blog</a></li>
                <li><a href="#contact" className="hover:text-[#1e3a5f] dark:hover:text-blue-400 transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Resources Column */}
            <div className="space-y-4">
              <h6 className="font-mono text-[11px] uppercase text-gray-500 dark:text-gray-400 tracking-[0.2em] font-bold">Resources</h6>
              <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-300 font-light">
                <li><a href="#" className="hover:text-[#1e3a5f] dark:hover:text-blue-400 transition-colors">API Docs</a></li>
                <li><a href="#" className="hover:text-[#1e3a5f] dark:hover:text-blue-400 transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-[#1e3a5f] dark:hover:text-blue-400 transition-colors">Community</a></li>
                <li><a href="#" className="hover:text-[#1e3a5f] dark:hover:text-blue-400 transition-colors">Status</a></li>
              </ul>
            </div>

            {/* Newsletter Column */}
            <div className="col-span-2 md:col-span-1 space-y-4">
              <h6 className="font-mono text-[11px] uppercase text-gray-500 dark:text-gray-400 tracking-[0.2em] font-bold">Stay Updated</h6>
              <p className="text-xs text-gray-600 dark:text-gray-300 font-light">Get monthly updates on new features.</p>
              <div className="flex flex-col gap-2">
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg px-4 py-3 text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-[#1e3a5f] dark:focus:border-blue-400 transition-colors"
                />
                <button className="w-full px-4 py-3 bg-[#1e3a5f] hover:bg-[#2e5a8f] text-white rounded-lg text-xs font-mono uppercase font-bold transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-gray-200 dark:border-gray-700 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 font-mono text-[10px] uppercase text-gray-500 dark:text-gray-400 tracking-widest">
              <span>© 2025 Sebenza Systems Inc.</span>
              <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">Security</a>
            </div>
            <div className="flex items-center gap-2 font-mono text-[10px] text-gray-500 dark:text-gray-400 uppercase">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
              All Systems Operational
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

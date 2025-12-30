
import React, { useState } from 'react';
import { NAV_LINKS, NAV_LINKS_SECONDARY } from '../constants';
import { Theme, Language } from '../types';
import Icon from './Icons';

interface HeaderProps {
  theme: Theme;
  toggleTheme: () => void;
}

const LANGUAGES = [
  { code: Language.EN, label: 'EN', flag: '🇬🇧' },
  { code: Language.FR, label: 'FR', flag: '🇫🇷' },
  { code: Language.PT, label: 'PT', flag: '🇵🇹' },
];

const Header: React.FC<HeaderProps> = ({ theme, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState(Language.EN);
  const [isLangOpen, setIsLangOpen] = useState(false);

  return (
    <>
      {/* Top Bar - Desktop only */}
      <div className="fixed top-0 left-0 w-full z-50 hidden lg:block bg-[#1e3a5f] text-white py-2">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between text-xs font-mono">
          <div className="flex items-center gap-6">
            <a href="#support" className="hover:text-blue-200 transition-colors flex items-center gap-1">
              <Icon name="Headphones" size={12} /> Support
            </a>
            <a href="#contact" className="hover:text-blue-200 transition-colors flex items-center gap-1">
              <Icon name="Phone" size={12} /> Contact Us
            </a>
          </div>
          <div className="flex items-center gap-6">
            <a href="#blog" className="hover:text-blue-200 transition-colors">Blog</a>
            <a href="#callback" className="hover:text-blue-200 transition-colors flex items-center gap-1">
              <Icon name="PhoneCall" size={12} /> Request Callback
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="fixed top-0 lg:top-[36px] left-0 w-full z-40 border-b border-gray-200 dark:border-gray-700 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 md:h-20 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 md:gap-3 flex-shrink-0">
            <img
              src="/logo.jpg"
              alt="Sebenza System"
              className="h-8 md:h-12 w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 font-mono text-[11px] uppercase tracking-wider">
            {NAV_LINKS.map(link => (
              <a key={link.name} href={link.href} className="text-gray-600 dark:text-gray-300 hover:text-[#1e3a5f] dark:hover:text-blue-400 transition-colors relative group">
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#1e3a5f] dark:bg-blue-400 transition-all group-hover:w-full"></span>
              </a>
            ))}
            <div className="h-4 w-px bg-gray-300 dark:bg-gray-600"></div>
            {NAV_LINKS_SECONDARY.map(link => (
              <a key={link.name} href={link.href} className="text-gray-500 dark:text-gray-400 hover:text-[#1e3a5f] dark:hover:text-blue-400 transition-colors">
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-2 md:gap-3">
            {/* Language Selector - Hidden on mobile */}
            <div className="relative hidden md:block">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-1.5 px-2 md:px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-600 hover:border-[#1e3a5f] dark:hover:border-blue-400 transition-all text-xs font-mono bg-white dark:bg-gray-800"
              >
                <span>{LANGUAGES.find(l => l.code === currentLang)?.flag}</span>
                <span className="hidden sm:inline text-gray-700 dark:text-gray-200">{LANGUAGES.find(l => l.code === currentLang)?.label}</span>
                <Icon name="ChevronDown" size={12} className="text-gray-400" />
              </button>
              {isLangOpen && (
                <div className="absolute top-full right-0 mt-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg shadow-xl overflow-hidden min-w-[100px] z-50">
                  {LANGUAGES.map(lang => (
                    <button
                      key={lang.code}
                      onClick={() => { setCurrentLang(lang.code); setIsLangOpen(false); }}
                      className={`w-full px-4 py-2.5 text-left text-xs font-mono flex items-center gap-2 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors ${currentLang === lang.code ? 'text-[#1e3a5f] dark:text-blue-400 bg-blue-50 dark:bg-gray-700' : 'text-gray-600 dark:text-gray-300'}`}
                    >
                      <span>{lang.flag}</span> {lang.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="w-9 h-9 md:w-10 md:h-10 flex items-center justify-center rounded-full border border-gray-200 dark:border-gray-600 hover:border-[#1e3a5f] dark:hover:border-blue-400 transition-all bg-white dark:bg-gray-800"
              aria-label="Toggle theme"
            >
              <Icon name={theme === Theme.LIGHT ? "Moon" : "Sun"} size={16} className="text-gray-600 dark:text-gray-300" />
            </button>

            {/* CTA Button - Desktop */}
            <a href="#signup" className="hidden sm:flex px-4 md:px-6 py-2 md:py-2.5 bg-[#1e3a5f] hover:bg-[#2e5a8f] text-white rounded-full text-[10px] md:text-xs font-mono uppercase tracking-widest transition-all shadow-lg shadow-[#1e3a5f]/20">
              Get Started
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden w-9 h-9 flex items-center justify-center text-gray-600 dark:text-gray-300"
              aria-label="Toggle menu"
            >
              <Icon name={isMenuOpen ? "X" : "Menu"} size={22} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-700 px-4 py-6 max-h-[70vh] overflow-y-auto">
            <nav className="flex flex-col gap-2">
              {[...NAV_LINKS, ...NAV_LINKS_SECONDARY].map(link => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-700 dark:text-gray-300 hover:text-[#1e3a5f] dark:hover:text-blue-400 transition-colors py-3 px-2 font-mono text-sm uppercase tracking-wider border-b border-gray-100 dark:border-gray-800"
                >
                  {link.name}
                </a>
              ))}

              {/* Language in mobile menu */}
              <div className="pt-4 mt-2 flex items-center gap-3">
                <span className="text-xs text-gray-500 dark:text-gray-400 font-mono uppercase">Language:</span>
                <div className="flex gap-2">
                  {LANGUAGES.map(lang => (
                    <button
                      key={lang.code}
                      onClick={() => setCurrentLang(lang.code)}
                      className={`px-3 py-1.5 rounded-full text-xs font-mono ${currentLang === lang.code ? 'bg-[#1e3a5f] text-white' : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300'}`}
                    >
                      {lang.flag} {lang.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-4 mt-2 flex flex-col gap-3">
                <a href="#login" className="text-center py-3 border border-gray-200 dark:border-gray-600 rounded-full font-mono text-xs uppercase text-gray-700 dark:text-gray-300">Login</a>
                <a href="#signup" className="text-center py-3 bg-[#1e3a5f] text-white rounded-full font-mono text-xs uppercase">Get Started</a>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;

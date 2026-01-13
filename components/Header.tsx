
import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';
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
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled
        ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md py-3 shadow-sm border-b border-gray-100 dark:border-gray-800'
        : 'bg-transparent py-4 md:py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-2 md:gap-3"
        >
          <img
            src="/logo.jpg"
            alt="Sebenza System"
            className="h-9 md:h-11 w-auto"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-700 dark:text-gray-300">
          {NAV_LINKS.map(link => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-[#1e3a5f] dark:hover:text-blue-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Side Actions */}
        <div className="flex items-center gap-2 md:gap-3">
          {/* Language Selector - Desktop only */}
          <div className="relative hidden md:block">
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="flex items-center gap-1.5 px-3 py-2 rounded-full border border-gray-200 dark:border-gray-700 hover:border-[#1e3a5f] dark:hover:border-blue-400 transition-all text-xs font-medium bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm"
            >
              <span>{LANGUAGES.find(l => l.code === currentLang)?.flag}</span>
              <span className="text-gray-700 dark:text-gray-200">{LANGUAGES.find(l => l.code === currentLang)?.label}</span>
              <Icon name="ChevronDown" size={12} className="text-gray-400" />
            </button>
            {isLangOpen && (
              <div className="absolute top-full right-0 mt-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-xl overflow-hidden min-w-[100px] z-50">
                {LANGUAGES.map(lang => (
                  <button
                    key={lang.code}
                    onClick={() => { setCurrentLang(lang.code); setIsLangOpen(false); }}
                    className={`w-full px-4 py-2.5 text-left text-sm flex items-center gap-2 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors ${
                      currentLang === lang.code
                        ? 'text-[#1e3a5f] dark:text-blue-400 bg-blue-50 dark:bg-gray-700'
                        : 'text-gray-600 dark:text-gray-300'
                    }`}
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
            className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 dark:border-gray-700 hover:border-[#1e3a5f] dark:hover:border-blue-400 transition-all bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm"
            aria-label="Toggle theme"
          >
            <Icon name={theme === Theme.LIGHT ? "Moon" : "Sun"} size={18} className="text-gray-600 dark:text-gray-300" />
          </button>

          {/* Login Link - Desktop */}
          <a
            href="#login"
            className="hidden lg:block text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-[#1e3a5f] dark:hover:text-blue-400 transition-colors px-4"
          >
            Login
          </a>

          {/* CTA Button - Desktop */}
          <a
            href="#signup"
            className="hidden sm:flex px-5 md:px-6 py-2.5 bg-[#1e3a5f] hover:bg-[#2e5a8f] text-white rounded-full text-sm font-semibold transition-all shadow-lg shadow-[#1e3a5f]/20"
          >
            Get Started
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm"
            aria-label="Toggle menu"
          >
            <Icon name={isMenuOpen ? "X" : "Menu"} size={20} className="text-gray-600 dark:text-gray-300" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 shadow-xl p-6 flex flex-col gap-2 animate-in slide-in-from-top duration-300">
          {/* Home Link */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              setIsMenuOpen(false);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-lg font-medium py-3 border-b border-gray-100 dark:border-gray-800 text-gray-900 dark:text-white hover:text-[#1e3a5f] dark:hover:text-blue-400 transition-colors"
          >
            Home
          </a>
          {NAV_LINKS.map(link => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                setIsMenuOpen(false);
                const targetId = link.href.replace('#', '');
                const element = document.getElementById(targetId);
                if (element) {
                  const headerOffset = 80;
                  const elementPosition = element.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                  window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                }
              }}
              className="text-lg font-medium py-3 border-b border-gray-100 dark:border-gray-800 text-gray-900 dark:text-white hover:text-[#1e3a5f] dark:hover:text-blue-400 transition-colors"
            >
              {link.name}
            </a>
          ))}

          {/* Language in mobile menu */}
          <div className="pt-4 mt-2 flex items-center gap-3">
            <span className="text-sm text-gray-500 dark:text-gray-400">Language:</span>
            <div className="flex gap-2">
              {LANGUAGES.map(lang => (
                <button
                  key={lang.code}
                  onClick={() => setCurrentLang(lang.code)}
                  className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                    currentLang === lang.code
                      ? 'bg-[#1e3a5f] text-white'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300'
                  }`}
                >
                  {lang.flag} {lang.label}
                </button>
              ))}
            </div>
          </div>

          <div className="pt-4 mt-2 flex flex-col gap-3">
            <a
              href="#login"
              onClick={() => setIsMenuOpen(false)}
              className="text-center py-3 border border-gray-200 dark:border-gray-700 rounded-full font-semibold text-gray-700 dark:text-gray-300 hover:border-[#1e3a5f] transition-colors"
            >
              Login
            </a>
            <a
              href="#signup"
              onClick={() => setIsMenuOpen(false)}
              className="text-center py-3 bg-[#1e3a5f] hover:bg-[#2e5a8f] text-white rounded-full font-semibold transition-colors"
            >
              Get Started
            </a>
          </div>
        </div>
      )}

      {/* CSS for slide-in animation */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes slide-in-from-top {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-in.slide-in-from-top {
          animation: slide-in-from-top 0.3s ease-out forwards;
        }
      `}} />
    </header>
  );
};

export default Header;

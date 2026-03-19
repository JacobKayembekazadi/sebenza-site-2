import React, { useEffect } from 'react';
import Icon from './Icons';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  mode: 'login' | 'signup';
  onSwitchMode: () => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, mode }) => {
  useEffect(() => {
    if (!isOpen) return;
    const timer = setTimeout(() => {
      window.location.href =
        mode === 'login'
          ? 'https://app.sebenzas.com/#login'
          : 'https://app.sebenzas.com/#signup';
    }, 1000);
    return () => clearTimeout(timer);
  }, [isOpen, mode]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white dark:bg-gray-900 rounded-3xl shadow-2xl w-full max-w-sm overflow-hidden animate-modal-in">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors z-10"
        >
          <Icon name="X" size={20} />
        </button>

        {/* Content */}
        <div className="bg-[#1e3a5f] px-8 py-12 text-white text-center">
          <img src="/logo.svg" alt="Sebenza" className="w-16 h-16 mx-auto mb-4 rounded-xl" />
          <div className="flex items-center justify-center gap-3 mb-4">
            <Icon name="Loader2" size={22} className="animate-spin text-blue-200" />
            <p className="text-lg font-semibold text-white">Redirecting to Sebenza...</p>
          </div>
          <p className="text-blue-100/60 text-sm">
            {mode === 'login'
              ? 'Taking you to the login page'
              : 'Taking you to the sign up page'}
          </p>
        </div>
      </div>

      {/* Animation styles */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes modal-in {
          from { opacity: 0; transform: scale(0.95) translateY(10px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        .animate-modal-in {
          animation: modal-in 0.3s ease-out forwards;
        }
      `}} />
    </div>
  );
};

export default AuthModal;

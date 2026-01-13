
import React from 'react';
import Icon from './Icons';

interface IntegrationsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const INTEGRATIONS = [
  { category: 'Communication', items: [
    { name: 'WhatsApp Business', icon: 'MessageCircle', color: 'text-green-500' },
    { name: 'Slack', icon: 'Hash', color: 'text-purple-500' },
    { name: 'Microsoft Teams', icon: 'Users', color: 'text-blue-500' },
    { name: 'Zoom', icon: 'Video', color: 'text-blue-400' },
  ]},
  { category: 'Email & Calendar', items: [
    { name: 'Gmail', icon: 'Mail', color: 'text-red-500' },
    { name: 'Outlook', icon: 'Mail', color: 'text-blue-600' },
    { name: 'Google Calendar', icon: 'Calendar', color: 'text-blue-500' },
    { name: 'iCloud', icon: 'Cloud', color: 'text-gray-500' },
  ]},
  { category: 'Payments', items: [
    { name: 'Stripe', icon: 'CreditCard', color: 'text-purple-500' },
    { name: 'PayPal', icon: 'DollarSign', color: 'text-blue-600' },
    { name: 'Square', icon: 'Square', color: 'text-gray-800 dark:text-gray-200' },
    { name: 'Payfast', icon: 'Zap', color: 'text-teal-500' },
  ]},
  { category: 'Banking', items: [
    { name: 'Plaid', icon: 'Landmark', color: 'text-green-600' },
    { name: 'Yodlee', icon: 'Building', color: 'text-blue-500' },
    { name: 'Standard Bank', icon: 'Landmark', color: 'text-blue-700' },
    { name: 'FNB', icon: 'Landmark', color: 'text-teal-600' },
  ]},
  { category: 'Accounting', items: [
    { name: 'QuickBooks', icon: 'Calculator', color: 'text-green-600' },
    { name: 'Xero', icon: 'PieChart', color: 'text-blue-500' },
    { name: 'FreshBooks', icon: 'FileText', color: 'text-green-500' },
    { name: 'Sage', icon: 'BarChart', color: 'text-green-700' },
  ]},
  { category: 'Storage & Files', items: [
    { name: 'Google Drive', icon: 'HardDrive', color: 'text-yellow-500' },
    { name: 'Dropbox', icon: 'Box', color: 'text-blue-500' },
    { name: 'OneDrive', icon: 'Cloud', color: 'text-blue-600' },
    { name: 'AWS S3', icon: 'Database', color: 'text-orange-500' },
  ]},
];

const IntegrationsModal: React.FC<IntegrationsModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white dark:bg-gray-900 rounded-3xl shadow-2xl w-full max-w-4xl max-h-[85vh] overflow-hidden animate-modal-in">
        {/* Header */}
        <div className="sticky top-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 px-8 py-6 flex items-center justify-between z-10">
          <div>
            <h2 className="text-2xl font-black text-gray-900 dark:text-white">
              200+ Integrations
            </h2>
            <p className="text-gray-500 dark:text-gray-400 mt-1">
              Connect Sebenza with the tools you already use
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
          >
            <Icon name="X" size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="p-8 overflow-y-auto max-h-[calc(85vh-100px)]">
          <div className="grid gap-10">
            {INTEGRATIONS.map((category) => (
              <div key={category.category}>
                <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-4">
                  {category.category}
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {category.items.map((item) => (
                    <div
                      key={item.name}
                      className="group p-4 rounded-2xl border border-gray-100 dark:border-gray-700 hover:border-[#1e3a5f] dark:hover:border-blue-400 hover:bg-[#1e3a5f]/5 dark:hover:bg-blue-900/20 transition-all cursor-pointer"
                    >
                      <div className={`w-10 h-10 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center mb-3 ${item.color} group-hover:scale-110 transition-transform`}>
                        <Icon name={item.icon} size={20} />
                      </div>
                      <p className="font-semibold text-gray-900 dark:text-white text-sm">
                        {item.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Request Integration */}
          <div className="mt-12 p-8 bg-gray-50 dark:bg-gray-800/50 rounded-2xl text-center">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
              Don't see what you need?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              We're always adding new integrations. Let us know what you need.
            </p>
            <button className="px-6 py-3 bg-[#1e3a5f] hover:bg-[#2e5a8f] text-white rounded-full font-semibold transition-all inline-flex items-center gap-2">
              <Icon name="MessageSquare" size={18} />
              Request an Integration
            </button>
          </div>
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

export default IntegrationsModal;

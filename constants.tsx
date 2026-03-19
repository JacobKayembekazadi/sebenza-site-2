
import React from 'react';
import { IndustryData, DashboardMetric, FeatureData, FAQData, PricingTier } from './types';

// ============================================
// COMPLETE FEATURE LIST (12 Features per spec)
// ============================================
export const FEATURES: FeatureData[] = [
  {
    icon: 'Users',
    title: 'Customer Relationship Management',
    description: 'Manage clients, track interactions, generate estimates and invoices, and maintain detailed communication history all in one place.'
  },
  {
    icon: 'Package',
    title: 'Inventory & Stock Management',
    description: 'Track stock across multiple warehouses, manage transfers, monitor stock levels, and generate comprehensive manifests with real-time updates.'
  },
  {
    icon: 'Banknote',
    title: 'HR & Payroll Management',
    description: 'Streamline employee management, automate payroll processing, track attendance, and maintain comprehensive employee records effortlessly.'
  },
  {
    icon: 'BarChart3',
    title: 'Accounting & Finance',
    description: 'Manage expenses, track payments, generate financial reports, and maintain accurate books with integrated accounting tools.'
  },
  {
    icon: 'FileText',
    title: 'Document Management',
    description: 'Upload, organize, and share documents securely. Attach files to clients, projects, or transactions for easy access.'
  },
  {
    icon: 'LineChart',
    title: 'Advanced Analytics',
    description: 'Get actionable insights with comprehensive reports, visual dashboards, and data-driven recommendations.'
  },
  {
    icon: 'ShieldCheck',
    title: 'Enterprise Security',
    description: 'Role-based access control, data encryption, secure authentication, and compliance with industry standards.'
  },
  {
    icon: 'CheckSquare',
    title: 'Task & Project Management',
    description: 'Create tasks, set deadlines, track progress, schedule meetings, and collaborate with your team in real-time.'
  },
  {
    icon: 'Zap',
    title: 'Automation & Workflows',
    description: 'Automate repetitive tasks, set up custom workflows, and integrate with your favorite tools seamlessly.'
  },
  {
    icon: 'Globe',
    title: 'Multi-Currency Support',
    description: 'Operate globally with support for multiple currencies, languages, and international payment methods.'
  },
  {
    icon: 'Activity',
    title: 'Real-Time Reporting',
    description: 'Access up-to-date reports and dashboards with live data synchronization across all modules.'
  },
  {
    icon: 'Smartphone',
    title: 'Mobile Responsive',
    description: 'Access your business data anywhere, anytime from any device with our fully responsive platform.'
  }
];

// ============================================
// COMPLETE INDUSTRIES LIST (21 industries per spec)
// ============================================
export const INDUSTRIES: IndustryData[] = [
  {
    id: 'law',
    title: "Law Firm Management",
    icon: "Scale",
    description: "Streamline case management, billing, and client communication for legal practices.",
    features: ["Dashboard", "Clients/CRM", "Files/Documents", "Estimates/Quotes", "Invoices", "Retainer/Subscription Invoices", "Payments", "Expenses", "Time Tracking", "Accounting", "My Services", "Task Management", "Meeting Management", "Calendar Management", "Case Management", "Employee/HR/Payroll", "My Package", "Add My Bank", "Payment Gateway", "Reports", "Add-ons", "Supports", "Help/Learning Center", "WhatsApp", "News & Updates", "Live Chat", "Settings"]
  },
  {
    id: 'construction',
    title: "Construction Management",
    icon: "HardHat",
    description: "Manage projects, costs, and resources for construction and engineering firms.",
    features: ["Dashboard", "Clients/CRM", "Files/Documents", "Estimates/Quotes", "Invoices", "Retainer/Subscription Invoices", "Purchase Orders", "Payments", "Expenses", "Time Tracking", "Accounting", "My Services", "Task Management", "Meeting Management", "Calendar Management", "Project Management", "Stock/Inventory Management", "Employee/HR/Payroll", "My Package", "Add My Bank", "Payment Gateway", "Reports", "Add-ons", "Supports", "Help/Learning Center", "WhatsApp", "News & Updates", "Live Chat", "Settings"]
  },
  {
    id: 'project',
    title: "Project Management",
    icon: "FolderKanban",
    description: "Track progress, manage teams, and deliver projects on time and budget.",
    features: ["Dashboard", "Clients/CRM", "Files/Documents", "Estimates/Quotes", "Invoices", "Retainer/Subscription Invoices", "Purchase Orders", "Payments", "Expenses", "Time Tracking", "Accounting", "My Services", "Task Management", "Meeting Management", "Calendar Management", "Project Management", "Stock/Inventory Management", "Employee/HR/Payroll", "My Package", "Add My Bank", "Payment Gateway", "Reports", "Add-ons", "Supports", "Help/Learning Center", "WhatsApp", "News & Updates", "Live Chat", "Settings"]
  },
  {
    id: 'event',
    title: "Event Management",
    icon: "CalendarDays",
    description: "Plan, organize, and execute successful events with integrated management tools.",
    features: ["Dashboard", "Clients/CRM", "Files/Documents", "Estimates/Quotes", "Invoices", "Retainer/Subscription Invoices", "Purchase Orders", "Payments", "Expenses", "Accounting", "My Services", "Task Management", "Meeting Management", "Calendar Management", "Event Management", "Stock/Inventory Management", "Employee/HR/Payroll", "My Package", "Add My Bank", "Payment Gateway", "Reports", "Add-ons", "Supports", "Help/Learning Center", "WhatsApp", "News & Updates", "Live Chat", "Settings"]
  },
  {
    id: 'logistics',
    title: "Logistics Management",
    icon: "Truck",
    description: "Optimize your supply chain with comprehensive fleet, inventory, and order management tools.",
    features: ["Dashboard", "Clients/CRM", "Files/Documents", "Estimates/Quotes", "Invoices", "Retainer/Subscription Invoices", "Purchase Orders", "Payments", "Expenses", "Accounting", "My Services", "Task Management", "Meeting Management", "Calendar Management", "Stock/Inventory Management", "Employee/HR/Payroll", "My Package", "Add My Bank", "Payment Gateway", "Reports", "Add-ons", "Supports", "Help/Learning Center", "WhatsApp", "News & Updates", "Live Chat", "Settings"]
  },
  {
    id: 'retail',
    title: "Retail Management",
    icon: "ShoppingBag",
    description: "Manage sales, inventory, and customer relationships for retail businesses.",
    features: ["Dashboard", "Clients/CRM", "Files/Documents", "Estimates/Quotes", "Invoices", "Retainer/Subscription Invoices", "Purchase Orders", "Payments", "Expenses", "Accounting", "My Services", "Task Management", "Meeting Management", "Calendar Management", "Stock/Inventory Management", "Point of Sale", "Promo Codes/Voucher", "Employee/HR/Payroll", "My Package", "Add My Bank", "Payment Gateway", "Reports", "Add-ons", "Supports", "Help/Learning Center", "WhatsApp", "News & Updates", "Live Chat", "Settings"]
  },
  {
    id: 'general',
    title: "General Services",
    icon: "Briefcase",
    description: "Universal tools for businesses of all types to manage operations efficiently.",
    features: ["Dashboard", "Clients/CRM", "Files/Documents", "Estimates/Quotes", "Invoices", "Retainer/Subscription Invoices", "Purchase Orders", "Payments", "Expenses", "Accounting", "My Services", "Task Management", "Meeting Management", "Calendar Management", "Employee/HR/Payroll", "My Assets", "My Package", "Add My Bank", "Payment Gateway", "Reports", "Add-ons", "Supports", "Help/Learning Center", "WhatsApp", "News & Updates", "Live Chat", "Settings"]
  },
  {
    id: 'accountants',
    title: "Accountants",
    icon: "Calculator",
    description: "Comprehensive accounting tools for bookkeepers and financial professionals.",
    features: ["Dashboard", "Clients/CRM", "Files/Documents", "Estimates/Quotes", "Invoices", "Retainer/Subscription Invoices", "Payments", "Expenses", "Time Tracking", "Accounting", "Financial Reports", "Tax Management", "My Services", "Task Management", "Meeting Management", "Calendar Management", "Employee/HR/Payroll", "My Package", "Add My Bank", "Payment Gateway", "Reports", "Add-ons", "Supports", "Help/Learning Center", "WhatsApp", "News & Updates", "Live Chat", "Settings"]
  },
  {
    id: 'cleaning',
    title: "Cleaning & Facility Management",
    icon: "Sparkles",
    description: "Schedule, track, and manage cleaning services and facility maintenance.",
    features: ["Dashboard", "Clients/CRM", "Files/Documents", "Estimates/Quotes", "Invoices", "Retainer/Subscription Invoices", "Payments", "Expenses", "Time Tracking", "Accounting", "My Services", "Task Management", "Meeting Management", "Calendar Management", "Service Scheduling", "Employee/HR/Payroll", "My Package", "Add My Bank", "Payment Gateway", "Reports", "Add-ons", "Supports", "Help/Learning Center", "WhatsApp", "News & Updates", "Live Chat", "Settings"]
  },
  {
    id: 'healthcare',
    title: "Healthcare & Medical Services",
    icon: "Heart",
    description: "Manage patient records, appointments, and billing for healthcare providers.",
    features: ["Dashboard", "Clients/CRM", "Patient Records", "Files/Documents", "Estimates/Quotes", "Invoices", "Retainer/Subscription Invoices", "Payments", "Expenses", "Accounting", "Appointment Scheduling", "My Services", "Task Management", "Meeting Management", "Calendar Management", "Employee/HR/Payroll", "My Package", "Add My Bank", "Payment Gateway", "Reports", "Add-ons", "Supports", "Help/Learning Center", "WhatsApp", "News & Updates", "Live Chat", "Settings"]
  },
  {
    id: 'architectural',
    title: "Architectural & Building Services",
    icon: "Building2",
    description: "Manage architectural projects, blueprints, and client communications.",
    features: ["Dashboard", "Clients/CRM", "Files/Documents", "Estimates/Quotes", "Invoices", "Retainer/Subscription Invoices", "Purchase Orders", "Payments", "Expenses", "Time Tracking", "Accounting", "My Services", "Task Management", "Meeting Management", "Calendar Management", "Project Management", "Employee/HR/Payroll", "My Package", "Add My Bank", "Payment Gateway", "Reports", "Add-ons", "Supports", "Help/Learning Center", "WhatsApp", "News & Updates", "Live Chat", "Settings"]
  },
  {
    id: 'consulting',
    title: "Consulting & Advisory Services",
    icon: "MessageSquare",
    description: "Streamline client engagements, proposals, and advisory services.",
    features: ["Dashboard", "Clients/CRM", "Files/Documents", "Estimates/Quotes", "Invoices", "Retainer/Subscription Invoices", "Payments", "Expenses", "Time Tracking", "Accounting", "My Services", "Task Management", "Meeting Management", "Calendar Management", "Employee/HR/Payroll", "My Package", "Add My Bank", "Payment Gateway", "Reports", "Add-ons", "Supports", "Help/Learning Center", "WhatsApp", "News & Updates", "Live Chat", "Settings"]
  },
  {
    id: 'digital',
    title: "Digital & Technology Services",
    icon: "Monitor",
    description: "Manage tech projects, development cycles, and client deliverables.",
    features: ["Dashboard", "Clients/CRM", "Files/Documents", "Estimates/Quotes", "Invoices", "Retainer/Subscription Invoices", "Purchase Orders", "Payments", "Expenses", "Time Tracking", "Accounting", "My Services", "Task Management", "Meeting Management", "Calendar Management", "Project Management", "Employee/HR/Payroll", "My Package", "Add My Bank", "Payment Gateway", "Reports", "Add-ons", "Supports", "Help/Learning Center", "WhatsApp", "News & Updates", "Live Chat", "Settings"]
  },
  {
    id: 'electrical',
    title: "Electrical Services",
    icon: "Plug",
    description: "Schedule jobs, track inventory, and manage electrical service operations.",
    features: ["Dashboard", "Clients/CRM", "Files/Documents", "Estimates/Quotes", "Invoices", "Retainer/Subscription Invoices", "Purchase Orders", "Payments", "Expenses", "Time Tracking", "Accounting", "My Services", "Task Management", "Meeting Management", "Calendar Management", "Stock/Inventory Management", "Employee/HR/Payroll", "My Package", "Add My Bank", "Payment Gateway", "Reports", "Add-ons", "Supports", "Help/Learning Center", "WhatsApp", "News & Updates", "Live Chat", "Settings"]
  },
  {
    id: 'products',
    title: "Products & Goods",
    icon: "Box",
    description: "Manage product inventory, sales, and distribution channels.",
    features: ["Dashboard", "Clients/CRM", "Files/Documents", "Estimates/Quotes", "Invoices", "Retainer/Subscription Invoices", "Purchase Orders", "Payments", "Expenses", "Accounting", "My Services", "Task Management", "Meeting Management", "Calendar Management", "Stock/Inventory Management", "Employee/HR/Payroll", "My Package", "Add My Bank", "Payment Gateway", "Reports", "Add-ons", "Supports", "Help/Learning Center", "WhatsApp", "News & Updates", "Live Chat", "Settings"]
  },
  {
    id: 'materials',
    title: "Materials, Supply & Delivery",
    icon: "PackageCheck",
    description: "Manage supply chain, material tracking, and delivery logistics.",
    features: ["Dashboard", "Clients/CRM", "Files/Documents", "Estimates/Quotes", "Invoices", "Retainer/Subscription Invoices", "Purchase Orders", "Payments", "Expenses", "Accounting", "My Services", "Task Management", "Meeting Management", "Calendar Management", "Stock/Inventory Management", "Delivery Tracking", "Employee/HR/Payroll", "My Package", "Add My Bank", "Payment Gateway", "Reports", "Add-ons", "Supports", "Help/Learning Center", "WhatsApp", "News & Updates", "Live Chat", "Settings"]
  },
  {
    id: 'salon',
    title: "Salon, Beauty & Aesthetic",
    icon: "Scissors",
    description: "Manage appointments, client preferences, and beauty service operations.",
    features: ["Dashboard", "Clients/CRM", "Files/Documents", "Estimates/Quotes", "Invoices", "Retainer/Subscription Invoices", "Payments", "Expenses", "Accounting", "Appointment Booking", "My Services", "Task Management", "Meeting Management", "Calendar Management", "Stock/Inventory Management", "Employee/HR/Payroll", "My Package", "Add My Bank", "Payment Gateway", "Reports", "Add-ons", "Supports", "Help/Learning Center", "WhatsApp", "News & Updates", "Live Chat", "Settings"]
  },
  {
    id: 'engineering',
    title: "Engineering Consulting Services",
    icon: "Wrench",
    description: "Manage engineering projects, technical consulting, and client engagements.",
    features: ["Dashboard", "Clients/CRM", "Files/Documents", "Estimates/Quotes", "Invoices", "Retainer/Subscription Invoices", "Purchase Orders", "Payments", "Expenses", "Time Tracking", "Accounting", "My Services", "Task Management", "Meeting Management", "Calendar Management", "Project Management", "Employee/HR/Payroll", "My Package", "Add My Bank", "Payment Gateway", "Reports", "Add-ons", "Supports", "Help/Learning Center", "WhatsApp", "News & Updates", "Live Chat", "Settings"]
  },
  {
    id: 'hospitality',
    title: "Hospitality & Travel Services",
    icon: "Plane",
    description: "Manage bookings, guest services, and hospitality operations.",
    features: ["Dashboard", "Clients/CRM", "Files/Documents", "Estimates/Quotes", "Invoices", "Retainer/Subscription Invoices", "Payments", "Expenses", "Accounting", "Booking Management", "My Services", "Task Management", "Meeting Management", "Calendar Management", "Stock/Inventory Management", "Employee/HR/Payroll", "My Package", "Add My Bank", "Payment Gateway", "Reports", "Add-ons", "Supports", "Help/Learning Center", "WhatsApp", "News & Updates", "Live Chat", "Settings"]
  },
  {
    id: 'hr',
    title: "Human Resources & Training",
    icon: "GraduationCap",
    description: "Manage recruitment, training programs, and HR consulting services.",
    features: ["Dashboard", "Clients/CRM", "Files/Documents", "Estimates/Quotes", "Invoices", "Retainer/Subscription Invoices", "Payments", "Expenses", "Time Tracking", "Accounting", "My Services", "Task Management", "Meeting Management", "Calendar Management", "Training Management", "Employee/HR/Payroll", "My Package", "Add My Bank", "Payment Gateway", "Reports", "Add-ons", "Supports", "Help/Learning Center", "WhatsApp", "News & Updates", "Live Chat", "Settings"]
  },
  {
    id: 'realestate',
    title: "Real Estate & Auctions",
    icon: "Home",
    description: "Manage property listings, auctions, and real estate transactions.",
    features: ["Dashboard", "Clients/CRM", "Files/Documents", "Estimates/Quotes", "Invoices", "Retainer/Subscription Invoices", "Payments", "Expenses", "Accounting", "Property Listings", "Auction Management", "My Services", "Task Management", "Meeting Management", "Calendar Management", "Employee/HR/Payroll", "My Package", "Add My Bank", "Payment Gateway", "Reports", "Add-ons", "Supports", "Help/Learning Center", "WhatsApp", "News & Updates", "Live Chat", "Settings"]
  }
];

// ============================================
// PRICING TIERS
// ============================================
export const PRICING_TIERS: PricingTier[] = [
  {
    id: 'sebenza',
    name: 'Sebenza',
    price: 'R300',
    period: '/month',
    description: 'Base price for 1 user. Add team members at R100/user/month.',
    features: [
      'All features included',
      'Client & Project Management',
      'Billing & Invoicing',
      'HR & Payroll',
      'Document Management (2GB free)',
      'Time Tracking',
      'AI Assistant',
      'Unlimited Cases/Projects',
      'Multi-currency Support',
      'Priority Support'
    ],
    isPopular: true,
    cta: 'Get Started'
  }
];

// ============================================
// FAQ DATA
// ============================================
export const FAQ_DATA: FAQData[] = [
  {
    question: "What is Sebenza System?",
    answer: "Sebenza System is a comprehensive business management platform that brings together CRM, Inventory, HR, Accounting, and Task Management into one integrated solution. It's designed to help businesses of all sizes streamline operations, reduce costs, and make data-driven decisions."
  },
  {
    question: "How do I get started?",
    answer: "Simply click 'Get Started' and create your account. You get full access from day one — all features, no restrictions. Cancel anytime."
  },
  {
    question: "Can I switch plans later?",
    answer: "Absolutely. You can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle, and we'll prorate any differences."
  },
  {
    question: "Is my data secure?",
    answer: "Security is our top priority. We use AES-256 encryption for data at rest and in transit, implement role-based access controls, and are SOC2 compliant. Your data is backed up daily across multiple secure data centers."
  },
  {
    question: "Which industries does Sebenza support?",
    answer: "Sebenza is designed for 21+ industries including Law Firms, Construction, Retail, Healthcare, Hospitality, Real Estate, Consulting, and many more. Each industry template comes with specialized features and workflows."
  },
  {
    question: "Can I integrate Sebenza with other tools?",
    answer: "Yes! Sebenza integrates with 200+ popular tools including WhatsApp Business, Gmail, Outlook, Stripe, PayPal, QuickBooks, and major banking institutions. We also offer API access for custom integrations."
  },
  {
    question: "Do you offer training and support?",
    answer: "We provide 24/7 customer support via live chat, email, and phone. Our Help Center includes comprehensive documentation, video tutorials, and best practice guides. Enterprise customers receive dedicated account managers and custom training."
  },
  {
    question: "Is there a mobile app?",
    answer: "Our platform is fully mobile-responsive, allowing you to access your business data from any device. Native iOS and Android apps are coming soon for an even better mobile experience."
  }
];

// ============================================
// DASHBOARD METRICS
// ============================================
export const MOCK_METRICS: DashboardMetric[] = [
  { label: 'Admin Overhead Reduced', value: '-40%', change: 'This Quarter', isPositive: true, icon: 'Clock' },
  { label: 'Billing Velocity', value: '2.4x', change: 'vs Previous Year', isPositive: true, icon: 'TrendingUp' },
  { label: 'Inventory Accuracy', value: '99.9%', change: 'Real-time sync', isPositive: true, icon: 'Target' },
];

// ============================================
// NAVIGATION LINKS
// ============================================
export const NAV_LINKS = [
  { name: 'Features', href: '#features' },
  { name: 'Industries', href: '#industries' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'FAQs', href: '#faq' },
];

export const NAV_LINKS_SECONDARY = [
  { name: 'Blog', href: '#blog' },
  { name: 'Support', href: '#support' },
  { name: 'Contact', href: '#contact' },
];

// Translated content for all data-driven sections
// Each function returns the data in the correct language

export interface FeatureItem {
  icon: string;
  title: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface IndustryItem {
  id: string;
  name: string;
  icon: string;
  description: string;
  color: string;
}

const FEATURES_DATA: Record<string, FeatureItem[]> = {
  en: [
    { icon: 'Users', title: 'Customer Relationship Management', description: 'Manage clients, track interactions, generate estimates and invoices, and maintain detailed communication history.' },
    { icon: 'Package', title: 'Inventory & Stock Management', description: 'Track stock across multiple warehouses, manage transfers, monitor stock levels with real-time updates.' },
    { icon: 'Banknote', title: 'HR & Payroll Management', description: 'Streamline employee management, automate payroll processing, track attendance, and maintain employee records.' },
    { icon: 'BarChart3', title: 'Accounting & Finance', description: 'Manage expenses, track payments, generate financial reports, and maintain accurate books.' },
    { icon: 'FileText', title: 'Document Management', description: 'Organize, store, and share documents securely with version control and collaboration tools.' },
    { icon: 'PieChart', title: 'Advanced Analytics', description: 'Make data-driven decisions with real-time dashboards, custom reports, and business intelligence.' },
    { icon: 'Shield', title: 'Enterprise Security', description: 'Role-based access control, audit trails, data encryption, and compliance management.' },
    { icon: 'CheckSquare', title: 'Task & Project Management', description: 'Assign tasks, track milestones, manage deadlines, and collaborate with your team in real time.' },
    { icon: 'Zap', title: 'Automation & Workflows', description: 'Automate repetitive tasks, create custom workflows, and streamline your business processes.' },
    { icon: 'Globe', title: 'Multi-Currency Support', description: 'Operate across borders with multi-currency invoicing, exchange rate management, and localized pricing.' },
    { icon: 'Activity', title: 'Real-Time Reporting', description: 'Monitor business performance with live dashboards, scheduled reports, and automated alerts.' },
    { icon: 'Smartphone', title: 'Mobile Responsive', description: 'Access your business from anywhere with a fully responsive interface that works on any device.' },
  ],
  fr: [
    { icon: 'Users', title: 'Gestion de la Relation Client', description: 'G\u00e9rez les clients, suivez les interactions, g\u00e9n\u00e9rez des devis et factures, et maintenez un historique de communication.' },
    { icon: 'Package', title: 'Gestion des Stocks & Inventaire', description: 'Suivez les stocks dans plusieurs entrep\u00f4ts, g\u00e9rez les transferts et surveillez les niveaux en temps r\u00e9el.' },
    { icon: 'Banknote', title: 'Gestion RH & Paie', description: 'Simplifiez la gestion des employ\u00e9s, automatisez le traitement de la paie et suivez les pr\u00e9sences.' },
    { icon: 'BarChart3', title: 'Comptabilit\u00e9 & Finance', description: 'G\u00e9rez les d\u00e9penses, suivez les paiements, g\u00e9n\u00e9rez des rapports financiers et tenez des livres pr\u00e9cis.' },
    { icon: 'FileText', title: 'Gestion Documentaire', description: 'Organisez, stockez et partagez des documents en toute s\u00e9curit\u00e9 avec contr\u00f4le de version.' },
    { icon: 'PieChart', title: 'Analyses Avanc\u00e9es', description: 'Prenez des d\u00e9cisions bas\u00e9es sur les donn\u00e9es avec des tableaux de bord en temps r\u00e9el et des rapports personnalis\u00e9s.' },
    { icon: 'Shield', title: 'S\u00e9curit\u00e9 Entreprise', description: "Contr\u00f4le d'acc\u00e8s par r\u00f4le, pistes d'audit, chiffrement des donn\u00e9es et gestion de la conformit\u00e9." },
    { icon: 'CheckSquare', title: 'Gestion de T\u00e2ches & Projets', description: 'Assignez des t\u00e2ches, suivez les jalons, g\u00e9rez les d\u00e9lais et collaborez en temps r\u00e9el.' },
    { icon: 'Zap', title: 'Automatisation & Flux de Travail', description: 'Automatisez les t\u00e2ches r\u00e9p\u00e9titives, cr\u00e9ez des flux personnalis\u00e9s et optimisez vos processus.' },
    { icon: 'Globe', title: 'Support Multi-Devises', description: 'Op\u00e9rez \u00e0 travers les fronti\u00e8res avec la facturation multi-devises et la gestion des taux de change.' },
    { icon: 'Activity', title: 'Rapports en Temps R\u00e9el', description: 'Surveillez les performances avec des tableaux de bord en direct, des rapports planifi\u00e9s et des alertes.' },
    { icon: 'Smartphone', title: 'Responsive Mobile', description: 'Acc\u00e9dez \u00e0 votre entreprise depuis partout avec une interface enti\u00e8rement responsive.' },
  ],
  pt: [
    { icon: 'Users', title: 'Gest\u00e3o de Relacionamento com Clientes', description: 'Gerencie clientes, acompanhe intera\u00e7\u00f5es, gere or\u00e7amentos e faturas, e mantenha o hist\u00f3rico de comunica\u00e7\u00e3o.' },
    { icon: 'Package', title: 'Gest\u00e3o de Estoque & Invent\u00e1rio', description: 'Acompanhe estoques em m\u00faltiplos armaz\u00e9ns, gerencie transfer\u00eancias e monitore n\u00edveis em tempo real.' },
    { icon: 'Banknote', title: 'Gest\u00e3o de RH & Folha de Pagamento', description: 'Simplifique a gest\u00e3o de funcion\u00e1rios, automatize o processamento da folha e acompanhe presen\u00e7as.' },
    { icon: 'BarChart3', title: 'Contabilidade & Finan\u00e7as', description: 'Gerencie despesas, acompanhe pagamentos, gere relat\u00f3rios financeiros e mantenha livros precisos.' },
    { icon: 'FileText', title: 'Gest\u00e3o de Documentos', description: 'Organize, armazene e compartilhe documentos com seguran\u00e7a, controle de vers\u00e3o e colabora\u00e7\u00e3o.' },
    { icon: 'PieChart', title: 'An\u00e1lises Avan\u00e7adas', description: 'Tome decis\u00f5es baseadas em dados com paineis em tempo real e relat\u00f3rios personalizados.' },
    { icon: 'Shield', title: 'Seguran\u00e7a Empresarial', description: 'Controle de acesso por fun\u00e7\u00e3o, trilhas de auditoria, criptografia e gest\u00e3o de conformidade.' },
    { icon: 'CheckSquare', title: 'Gest\u00e3o de Tarefas & Projetos', description: 'Atribua tarefas, acompanhe marcos, gerencie prazos e colabore em tempo real.' },
    { icon: 'Zap', title: 'Automa\u00e7\u00e3o & Fluxos de Trabalho', description: 'Automatize tarefas repetitivas, crie fluxos personalizados e otimize seus processos.' },
    { icon: 'Globe', title: 'Suporte Multi-Moeda', description: 'Opere entre fronteiras com fatura\u00e7\u00e3o multi-moeda e gest\u00e3o de taxas de c\u00e2mbio.' },
    { icon: 'Activity', title: 'Relat\u00f3rios em Tempo Real', description: 'Monitore o desempenho com paineis ao vivo, relat\u00f3rios agendados e alertas autom\u00e1ticos.' },
    { icon: 'Smartphone', title: 'Responsivo M\u00f3vel', description: 'Acesse seu neg\u00f3cio de qualquer lugar com uma interface totalmente responsiva.' },
  ],
};

const FAQ_DATA: Record<string, FAQItem[]> = {
  en: [
    { question: 'What is Sebenza System?', answer: 'Sebenza System is a comprehensive business management platform that brings together CRM, Inventory, HR, Accounting, and Task Management into one integrated solution.' },
    { question: 'How do I get started?', answer: "Simply click 'Get Started' and create your account. You get full access from day one \u2014 all features, no restrictions. Cancel anytime." },
    { question: 'Can I switch plans later?', answer: 'Absolutely. You can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.' },
    { question: 'Is my data secure?', answer: 'Security is our top priority. We use AES-256 encryption, role-based access controls, and daily backups across secure data centers.' },
    { question: 'Which industries does Sebenza support?', answer: 'Sebenza supports 21+ industries including Law Firms, Construction, Retail, Healthcare, Hospitality, Real Estate, Consulting, and more.' },
    { question: 'Do you offer a free trial?', answer: 'Yes! Every new account gets a 14-day free trial with full access to all features. No credit card required.' },
  ],
  fr: [
    { question: "Qu'est-ce que Sebenza System ?", answer: "Sebenza System est une plateforme compl\u00e8te de gestion d'entreprise qui r\u00e9unit CRM, Inventaire, RH, Comptabilit\u00e9 et Gestion de T\u00e2ches en une seule solution." },
    { question: 'Comment commencer ?', answer: "Cliquez simplement sur 'Commencer' et cr\u00e9ez votre compte. Vous avez un acc\u00e8s complet d\u00e8s le premier jour \u2014 toutes les fonctionnalit\u00e9s, sans restriction." },
    { question: 'Puis-je changer de forfait plus tard ?', answer: "Absolument. Vous pouvez augmenter ou r\u00e9duire votre forfait \u00e0 tout moment. Les changements prennent effet au d\u00e9but du prochain cycle." },
    { question: 'Mes donn\u00e9es sont-elles s\u00e9curis\u00e9es ?', answer: "La s\u00e9curit\u00e9 est notre priorit\u00e9. Nous utilisons le chiffrement AES-256, les contr\u00f4les d'acc\u00e8s par r\u00f4le et des sauvegardes quotidiennes." },
    { question: 'Quelles industries Sebenza prend-il en charge ?', answer: "Sebenza prend en charge 21+ industries dont les cabinets d'avocats, la construction, le commerce, la sant\u00e9, l'h\u00f4tellerie, l'immobilier et bien plus." },
    { question: "Offrez-vous un essai gratuit ?", answer: "Oui ! Chaque nouveau compte b\u00e9n\u00e9ficie d'un essai gratuit de 14 jours avec acc\u00e8s complet. Aucune carte de cr\u00e9dit requise." },
  ],
  pt: [
    { question: 'O que \u00e9 o Sebenza System?', answer: 'Sebenza System \u00e9 uma plataforma completa de gest\u00e3o empresarial que re\u00fane CRM, Invent\u00e1rio, RH, Contabilidade e Gest\u00e3o de Tarefas em uma solu\u00e7\u00e3o integrada.' },
    { question: 'Como come\u00e7o?', answer: "Basta clicar em 'Come\u00e7ar' e criar sua conta. Voc\u00ea tem acesso completo desde o primeiro dia \u2014 todos os recursos, sem restri\u00e7\u00f5es." },
    { question: 'Posso mudar de plano depois?', answer: 'Com certeza. Voc\u00ea pode aumentar ou reduzir seu plano a qualquer momento. As mudan\u00e7as entram em vigor no in\u00edcio do pr\u00f3ximo ciclo.' },
    { question: 'Meus dados est\u00e3o seguros?', answer: 'Seguran\u00e7a \u00e9 nossa prioridade. Usamos criptografia AES-256, controles de acesso por fun\u00e7\u00e3o e backups di\u00e1rios.' },
    { question: 'Quais ind\u00fastrias o Sebenza suporta?', answer: 'Sebenza suporta 21+ ind\u00fastrias incluindo Escrit\u00f3rios de Advocacia, Constru\u00e7\u00e3o, Varejo, Sa\u00fade, Hotelaria, Im\u00f3veis e muito mais.' },
    { question: 'Voc\u00eas oferecem teste gr\u00e1tis?', answer: 'Sim! Toda nova conta recebe 14 dias de teste gr\u00e1tis com acesso completo. Sem cart\u00e3o de cr\u00e9dito.' },
  ],
};

export function getFeatures(lang: string): FeatureItem[] {
  return FEATURES_DATA[lang] || FEATURES_DATA.en;
}

export function getFAQ(lang: string): FAQItem[] {
  return FAQ_DATA[lang] || FAQ_DATA.en;
}

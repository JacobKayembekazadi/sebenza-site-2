import React, { createContext, useContext, useState, useEffect } from 'react';

export interface CountryConfig {
  code: string;
  name: string;
  flag: string;
  currency: string;
  symbol: string;
  language: string;
  languageLabel: string;
  pricing: {
    base: number;
    seat: number;
    storagePerGb: number;
  };
  tiers: Array<{ users: string; price: string }>;
}

export const COUNTRIES: CountryConfig[] = [
  {
    code: 'ZA', name: 'South Africa', flag: '\u{1F1FF}\u{1F1E6}',
    currency: 'ZAR', symbol: 'R', language: 'en', languageLabel: 'English',
    pricing: { base: 300, seat: 100, storagePerGb: 10 },
    tiers: [
      { users: '1 user', price: 'R300/mo' },
      { users: '5 users', price: 'R700/mo' },
      { users: '10 users', price: 'R1,200/mo' },
      { users: '20 users', price: 'R2,200/mo' },
    ],
  },
  {
    code: 'BW', name: 'Botswana', flag: '\u{1F1E7}\u{1F1FC}',
    currency: 'BWP', symbol: 'P', language: 'en', languageLabel: 'English',
    pricing: { base: 240, seat: 80, storagePerGb: 8 },
    tiers: [
      { users: '1 user', price: 'P240/mo' },
      { users: '5 users', price: 'P560/mo' },
      { users: '10 users', price: 'P960/mo' },
      { users: '20 users', price: 'P1,760/mo' },
    ],
  },
  {
    code: 'MZ', name: 'Mozambique', flag: '\u{1F1F2}\u{1F1FF}',
    currency: 'MZN', symbol: 'MT', language: 'pt', languageLabel: 'Portugu\u00eas',
    pricing: { base: 1140, seat: 380, storagePerGb: 38 },
    tiers: [
      { users: '1 usu\u00e1rio', price: 'MT1,140/m\u00eas' },
      { users: '5 usu\u00e1rios', price: 'MT2,660/m\u00eas' },
      { users: '10 usu\u00e1rios', price: 'MT4,560/m\u00eas' },
      { users: '20 usu\u00e1rios', price: 'MT8,360/m\u00eas' },
    ],
  },
  {
    code: 'CD', name: 'DR Congo', flag: '\u{1F1E8}\u{1F1E9}',
    currency: 'USD', symbol: '$', language: 'fr', languageLabel: 'Fran\u00e7ais',
    pricing: { base: 18, seat: 6, storagePerGb: 1 },
    tiers: [
      { users: '1 utilisateur', price: '$18/mois' },
      { users: '5 utilisateurs', price: '$42/mois' },
      { users: '10 utilisateurs', price: '$72/mois' },
      { users: '20 utilisateurs', price: '$132/mois' },
    ],
  },
];

interface CountryContextValue {
  country: CountryConfig;
  setCountry: (code: string) => void;
}

const CountryContext = createContext<CountryContextValue>({
  country: COUNTRIES[0],
  setCountry: () => {},
});

export function CountryProvider({ children }: { children: React.ReactNode }) {
  const [country, setCountryState] = useState<CountryConfig>(() => {
    const saved = localStorage.getItem('sebenza_country');
    return COUNTRIES.find(c => c.code === saved) || COUNTRIES[0];
  });

  const setCountry = (code: string) => {
    const found = COUNTRIES.find(c => c.code === code);
    if (found) {
      setCountryState(found);
      localStorage.setItem('sebenza_country', code);
    }
  };

  return (
    <CountryContext.Provider value={{ country, setCountry }}>
      {children}
    </CountryContext.Provider>
  );
}

export function useCountry() {
  return useContext(CountryContext);
}

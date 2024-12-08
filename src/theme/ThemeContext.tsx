import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';

// Theme type definitions
interface ThemeColors {
  primary: string;
  secondary: string;
  background: string;
  surface: string;
  textColor: string;
  secondaryText: string;
  cardBackground: string;
  borderColor: string;
  error: string;
  success: string;
  // Add specific text-related properties
  headerText: string;
  bodyText: string;
}

type Theme = 'light' | 'dark';

interface ThemeContextProps {
  theme: Theme;
  isDark: boolean;
  colors: ThemeColors;
  toggleTheme: () => void;
}

interface ThemeProviderProps {
  children: ReactNode;
}

const lightColors: ThemeColors = {
  primary: '#007AFF',
  secondary: '#5856D6',
  background: '#FFFFFF',
  surface: '#F2F2F7',
  textColor: '#000000',
  secondaryText: '#666666',
  cardBackground: '#FFFFFF',
  borderColor: '#E5E5EA',
  error: '#FF3B30',
  success: '#34C759',
  headerText: '#1A1A1A',
  bodyText: '#333333'
};

const darkColors: ThemeColors = {
  primary: '#0A84FF',
  secondary: '#5E5CE6',
  background: '#000000',
  surface: '#1C1C1E',
  textColor: '#FFFFFF',
  secondaryText: '#EBEBF5',
  cardBackground: '#2C2C2E',
  borderColor: '#38383A',
  error: '#FF453A',
  success: '#32D74B',
  headerText: '#FFFFFF',
  bodyText: '#E5E5E5'
};

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem('theme');
    return (savedTheme as Theme) || 'light';
  });

  const isDark = theme === 'dark';
  const colors = isDark ? darkColors : lightColors;

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, isDark, colors, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export default ThemeContext;
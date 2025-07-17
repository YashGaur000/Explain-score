import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import ThemeToggle from '../ui/ThemeToggle';
import Logo from '../common/Logo';
import Button from '../common/Button';
import { siteConfig } from '../../config/site';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white/80 dark:bg-dark-900/80 backdrop-blur-md border-b border-gray-100 dark:border-dark-800 sticky top-0 z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {siteConfig.navigation.filter(item => item.active).map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-base font-medium transition-all duration-300 relative group ${
                  isActive(item.href)
                    ? 'text-blue-600 dark:text-blue-400'
                    : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                {item.name}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all duration-300 group-hover:w-full ${
                  isActive(item.href) ? 'w-full' : ''
                }`}></span>
              </Link>
            ))}
          </nav>

          {/* CTA Buttons & Theme Toggle */}
          <div className="hidden lg:flex items-center space-x-4">
            <ThemeToggle />
            <Button href="/contact" variant="primary" size="md">
              Start free trial
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-3">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-dark-800 transition-colors duration-300"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-gray-700 dark:text-gray-300" />
              ) : (
                <Menu className="h-6 w-6 text-gray-700 dark:text-gray-300" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-dark-900 border-t border-gray-100 dark:border-dark-800 animate-fade-in">
          <div className="px-6 py-4 space-y-3">
            {siteConfig.navigation.filter(item => item.active).map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block text-base font-medium transition-colors duration-300 ${
                  isActive(item.href)
                    ? 'text-blue-600 dark:text-blue-400'
                    : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-gray-100 dark:border-dark-800 space-y-3">
              <Button 
                href="/contact" 
                variant="primary" 
                size="md" 
                className="w-full"
                onClick={() => setIsMenuOpen(false)}
              >
                Start free trial
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
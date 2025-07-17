import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../../config/site';

import logoImg from '../../assets/explainscore.svg'; // Make sure the logo is placed at src/assets/logo.png

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export default function Logo({ className = '', showText = true }: LogoProps) {
  return (
    <Link to="/" className={`flex items-center space-x-3 group ${className}`}>
      <img
        src={logoImg}
        alt="Logo"
        className="w-10 h-10 object-contain"
        style={{ minWidth: 80, minHeight: 80 }}
      />
      {showText && (
        <span className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
          {siteConfig.name}
        </span>
      )}
    </Link>
  );
}
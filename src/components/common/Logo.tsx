import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../../config/site';

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export default function Logo({ className = '', showText = true }: LogoProps) {
  return (
    <Link to="/" className={`flex items-center space-x-3 group ${className}`}>
      {/* <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
        <span className="text-white font-bold text-lg">E</span>
      </div> */}
      {showText && (
        <span className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
          {siteConfig.name}
        </span>
      )}
    </Link>
  );
} 
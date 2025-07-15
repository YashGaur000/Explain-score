import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Linkedin, Github, Mail } from 'lucide-react';

export default function Footer() {
  const footerLinks = {
    Product: [
      { name: 'Pricing', href: '/pricing' },
      { name: 'API Documentation', href: '/docs' },
      { name: 'Integrations', href: '/integrations' },
    ],
    Company: [
      { name: 'About', href: '/about' },
      { name: 'Blog', href: '/blog' },
      { name: 'Careers', href: '/careers' },
      { name: 'Contact', href: '/contact' },
    ],
    Support: [
      { name: 'Help Center', href: '/help' },
      { name: 'Community', href: '/community' },
      { name: 'Status', href: '/status' },
    ],
    Legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Security', href: '/security' },
      { name: 'Compliance', href: '/compliance' },
    ],
  };

  return (
    <footer className="bg-gray-50 dark:bg-dark-900 border-t border-gray-200 dark:border-dark-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {/* Logo and description */}
          <div className="col-span-2">
            <Link to="/" className="flex items-center space-x-3 mb-6 group">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <span className="text-white font-bold text-lg">E</span>
              </div>
              <span className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                ExplainScore
              </span>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed mb-6 max-w-sm">
              Transparent AI for financial services. Enable compliant, auditable ML lending decisions 
              with our Explainability-as-a-Service platform.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://twitter.com/explainscore" 
                className="text-gray-400 dark:text-gray-500 hover:text-blue-500 dark:hover:text-blue-400 transition-all duration-300 transform hover:scale-110"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="https://linkedin.com/company/explainscore" 
                className="text-gray-400 dark:text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 transform hover:scale-110"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://github.com/explainscore" 
                className="text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white transition-all duration-300 transform hover:scale-110"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="mailto:explainscore@gmail.com" 
                className="text-gray-400 dark:text-gray-500 hover:text-red-500 dark:hover:text-red-400 transition-all duration-300 transform hover:scale-110"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Footer links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white tracking-wider uppercase mb-4">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-dark-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            © 2025 ExplainScore, Inc. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex items-center space-x-6">
            <span className="text-gray-500 dark:text-gray-400 text-sm">Contact: explainscore@gmail.com</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
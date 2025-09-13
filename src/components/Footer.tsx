import { Linkedin, Twitter, Github, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Services: [
      { name: 'Software Consulting', href: '/services' },
      { name: 'Cloud & DevOps', href: '/services' },
      { name: 'AI & Data Solutions', href: '/services' },
      { name: 'Product Development', href: '/services' },
      { name: 'Technology Modernization', href: '/services' }
    ],
    Company: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Team', href: '/about' },
      { name: 'Careers', href: '/contact' },
      { name: 'Blog', href: '/blog' },
      { name: 'Contact', href: '/contact' }
    ],
    Resources: [
      { name: 'Case Studies', href: '/portfolio' },
      { name: 'White Papers', href: '/blog' },
      { name: 'Documentation', href: '/services' },
      { name: 'Support', href: '/contact' },
      { name: 'Privacy Policy', href: '/privacy' }
    ]
  };

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/company/devcortex', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/devcortex', label: 'Twitter' },
    { icon: Github, href: 'https://github.com/devcortex2025', label: 'GitHub' },
    { icon: Mail, href: 'mailto:hello@devcortex.in', label: 'Email' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/images/logo.svg" 
                alt="DevCortex Logo" 
                className="w-10 h-10 filter brightness-0 invert"
                onError={(e) => {
                  e.currentTarget.src = "/images/logo.png";
                }}
              />
              <span className="text-2xl font-semibold">
                Dev<span className="text-blue-400">Cortex</span>
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Transforming ideas into digital reality through innovative IT consultancy and cutting-edge technology solutions.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target={social.href.startsWith('mailto:') ? '_self' : '_blank'}
                    rel={social.href.startsWith('mailto:') ? '' : 'noopener noreferrer'}
                    aria-label={social.label}
                    className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors duration-200"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} DevCortex. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
              <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/cookies" className="text-gray-400 hover:text-white text-sm transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
import React from "react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/muhammad-faqih-ul-hasnain",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
          <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.1c.5-1 1.8-2.2 3.7-2.2 3.9 0 4.6 2.6 4.6 6V24h-4v-7.1c0-1.7 0-3.9-2.4-3.9-2.4 0-2.8 1.9-2.8 3.8V24h-4V8z" />
        </svg>
      )
    },
    {
      name: "GitHub",
      href: "https://github.com/mfaqihulhasnain",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.486 2 12.021c0 4.43 2.865 8.185 6.839 9.504.5.093.682-.218.682-.484 0-.238-.009-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.157-1.11-1.466-1.11-1.466-.908-.622.069-.61.069-.61 1.004.071 1.532 1.033 1.532 1.033.892 1.53 2.341 1.088 2.91.833.091-.649.35-1.088.636-1.338-2.221-.253-4.556-1.114-4.556-4.957 0-1.095.39-1.991 1.029-2.693-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.028A9.564 9.564 0 0 1 12 6.844a9.55 9.55 0 0 1 2.503.337c1.909-1.298 2.748-1.028 2.748-1.028.546 1.378.203 2.397.1 2.65.64.702 1.028 1.598 1.028 2.693 0 3.852-2.338 4.701-4.566 4.949.359.31.678.922.678 1.858 0 1.34-.012 2.42-.012 2.749 0 .269.18.58.688.481C19.14 20.202 22 16.448 22 12.02 22 6.486 17.522 2 12 2Z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      name: "Email",
      href: "mailto:faqihulhasnain572@gmail.com",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16a2 2 0 0 0 2-2V6c0-1.1-.9-2-2-2Zm0 4-8 5-8-5V6l8 5 8-5v2Z" />
        </svg>
      )
    }
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Dashboard", href: "/dashboard" },
    { name: "Write Journal", href: "/journal/write" },
    { name: "Analytics", href: "/analytics" },
    { name: "Settings", href: "/settings" }
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
    { name: "Support", href: "/support" }
  ];

  const features = [
    "Performance-focused",
    "Accessible",
    "Privacy-first",
    "Open Source"
  ];

  return (
    <footer className="relative bg-gradient-to-br from-orange-50 via-orange-100/50 to-amber-50 border-t border-orange-200/40">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500"></div>
      
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-amber-500 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.17 13.71l1.4-2.42c.09-.15.05-.34-.08-.45L12 8.1 8.51 10.84c-.13.11-.17.3-.08.45l1.4 2.42H9a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-.83z"/>
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                InkSpire
              </h3>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed mb-6">
              Thoughtful journaling to track moods, build habits, and reflect on your growth. 
              Designed with privacy, performance, and beautiful user experience at its core.
            </p>
            <div className="flex flex-wrap gap-2">
              {features.map((feature, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-800 border border-orange-200"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-900 mb-4">
              Quick Links
            </h4>
            <nav aria-label="Footer navigation">
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link 
                      href={link.href} 
                      className="text-sm text-gray-700 hover:text-orange-600 hover:underline transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 rounded-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-900 mb-4">
              Legal & Support
            </h4>
            <ul className="space-y-3">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href} 
                    className="text-sm text-gray-700 hover:text-orange-600 hover:underline transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 rounded-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Section */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-900 mb-4">
              Connect
            </h4>
            <p className="text-sm text-gray-700 mb-4">
              Created with ❤️ by{" "}
              <span className="font-semibold text-gray-900">Muhammad Faqih Ul Hasnain</span>
            </p>
            <div className="flex items-center gap-3 mb-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow us on ${social.name}`}
                  className="group inline-flex items-center justify-center h-10 w-10 rounded-full bg-white/80 hover:bg-white shadow-sm hover:shadow-md transition-all duration-200 border border-orange-100 hover:border-orange-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                >
                  <span className="text-gray-600 group-hover:text-orange-600 transition-colors duration-200">
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>
            
            {/* Newsletter Signup */}
            <div className="mt-6">
              <p className="text-xs text-gray-600 mb-2">Stay updated with new features</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 px-3 py-2 text-xs border border-orange-200 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white/80"
                  aria-label="Email for newsletter"
                />
                <button 
                  type="submit"
                  className="px-3 py-2 bg-orange-500 text-white text-xs font-medium rounded-r-lg hover:bg-orange-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                  aria-label="Subscribe to newsletter"
                >
                  →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-orange-200/60">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            <div className="flex flex-col sm:flex-row items-center gap-4 text-xs text-gray-600">
              <p>
                &copy; {currentYear} InkSpire — All rights reserved
              </p>
              <span className="hidden sm:block">•</span>
              <p>
                Made in Pakistan 🇵🇰
              </p>
            </div>
            
            <div className="flex items-center gap-4 text-xs text-gray-600">
              <span className="flex items-center gap-1">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                All systems operational
              </span>
              <span>•</span>
              <span>v2.1.0</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import { Linkedin, Instagram, Youtube, Twitter, Facebook } from 'lucide-react';
import logo from "../../assets/img/logo.svg";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-12 pb-8 px-6 md:px-12 lg:px-24 border-t border-gray-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">

        <div>
          <div className="flex items-center mb-4">
            
             <img src={logo} alt="Company logo" className="h-10" />
          </div>
          <p className="text-gray-400 text-sm mt-2">
            Top IT Consulting Delivering Custom Innovation Solutions
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-4">About us</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="#" className="hover:text-white transition-colors">Company</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Capabilities</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Industries</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Insights</a></li>
            <li className="flex items-center gap-2">
              <a href="#" className="hover:text-white transition-colors">Careers</a>
              <span className="bg-blue-600 text-white text-xs px-2 py-0.5 rounded">We're hiring</span>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Cookies</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Terms of Use</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Suppliers</a></li>
            <li><a href="#" className="hover:text-white transition-colors">EEO</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Sitemap</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Employee Tools</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-4">Social Media</h3>
          <p className="text-gray-400 text-sm mb-4">
            Don't Miss to follow us on our social networks accounts
          </p>
          <div className="flex space-x-4">
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center border border-white-600 hover:bg-gray-700 transition-colors"
              aria-label="LinkedIn"
            >
              <Facebook className="text-white w-4 h-4" strokeWidth={2} />
            </a>
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center border border-white-600 hover:bg-gray-700 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="text-white w-4 h-4" strokeWidth={2} />
            </a>
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center border border-white-600 hover:bg-gray-700 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="text-white w-4 h-4" strokeWidth={2} />
            </a>
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center border border-white-600 hover:bg-gray-700 transition-colors"
              aria-label="YouTube"
            >
              <Youtube className="text-white w-4 h-4" strokeWidth={2} />
            </a>
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center border border-white-600 hover:bg-gray-700 transition-colors"
              aria-label="Twitter/X"
            >
              <Twitter className="text-white w-4 h-4" strokeWidth={2} />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-12 pt-6 text-center text-sm text-white">
        2024 HighPoint Information Technology
      </div>
    </footer>
  );
};

export default Footer;
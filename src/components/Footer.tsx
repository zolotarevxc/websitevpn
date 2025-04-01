import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Github, Twitter, Facebook } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-purple-500/20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Shield className="w-6 h-6 text-purple-400" />
              <span className="text-lg font-bold">CryptoVPN</span>
            </Link>
            <p className="text-gray-400 text-sm">
              Безопасность нового поколения с квантовым шифрованием
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Компания</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/about" className="hover:text-purple-400">О нас</Link></li>
              <li><Link to="/careers" className="hover:text-purple-400">Вакансии</Link></li>
              <li><Link to="/blog" className="hover:text-purple-400">Блог</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Поддержка</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/help" className="hover:text-purple-400">Справка</Link></li>
              <li><Link to="/contact" className="hover:text-purple-400">Контакты</Link></li>
              <li><Link to="/faq" className="hover:text-purple-400">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Социальные сети</h3>
            <div className="flex space-x-4">
              <a href="https://github.com" className="text-gray-400 hover:text-purple-400">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" className="text-gray-400 hover:text-purple-400">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://facebook.com" className="text-gray-400 hover:text-purple-400">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-purple-500/20 text-center text-sm text-gray-400">
          © 2025 CryptoVPN. Все права защищены by Angel Zolotarev.
        </div>
      </div>
    </footer>
  );
}
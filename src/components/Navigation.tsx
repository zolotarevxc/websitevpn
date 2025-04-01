import React from 'react';
import { Link } from 'react-router-dom';
import { Shield } from 'lucide-react';

export function Navigation() {
  return (
    <nav className="container mx-auto px-6 py-4 flex justify-between items-center relative z-10">
      <Link to="/" className="flex items-center space-x-2">
        <Shield className="w-8 h-8 text-purple-400" />
        <span className="text-xl font-bold">CryptoVPN</span>
      </Link>
      <div className="hidden md:flex space-x-8">
        <Link to="/features" className="hover:text-purple-400 transition">Возможности</Link>
        <Link to="/about" className="hover:text-purple-400 transition">О нас</Link>
        <Link to="/servers" className="hover:text-purple-400 transition">Сервера</Link>
        <Link to="/contact" className="hover:text-purple-400 transition">Контакты</Link>
      </div>
      <Link 
        to="/download" 
        className="bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-2 rounded-full transition hover:opacity-90"
      >
        Подключиться
      </Link>
    </nav>
  );
}
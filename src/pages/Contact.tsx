import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="pt-20">
      <section className="container mx-auto px-6 pb-32">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            Свяжитесь с Нами
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            У вас есть вопросы? Наша команда поддержки готова помочь 24/7
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/20">
              <h2 className="text-2xl font-bold mb-6">Контактная информация</h2>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-purple-500/20 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-gray-400">support@cryptovpn.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-purple-500/20 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <p className="font-medium">Телефон</p>
                    <p className="text-gray-400">+7 (800) 555-35-35</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-purple-500/20 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <p className="font-medium">Адрес</p>
                    <p className="text-gray-400">Москва, ул. Космическая, 42</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/20">
              <h2 className="text-2xl font-bold mb-6">Отправить сообщение</h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Имя</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 bg-white/10 border border-purple-500/20 rounded-lg focus:outline-none focus:border-purple-500"
                    placeholder="Введите ваше имя"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 bg-white/10 border border-purple-500/20 rounded-lg focus:outline-none focus:border-purple-500"
                    placeholder="Введите ваш email"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Сообщение</label>
                  <textarea
                    className="w-full px-4 py-2 bg-white/10 border border-purple-500/20 rounded-lg focus:outline-none focus:border-purple-500 h-32"
                    placeholder="Введите ваше сообщение"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 py-3 rounded-lg font-medium hover:opacity-90 transition"
                >
                  Отправить
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
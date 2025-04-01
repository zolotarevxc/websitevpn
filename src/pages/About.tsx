import React from 'react';
import { Shield, Users, Target, Rocket } from 'lucide-react';

export function About() {
  return (
    <div className="pt-20">
      <section className="container mx-auto px-6 pb-32">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            О Компании
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Мы создаем будущее кибербезопасности, объединяя передовые технологии с простотой использования
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1511376777868-611b54f68947?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
              alt="Наша команда"
              className="rounded-2xl shadow-2xl"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">Наша История</h2>
            <p className="text-gray-400 mb-6">
              CryptoVPN была основана в 2025 году группой экспертов по кибербезопасности с целью создания 
              инновационного VPN-сервиса, который бы объединил в себе передовые технологии квантового 
              шифрования и блокчейна.
            </p>
            <p className="text-gray-400">
              Сегодня мы обслуживаем миллионы пользователей по всему миру, постоянно развивая нашу 
              инфраструктуру и технологии для обеспечения максимальной безопасности и скорости соединения.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/20">
            <div className="bg-purple-500/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">1M+ Пользователей</h3>
            <p className="text-gray-400">Доверяют нам свою безопасность</p>
          </div>
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/20">
            <div className="bg-purple-500/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Target className="w-6 h-6 text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">100% Фокус</h3>
            <p className="text-gray-400">На безопасности данных</p>
          </div>
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/20">
            <div className="bg-purple-500/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Rocket className="w-6 h-6 text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2">24/7 Поддержка</h3>
            <p className="text-gray-400">Всегда на связи</p>
          </div>
        </div>
      </section>
    </div>
  );
}
import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Globe, Zap, Lock, Server, Award, ChevronRight, Rocket, Shield as ShieldIcon } from 'lucide-react';

export function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="container mx-auto px-6 pt-20 pb-32 text-center relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-b from-purple-500/20 to-transparent rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10">
          <h2 className="text-purple-400 text-lg font-medium mb-4">ДОБРО ПОЖАЛОВАТЬ В БУДУЩЕЕ БЕЗОПАСНОСТИ</h2>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            Масштабируем Крипто<br />в Будущее
          </h1>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Безопасность нового поколения с квантовым шифрованием и технологиями блокчейн. 
            Ваша конфиденциальность - наш главный приоритет.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <Link 
              to="/download"
              className="group bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-4 rounded-full text-lg font-semibold transition hover:opacity-90 flex items-center justify-center"
            >
              Попробовать бесплатно
              <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/about"
              className="group bg-white/10 backdrop-blur-sm border border-purple-500/30 px-8 py-4 rounded-full text-lg font-semibold transition hover:bg-white/20"
            >
              Узнать больше
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
            alt="Космос"
            className="w-full max-w-4xl rounded-t-3xl opacity-50"
          />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-6 py-32 relative">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Почему выбирают нас?</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Мы предлагаем передовые технологии защиты данных и высокоскоростное соединение
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-12">
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition">
            <div className="bg-gradient-to-br from-purple-500 to-pink-500 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Globe className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Глобальный доступ</h3>
            <p className="text-gray-400">1000+ серверов в более чем 60 странах мира для быстрого и надежного соединения</p>
          </div>
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition">
            <div className="bg-gradient-to-br from-purple-500 to-pink-500 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Lock className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Квантовая защита</h3>
            <p className="text-gray-400">Передовое шифрование с использованием квантовых технологий для максимальной безопасности</p>
          </div>
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition">
            <div className="bg-gradient-to-br from-purple-500 to-pink-500 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Zap className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Молниеносная скорость</h3>
            <p className="text-gray-400">Оптимизированные сервера обеспечивают максимальную производительность без задержек</p>
          </div>
        </div>
      </section>

      {/* Server Section */}
      <section id="servers" className="container mx-auto px-6 py-32">
        <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-purple-500/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Глобальная сеть серверов</h2>
              <p className="text-gray-400 mb-8">
                Наша сеть постоянно растет, чтобы обеспечить вам максимальную скорость и надежность соединения в любой точке мира.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div className="flex items-center gap-4">
                  <div className="bg-purple-500/20 p-3 rounded-lg">
                    <Server className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <div className="font-semibold">1000+ Серверов</div>
                    <div className="text-sm text-gray-400">По всему миру</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-purple-500/20 p-3 rounded-lg">
                    <Globe className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <div className="font-semibold">60+ Стран</div>
                    <div className="text-sm text-gray-400">Глобальное покрытие</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-purple-500/20 p-3 rounded-lg">
                    <Zap className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <div className="font-semibold">Безлимитная скорость</div>
                    <div className="text-sm text-gray-400">Без ограничений</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-purple-500/20 p-3 rounded-lg">
                    <Award className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <div className="font-semibold">99.9% Аптайм</div>
                    <div className="text-sm text-gray-400">Надежность</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <img 
                src="https://images.unsplash.com/photo-1614064641938-3bbee52942c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" 
                alt="Серверная инфраструктура" 
                className="rounded-2xl shadow-2xl border border-purple-500/20"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-32">
        <div className="text-center relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-b from-purple-500/20 to-transparent rounded-full blur-3xl"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-8">
              Готовы защитить свои данные?
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
              Присоединяйтесь к миллионам пользователей, которые доверяют нам свою безопасность в интернете.
            </p>
            <Link
              to="/download"
              className="group bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-4 rounded-full text-lg font-semibold transition hover:opacity-90 flex items-center justify-center mx-auto w-fit"
            >
              Начать сейчас
              <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
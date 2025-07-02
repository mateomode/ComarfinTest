import React from 'react';
import { ArrowRight, Shield, Clock, DollarSign, Coins, TrendingUp } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const element = document.getElementById('servicios');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="pt-20 bg-gradient-to-br from-pink-50 via-purple-50 to-cyan-50 min-h-screen flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                No rompas el{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
                  chanchito
                </span>
              </h1>
              <p className="text-2xl lg:text-3xl text-gray-700 font-medium">
                Pedí tu crédito al instante en{' '}
                <span className="text-pink-500 font-bold">Comarfin</span>
              </p>
            </div>
            
            <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
              Préstamos personales rápidos y seguros para toda la Provincia de Buenos Aires. 
              Sin complicaciones, sin papeleos eternos. Tu dinero cuando lo necesitás.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={scrollToContact}
                className="bg-gradient-to-r from-pink-500 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-pink-600 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center group"
              >
                Solicitar Préstamo
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </button>
              <button 
                onClick={scrollToServices}
                className="border-2 border-pink-500 text-pink-500 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-pink-500 hover:text-white transition-all duration-300"
              >
                Calcular Cuotas
              </button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
              <div className="flex items-center space-x-3 bg-white p-4 rounded-xl shadow-md">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Clock className="text-green-600" size={24} />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Aprobación</p>
                  <p className="text-sm text-gray-600">En minutos</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 bg-white p-4 rounded-xl shadow-md">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Shield className="text-blue-600" size={24} />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">100% Seguro</p>
                  <p className="text-sm text-gray-600">Datos protegidos</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 bg-white p-4 rounded-xl shadow-md">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <DollarSign className="text-purple-600" size={24} />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Hasta $500.000</p>
                  <p className="text-sm text-gray-600">En tu cuenta</p>
                </div>
              </div>
            </div>
          </div>

          {/* Piggy Bank Illustration */}
          <div className="relative flex items-center justify-center">
            {/* Main Piggy Bank */}
            <div className="relative z-10">
              {/* Piggy Bank Body */}
              <div className="w-80 h-64 bg-gradient-to-br from-pink-400 to-pink-500 rounded-full relative shadow-2xl">
                {/* Piggy Bank Face */}
                <div className="absolute top-16 left-1/2 transform -translate-x-1/2">
                  {/* Eyes */}
                  <div className="flex space-x-8 mb-4">
                    <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-gray-800 rounded-full"></div>
                    </div>
                    <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-gray-800 rounded-full"></div>
                    </div>
                  </div>
                  {/* Snout */}
                  <div className="w-16 h-12 bg-pink-300 rounded-full mx-auto relative">
                    <div className="absolute top-3 left-1/2 transform -translate-x-1/2 flex space-x-2">
                      <div className="w-2 h-3 bg-pink-600 rounded-full"></div>
                      <div className="w-2 h-3 bg-pink-600 rounded-full"></div>
                    </div>
                  </div>
                </div>
                
                {/* Coin Slot */}
                <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-16 h-3 bg-pink-600 rounded-full"></div>
                
                {/* Legs */}
                <div className="absolute bottom-0 left-8 w-8 h-12 bg-pink-400 rounded-b-full"></div>
                <div className="absolute bottom-0 left-20 w-8 h-12 bg-pink-400 rounded-b-full"></div>
                <div className="absolute bottom-0 right-20 w-8 h-12 bg-pink-400 rounded-b-full"></div>
                <div className="absolute bottom-0 right-8 w-8 h-12 bg-pink-400 rounded-b-full"></div>
                
                {/* Tail */}
                <div className="absolute right-0 top-1/2 transform translate-x-2 -translate-y-1/2">
                  <div className="w-6 h-6 border-4 border-pink-400 rounded-full border-l-transparent transform rotate-45"></div>
                </div>
              </div>
            </div>

            {/* Floating Coins */}
            <div className="absolute top-4 left-8 animate-bounce">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center shadow-lg">
                <DollarSign className="text-yellow-800" size={20} />
              </div>
            </div>
            
            <div className="absolute top-16 right-4 animate-bounce" style={{ animationDelay: '0.5s' }}>
              <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center shadow-lg">
                <Coins className="text-yellow-800" size={16} />
              </div>
            </div>
            
            <div className="absolute bottom-20 left-4 animate-bounce" style={{ animationDelay: '1s' }}>
              <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-yellow-800 text-xs font-bold">$</span>
              </div>
            </div>

            {/* Floating Info Cards */}
            <div className="absolute top-4 right-4 bg-white p-4 rounded-2xl shadow-lg z-20 animate-pulse">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <TrendingUp className="text-green-600" size={16} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">98% Aprobación</p>
                  <p className="text-xs text-gray-600">Tasa de éxito</p>
                </div>
              </div>
            </div>
            
            <div className="absolute bottom-4 left-4 bg-white p-4 rounded-2xl shadow-lg z-20 animate-pulse" style={{ animationDelay: '1s' }}>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                  <Clock className="text-pink-600" size={16} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">15 minutos</p>
                  <p className="text-xs text-gray-600">Tiempo promedio</p>
                </div>
              </div>
            </div>
            
            {/* Background decoration */}
            <div className="absolute -top-8 -right-8 w-72 h-72 bg-gradient-to-br from-pink-200 to-purple-200 rounded-full opacity-20 -z-10"></div>
            <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-gradient-to-br from-cyan-200 to-blue-200 rounded-full opacity-20 -z-10"></div>
            
            {/* Money Rain Effect */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 left-1/4 text-2xl animate-bounce" style={{ animationDelay: '0.2s' }}>💰</div>
              <div className="absolute top-8 right-1/3 text-xl animate-bounce" style={{ animationDelay: '0.8s' }}>💵</div>
              <div className="absolute bottom-16 left-1/3 text-lg animate-bounce" style={{ animationDelay: '1.2s' }}>🪙</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
import React, { useState } from 'react';
import { CreditCard, Home, Car, GraduationCap, Heart, Briefcase, Calculator } from 'lucide-react';

const Services: React.FC = () => {
  const [loanAmount, setLoanAmount] = useState(250000);
  const [installments, setInstallments] = useState(12);

  const calculateInstallment = () => {
    // Simulación de cálculo de cuota (tasa aproximada del 45% anual)
    const monthlyRate = 0.045 / 12;
    const payment = (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, installments)) / 
                   (Math.pow(1 + monthlyRate, installments) - 1);
    return Math.round(payment);
  };

  const services = [
    {
      icon: CreditCard,
      title: 'Préstamos Personales',
      description: 'Para cualquier proyecto personal que tengas en mente',
      amount: 'Hasta $500.000',
      color: 'from-pink-500 to-pink-600'
    },
    {
      icon: Home,
      title: 'Refacción del Hogar',
      description: 'Mejorá tu casa con nuestros préstamos especiales',
      amount: 'Hasta $800.000',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Car,
      title: 'Compra de Vehículo',
      description: 'Financiamos tu auto nuevo o usado',
      amount: 'Hasta $1.200.000',
      color: 'from-cyan-500 to-cyan-600'
    },
    {
      icon: GraduationCap,
      title: 'Educación',
      description: 'Invertí en tu futuro con nuestros préstamos educativos',
      amount: 'Hasta $300.000',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Heart,
      title: 'Salud y Bienestar',
      description: 'Para tratamientos médicos y cuidado personal',
      amount: 'Hasta $400.000',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: Briefcase,
      title: 'Emprendimientos',
      description: 'Impulsá tu negocio con capital de trabajo',
      amount: 'Hasta $600.000',
      color: 'from-indigo-500 to-indigo-600'
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Nuestros <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">Servicios</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ofrecemos soluciones financieras adaptadas a tus necesidades específicas. 
            Desde préstamos personales hasta financiamiento para emprendimientos.
          </p>
        </div>

        {/* Calculadora de Préstamos */}
        <div className="mb-20">
          <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-3xl p-8 lg:p-12">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Calculator className="text-white" size={32} />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">Calculadora de Préstamos</h3>
              <p className="text-lg text-gray-600">Simulá tu préstamo y conocé tu cuota mensual</p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <div>
                    <label className="block text-lg font-semibold text-gray-700 mb-3">
                      Monto deseado: ${loanAmount.toLocaleString()}
                    </label>
                    <input 
                      type="range" 
                      min="10000" 
                      max="500000" 
                      step="10000"
                      value={loanAmount}
                      onChange={(e) => setLoanAmount(Number(e.target.value))}
                      className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                    />
                    <div className="flex justify-between text-sm text-gray-500 mt-2">
                      <span>$10.000</span>
                      <span>$500.000</span>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-lg font-semibold text-gray-700 mb-3">Cantidad de cuotas</label>
                    <select 
                      value={installments}
                      onChange={(e) => setInstallments(Number(e.target.value))}
                      className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent text-lg"
                    >
                      <option value={12}>12 cuotas</option>
                      <option value={18}>18 cuotas</option>
                      <option value={24}>24 cuotas</option>
                      <option value={36}>36 cuotas</option>
                    </select>
                  </div>
                </div>
                
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <div className="text-center space-y-4">
                    <h4 className="text-xl font-semibold text-gray-700">Tu cuota mensual sería:</h4>
                    <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
                      ${calculateInstallment().toLocaleString()}
                    </div>
                    <p className="text-gray-500">*Cálculo aproximado sujeto a evaluación crediticia</p>
                    
                    <div className="pt-4 space-y-2 text-sm text-gray-600">
                      <div className="flex justify-between">
                        <span>Monto solicitado:</span>
                        <span className="font-semibold">${loanAmount.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Cantidad de cuotas:</span>
                        <span className="font-semibold">{installments}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Total a pagar:</span>
                        <span className="font-semibold">${(calculateInstallment() * installments).toLocaleString()}</span>
                      </div>
                    </div>
                    
                    <button 
                      onClick={scrollToContact}
                      className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-4 px-6 rounded-xl font-semibold text-lg hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                      Solicitar este préstamo
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <IconComponent className="text-white" size={32} />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                
                <div className="flex items-center justify-between">
                  <span className={`text-lg font-bold bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>
                    {service.amount}
                  </span>
                  <button 
                    onClick={scrollToContact}
                    className={`bg-gradient-to-r ${service.color} text-white px-4 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
                  >
                    Solicitar
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Benefits Section */}
        <div className="mt-20 bg-gradient-to-r from-pink-50 to-purple-50 rounded-3xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">¿Por qué elegir Comarfin?</h3>
            <p className="text-lg text-gray-600">Somos tu mejor opción en la Provincia de Buenos Aires</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-2xl">⚡</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Respuesta Inmediata</h4>
              <p className="text-gray-600 text-sm">Aprobación en menos de 30 minutos</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-2xl">📱</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">100% Online</h4>
              <p className="text-gray-600 text-sm">Sin necesidad de ir a sucursales</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-2xl">🔒</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Datos Seguros</h4>
              <p className="text-gray-600 text-sm">Máxima protección de tu información</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-2xl">💰</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Mejores Tasas</h4>
              <p className="text-gray-600 text-sm">Las tasas más competitivas del mercado</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center mr-3">
                <span className="text-white font-bold text-lg">$</span>
              </div>
              <span className="text-2xl font-bold">Comarfin</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Tu mejor opción en préstamos personales en la Provincia de Buenos Aires. 
              Rápido, seguro y confiable.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-500 transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-500 transition-colors duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-500 transition-colors duration-300">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Servicios</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-pink-400 transition-colors">Préstamos Personales</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors">Refacción del Hogar</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors">Compra de Vehículo</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors">Educación</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors">Salud y Bienestar</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors">Emprendimientos</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center space-x-3">
                <Phone size={16} />
                <span>0800-COMARFIN</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} />
                <span>info@comarfin.com.ar</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={16} />
                <span>Provincia de Buenos Aires</span>
              </div>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-pink-400 transition-colors">Términos y Condiciones</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors">Política de Privacidad</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors">Defensa del Consumidor</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-colors">BCRA</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Comarfin. Todos los derechos reservados.
            </p>
            <p className="text-gray-400 text-sm mt-2 md:mt-0">
              "No rompas el chanchito, pedí tu crédito al instante en Comarfin"
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
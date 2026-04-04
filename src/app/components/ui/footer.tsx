import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white">CI</span>
              </div>
              <div className="flex flex-col">
                <span className="text-white">Comunidad Infantil</span>
                <span className="text-sm">de Villaverde</span>
              </div>
            </div>
            <p className="text-sm">
              Educación infantil de calidad en Villaverde. Desarrollando el potencial de cada niño desde 1986.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/sobre-nosotros" className="hover:text-white transition-colors">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link to="/programa-educativo" className="hover:text-white transition-colors">
                  Programa Educativo
                </Link>
              </li>
              <li>
                <Link to="/admisiones" className="hover:text-white transition-colors">
                  Admisiones
                </Link>
              </li>
              <li>
                <Link to="/galeria" className="hover:text-white transition-colors">
                  Galería
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white mb-4">Contacto</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>Calle Ejemplo 123, Villaverde, Madrid</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={16} />
                <span>+34 123 456 789</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={16} />
                <span>info@comunidadinfantilvillaverde.com</span>
              </li>
            </ul>
          </div>

          {/* Hours & Social */}
          <div>
            <h3 className="text-white mb-4">Horario</h3>
            <p className="text-sm mb-4">
              Lunes - Viernes<br />
              7:30 - 17:00
            </p>
            <div className="flex space-x-3">
              <a
                href="https://www.instagram.com/comunidadinfantil.villaverde/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                {/* <Instagram size={20} /> */}
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                {/* <Facebook size={20} /> */}
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Comunidad Infantil de Villaverde. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

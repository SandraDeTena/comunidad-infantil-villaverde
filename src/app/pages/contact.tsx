import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

export function Contact() {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-r from-teal-600 to-teal-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl mb-6">Contacto</h1>
          <p className="text-xl text-teal-100 max-w-3xl mx-auto">
            Estamos aquí para resolver todas tus dudas. ¡Contáctanos!
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-6 rounded-xl text-center">
              <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-white" size={28} />
              </div>
              <h3 className="text-lg mb-2">Dirección</h3>
              <p className="text-gray-700 text-sm">
                Calle Ejemplo 123<br />
                Villaverde, 28021<br />
                Madrid, España
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="text-white" size={28} />
              </div>
              <h3 className="text-lg mb-2">Teléfono</h3>
              <p className="text-gray-700 text-sm mb-2">
                +34 123 456 789
              </p>
              <p className="text-gray-600 text-xs">
                Lun - Vie: 9:00 - 17:00
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="text-white" size={28} />
              </div>
              <h3 className="text-lg mb-2">Email</h3>
              <p className="text-gray-700 text-sm mb-1">
                info@comunidadinfantil.com
              </p>
              <p className="text-gray-700 text-sm">
                admisiones@comunidadinfantil.com
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl text-center">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-white" size={28} />
              </div>
              <h3 className="text-lg mb-2">Horario</h3>
              <p className="text-gray-700 text-sm mb-1">
                Lunes - Viernes
              </p>
              <p className="text-gray-700 text-sm">
                7:30 - 17:00
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Map and Form */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl mb-6">Envíanos un Mensaje</h2>
              <p className="text-gray-600 mb-8">
                Completa el formulario y nos pondremos en contacto contigo lo antes posible
              </p>

              <form className="space-y-6">
                <div>
                  <label className="block text-sm mb-2">Nombre completo *</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    placeholder="Tu nombre"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2">Email *</label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2">Teléfono *</label>
                  <input
                    type="tel"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    placeholder="+34 123 456 789"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2">Asunto</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent">
                    <option>Información general</option>
                    <option>Proceso de admisión</option>
                    <option>Visita al centro</option>
                    <option>Programa educativo</option>
                    <option>Otro</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm mb-2">Mensaje *</label>
                  <textarea
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    placeholder="Escribe tu mensaje aquí..."
                  ></textarea>
                </div>

                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    required
                    className="mt-1"
                    id="privacy-contact"
                  />
                  <label htmlFor="privacy-contact" className="text-sm text-gray-600">
                    Acepto la política de privacidad y el tratamiento de mis datos personales *
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-teal-600 text-white py-4 rounded-lg hover:bg-teal-700 transition-colors flex items-center justify-center space-x-2"
                >
                  <span>Enviar Mensaje</span>
                  <Send size={20} />
                </button>
              </form>
            </div>

            {/* Map */}
            <div>
              <h2 className="text-3xl mb-6">Cómo Llegar</h2>
              <p className="text-gray-600 mb-6">
                Estamos ubicados en el corazón de Villaverde, con fácil acceso en transporte público y parking cercano
              </p>

              <div className="bg-gray-200 rounded-xl overflow-hidden shadow-lg h-96 mb-6 flex items-center justify-center">
                <div className="text-center text-gray-600">
                  <MapPin size={48} className="mx-auto mb-4" />
                  <p className="text-lg">Mapa Interactivo</p>
                  <p className="text-sm mt-2">
                    Calle Ejemplo 123, Villaverde<br />
                    28021 Madrid
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl mb-4">Transporte Público</h3>
                <div className="space-y-3 text-gray-600">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center flex-shrink-0 text-white text-xs">
                      M
                    </div>
                    <div>
                      <div>Metro L3 (Amarilla)</div>
                      <div className="text-sm text-gray-500">Parada Villaverde Alto - 5 min andando</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-green-500 rounded flex items-center justify-center flex-shrink-0 text-white text-xs">
                      🚌
                    </div>
                    <div>
                      <div>Autobuses: 22, 79, 123</div>
                      <div className="text-sm text-gray-500">Parada frente al centro</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-purple-500 rounded flex items-center justify-center flex-shrink-0 text-white text-xs">
                      P
                    </div>
                    <div>
                      <div>Parking gratuito</div>
                      <div className="text-sm text-gray-500">Zona azul cercana</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">Preguntas Frecuentes</h2>
            <p className="text-xl text-gray-600">
              Respuestas rápidas a las consultas más comunes
            </p>
          </div>

          <div className="space-y-4">
            <details className="bg-gray-50 p-6 rounded-xl group">
              <summary className="cursor-pointer text-lg list-none flex items-center justify-between">
                <span>¿Cuál es el horario de visitas?</span>
                <span className="text-teal-600 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-600">
                Ofrecemos visitas personalizadas de lunes a viernes de 10:00 a 12:00 y de 16:00 a 17:00. 
                Te recomendamos concertar cita previa llamando o rellenando el formulario de contacto.
              </p>
            </details>

            <details className="bg-gray-50 p-6 rounded-xl group">
              <summary className="cursor-pointer text-lg list-none flex items-center justify-between">
                <span>¿Cuánto tiempo tardan en responder?</span>
                <span className="text-teal-600 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-600">
                Respondemos a todas las consultas en un plazo máximo de 24-48 horas laborables. 
                En periodo de admisiones, el tiempo de respuesta puede ser más rápido.
              </p>
            </details>

            <details className="bg-gray-50 p-6 rounded-xl group">
              <summary className="cursor-pointer text-lg list-none flex items-center justify-between">
                <span>¿Puedo visitar el centro con mi hijo?</span>
                <span className="text-teal-600 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-600">
                ¡Por supuesto! De hecho, nos encanta que los niños nos visiten. Así pueden conocer el espacio 
                y familiarizarse con el ambiente antes de comenzar.
              </p>
            </details>

            <details className="bg-gray-50 p-6 rounded-xl group">
              <summary className="cursor-pointer text-lg list-none flex items-center justify-between">
                <span>¿Tienen parking disponible?</span>
                <span className="text-teal-600 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-600">
                Hay zona de estacionamiento gratuito en las calles cercanas y zona azul. 
                También contamos con espacio para dejar el coche brevemente durante la recogida.
              </p>
            </details>

            <details className="bg-gray-50 p-6 rounded-xl group">
              <summary className="cursor-pointer text-lg list-none flex items-center justify-between">
                <span>¿Organizan jornadas de puertas abiertas?</span>
                <span className="text-teal-600 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-600">
                Sí, organizamos jornadas de puertas abiertas durante el periodo de admisiones (febrero-marzo). 
                Las fechas exactas se publican en nuestra web y redes sociales.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl mb-6">¿Necesitas Contactarnos Urgentemente?</h2>
          <p className="text-xl text-teal-100 mb-8">
            Si eres familia del centro y necesitas comunicarte con nosotros de forma urgente
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="tel:+34123456789"
              className="inline-flex items-center px-8 py-4 bg-white text-teal-600 rounded-lg hover:bg-teal-50 transition-colors"
            >
              <Phone className="mr-2" size={20} />
              Llamar Ahora
            </a>
            <a
              href="mailto:info@comunidadinfantil.com"
              className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white/10 transition-colors"
            >
              <Mail className="mr-2" size={20} />
              Enviar Email
            </a>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl mb-6">Síguenos en Redes Sociales</h2>
          <p className="text-gray-600 mb-8">
            Mantente al día con nuestras actividades, noticias y eventos
          </p>
          <div className="flex items-center justify-center gap-6">
            <a
              href="https://www.instagram.com/comunidadinfantil.villaverde/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform"
            >
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a
              href="#"
              className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform"
            >
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

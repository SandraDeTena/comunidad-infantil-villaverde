import { Link } from "react-router";
import { CheckCircle, Calendar, FileText, Users, ArrowRight } from "lucide-react";

export function Admissions() {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl mb-6">Admisiones</h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            ¡Da el primer paso! Únete a nuestra comunidad educativa
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4">Proceso de Admisión</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Un proceso sencillo y transparente en 4 pasos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="relative">
              <div className="bg-green-100 rounded-xl p-8 h-full">
                <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl mb-4">
                  1
                </div>
                <h3 className="text-xl mb-3">Contacto Inicial</h3>
                <p className="text-gray-600">
                  Completa el formulario de interés o llámanos directamente
                </p>
              </div>
              {/* Arrow for desktop */}
              <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                <ArrowRight className="text-green-600" size={32} />
              </div>
            </div>

            <div className="relative">
              <div className="bg-green-100 rounded-xl p-8 h-full">
                <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl mb-4">
                  2
                </div>
                <h3 className="text-xl mb-3">Visita Personalizada</h3>
                <p className="text-gray-600">
                  Te invitamos a conocer nuestras instalaciones y equipo
                </p>
              </div>
              <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                <ArrowRight className="text-green-600" size={32} />
              </div>
            </div>

            <div className="relative">
              <div className="bg-green-100 rounded-xl p-8 h-full">
                <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl mb-4">
                  3
                </div>
                <h3 className="text-xl mb-3">Documentación</h3>
                <p className="text-gray-600">
                  Entrega de documentos necesarios y formalización
                </p>
              </div>
              <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                <ArrowRight className="text-green-600" size={32} />
              </div>
            </div>

            <div>
              <div className="bg-green-100 rounded-xl p-8 h-full">
                <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl mb-4">
                  4
                </div>
                <h3 className="text-xl mb-3">¡Bienvenidos!</h3>
                <p className="text-gray-600">
                  Periodo de adaptación y comienzo de la aventura
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl mb-6">Requisitos</h2>
              <p className="text-lg text-gray-600 mb-6">
                Para formalizar la matrícula necesitarás la siguiente documentación:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-600">Formulario de inscripción completo</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-600">DNI/NIE de ambos padres o tutores legales</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-600">Libro de familia o certificado de nacimiento del niño/a</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-600">Cartilla de vacunación actualizada</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-600">Fotografía reciente tamaño carnet</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-600">Autorización de recogida y emergencias</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-600">Informe médico (si requiere atención especial)</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl mb-6">Edades y Grupos</h2>
              <p className="text-lg text-gray-600 mb-6">
                Ofrecemos plazas para las siguientes edades:
              </p>
              
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-xl mb-2">🍼 Bebés (0-1 año)</h3>
                  <p className="text-gray-600 mb-2">Ratio: 8 niños/as por aula</p>
                  <p className="text-sm text-gray-500">Atención especializada en el desarrollo sensoriomotor</p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-xl mb-2">👶 1-2 años</h3>
                  <p className="text-gray-600 mb-2">Ratio: 13 niños/as por aula</p>
                  <p className="text-sm text-gray-500">Estimulación del lenguaje y autonomía</p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-xl mb-2">🧒 2-3 años</h3>
                  <p className="text-gray-600 mb-2">Ratio: 20 niños/as por aula</p>
                  <p className="text-sm text-gray-500">Desarrollo de habilidades sociales y cognitivas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tuition & Schedule */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl">
              <div className="flex items-center space-x-3 mb-6">
                <Calendar className="text-blue-600" size={32} />
                <h2 className="text-3xl">Horarios</h2>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl mb-2">Horario Regular</h3>
                  <p className="text-gray-700">Lunes a Viernes: 9:00 - 17:00</p>
                </div>
                <div className="border-t border-blue-200 pt-4">
                  <h3 className="text-xl mb-2">Horario Ampliado</h3>
                  <p className="text-gray-700 mb-1">Entrada temprana: 7:30 - 9:00</p>
                  <p className="text-gray-700">Disponible con servicio adicional</p>
                </div>
                <div className="border-t border-blue-200 pt-4">
                  <h3 className="text-xl mb-2">Flexibilidad</h3>
                  <p className="text-gray-700">Ofrecemos opciones de media jornada y jornadas completas adaptadas a las necesidades de cada familia</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl">
              <div className="flex items-center space-x-3 mb-6">
                <FileText className="text-green-600" size={32} />
                <h2 className="text-3xl">Servicios</h2>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h3 className="mb-1">Comedor</h3>
                    <p className="text-sm text-gray-700">Menú equilibrado elaborado diariamente. Adaptación a alergias e intolerancias</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h3 className="mb-1">Material Escolar</h3>
                    <p className="text-sm text-gray-700">Todo el material didáctico incluido en la cuota mensual</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h3 className="mb-1">Actividades Complementarias</h3>
                    <p className="text-sm text-gray-700">Inglés, música, psicomotricidad y talleres incluidos</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <h3 className="mb-1">Comunicación Familiar</h3>
                    <p className="text-sm text-gray-700">Agenda digital diaria y tutorías personalizadas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calendar */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">Calendario de Admisiones 2026</h2>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-green-600 text-white p-6">
              <h3 className="text-2xl">Fechas Importantes</h3>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex items-center space-x-4 pb-4 border-b">
                <div className="w-24 flex-shrink-0">
                  <div className="text-green-600">Enero</div>
                </div>
                <div>
                  <p className="text-gray-800">Apertura de plazo de matriculación</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 pb-4 border-b">
                <div className="w-24 flex-shrink-0">
                  <div className="text-green-600">Febrero-Marzo</div>
                </div>
                <div>
                  <p className="text-gray-800">Jornadas de puertas abiertas (sábados por la mañana)</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 pb-4 border-b">
                <div className="w-24 flex-shrink-0">
                  <div className="text-green-600">Abril</div>
                </div>
                <div>
                  <p className="text-gray-800">Fecha límite para entrega de documentación</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 pb-4 border-b">
                <div className="w-24 flex-shrink-0">
                  <div className="text-green-600">Mayo</div>
                </div>
                <div>
                  <p className="text-gray-800">Confirmación de plazas y reserva</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 pb-4 border-b">
                <div className="w-24 flex-shrink-0">
                  <div className="text-green-600">Junio</div>
                </div>
                <div>
                  <p className="text-gray-800">Reuniones informativas con familias nuevas</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-24 flex-shrink-0">
                  <div className="text-green-600">Septiembre</div>
                </div>
                <div>
                  <p className="text-gray-800">Periodo de adaptación e inicio del curso</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">Preguntas Frecuentes</h2>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl mb-3">¿A partir de qué edad admiten niños?</h3>
              <p className="text-gray-600">
                Admitimos bebés desde los 4 meses hasta los 3 años. Cada grupo está adaptado a las necesidades específicas de cada edad.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl mb-3">¿Qué incluye la cuota mensual?</h3>
              <p className="text-gray-600">
                La cuota incluye: jornada completa, comidas (desayuno, almuerzo, comida y merienda), material escolar, actividades complementarias (inglés, música, psicomotricidad), y seguro escolar.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl mb-3">¿Cómo es el periodo de adaptación?</h3>
              <p className="text-gray-600">
                El periodo de adaptación es gradual y personalizado, durando aproximadamente 2 semanas. Comenzamos con estancias cortas que van aumentando progresivamente según la evolución de cada niño.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl mb-3">¿Hay ayudas o becas disponibles?</h3>
              <p className="text-gray-600">
                Informamos a las familias sobre las ayudas y bonificaciones de la Comunidad de Madrid. Además, ofrecemos descuentos por hermanos y facilidades de pago.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl mb-3">¿Puedo visitar el centro antes de matricular?</h3>
              <p className="text-gray-600">
                ¡Por supuesto! Organizamos visitas personalizadas en horario lectivo para que puedas ver el centro en pleno funcionamiento. También celebramos jornadas de puertas abiertas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Form */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">Solicita Información</h2>
            <p className="text-xl text-green-100">
              Completa el formulario y nos pondremos en contacto contigo
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 text-gray-800">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm mb-2">Nombre del padre/madre/tutor</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2">Teléfono</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="+34 123 456 789"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="tu@email.com"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm mb-2">Nombre del niño/a</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Nombre"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2">Edad del niño/a</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
                    <option>Selecciona la edad</option>
                    <option>0-1 año</option>
                    <option>1-2 años</option>
                    <option>2-3 años</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm mb-2">Mensaje (opcional)</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Cuéntanos cualquier consulta adicional..."
                ></textarea>
              </div>

              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  className="mt-1"
                  id="privacy"
                />
                <label htmlFor="privacy" className="text-sm text-gray-600">
                  Acepto la política de privacidad y el tratamiento de mis datos personales
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 text-white py-4 rounded-lg hover:bg-green-700 transition-colors text-lg"
              >
                Enviar Solicitud
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl mb-6">¿Prefieres contactarnos directamente?</h3>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Users className="text-green-600" size={24} />
                </div>
                <div className="text-left">
                  <div className="text-sm text-gray-600">Teléfono</div>
                  <div className="text-lg">+34 123 456 789</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <FileText className="text-green-600" size={24} />
                </div>
                <div className="text-left">
                  <div className="text-sm text-gray-600">Email</div>
                  <div className="text-lg">admisiones@comunidadinfantil.com</div>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <Link
                to="/contacto"
                className="inline-flex items-center px-8 py-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
              >
                Agenda una Visita
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

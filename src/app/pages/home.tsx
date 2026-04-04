import { Link } from "react-router-dom";
import { ArrowRight, Heart, Users, BookOpen, Star } from "lucide-react";

export function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1548102268-3d7dc56b01e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGNoaWxkcmVuJTIwc2Nob29sJTIwZ3JvdXB8ZW58MXx8fHwxNzc0NTMxOTg1fDA&ixlib=rb-4.1.0&q=80&w=1080')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/70" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6">
              Donde Cada Niño Florece
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Educación infantil de calidad en el corazón de Villaverde. Más de 35 años formando mentes curiosas y corazones felices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/admisiones"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors group"
              >
                <span>Solicita Información</span>
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
              <Link
                to="/programa-educativo"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white/10 transition-colors"
              >
                Conoce Nuestro Programa
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl mb-2">35+</div>
              <div className="text-blue-100">Años de Experiencia</div>
            </div>
            <div>
              <div className="text-4xl mb-2">200+</div>
              <div className="text-blue-100">Familias Felices</div>
            </div>
            <div>
              <div className="text-4xl mb-2">100%</div>
              <div className="text-blue-100">Compromiso</div>
            </div>
            <div>
              <div className="text-4xl mb-2">15</div>
              <div className="text-blue-100">Profesionales</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4">¿Por Qué Elegirnos?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Somos más que un colegio, somos una comunidad donde cada niño es único y especial
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl mb-3">Ambiente Cálido</h3>
              <p className="text-gray-600">
                Un espacio seguro y acogedor donde los niños se sienten como en casa
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl mb-3">Grupos Reducidos</h3>
              <p className="text-gray-600">
                Atención personalizada con grupos pequeños para mejor desarrollo
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="text-purple-600" size={32} />
              </div>
              <h3 className="text-xl mb-3">Metodología Innovadora</h3>
              <p className="text-gray-600">
                Aprendizaje a través del juego y la exploración activa
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="text-orange-600" size={32} />
              </div>
              <h3 className="text-xl mb-3">Equipo Cualificado</h3>
              <p className="text-gray-600">
                Profesionales apasionados con formación continua
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Image + Content Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl mb-6">
                Nuestra Filosofía Educativa
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                En la Comunidad Infantil de Villaverde creemos en el desarrollo integral de cada niño. Nuestro enfoque combina lo mejor de diferentes metodologías pedagógicas, adaptándonos siempre a las necesidades individuales de cada pequeño.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Fomentamos la autonomía, la creatividad y el pensamiento crítico a través de experiencias significativas que preparan a los niños para un futuro brillante.
              </p>
              <Link
                to="/sobre-nosotros"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 group"
              >
                <span>Conoce más sobre nosotros</span>
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFjaGVyJTIwc3R1ZGVudCUyMGludGVyYWN0aW9uJTIwcHJlc2Nob29sfGVufDF8fHx8MTc3NDUzMTk4NXww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Profesor con estudiante"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4">Nuestros Programas</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Actividades diseñadas para estimular el desarrollo en todas las áreas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1607823477653-e2c3980acb86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMHJlYWRpbmclMjBib29rcyUyMGxpYnJhcnl8ZW58MXx8fHwxNzc0NTE2NDgzfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Lectura"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl mb-3">Lectoescritura</h3>
                <p className="text-gray-600 mb-4">
                  Iniciación a la lectura y escritura de forma lúdica y natural
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1572968725869-7b2fe4203333?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwYXJ0JTIwcGFpbnRpbmclMjBjcmVhdGl2ZXxlbnwxfHx8fDE3NzQ0NDQ2MTF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Arte"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl mb-3">Arte y Creatividad</h3>
                <p className="text-gray-600 mb-4">
                  Expresión artística libre que desarrolla la imaginación
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1761208663281-619e6532aff3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraW5kZXJnYXJ0ZW4lMjBraWRzJTIwcGxheWluZyUyMG91dGRvb3J8ZW58MXx8fHwxNzc0NTMxOTgzfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Juego al aire libre"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl mb-3">Psicomotricidad</h3>
                <p className="text-gray-600 mb-4">
                  Desarrollo físico y motor a través del juego activo
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/programa-educativo"
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors group"
            >
              <span>Ver Todo el Programa</span>
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl mb-6">
            ¿Listo para dar el Primer Paso?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Visítanos y descubre por qué somos la mejor opción para la educación de tu hijo
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/admisiones"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Proceso de Admisión
            </Link>
            <Link
              to="/contacto"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white/10 transition-colors"
            >
              Agenda una Visita
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

// export function Home() {
//   return <h1>Home funcionando</h1>;
// }
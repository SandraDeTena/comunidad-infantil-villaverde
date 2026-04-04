import { Users, Target, Award, Clock } from "lucide-react";

export function About() {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl mb-6">Sobre Nosotros</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Una comunidad educativa con más de 35 años dedicados a formar niños felices y preparados para el futuro
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl mb-6">Nuestra Historia</h2>
              <p className="text-lg text-gray-600 mb-4">
                La Comunidad Infantil de Villaverde nació en 1986 con un sueño: crear un espacio donde cada niño pudiera desarrollarse plenamente en un ambiente de amor, respeto y aprendizaje.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                A lo largo de más de tres décadas, hemos acompañado a cientos de familias en el crecimiento de sus hijos, adaptándonos siempre a los tiempos pero manteniendo firmes nuestros valores fundamentales.
              </p>
              <p className="text-lg text-gray-600">
                Hoy somos un referente en educación infantil en Villaverde, reconocidos por nuestro compromiso con la excelencia educativa y el bienestar de cada niño.
              </p>
            </div>

            <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1758611228434-7b5b697abd0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBidWlsZGluZyUyMGV4dGVyaW9yJTIwbW9kZXJufGVufDF8fHx8MTc3NDQzOTU3NXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Nuestro colegio"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <Target className="text-blue-600" size={32} />
              </div>
              <h2 className="text-2xl md:text-3xl mb-4">Nuestra Misión</h2>
              <p className="text-lg text-gray-600">
                Proporcionar una educación infantil de excelencia que fomente el desarrollo integral de cada niño, respetando su individualidad y promoviendo valores de respeto, solidaridad y amor por el aprendizaje.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <Award className="text-green-600" size={32} />
              </div>
              <h2 className="text-2xl md:text-3xl mb-4">Nuestra Visión</h2>
              <p className="text-lg text-gray-600">
                Ser el referente en educación infantil en nuestra comunidad, reconocidos por nuestra innovación pedagógica, el compromiso de nuestro equipo y la felicidad de nuestros alumnos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4">Nuestros Valores</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Los pilares que guían nuestra labor educativa cada día
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">❤️</span>
              </div>
              <h3 className="text-xl mb-3">Amor</h3>
              <p className="text-gray-600">
                Base fundamental de nuestra relación con los niños y las familias
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🤝</span>
              </div>
              <h3 className="text-xl mb-3">Respeto</h3>
              <p className="text-gray-600">
                Por la individualidad, el ritmo y las necesidades de cada niño
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🌱</span>
              </div>
              <h3 className="text-xl mb-3">Crecimiento</h3>
              <p className="text-gray-600">
                Continuo desarrollo personal y profesional de todo nuestro equipo
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✨</span>
              </div>
              <h3 className="text-xl mb-3">Excelencia</h3>
              <p className="text-gray-600">
                Compromiso constante con la calidad en todo lo que hacemos
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4">Nuestro Equipo</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Profesionales apasionados y cualificados que hacen la diferencia
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl">
                MC
              </div>
              <h3 className="text-xl mb-2">María Carmen</h3>
              <p className="text-blue-600 mb-3">Directora</p>
              <p className="text-gray-600 text-sm">
                Pedagoga con más de 25 años de experiencia en educación infantil
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-green-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl">
                AL
              </div>
              <h3 className="text-xl mb-2">Ana López</h3>
              <p className="text-green-600 mb-3">Coordinadora Pedagógica</p>
              <p className="text-gray-600 text-sm">
                Especialista en pedagogía Montessori y desarrollo infantil
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl">
                LM
              </div>
              <h3 className="text-xl mb-2">Laura Martín</h3>
              <p className="text-purple-600 mb-3">Psicóloga Infantil</p>
              <p className="text-gray-600 text-sm">
                Experta en psicología evolutiva y orientación familiar
              </p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Users className="text-blue-600" size={24} />
              </div>
              <div>
                <h3 className="text-xl mb-3">Equipo Completo</h3>
                <p className="text-gray-600 mb-4">
                  Contamos con un equipo multidisciplinar de 15 profesionales cualificados que incluye maestros de educación infantil, auxiliares, especialistas en psicomotricidad, música y lengua extranjera.
                </p>
                <p className="text-gray-600">
                  Todos nuestros profesionales están en constante formación para ofrecer las mejores prácticas educativas y un ambiente de aprendizaje enriquecedor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4">Nuestras Instalaciones</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Espacios diseñados pensando en el bienestar y desarrollo de los niños
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1761208663763-c4d30657c910?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVzY2hvb2wlMjBjaGlsZHJlbiUyMGxlYXJuaW5nJTIwY2xhc3Nyb29tfGVufDF8fHx8MTc3NDUzMTk4M3ww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Aulas"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl mb-3">Aulas Luminosas</h3>
                <p className="text-gray-600">
                  Espacios amplios, luminosos y equipados con materiales educativos de calidad
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1761208663281-619e6532aff3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraW5kZXJnYXJ0ZW4lMjBraWRzJTIwcGxheWluZyUyMG91dGRvb3J8ZW58MXx8fHwxNzc0NTMxOTgzfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Patio"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl mb-3">Patio de Recreo</h3>
                <p className="text-gray-600">
                  Zona exterior segura con juegos adaptados para el desarrollo motor
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1722962495636-86d05a8aa88e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb250ZXNzb3JpJTIwY2xhc3Nyb29tJTIwbWF0ZXJpYWxzfGVufDF8fHx8MTc3NDUzMTk4NHww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Materiales"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl mb-3">Materiales Didácticos</h3>
                <p className="text-gray-600">
                  Recursos educativos variados y actualizados constantemente
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1607823477653-e2c3980acb86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMHJlYWRpbmclMjBib29rcyUyMGxpYnJhcnl8ZW58MXx8fHwxNzc0NTE2NDgzfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Biblioteca"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl mb-3">Rincón de Lectura</h3>
                <p className="text-gray-600">
                  Biblioteca infantil que fomenta el amor por los libros desde pequeños
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4">Nuestro Recorrido</h2>
          </div>

          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0">
                <Clock size={20} />
              </div>
              <div>
                <div className="text-blue-600 mb-1">1986</div>
                <h3 className="text-xl mb-2">Fundación</h3>
                <p className="text-gray-600">
                  Nace la Comunidad Infantil de Villaverde con 2 aulas y un sueño grande
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0">
                <Clock size={20} />
              </div>
              <div>
                <div className="text-blue-600 mb-1">1995</div>
                <h3 className="text-xl mb-2">Expansión</h3>
                <p className="text-gray-600">
                  Ampliación de instalaciones y nuevos programas educativos
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0">
                <Clock size={20} />
              </div>
              <div>
                <div className="text-blue-600 mb-1">2010</div>
                <h3 className="text-xl mb-2">Modernización</h3>
                <p className="text-gray-600">
                  Renovación completa de espacios y metodologías pedagógicas
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0">
                <Clock size={20} />
              </div>
              <div>
                <div className="text-blue-600 mb-1">2020</div>
                <h3 className="text-xl mb-2">Presente</h3>
                <p className="text-gray-600">
                  Más de 35 años siendo referentes en educación infantil en Villaverde
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

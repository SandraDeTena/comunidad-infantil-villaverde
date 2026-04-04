import { BookOpen, Music, Palette, Globe, Heart, Zap } from "lucide-react";

export function Program() {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-r from-purple-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl mb-6">Programa Educativo</h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Un enfoque integral que combina aprendizaje, juego y desarrollo emocional
          </p>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1722962495636-86d05a8aa88e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb250ZXNzb3JpJTIwY2xhc3Nyb29tJTIwbWF0ZXJpYWxzfGVufDF8fHx8MTc3NDUzMTk4NHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Metodología"
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl mb-6">Nuestra Metodología</h2>
              <p className="text-lg text-gray-600 mb-4">
                Aplicamos un enfoque educativo basado en el respeto al ritmo individual de cada niño, integrando lo mejor de diferentes pedagogías activas.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Nuestro método se centra en el aprendizaje experiencial, donde los niños son protagonistas activos de su proceso educativo a través de:
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start space-x-3">
                  <span className="text-purple-600 text-xl">•</span>
                  <span>Manipulación de materiales concretos y sensoriales</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-purple-600 text-xl">•</span>
                  <span>Proyectos de investigación y descubrimiento</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-purple-600 text-xl">•</span>
                  <span>Trabajo por rincones y ambientes preparados</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-purple-600 text-xl">•</span>
                  <span>Juego libre y dirigido como vehículo de aprendizaje</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Areas of Development */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4">Áreas de Desarrollo</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Trabajamos todas las dimensiones del crecimiento infantil
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <BookOpen className="text-blue-600" size={32} />
              </div>
              <h3 className="text-2xl mb-4">Cognitiva</h3>
              <p className="text-gray-600 mb-4">
                Estimulación del pensamiento lógico, creatividad, memoria y resolución de problemas
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Matemáticas manipulativas</li>
                <li>• Iniciación a la lectoescritura</li>
                <li>• Experimentación científica</li>
                <li>• Lógica y razonamiento</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <Heart className="text-green-600" size={32} />
              </div>
              <h3 className="text-2xl mb-4">Socioemocional</h3>
              <p className="text-gray-600 mb-4">
                Desarrollo de habilidades sociales, gestión emocional y empatía
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Educación emocional</li>
                <li>• Habilidades sociales</li>
                <li>• Autonomía personal</li>
                <li>• Resolución de conflictos</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                <Zap className="text-orange-600" size={32} />
              </div>
              <h3 className="text-2xl mb-4">Psicomotriz</h3>
              <p className="text-gray-600 mb-4">
                Coordinación, equilibrio, lateralidad y conciencia corporal
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Psicomotricidad gruesa</li>
                <li>• Motricidad fina</li>
                <li>• Expresión corporal</li>
                <li>• Coordinación óculo-manual</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <Palette className="text-purple-600" size={32} />
              </div>
              <h3 className="text-2xl mb-4">Artística</h3>
              <p className="text-gray-600 mb-4">
                Expresión creativa a través de diferentes lenguajes artísticos
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Artes plásticas</li>
                <li>• Música y ritmo</li>
                <li>• Dramatización</li>
                <li>• Danza y movimiento</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                <Globe className="text-red-600" size={32} />
              </div>
              <h3 className="text-2xl mb-4">Lingüística</h3>
              <p className="text-gray-600 mb-4">
                Desarrollo del lenguaje oral y primeros acercamientos al escrito
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Comunicación oral</li>
                <li>• Vocabulario y expresión</li>
                <li>• Conciencia fonológica</li>
                <li>• Iniciación a la escritura</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-6">
                <Music className="text-teal-600" size={32} />
              </div>
              <h3 className="text-2xl mb-4">Musical</h3>
              <p className="text-gray-600 mb-4">
                Sensibilización y apreciación musical desde edades tempranas
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Educación auditiva</li>
                <li>• Ritmo y movimiento</li>
                <li>• Canciones infantiles</li>
                <li>• Instrumentos musicales</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Daily Activities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4">Un Día en Nuestro Centro</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Rutina estructurada que proporciona seguridad y favorece el aprendizaje
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl">
                <div className="w-20 flex-shrink-0">
                  <div className="text-blue-600">7:30 - 9:00</div>
                </div>
                <div>
                  <h3 className="text-xl mb-2">Acogida</h3>
                  <p className="text-gray-600">
                    Recepción de los niños, juego libre y actividades tranquilas
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl">
                <div className="w-20 flex-shrink-0">
                  <div className="text-blue-600">9:00 - 9:30</div>
                </div>
                <div>
                  <h3 className="text-xl mb-2">Asamblea</h3>
                  <p className="text-gray-600">
                    Encuentro grupal, canciones, calendario y planificación del día
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl">
                <div className="w-20 flex-shrink-0">
                  <div className="text-blue-600">9:30 - 11:00</div>
                </div>
                <div>
                  <h3 className="text-xl mb-2">Actividades Dirigidas</h3>
                  <p className="text-gray-600">
                    Proyectos, talleres y actividades planificadas según áreas
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl">
                <div className="w-20 flex-shrink-0">
                  <div className="text-blue-600">11:00 - 11:30</div>
                </div>
                <div>
                  <h3 className="text-xl mb-2">Almuerzo</h3>
                  <p className="text-gray-600">
                    Momento de alimentación saludable y hábitos de higiene
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl">
                <div className="w-20 flex-shrink-0">
                  <div className="text-blue-600">11:30 - 12:30</div>
                </div>
                <div>
                  <h3 className="text-xl mb-2">Patio y Juego Libre</h3>
                  <p className="text-gray-600">
                    Actividad física al aire libre, juego espontáneo y socialización
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl">
                <div className="w-20 flex-shrink-0">
                  <div className="text-blue-600">12:30 - 14:00</div>
                </div>
                <div>
                  <h3 className="text-xl mb-2">Talleres Rotativos</h3>
                  <p className="text-gray-600">
                    Arte, música, cuentos, experimentos según día de la semana
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl">
                <div className="w-20 flex-shrink-0">
                  <div className="text-blue-600">14:00 - 15:00</div>
                </div>
                <div>
                  <h3 className="text-xl mb-2">Comida</h3>
                  <p className="text-gray-600">
                    Menú equilibrado, educación nutricional y autonomía
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl">
                <div className="w-20 flex-shrink-0">
                  <div className="text-blue-600">15:00 - 16:00</div>
                </div>
                <div>
                  <h3 className="text-xl mb-2">Descanso / Relajación</h3>
                  <p className="text-gray-600">
                    Momento de calma, siesta para los más pequeños, actividades tranquilas
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl">
                <div className="w-20 flex-shrink-0">
                  <div className="text-blue-600">16:00 - 17:00</div>
                </div>
                <div>
                  <h3 className="text-xl mb-2">Merienda y Despedida</h3>
                  <p className="text-gray-600">
                    Merienda saludable, juegos libres y recogida de los niños
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Special Programs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4">Programas Especiales</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Actividades complementarias que enriquecen la experiencia educativa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl mb-4">🌍 Inglés</h3>
              <p className="text-gray-600 mb-4">
                Iniciación al inglés de forma natural a través de canciones, cuentos y actividades cotidianas.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Sesiones diarias integradas</li>
                <li>• Método comunicativo y lúdico</li>
                <li>• Profesores especializados</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl mb-4">🎭 Teatro y Expresión</h3>
              <p className="text-gray-600 mb-4">
                Dramatización, títeres y juego simbólico para desarrollar la comunicación y creatividad.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Actividades semanales</li>
                <li>• Representaciones trimestrales</li>
                <li>• Desarrollo de la confianza</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl mb-4">🌱 Huerto Escolar</h3>
              <p className="text-gray-600 mb-4">
                Contacto con la naturaleza, responsabilidad y conocimiento del ciclo de las plantas.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Actividad semanal al aire libre</li>
                <li>• Cultivo de hortalizas</li>
                <li>• Conciencia ambiental</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl mb-4">🧘 Yoga y Mindfulness</h3>
              <p className="text-gray-600 mb-4">
                Técnicas de relajación, conciencia corporal y gestión emocional adaptadas a infantil.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Sesiones de relajación diarias</li>
                <li>• Respiración consciente</li>
                <li>• Gestión del estrés</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Educational Materials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl mb-6">Materiales Educativos</h2>
              <p className="text-lg text-gray-600 mb-4">
                Trabajamos con materiales de alta calidad que estimulan todos los sentidos y favorecen el aprendizaje autónomo:
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start space-x-3">
                  <span className="text-purple-600 text-xl">✓</span>
                  <span>Material Montessori certificado</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-purple-600 text-xl">✓</span>
                  <span>Juegos de construcción y lógica</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-purple-600 text-xl">✓</span>
                  <span>Materiales sensoriales y manipulativos</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-purple-600 text-xl">✓</span>
                  <span>Biblioteca con cuentos variados</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-purple-600 text-xl">✓</span>
                  <span>Instrumentos musicales infantiles</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-purple-600 text-xl">✓</span>
                  <span>Material artístico de calidad</span>
                </li>
              </ul>
            </div>

            <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1761208663763-c4d30657c910?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVzY2hvb2wlMjBjaGlsZHJlbiUyMGxlYXJuaW5nJTIwY2xhc3Nyb29tfGVufDF8fHx8MTc3NDUzMTk4M3ww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Materiales educativos"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

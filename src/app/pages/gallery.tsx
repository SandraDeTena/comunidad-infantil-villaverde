export function Gallery() {
  const galleryImages = [
    {
      url: "https://images.unsplash.com/photo-1761208663763-c4d30657c910?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVzY2hvb2wlMjBjaGlsZHJlbiUyMGxlYXJuaW5nJTIwY2xhc3Nyb29tfGVufDF8fHx8MTc3NDUzMTk4M3ww&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Aula de aprendizaje",
      category: "Instalaciones"
    },
    {
      url: "https://images.unsplash.com/photo-1548102268-3d7dc56b01e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGNoaWxkcmVuJTIwc2Nob29sJTIwZ3JvdXB8ZW58MXx8fHwxNzc0NTMxOTg1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Nuestros alumnos",
      category: "Actividades"
    },
    {
      url: "https://images.unsplash.com/photo-1761208663281-619e6532aff3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraW5kZXJnYXJ0ZW4lMjBraWRzJTIwcGxheWluZyUyMG91dGRvb3J8ZW58MXx8fHwxNzc0NTMxOTgzfDA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Juego al aire libre",
      category: "Patio"
    },
    {
      url: "https://images.unsplash.com/photo-1607823477653-e2c3980acb86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMHJlYWRpbmclMjBib29rcyUyMGxpYnJhcnl8ZW58MXx8fHwxNzc0NTE2NDgzfDA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Tiempo de lectura",
      category: "Actividades"
    },
    {
      url: "https://images.unsplash.com/photo-1572968725869-7b2fe4203333?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwYXJ0JTIwcGFpbnRpbmclMjBjcmVhdGl2ZXxlbnwxfHx8fDE3NzQ0NDQ2MTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Arte y creatividad",
      category: "Talleres"
    },
    {
      url: "https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFjaGVyJTIwc3R1ZGVudCUyMGludGVyYWN0aW9uJTIwcHJlc2Nob29sfGVufDF8fHx8MTc3NDUzMTk4NXww&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Aprendizaje personalizado",
      category: "Actividades"
    },
    {
      url: "https://images.unsplash.com/photo-1722962495636-86d05a8aa88e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb250ZXNzb3JpJTIwY2xhc3Nyb29tJTIwbWF0ZXJpYWxzfGVufDF8fHx8MTc3NDUzMTk4NHww&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Materiales Montessori",
      category: "Instalaciones"
    },
    {
      url: "https://images.unsplash.com/photo-1758611228434-7b5b697abd0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBidWlsZGluZyUyMGV4dGVyaW9yJTIwbW9kZXJufGVufDF8fHx8MTc3NDQzOTU3NXww&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Nuestro centro",
      category: "Instalaciones"
    }
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-r from-orange-600 to-orange-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl mb-6">Galería</h1>
          <p className="text-xl text-orange-100 max-w-3xl mx-auto">
            Momentos especiales de nuestra comunidad educativa
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg text-gray-600">
            Cada día en la Comunidad Infantil de Villaverde está lleno de descubrimientos, risas y aprendizaje. 
            Aquí puedes ver algunos de los momentos que capturan la esencia de nuestro día a día.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="text-xs text-orange-300 mb-1">{image.category}</div>
                    <h3 className="text-white text-lg">{image.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">Nuestras Actividades</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Un vistazo a la variedad de experiencias que ofrecemos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-orange-50 rounded-xl">
              <div className="text-4xl mb-3">🎨</div>
              <h3 className="text-xl mb-2">Talleres Creativos</h3>
              <p className="text-gray-600 text-sm">
                Pintura, plastilina, collage y mucho más
              </p>
            </div>

            <div className="text-center p-6 bg-blue-50 rounded-xl">
              <div className="text-4xl mb-3">🏃</div>
              <h3 className="text-xl mb-2">Psicomotricidad</h3>
              <p className="text-gray-600 text-sm">
                Juegos y ejercicios para el desarrollo motor
              </p>
            </div>

            <div className="text-center p-6 bg-green-50 rounded-xl">
              <div className="text-4xl mb-3">📚</div>
              <h3 className="text-xl mb-2">Cuentacuentos</h3>
              <p className="text-gray-600 text-sm">
                Historias que despiertan la imaginación
              </p>
            </div>

            <div className="text-center p-6 bg-purple-50 rounded-xl">
              <div className="text-4xl mb-3">🎵</div>
              <h3 className="text-xl mb-2">Música y Ritmo</h3>
              <p className="text-gray-600 text-sm">
                Canciones, instrumentos y expresión musical
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section (Placeholder) */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">Vídeo Presentación</h2>
            <p className="text-xl text-gray-600">
              Descubre nuestro centro en movimiento
            </p>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gray-900 aspect-video flex items-center justify-center">
            <div className="text-center text-white">
              <div className="w-20 h-20 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <p className="text-lg">Vídeo próximamente disponible</p>
              <p className="text-sm text-gray-400 mt-2">
                Visita nuestro Instagram para ver contenido actualizado
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Feed */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">Síguenos en Instagram</h2>
            <p className="text-xl text-gray-600 mb-6">
              No te pierdas nuestras publicaciones diarias
            </p>
            <a
              href="https://www.instagram.com/comunidadinfantil.villaverde/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all"
            >
              <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              @comunidadinfantil.villaverde
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">Lo Que Dicen las Familias</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex space-x-1">
                  <span>⭐</span>
                  <span>⭐</span>
                  <span>⭐</span>
                  <span>⭐</span>
                  <span>⭐</span>
                </div>
              </div>
              <p className="text-gray-600 mb-4 italic">
                "Un lugar excepcional donde mi hijo ha crecido feliz. El equipo es maravilloso y las instalaciones inmejorables."
              </p>
              <p className="text-sm">
                <span className="text-gray-800">María G.</span>
                <span className="text-gray-500"> - Madre de alumno</span>
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex space-x-1">
                  <span>⭐</span>
                  <span>⭐</span>
                  <span>⭐</span>
                  <span>⭐</span>
                  <span>⭐</span>
                </div>
              </div>
              <p className="text-gray-600 mb-4 italic">
                "La atención personalizada y el cariño con el que tratan a los niños es increíble. ¡Totalmente recomendable!"
              </p>
              <p className="text-sm">
                <span className="text-gray-800">Carlos R.</span>
                <span className="text-gray-500"> - Padre de alumno</span>
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex space-x-1">
                  <span>⭐</span>
                  <span>⭐</span>
                  <span>⭐</span>
                  <span>⭐</span>
                  <span>⭐</span>
                </div>
              </div>
              <p className="text-gray-600 mb-4 italic">
                "Mis dos hijos han pasado por aquí y no podría estar más contenta. Un equipo profesional y cercano."
              </p>
              <p className="text-sm">
                <span className="text-gray-800">Laura M.</span>
                <span className="text-gray-500"> - Madre de dos alumnos</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

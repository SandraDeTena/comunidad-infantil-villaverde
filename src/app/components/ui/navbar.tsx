import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";

type DropdownItem = {
  to: string;
  label: string;
};

type NavItem = {
  label: string;
  to?: string;
  children?: DropdownItem[];
};

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);

  const navItems: NavItem[] = [
    { label: "Inicio", to: "/" },
    {
      label: "El Centro",
      children: [
        { to: "/quienes-somos", label: "Quiénes somos" },
        { to: "/proyecto-educativo", label: "Proyecto educativo" },
        { to: "/instalaciones", label: "Instalaciones" },
        { to: "/consejo-escolar", label: "Consejo Escolar" },
      ],
    },
    {
      label: "Etapas",
      children: [
        { to: "/infantil", label: "Infantil" },
        { to: "/primaria", label: "Primaria" },
        { to: "/secundaria", label: "Secundaria" },
      ],
    },
    {
      label: "Familias",
      children: [
        { to: "/descargas", label: "Descargas" },
        { to: "/becas-y-ayudas", label: "Becas y ayudas" },
        { to: "/aula-tea", label: "Aula TEA" },
        { to: "/mediacion", label: "Mediación" },
        { to: "/ampa", label: "AMPA" },
        { to: "/enlaces-de-interes", label: "Enlaces de interés" },
      ],
    },
    {
      label: "Actualidad",
      children: [
        { to: "/noticias", label: "Noticias" },
        { to: "/calendario", label: "Calendario" },
        { to: "/avisos", label: "Avisos" },
      ],
    },
    { label: "Admisiones", to: "/admisiones" },
  ];

  const toggleMobileDropdown = (label: string) => {
    setOpenMobileDropdown((prev) => (prev === label ? null : label));
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3">
          <img
            src="./Logo_horizontal.png"
            alt="Comunidad Infantil de Villaverde"
            className="h-12 w-auto object-contain"
          />
        </Link>

        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item) =>
            item.children ? (
              <div key={item.label} className="group relative">
                <button
                  type="button"
                  className="flex items-center gap-1 rounded-xl px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-blue-50 hover:text-blue-700"
                >
                  {item.label}
                  <ChevronDown size={16} className="mt-[1px]" />
                </button>

                <div className="invisible absolute left-0 top-full z-50 mt-2 w-64 rounded-2xl border border-gray-100 bg-white p-2 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:opacity-100">
                  {item.children.map((child) => (
                    <Link
                      key={child.to}
                      to={child.to}
                      className="block rounded-xl px-4 py-3 text-sm text-gray-700 transition-colors hover:bg-blue-50 hover:text-blue-700"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.label}
                to={item.to!}
                className="rounded-xl px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-blue-50 hover:text-blue-700"
              >
                {item.label}
              </Link>
            )
          )}

          <Link
            to="/contacto"
            className="ml-4 inline-flex items-center rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
          >
            Contacto
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="rounded-xl p-2 text-gray-700 transition hover:bg-gray-100 lg:hidden"
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="border-t border-gray-100 bg-white px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-2">
            {navItems.map((item) =>
              item.children ? (
                <div key={item.label} className="rounded-2xl border border-gray-100">
                  <button
                    type="button"
                    onClick={() => toggleMobileDropdown(item.label)}
                    className="flex w-full items-center justify-between px-4 py-3 text-left text-sm font-medium text-gray-800"
                  >
                    {item.label}
                    <ChevronDown
                      size={18}
                      className={`transition-transform ${
                        openMobileDropdown === item.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {openMobileDropdown === item.label && (
                    <div className="flex flex-col gap-1 px-2 pb-3">
                      {item.children.map((child) => (
                        <Link
                          key={child.to}
                          to={child.to}
                          onClick={() => {
                            setIsMenuOpen(false);
                            setOpenMobileDropdown(null);
                          }}
                          className="rounded-xl px-3 py-3 text-sm text-gray-700 transition-colors hover:bg-blue-50 hover:text-blue-700"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.label}
                  to={item.to!}
                  onClick={() => setIsMenuOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm font-medium text-gray-700 transition-colors hover:bg-blue-50 hover:text-blue-700"
                >
                  {item.label}
                </Link>
              )
            )}

            <Link
              to="/contacto"
              onClick={() => setIsMenuOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
            >
              Solicitar información
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
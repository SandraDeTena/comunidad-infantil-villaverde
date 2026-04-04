import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/ui/layout";
import { Home } from "./pages/home";
import { About } from "./pages/about";
import { Program } from "./pages/program";
import { Admissions } from "./pages/admissions";
import { Gallery } from "./pages/gallery";
import { Contact } from "./pages/contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "sobre-nosotros", Component: About },
      { path: "programa-educativo", Component: Program },
      { path: "admisiones", Component: Admissions },
      { path: "galeria", Component: Gallery },
      { path: "contacto", Component: Contact },
    ],
  },
]);
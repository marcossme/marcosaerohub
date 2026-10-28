/*
  AEROHUB · CONFIGURACIÓN DEL MENÚ
  Añade, modifica o elimina recursos aquí. No necesitas editar assets/app.js.
  "path" es la ruta relativa desde index.html y "type" debe ser "pdf" o "html".
*/
window.AEROHUB_CONFIG = {
  appName: "AeroHub",
  subtitle: "Centro de estudio",
  groups: [
    {
      id: "teoria",
      title: "Documentos / Teoría",
      shortTitle: "Teoría",
      description: "Apuntes y material de consulta",
      icon: "book",
      items: [
        { title: "Tema 1", filename: "Tema_1.pdf", path: "Documentos/Teoria/Tema_1.pdf", type: "pdf", description: "Material teórico · Tema 1" },
        { title: "Tema 2", filename: "Tema_2.pdf", path: "Documentos/Teoria/Tema_2.pdf", type: "pdf", description: "Material teórico · Tema 2" },
        { title: "Tema 3", filename: "Tema_3.pdf", path: "Documentos/Teoria/Tema_3.pdf", type: "pdf", description: "Material teórico · Tema 3" },
        { title: "Tema 4", filename: "Tema_4.pdf", path: "Documentos/Teoria/Tema_4.pdf", type: "pdf", description: "Material teórico · Tema 4" },
        { title: "Tema 5", filename: "Tema_5.pdf", path: "Documentos/Teoria/Tema_5.pdf", type: "pdf", description: "Material teórico · Tema 5" },
        { title: "Tema 6", filename: "Tema_6.pdf", path: "Documentos/Teoria/Tema_6.pdf", type: "pdf", description: "Material teórico · Tema 6" },
        { title: "Tema 7", filename: "Tema_7.pdf", path: "Documentos/Teoria/Tema_7.pdf", type: "pdf", description: "Material teórico · Tema 7" },
        { title: "Teoría Aero", filename: "Teoría Aero.pdf", path: "Documentos/Teoria/Teoría Aero.pdf", type: "pdf", description: "Documento general de teoría aeronáutica" }
      ]
    },
    {
      id: "herramientas",
      title: "Herramientas",
      shortTitle: "Herramientas",
      description: "Páginas interactivas y utilidades propias",
      icon: "tools",
      items: [
        { title: "Conceptos Tema 1", filename: "Conceptos Tema 1.html", path: "Herramientas/Conceptos Tema 1.html", type: "html", description: "Herramienta de Conceptos" },
        { title: "Matemática Tema 2", filename: "Matemática Tema 2.html", path: "Herramientas/Matemática Tema 2.html", type: "html", description: "Herramienta de matemáticas" },
        { title: "Simulador Avión", filename: "Simulador Avión.html", path: "Herramientas/Simulador Avión.html", type: "html", description: "Simulador Avión" }
      ]
    }
  ]
};

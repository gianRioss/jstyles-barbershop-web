import {
  FiScissors,
  FiPackage,
  FiZap,
} from "react-icons/fi";

export const categorias = [
  "Todos",
  "Barbería",
  "Cuidado personal",
  "Vapers",
];

export const categoriasInfo = [
  {
    nombre: "Barbería",
    descripcion:
      "Styling, cuidado capilar, color, barba, accesorios y herramientas.",
    icono: FiScissors,
  },
  {
    nombre: "Cuidado personal",
    descripcion:
      "Perfumería, cuidado facial y productos de cuidado corporal.",
    icono: FiPackage,
  },
  {
    nombre: "Vapers",
    descripcion:
      "Vapers disponibles en distintos sabores y presentaciones.",
    icono: FiZap,
  },
];

export const subcategorias = {
  Barbería: [
    "Todos",
    "Styling y fijación",
    "Cuidado capilar",
    "Color y matización",
    "Barba y afeitado",
    "Accesorios",
    "Herramientas",
  ],

  "Cuidado personal": [
    "Todos",
    "Perfumería",
    "Cuidado facial",
    "Cuidado corporal",
  ],

  Vapers: [
    "Todos",
    "Desechables",
  ],
};
import { useMemo, useState } from "react";
import { categorias } from "../data/categorias";
import { productos } from "../data/productos";
import { fallbackImage, whatsappNumber } from "../data/site";

export default function ProductsSection() {
  const [categoriaActiva, setCategoriaActiva] = useState("Todos");

  const productosFiltrados = useMemo(() => {
    if (categoriaActiva === "Todos") return productos;
    return productos.filter((producto) => producto.categoria === categoriaActiva);
  }, [categoriaActiva]);

  return (
    <section id="productos" className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-10">
        <p className="mb-3 text-sm uppercase tracking-[0.25em] text-amber-400">
          Catálogo
        </p>
        <h3 className="text-3xl font-bold md:text-4xl">
          Explorá por categoría
        </h3>
        <p className="mt-3 max-w-2xl text-neutral-400">
          Elegí una categoría para ver solo lo que te interesa, sin perderte en una lista interminable.
        </p>
      </div>

      <div className="mb-8 flex flex-wrap gap-3">
        {categorias.map((categoria) => {
          const activa = categoriaActiva === categoria;

          return (
            <button
              key={categoria}
              type="button"
              onClick={() => setCategoriaActiva(categoria)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                activa
                  ? "bg-amber-400 text-black"
                  : "border border-white/10 bg-white/5 text-white hover:border-amber-400 hover:text-amber-400"
              }`}
            >
              {categoria}
            </button>
          );
        })}
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {productosFiltrados.map((item) => (
          <article
            key={item.id}
            className="overflow-hidden rounded-3xl border border-white/10 bg-white/5"
          >
            <img
              src={item.imagen}
              alt={item.nombre}
              className="h-56 w-full object-cover"
              onError={(e) => {
                e.currentTarget.src = fallbackImage;
              }}
            />

            <div className="p-6">
              <span className="mb-2 inline-flex rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1 text-xs text-amber-300">
                {item.categoria}
              </span>

              <div className="mt-2 flex items-start justify-between gap-3">
                <h4 className="text-lg font-bold">{item.nombre}</h4>
                <span className="rounded-full bg-amber-400 px-3 py-1 text-sm font-bold text-black">
                  {item.precio}
                </span>
              </div>

              <p className="mt-4 text-sm leading-6 text-neutral-400">
                {item.descripcion}
              </p>

              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                  `Hola, quiero consultar por ${item.nombre}.`
                )}`}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex w-full items-center justify-center rounded-2xl border border-amber-400/40 px-4 py-3 text-sm font-semibold text-amber-300 transition hover:bg-amber-400 hover:text-black"
              >
                Consultar por WhatsApp
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
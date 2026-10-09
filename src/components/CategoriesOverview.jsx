import { categoriasInfo } from "../data/categorias";

export default function CategoriesOverview() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-10">
        <p className="mb-3 text-sm uppercase tracking-[0.25em] text-amber-400">
          Categorías
        </p>
        <h3 className="text-3xl font-bold md:text-4xl">
          Explorá por tipo de producto
        </h3>
        <p className="mt-3 max-w-2xl text-neutral-400">
          La estructura está preparada para crecer sin tener que crear una
          sección nueva por cada producto.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {categoriasInfo.map((categoria) => {
          const Icono = categoria.icono;

          return (
            <div
              key={categoria.nombre}
              className="rounded-3xl border border-white/10 bg-white/5 p-6"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-400/15 text-amber-400">
                <Icono size={22} />
              </div>
              <h4 className="text-xl font-bold">{categoria.nombre}</h4>
              <p className="mt-3 text-sm leading-6 text-neutral-400">
                {categoria.descripcion}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
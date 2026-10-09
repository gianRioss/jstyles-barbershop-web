import { preciosServicios } from "../data/servicios";

export default function ServicesSection() {
  return (
    <section id="servicios" className="border-y border-white/10 bg-white/5">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10">
          <p className="mb-3 text-sm uppercase tracking-[0.25em] text-amber-400">
            Servicios
          </p>
          <h3 className="text-3xl font-bold md:text-4xl">Lista de precios</h3>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {preciosServicios.map((item) => (
            <div
              key={item.servicio}
              className="flex items-center justify-between rounded-3xl border border-white/10 bg-neutral-900 px-5 py-4"
            >
              <span className="font-medium">{item.servicio}</span>
              <span className="rounded-full bg-amber-400 px-3 py-1 text-sm font-bold text-black">
                {item.precio}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
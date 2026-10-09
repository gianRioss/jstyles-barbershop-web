import { FaWhatsapp } from "react-icons/fa";
import { FiStar, FiTruck } from "react-icons/fi";

export default function Benefits() {
  return (
    <section className="border-b border-white/10 bg-white/5">
      <div className="mx-auto grid max-w-7xl gap-4 px-6 py-8 md:grid-cols-3">
        <div className="rounded-3xl border border-white/10 bg-neutral-900 p-5">
          <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-400/15 text-amber-400">
            <FiTruck size={20} />
          </div>
          <h3 className="font-semibold">Envíos a domicilio</h3>
          <p className="mt-2 text-sm text-neutral-400">
            Consultanos por WhatsApp y coordinamos tu entrega.
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-neutral-900 p-5">
          <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-400/15 text-amber-400">
            <FaWhatsapp size={20} />
          </div>
          <h3 className="font-semibold">Atención rápida</h3>
          <p className="mt-2 text-sm text-neutral-400">
            Botones directos a WhatsApp en toda la página.
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-neutral-900 p-5">
          <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-400/15 text-amber-400">
            <FiStar size={20} />
          </div>
          <h3 className="font-semibold">Promos y novedades</h3>
          <p className="mt-2 text-sm text-neutral-400">
            Productos destacados, ofertas y categorías listas para crecer.
          </p>
        </div>
      </div>
    </section>
  );
}
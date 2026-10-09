import { whatsappNumber } from "../data/site";

export default function ShippingSection() {
  return (
    <section id="envios" className="border-y border-white/10 bg-white/5">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-16 md:grid-cols-2 md:items-center">
        <div>
          <p className="mb-3 text-sm uppercase tracking-[0.25em] text-amber-400">
            Envíos a domicilio
          </p>
          <h3 className="text-3xl font-bold md:text-4xl">
            Pedí por WhatsApp y coordinamos la entrega
          </h3>
          <p className="mt-4 max-w-xl text-neutral-400">
            Si querés un producto, escribinos directo por WhatsApp. Te pasamos
            disponibilidad, precio y coordinamos el envío a domicilio.
          </p>

          <a
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
              "Hola, quiero consultar por envíos a domicilio."
            )}`}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex rounded-full bg-green-500 px-6 py-3 font-semibold text-white transition hover:scale-105"
          >
            Pedir por WhatsApp
          </a>
        </div>

        <div className="grid gap-4">
          <div className="rounded-3xl border border-white/10 bg-neutral-900 p-5">
            <h4 className="font-semibold">1. Escribinos</h4>
            <p className="mt-2 text-sm text-neutral-400">
              Mandanos mensaje con el producto o servicio que querés consultar.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-neutral-900 p-5">
            <h4 className="font-semibold">2. Confirmamos stock</h4>
            <p className="mt-2 text-sm text-neutral-400">
              Te respondemos con disponibilidad, precio y opciones de entrega.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-neutral-900 p-5">
            <h4 className="font-semibold">3. Coordinamos el envío</h4>
            <p className="mt-2 text-sm text-neutral-400">
              Cerramos todo por WhatsApp para que el proceso sea rápido y simple.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
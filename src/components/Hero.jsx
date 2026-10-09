import { motion as Motion } from "motion/react";
import { FiClock, FiMapPin, FiTag } from "react-icons/fi";
import { fallbackImage, whatsappNumber } from "../data/site";

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden border-b border-white/10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(251,191,36,0.18),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.04),transparent_20%)]" />

      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 md:grid-cols-2 md:py-24">
        <Motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10"
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-2 text-sm text-amber-300">
            <FiTag />
            Productos, servicios y atención directa por WhatsApp
          </span>

          <h2 className="text-4xl font-black leading-tight md:text-6xl">
            Cortes, productos y estilo
            <span className="block text-amber-400">en JStyles Barber</span>
          </h2>

          <p className="mt-5 max-w-xl text-base text-neutral-300 md:text-lg">
            Descubrí nuestros servicios, productos destacados y novedades.
            Hacemos envíos a domicilio y te respondemos directo por WhatsApp.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#productos"
              className="rounded-full bg-amber-400 px-6 py-3 font-semibold text-black transition hover:scale-105"
            >
              Ver productos
            </a>

            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                "Hola, quiero consultar por productos, precios y envíos."
              )}`}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/15 px-6 py-3 font-semibold transition hover:border-amber-400 hover:text-amber-400"
            >
              Hablar por WhatsApp
            </a>
          </div>

          <div className="mt-8 flex flex-col gap-3 text-sm text-neutral-300 sm:flex-row sm:flex-wrap sm:gap-6">
            <span className="inline-flex items-center gap-2">
              <FiMapPin className="text-amber-400" />
              Laprida 4177 / Cochabamba 796
            </span>
            <span className="inline-flex items-center gap-2">
              <FiClock className="text-amber-400" />
              Lunes a sábado de 10:30 a 20:00 hs
            </span>
          </div>
        </Motion.div>

        <Motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="overflow-hidden rounded-4xl border border-white/10 bg-white/5"
        >
          <img
            src="/images/hero.jpg"
            alt="Portada JStyles Barber"
            className="h-130 w-full object-cover"
            onError={(e) => {
              e.currentTarget.src = fallbackImage;
            }}
          />
        </Motion.div>
      </div>
    </section>
  );
}
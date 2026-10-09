import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { instagramUrl, tiktokUrl, whatsappNumber } from "../data/site";

export default function ContactSection() {
  return (
    <section id="contacto" className="border-t border-white/10 bg-neutral-950">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.25em] text-amber-400">
              Contacto
            </p>
            <h3 className="text-3xl font-bold md:text-4xl">
              Redes y contacto directo
            </h3>
            <p className="mt-4 max-w-xl text-neutral-400">
              La página está pensada para llevar al cliente directo a WhatsApp,
              reforzando además la confianza con Instagram y TikTok.
            </p>
          </div>

          <div className="grid gap-4">
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between rounded-3xl border border-white/10 bg-white/5 px-5 py-4 transition hover:border-green-400 hover:bg-white/10"
            >
              <span className="flex items-center gap-3 text-lg font-semibold">
                <FaWhatsapp className="text-2xl text-green-400" />
                WhatsApp
              </span>
              <span className="text-neutral-400">Consultas rápidas</span>
            </a>

            <a
              href={instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between rounded-3xl border border-white/10 bg-white/5 px-5 py-4 transition hover:border-pink-400 hover:bg-white/10"
            >
              <span className="flex items-center gap-3 text-lg font-semibold">
                <FaInstagram className="text-2xl text-pink-400" />
                Instagram
              </span>
              <span className="text-neutral-400">Resultados y promos</span>
            </a>

            <a
              href={tiktokUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between rounded-3xl border border-white/10 bg-white/5 px-5 py-4 transition hover:border-cyan-400 hover:bg-white/10"
            >
              <span className="flex items-center gap-3 text-lg font-semibold">
                <FaTiktok className="text-2xl text-cyan-400" />
                TikTok
              </span>
              <span className="text-neutral-400">Contenido viral</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
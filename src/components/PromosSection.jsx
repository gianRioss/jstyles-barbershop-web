import { motion as Motion } from "motion/react";
import { FiStar } from "react-icons/fi";
import { promos } from "../data/promos";

export default function PromosSection() {
  return (
    <section id="promos" className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-10">
        <p className="mb-3 text-sm uppercase tracking-[0.25em] text-amber-400">
          Promociones
        </p>
        <h3 className="text-3xl font-bold md:text-4xl">Ofertas que convierten</h3>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {promos.map((promo, index) => (
          <Motion.div
            key={promo}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            className="rounded-3xl border border-white/10 bg-neutral-900 p-6"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-400/15 text-amber-400">
              <FiStar size={22} />
            </div>
            <p className="text-lg font-semibold leading-7">{promo}</p>
          </Motion.div>
        ))}
      </div>
    </section>
  );
}
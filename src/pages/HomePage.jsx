import { Link } from "react-router";

import { motion as Motion, useReducedMotion } from "motion/react";

import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";

import {
  FiArrowRight,
  FiClock,
  FiMapPin,
  FiTruck,
  FiStar,
  FiScissors,
  FiPackage,
  FiCheckCircle,
} from "react-icons/fi";

import { productos } from "../data/productos";
import { whatsappNumber, fallbackImage } from "../data/site";
import { preciosServicios } from "../data/servicios";

export default function HomePage() {
  const destacados = productos
    .filter((producto) => producto.destacado)
    .slice(0, 6);

  const reducirMovimiento = useReducedMotion();

  const reveal = {
    hidden: {
      opacity: 0,
      y: reducirMovimiento ? 0 : 28,
    },

    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reducirMovimiento ? 0 : 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const revealLeft = {
    hidden: {
      opacity: 0,
      x: reducirMovimiento ? 0 : -30,
    },

    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: reducirMovimiento ? 0 : 0.75,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const revealRight = {
    hidden: {
      opacity: 0,
      x: reducirMovimiento ? 0 : 35,
      y: reducirMovimiento ? 0 : 24,
      scale: reducirMovimiento ? 1 : 0.96,
   },

    visible: {
       opacity: 1,
       x: 0,
       y: 0,
       scale: 1,

      transition: {
        duration: reducirMovimiento ? 0 : 0.9,
        ease: [0.22, 1, 0.36, 1],
     },
    },
  };

  const staggerContainer = {
    hidden: {},

    visible: {
      transition: {
        staggerChildren: reducirMovimiento ? 0 : 0.1,
      },
    },
  };

  const staggerItem = {
    hidden: {
      opacity: 0,
      y: reducirMovimiento ? 0 : 22,
    },

    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reducirMovimiento ? 0 : 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const viewport = {
    once: true,
    amount: 0.15,
  };

  return (
    <div className="min-h-screen bg-[#070707] text-white">
      {/* ===================================================== */}
      {/* HEADER */}
      {/* ===================================================== */}

      <Motion.header
        initial={
          reducirMovimiento
            ? false
            : {
                opacity: 0,
                y: -12,
              }
        }
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.55,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="sticky top-0 z-50 border-b border-white/6 bg-[#070707]/90 backdrop-blur-xl"
      >
        <div className="mx-auto flex max-w-360 items-center justify-between px-5 py-4 md:px-8 lg:px-12">
          <Link to="/" className="flex items-center gap-4">
            <div className="flex h-14 w-24 items-center justify-center overflow-hidden">
              <img
                src="/images/logo.png"
                alt="JStyles Barbershop"
                className="h-full w-full scale-125 object-contain"
              />
            </div>

            <div className="hidden sm:block">
              <h1 className="text-lg font-black leading-none tracking-tight">
                J<span className="text-amber-400">Styles</span> Barber
              </h1>

              <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.24em] text-neutral-500">
                Barber · Shop
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-7 text-sm font-medium text-neutral-400 lg:flex">
            <a
              href="#servicios"
              className="relative transition hover:text-white"
            >
              Servicios
            </a>

            <a
              href="#destacados"
              className="relative transition hover:text-white"
            >
              Productos
            </a>

            <Link
              to="/catalogo"
              className="relative transition hover:text-white"
            >
              Catálogo
            </Link>

            <a
              href="#envios"
              className="relative transition hover:text-white"
            >
              Envíos
            </a>

            <a
              href="#contacto"
              className="relative transition hover:text-white"
            >
              Contacto
            </a>
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              to="/catalogo"
              className="rounded-full border border-white/10 px-4 py-2.5 text-sm font-semibold text-neutral-300 transition duration-300 hover:border-white/25 hover:bg-white/5 hover:text-white lg:hidden"
            >
              Catálogo
            </Link>

            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                "Hola, quiero consultar por productos, servicios y envíos de JStyles."
              )}`}
              target="_blank"
              rel="noreferrer"
              className="hidden items-center gap-2 rounded-full bg-amber-400 px-5 py-2.5 text-sm font-bold text-black transition duration-300 hover:-translate-y-0.5 hover:bg-amber-300 sm:flex"
            >
              <FaWhatsapp />
              WhatsApp
            </a>
          </div>
        </div>
      </Motion.header>

      <main>
        {/* ===================================================== */}
        {/* HERO */}
        {/* ===================================================== */}

        <section
          id="inicio"
          className="relative overflow-hidden border-b border-white/6"
        >
          <div className="absolute -left-40 top-0 h-125 w-125 rounded-full bg-amber-400/5 blur-3xl" />

          <div className="absolute -right-48 bottom-0 h-137.5 w-137.5 rounded-full bg-white/2.5 blur-3xl" />

          <div className="relative mx-auto grid min-h-180 max-w-360 items-center gap-12 px-5 py-16 md:px-8 lg:grid-cols-[1.02fr_0.98fr] lg:px-12 lg:py-20">
            {/* TEXTO */}

            <Motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="relative z-10"
            >
              <Motion.div
                variants={staggerItem}
                className="mb-7 flex items-center gap-4"
              >
                <span className="h-px w-10 bg-amber-400" />

                <p className="text-xs font-bold uppercase tracking-[0.35em] text-amber-400">
                  Barber · Shop · JStyles
                </p>
              </Motion.div>

              <Motion.h2
                variants={staggerItem}
                className="max-w-3xl text-5xl font-black leading-[0.94] tracking-[-0.045em] sm:text-6xl md:text-7xl lg:text-[82px]"
              >
                Estilo que
                <span className="block text-neutral-500">
                  se nota.
                </span>
              </Motion.h2>

              <Motion.p
                variants={staggerItem}
                className="mt-7 max-w-xl text-base leading-7 text-neutral-400 md:text-lg"
              >
                Barbería, productos profesionales y atención directa.
                Descubrí JStyles y encontrá todo lo que necesitás para
                tu estilo en un solo lugar.
              </Motion.p>

              <Motion.div
                variants={staggerItem}
                className="mt-9 flex flex-wrap gap-3"
              >
                <Link
                  to="/catalogo"
                  className="group inline-flex items-center gap-3 rounded-full bg-amber-400 px-6 py-3.5 text-sm font-bold text-black transition duration-300 hover:-translate-y-0.5 hover:bg-amber-300"
                >
                  Explorar catálogo

                  <FiArrowRight className="transition duration-300 group-hover:translate-x-1" />
                </Link>

                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                    "Hola JStyles, quiero hacer una consulta."
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 rounded-full border border-white/10 px-6 py-3.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/5"
                >
                  <FaWhatsapp className="text-green-400" />
                  Hablar con nosotros
                </a>
              </Motion.div>

              <Motion.div
                variants={staggerItem}
                className="mt-10 grid max-w-xl gap-4 border-t border-white/[0.07] pt-7 sm:grid-cols-2"
              >
                <div className="flex items-start gap-3">
                  <FiMapPin className="mt-0.5 shrink-0 text-lg text-amber-400" />

                  <div>
                    <p className="text-sm font-semibold text-white">
                      Nuestras ubicaciones
                    </p>

                    <p className="mt-1 text-sm leading-6 text-neutral-500">
                      Laprida 4177
                      <br />
                      Cochabamba 796
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <FiClock className="mt-0.5 shrink-0 text-lg text-amber-400" />

                  <div>
                    <p className="text-sm font-semibold text-white">
                      Horarios
                    </p>

                    <p className="mt-1 text-sm leading-6 text-neutral-500">
                      Lunes a sábado
                      <br />
                      10:30 a 20:00 hs
                    </p>
                  </div>
                </div>
              </Motion.div>
            </Motion.div>

            {/* IMAGEN */}

            <Motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.2,
              }}
              variants={revealRight}
              className="relative"
            >

              <div className="absolute -inset-4 rounded-[40px] bg-amber-400/3 blur-2xl" />

              <div className="group relative overflow-hidden rounded-4xl border border-white/8 bg-[#101010]">
                <img
                  src="/images/hero.jpg"
                  alt="JStyles Barber"
                  className="h-125 w-full object-cover transition duration-1200 ease-out group-hover:scale-[1.025] sm:h-145 lg:h-160"
                  onError={(e) => {
                    e.currentTarget.src = fallbackImage;
                  }}
                />

                <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/5 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-amber-400">
                        JStyles Barber
                      </p>

                      <p className="mt-2 max-w-xs text-xl font-bold leading-snug sm:text-2xl">
                        Una experiencia pensada para tu estilo.
                      </p>
                    </div>

                    <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/20 bg-black/30 backdrop-blur-md transition duration-300 group-hover:translate-x-1 group-hover:border-amber-400/40 sm:flex">
                      <FiArrowRight />
                    </div>
                  </div>
                </div>
              </div>
            </Motion.div>
          </div>
        </section>

        {/* ===================================================== */}
        {/* BENEFICIOS */}
        {/* ===================================================== */}

        <section className="border-b border-white/6">
          <Motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={staggerContainer}
            className="mx-auto grid max-w-360 divide-y divide-white/6 px-5 md:grid-cols-3 md:divide-x md:divide-y-0 md:px-8 lg:px-12"
          >
            <Motion.div
              variants={staggerItem}
              className="group flex gap-4 py-7 md:px-6 lg:px-8"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/3 text-amber-400 transition duration-300 group-hover:border-amber-400/30 group-hover:bg-amber-400/[0.07]">
                <FiScissors />
              </div>

              <div>
                <h3 className="font-bold">
                  Servicios profesionales
                </h3>

                <p className="mt-1 text-sm leading-6 text-neutral-500">
                  Cortes, barba, color y servicios de barbería.
                </p>
              </div>
            </Motion.div>

            <Motion.div
              variants={staggerItem}
              className="group flex gap-4 py-7 md:px-6 lg:px-8"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/3 text-amber-400 transition duration-300 group-hover:border-amber-400/30 group-hover:bg-amber-400/[0.07]">
                <FiPackage />
              </div>

              <div>
                <h3 className="font-bold">
                  Productos seleccionados
                </h3>

                <p className="mt-1 text-sm leading-6 text-neutral-500">
                  Barbería, cabello, perfumería y cuidado personal.
                </p>
              </div>
            </Motion.div>

            <Motion.div
              variants={staggerItem}
              className="group flex gap-4 py-7 md:px-6 lg:px-8"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/3 text-amber-400 transition duration-300 group-hover:border-amber-400/30 group-hover:bg-amber-400/[0.07]">
                <FiTruck />
              </div>

              <div>
                <h3 className="font-bold">
                  Envíos a domicilio
                </h3>

                <p className="mt-1 text-sm leading-6 text-neutral-500">
                  Consultanos y coordinamos tu entrega por WhatsApp.
                </p>
              </div>
            </Motion.div>
          </Motion.div>
        </section>

        {/* ===================================================== */}
        {/* SERVICIOS */}
        {/* ===================================================== */}

        <section
          id="servicios"
          className="border-b border-white/6"
        >
          <div className="mx-auto max-w-360 px-5 py-20 md:px-8 md:py-24 lg:px-12">
            <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
              <Motion.div
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                variants={revealLeft}
              >
                <div className="flex items-center gap-4">
                  <span className="h-px w-8 bg-amber-400" />

                  <p className="text-xs font-bold uppercase tracking-[0.3em] text-amber-400">
                    Servicios
                  </p>
                </div>

                <h2 className="mt-6 text-4xl font-black tracking-[-0.035em] md:text-5xl">
                  Barbería sin
                  <span className="block text-neutral-500">
                    vueltas.
                  </span>
                </h2>

                <p className="mt-6 max-w-md leading-7 text-neutral-400">
                  Elegí el servicio que necesitás y consultanos
                  directamente para coordinar tu visita.
                </p>

                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                    "Hola JStyles, quiero consultar por un servicio de barbería."
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="group mt-8 inline-flex items-center gap-3 text-sm font-bold text-amber-400 transition hover:text-amber-300"
                >
                  Consultar por WhatsApp

                  <FiArrowRight className="transition duration-300 group-hover:translate-x-1" />
                </a>
              </Motion.div>

              <Motion.div
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                variants={staggerContainer}
                className="border-t border-white/8"
              >
                {preciosServicios.map((item, index) => (
                  <Motion.div
                    key={item.servicio}
                    variants={staggerItem}
                    className="group flex items-center justify-between gap-6 border-b border-white/8 py-5 transition duration-300 hover:border-amber-400/20 md:py-6"
                  >
                    <div className="flex items-center gap-5">
                      <span className="hidden w-7 text-xs font-medium text-neutral-700 transition group-hover:text-amber-400 sm:block">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="text-lg font-semibold transition group-hover:translate-x-1 group-hover:text-amber-300 md:text-xl">
                        {item.servicio}
                      </span>
                    </div>

                    <span className="shrink-0 text-lg font-black text-white md:text-xl">
                      {item.precio}
                    </span>
                  </Motion.div>
                ))}
              </Motion.div>
            </div>
          </div>
        </section>

        {/* ===================================================== */}
        {/* DESTACADOS */}
        {/* ===================================================== */}

        <section
          id="destacados"
          className="mx-auto max-w-360 px-5 py-20 md:px-8 md:py-24 lg:px-12"
        >
          <Motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={reveal}
            className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
          >
            <div>
              <div className="flex items-center gap-4">
                <span className="h-px w-8 bg-amber-400" />

                <p className="text-xs font-bold uppercase tracking-[0.3em] text-amber-400">
                  JStyles Selection
                </p>
              </div>

              <h2 className="mt-5 text-4xl font-black tracking-[-0.035em] md:text-5xl">
                Productos destacados.
              </h2>

              <p className="mt-4 max-w-xl leading-7 text-neutral-400">
                Una selección de productos disponibles en JStyles para
                barbería, cabello y cuidado personal.
              </p>
            </div>

            <Link
              to="/catalogo"
              className="group inline-flex w-fit items-center gap-3 text-sm font-bold text-white transition hover:text-amber-400"
            >
              Ver catálogo completo

              <FiArrowRight className="transition duration-300 group-hover:translate-x-1" />
            </Link>
          </Motion.div>

          {destacados.length > 0 ? (
            
            <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2 xl:grid-cols-3">
            
              {destacados.map((item) => (
               <Motion.article
                  key={item.id}
                  initial={
                    reducirMovimiento
                    ? false
                    : {
                        opacity: 0,
                        y: 32,
                        scale: 0.97,
                    }
                 }
                 whileInView={{
                   opacity: 1,
                   y: 0,
                   scale: 1,
                 }}
                 viewport={{
                  once: true,
                  amount: 0.2,
                 }}
                 whileHover={
                   reducirMovimiento
                     ? undefined
                     : {
                         y: -6,
                   }
                 }
                 whileTap={
                   reducirMovimiento
                     ? undefined
                     : {
                        scale: 0.98,
                       }
                 }
                 transition={{
                   duration: reducirMovimiento ? 0 : 0.55,
                   ease: [0.22, 1, 0.36, 1],
                 }}
                 className="group"
                >
                  <div className="relative overflow-hidden rounded-[28px] border border-white/[0.07] bg-[#0d0d0d] transition duration-500 group-hover:border-amber-400/20">
                    <div className="relative flex aspect-[4/4.4] items-center justify-center overflow-hidden">
                      <img
                        src={item.imagen || fallbackImage}
                        alt={item.nombre}
                        loading="lazy"
                        className="h-full w-full object-contain p-3 transition duration-700 ease-out group-hover:scale-[1.04]"
                        onError={(e) => {
                          e.currentTarget.src = fallbackImage;
                        }}
                      />

                      <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

                      <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-amber-400/20 bg-black/70 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-amber-300 backdrop-blur-md">
                        <FiStar />
                        Destacado
                      </span>

                      <div className="absolute bottom-4 left-4 right-4 hidden translate-y-4 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 md:block">
                        <a
                          href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                            `Hola, quiero consultar por ${item.nombre}. ¿Tenés stock? ¿Hacen envíos?`
                          )}`}
                          target="_blank"
                          rel="noreferrer"
                          className="flex w-full items-center justify-between rounded-2xl bg-white px-5 py-4 text-sm font-bold text-black shadow-xl transition hover:bg-amber-400"
                        >
                          Consultar producto
                          <FiArrowRight />
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="px-1 pt-5">
                    <div className="mb-2 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-neutral-500">
                      {item.marca && (
                        <>
                          <span>{item.marca}</span>
                          <span className="text-neutral-700">
                            /
                          </span>
                        </>
                      )}

                      <span>
                        {item.subcategoria || item.categoria}
                      </span>
                    </div>

                    <div className="flex items-start justify-between gap-5">
                      <h3 className="max-w-[75%] text-xl font-bold leading-snug tracking-tight transition group-hover:text-amber-300">
                        {item.nombre}
                      </h3>

                      <span className="shrink-0 text-lg font-black">
                        {item.precio}
                      </span>
                    </div>

                    <p className="mt-3 h-12 overflow-hidden text-sm leading-6 text-neutral-500">
                      {item.descripcion}
                    </p>

                    <a
                      href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                        `Hola, quiero consultar por ${item.nombre}. ¿Tenés stock? ¿Hacen envíos?`
                      )}`}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-amber-400 md:hidden"
                    >
                      Consultar
                      <FiArrowRight />
                    </a>
                  </div>
                </Motion.article>
              ))}
            </div>
          ) : (
            <div className="rounded-[28px] border border-white/[0.07] bg-white/2.5 px-6 py-16 text-center text-neutral-500">
              Próximamente nuevos productos destacados.
            </div>
          )}

          <Motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={reveal}
            className="mt-14 flex justify-center"
          >
            <Link
              to="/catalogo"
              className="group inline-flex items-center gap-3 rounded-full border border-white/10 px-6 py-3.5 text-sm font-bold transition duration-300 hover:-translate-y-0.5 hover:border-amber-400/50 hover:text-amber-400"
            >
              Explorar todos los productos

              <FiArrowRight className="transition duration-300 group-hover:translate-x-1" />
            </Link>
          </Motion.div>
        </section>

        {/* ===================================================== */}
        {/* ENVÍOS */}
        {/* ===================================================== */}

        <section
          id="envios"
          className="border-y border-white/6 bg-[#0a0a0a]"
        >
          <div className="mx-auto grid max-w-360 gap-14 px-5 py-20 md:px-8 md:py-24 lg:grid-cols-2 lg:items-center lg:px-12">
            <Motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              variants={revealLeft}
            >
              <div className="flex items-center gap-4">
                <span className="h-px w-8 bg-amber-400" />

                <p className="text-xs font-bold uppercase tracking-[0.3em] text-amber-400">
                  Envíos
                </p>
              </div>

              <h2 className="mt-6 max-w-xl text-4xl font-black tracking-[-0.035em] md:text-5xl">
                Elegís.
                <span className="block text-neutral-500">
                  Nosotros coordinamos.
                </span>
              </h2>

              <p className="mt-6 max-w-xl leading-7 text-neutral-400">
                Consultanos por el producto que buscás. Confirmamos
                disponibilidad, precio y coordinamos la entrega
                directamente por WhatsApp.
              </p>

              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                  "Hola JStyles, quiero consultar por un envío a domicilio."
                )}`}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-green-500 px-6 py-3.5 text-sm font-bold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-green-400"
              >
                <FaWhatsapp className="text-lg" />
                Consultar envío
              </a>
            </Motion.div>

            <Motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              variants={staggerContainer}
              className="border-t border-white/8"
            >
              {[
                {
                  numero: "01",
                  titulo: "Elegí tu producto",
                  texto:
                    "Buscá en nuestro catálogo y encontrá lo que necesitás.",
                },
                {
                  numero: "02",
                  titulo: "Consultá disponibilidad",
                  texto:
                    "Escribinos por WhatsApp y confirmamos stock y precio.",
                },
                {
                  numero: "03",
                  titulo: "Coordinamos la entrega",
                  texto:
                    "Definimos juntos la forma de entrega de manera simple.",
                },
              ].map((paso) => (
                <Motion.div
                  key={paso.numero}
                  variants={staggerItem}
                  className="group grid grid-cols-[42px_1fr] gap-4 border-b border-white/8 py-6 transition duration-300 hover:border-amber-400/20"
                >
                  <span className="text-xs font-bold text-amber-400">
                    {paso.numero}
                  </span>

                  <div>
                    <h3 className="text-lg font-bold transition group-hover:text-amber-300">
                      {paso.titulo}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-neutral-500">
                      {paso.texto}
                    </p>
                  </div>
                </Motion.div>
              ))}
            </Motion.div>
          </div>
        </section>

        {/* ===================================================== */}
        {/* EXPERIENCIA */}
        {/* ===================================================== */}

        <section className="mx-auto max-w-360 px-5 py-20 md:px-8 md:py-24 lg:px-12">
          <Motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={reveal}
            className="group relative overflow-hidden rounded-[36px] border border-white/[0.07] bg-[#101010] px-7 py-12 transition duration-500 hover:border-amber-400/15 sm:px-10 md:px-14 md:py-16"
          >
            <div className="absolute -right-20 -top-28 h-80 w-80 rounded-full bg-amber-400/[0.07] blur-3xl transition duration-700 group-hover:bg-amber-400/10" />

            <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
              <div className="max-w-3xl">
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-amber-400">
                  JStyles Barber
                </p>

                <h2 className="mt-5 text-4xl font-black tracking-[-0.035em] md:text-5xl">
                  Más que un corte.
                  <span className="block text-neutral-500">
                    Una experiencia completa.
                  </span>
                </h2>

                <Motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewport}
                  variants={staggerContainer}
                  className="mt-7 grid gap-3 sm:grid-cols-2"
                >
                  {[
                    "Atención personalizada",
                    "Productos profesionales",
                    "Venta y asesoramiento",
                    "Envíos a domicilio",
                  ].map((beneficio) => (
                    <Motion.div
                      key={beneficio}
                      variants={staggerItem}
                      className="flex items-center gap-3 text-sm text-neutral-400"
                    >
                      <FiCheckCircle className="shrink-0 text-amber-400" />
                      {beneficio}
                    </Motion.div>
                  ))}
                </Motion.div>
              </div>

              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                  "Hola JStyles, quiero hacer una consulta."
                )}`}
                target="_blank"
                rel="noreferrer"
                className="group/cta inline-flex w-fit items-center gap-3 rounded-full bg-amber-400 px-6 py-3.5 text-sm font-bold text-black transition duration-300 hover:-translate-y-0.5 hover:bg-amber-300"
              >
                Contactar JStyles

                <FiArrowRight className="transition duration-300 group-hover/cta:translate-x-1" />
              </a>
            </div>
          </Motion.div>
        </section>

        {/* ===================================================== */}
        {/* CONTACTO */}
        {/* ===================================================== */}

        <section
          id="contacto"
          className="border-t border-white/6"
        >
          <div className="mx-auto max-w-360 px-5 py-20 md:px-8 md:py-24 lg:px-12">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
              <Motion.div
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                variants={revealLeft}
              >
                <div className="flex items-center gap-4">
                  <span className="h-px w-8 bg-amber-400" />

                  <p className="text-xs font-bold uppercase tracking-[0.3em] text-amber-400">
                    Contacto
                  </p>
                </div>

                <h2 className="mt-6 text-4xl font-black tracking-[-0.035em] md:text-5xl">
                  Seguinos.
                  <span className="block text-neutral-500">
                    Hablemos.
                  </span>
                </h2>

                <p className="mt-6 max-w-md leading-7 text-neutral-400">
                  Consultas, productos, novedades, trabajos y contenido
                  de JStyles en nuestros canales oficiales.
                </p>
              </Motion.div>

              <Motion.div
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                variants={staggerContainer}
                className="border-t border-white/8"
              >
                <Motion.a
                  variants={staggerItem}
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between border-b border-white/8 py-6"
                >
                  <div className="flex items-center gap-4">
                    <FaWhatsapp className="text-2xl text-green-400" />

                    <div>
                      <p className="font-bold transition group-hover:text-green-300">
                        WhatsApp
                      </p>

                      <p className="mt-1 text-sm text-neutral-500">
                        Productos, turnos y consultas
                      </p>
                    </div>
                  </div>

                  <FiArrowRight className="text-neutral-600 transition duration-300 group-hover:translate-x-1 group-hover:text-white" />
                </Motion.a>

                <Motion.a
                  variants={staggerItem}
                  href="https://www.instagram.com/jstyles_haircuts/"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between border-b border-white/8 py-6"
                >
                  <div className="flex items-center gap-4">
                    <FaInstagram className="text-2xl" />

                    <div>
                      <p className="font-bold transition group-hover:text-amber-300">
                        Instagram
                      </p>

                      <p className="mt-1 text-sm text-neutral-500">
                        Trabajos, productos y novedades
                      </p>
                    </div>
                  </div>

                  <FiArrowRight className="text-neutral-600 transition duration-300 group-hover:translate-x-1 group-hover:text-white" />
                </Motion.a>

                <Motion.a
                  variants={staggerItem}
                  href="https://www.tiktok.com/@jstyles_haircuts"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between border-b border-white/8 py-6"
                >
                  <div className="flex items-center gap-4">
                    <FaTiktok className="text-2xl" />

                    <div>
                      <p className="font-bold transition group-hover:text-amber-300">
                        TikTok
                      </p>

                      <p className="mt-1 text-sm text-neutral-500">
                        Contenido y tendencias JStyles
                      </p>
                    </div>
                  </div>

                  <FiArrowRight className="text-neutral-600 transition duration-300 group-hover:translate-x-1 group-hover:text-white" />
                </Motion.a>
              </Motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* ===================================================== */}
      {/* FOOTER */}
      {/* ===================================================== */}

      <footer className="border-t border-white/6 bg-black">
        <div className="mx-auto flex max-w-360 flex-col gap-8 px-5 py-10 md:flex-row md:items-end md:justify-between md:px-8 lg:px-12">
          <div>
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-20 items-center justify-center overflow-hidden">
                <img
                  src="/images/logo.png"
                  alt="JStyles Barber"
                  className="h-full w-full scale-125 object-contain"
                />
              </div>

              <div>
                <p className="font-black">
                  J<span className="text-amber-400">Styles</span> Barber
                </p>

                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-neutral-600">
                  Barber · Shop
                </p>
              </div>
            </div>

            <p className="mt-5 max-w-sm text-sm leading-6 text-neutral-600">
              Barbería, productos y estilo.
            </p>
          </div>

          <div className="text-sm text-neutral-600 md:text-right">
            <p>
              Laprida 4177 · Cochabamba 796
            </p>

            <p className="mt-2">
              Lunes a sábado · 10:30 a 20:00 hs
            </p>
          </div>
        </div>
      </footer>

      {/* ===================================================== */}
      {/* WHATSAPP FLOTANTE */}
      {/* ===================================================== */}

      <Motion.a
        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
          "Hola JStyles, quiero consultar por sus productos y servicios."
        )}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Contactar a JStyles por WhatsApp"
        initial={
          reducirMovimiento
            ? false
            : {
                opacity: 0,
                scale: 0.8,
              }
        }
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          delay: reducirMovimiento ? 0 : 0.8,
          duration: 0.4,
        }}
        whileHover={
          reducirMovimiento
            ? undefined
            : {
                scale: 1.06,
                y: -2,
              }
        }
        whileTap={
          reducirMovimiento
            ? undefined
            : {
                scale: 0.96,
              }
        }
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-xl text-white shadow-2xl md:h-auto md:w-auto md:gap-2 md:px-5 md:py-3 md:text-base md:font-bold"
      >
        <FaWhatsapp className="text-xl" />

        <span className="hidden md:inline">
          WhatsApp
        </span>
      </Motion.a>
    </div>
  );
}
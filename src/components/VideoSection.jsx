export default function VideoSection() {
  return (
    <section id="video" className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-10">
        <p className="mb-3 text-sm uppercase tracking-[0.25em] text-amber-400">
          Video
        </p>
        <h3 className="text-3xl font-bold md:text-4xl">La barbería en acción</h3>
      </div>

      <div className="overflow-hidden rounded-4xl border border-white/10 bg-black">
        <video
          className="aspect-video w-full"
          controls
          playsInline
          poster="/images/hero.jpg"
        >
          <source src="/videos/barberia.mp4" type="video/mp4" />
          Tu navegador no soporta video HTML5.
        </video>
      </div>
    </section>
  );
}
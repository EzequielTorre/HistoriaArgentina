export default function AboutPage() {
  return (
    <section className="container">
      <h1 className="text-3xl font-bold text-center mb-6">Sobre nosotros</h1>

      <div className="grid md:grid-cols-2 gap-8 items-center mb-10">
        <img
          src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=1200&auto=format&fit=crop"
          alt="Libros de historia"
          className="w-full rounded-2xl shadow-lg"
        />
        <div>
          <p className="text-gray-700 dark:text-gray-300">
            Este blog explora los hechos, procesos y protagonistas de la historia argentina, desde la
            independencia hasta la actualidad. Buscamos difundir conocimiento con rigor y claridad.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="card p-6">
          <h2 className="text-xl font-semibold text-center mb-2">Misión</h2>
          <p className="text-gray-700 dark:text-gray-300 text-center">
            Promover el interés por nuestra historia y facilitar el acceso a contenidos confiables.
          </p>
        </div>
        <div className="card p-6">
          <h2 className="text-xl font-semibold text-center mb-2">Visión</h2>
          <p className="text-gray-700 dark:text-gray-300 text-center">
            Ser una referencia educativa abierta y moderna para estudiantes y curiosos.
          </p>
        </div>
        <div className="card p-6">
          <h2 className="text-xl font-semibold text-center mb-2">Valores</h2>
          <p className="text-gray-700 dark:text-gray-300 text-center">
            Rigor histórico, respeto por la diversidad y compromiso con la calidad.
          </p>
        </div>
      </div>
    </section>
  );
}
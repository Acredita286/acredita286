import Image from "next/image";

const features = [
  "Disponible en todo México",
  "Dirigido a partir de los 15 años",
  "Fechas flexibles para que elijas cuándo presentar"
];

export default function Hero() {
  return (
    <section id="inicio" className="scroll-mt-24 w-full py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT - Texto */}
        <div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            <span className="text-[#05414D]">Acredita</span>{" "}
            <span className="text-[#1C9090]">286</span>
          </h1>

          <h2 className="text-2xl md:text-3xl font-medium text-gray-700 mt-2">
            Certificación Oficial de Bachillerato
          </h2>

          <p className="mt-4 text-lg text-gray-600 leading-relaxed max-w-xl">
            El sistema más ágil, confiable y efectivo para concluir tu preparatoria y obtener tu certificado de bachillerato mediante el examen CENEVAL. Cuenta con{" "}
            <span className="text-[#1C9090]">validez oficial ante la SEP</span> y un acompañamiento especializado durante todo el proceso.
          </p>

          {/* LISTA CON ICONOS */}
          <ul className="mt-6 space-y-3">
            {features.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <Image
                  src="/ImageHero2.png"
                  alt="icono"
                  width={18}
                  height={18}
                  className="mt-1"
                />
                <span className="text-gray-700 text-base">
                  {item}
                </span>
              </li>
            ))}
          </ul>

          <button className="mt-8 bg-[#05414D] text-white px-6 py-3 rounded-xl font-semibold hover:opacity-90">
            Más información
          </button>
        </div>

        {/* RIGHT - Imagen */}
        <div className="flex justify-center">
          <Image
            src="/ImageHero1.jpeg"
            alt="Curso online"
            width={600}
            height={600}
            className="rounded-2xl shadow-lg object-contain"
            priority
          />
        </div>

      </div>
    </section>
  );
}
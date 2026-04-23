import Image from "next/image";
export default function Aplication() {
  return (


  <section id="examen" className="scroll-mt-24 py-20 bg-gray-50">

    <h2 className="text-3xl md:text-4xl text-center text-gray-700 font-bold">
      <span className="text-[#05414D]">Metodología de aplicación del</span>{" "}
      <span className="text-[#1C9090]">examen</span>
    </h2><br />

    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

      <div className="flex justify-center">
        <Image
          src="/ImageAplication1.jpeg"
          alt="Curso online"
          width={550}
          height={550}
          className="rounded-2xl shadow-lg object-contain"
          priority
        />
      </div>

    <div>
      {/* SESIÓN 1 */}
      <div className="bg-white rounded-2xl p-6 shadow-sm">
        <h3 className="text-xl font-bold text-[#05414D]">
          Sesión 1
        </h3>
        <p className="text-sm text-gray-500 mb-4">
          4 horas 30 minutos
        </p>

        <div className="space-y-3">
          {[
            ["Pensamiento matemático", 30],
            ["Cultura digital", 19],
            ["Conciencia histórica", 23],
            ["Humanidades", 20],
          ].map(([area, value], i) => (
            <div key={i} className="flex justify-between border-b pb-2">
              <span className="text-gray-700">{area}</span>
              <span className="font-semibold text-[#1C9090]">{value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* RECESO */}
      <div className="text-center text-gray-500 font-medium">
        ⏸ Receso de 1.5 horas
      </div>

      {/* SESIÓN 2 */}
      <div className="bg-white rounded-2xl p-6 shadow-sm">
        <h3 className="text-xl font-bold text-[#05414D]">
          Sesión 2
        </h3>
        <p className="text-sm text-gray-500 mb-4">
          4 horas
        </p>

        <div className="space-y-3">
          {[
            ["Ciencias naturales", 32],
            ["Lengua y comunicación", 31],
            ["Ciencias sociales", 25],
          ].map(([area, value], i) => (
            <div key={i} className="flex justify-between border-b pb-2">
              <span className="text-gray-700">{area}</span>
              <span className="font-semibold text-[#1C9090]">{value}</span>
            </div>
          ))}
        </div>
      </div><br />

      {/* TOTAL */}
      <div className="text-center text-xl font-bold text-[#1C9090]">
        Total: 180 reactivos
      </div>
      </div>
    </div>
  </section>
  );
}
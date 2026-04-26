import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="pricing" className="scroll-mt-24 w-full">

      <div className="relative w-full h-[400px] md:h-[600px]">

        {/* Imagen */}
        <Image
          src="/ImagePricing1.jpeg"
          alt="Curso online"
          fill
          className="object-cover"
          priority
        />

        {/* Overlay oscuro (opcional pero recomendado) */}
        <div className="absolute inset-0 bg-black/10"></div>

        {/* Caja de contenido */}
        <div className="absolute inset-0 flex items-center">
          
          <div className="ml-6 md:ml-66 bg-white/90 p-8 rounded-2xl shadow-xl max-w-lg w-full">

            <h2 className="text-2xl md:text-3xl text-center font-bold text-[#05414D]">
              INSCRIBETE HOY
            </h2>

            <p className="mt-2 text-center font-bold text-gray-600">
              Prepa en un Examen 
            </p>

            <div className="mt-4 text-center text-5xl font-bold text-[#1C9090]">
              $4,490 MXN
            </div>

            <p className="mt-2 text-center font-bold text-gray-600">
              Pago único<br />
            </p>
            <p className="mt-2 text-center text-gray-600">
              Incluye curso completo de autoestudio, guias,<br /> examenes simuladores, asesoría personalizada<br /> al registro examen.
            </p>
            

            <Link href="/registro">
              <button className="mt-6 w-full bg-[#05414D] text-white py-3 rounded-xl font-semibold hover:opacity-90 transition">
                Comprar ahora
              </button>
            </Link>

            

          </div>

        </div>

      </div>

    </section>
  );
}
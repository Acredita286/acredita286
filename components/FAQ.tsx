"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const faqs = [
  {
    q: "¿Cuáles son los requisitos para el Curso y examen?",
    a: "Es necesario contar con CURP, identificación oficial vigente, acta de nacimiento, certificado de secundaria y documentación legible para su validación. En caso de ser extranjero, se deberá presentar pasaporte vigente."
  },
  {
    q: "¿A partir de que edad lo puedo presentar.?",
    a: "De los 15 años en adelante con Carta responsiva de padre o tutor."
  },
  {
    q: "¿Quién emite el Certificado?",
    a: "A través del Acuerdo 286 la Dirección General del Bachillerato es quien emite el documento junto con la SEP."
  },
  {
    q: "¿En cuanto tiempo obtengo mi certificado?",
    a: "La fecha estimada de entrega del certificado es de 60 días naturales posteriores a la presentación del examen, según validación documental y tiempos de emisión de la SEP/DGB."
  },
  {
    q: "¿En que modalidad se aplica el examen?",
    a: "El examen CENEVAL se aplica de manera presencial, se cuenta con sedes en Ciudad de Mexico  y el resto de país."
  },
  {
    q: "¿Cuándo puedo aplicar mi examen?",
    a: "Se abren 6 fechas de aplicación de examen al Año, el tiempo de registro se maneja de acuerdo al calendario para que puedas seleccionar la fecha que mas te guste."
  }
];

export default function FAQFlip() {
  const [flipped, setFlipped] = useState<number | null>(null);

  return (
    <section id="faq" className="scroll-mt-10 py-20 bg-gradient-to-b from-[#05414D]/10 to-[#1C9090]/10">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl md:text-4xl text-center font-bold">
            <span className="text-[#05414D]">Preguntas</span>{" "}
            <span className="text-[#1C9090]">frecuentes</span>
        </h2>
        <p className="mt-4 text-lg text-gray-600 text-center leading-relaxed max-w-3xl mx-auto">
            ¿Tienes alguna otra duda? 
            <a
            href="https://wa.me/5217293192896?text=Hola,%20necesito%20más%20información%20sobre%20el%20curso%20Acredita286"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1C9090]"
            > Escribenos aqui.</a>
        </p>
        <br />

        <div className="grid md:grid-cols-3 gap-8">
          {faqs.map((item, i) => (
            <div
              key={i}
              className="perspective"
              onClick={() => setFlipped(flipped === i ? null : i)}
            >
              <motion.div
                className="relative w-full h-48 cursor-pointer"
                animate={{ rotateY: flipped === i ? 180 : 0 }}
                transition={{ duration: 0.6 }}
                style={{ transformStyle: "preserve-3d" }}
              >

                {/* FRONT */}
                <div className="absolute w-full h-full backface-hidden bg-white rounded-2xl shadow-sm flex items-center justify-center p-6">
                  <h3 className="text-lg font-semibold text-[#05414D] text-center">
                    {item.q}
                  </h3>
                </div>

                {/* BACK */}
                <div
                  className="absolute w-full h-full backface-hidden bg-[#05414D] text-white rounded-2xl shadow-sm flex items-center justify-center p-6"
                  style={{ transform: "rotateY(180deg)" }}
                >
                  <p className="text-center">{item.a}</p>
                </div>

              </motion.div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
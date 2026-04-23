"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

export default function Benefits() {
  return (
    
    <motion.section
      id="beneficios"
      className="scroll-mt-28 py-16 bg-gradient-to-b from-[#05414D]/10 to-[#1C9090]/10"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: false }}
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Título */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}
        >
          <h2 className="text-3xl md:text-4xl text-gray-700 font-medium">
            <span>¿Qué es</span>{" "}
            <span className="text-[#05414D]">Acredita</span>{" "}
            <span className="text-[#1C9090]">286</span>?
          </h2>

          <p className="mt-4 text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Transformamos obstáculos en oportunidades. Somos una institución mexicana dedicada a tender puentes para quienes desean retomar su camino académico. Nuestra misión es clara: simplificar el acceso a la educación oficial con un enfoque humano y moderno, diseñado para convertir tus metas en resultados reales y tangibles.
          </p>
        </motion.div>

        {/* Beneficios */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false }}
          className="grid md:grid-cols-3 gap-8 text-center"
        >
          
          <motion.div
            variants={item}
            className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition"
          >
            <Image
              src="/GifBenefits1.gif"
              alt="Curso en línea"
              width={60}
              height={60}
              className="mx-auto mb-4"
            />
            <h3 className="font-semibold text-lg text-[#05414D]">
              ¿Cómo se imparte el curso?
            </h3>
            <p className="text-gray-600 mt-2 text-base leading-relaxed">
              Es un programa{" "}
              <span className="text-[#1C9090]">100% en línea</span> diseñado para que acredites tu bachillerato con el examen Ceneval Acredita Bach.
            </p>
          </motion.div>

          <motion.div
            variants={item}
            className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition"
          >
            <Image
              src="/GifBenefits2.gif"
              alt="Duración"
              width={60}
              height={60}
              className="mx-auto mb-4"
            />
            <h3 className="font-semibold text-lg text-[#05414D]">
              ¿Cuánto dura?
            </h3>
            <p className="text-gray-600 mt-2 text-base leading-relaxed">
              La duración estimada es de{" "}
              <span className="text-[#1C9090]">
                1 mes y medio dedicando 2 horas diarias.
              </span>{" "}
              Tendrás acceso por un año completo para repasar el contenido y practicar con simuladores.
            </p>
          </motion.div>

          <motion.div
            variants={item}
            className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition"
          >
            <Image
              src="/GifBenefits3.gif"
              alt="Costo"
              width={60}
              height={60}
              className="mx-auto mb-4"
            />
            <h3 className="font-semibold text-lg text-[#05414D]">
              ¿Cuánto cuesta?
            </h3>
            <p className="text-gray-600 mt-2 text-base leading-relaxed">
              <span className="text-[#1C9090]">
                Pago único de $4,490 pesos
              </span>
              <br />
              (incluye guías, exámenes simuladores, módulos de autoestudio y asesoría personalizada al registro examen)
            </p>
          </motion.div>

        </motion.div>

      </div>
    </motion.section>
  );
}
"use client";

import { useState } from "react";
import Image from "next/image";

export default function Registro() {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    telefono: "",
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-b from-[#05414D]/10 to-[#1C9090]/10">

  <div className="relative w-full max-w-4xl">

    {/* Imagen*/}
    <div className="absolute opacity-40 left-[-540px] top-1/2 -translate-y-1/2 z-0 hidden md:block">
      <Image
        src="/ImageRegistro1.png"
        alt="Ilustración"
        width={3000}
        height={3000}
        className="rounded-2xl object-cover"
      />
    </div>

    <div>
        <h2 className="relative text-5xl font-bold text-[#05414D] text-center">
            Inscripción
        </h2>
        <p className="mt-4 text-lg text-center text-[#05414D] leading-relaxed max-w-3xl mx-auto">
            Al finalizar su proceso de inscripción, usted contará con:
        <ul className="text-lg text-center text-[#05414D] leading-relaxed max-w-3xl mx-auto">
            <li>
                Cursos y guías especializados.
            </li>
            <li>
                Exámenes simuladores de práctica.
            </li>
            <li>
                Asesoría personalizada para su registro oficial.
            </li>
            <li>
                El acceso a su plataforma de autoestudio es de 1 año, con garantía de acceso inmediato
            </li>
        </ul>
        </p>
    </div>

    {/* Formulario */}
    <form
      onSubmit={handleSubmit}
      className="relative z-10 bg-white p-8 rounded-2xl shadow-lg w-full max-w-30xl ml-auto mt-4"
    >

      <input
        type="text"
        name="nombre"
        placeholder="Nombre"
        onChange={handleChange}
        className="w-full mb-4 p-3 border rounded-lg"
        required
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          name="apellidoPaterno"
          placeholder="Apellido Paterno"
          onChange={handleChange}
          className="w-full p-3 border rounded-lg"
          required
        />
        <input
          type="text"
          name="apellidoMaterno"
          placeholder="Apellido Materno"
          onChange={handleChange}
          className="w-full p-3 border rounded-lg"
          required
        />
      </div>

      <input
        type="email"
        name="email"
        placeholder="Correo electrónico"
        onChange={handleChange}
        className="w-full mt-4 mb-4 p-3 border rounded-lg"
        required
      />

      <input
        type="tel"
        name="telefono"
        placeholder="Teléfono"
        onChange={handleChange}
        className="w-full mb-6 p-3 border rounded-lg"
      />

        <label className="flex items-start gap-3 text-sm text-gray-700"> 
            <input type="checkbox" name="terminos" required className="mt-1 accent-[#1C9090]" /> 
            <span> Acepto los términos del servicio. </span> 
        </label> 
        <label className="flex items-start gap-3 text-sm text-gray-700"> 
            <input type="checkbox" name="documentos" required className="mt-1 accent-[#1C9090]" /> 
            <span> Cuento con CURP, acta de nacimiento e identificación oficial vigente. </span> 
        </label> 
        <label className="flex items-start gap-3 text-sm text-gray-700"> 
            <input type="checkbox" name="examen" required className="mt-1 accent-[#1C9090]" /> 
            <span> Presentaré el examen conforme a las indicaciones. </span> 
        </label> 
        <label className="flex items-start gap-3 text-sm text-gray-700"> 
            <input type="checkbox" name="pago" required className="mt-1 accent-[#1C9090]" /> 
            <span> Realizaré el pago por los servicios correspondientes. </span> 
        </label>

      <button className="w-full bg-[#05414D] mt-4 text-white py-3 rounded-lg font-semibold hover:opacity-90">
        Registrarme
      </button>

    </form>

  </div>

</section>
  );
}
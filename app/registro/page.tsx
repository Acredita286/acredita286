"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";

export default function Registro() {
  const [form, setForm] = useState({
    nombre: "",
    apellidoPaterno: "",
    apellidoMaterno: "",
    email: "",
    telefono: "",
    terminos: false,
    documentos: false,
    examen: false,
    pago: false,
  });

  const [success, setSuccess] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [loading, setLoading] = useState(false); 

  const router = useRouter();

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;

    if (name === "email") {
      setEmailError("");
    }

    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.from("prospectos").insert([
      {
        nombre: form.nombre,
        apellido_paterno: form.apellidoPaterno,
        apellido_materno: form.apellidoMaterno,
        email: form.email,
        telefono: form.telefono,
        terminos: form.terminos,
        documentos: form.documentos,
        examen: form.examen,
        pago: form.pago,
      },
    ]);

    setLoading(false); 

    if (error) {
      console.error("Supabase error:", error);

      if (error.code === "23505") {
        setEmailError("Este correo ya fue registrado anteriormente.");
      } else {
        setEmailError("Error al enviar. Intenta nuevamente.");
      }

      return;
    }

    setSuccess(true);

    setForm({
      nombre: "",
      apellidoPaterno: "",
      apellidoMaterno: "",
      email: "",
      telefono: "",
      terminos: false,
      documentos: false,
      examen: false,
      pago: false,
    });

    setTimeout(() => {
      router.replace("/");
    }, 4000);
  };

  if (success) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#05414D]/10 to-[#1C9090]/10">
        <div className="bg-white p-10 rounded-2xl shadow-lg text-center animate-fade-in">
          <Image
            src="/GifPage1.gif"
            alt="Éxito"
            width={60}
            height={60}
            className="mx-auto mb-4"
          />
          <h2 className="text-2xl font-bold text-[#05414D]">
            Registro enviado
          </h2>
          <p className="text-gray-600 mt-2">
            Nos pondremos en contacto contigo pronto.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-b from-[#05414D]/10 to-[#1C9090]/10">
      <div className="max-w-9xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* Imagen */}
        <div className="flex justify-center">
          <Image
            src="/ImageInscripcion1.png"
            alt="Curso online"
            width={650}
            height={650}
            className="object-contain opacity-85"
            priority
          />
        </div>

        {/* Formulario */}
        <form
          onSubmit={handleSubmit}
          className="relative z-10 bg-white p-8 rounded-2xl shadow-lg w-full max-w-30xl ml-auto mt-4"
        >
          <div>
            <h2 className="text-5xl font-bold text-[#05414D] text-center">
              Inscripción
            </h2>

            <p className="mt-4 text-lg text-center text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Al finalizar su proceso de inscripción, usted contará con:
            </p>

            <ul className="text-lg text-center leading-relaxed max-w-3xl mx-auto mb-4">
              <li>Cursos y guías especializados.</li>
              <li>Exámenes simuladores de práctica.</li>
              <li>Asesoría personalizada para su registro oficial.</li>
              <li>Acceso a su plataforma de autoestudio por 1 año, con garantía de acceso inmediato.</li>
            </ul>
          </div>

          {/* Nombre */}
          <input
            type="text"
            name="nombre"
            placeholder="Nombre"
            pattern="[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+"
            value={form.nombre}
            onChange={handleChange}
            className="w-full mb-4 p-3 border rounded-lg"
            required
          />

          {/* Apellidos */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="apellidoPaterno"
              placeholder="Apellido Paterno"
              pattern="[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+"
              value={form.apellidoPaterno}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg"
              required
            />
            <input
              type="text"
              name="apellidoMaterno"
              placeholder="Apellido Materno"
              pattern="[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+"
              value={form.apellidoMaterno}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg"
              required
            />
          </div>

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Correo electrónico"
            value={form.email}
            onChange={handleChange}
            className={`w-full mt-4 mb-4 p-3 border rounded-lg ${emailError ? "border-red-500" : ""}`}
            required
          />
          {emailError && (
            <p className="text-red-500 text-sm mb-3">{emailError}</p>
          )}

          {/* Teléfono */}
          <input
            type="tel"
            name="telefono"
            placeholder="Teléfono"
            pattern="[0-9]{10}"
            maxLength={10}
            minLength={10}
            inputMode="numeric"
            value={form.telefono}
            onChange={handleChange}
            className="w-full mb-6 p-3 border rounded-lg"
            required
          />

          {/* Checkboxes */}
          <div className="space-y-3 text-sm text-gray-700">
            <label className="flex items-start gap-3">
              <input
                type="checkbox"
                name="terminos"
                checked={form.terminos} 
                onChange={handleChange}
                required
                className="mt-1 accent-[#1C9090]"
              />
              <span>Acepto los términos del servicio.</span>
            </label>

            <label className="flex items-start gap-3">
              <input
                type="checkbox"
                name="documentos"
                checked={form.documentos} 
                onChange={handleChange}
                required
                className="mt-1 accent-[#1C9090]"
              />
              <span>Cuento con CURP, acta de nacimiento e identificación oficial vigente.</span>
            </label>

            <label className="flex items-start gap-3">
              <input
                type="checkbox"
                name="examen"
                checked={form.examen} 
                onChange={handleChange}
                required
                className="mt-1 accent-[#1C9090]"
              />
              <span>Presentaré el examen conforme a las indicaciones.</span>
            </label>

            <label className="flex items-start gap-3">
              <input
                type="checkbox"
                name="pago"
                checked={form.pago} 
                onChange={handleChange}
                required
                className="mt-1 accent-[#1C9090]"
              />
              <span>Realizaré el pago por los servicios correspondientes.</span>
            </label>
          </div>

          {/* Botones */}
          <button
            type="submit"
            disabled={loading} 
            className="w-full bg-[#05414D] mt-6 text-white py-3 rounded-lg font-semibold hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed transition"
          >
            {loading ? "Enviando..." : "Registrarme"} {}
          </button>

          <Link href="/">
            <button
              type="button"
              className="w-full bg-[#1C9090] mt-4 text-white py-3 rounded-lg font-semibold hover:opacity-90 transition"
            >
              Regresar a la página de Inicio
            </button>
          </Link>

        </form>
      </div>
    </section>
  );
}
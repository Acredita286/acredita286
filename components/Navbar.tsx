"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/70 backdrop-blur-xl border-b border-gray-200">
      
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-2">

        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/LogoAcredita286.png"
            alt="Acredita 286"
            width={100}
            height={40}
            className="object-contain"
            priority
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          <a href="#inicio" className="text-gray-700 hover:text-[#1C9090] transition">
            Inicio
          </a>
          <a href="#beneficios" className="text-gray-700 hover:text-[#1C9090] transition">
            ¿Qué es?
          </a>
          <a href="#examen" className="text-gray-700 hover:text-[#1C9090] transition">
            Acerca del Examen
          </a>
          <a href="#pricing" className="text-gray-700 hover:text-[#1C9090] transition">
            Precio
          </a>
          <a href="#faq" className="text-gray-700 hover:text-[#1C9090] transition">
            FAQ
          </a>

          <Link href="/registro">
            <button className="ml-4 bg-[#05414D] text-white px-4 py-2 rounded-lg hover:opacity-90 transition">
              Inscripción
            </button>
          </Link>

          <Link href="/login">
            <button className="ml-2 p-2 rounded-full hover:bg-gray-100 transition">
              <Image
                src="/ImageNavBar1.png"
                alt="Iniciar sesión"
                width={20}
                height={20}
              />
            </button>
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-xl text-gray-700"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t px-6 py-4 space-y-4">
          <a href="#inicio" className="block text-gray-700 hover:text-[#1C9090] transition">
            Inicio
          </a>
          <a href="#beneficios" className="block text-gray-700 hover:text-[#1C9090] transition">
            ¿Qué es?
          </a>
          <a href="#examen" className="block text-gray-700 hover:text-[#1C9090] transition">
            Acerca del Examen
          </a>
          <a href="#pricing" className="text-gray-700 hover:text-[#1C9090] transition">
            Precio
          </a>
          <a href="#faq" className="block text-gray-700 hover:text-[#1C9090] transition">
            FAQ
          </a>
          <a href="/registro" className="block text-gray-700 hover:text-[#1C9090] transition">
            Comprar
          </a>

          <button className="w-full bg-[#05414D] text-white py-2 rounded-lg">
            Ingresar
          </button>
        </div>
      )}
    </header>
  );
}
"use client";

import { useState } from "react";
import { personalInfo } from "@/lib/data";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");

    // Simulación de envío. Reemplazar por una llamada a una API Route,
    // a un servicio como Resend/EmailJS, o a un backend propio.
    const subject = encodeURIComponent(`Contacto de ${formData.name}`);
    const body = encodeURIComponent(
      `${formData.message}\n\nDe: ${formData.name} (${formData.email})`
    );

    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;

    setStatus("sent");
    setFormData({ name: "", email: "", message: "" });
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-semibold text-gray-800 mb-2"
        >
          Nombre
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Tu nombre"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-semibold text-gray-800 mb-2"
        >
          Correo electrónico
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="tu@email.com"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-semibold text-gray-800 mb-2"
        >
          Mensaje
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Cuéntame en qué puedo ayudarte..."
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
      >
        {status === "sending" ? "Enviando..." : "Enviar mensaje"}
      </button>

      {status === "sent" && (
        <p className="text-green-600 font-medium">
          ¡Gracias! Tu cliente de correo se abrió para completar el envío.
        </p>
      )}
    </form>
  );
}

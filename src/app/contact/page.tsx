import { Metadata } from "next";
import { personalInfo } from "@/lib/data";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contacto",
  description: `Ponte en contacto con ${personalInfo.name}, ${personalInfo.title}`,
  openGraph: {
    title: `Contacto | ${personalInfo.name}`,
    description: `Ponte en contacto con ${personalInfo.name}`,
    images: ["/og-contact.jpg"],
  },
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Contacto</h1>
        <p className="text-lg text-gray-600 mb-10">
          ¿Tienes un proyecto en mente o alguna pregunta? Escríbeme y te
          responderé lo antes posible.
        </p>

        <div className="bg-white rounded-lg shadow-md p-8">
          <ContactForm />
        </div>

        <div className="mt-10 flex flex-col gap-2 text-gray-700">
          <p>
            <span className="font-semibold">Email:</span>{" "}
            <a href={`mailto:${personalInfo.email}`} className="text-blue-600 hover:underline">
              {personalInfo.email}
            </a>
          </p>
          <p>
            <span className="font-semibold">GitHub:</span>{" "}
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              {personalInfo.github}
            </a>
          </p>
          <p>
            <span className="font-semibold">LinkedIn:</span>{" "}
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              {personalInfo.linkedin}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

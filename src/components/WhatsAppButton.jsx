import { FaWhatsapp } from "react-icons/fa";
import { whatsappNumber } from "../data/site";

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        "Hola, quiero consultar por sus servicios y productos."
      )}`}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-3 rounded-full bg-green-500 px-5 py-3 font-bold text-white shadow-2xl transition hover:scale-105"
    >
      <FaWhatsapp className="text-xl" />
      WhatsApp
    </a>
  );
}
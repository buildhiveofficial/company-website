import { COMPANY } from "@/lib/site-data";

export function WhatsAppButton() {
  const whatsappNumber = COMPANY.phone.replace(/\D/g, "");

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Hello BuildHive Solutions, I would like to discuss a project."
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with BuildHive Solutions on WhatsApp"
      className="
        whatsapp-liquid group fixed bottom-6 right-6 z-[100]
        flex h-14 w-14 items-center justify-center
        rounded-[18px]
        md:bottom-8 md:right-8
      "
    >
      {/* Liquid reflection */}
      <span className="whatsapp-liquid-shine" />

      {/* Water ripple */}
      <span className="whatsapp-liquid-ripple" />

      {/* WhatsApp SVG */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="
          relative z-10 h-7 w-7
          text-white
          drop-shadow-[0_2px_5px_rgba(0,0,0,0.25)]
          transition-transform duration-500
          group-hover:scale-110
        "
        aria-hidden="true"
      >
        <path d="M12.04 2C6.52 2 2.03 6.49 2.03 12.01c0 1.77.46 3.5 1.34 5.03L2 22l5.1-1.34a10 10 0 0 0 4.94 1.35h.01c5.52 0 10-4.49 10-10.01C22.05 6.49 17.56 2 12.04 2Zm0 18.36h-.01a8.33 8.33 0 0 1-4.24-1.16l-.3-.18-3.03.8.81-2.95-.19-.31a8.34 8.34 0 1 1 6.96 3.8Zm4.57-6.25c-.25-.13-1.48-.73-1.71-.81-.23-.08-.4-.13-.57.13-.17.25-.65.81-.8.98-.15.17-.29.19-.54.06-.25-.13-1.04-.38-1.98-1.22-.73-.65-1.22-1.45-1.36-1.7-.14-.25-.01-.39.11-.52.11-.11.25-.29.38-.43.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.57-1.36-.78-1.86-.21-.49-.42-.43-.57-.44h-.49c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1s.9 2.44 1.03 2.61c.13.17 1.76 2.69 4.27 3.77.6.26 1.07.41 1.44.52.61.19 1.17.16 1.61.1.49-.07 1.48-.61 1.69-1.2.21-.59.21-1.1.15-1.2-.06-.11-.23-.17-.48-.3Z" />
      </svg>

      {/* Tooltip */}
      <span
        className="
          pointer-events-none absolute right-[calc(100%+12px)]
          whitespace-nowrap rounded-lg
          border border-white/20
          bg-black/50 px-3 py-2
          text-xs font-medium text-white
          opacity-0 backdrop-blur-xl
          shadow-xl
          transition-all duration-300
          group-hover:translate-x-0
          group-hover:opacity-100
        "
      >
        Chat on WhatsApp
      </span>
    </a>
  );
}
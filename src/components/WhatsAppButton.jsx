import { MessageCircle } from "lucide-react";
import "./WhatsAppButton.css";

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/923195984305"
      className="floating-whatsapp"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with NEXORA on WhatsApp"
    >
      <MessageCircle size={27} />
      <span>Chat with us</span>
    </a>
  );
}

export default WhatsAppButton;
"use client";

import { useState, useRef, useEffect } from "react";

interface ContactModalProps {
  open: boolean;
  onClose: () => void;
}

export default function ContactModal({ open, onClose }: ContactModalProps) {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  function handleOverlayClick(e: React.MouseEvent) {
    if (e.target === overlayRef.current) {
      onClose();
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (!name || !message) {
      setError("Please fill in all fields.");
      return;
    }

    const recipients = "invest@biostate.ai,olivia.jin@biostate.ai,rainy.liu@biostate.ai";
    const subject = encodeURIComponent(`Contact Form: ${name}`);
    const body = encodeURIComponent(message);
    const mailtoUrl = `mailto:${recipients}?subject=${subject}&body=${body}`;

    window.location.href = mailtoUrl;
    handleClose();
  }

  function handleClose() {
    setName("");
    setMessage("");
    setError("");
    onClose();
  }

  if (!open) return null;

  return (
    <div
      ref={overlayRef}
      onClick={handleOverlayClick}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm"
    >
      <div className="relative bg-white rounded-2xl shadow-2xl w-[90vw] max-w-[480px] p-6 mx-4">
        {/* Close button */}
        <button
          type="button"
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-dark transition cursor-pointer"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <>
            <h2 className="text-[22px] font-bold text-dark mb-1">Contact Us</h2>
            <p className="text-[14px] text-gray-text mb-5">
              Have questions about investing in Biostate AI? Send us a message.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="contact-name" className="block text-[13px] font-semibold text-dark mb-1">
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-[14px] focus:outline-none focus:border-dark transition"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-[13px] font-semibold text-dark mb-1">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="How can we help you?"
                  rows={4}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-[14px] focus:outline-none focus:border-dark transition resize-none"
                />
              </div>

              {error && (
                <p className="text-red-500 text-[13px]">{error}</p>
              )}

              <button
                type="submit"
                className="w-full bg-dark text-white font-bold py-3 rounded-lg hover:bg-gray-800 transition text-[14px] tracking-wide cursor-pointer"
              >
                SUBMIT
              </button>
            </form>

            <div className="mt-4 pt-4 border-t border-gray-200 text-center">
              <p className="text-[13px] text-gray-text">
                Or directly contact us to invest about the AI
              </p>
              <a
                href="mailto:invest@biostate.ai"
                className="text-[13px] font-semibold text-dark hover:underline"
              >
                invest@biostate.ai
              </a>
            </div>
        </>
      </div>
    </div>
  );
}

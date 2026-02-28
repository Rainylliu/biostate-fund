"use client";

import { useState, useRef, useEffect } from "react";

interface ContactModalProps {
  open: boolean;
  onClose: () => void;
}

export default function ContactModal({ open, onClose }: ContactModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
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

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSending(true);
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (!res.ok) {
        throw new Error("Failed to send");
      }

      setSubmitted(true);
    } catch {
      setError("Failed to send message. Please try again or email us directly.");
    } finally {
      setSending(false);
    }
  }

  function handleClose() {
    setName("");
    setEmail("");
    setMessage("");
    setSubmitted(false);
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

        {!submitted ? (
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
                <label htmlFor="contact-email" className="block text-[13px] font-semibold text-dark mb-1">
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
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
                disabled={sending}
                className="w-full bg-dark text-white font-bold py-3 rounded-lg hover:bg-gray-800 transition text-[14px] tracking-wide cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {sending ? "SENDING..." : "SUBMIT"}
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
        ) : (
          <div className="text-center py-6">
            <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-[20px] font-bold text-dark mb-2">Message Sent!</h2>
            <p className="text-[14px] text-gray-text mb-5">
              Thank you for reaching out. Our team will get back to you soon.
            </p>
            <button
              type="button"
              onClick={handleClose}
              className="bg-dark text-white font-bold py-2.5 px-8 rounded-lg hover:bg-gray-800 transition text-[14px] cursor-pointer"
            >
              CLOSE
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

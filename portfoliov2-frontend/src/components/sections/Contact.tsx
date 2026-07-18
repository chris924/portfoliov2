import { forwardRef, useState, FormEvent } from "react";
import { motion } from "framer-motion";

type Status = "idle" | "sending" | "sent" | "error";

const FORM_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT as string | undefined;

const Contact = forwardRef<HTMLElement>((_props, ref) => {
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!FORM_ENDPOINT) return;

    const form = e.currentTarget;
    setStatus("sending");
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      if (!res.ok) console.error("Formspree error", res.status, await res.text());
      setStatus(res.ok ? "sent" : "error");
      if (res.ok) form.reset();
    } catch (err) {
      console.error("Formspree request failed", err);
      setStatus("error");
    }
  };

  return (
    <section ref={ref} className="content-section">
      <h2 className="section-heading">Contact</h2>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        style={{ width: "100%", display: "flex", justifyContent: "center" }}
      >
        {status === "sent" ? (
          <p style={{ opacity: 0.85 }}>Thanks — I'll get back to you soon.</p>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Name" required />
            <input type="email" name="email" placeholder="Email" required />
            <textarea name="message" placeholder="Message" required />
            <button type="submit" disabled={status === "sending" || !FORM_ENDPOINT}>
              {status === "sending" ? "Sending…" : "Send"}
            </button>
            {!FORM_ENDPOINT && (
              <p style={{ fontSize: "0.8rem", opacity: 0.6 }}>
                {/* TODO: set VITE_FORMSPREE_ENDPOINT in .env.local — see .env.local.example */}
                Contact form isn't wired up yet.
              </p>
            )}
            {status === "error" && (
              <p style={{ fontSize: "0.8rem", opacity: 0.7 }}>
                Something went wrong — try again in a moment.
              </p>
            )}
          </form>
        )}
      </motion.div>
    </section>
  );
});

Contact.displayName = "Contact";

export default Contact;

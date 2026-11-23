"use client";

import { useRef, useState, type FormEvent } from "react";

export function ContactForm() {
  const pending = useRef(false);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (pending.current) return;

    const form = event.currentTarget;
    pending.current = true;
    setStatus("sending");

    try {
      const response = await fetch(form.action, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
        signal: AbortSignal.timeout(15000),
      });
      if (!response.ok) {
        setStatus("error");
        return;
      }
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    } finally {
      pending.current = false;
    }
  }

  return (
    <form className="contact-form" action="https://formspree.io/f/xaqwonjd" method="post" onSubmit={submit}>
      <fieldset disabled={status === "sending"}>
        <legend>Send a message</legend>
        <label htmlFor="name">Name</label>
        <input id="name" name="name" autoComplete="name" required maxLength={120} />
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" autoComplete="email" required maxLength={254} />
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" required rows={5} maxLength={4000} />
        <button className="button button-primary" type="submit">{status === "sending" ? "Sending…" : "Send message"}</button>
      </fieldset>
      <p className="form-status" role="status">
        {status === "success" && "Your message was sent."}
        {status === "error" && "The form couldn’t confirm delivery. Please try again or reach me by email."}
      </p>
    </form>
  );
}

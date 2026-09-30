import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";

export default function HostLoginModal({ isOpen, onClose }) {
  const emailRef = useRef(null);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  useEffect(() => {
    if (!isOpen) {
      setEmail("");
      setEmailError("");
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const closeOnEscape = (event) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", closeOnEscape);
    // requestAnimationFrame(() => emailRef.current?.focus());
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email.trim()) {
      setEmailError("Email is required");
      emailRef.current?.focus();
      return;
    }
    setEmailError("");
  };

  return (
    <div
      className="login-modal-backdrop"
      role="presentation"
      onMouseDown={(event) => event.target === event.currentTarget && onClose()}
    >
      <section
        className="login-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="login-modal-title"
      >
        <button
          className="login-modal-close"
          type="button"
          aria-label="Close login dialog"
          onClick={onClose}
        >
          <X size={20} strokeWidth={2} />
        </button>
        <img
          className="m-auto w-12 mt-3 mb-4"
          src="/images/airbnb.png"
          alt="Airbnb logo"
        />
        <h2 id="login-modal-title">Log in or sign up</h2>
        <form onSubmit={handleSubmit}>
          <input
            ref={emailRef}
            className={`login-email ${emailError ? "has-error" : ""}`}
            type="email"
            placeholder="Email Address"
            aria-label="Email Address"
            aria-invalid={Boolean(emailError)}
            aria-describedby={emailError ? "email-error" : undefined}
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
              if (emailError) setEmailError("");
            }}
          />
          {emailError && (
            <p className="login-error" id="email-error">
              Email is required
            </p>
          )}
          <p className="login-disclaimer">
            We&apos;ll send a confirmation code by text or email. Message and
            data rates apply.
            <a href="#privacy" className="text-gray-200 mt-1" onClick={onClose}>
              Privacy Policy
            </a>
          </p>
          <button className="login-continue" type="submit">
            Continue
          </button>
        </form>
        <div className="login-divider">
          <span /> <b>or</b> <span />
        </div>
        <div className="login-socials">
          <button
            className="login-social-button google-button"
            type="button"
            aria-label="Continue with Google"
          >
            <img
              src="/images/google-icon.png"
              className="w-6"
              alt="Google"
            />
          </button>
          <button
            className="login-social-button apple-button"
            type="button"
            aria-label="Continue with Apple"
          >
            <img
              src="/images/apple-black-logo.png"
              className="w-6"
              alt="Apple"
            />
          </button>
        </div>
      </section>
    </div>
  );
}

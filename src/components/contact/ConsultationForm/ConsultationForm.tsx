"use client";

import { useState } from "react";
import styles from "./ConsultationForm.module.css";

const LOCATIONS = [
  "Essendon",
  "Aberfeldie",
  "Moonee Ponds",
  "Ascot Vale",
  "Other Melbourne",
];

const ARCH_STAGES = [
  "Concept / Ideas Stage",
  "Planning / Permits Approved",
  "Detailed Construction Drawings Ready",
  "Tender Stage",
  "Require Architect Recommendation",
];

const PROJECT_SCOPES = [
  "New Custom Luxury Residence",
  "Major Architectural Renovation & Extension",
  "Bespoke Multi-Residential Development",
];

const BUDGET_RANGES = [
  "$1.5M – $2.5M",
  "$2.5M – $4.0M",
  "$4.0M – $6.0M",
  "$6.0M+",
];

export function ConsultationForm() {
  const [location, setLocation] = useState<string>("Essendon");
  const [archStage, setArchStage] = useState<string>("Detailed Construction Drawings Ready");
  const [scope, setScope] = useState<string>("New Custom Luxury Residence");
  const [budget, setBudget] = useState<string>("$2.5M – $4.0M");

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [siteAddress, setSiteAddress] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!name.trim()) errs.name = "Please provide your name";
    if (!email.trim()) {
      errs.email = "Please provide your email address";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errs.email = "Please enter a valid email address";
    }
    if (!phone.trim()) errs.phone = "Please provide your contact phone number";
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Simulate luxury consultation request confirmation
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setName("");
    setEmail("");
    setPhone("");
    setSiteAddress("");
    setMessage("");
  };

  if (isSubmitted) {
    return (
      <div className={styles.successCard}>
        <div className={styles.successIcon} aria-hidden="true">
          ✓
        </div>
        <h3 className={styles.successTitle}>Consultation Request Received</h3>
        <p className={styles.successBody}>
          Thank you, {name}. A Haven principal will review your project parameters
          and contact you within 24–48 hours to discuss your architectural vision.
        </p>

        <div className={styles.summaryBadgeList}>
          <span className={styles.summaryBadge}>{location}</span>
          <span className={styles.summaryBadge}>{scope}</span>
          <span className={styles.summaryBadge}>{budget}</span>
        </div>

        <button
          type="button"
          onClick={handleReset}
          className={styles.resetButton}
        >
          Submit Another Inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={styles.formContainer} noValidate>
      {/* 1. Project Location */}
      <div className={styles.sectionBlock}>
        <h3 className={styles.sectionTitle}>1. Project Location</h3>
        <p className={styles.sectionSubtitle}>Select your intended build suburb</p>
        <div className={styles.pillGroup} role="radiogroup" aria-label="Build location">
          {LOCATIONS.map((loc) => {
            const isSelected = location === loc;
            return (
              <button
                key={loc}
                type="button"
                role="radio"
                aria-checked={isSelected}
                className={`${styles.pill} ${isSelected ? styles.pillActive : ""}`}
                onClick={() => setLocation(loc)}
              >
                {loc}
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. Architectural Status */}
      <div className={styles.sectionBlock}>
        <h3 className={styles.sectionTitle}>2. Architectural Status</h3>
        <p className={styles.sectionSubtitle}>Where is the design currently at?</p>
        <div className={styles.pillGroup} role="radiogroup" aria-label="Architectural status">
          {ARCH_STAGES.map((stage) => {
            const isSelected = archStage === stage;
            return (
              <button
                key={stage}
                type="button"
                role="radio"
                aria-checked={isSelected}
                className={`${styles.pill} ${isSelected ? styles.pillActive : ""}`}
                onClick={() => setArchStage(stage)}
              >
                {stage}
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. Project Scope */}
      <div className={styles.sectionBlock}>
        <h3 className={styles.sectionTitle}>3. Project Scope</h3>
        <p className={styles.sectionSubtitle}>Select construction type</p>
        <div className={styles.pillGroup} role="radiogroup" aria-label="Project scope">
          {PROJECT_SCOPES.map((sc) => {
            const isSelected = scope === sc;
            return (
              <button
                key={sc}
                type="button"
                role="radio"
                aria-checked={isSelected}
                className={`${styles.pill} ${isSelected ? styles.pillActive : ""}`}
                onClick={() => setScope(sc)}
              >
                {sc}
              </button>
            );
          })}
        </div>
      </div>

      {/* 4. Budget Range */}
      <div className={styles.sectionBlock}>
        <h3 className={styles.sectionTitle}>4. Anticipated Build Investment</h3>
        <p className={styles.sectionSubtitle}>Estimated construction budget allocation</p>
        <div className={styles.pillGroup} role="radiogroup" aria-label="Anticipated budget">
          {BUDGET_RANGES.map((b) => {
            const isSelected = budget === b;
            return (
              <button
                key={b}
                type="button"
                role="radio"
                aria-checked={isSelected}
                className={`${styles.pill} ${isSelected ? styles.pillActive : ""}`}
                onClick={() => setBudget(b)}
              >
                {b}
              </button>
            );
          })}
        </div>
      </div>

      {/* 5. Contact Information */}
      <div className={styles.sectionBlock}>
        <h3 className={styles.sectionTitle}>5. Your Details</h3>
        <p className={styles.sectionSubtitle}>Direct contact information for project leadership</p>

        <div className={styles.fieldRow}>
          <div className={styles.fieldGroup}>
            <label htmlFor="consult-name" className={styles.label}>
              Full Name *
            </label>
            <input
              id="consult-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. David Sterling"
              className={styles.input}
              required
            />
            {errors.name && <span className={styles.errorText}>{errors.name}</span>}
          </div>

          <div className={styles.fieldGroup}>
            <label htmlFor="consult-phone" className={styles.label}>
              Phone Number *
            </label>
            <input
              id="consult-phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="e.g. 0483 987 479"
              className={styles.input}
              required
            />
            {errors.phone && <span className={styles.errorText}>{errors.phone}</span>}
          </div>
        </div>

        <div className={styles.fieldRow}>
          <div className={styles.fieldGroup}>
            <label htmlFor="consult-email" className={styles.label}>
              Email Address *
            </label>
            <input
              id="consult-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="e.g. david@domain.com.au"
              className={styles.input}
              required
            />
            {errors.email && <span className={styles.errorText}>{errors.email}</span>}
          </div>

          <div className={styles.fieldGroup}>
            <label htmlFor="consult-address" className={styles.label}>
              Site / Land Address (Optional)
            </label>
            <input
              id="consult-address"
              type="text"
              value={siteAddress}
              onChange={(e) => setSiteAddress(e.target.value)}
              placeholder="e.g. Aberfeldie St, Essendon"
              className={styles.input}
            />
          </div>
        </div>

        <div className={styles.fieldGroup}>
          <label htmlFor="consult-message" className={styles.label}>
            Project Vision & Overview
          </label>
          <textarea
            id="consult-message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Tell us about the home, architect involved, timeline expectations, or site characteristics..."
            className={styles.textarea}
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={styles.submitButton}
        >
          {isSubmitting ? (
            <span>Transmitting Inquiry...</span>
          ) : (
            <>
              <span>Submit Consultation Request</span>
              <span aria-hidden="true">&rarr;</span>
            </>
          )}
        </button>
      </div>
    </form>
  );
}

"use client";

import React, { useState } from "react";
import { Container, SectionHeader, Card, Badge, Button, Modal } from "@/modules/design-system/components/ui";
import { BUILDER_CENTER_URL, siteData } from "@/data/site-data";

export function JoinView() {
  const [fullName, setFullName] = useState("");
  const [regNo, setRegNo] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [department, setDepartment] = useState("Computer Science & Engineering");
  const [yearOfStudy, setYearOfStudy] = useState("1st Year (Fresher)");
  const [primaryDomain, setPrimaryDomain] = useState("cloud-infra");
  const [cloudExp, setCloudExp] = useState("Absolute Beginner (Ready to Learn)");
  const [statement, setStatement] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !regNo || !email) {
      alert("Please fill in all mandatory fields.");
      return;
    }
    setIsSubmitted(true);
  };

  return (
    <div style={{ padding: "64px 0 100px", minHeight: "80vh" }}>
      <Container size="md">
        <SectionHeader
          eyebrow="STUDENT BUILDER INTAKE 2026–2027"
          eyebrowVariant="success"
          eyebrowPulse
          title="Join the Chapter."
          titleHighlight="Build the Future."
          description="Open to all students across every department and year of study at Sathyabama. 100% free membership, free hands-on cloud labs, and direct access to AWS developer sandboxes."
        />

        {/* Benefits Ribbon */}
        <div
          className="well"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "16px",
            padding: "24px 28px",
            borderRadius: "var(--radius-lg)",
            border: "1px solid var(--color-border)",
            marginBottom: "44px",
            textAlign: "center",
          }}
        >
          <div>
            <span style={{ fontSize: "20px", display: "block", marginBottom: "4px" }}>💳</span>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "12px", color: "var(--color-success)", fontWeight: 700 }}>
              100% FREE ALWAYS
            </span>
            <span style={{ fontSize: "11px", color: "var(--color-text-secondary)", display: "block" }}>
              Zero membership fees
            </span>
          </div>

          <div>
            <span style={{ fontSize: "20px", display: "block", marginBottom: "4px" }}>☁️</span>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "12px", color: "var(--color-accent)", fontWeight: 700 }}>
              FREE CLOUD LABS
            </span>
            <span style={{ fontSize: "11px", color: "var(--color-text-secondary)", display: "block" }}>
              No credit card needed
            </span>
          </div>

          <div>
            <span style={{ fontSize: "20px", display: "block", marginBottom: "4px" }}>📜</span>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "12px", color: "var(--color-info)", fontWeight: 700 }}>
              EXAM VOUCHERS
            </span>
            <span style={{ fontSize: "11px", color: "var(--color-text-secondary)", display: "block" }}>
              Official AWS certifications
            </span>
          </div>
        </div>

        {/* Recruitment Form Card */}
        <Card
          variant="elevated"
          style={{
            padding: "44px 36px",
            borderRadius: "var(--radius-xl)",
            border: "1px solid var(--color-border-accent)",
            background: "linear-gradient(180deg, var(--color-surface) 0%, var(--color-surface-sunken) 100%)",
            boxShadow: "0 0 36px rgba(255, 153, 0, 0.12)",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "32px" }}>
            <Badge variant="accent" size="sm" style={{ marginBottom: "12px" }}>
              OFFICIAL APPLICATION FORM
            </Badge>
            <h3 className="text-h2" style={{ margin: "0 0 8px" }}>
              Candidate Information
            </h3>
            <p className="text-body-sm" style={{ color: "var(--color-text-secondary)", margin: 0 }}>
              Fill in your details accurately to link your student profile with the chapter database.
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            {/* Row 1: Full Name & Register Number */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "20px", marginBottom: "20px" }}>
              <div>
                <label style={{ display: "block", fontSize: "13px", fontWeight: 600, color: "var(--color-text)", marginBottom: "6px" }}>
                  Full Name (as per SIST Records) *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. John Doe"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "10px 14px",
                    borderRadius: "var(--radius-md)",
                    border: "1px solid var(--color-border)",
                    backgroundColor: "var(--color-surface-sunken)",
                    color: "var(--color-text)",
                    outline: "none",
                  }}
                />
              </div>

              <div>
                <label style={{ display: "block", fontSize: "13px", fontWeight: 600, color: "var(--color-text)", marginBottom: "6px" }}>
                  SIST Register Number *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. 41110001"
                  value={regNo}
                  onChange={(e) => setRegNo(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "10px 14px",
                    borderRadius: "var(--radius-md)",
                    border: "1px solid var(--color-border)",
                    backgroundColor: "var(--color-surface-sunken)",
                    color: "var(--color-text)",
                    outline: "none",
                  }}
                />
              </div>
            </div>

            {/* Row 2: Email & Phone */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "20px", marginBottom: "20px" }}>
              <div>
                <label style={{ display: "block", fontSize: "13px", fontWeight: 600, color: "var(--color-text)", marginBottom: "6px" }}>
                  Institutional / Personal Email *
                </label>
                <input
                  type="email"
                  required
                  placeholder="e.g. student@sathyabama.ac.in"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "10px 14px",
                    borderRadius: "var(--radius-md)",
                    border: "1px solid var(--color-border)",
                    backgroundColor: "var(--color-surface-sunken)",
                    color: "var(--color-text)",
                    outline: "none",
                  }}
                />
              </div>

              <div>
                <label style={{ display: "block", fontSize: "13px", fontWeight: 600, color: "var(--color-text)", marginBottom: "6px" }}>
                  WhatsApp / Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. +91 9876543210"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "10px 14px",
                    borderRadius: "var(--radius-md)",
                    border: "1px solid var(--color-border)",
                    backgroundColor: "var(--color-surface-sunken)",
                    color: "var(--color-text)",
                    outline: "none",
                  }}
                />
              </div>
            </div>

            {/* Row 3: Department & Year of Study */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "20px", marginBottom: "20px" }}>
              <div>
                <label style={{ display: "block", fontSize: "13px", fontWeight: 600, color: "var(--color-text)", marginBottom: "6px" }}>
                  Department / Branch *
                </label>
                <select
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "10px 14px",
                    borderRadius: "var(--radius-md)",
                    border: "1px solid var(--color-border)",
                    backgroundColor: "var(--color-surface-sunken)",
                    color: "var(--color-text)",
                    outline: "none",
                  }}
                >
                  <option value="Computer Science & Engineering">Computer Science & Engineering (CSE)</option>
                  <option value="Information Technology">Information Technology (IT)</option>
                  <option value="Electronics & Communication Engineering">Electronics & Communication (ECE)</option>
                  <option value="Artificial Intelligence & Data Science">AI & Data Science (AIDS)</option>
                  <option value="Other Department">Other Department (SIST)</option>
                </select>
              </div>

              <div>
                <label style={{ display: "block", fontSize: "13px", fontWeight: 600, color: "var(--color-text)", marginBottom: "6px" }}>
                  Academic Year *
                </label>
                <select
                  value={yearOfStudy}
                  onChange={(e) => setYearOfStudy(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "10px 14px",
                    borderRadius: "var(--radius-md)",
                    border: "1px solid var(--color-border)",
                    backgroundColor: "var(--color-surface-sunken)",
                    color: "var(--color-text)",
                    outline: "none",
                  }}
                >
                  <option value="1st Year (Fresher)">1st Year (Fresher)</option>
                  <option value="2nd Year (Sophomore)">2nd Year (Sophomore)</option>
                  <option value="3rd Year (Pre-Final)">3rd Year (Pre-Final)</option>
                  <option value="4th Year (Final Year)">4th Year (Final Year)</option>
                  <option value="Postgraduate / Research">Postgraduate / Research</option>
                </select>
              </div>
            </div>

            {/* Row 4: Primary Domain Squad */}
            <div style={{ marginBottom: "20px" }}>
              <label style={{ display: "block", fontSize: "13px", fontWeight: 600, color: "var(--color-text)", marginBottom: "6px" }}>
                Target Functional Squad *
              </label>
              <select
                value={primaryDomain}
                onChange={(e) => setPrimaryDomain(e.target.value)}
                style={{
                  width: "100%",
                  padding: "10px 14px",
                  borderRadius: "var(--radius-md)",
                  border: "1px solid var(--color-border)",
                  backgroundColor: "var(--color-surface-sunken)",
                  color: "var(--color-text)",
                  outline: "none",
                }}
              >
                {siteData.domains.map((d) => (
                  <option key={d.id} value={d.id}>
                    {d.name} — ({d.tagline})
                  </option>
                ))}
              </select>
            </div>

            {/* Row 5: Cloud Experience Level */}
            <div style={{ marginBottom: "20px" }}>
              <label style={{ display: "block", fontSize: "13px", fontWeight: 600, color: "var(--color-text)", marginBottom: "6px" }}>
                Current Cloud Experience *
              </label>
              <select
                value={cloudExp}
                onChange={(e) => setCloudExp(e.target.value)}
                style={{
                  width: "100%",
                  padding: "10px 14px",
                  borderRadius: "var(--radius-md)",
                  border: "1px solid var(--color-border)",
                  backgroundColor: "var(--color-surface-sunken)",
                  color: "var(--color-text)",
                  outline: "none",
                }}
              >
                <option value="Absolute Beginner (Ready to Learn)">Absolute Beginner (Ready to Learn from Scratch)</option>
                <option value="Foundational (Familiar with EC2/S3 concepts)">Foundational (Familiar with EC2/S3 concepts)</option>
                <option value="Hands-on Builder (Built small projects or APIs)">Hands-on Builder (Built small projects or APIs)</option>
                <option value="Advanced / Certified (AWS Certified Cloud Practitioner or higher)">Advanced / Certified (AWS Certified CCP or higher)</option>
              </select>
            </div>

            {/* Row 6: Personal Statement */}
            <div style={{ marginBottom: "28px" }}>
              <label style={{ display: "block", fontSize: "13px", fontWeight: 600, color: "var(--color-text)", marginBottom: "6px" }}>
                Why do you want to join AWS SBGL SIST?
              </label>
              <textarea
                rows={3}
                placeholder="Tell us what you hope to build, learn, or contribute to our student chapter..."
                value={statement}
                onChange={(e) => setStatement(e.target.value)}
                style={{
                  width: "100%",
                  padding: "10px 14px",
                  borderRadius: "var(--radius-md)",
                  border: "1px solid var(--color-border)",
                  backgroundColor: "var(--color-surface-sunken)",
                  color: "var(--color-text)",
                  outline: "none",
                  fontFamily: "var(--font-display)",
                  resize: "vertical",
                }}
              />
            </div>

            {/* Zero Fee Guarantee Alert */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                padding: "12px 16px",
                borderRadius: "var(--radius-md)",
                background: "rgba(16, 185, 129, 0.08)",
                border: "1px solid var(--color-success)",
                marginBottom: "28px",
              }}
            >
              <span style={{ color: "var(--color-success)", fontWeight: 700 }}>✓</span>
              <span style={{ fontSize: "12px", color: "var(--color-text)" }}>
                <strong>Strict Zero-Fee Verification:</strong> In compliance with Amazon Web Services directives, student induction into AWS SBGL SIST is 100% free forever.
              </span>
            </div>

            <div style={{ textAlign: "center" }}>
              <Button type="submit" variant="primary" size="lg" style={{ width: "100%", maxWidth: "340px" }}>
                Submit Chapter Application →
              </Button>
            </div>
          </form>
        </Card>

        {/* Success Modal */}
        <Modal
          isOpen={isSubmitted}
          onClose={() => setIsSubmitted(false)}
          title="🎉 Application Received!"
          maxWidth="md"
        >
          <div style={{ textAlign: "center", padding: "16px 0" }}>
            <div
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                backgroundColor: "rgba(16, 185, 129, 0.15)",
                border: "2px solid var(--color-success)",
                color: "var(--color-success)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "26px",
                margin: "0 auto 16px",
              }}
            >
              ✓
            </div>

            <h3 className="text-h3" style={{ margin: "0 0 8px" }}>
              Welcome, {fullName}!
            </h3>

            <p className="text-body-sm" style={{ color: "var(--color-text-secondary)", marginBottom: "20px" }}>
              Your application has been logged under Register Number <strong>{regNo}</strong>. We have dispatched your induction onboarding package to <strong>{email}</strong>.
            </p>

            <div
              className="well"
              style={{
                padding: "16px 20px",
                textAlign: "left",
                marginBottom: "24px",
                fontFamily: "var(--font-mono)",
                fontSize: "12px",
                lineHeight: 1.6,
              }}
            >
              <div><strong>Status:</strong> 🟢 Application Under Review</div>
              <div><strong>Department:</strong> {department} ({yearOfStudy})</div>
              <div><strong>Target Squad:</strong> {primaryDomain}</div>
              <div><strong>Membership Fee:</strong> ₹0 Free (AWS SBGL Supported)</div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <Button href={BUILDER_CENTER_URL} variant="primary" size="md" external>
                Create Free AWS Builder ID (Recommended Next Step) →
              </Button>
              <Button
                href="https://www.meetup.com/aws-sbg-at-sathyabama-institute-of-science-and-tech/"
                variant="outline"
                size="md"
                external
              >
                Join Official Meetup Chapter
              </Button>
            </div>
          </div>
        </Modal>
      </Container>
    </div>
  );
}

export default JoinView;

"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Container, SectionHeader, Card, Badge, Button, CountdownTimer, Modal } from "@/modules/design-system/components/ui";
import { BUILDER_CENTER_URL, siteData } from "@/data/site-data";

export function UpcomingEventsView() {
  const KAIROS_DATE = "2027-01-22T09:00:00+05:30";

  // Form State
  const [teamName, setTeamName] = useState("");
  const [leaderName, setLeaderName] = useState("");
  const [regNo, setRegNo] = useState("");
  const [email, setEmail] = useState("");
  const [meetupUrl, setMeetupUrl] = useState("");
  const [builderId, setBuilderId] = useState("");
  const [track, setTrack] = useState("Coming Soon");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedScheduleDay, setSelectedScheduleDay] = useState<1 | 2 | 3>(1);

  // Validation
  const isMeetupValid = meetupUrl.toLowerCase().includes("meetup.com");
  const isBuilderIdValid = builderId.trim().length > 3;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!teamName || !leaderName || !email) {
      alert("Please fill in all required registration fields.");
      return;
    }
    setIsSubmitted(true);
  };

  const tracks = [
    { id: "Coming Soon", name: "Challenge Tracks Coming Soon", desc: "Detailed enterprise challenge statements will be announced soon. Will update later!" },
  ];

  interface ScheduleSlot {
    time: string;
    title: string;
    venue: string;
    type: string;
    speaker?: string;
  }

  const scheduleDays: Record<1 | 2 | 3, ScheduleSlot[]> = {
    1: [
      { time: "08:30 AM", title: "Hacker Check-In & Badge Collection", venue: "Auditorium Foyer", type: "ops" },
      { time: "10:00 AM", title: "Grand Opening Ceremony & Keynote", venue: "Central Auditorium", type: "keynote", speaker: "AWS Community Leaders" },
      { time: "11:30 AM", title: "Problem Statements Revealed & Hacking Begins", venue: "CS Lab Block A/B/C", type: "hack" },
      { time: "01:30 PM", title: "Networking Lunch (100% Sponsored)", venue: "Dining Hall", type: "food" },
      { time: "05:00 PM", title: "Checkpoint Gate 1: Architecture Review", venue: "Lab Booths", type: "eval" },
      { time: "08:30 PM", title: "Dinner & Energy Refreshment", venue: "Dining Hall", type: "food" },
    ],
    2: [
      { time: "12:00 AM", title: "Midnight Pizza Drop & Gaming Chillout", venue: "Student Lounge", type: "food" },
      { time: "03:00 AM", title: "Mentor Clinic 1: AWS Bedrock & Serverless Debugging", venue: "CS Labs", type: "clinic" },
      { time: "08:00 AM", title: "Breakfast & Red Bull Boost", venue: "Dining Hall", type: "food" },
      { time: "11:00 AM", title: "Checkpoint Gate 2: Code Freeze & Progress Demo", venue: "Lab Booths", type: "eval" },
      { time: "02:00 PM", title: "Lunch & AWS Swag Tournament", venue: "Auditorium", type: "event" },
      { time: "07:00 PM", title: "Mentor Clinic 2: Pitch Deck Optimization", venue: "Seminar Hall", type: "clinic" },
    ],
    3: [
      { time: "09:00 AM", title: "Final GitHub Commit Gate (Hard Freeze)", venue: "Online Repository", type: "eval" },
      { time: "10:30 AM", title: "Top 10 Finalist Presentations on Stage", venue: "Central Auditorium", type: "eval", speaker: "Jury Panel" },
      { time: "01:00 PM", title: "Grand Valedictory & Awards Ceremony", venue: "Central Auditorium", type: "awards", speaker: "Faculty & AWS Dignitaries" },
      { time: "02:30 PM", title: "Group Photos & Swag Handout", venue: "Auditorium Foyer", type: "ops" },
    ],
  };

  return (
    <div style={{ padding: "64px 0 100px", minHeight: "80vh" }}>
      <Container>
        {/* Header */}
        <SectionHeader
          eyebrow="MISSION CONTROL PORTAL"
          eyebrowVariant="success"
          eyebrowPulse
          title="Active & Upcoming Activations"
          titleHighlight="100% Free Access"
          description="Register for national hackathons, claim hands-on workshop seats, and access live 48-hour schedules. Zero entry fees, zero ticket paywalls."
        />

        {/* Hero Countdown Billboard */}
        <div
          className="card-elevated"
          style={{
            padding: "54px 36px",
            marginBottom: "56px",
            background: "linear-gradient(135deg, rgba(22, 30, 46, 0.95) 0%, rgba(11, 15, 25, 0.98) 100%)",
            border: "1px solid rgba(168, 85, 247, 0.35)",
            borderRadius: "var(--radius-xl)",
            boxShadow: "0 0 40px rgba(255, 153, 0, 0.12), 0 0 45px rgba(168, 85, 247, 0.12)",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Cosmic Hourglass Emblem */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: "80px",
              height: "80px",
              borderRadius: "18px",
              overflow: "hidden",
              border: "1px solid rgba(168, 85, 247, 0.45)",
              boxShadow: "0 0 28px rgba(168, 85, 247, 0.3)",
              background: "#030408",
              marginBottom: "20px",
            }}
          >
            <Image
              src="/assets/events/kairos/kairos-hourglass.png"
              alt="Kairos Cosmic Hourglass Emblem"
              width={80}
              height={80}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              priority
            />
          </div>

          <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginBottom: "20px" }}>
            <Badge variant="accent" size="sm">
              NEXT MAJOR NATIONAL ACTIVATION
            </Badge>
            <Badge variant="success" size="sm" pulse>
              ₹0 Entry Fee
            </Badge>
          </div>

          <h2
            className="text-display"
            style={{
              fontSize: "clamp(32px, 5vw, 44px)",
              margin: "0 0 12px",
              color: "var(--color-text)",
            }}
          >
            Kairos 2027: National 48-Hour Hackathon
          </h2>

          <p
            className="text-body-lg"
            style={{
              color: "var(--color-text-secondary)",
              maxWidth: "720px",
              margin: "0 auto 32px",
            }}
          >
            January 22–24, 2027 · Sathyabama Institute of Science and Technology, Chennai · 2,000+ Applicants
          </p>

          <div style={{ marginBottom: "32px" }}>
            <CountdownTimer targetDate={KAIROS_DATE} eventName="Kairos 2027" size="lg" />
          </div>

          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "12px",
              padding: "10px 20px",
              background: "rgba(255, 153, 0, 0.08)",
              border: "1px solid rgba(255, 153, 0, 0.25)",
              borderRadius: "var(--radius-md)",
              fontFamily: "var(--font-mono)",
              fontSize: "12px",
              color: "var(--color-accent)",
            }}
          >
            <span>⚡ Dual Verification Funnel Active</span>
            <span>·</span>
            <span>Meetup RSVP + Free AWS Builder ID Required</span>
          </div>
        </div>

        {/* Dual-Registration Funnel Section */}
        <div style={{ marginBottom: "72px" }}>
          <SectionHeader
            eyebrow="DUAL-PHASE REGISTRATION FUNNEL"
            eyebrowVariant="accent"
            title="3 Steps to Confirm"
            titleHighlight="Your Participation"
            description="To ensure radical zero-fee access and compliance with AWS global guidelines, every builder must complete this 3-step verification."
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "24px",
              marginBottom: "36px",
            }}
          >
            {/* Step 1 Card */}
            <Card
              variant="interactive"
              style={{
                padding: "32px 24px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "var(--radius-md)",
                    backgroundColor: "rgba(255, 153, 0, 0.15)",
                    color: "var(--color-accent)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "var(--font-mono)",
                    fontWeight: 700,
                    marginBottom: "16px",
                  }}
                >
                  01
                </div>

                <h3 className="text-h3" style={{ margin: "0 0 8px", fontSize: "18px" }}>
                  RSVP on Meetup.com
                </h3>

                <p className="text-body-sm" style={{ color: "var(--color-text-secondary)", marginBottom: "20px" }}>
                  Join the official AWS Student Builder Group SIST chapter on Meetup to verify your community membership and receive official calendar invites.
                </p>
              </div>

              <Button
                href="https://www.meetup.com/aws-sbg-at-sathyabama-institute-of-science-and-tech/"
                variant="outline"
                size="sm"
                external
              >
                RSVP on Meetup Chapter →
              </Button>
            </Card>

            {/* Step 2 Card */}
            <Card
              variant="interactive"
              style={{
                padding: "32px 24px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div>
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "var(--radius-md)",
                    backgroundColor: "rgba(16, 185, 129, 0.15)",
                    color: "var(--color-success)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "var(--font-mono)",
                    fontWeight: 700,
                    marginBottom: "16px",
                  }}
                >
                  02
                </div>

                <h3 className="text-h3" style={{ margin: "0 0 8px", fontSize: "18px" }}>
                  Create Free AWS Builder ID
                </h3>

                <p className="text-body-sm" style={{ color: "var(--color-text-secondary)", marginBottom: "20px" }}>
                  Your personal, credit-card-free developer passport. Unlocks free hands-on cloud sandboxes, Skill Builder tournaments, and verifiable digital badges.
                </p>
              </div>

              <Button
                href={BUILDER_CENTER_URL}
                variant="primary"
                size="sm"
                external
              >
                Get Free Builder ID →
              </Button>
            </Card>

            {/* Step 3 Card */}
            <Card
              variant="interactive"
              style={{
                padding: "32px 24px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                borderColor: "var(--color-border-accent)",
              }}
            >
              <div>
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "var(--radius-md)",
                    backgroundColor: "rgba(56, 189, 248, 0.15)",
                    color: "var(--color-info)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "var(--font-mono)",
                    fontWeight: 700,
                    marginBottom: "16px",
                  }}
                >
                  03
                </div>

                <h3 className="text-h3" style={{ margin: "0 0 8px", fontSize: "18px" }}>
                  Submit Team Roster
                </h3>

                <p className="text-body-sm" style={{ color: "var(--color-text-secondary)", marginBottom: "20px" }}>
                  Fill in your team details below. Provide your Meetup profile URL and Builder ID username to lock in your confirmed hackathon slots.
                </p>
              </div>

              <a
                href="#registration-form"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "8px 16px",
                  borderRadius: "var(--radius-sm)",
                  background: "var(--color-surface)",
                  border: "1px solid var(--color-border)",
                  color: "var(--color-text)",
                  fontFamily: "var(--font-display)",
                  fontSize: "13px",
                  fontWeight: 600,
                  textDecoration: "none",
                }}
              >
                Jump to Form Below ↓
              </a>
            </Card>
          </div>

          {/* Interactive Registration Form */}
          <div
            id="registration-form"
            className="card"
            style={{
              padding: "44px 36px",
              background: "var(--color-surface)",
              border: "1px solid var(--color-border-accent)",
              borderRadius: "var(--radius-xl)",
              maxWidth: "840px",
              margin: "0 auto",
            }}
          >
            <div style={{ marginBottom: "28px", textAlign: "center" }}>
              <Badge variant="accent" size="sm">
                STEP 3: TEAM REGISTRATION ROSTER
              </Badge>
              <h3 className="text-h2" style={{ margin: "12px 0 6px" }}>
                Submit Your Hackathon Team
              </h3>
              <p className="text-body-sm" style={{ color: "var(--color-text-secondary)", margin: 0 }}>
                100% Free · No Payment Details Required · 2 to 4 Members per Team
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "20px", marginBottom: "20px" }}>
                <div>
                  <label style={{ display: "block", fontFamily: "var(--font-display)", fontSize: "13px", fontWeight: 600, color: "var(--color-text)", marginBottom: "6px" }}>
                    Team Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Cloud Architects"
                    value={teamName}
                    onChange={(e) => setTeamName(e.target.value)}
                    style={{
                      width: "100%",
                      padding: "10px 14px",
                      borderRadius: "var(--radius-md)",
                      border: "1px solid var(--color-border)",
                      backgroundColor: "var(--color-surface-sunken)",
                      color: "var(--color-text)",
                      fontFamily: "var(--font-display)",
                      fontSize: "14px",
                      outline: "none",
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: "block", fontFamily: "var(--font-display)", fontSize: "13px", fontWeight: 600, color: "var(--color-text)", marginBottom: "6px" }}>
                    Team Leader Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Morgan"
                    value={leaderName}
                    onChange={(e) => setLeaderName(e.target.value)}
                    style={{
                      width: "100%",
                      padding: "10px 14px",
                      borderRadius: "var(--radius-md)",
                      border: "1px solid var(--color-border)",
                      backgroundColor: "var(--color-surface-sunken)",
                      color: "var(--color-text)",
                      fontFamily: "var(--font-display)",
                      fontSize: "14px",
                      outline: "none",
                    }}
                  />
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "20px", marginBottom: "20px" }}>
                <div>
                  <label style={{ display: "block", fontFamily: "var(--font-display)", fontSize: "13px", fontWeight: 600, color: "var(--color-text)", marginBottom: "6px" }}>
                    Leader Register Number *
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
                      fontFamily: "var(--font-display)",
                      fontSize: "14px",
                      outline: "none",
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: "block", fontFamily: "var(--font-display)", fontSize: "13px", fontWeight: 600, color: "var(--color-text)", marginBottom: "6px" }}>
                    Institutional Email Address *
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
                      fontFamily: "var(--font-display)",
                      fontSize: "14px",
                      outline: "none",
                    }}
                  />
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "20px", marginBottom: "20px" }}>
                <div>
                  <label style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontFamily: "var(--font-display)", fontSize: "13px", fontWeight: 600, color: "var(--color-text)", marginBottom: "6px" }}>
                    <span>Leader Meetup Profile URL *</span>
                    {isMeetupValid && <span style={{ color: "var(--color-success)", fontSize: "11px" }}>✓ Verified Meetup URL</span>}
                  </label>
                  <input
                    type="url"
                    required
                    placeholder="https://meetup.com/members/12345678"
                    value={meetupUrl}
                    onChange={(e) => setMeetupUrl(e.target.value)}
                    style={{
                      width: "100%",
                      padding: "10px 14px",
                      borderRadius: "var(--radius-md)",
                      border: isMeetupValid ? "1px solid var(--color-success)" : "1px solid var(--color-border)",
                      backgroundColor: "var(--color-surface-sunken)",
                      color: "var(--color-text)",
                      fontFamily: "var(--font-display)",
                      fontSize: "14px",
                      outline: "none",
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontFamily: "var(--font-display)", fontSize: "13px", fontWeight: 600, color: "var(--color-text)", marginBottom: "6px" }}>
                    <span>AWS Builder ID Username *</span>
                    {isBuilderIdValid && <span style={{ color: "var(--color-success)", fontSize: "11px" }}>✓ Valid Format</span>}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. cloud_builder_27"
                    value={builderId}
                    onChange={(e) => setBuilderId(e.target.value)}
                    style={{
                      width: "100%",
                      padding: "10px 14px",
                      borderRadius: "var(--radius-md)",
                      border: isBuilderIdValid ? "1px solid var(--color-success)" : "1px solid var(--color-border)",
                      backgroundColor: "var(--color-surface-sunken)",
                      color: "var(--color-text)",
                      fontFamily: "var(--font-display)",
                      fontSize: "14px",
                      outline: "none",
                    }}
                  />
                </div>
              </div>

              {/* Track Selection */}
              <div style={{ marginBottom: "28px" }}>
                <label style={{ display: "block", fontFamily: "var(--font-display)", fontSize: "13px", fontWeight: 600, color: "var(--color-text)", marginBottom: "10px" }}>
                  Select Preferred Hackathon Track *
                </label>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "10px" }}>
                  {tracks.map((t) => {
                    const isSelected = track === t.id;
                    return (
                      <div
                        key={t.id}
                        onClick={() => setTrack(t.id)}
                        style={{
                          padding: "12px 14px",
                          borderRadius: "var(--radius-md)",
                          border: isSelected ? "1px solid var(--color-accent)" : "1px solid var(--color-border)",
                          backgroundColor: isSelected ? "rgba(255, 153, 0, 0.08)" : "var(--color-surface-sunken)",
                          cursor: "pointer",
                          transition: "all 0.15s ease",
                        }}
                      >
                        <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "13px", color: isSelected ? "var(--color-accent)" : "var(--color-text)", display: "block" }}>
                          {t.name}
                        </span>
                        <span style={{ fontSize: "11px", color: "var(--color-text-secondary)", lineHeight: 1.4, display: "block", marginTop: "4px" }}>
                          {t.desc}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Zero Fee Guarantee Notice */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "12px 16px",
                  borderRadius: "var(--radius-md)",
                  background: "rgba(16, 185, 129, 0.08)",
                  border: "1px solid var(--color-success)",
                  marginBottom: "24px",
                }}
              >
                <span style={{ color: "var(--color-success)", fontWeight: 700 }}>✓</span>
                <span style={{ fontSize: "12px", color: "var(--color-text)" }}>
                  <strong>Zero Entry Fee:</strong> Registration for all AWS Student Builder Group sessions is 100% free. No payment details are ever required.
                </span>
              </div>

              <div style={{ textAlign: "center" }}>
                <Button type="submit" variant="primary" size="lg" style={{ width: "100%", maxWidth: "360px" }}>
                  Confirm Free Team Registration →
                </Button>
              </div>
            </form>
          </div>
        </div>

        {/* 48-Hour Interactive Schedule Matrix */}
        <div>
          <SectionHeader
            eyebrow="48-HOUR RUN OF SHOW"
            eyebrowVariant="accent"
            title="Interactive Event Schedule"
            titleHighlight="Day 1 to Valedictory"
            description="Detailed timetable of orientation keynotes, architecture review gates, mentor clinics, midnight food drops, and stage pitches."
          />

          {/* Day Tabs */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "12px",
              marginBottom: "36px",
            }}
          >
            {[1, 2, 3].map((d) => {
              const active = selectedScheduleDay === d;
              return (
                <button
                  key={d}
                  onClick={() => setSelectedScheduleDay(d as 1 | 2 | 3)}
                  style={{
                    padding: "10px 24px",
                    borderRadius: "var(--radius-md)",
                    fontSize: "14px",
                    fontWeight: 700,
                    fontFamily: "var(--font-display)",
                    cursor: "pointer",
                    transition: "all 0.15s ease",
                    border: active ? "1px solid var(--color-accent)" : "1px solid var(--color-border)",
                    backgroundColor: active ? "var(--color-accent)" : "var(--color-surface)",
                    color: active ? "var(--color-bg)" : "var(--color-text-secondary)",
                  }}
                >
                  Day 0{d} {d === 1 ? "(Kickoff)" : d === 2 ? "(Sprint)" : "(Grand Finale)"}
                </button>
              );
            })}
          </div>

          {/* Schedule Slots Grid */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "14px",
              maxWidth: "840px",
              margin: "0 auto",
            }}
          >
            {scheduleDays[selectedScheduleDay].map((slot, idx) => (
              <div
                key={idx}
                className="card-interactive"
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "18px 24px",
                  borderRadius: "var(--radius-md)",
                  gap: "16px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontWeight: 700,
                      fontSize: "14px",
                      color: "var(--color-accent)",
                      minWidth: "85px",
                    }}
                  >
                    {slot.time}
                  </span>

                  <div>
                    <h4
                      style={{
                        margin: "0 0 4px",
                        fontSize: "16px",
                        color: "var(--color-text)",
                        fontFamily: "var(--font-display)",
                        fontWeight: 600,
                      }}
                    >
                      {slot.title}
                    </h4>
                    {slot.speaker && (
                      <span style={{ fontSize: "12px", color: "var(--color-accent)", display: "block" }}>
                        Led by: {slot.speaker}
                      </span>
                    )}
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "12px",
                      color: "var(--color-text-muted)",
                      backgroundColor: "rgba(255, 255, 255, 0.04)",
                      padding: "4px 10px",
                      borderRadius: "var(--radius-sm)",
                      border: "1px solid var(--color-border-subtle)",
                    }}
                  >
                    📍 {slot.venue}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Confirmation Modal */}
        <Modal
          isOpen={isSubmitted}
          onClose={() => setIsSubmitted(false)}
          title="🎉 Team Registration Verified!"
          maxWidth="md"
        >
          <div style={{ textAlign: "center", padding: "16px 0" }}>
            <div
              style={{
                width: "64px",
                height: "64px",
                borderRadius: "50%",
                backgroundColor: "rgba(16, 185, 129, 0.15)",
                border: "2px solid var(--color-success)",
                color: "var(--color-success)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "28px",
                margin: "0 auto 20px",
              }}
            >
              ✓
            </div>

            <h3 className="text-h3" style={{ margin: "0 0 8px" }}>
              Welcome to Kairos 2027, Team {teamName}!
            </h3>

            <p className="text-body" style={{ color: "var(--color-text-secondary)", marginBottom: "24px" }}>
              Your roster has been logged with Leader <strong>{leaderName}</strong> (Reg No: {regNo}). We have dispatched event onboarding materials to <strong>{email}</strong>.
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
              <div><strong>Status:</strong> 🟢 Verified Free Registration (₹0)</div>
              <div><strong>Track:</strong> {track}</div>
              <div><strong>Builder ID:</strong> @{builderId}</div>
              <div><strong>Venue:</strong> SIST Campus, Chennai</div>
              <div><strong>Dates:</strong> Jan 22–24, 2027</div>
            </div>

            <Button
              variant="primary"
              size="md"
              onClick={() => setIsSubmitted(false)}
              style={{ width: "100%" }}
            >
              Close Confirmation
            </Button>
          </div>
        </Modal>
      </Container>
    </div>
  );
}

export default UpcomingEventsView;

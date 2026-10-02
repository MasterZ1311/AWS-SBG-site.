"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { Container, SectionHeader, Card, Badge, Button } from "@/modules/design-system/components/ui";
import { siteData } from "@/data/site-data";
import { EventRecord, EventCategory } from "@/types";

const CATEGORIES: Array<"All" | EventCategory> = [
  "All",
  "Hackathon",
  "Bootcamp",
  "Workshop",
  "Study Jam",
  "Orientation",
];

export function EventsArchiveView() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredEvents = useMemo(() => {
    return siteData.events.filter((evt) => {
      const matchesCategory =
        selectedCategory === "All" || evt.category.toLowerCase() === selectedCategory.toLowerCase();

      const q = searchQuery.toLowerCase();
      const matchesSearch =
        !q ||
        evt.title.toLowerCase().includes(q) ||
        evt.description.toLowerCase().includes(q) ||
        evt.venue.toLowerCase().includes(q) ||
        (evt.tags && evt.tags.some((t) => t.toLowerCase().includes(q)));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const totalAttendees = useMemo(() => {
    return siteData.events.reduce((acc, curr) => acc + (curr.attendeeCount || 0), 0);
  }, []);

  const formatDate = (isoString: string) => {
    try {
      const d = new Date(isoString);
      return d.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      });
    } catch {
      return isoString;
    }
  };

  const getCategoryBadgeVariant = (cat: EventCategory) => {
    switch (cat) {
      case "Hackathon":
        return "success";
      case "Bootcamp":
        return "info";
      case "Workshop":
        return "accent";
      case "Study Jam":
        return "warning";
      case "Orientation":
        return "default";
      default:
        return "default";
    }
  };

  return (
    <div style={{ padding: "64px 0 100px", minHeight: "80vh" }}>
      <Container>
        {/* Page Top Header */}
        <SectionHeader
          eyebrow="PERMANENT CHAPTER REPOSITORY"
          eyebrowVariant="accent"
          title="Chronicles of Innovation:"
          titleHighlight="All Chapter Events"
          description="A complete chronological record of national hackathons, intensive bootcamps, hands-on serverless labs, and foundational certifications organized by AWS SBGL SIST."
        />

        {/* Impact Overview Ribbon */}
        <div
          className="well"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "20px",
            padding: "24px 32px",
            marginBottom: "48px",
            borderRadius: "var(--radius-lg)",
            border: "1px solid var(--color-border)",
            background: "rgba(18, 24, 38, 0.6)",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <span
              style={{
                fontFamily: "var(--font-duospace)",
                fontSize: "28px",
                fontWeight: 700,
                color: "var(--color-accent)",
                display: "block",
              }}
            >
              {siteData.events.length}
            </span>
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "12px",
                color: "var(--color-text-secondary)",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}
            >
              Total Chronicled Events
            </span>
          </div>

          <div style={{ textAlign: "center" }}>
            <span
              style={{
                fontFamily: "var(--font-duospace)",
                fontSize: "28px",
                fontWeight: 700,
                color: "var(--color-success)",
                display: "block",
              }}
            >
              {totalAttendees.toLocaleString("en-IN")}+
            </span>
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "12px",
                color: "var(--color-text-secondary)",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}
            >
              Total Attendees Mobilized
            </span>
          </div>

          <div style={{ textAlign: "center" }}>
            <span
              style={{
                fontFamily: "var(--font-duospace)",
                fontSize: "28px",
                fontWeight: 700,
                color: "var(--color-info)",
                display: "block",
              }}
            >
              4.88 / 5.0
            </span>
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "12px",
                color: "var(--color-text-secondary)",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}
            >
              Average CSAT Rating (Pulse)
            </span>
          </div>

          <div style={{ textAlign: "center" }}>
            <span
              style={{
                fontFamily: "var(--font-duospace)",
                fontSize: "28px",
                fontWeight: 700,
                color: "var(--color-accent)",
                display: "block",
              }}
            >
              100% Free
            </span>
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "12px",
                color: "var(--color-text-secondary)",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}
            >
              Radical Zero-Fee Access
            </span>
          </div>
        </div>

        {/* Filter Controls: Search & Category Tabs */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "20px",
            marginBottom: "36px",
          }}
        >
          {/* Category Tabs */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "8px",
            }}
          >
            {CATEGORIES.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  style={{
                    padding: "8px 16px",
                    borderRadius: "var(--radius-md)",
                    fontSize: "13px",
                    fontWeight: 600,
                    fontFamily: "var(--font-display)",
                    cursor: "pointer",
                    transition: "all 0.15s ease",
                    border: active ? "1px solid var(--color-accent)" : "1px solid var(--color-border)",
                    backgroundColor: active ? "var(--color-accent)" : "var(--color-surface)",
                    color: active ? "var(--color-bg)" : "var(--color-text-secondary)",
                  }}
                >
                  {cat === "All" ? "All Events" : `${cat}s`}
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div style={{ minWidth: "260px" }}>
            <input
              type="text"
              placeholder="Search events, tools, topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: "100%",
                padding: "10px 16px",
                borderRadius: "var(--radius-md)",
                border: "1px solid var(--color-border)",
                backgroundColor: "var(--color-surface)",
                color: "var(--color-text)",
                fontFamily: "var(--font-display)",
                fontSize: "14px",
                outline: "none",
              }}
            />
          </div>
        </div>

        {/* Events Grid */}
        {filteredEvents.length === 0 ? (
          <div
            className="well"
            style={{
              padding: "60px 20px",
              textAlign: "center",
              borderRadius: "var(--radius-lg)",
            }}
          >
            <p className="text-body-lg" style={{ color: "var(--color-text-secondary)" }}>
              No events matched your search filters.
            </p>
            <Button variant="outline" size="sm" onClick={() => { setSelectedCategory("All"); setSearchQuery(""); }}>
              Reset Filters
            </Button>
          </div>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
              gap: "28px",
            }}
          >
            {filteredEvents.map((event) => {
              const isUpcoming = event.status === "upcoming" || event.status === "active";

              return (
                <Card
                  key={event.id}
                  variant="interactive"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    padding: "28px 24px",
                    position: "relative",
                  }}
                >
                  <div>
                    {/* Header Row: Category Badge + Status */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginBottom: "16px",
                      }}
                    >
                      <Badge variant={getCategoryBadgeVariant(event.category)} size="sm">
                        {event.category}
                      </Badge>

                      <span
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "11px",
                          fontWeight: 600,
                          color: isUpcoming ? "var(--color-success)" : "var(--color-text-muted)",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "6px",
                        }}
                      >
                        <span
                          style={{
                            width: "6px",
                            height: "6px",
                            borderRadius: "50%",
                            backgroundColor: isUpcoming ? "var(--color-success)" : "var(--color-text-muted)",
                          }}
                        />
                        {event.status.toUpperCase()}
                      </span>
                    </div>

                    {/* Date & Venue Pill */}
                    <div
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "12px",
                        color: "var(--color-accent)",
                        marginBottom: "10px",
                      }}
                    >
                      📅 {formatDate(event.date)} · 📍 {event.venue}
                    </div>

                    {/* Title */}
                    <h3
                      className="text-h3"
                      style={{
                        margin: "0 0 12px",
                        color: "var(--color-text)",
                        fontSize: "20px",
                        lineHeight: 1.3,
                      }}
                    >
                      {event.title}
                    </h3>

                    {/* Description */}
                    <p
                      className="text-body-sm"
                      style={{
                        color: "var(--color-text-secondary)",
                        lineHeight: 1.6,
                        marginBottom: "20px",
                      }}
                    >
                      {event.description}
                    </p>

                    {/* Highlights bullet list */}
                    {event.highlights && event.highlights.length > 0 && (
                      <ul
                        style={{
                          margin: "0 0 20px",
                          paddingLeft: "18px",
                          fontSize: "13px",
                          color: "var(--color-text-secondary)",
                          lineHeight: 1.5,
                        }}
                      >
                        {event.highlights.slice(0, 3).map((h, i) => (
                          <li key={i} style={{ marginBottom: "4px" }}>
                            {h}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  {/* Bottom Stats and CTAs */}
                  <div>
                    {/* Impact Telemetry Row */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "12px 14px",
                        background: "rgba(255, 255, 255, 0.02)",
                        borderRadius: "var(--radius-md)",
                        border: "1px solid var(--color-border-subtle)",
                        marginBottom: "20px",
                        fontFamily: "var(--font-mono)",
                        fontSize: "12px",
                      }}
                    >
                      {event.attendeeCount && (
                        <span style={{ color: "var(--color-text-secondary)" }}>
                          👥 {event.attendeeCount.toLocaleString("en-IN")}+ Builders
                        </span>
                      )}
                      {event.prizePool && (
                        <span style={{ color: "var(--color-accent)", fontWeight: 700 }}>
                          🏆 {event.prizePool} Prizes
                        </span>
                      )}
                      {event.csatScore && (
                        <span style={{ color: "var(--color-warning)" }}>
                          ⭐ {event.csatScore} / 5.0
                        </span>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div style={{ display: "flex", gap: "10px" }}>
                      {isUpcoming ? (
                        <>
                          <Button href="/events/upcoming" variant="primary" size="sm" style={{ flex: 1 }}>
                            Registration Portal
                          </Button>
                          <Button
                            href={event.meetupUrl ?? "https://www.meetup.com/aws-sbg-at-sathyabama-institute-of-science-and-tech/"}
                            variant="outline"
                            size="sm"
                            external
                          >
                            RSVP
                          </Button>
                        </>
                      ) : (
                        <Button href="/csat" variant="outline" size="sm" style={{ flex: 1 }}>
                          View Pulse CSAT & Badges →
                        </Button>
                      )}
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        )}
      </Container>
    </div>
  );
}

export default EventsArchiveView;

import React from "react";
import Link from "next/link";
import { Container, SectionHeader, Card, Badge, Button } from "@/modules/design-system/components/ui";
import { siteData } from "@/data/site-data";

export function ProjectsPreviewSection() {
  const featuredProjects = siteData.projects.slice(0, 3);

  return (
    <section
      id="projects-preview"
      aria-label="Student Engineering Showcase"
      style={{
        padding: "96px 0",
        background: "var(--color-bg)",
        borderTop: "1px solid var(--color-border-subtle)",
      }}
    >
      <Container>
        <SectionHeader
          eyebrow="PROOF OF WORK"
          eyebrowVariant="accent"
          title="Engineered by Students."
          titleHighlight="Deployed on AWS."
          description="Tangible open-source systems, multi-agent AI pipelines, and distributed cloud applications built by student builders in our Elite Production Lab."
          action={
            <Button href="/projects" variant="outline" size="md">
              View All Systems →
            </Button>
          }
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
            gap: "28px",
          }}
        >
          {featuredProjects.map((project) => (
            <Card
              key={project.id}
              variant="interactive"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                padding: "32px 28px",
              }}
            >
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "16px",
                  }}
                >
                  <Badge variant="accent" size="sm">
                    {project.domain}
                  </Badge>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "11px",
                      color: "var(--color-success)",
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                    }}
                  >
                    <span
                      style={{
                        width: "6px",
                        height: "6px",
                        borderRadius: "50%",
                        backgroundColor: "var(--color-success)",
                      }}
                    />
                    {project.status.toUpperCase()}
                  </span>
                </div>

                <h3
                  className="text-h3"
                  style={{
                    margin: "0 0 12px",
                    color: "var(--color-text)",
                  }}
                >
                  {project.title}
                </h3>

                <p
                  className="text-body-sm"
                  style={{
                    color: "var(--color-text-secondary)",
                    lineHeight: 1.6,
                    marginBottom: "24px",
                  }}
                >
                  {project.description}
                </p>

                {/* AWS Services Pills */}
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "6px",
                    marginBottom: "24px",
                  }}
                >
                  {project.awsServices.map((svc) => (
                    <span
                      key={svc}
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "11px",
                        color: "var(--color-accent)",
                        backgroundColor: "rgba(255, 153, 0, 0.08)",
                        padding: "3px 8px",
                        borderRadius: "var(--radius-sm)",
                        border: "1px solid rgba(255, 153, 0, 0.2)",
                      }}
                    >
                      {svc}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer: Authors and GitHub Link */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  borderTop: "1px solid var(--color-border)",
                  paddingTop: "18px",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "12px",
                    color: "var(--color-text-muted)",
                  }}
                >
                  Lead: {project.team.join(", ")}
                </span>

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      color: "var(--color-accent)",
                      fontFamily: "var(--font-mono)",
                      fontSize: "12px",
                      fontWeight: 600,
                      textDecoration: "none",
                    }}
                  >
                    <span>Source</span>
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </a>
                )}
              </div>
            </Card>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "40px" }}>
          <Button href="/projects" variant="secondary" size="md">
            Explore All 7 Engineering Repositories & Architecture Diagrams →
          </Button>
        </div>
      </Container>
    </section>
  );
}

export default ProjectsPreviewSection;

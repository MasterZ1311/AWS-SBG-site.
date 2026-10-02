"use client";

import React, { useState } from "react";
import { Container, SectionHeader, Card, Badge, Button, Modal } from "@/modules/design-system/components/ui";
import { siteData } from "@/data/site-data";
import { Project } from "@/types";

export function ProjectsView() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filterDomain, setFilterDomain] = useState<string>("All");

  const domains = ["All", ...Array.from(new Set(siteData.projects.map((p) => p.domain)))];

  const filteredProjects = filterDomain === "All"
    ? siteData.projects
    : siteData.projects.filter((p) => p.domain === filterDomain);

  return (
    <div style={{ padding: "64px 0 100px", minHeight: "80vh" }}>
      <Container>
        <SectionHeader
          eyebrow="STUDENT BUILDER SHOWCASE"
          eyebrowVariant="accent"
          title="Engineered by Students."
          titleHighlight="Deployed on AWS."
          description="A curated repository of production cloud architectures, autonomous AI pipelines, and open-source toolkits developed by student engineers in our chapter."
        />

        {/* Domain Filter Pills */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "10px",
            marginBottom: "48px",
          }}
        >
          {domains.map((dom) => {
            const isActive = filterDomain === dom;
            return (
              <button
                key={dom}
                onClick={() => setFilterDomain(dom)}
                style={{
                  padding: "8px 16px",
                  borderRadius: "var(--radius-md)",
                  fontSize: "13px",
                  fontWeight: 600,
                  fontFamily: "var(--font-display)",
                  cursor: "pointer",
                  transition: "all 0.15s ease",
                  border: isActive ? "1px solid var(--color-accent)" : "1px solid var(--color-border)",
                  backgroundColor: isActive ? "var(--color-accent)" : "var(--color-surface)",
                  color: isActive ? "var(--color-bg)" : "var(--color-text-secondary)",
                }}
              >
                {dom}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
            gap: "32px",
            marginBottom: "64px",
          }}
        >
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              variant="interactive"
              style={{
                padding: "36px 30px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                position: "relative",
              }}
            >
              <div>
                {/* Top Status & Domain */}
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
                      fontWeight: 600,
                      color: project.status === "active" ? "var(--color-success)" : "var(--color-text-muted)",
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
                        backgroundColor: project.status === "active" ? "var(--color-success)" : "var(--color-text-muted)",
                      }}
                    />
                    {project.status.toUpperCase()}
                  </span>
                </div>

                {/* Title */}
                <h3
                  className="text-h3"
                  style={{
                    margin: "0 0 12px",
                    fontSize: "22px",
                    color: "var(--color-text)",
                  }}
                >
                  {project.title}
                </h3>

                {/* Description */}
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

                {/* AWS Services */}
                <div style={{ marginBottom: "24px" }}>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "11px",
                      color: "var(--color-text-muted)",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                      display: "block",
                      marginBottom: "8px",
                    }}
                  >
                    AWS ARCHITECTURE SERVICES:
                  </span>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
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

                {/* Architecture Blueprint Trigger */}
                <button
                  onClick={() => setSelectedProject(project)}
                  style={{
                    width: "100%",
                    padding: "10px 14px",
                    borderRadius: "var(--radius-md)",
                    backgroundColor: "rgba(255, 255, 255, 0.02)",
                    border: "1px dashed var(--color-border)",
                    color: "var(--color-accent)",
                    fontFamily: "var(--font-mono)",
                    fontSize: "12px",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    marginBottom: "20px",
                    transition: "border-color 0.15s ease",
                  }}
                >
                  <span>📐 View Cloud Architecture Blueprint</span>
                </button>
              </div>

              {/* Bottom Actions */}
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
                  Builder: {project.team.join(", ")}
                </span>

                <div style={{ display: "flex", gap: "12px" }}>
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: "var(--color-accent)",
                        fontFamily: "var(--font-mono)",
                        fontSize: "12px",
                        fontWeight: 600,
                        textDecoration: "none",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "4px",
                      }}
                    >
                      <span>GitHub</span>
                      <span>↗</span>
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: "var(--color-success)",
                        fontFamily: "var(--font-mono)",
                        fontSize: "12px",
                        fontWeight: 600,
                        textDecoration: "none",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "4px",
                      }}
                    >
                      <span>Live Demo</span>
                      <span>↗</span>
                    </a>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Submit a Project CTA */}
        <div
          className="well"
          style={{
            padding: "40px 32px",
            textAlign: "center",
            borderRadius: "var(--radius-xl)",
            border: "1px solid var(--color-border-accent)",
          }}
        >
          <h3 className="text-h3" style={{ margin: "0 0 10px" }}>
            Building Something on AWS?
          </h3>
          <p className="text-body" style={{ color: "var(--color-text-secondary)", maxWidth: "600px", margin: "0 auto 24px" }}>
            Connect with chapter leads and fellow builders to collaborate, build hands-on on AWS, and feature your open-source repositories in our official community showcase.
          </p>
          <Button href="/join" variant="primary" size="md">
            Collaborate With Us →
          </Button>
        </div>

        {/* Architecture Diagram Modal */}
        {selectedProject && (
          <Modal
            isOpen={!!selectedProject}
            onClose={() => setSelectedProject(null)}
            title={`Architecture Blueprint: ${selectedProject.title}`}
            maxWidth="lg"
          >
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  marginBottom: "16px",
                }}
              >
                <Badge variant="accent" size="sm">
                  {selectedProject.domain}
                </Badge>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "12px", color: "var(--color-text-muted)" }}>
                  Primary Services: {selectedProject.awsServices.join(" → ")}
                </span>
              </div>

              <div
                className="well"
                style={{
                  padding: "32px 24px",
                  backgroundColor: "var(--color-surface-sunken)",
                  borderRadius: "var(--radius-lg)",
                  border: "1px solid var(--color-border)",
                  marginBottom: "24px",
                  textAlign: "center",
                }}
              >
                {/* Visual Architecture Topology Diagram Box */}
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "13px",
                    lineHeight: 1.8,
                    color: "var(--color-accent)",
                    textAlign: "left",
                    display: "inline-block",
                    padding: "20px",
                    background: "rgba(0, 0, 0, 0.4)",
                    borderRadius: "var(--radius-md)",
                    border: "1px solid var(--color-border-accent)",
                    maxWidth: "100%",
                    overflowX: "auto",
                  }}
                >
                  <pre style={{ margin: 0 }}>
{`[Client Device / Browser] ──(HTTPS/WSS)──> [Amazon CloudFront CDN]
                                               │
                                       [Amazon API Gateway]
                                               │
                                  ┌────────────┴────────────┐
                                  ▼                         ▼
                          [AWS Lambda Workers]     [Amazon Cognito Auth]
                                  │                         │
                                  ▼                         ▼
                         [Amazon DynamoDB]        [Amazon S3 Assets]
                                  │
                       [Amazon EventBridge Bus]
                                  │
                 ┌────────────────┴────────────────┐
                 ▼                                 ▼
       [Amazon Bedrock Agent]            [Amazon CloudWatch Alerts]`}
                  </pre>
                </div>
              </div>

              <p className="text-body-sm" style={{ color: "var(--color-text-secondary)", lineHeight: 1.6, marginBottom: "20px" }}>
                {selectedProject.description} Designed according to AWS Well-Architected Framework guidelines prioritizing security, reliability, and cost-efficiency.
              </p>

              <div style={{ display: "flex", justifyContent: "flex-end", gap: "12px" }}>
                {selectedProject.githubUrl && (
                  <Button href={selectedProject.githubUrl} variant="primary" size="sm" external>
                    Inspect GitHub Repository →
                  </Button>
                )}
                <Button variant="outline" size="sm" onClick={() => setSelectedProject(null)}>
                  Close Blueprint
                </Button>
              </div>
            </div>
          </Modal>
        )}
      </Container>
    </div>
  );
}

export default ProjectsView;

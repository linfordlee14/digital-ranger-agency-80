// The Automation Audit starting price is approved. All other categories remain
// consultation-based or custom-scoped until real delivery cost data is available.
export const pricingContent = {
  afterAudit: [
    { description: "Review the workflow and the information gathered during the Audit.", number: "01", title: "Audit" },
    { description: "Discuss the possible opportunities, constraints, and what remains unclear.", number: "02", title: "Findings" },
    { description: "Consider practical options without assuming that automation is the answer.", number: "03", title: "Possible options" },
    { description: "Define a separate scope only if implementation appears appropriate.", number: "04", title: "Scope" },
    { description: "Decide whether to proceed, gather more information, or keep the current process.", number: "05", title: "Decision" },
  ],
  architecture: [
    {
      description: "A structured discovery step to understand the workflow before a build is discussed.",
      label: "Public starting price",
      price: "From R1,500",
      title: "Automation Audit",
    },
    {
      description: "Automation projects, integrations, custom software, and Custom AI Agents are scoped around the actual workflow.",
      label: "Custom scope",
      price: "Priced after consultation",
      title: "Implementation / Automation Projects",
    },
    {
      description: "Ongoing support or managed work is discussed in relation to the system and business needs.",
      label: "Consultation",
      price: "Priced after consultation",
      title: "Ongoing Support / Managed Work",
    },
  ],
  audit: {
    included: [
      "Structured discovery conversation",
      "Understanding of the current workflow",
      "Review of repetitive or manual work",
      "Review of existing systems and tools",
      "Identification of possible automation opportunities",
      "Discussion of possible next steps",
    ],
    notPromised: [
      "Guaranteed savings or ROI",
      "Guaranteed automation opportunity",
      "Automatic implementation",
      "Replacement of existing software",
      "An automation project after every Audit",
    ],
    price: "From R1,500",
    summary:
      "The Automation Audit is a paid discovery step for understanding a workflow before deciding whether a technical change is appropriate.",
  },
  faq: [
    {
      answer:
        "The Audit is the current public starting point for a structured discovery conversation. It gives the business and Linfy a clearer basis for discussing a possible next step.",
      question: "Why does the Audit start at R1,500?",
    },
    {
      answer:
        "No. The Audit is a discovery step. Any implementation is discussed separately only if it appears appropriate for the workflow.",
      question: "Is implementation included in the Audit price?",
    },
    {
      answer:
        "No. The Audit is a decision-making step, not an automatic commitment to a build.",
      question: "Do I have to build something after the Audit?",
    },
    {
      answer:
        "Implementation scope can vary with the workflow, existing systems, integrations, customisation, human review needs, and ongoing support requirements. Linfy scopes the work after the problem is understood.",
      question: "Why are implementation prices not listed?",
    },
    {
      answer:
        "Existing software is part of the conversation. Whether a connection or change is practical depends on the systems, access, and workflow involved.",
      question: "Can Linfy work with software I already use?",
    },
    {
      answer:
        "The current public path is to start the Automation Audit. Visitors who are not ready can review the solution areas and process before deciding whether to begin.",
      question: "Can I contact Linfy without doing the Audit?",
    },
  ],
  hero: {
    description:
      "Linfy publicly prices the Automation Audit. Implementation work is scoped around the actual workflow, systems, and requirements rather than estimated as a generic package.",
    eyebrow: "Pricing",
    title: "Start with a clear scope, not a guess.",
  },
  scopeFactors: [
    "Workflow complexity",
    "Systems involved",
    "Integrations",
    "Level of customisation",
    "Implementation requirements",
    "Ongoing support needs",
  ],
} as const;

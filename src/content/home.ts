// Content status is retained alongside copy so a later CMS migration cannot
// accidentally present a commercial hypothesis as verified client evidence.
export type ClaimStatus = "fact" | "evidence" | "inference" | "hypothesis" | "unknown";

interface ContentItem {
  description: string;
  status: ClaimStatus;
  title: string;
}

export const homeContent = {
  hero: {
    description:
      "An Automation Audit for businesses that want to examine repetitive admin, follow-ups, reporting, customer communication, or disconnected systems before committing to a build.",
    eyebrow: "Start with the work",
    status: "hypothesis" as const,
    title: "Find the operational work slowing your business down. Then decide what to automate.",
  },
  problems: [
    {
      description: "The same information is copied between messages, documents, spreadsheets, and systems.",
      status: "hypothesis" as const,
      title: "Repetitive manual admin",
    },
    {
      description: "Enquiries need a response, but follow-up depends on someone remembering at the right time.",
      status: "hypothesis" as const,
      title: "Missed follow-ups",
    },
    {
      description: "A workflow moves between people and tools without a clear handover or source of truth.",
      status: "hypothesis" as const,
      title: "Fragmented workflows",
    },
    {
      description: "Reports, updates, and customer messages are repeatedly assembled from scattered information.",
      status: "hypothesis" as const,
      title: "Manual reporting and communication",
    },
    {
      description: "Useful systems exist, but they are not connected in a way that supports the daily work.",
      status: "hypothesis" as const,
      title: "Disconnected systems",
    },
  ] satisfies ContentItem[],
  solutions: [
    {
      description: "Explore where AI may assist with a specific, justified operational task.",
      status: "hypothesis" as const,
      title: "AI automation",
    },
    {
      description: "Map a repeatable process and consider a more reliable way for work to move through it.",
      status: "hypothesis" as const,
      title: "Workflow automation",
    },
    {
      description: "Build software around a workflow when an off-the-shelf tool does not fit the need.",
      status: "hypothesis" as const,
      title: "Custom software",
    },
    {
      description: "Connect existing tools so information can move with less manual re-entry.",
      status: "hypothesis" as const,
      title: "Integrations",
    },
    {
      description: "Make operational information easier to review when deciding what needs attention.",
      status: "hypothesis" as const,
      title: "Data and operational intelligence",
    },
  ] satisfies ContentItem[],
  audit: {
    after: "You decide whether to discuss a separately scoped next step. No implementation is presumed by the audit.",
    audience: "For a business owner or team that can point to work being repeated manually and wants a practical starting point.",
    deliverables: [
      "A conversation about the workflow you want to examine.",
      "A documented view of possible automation opportunities.",
      "A practical recommended next step, based on the discussion.",
    ],
    price: "From R1,500",
    priceStatus: "fact" as const,
    process: "You describe the workflow, the people involved, and the current tools. Linfy reviews the steps with you before recommending where automation may be worth exploring.",
    status: "hypothesis" as const,
  },
  proof: {
    description:
      "No case study is published here until its project facts and permission to share them are confirmed. Linfy will not replace missing proof with invented metrics, testimonials, or outcomes.",
    linkLabel: "Visit case studies",
    status: "unknown" as const,
    title: "Case studies should show what actually happened.",
  },
  process: [
    {
      description: "Understand the manual work, current tools, and context around it.",
      status: "hypothesis" as const,
      title: "Discover",
    },
    {
      description: "Separate the workflow worth examining from work that should stay human-led.",
      status: "hypothesis" as const,
      title: "Identify",
    },
    {
      description: "Outline a practical next step before committing to a build.",
      status: "hypothesis" as const,
      title: "Design",
    },
    {
      description: "Build the agreed solution only when the scope and fit are clear.",
      status: "hypothesis" as const,
      title: "Automate",
    },
    {
      description: "Review what is working and discuss support or refinement where useful.",
      status: "hypothesis" as const,
      title: "Improve",
    },
  ] satisfies ContentItem[],
  positioning: [
    {
      description: "Start by examining the work itself, rather than choosing a technology trend first.",
      status: "hypothesis" as const,
      title: "Business-first exploration",
    },
    {
      description: "Consider AI, software, and integrations together when they suit the workflow.",
      status: "hypothesis" as const,
      title: "Practical implementation",
    },
    {
      description: "Begin with a visible starting price and a defined first conversation.",
      status: "inference" as const,
      title: "Transparent engagement",
    },
    {
      description: "Discuss ongoing support only when it is relevant to the system and the business.",
      status: "hypothesis" as const,
      title: "Support as an option",
    },
  ] satisfies ContentItem[],
  trust: [
    {
      description: "Linfy Tech Solutions is founded and led by Linford Musiyambodza, publicly known as Linford Lee.",
      status: "fact" as const,
      title: "Founder-led",
    },
    {
      description: "Based in Strand, Cape Town, South Africa.",
      status: "fact" as const,
      title: "Cape Town base",
    },
    {
      description: "Current scope includes AI and data engineering, full-stack development, AI product building, automation, and technology consulting.",
      status: "fact" as const,
      title: "Technical scope",
    },
    {
      description: "Linfy does not claim POPIA compliance. Assessment data practices will be published with the live lead-capture flow.",
      status: "unknown" as const,
      title: "Privacy-aware direction",
    },
  ] satisfies ContentItem[],
  faq: [
    {
      answer:
        "Not necessarily. The starting point is to examine repetitive operational work. Any change to roles or workflow should be discussed before a solution is scoped.",
      question: "Will automation replace my staff?",
    },
    {
      answer:
        "No overhaul is presumed. The audit is intended to understand the current workflow first, then identify a proportionate next step if one makes sense.",
      question: "Do we need to replace our current systems?",
    },
    {
      answer:
        "The current tools and possible connections are part of the audit conversation. Whether an integration is practical depends on the systems and workflow involved.",
      question: "Can this work with the tools we already use?",
    },
    {
      answer:
        "The Automation Audit starts from R1,500. Any pilot, build, or ongoing support is discussed separately once the workflow is understood.",
      question: "What does the first step cost?",
    },
  ],
} as const;

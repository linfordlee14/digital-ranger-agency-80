// These are current solution hypotheses. They are presented as areas to explore,
// not as validated products or established customer outcomes.
export const solutionsContent = {
  expectations: [
    {
      description: "Start by understanding the current workflow before recommending a tool or system.",
      title: "Workflow before technology",
    },
    {
      description: "Keep people involved where their judgment, context, or approval is still needed.",
      title: "Human review where appropriate",
    },
    {
      description: "Use existing tools when they are sufficient, rather than replacing systems without a clear reason.",
      title: "Build on what already works",
    },
    {
      description: "Use AI only where it has a useful role in the workflow, not simply because it is available.",
      title: "Useful complexity only",
    },
  ],
  faq: [
    {
      answer:
        "Not necessarily. An assessment can help clarify whether a workflow needs AI, a simpler integration, a clearer process, or no automation at all.",
      question: "Do I need an AI system?",
    },
    {
      answer:
        "The current tools are part of the assessment conversation. Whether a connection is practical depends on the systems, access, and workflow involved.",
      question: "Can Linfy work with my existing software?",
    },
    {
      answer:
        "No replacement is assumed. The aim is to understand what already works before discussing whether a change is useful.",
      question: "Do I need to replace my current systems?",
    },
    {
      answer:
        "No. Linfy reviews the submitted workflow first. A separate next step is discussed only if an Automation Audit appears appropriate.",
      question: "Does every assessment lead to an automation project?",
    },
    {
      answer:
        "Linfy reviews the workflow information and contacts you about whether a paid Automation Audit may be appropriate. Submitting an assessment does not commit you to a build.",
      question: "What happens after I submit an assessment?",
    },
  ],
  hero: {
    description:
      "Linfy helps businesses examine repetitive operational work and explore practical automation using workflows, integrations, AI, and custom software where appropriate.",
    eyebrow: "Solutions",
    title: "Turn repetitive business work into systems that work for you.",
  },
  solutions: [
    {
      audience: "Businesses that receive enquiries through WhatsApp and want to examine how those conversations move into a clearer process.",
      doesNotPromise: "It does not promise that every conversation can or should be automated, or that a human handoff is unnecessary.",
      involves: ["Enquiry capture", "Qualification prompts", "Routing and handoff", "Follow-up cues", "Workflow records"],
      problem: "Enquiries can remain inside chat threads without a consistent way to qualify, route, or follow up.",
      slug: "whatsapp-sales-automation",
      summary: "Explore a more structured path from enquiry to the next useful action.",
      title: "WhatsApp Sales Automation",
      whatItCanAddress: "Linfy can help examine how enquiries, responses, routing, follow-up, and human handoff might fit into a clearer workflow.",
    },
    {
      audience: "Businesses where an enquiry or lead needs follow-up from a person, team, or existing system.",
      doesNotPromise: "It does not guarantee a response, a sale, or that every lead should receive the same follow-up.",
      involves: ["Lead capture", "Reminder rules", "Follow-up sequences", "Status updates", "Team notifications"],
      problem: "Follow-up can depend on memory, manual reminders, and scattered lead information.",
      slug: "lead-follow-up-automation",
      summary: "Explore a more reliable way to keep lead follow-up visible and organised.",
      title: "Lead Follow-Up Automation",
      whatItCanAddress: "Linfy can help map lead capture, reminders, follow-up actions, status updates, and notifications around an existing sales process.",
    },
    {
      audience: "Businesses managing recurring invoice, payment-status, reminder, or reconciliation-related administration.",
      doesNotPromise: "It does not replace accounting judgment, guarantee payment, or remove the need for proper financial controls.",
      involves: ["Invoice workflow steps", "Payment-status visibility", "Reminder triggers", "Reconciliation-related tasks", "Notifications"],
      problem: "Invoice and payment administration can require repeated tracking between messages, records, and finance tools.",
      slug: "invoice-payment-workflow-automation",
      summary: "Explore how payment-related workflow steps could be easier to track and coordinate.",
      title: "Invoice & Payment Workflow Automation",
      whatItCanAddress: "Linfy can help examine invoice workflows, payment-status tracking, reminders, notifications, and related reconciliation handoffs.",
    },
    {
      audience: "Teams with repetitive internal administration, document handling, reporting, or information-processing work.",
      doesNotPromise: "It does not remove the need for review, approve every output, or make every administrative task suitable for AI.",
      involves: ["Document handling", "Information extraction", "Internal workflows", "Reporting support", "Review steps"],
      problem: "Administrative work can involve repeated reading, copying, compiling, and routing of information.",
      slug: "ai-admin-automation",
      summary: "Explore where AI-assisted administrative workflows may have a useful role.",
      title: "AI Admin Automation",
      whatItCanAddress: "Linfy can help assess repetitive administrative tasks, document-based work, internal workflows, and reporting or support tasks.",
    },
    {
      audience: "Businesses with a specific internal workflow that may benefit from AI, tools, data, and human oversight working together.",
      doesNotPromise: "It does not imply that an AI agent can operate without boundaries, reliable data, or human oversight.",
      involves: ["Business-specific instructions", "Internal knowledge", "Tool or API connections", "Task boundaries", "Human handoff"],
      problem: "A business-specific task may not fit a generic tool, but needs more context than a simple automated rule.",
      slug: "custom-ai-agents",
      summary: "Explore a bounded AI workflow designed around a justified business task.",
      title: "Custom AI Agents",
      whatItCanAddress: "Linfy can help scope business-specific AI workflows involving internal knowledge, approved tools or APIs, defined tasks, and human handoff.",
    },
    {
      audience: "Business owners and teams who can identify a repetitive workflow but are not yet sure what should be automated.",
      doesNotPromise: "It does not guarantee that automation is appropriate or that an assessment becomes an implementation project.",
      involves: ["Workflow mapping", "Current-tool review", "Manual-work review", "Possible opportunities", "Practical next step"],
      problem: "A workflow can feel inefficient without a clear view of the bottleneck, current tools, or appropriate next step.",
      slug: "business-automation-audit",
      summary: "Start with a structured review before deciding whether a build is worthwhile.",
      title: "Business Automation Audit",
      whatItCanAddress: "Linfy can help identify repetitive work, map the current workflow, review existing tools, and distinguish possible automation opportunities from work that should remain human-led.",
    },
  ],
  workflow: [
    { description: "Understand how the work currently moves between people and tools.", title: "Current workflow" },
    { description: "Find the handoff, repetition, or decision point worth examining.", title: "Identify bottleneck" },
    { description: "Outline a practical workflow before choosing the technology.", title: "Design workflow" },
    { description: "Build or connect only the agreed parts of the system.", title: "Build or integrate" },
    { description: "Keep people involved where review or judgment matters.", title: "Human review" },
    { description: "Review what is working and discuss refinement where useful.", title: "Improve" },
  ],
} as const;

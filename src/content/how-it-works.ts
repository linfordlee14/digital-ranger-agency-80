// Process and solution-stage descriptions are current hypotheses, not delivery guarantees.
export const howItWorksContent = {
  afterAudit: [
    {
      description: "A workflow may be suitable for a separately scoped automation conversation.",
      label: "A",
      title: "Automation may be suitable",
    },
    {
      description: "The workflow may need clarification, ownership, or redesign before technology is considered.",
      label: "B",
      title: "The process may need work first",
    },
    {
      description: "Existing software may already be sufficient when it is used or connected more clearly.",
      label: "C",
      title: "Current tools may be enough",
    },
    {
      description: "A custom implementation may make sense when the workflow cannot be served by a suitable existing tool.",
      label: "D",
      title: "A custom build may be worth exploring",
    },
    {
      description: "Automation may not be appropriate for the identified problem at this stage.",
      label: "E",
      title: "Automation may not be the answer",
    },
  ],
  audit: {
    description:
      "The Automation Audit is a structured discovery process. It creates a place to understand the current workflow, repetitive work, existing systems, desired outcomes, and possible automation opportunities before deciding what happens next.",
    price: "From R1,500",
    stages: [
      "Describe the workflow and the manual work involved.",
      "Review the people, tools, handoffs, and constraints around it.",
      "Discuss possible next steps without assuming implementation.",
    ],
  },
  expectations: [
    {
      description: "AI is considered only when it has a useful role in the workflow.",
      title: "No automatic AI recommendation",
    },
    {
      description: "A repeated task is not automatically a task that should be automated.",
      title: "No automation by default",
    },
    {
      description: "No savings, ROI, or outcome is promised before the workflow is understood.",
      title: "No pre-decided outcome",
    },
    {
      description: "An audit is a decision-making step, not an automatic commitment to a build.",
      title: "No assumed implementation",
    },
    {
      description: "Existing software is not replaced without a clear workflow reason.",
      title: "No unnecessary replacement",
    },
  ],
  faq: [
    {
      answer:
        "No. The assessment and audit are designed to help clarify the workflow first. You only need to describe the work that feels repetitive, delayed, or difficult to coordinate.",
      question: "Do I need to know what should be automated?",
    },
    {
      answer:
        "No replacement is assumed. Existing systems are part of the conversation, and they may be sufficient depending on the workflow.",
      question: "Do I need to replace my existing software?",
    },
    {
      answer:
        "No. The Automation Audit is a paid discovery step. Any implementation is discussed separately only if it appears appropriate.",
      question: "Does the Automation Audit include implementation?",
    },
    {
      answer:
        "Linfy reviews the information about your workflow and contacts you about whether an Automation Audit may be appropriate. Submission does not commit you to a build.",
      question: "What happens after I submit the assessment?",
    },
    {
      answer:
        "No. An audit may point to a workflow that needs clarification, existing tools that are already sufficient, or a problem that is not appropriate for automation.",
      question: "Will every audit result in an automation project?",
    },
    {
      answer:
        "The current tools are part of the audit conversation. Whether a connection is practical depends on the systems, access, and workflow involved.",
      question: "Can Linfy work with systems we already use?",
    },
    {
      answer:
        "That is a valid outcome of the discovery process. The goal is to make a practical decision, not to recommend technology regardless of fit.",
      question: "What if automation is not the right solution?",
    },
  ],
  hero: {
    description:
      "Linfy starts by understanding how the business currently works before deciding whether automation, AI, integrations, or custom software may be appropriate.",
    eyebrow: "How It Works",
    title: "From operational problem to practical automation.",
  },
  journey: [
    {
      description: "Understand the business, current workflow, tools, people, and context before recommending changes.",
      number: "01",
      title: "Discover",
      whatHappens: "Start with the work that currently needs attention.",
    },
    {
      description: "Find repeated, manual, slow, or error-prone work that may be worth improving.",
      number: "02",
      title: "Identify",
      whatHappens: "Separate a possible bottleneck from work that should stay human-led.",
    },
    {
      description: "Map a practical workflow and decide what may be automated, integrated, or kept with people.",
      number: "03",
      title: "Design",
      whatHappens: "Outline the workflow before choosing technology.",
    },
    {
      description: "Build or connect the agreed parts of the system when implementation makes sense.",
      number: "04",
      title: "Automate",
      whatHappens: "Implement only after the scope and fit are clear.",
    },
    {
      description: "Review the workflow and discuss refinement or support where it is useful.",
      number: "05",
      title: "Improve",
      whatHappens: "Consider the next practical adjustment, if there is one.",
    },
  ],
  linfyDoes: [
    {
      description: "Map the operational problem into a workflow that can be discussed clearly.",
      title: "Translate the work",
    },
    {
      description: "Consider workflow automation, integrations, custom software, or AI where each may be useful.",
      title: "Explore practical options",
    },
    {
      description: "Keep the people, approvals, and decision points that still need human context in view.",
      title: "Design for real work",
    },
    {
      description: "Use the technology to serve the workflow, rather than forcing the workflow around a tool.",
      title: "Let the problem lead",
    },
  ],
  whatYouBring: [
    {
      description: "A sense of the work that currently takes too much manual effort or attention.",
      title: "The work you want to examine",
    },
    {
      description: "The tools or systems that are already involved in the workflow.",
      title: "Your current tools",
    },
    {
      description: "The people or roles involved in moving the work forward.",
      title: "The people involved",
    },
    {
      description: "The business outcome you would like to understand or improve.",
      title: "The outcome you have in mind",
    },
    {
      description: "Any constraints, concerns, or context that affect how the workflow operates.",
      title: "The context that matters",
    },
  ],
} as const;

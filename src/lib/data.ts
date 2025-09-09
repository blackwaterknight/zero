export const STATIC_MOM_DATA = {
  minutesOfMeeting: {
    clientObjective: "Migrate on-premise SAP ECC and BW systems to the cloud.",
    keyDrivers: ["Scalability", "Cost optimization", "Integration with modern platforms"],
    architectRecommendation: "Evaluate RISE with SAP on Azure or AWS.",
    migrationStrategy: ["Greenfield", "Brownfield", "Selective transformation"],
    riskConsiderations: ["Compliance risks", "Downtime risks"],
    nextSteps: "Architect to prepare comparative solution matrix.",
    followUp: "Follow-up meeting scheduled for Thursday at 3 PM."
  },
  meetingDocumentation: {
    title: "SAP Cloud Migration Strategy Discussion",
    date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
    participants: ["Client", "Architect"],
    duration: "~15 minutes",
    topicsCovered: [
      "Current SAP landscape (ECC + BW)",
      "Cloud migration goals",
      "Initial recommendation: RISE with SAP",
      "Migration paths: greenfield, brownfield, selective",
      "Compliance and downtime concerns",
      "Next meeting scheduled"
    ],
    actionItems: [
      "Architect to prepare comparative solution matrix including risk mitigation strategies",
      "Client to review and confirm scope for next session"
    ]
  },
  architecturalSolutions: {
    frameworkAlignment: {
      iafPerspectives: ["Business", "Information", "IT Systems", "Infrastructure"],
      togafAdmPhases: ["Preliminary", "Architecture Vision", "Business Architecture"]
    },
    recommendedSolution: [
      "RISE with SAP on Azure or AWS",
      "Cloud-native architecture with scalable infrastructure",
      "Integration Layer: Use SAP BTP or Azure Integration Services",
      "Security & Compliance: Align with ISO 27001, GDPR, and SAP best practices",
      "Data Strategy: Migrate BW to SAP Datasphere or Azure Synapse"
    ]
  },
  comparativeOptions: [
    {
      option: "Greenfield",
      description: "Rebuild from scratch",
      pros: ["Clean architecture", "Modern stack"],
      cons: ["High cost", "Longer timeline"]
    },
    {
      option: "Brownfield",
      description: "Technical upgrade",
      pros: ["Preserves existing investments"],
      cons: ["Risk of legacy baggage"]
    },
    {
      option: "Selective",
      description: "Hybrid approach",
      pros: ["Balanced cost and agility"],
      cons: ["Complex planning required"]
    },
    {
      option: "RISE with SAP",
      description: "Managed cloud offering",
      pros: ["Simplified operations", "Bundled services"],
      cons: ["Vendor lock-in risk"]
    }
  ],
  costEstimation: {
    factors: [
      "RISE Subscription",
      "Cloud Infrastructure",
      "Migration Services",
      "Integration Costs",
      "Compliance & Security"
    ],
    estimates: {
      initialSetupUSD: [250000, 500000],
      annualOpexUSD: [100000, 300000]
    }
  },
  risksCompliance: [
    { riskArea: "Downtime", description: "Business disruption during cutover", mitigation: "Phased migration, fallback plan", impact: 'high', likelihood: 'medium' },
    { riskArea: "Data Loss", description: "Incomplete or corrupted migration", mitigation: "Backup strategy, validation scripts", impact: 'high', likelihood: 'low' },
    { riskArea: "Compliance", description: "GDPR, industry-specific mandates", mitigation: "Align with SAP and cloud provider policies", impact: 'high', likelihood: 'high' },
    { riskArea: "Integration Failure", description: "Legacy systems not syncing", mitigation: "Pre-migration testing, sandbox environments", impact: 'medium', likelihood: 'medium' },
    { riskArea: "Cost Overrun", description: "Scope creep or misestimation", mitigation: "Fixed-price contracts, agile checkpoints", impact: 'medium', likelihood: 'high' }
  ]
} as const;

export type StaticMomData = typeof STATIC_MOM_DATA;

export const PROCESSED_SOLUTIONS_DATA = [
    {
        id: 1,
        title: "SAP Cloud Migration Strategy Discussion",
        date: "2025-09-09",
        tags: ["SAP", "Azure", "Migration", "IAF"]
    },
    {
        id: 2,
        title: "E-commerce Platform Overhaul",
        date: "2025-09-05",
        tags: ["Microservices", "React", "AWS", "TOGAF"]
    },
    {
        id: 3,
        title: "Data Warehouse Modernization",
        date: "2025-09-02",
        tags: ["Snowflake", "ETL", "BI", "Data Strategy"]
    },
    {
        id: 4,
        title: "AI Ethics Framework Review",
        date: "2025-08-28",
        tags: ["AI", "Ethics", "GDPR", "Compliance"]
    },
    {
        id: 5,
        title: "Customer Identity & Access Management (CIAM)",
        date: "2025-08-25",
        tags: ["Security", "Okta", "CIAM"]
    }
] as const;

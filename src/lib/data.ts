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

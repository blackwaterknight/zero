
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

export const PROCESSED_SOLUTIONS_DATA = {
  "processedSolutions": [
    {
      "id": "sap-cloud-migration",
      "title": "SAP Cloud Migration Strategy Discussion",
      "processedDate": "2025-09-09",
      "tags": ["SAP", "Azure", "Migration", "IAF"],
      "data": {
        "minutesOfMeeting": {
          "clientObjective": "Transition legacy SAP systems to cloud for enhanced agility and reduced costs.",
          "keyDrivers": ["Improved scalability", "Cost efficiency", "Seamless integration with Azure services"],
          "architectRecommendation": "Adopt Azure as primary cloud with IAF framework guidance.",
          "migrationStrategy": ["Lift and Shift", "Replatform", "Refactor"],
          "riskConsiderations": ["Data migration errors", "Service downtime"],
          "nextSteps": "Detailed migration roadmap preparation.",
          "followUp": "Review session next week."
        },
        "meetingDocumentation": {
          "title": "SAP Cloud Migration Planning",
          "date": "2025-09-09",
          "participants": ["Client IT Lead", "Capgemini Architect", "Azure Specialist"],
          "duration": "~20 minutes",
          "topicsCovered": [
            "Current SAP setup analysis",
            "Cloud benefits discussion",
            "IAF alignment",
            "Migration approaches",
            "Risk overview",
            "Action planning"
          ],
          "actionItems": [
            "Assess current infrastructure",
            "Prepare cost-benefit analysis"
          ]
        },
        "architecturalSolutions": {
          "frameworkAlignment": {
            "iafPerspectives": ["Business Strategy", "Data Management", "Application Architecture", "Infrastructure"],
            "togafAdmPhases": ["Architecture Vision", "Business Architecture", "Information Systems Architecture"]
          },
          "recommendedSolution": [
            "Azure SAP certified infrastructure",
            "Hybrid cloud setup for phased migration",
            "Integration with Azure AD for security",
            "Data lakes for analytics",
            "Monitoring via Azure Monitor"
          ]
        },
        "comparativeOptions": [
          {
            "option": "Lift and Shift",
            "description": "Minimal changes migration",
            "pros": ["Quick implementation", "Low initial cost"],
            "cons": ["Limited optimization", "Potential performance issues"]
          },
          {
            "option": "Replatform",
            "description": "Optimize for cloud",
            "pros": ["Better performance", "Cost savings long-term"],
            "cons": ["Moderate effort required"]
          },
          {
            "option": "Refactor",
            "description": "Full redesign",
            "pros": ["Maximum efficiency", "Modern features"],
            "cons": ["High cost and time"]
          }
        ],
        "costEstimation": {
          "factors": [
            "Azure subscription fees",
            "Data transfer costs",
            "Professional services for migration",
            "Training and change management",
            "Ongoing maintenance"
          ],
          "estimates": {
            "initialSetupUSD": [300000, 600000],
            "annualOpexUSD": [150000, 400000]
          }
        },
        "risksCompliance": [
          { "riskArea": "Data Integrity", "description": "Potential loss during transfer", "mitigation": "Robust backup and validation" },
          { "riskArea": "Downtime", "description": "Business interruption", "mitigation": "Phased rollout" },
          { "riskArea": "Compliance", "description": "Data privacy regulations", "mitigation": "Azure compliance tools" },
          { "riskArea": "Vendor Lock-in", "description": "Dependency on Azure", "mitigation": "Multi-cloud strategy consideration" },
          { "riskArea": "Skill Gap", "description": "Team unfamiliarity", "mitigation": "Training programs" }
        ],
        "strategic": {
          "highRiskDetected": true,
          "riskSynopsis": "Potential compliance issues with data migration.",
          "flyingSquadTrigger": "Request assistance for detailed risk assessment."
        }
      }
    },
    {
      "id": "ecommerce-platform-overhaul",
      "title": "E-commerce Platform Overhaul",
      "processedDate": "2025-09-05",
      "tags": ["Microservices", "React", "AWS", "TOGAF"],
      "data": {
        "minutesOfMeeting": {
          "clientObjective": "Modernize monolithic e-commerce site to scalable microservices architecture.",
          "keyDrivers": ["Handle peak traffic", "Faster feature deployment", "Improved user experience"],
          "architectRecommendation": "Use AWS for hosting with TOGAF principles.",
          "migrationStrategy": ["Strangler Pattern", "API Gateway", "Containerization"],
          "riskConsiderations": ["Integration complexities", "Performance bottlenecks"],
          "nextSteps": "Prototype microservice.",
          "followUp": "Demo in two weeks."
        },
        "meetingDocumentation": {
          "title": "E-commerce Modernization Workshop",
          "date": "2025-09-05",
          "participants": ["E-commerce Manager", "Developer Team", "Capgemini Consultant"],
          "duration": "~25 minutes",
          "topicsCovered": [
            "Current platform limitations",
            "Microservices benefits",
            "TOGAF application",
            "Tech stack: React + AWS",
            "Risk discussion",
            "Timeline planning"
          ],
          "actionItems": [
            "Map services to microservices",
            "Select AWS services"
          ]
        },
        "architecturalSolutions": {
          "frameworkAlignment": {
            "iafPerspectives": ["Application", "Technology", "Security"],
            "togafAdmPhases": ["Technology Architecture", "Opportunities & Solutions", "Migration Planning"]
          },
          "recommendedSolution": [
            "React frontend with microservices backend",
            "AWS ECS for container orchestration",
            "API Gateway for routing",
            "DynamoDB for scalable storage",
            "CloudFront for CDN"
          ]
        },
        "comparativeOptions": [
          {
            "option": "Strangler Pattern",
            "description": "Gradual replacement",
            "pros": ["Low risk", "Continuous operation"],
            "cons": ["Longer transition"]
          },
          {
            "option": "Big Bang Rewrite",
            "description": "Complete overhaul",
            "pros": ["Clean slate"],
            "cons": ["High risk", "Downtime"]
          },
          {
            "option": "Hybrid",
            "description": "Mix of old and new",
            "pros": ["Balanced approach"],
            "cons": ["Complexity in management"]
          }
        ],
        "costEstimation": {
          "factors": [
            "AWS infrastructure costs",
            "Development team hours",
            "React tooling and licenses",
            "Testing and QA",
            "Post-launch support"
          ],
          "estimates": {
            "initialSetupUSD": [400000, 800000],
            "annualOpexUSD": [200000, 500000]
          }
        },
        "risksCompliance": [
          { "riskArea": "Scalability", "description": "Unhandled traffic spikes", "mitigation": "Auto-scaling groups" },
          { "riskArea": "Security", "description": "API vulnerabilities", "mitigation": "WAF and encryption" },
          { "riskArea": "Compliance", "description": "PCI DSS for payments", "mitigation": "AWS compliance certifications" },
          { "riskArea": "Integration", "description": "Service failures", "mitigation": "Circuit breakers" },
          { "riskArea": "Team Readiness", "description": "Learning curve", "mitigation": "Workshops" }
        ],
        "strategic": {
          "highRiskDetected": false,
          "riskSynopsis": "Moderate integration risks.",
          "flyingSquadTrigger": "Optional review for optimization."
        }
      }
    },
    {
      "id": "data-warehouse-modernization",
      "title": "Data Warehouse Modernization",
      "processedDate": "2025-09-02",
      "tags": ["Snowflake", "ETL", "BI", "Data Strategy"],
      "data": {
        "minutesOfMeeting": {
          "clientObjective": "Upgrade legacy data warehouse to cloud-native for better analytics.",
          "keyDrivers": ["Real-time data processing", "Cost-effective storage", "Advanced BI capabilities"],
          "architectRecommendation": "Migrate to Snowflake with robust ETL pipelines.",
          "migrationStrategy": ["Data Replication", "Schema Conversion", "Query Optimization"],
          "riskConsiderations": ["Data quality issues", "Performance degradation"],
          "nextSteps": "ETL tool selection.",
          "followUp": "Status update in one week."
        },
        "meetingDocumentation": {
          "title": "Data Warehouse Upgrade Session",
          "date": "2025-09-02",
          "participants": ["Data Analyst", "BI Specialist", "Capgemini Data Architect"],
          "duration": "~18 minutes",
          "topicsCovered": [
            "Existing DW challenges",
            "Snowflake features",
            "ETL integration",
            "BI tool compatibility",
            "Risk assessment",
            "Strategy alignment"
          ],
          "actionItems": [
            "Inventory data sources",
            "Prototype Snowflake schema"
          ]
        },
        "architecturalSolutions": {
          "frameworkAlignment": {
            "iafPerspectives": ["Data", "Analytics", "Governance"],
            "togafAdmPhases": ["Data Architecture", "Technology Architecture"]
          },
          "recommendedSolution": [
            "Snowflake data warehouse",
            "Airflow for ETL orchestration",
            "Tableau/Power BI integration",
            "Data governance policies",
            "Scalable compute separation"
          ]
        },
        "comparativeOptions": [
          {
            "option": "Full Migration",
            "description": "Complete move to Snowflake",
            "pros": ["Optimized performance"],
            "cons": ["Initial disruption"]
          },
          {
            "option": "Hybrid Model",
            "description": "On-prem + Cloud",
            "pros": ["Gradual transition"],
            "cons": ["Sync complexities"]
          },
          {
            "option": "BigQuery Alternative",
            "description": "Google's DW",
            "pros": ["ML integration"],
            "cons": ["Vendor switch cost"]
          }
        ],
        "costEstimation": {
          "factors": [
            "Snowflake credits",
            "ETL tool licensing",
            "BI software subscriptions",
            "Data migration services",
            "Training"
          ],
          "estimates": {
            "initialSetupUSD": [200000, 450000],
            "annualOpexUSD": [100000, 250000]
          }
        },
        "risksCompliance": [
          { "riskArea": "Data Loss", "description": "During migration", "mitigation": "Incremental backups" },
          { "riskArea": "Performance", "description": "Query slowdowns", "mitigation": "Optimization tuning" },
          { "riskArea": "Compliance", "description": "Data regulations", "mitigation": "Snowflake security features" },
          { "riskArea": "Cost Overrun", "description": "Unexpected usage", "mitigation": "Monitoring dashboards" },
          { "riskArea": "Integration", "description": "Tool incompatibilities", "mitigation": "POC testing" }
        ],
        "strategic": {
          "highRiskDetected": true,
          "riskSynopsis": "High data quality risks.",
          "flyingSquadTrigger": "Engage for data strategy review."
        }
      }
    },
    {
      "id": "ai-ethics-framework-review",
      "title": "AI Ethics Framework Review",
      "processedDate": "2025-08-28",
      "tags": ["AI", "Ethics", "GDPR", "Compliance"],
      "data": {
        "minutesOfMeeting": {
          "clientObjective": "Evaluate and strengthen AI ethics policies.",
          "keyDrivers": ["Regulatory compliance", "Trust building", "Risk minimization"],
          "architectRecommendation": "Align with GDPR and ethical AI guidelines.",
          "migrationStrategy": ["Assessment", "Gap Analysis", "Implementation Plan"],
          "riskConsiderations": ["Bias in AI models", "Privacy breaches"],
          "nextSteps": "Conduct ethics audit.",
          "followUp": "Follow-up in 10 days."
        },
        "meetingDocumentation": {
          "title": "AI Ethics Review Meeting",
          "date": "2025-08-28",
          "participants": ["Ethics Officer", "AI Developer", "Capgemini Consultant"],
          "duration": "~22 minutes",
          "topicsCovered": [
            "Current ethics framework",
            "GDPR requirements",
            "Bias detection methods",
            "Compliance strategies",
            "Risks and mitigations",
            "Next actions"
          ],
          "actionItems": [
            "Review AI models for bias",
            "Update policy documents"
          ]
        },
        "architecturalSolutions": {
          "frameworkAlignment": {
            "iafPerspectives": ["Governance", "Security", "Ethics"],
            "togafAdmPhases": ["Governance", "Compliance"]
          },
          "recommendedSolution": [
            "AI ethics toolkit integration",
            "GDPR-compliant data handling",
            "Bias auditing tools",
            "Transparent AI documentation",
            "Stakeholder training programs"
          ]
        },
        "comparativeOptions": [
          {
            "option": "Internal Framework",
            "description": "Build in-house",
            "pros": ["Customized"],
            "cons": ["Time-consuming"]
          },
          {
            "option": "Third-Party Tools",
            "description": "Use vendors like IBM Watson",
            "pros": ["Quick deployment"],
            "cons": ["Costly"]
          },
          {
            "option": "Hybrid",
            "description": "Combine both",
            "pros": ["Balanced"],
            "cons": ["Integration effort"]
          }
        ],
        "costEstimation": {
          "factors": [
            "Ethics consulting fees",
            "Tool subscriptions",
            "Training costs",
            "Audit services",
            "Ongoing monitoring"
          ],
          "estimates": {
            "initialSetupUSD": [150000, 300000],
            "annualOpexUSD": [75000, 150000]
          }
        },
        "risksCompliance": [
          { "riskArea": "Bias", "description": "Algorithmic discrimination", "mitigation": "Diverse training data" },
          { "riskArea": "Privacy", "description": "Data leaks", "mitigation": "Anonymization techniques" },
          { "riskArea": "Regulatory", "description": "GDPR fines", "mitigation": "Regular audits" },
          { "riskArea": "Reputation", "description": "Public backlash", "mitigation": "Transparency reports" },
          { "riskArea": "Implementation", "description": "Adoption resistance", "mitigation": "Change management" }
        ],
        "strategic": {
          "highRiskDetected": true,
          "riskSynopsis": "Significant compliance risks.",
          "flyingSquadTrigger": "Immediate assistance recommended."
        }
      }
    },
    {
      "id": "customer-identity-access-management",
      "title": "Customer Identity & Access Management (CIAM)",
      "processedDate": "2025-08-25",
      "tags": ["Security", "Okta", "CIAM"],
      "data": {
        "minutesOfMeeting": {
          "clientObjective": "Implement secure CIAM for customer portals.",
          "keyDrivers": ["User security", "Seamless authentication", "Scalability"],
          "architectRecommendation": "Leverage Okta for CIAM solutions.",
          "migrationStrategy": ["Identity Federation", "MFA Rollout", "API Security"],
          "riskConsiderations": ["Identity theft", "System integration"],
          "nextSteps": "Proof of concept with Okta.",
          "followUp": "Demo next month."
        },
        "meetingDocumentation": {
          "title": "CIAM Implementation Discussion",
          "date": "2025-08-25",
          "participants": ["Security Lead", "Product Manager", "Capgemini Security Architect"],
          "duration": "~15 minutes",
          "topicsCovered": [
            "Current IAM limitations",
            "Okta features",
            "Integration plans",
            "Security best practices",
            "Risk evaluation",
            "Timeline"
          ],
          "actionItems": [
            "Evaluate Okta pricing",
            "Design user flows"
          ]
        },
        "architecturalSolutions": {
          "frameworkAlignment": {
            "iafPerspectives": ["Security", "Identity", "Access"],
            "togafAdmPhases": ["Security Architecture", "Implementation Governance"]
          },
          "recommendedSolution": [
            "Okta as CIAM platform",
            "OAuth 2.0 for authentication",
            "Multi-factor authentication",
            "Role-based access control",
            "Audit logging integration"
          ]
        },
        "comparativeOptions": [
          {
            "option": "Okta",
            "description": "Cloud-based CIAM",
            "pros": ["Easy integration", "Scalable"],
            "cons": ["Subscription cost"]
          },
          {
            "option": "Auth0",
            "description": "Alternative provider",
            "pros": ["Flexible"],
            "cons": ["Learning curve"]
          },
          {
            "option": "Custom Build",
            "description": "In-house development",
            "pros": ["Full control"],
            "cons": ["High maintenance"]
          }
        ],
        "costEstimation": {
          "factors": [
            "Okta licensing",
            "Implementation services",
            "Security testing",
            "User training",
            "Maintenance"
          ],
          "estimates": {
            "initialSetupUSD": [250000, 500000],
            "annualOpexUSD": [120000, 300000]
          }
        },
        "risksCompliance": [
          { "riskArea": "Identity Theft", "description": "Unauthorized access", "mitigation": "MFA and monitoring" },
          { "riskArea": "Integration", "description": "Compatibility issues", "mitigation": "API standards" },
          { "riskArea": "Compliance", "description": "Data protection laws", "mitigation": "Okta compliance features" },
          { "riskArea": "Scalability", "description": "User growth", "mitigation": "Cloud auto-scaling" },
          { "riskArea": "Downtime", "description": "Service outages", "mitigation": "Redundancy planning" }
        ],
        "strategic": {
          "highRiskDetected": false,
          "riskSynopsis": "Low to medium security risks.",
          "flyingSquadTrigger": "Monitor for emerging threats."
        }
      }
    }
  ]
} as const;

      
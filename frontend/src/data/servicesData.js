// Static service content for CLICK TZEE LTD
// This acts as the source of truth served by GET /api/services and GET /api/services/:id
// Replace or move to MongoDB later if services need to be managed dynamically via the admin panel.

const services = [
  // Managed Services
  {
    id: 'hardware-break-fix',
    category: 'Managed Services',
    name: 'Hardware Break Fix',
    icon: 'Wrench',
    shortDescription: 'Rapid diagnosis and repair of faulty IT hardware to minimise business downtime.',
    overview:
      'Our Hardware Break Fix service provides responsive, on-site and remote support to diagnose and resolve hardware failures across desktops, laptops, servers and peripherals, helping keep your business running.',
    includes: [
      'Fault diagnosis and troubleshooting',
      'Component repair and replacement',
      'On-site and remote engineer support',
      'Priority response options',
      'Spare parts sourcing and logistics',
    ],
    benefits: [
      'Reduced downtime for critical systems',
      'Access to experienced field engineers',
      'Flexible response time options',
      'UK-wide coverage',
    ],
    useCases: [
      'Failed workstation or laptop components',
      'Faulty printers and peripherals',
      'Server hardware failures',
      'Emergency break-fix cover for branch offices',
    ],
    process: [
      'Fault reported and logged',
      'Remote triage and diagnosis',
      'Engineer dispatched if required',
      'Repair or replacement carried out',
      'Fix verified and ticket closed',
    ],
    faqs: [
      {
        q: 'What response times are available?',
        a: 'Response times are agreed as part of your service level agreement and can be tailored to the criticality of the affected hardware.',
      },
      {
        q: 'Do you cover remote sites across the UK?',
        a: 'Yes, we provide UK-wide engineer coverage for on-site hardware support.',
      },
    ],
  },
  {
    id: 'server-maintenance',
    category: 'Managed Services',
    name: 'Server Maintenance',
    icon: 'Server',
    shortDescription: 'Proactive server monitoring, patching and maintenance to keep infrastructure healthy.',
    overview:
      'We provide ongoing server maintenance including monitoring, patch management and preventative checks, helping reduce the risk of unplanned outages and keeping your infrastructure secure and performant.',
    includes: [
      'Proactive monitoring and alerting',
      'Patch management and updates',
      'Performance health checks',
      'Backup verification',
      'Capacity planning guidance',
    ],
    benefits: [
      'Improved server reliability',
      'Reduced risk of unplanned downtime',
      'Better visibility of infrastructure health',
      'Support from experienced engineers',
    ],
    useCases: [
      'Physical and virtual server estates',
      'Businesses without an in-house infrastructure team',
      'Organisations needing consistent patching cadence',
      'Preparing infrastructure for audits or compliance reviews',
    ],
    process: [
      'Initial infrastructure assessment',
      'Maintenance schedule agreed',
      'Ongoing monitoring and patching',
      'Regular health reports',
      'Continuous improvement recommendations',
    ],
    faqs: [
      {
        q: 'Do you support both Windows and Linux servers?',
        a: 'Yes, our engineers support a range of server operating systems and environments.',
      },
      {
        q: 'Can maintenance windows be scheduled outside business hours?',
        a: 'Yes, maintenance can be scheduled to minimise disruption to your operations.',
      },
    ],
  },
  {
    id: 'network-maintenance',
    category: 'Managed Services',
    name: 'Network Maintenance',
    icon: 'Network',
    shortDescription: 'Ongoing support and maintenance for switches, routers, firewalls and network infrastructure.',
    overview:
      'Our Network Maintenance service keeps your switches, routers, firewalls and wider network infrastructure running reliably, with proactive monitoring and rapid fault resolution.',
    includes: [
      'Network device monitoring',
      'Firmware and configuration updates',
      'Fault finding and resolution',
      'Network documentation upkeep',
      'Change management support',
    ],
    benefits: [
      'More stable and predictable network performance',
      'Faster fault resolution',
      'Reduced security risk from outdated firmware',
      'Clear network documentation',
    ],
    useCases: [
      'Multi-site business networks',
      'Businesses relying on always-on connectivity',
      'Organisations planning network changes',
      'Ongoing support for existing network estates',
    ],
    process: [
      'Network audit and documentation review',
      'Maintenance plan agreed',
      'Ongoing monitoring and support',
      'Scheduled updates and reviews',
      'Incident response as required',
    ],
    faqs: [
      {
        q: 'Can you support our existing network hardware?',
        a: 'In most cases yes; our engineers work with a wide range of vendor equipment.',
      },
      {
        q: 'Is emergency support available?',
        a: 'Yes, emergency network support options are available as part of your agreement.',
      },
    ],
  },
  {
    id: 'data-center-services',
    category: 'Managed Services',
    name: 'Data Center Services',
    icon: 'Database',
    shortDescription: 'Support for data centre infrastructure including installs, audits and maintenance.',
    overview:
      'We support data centre environments with installation, maintenance and audit services, helping ensure infrastructure is reliable, well documented and properly maintained.',
    includes: [
      'Rack and stack installation',
      'Cabling and infrastructure audits',
      'Environmental and power checks',
      'Ongoing maintenance visits',
      'Decommissioning support',
    ],
    benefits: [
      'Well organised, documented data centre estate',
      'Reduced risk of infrastructure failure',
      'Support for compliance and audit requirements',
      'Experienced data centre engineers',
    ],
    useCases: [
      'New data centre or comms room build-outs',
      'Ongoing data centre maintenance contracts',
      'Infrastructure audits ahead of migrations',
      'Decommissioning legacy equipment',
    ],
    process: [
      'Site assessment',
      'Scope of works agreed',
      'Installation or maintenance carried out',
      'Documentation updated',
      'Handover and sign-off',
    ],
    faqs: [
      {
        q: 'Do you provide out-of-hours data centre access support?',
        a: 'Out-of-hours visits can be arranged depending on site access requirements.',
      },
      {
        q: 'Can you help document an existing data centre?',
        a: 'Yes, infrastructure audits and documentation are part of this service.',
      },
    ],
  },
  {
    id: 'asset-management',
    category: 'Managed Services',
    name: 'Asset Management',
    icon: 'ClipboardList',
    shortDescription: 'Tracking and lifecycle management of your IT hardware and software assets.',
    overview:
      'Our Asset Management service helps you maintain accurate records of your IT estate, track asset lifecycles and make informed decisions about renewals, refreshes and disposals.',
    includes: [
      'Asset inventory and tagging',
      'Lifecycle tracking',
      'Warranty and licence tracking',
      'Reporting and dashboards',
      'Refresh planning support',
    ],
    benefits: [
      'Accurate, up-to-date asset records',
      'Better budgeting for hardware refreshes',
      'Reduced risk of unsupported hardware',
      'Improved audit readiness',
    ],
    useCases: [
      'Businesses without a central asset register',
      'Organisations planning a hardware refresh cycle',
      'Preparing for compliance or insurance audits',
      'Multi-site organisations with distributed assets',
    ],
    process: [
      'Asset discovery and audit',
      'Inventory system set up',
      'Ongoing tracking and updates',
      'Regular reporting',
      'Lifecycle and renewal recommendations',
    ],
    faqs: [
      {
        q: 'Can you manage both hardware and software assets?',
        a: 'Yes, our asset management service covers both hardware inventory and software licence tracking.',
      },
      {
        q: 'Do you provide reporting for audits?',
        a: 'Yes, reporting can be tailored to support internal or external audit requirements.',
      },
    ],
  },

  // Professional Services
  {
    id: 'site-surveys',
    category: 'Professional Services',
    name: 'Site Surveys',
    icon: 'MapPinned',
    shortDescription: 'Detailed on-site surveys to plan infrastructure, network and facilities projects.',
    overview:
      'We carry out detailed site surveys to gather the information needed to plan IT infrastructure, network and facilities projects accurately, reducing risk before work begins.',
    includes: [
      'Site walkthrough and assessment',
      'Infrastructure and cabling review',
      'Photographic and written reporting',
      'Recommendations for project planning',
      'Risk and access considerations',
    ],
    benefits: [
      'Reduced project risk from accurate planning data',
      'Clear documentation to support decision making',
      'Identification of potential issues before works begin',
      'Support across multiple UK sites',
    ],
    useCases: [
      'Pre-rollout site assessments',
      'Office moves and fit-outs',
      'Network and Wi-Fi planning',
      'Data centre and comms room projects',
    ],
    process: [
      'Survey scope agreed',
      'On-site survey carried out',
      'Findings documented',
      'Report and recommendations delivered',
      'Support with next project phase',
    ],
    faqs: [
      {
        q: 'How long does a typical site survey take?',
        a: 'Duration depends on site size and scope, and will be confirmed when the survey is scheduled.',
      },
      {
        q: 'Can surveys cover multiple sites in one engagement?',
        a: 'Yes, multi-site survey programmes can be planned and coordinated.',
      },
    ],
  },
  {
    id: 'itad',
    category: 'Professional Services',
    name: 'ITAD',
    icon: 'Recycle',
    shortDescription: 'Secure IT asset disposition, data destruction and responsible recycling.',
    overview:
      'Our IT Asset Disposition (ITAD) service ensures redundant hardware is securely decommissioned, data is destroyed to appropriate standards, and equipment is recycled or resold responsibly.',
    includes: [
      'Secure collection and transport',
      'Certified data destruction',
      'Asset reporting and audit trail',
      'Environmentally responsible recycling',
      'Resale value recovery where applicable',
    ],
    benefits: [
      'Reduced data security risk',
      'Support for environmental and compliance obligations',
      'Clear audit trail of disposed assets',
      'Potential value recovery from resalable equipment',
    ],
    useCases: [
      'Office relocations and closures',
      'Hardware refresh projects',
      'End-of-life server and storage disposal',
      'Compliance-driven data destruction requirements',
    ],
    process: [
      'Assets identified for disposal',
      'Secure collection arranged',
      'Data destruction carried out',
      'Certification and reporting provided',
      'Responsible recycling or resale',
    ],
    faqs: [
      {
        q: 'Do you provide certificates of data destruction?',
        a: 'Yes, certification is provided as part of the ITAD process.',
      },
      {
        q: 'What happens to equipment that still has resale value?',
        a: 'Where appropriate, equipment can be resold with value recovered on your behalf.',
      },
    ],
  },
  {
    id: 'wifi-surveys',
    category: 'Professional Services',
    name: 'Wi-Fi Surveys',
    icon: 'Wifi',
    shortDescription: 'Wireless site surveys to design and validate reliable Wi-Fi coverage.',
    overview:
      'We conduct predictive and on-site Wi-Fi surveys to design wireless networks that deliver reliable coverage and performance, and to validate existing deployments.',
    includes: [
      'Predictive wireless design',
      'On-site (AP-on-a-stick) surveys',
      'Post-installation validation surveys',
      'Coverage and interference reporting',
      'Access point placement recommendations',
    ],
    benefits: [
      'Reliable wireless coverage across your site',
      'Reduced risk of poor connectivity',
      'Evidence-based access point placement',
      'Improved user experience for staff and guests',
    ],
    useCases: [
      'New office or warehouse Wi-Fi deployments',
      'Troubleshooting poor existing wireless coverage',
      'Validating coverage after installation',
      'High-density environments such as event spaces',
    ],
    process: [
      'Requirements gathering',
      'Predictive or on-site survey conducted',
      'Findings and heatmaps documented',
      'Design recommendations delivered',
      'Post-installation validation',
    ],
    faqs: [
      {
        q: 'Do you survey both new and existing Wi-Fi deployments?',
        a: 'Yes, we carry out both predictive design surveys and validation surveys of existing networks.',
      },
      {
        q: 'What is provided at the end of a survey?',
        a: 'You receive a report with coverage findings and clear recommendations.',
      },
    ],
  },
  {
    id: 'imac-projects',
    category: 'Professional Services',
    name: 'IMAC & Projects',
    icon: 'PackageCheck',
    shortDescription: 'Installs, moves, adds and changes delivered as structured IT projects.',
    overview:
      'Our IMAC (Install, Move, Add, Change) service manages the day-to-day and project-based changes to your IT estate, ensuring changes are delivered smoothly with minimal disruption.',
    includes: [
      'Equipment installs and deployments',
      'User and office moves',
      'Additions and changes to existing systems',
      'Project coordination and scheduling',
      'Post-change verification',
    ],
    benefits: [
      'Consistent, well-managed IT changes',
      'Reduced disruption to end users',
      'Clear project tracking and reporting',
      'Experienced engineers for on-site work',
    ],
    useCases: [
      'Office moves and reconfigurations',
      'New starter equipment deployments',
      'Desk and workspace changes',
      'Ongoing IMAC support contracts',
    ],
    process: [
      'Request logged and scoped',
      'Resources and schedule confirmed',
      'Change carried out on-site or remotely',
      'Verification and testing',
      'Completion sign-off',
    ],
    faqs: [
      {
        q: 'Can IMAC support be provided on an ongoing basis?',
        a: 'Yes, IMAC services can be delivered as one-off projects or ongoing support contracts.',
      },
      {
        q: 'Do you handle large-scale office moves?',
        a: 'Yes, we coordinate and deliver IT elements of office moves of varying scale.',
      },
    ],
  },
  {
    id: 'rollout-migration',
    category: 'Professional Services',
    name: 'Rollout & Migration',
    icon: 'Rocket',
    shortDescription: 'Planning and delivery of large-scale technology rollouts and migrations.',
    overview:
      'We plan and deliver technology rollout and migration projects, from hardware refreshes to platform migrations, with structured project management and UK-wide delivery capability.',
    includes: [
      'Project planning and scoping',
      'Logistics and staging',
      'UK-wide rollout delivery',
      'Migration execution and testing',
      'Project reporting and sign-off',
    ],
    benefits: [
      'Structured, predictable project delivery',
      'Reduced risk during large-scale changes',
      'UK-wide engineer resource',
      'Clear reporting throughout the project',
    ],
    useCases: [
      'Multi-site hardware refresh rollouts',
      'Platform or system migrations',
      'Office technology upgrades',
      'Time-critical deployment programmes',
    ],
    process: [
      'Project scoping and planning',
      'Logistics and staging preparation',
      'Phased rollout or migration delivery',
      'Testing and verification',
      'Project closure and reporting',
    ],
    faqs: [
      {
        q: 'Can you manage rollouts across multiple UK sites simultaneously?',
        a: 'Yes, we plan and coordinate multi-site rollout programmes with UK-wide engineer coverage.',
      },
      {
        q: 'How do you minimise disruption during migrations?',
        a: 'Migrations are carefully planned and, where possible, scheduled outside core business hours with rollback planning in place.',
      },
    ],
  },
];

export default services;

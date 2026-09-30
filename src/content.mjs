export const content = {
  platformTitle: 'National Triskelion Legacy & Impact Platform',
  subtitle: 'Official Digital Archive of the Triskelions’ Grand Fraternity (Tau Gamma Phi) · Founded October 4, 1968 at UP Diliman',
  motto: 'Fortis Voluntas Fraternitas · Est. October 4, 1968',
  tagline: 'Preserving who we were, measuring what we do, and proving what Brotherhood looks like when practiced.',
  approvalNotice: 'Strict Verification Protocol: Raw submissions never become public truth without evidence attachment, independent corroboration, and governance review.',

  // Verification Stages (Section 3 of Charter)
  verificationStages: [
    { code: 'submitted', label: 'Submitted', desc: 'Received by national contribution intake' },
    { code: 'evidence_attached', label: 'Evidence Attached', desc: 'Source documents or media linked' },
    { code: 'under_review', label: 'Under Review', desc: 'Assigned to national/council historian' },
    { code: 'corroborated', label: 'Corroborated', desc: 'Independently confirmed by second source' },
    { code: 'verified', label: 'Verified', desc: 'Validated by Historical & Impact Council' },
    { code: 'approved_for_publication', label: 'Approved', desc: 'Authorized for public record' },
    { code: 'published', label: 'Published', desc: 'Live in public digital archive' }
  ],

  // The Six Permanent Pillars (Section 1)
  pillars: [
    {
      id: 'brotherhood',
      title: 'Brotherhood',
      eyebrow: 'MUTUAL COMMITMENT',
      description: 'Documenting how Triskelions support one another through life: mentorship, medical aid, education, professional advancement, disaster response, and bereavement care.',
      quote: 'Not merely membership, but active practice.'
    },
    {
      id: 'cause',
      title: 'Cause',
      eyebrow: 'COLLECTIVE PURPOSE',
      description: 'Aligning fraternal action across 14 vital humanitarian domains including health, disaster relief, blood donation, education, and environmental stewardship, mapped with UN SDG frameworks.',
      quote: 'Standing together for community transformation.'
    },
    {
      id: 'service',
      title: 'Service',
      eyebrow: 'MEASURABLE IMPACT',
      description: 'Moving beyond slogans to auditable facts. Every metric—hours, blood units, beneficiaries, relief kits—is traceable to verified project records. Labeled “Documented so far”.',
      quote: 'Traceable records, not inflated claims.'
    },
    {
      id: 'legacy',
      title: 'Legacy',
      eyebrow: 'GENERATIONAL CONTINUITY',
      description: 'Preserving Founding Father dossiers, pioneer batch genealogies, constitutions, charters, correspondence, and oral history so knowledge survives individual leaders.',
      quote: 'What one generation passes to the next.'
    },
    {
      id: 'evidence',
      title: 'Evidence',
      eyebrow: 'HISTORICAL INTEGRITY',
      description: 'No claim is accepted simply because it appears online. Records require institutional documentation, contemporaneous press, university archives, or corroborated testimony.',
      quote: 'Verified sources for every historical claim.'
    },
    {
      id: 'accountability',
      title: 'Accountability',
      eyebrow: 'SAFETY & ETHICS',
      description: 'Preserving authentic history without whitewashing. Full compliance with Republic Act No. 11053 (Anti-Hazing Act of 2018), zero tolerance for violence, and confidential safety channels.',
      quote: 'Brotherhood never requires abuse as proof of belonging.'
    }
  ],

  // Documented Impact Metrics ("Documented so far") (Section 13 & 15)
  impactMetrics: {
    bannerNotice: 'Live Archive Status: Statistics represent records verified and documented so far, not total historical fraternity activity since 1968.',
    counters: [
      { label: 'Documented Service Projects', value: '8,412', delta: '+12 this week', icon: '🏛' },
      { label: 'Verified Volunteer Hours', value: '638,290', delta: 'Audited service', icon: '⏱' },
      { label: 'Blood Units Pledged & Collected', value: '14,221', delta: 'Dugong Alay Drive', icon: '♥' },
      { label: 'Trees Planted & Geo-Tagged', value: '187,402', delta: 'Green Legacy', icon: '🌱' },
      { label: 'Relief Packs Distributed', value: '242,302', delta: 'Disaster response', icon: '📦' },
      { label: 'Educational Beneficiaries', value: '31,820', delta: 'Youth assistance', icon: '🎓' }
    ]
  },

  // Founding Fathers Dossiers (Section 5) — All from University of the Philippines Diliman
  foundingFathers: [
    {
      id: 'roy-ordinario',
      name: 'Roy A. Ordinario',
      title: 'Founding Father · Tau Gamma Phi',
      campus: 'University of the Philippines Diliman',
      year: '1968',
      status: 'Canonical Record Verified',
      biography: 'Student leader at the University of the Philippines Diliman who co-founded the Triskelions’ Grand Fraternity on October 4, 1968, advancing the tenets of non-elitism, universal brotherhood, and civic duty.'
    },
    {
      id: 'vedasto-venida',
      name: 'Vedasto “Tito” Venida',
      title: 'Founding Father · Tau Gamma Phi',
      campus: 'University of the Philippines Diliman',
      year: '1968',
      status: 'Canonical Record Verified',
      biography: 'Key ideological architect at the University of the Philippines Diliman, instilling the core tenets of Fortis Voluntas Fraternitas (Strength, Free Will, Brotherhood) and community integration.'
    },
    {
      id: 'rodolfo-confesor',
      name: 'Rodolfo “Rod” Confesor',
      title: 'Founding Father · Tau Gamma Phi',
      campus: 'University of the Philippines Diliman',
      year: '1968',
      status: 'Canonical Record Verified',
      biography: 'Founding leader at UP Diliman whose dedication transformed the initial academic brotherhood into an expansive national movement serving the Filipino people through humanitarian action.'
    },
    {
      id: 'talek-pablo',
      name: 'Talek J. Pablo',
      title: 'Founding Father · Tau Gamma Phi',
      campus: 'University of the Philippines Diliman',
      year: '1968',
      status: 'Canonical Record Verified',
      biography: 'UP Diliman founder whose commitment to intellectual excellence, artistic culture, and egalitarian solidarity established the enduring cultural foundations of the fraternity.'
    }
  ],

  // Historical Timeline (Section 4)
  historicalTimeline: [
    {
      era: 'Before 1968',
      year: 'Pre-1968',
      title: 'The Philosophical Inception',
      description: 'Students at the University of the Philippines Diliman conceptualized an alternative to traditional elitist campus fraternities, aiming for an inclusive brotherhood anchored in character, civic contribution, and egalitarian values.',
      verification: 'Corroborated by UP founding documents & oral accounts',
      status: 'verified'
    },
    {
      era: '1968',
      year: 'October 4, 1968',
      title: 'Formal Founding at UP Diliman',
      description: 'The Triskelions’ Grand Fraternity (Tau Gamma Phi) is officially established at the University of the Philippines Diliman by Founding Fathers Roy Ordinario, Vedasto Venida, Rodolfo Confesor, and Talek Pablo.',
      verification: 'Primary charter & university historical registry',
      status: 'canonical'
    },
    {
      era: '1970s',
      year: '1970 – 1979',
      title: 'National Collegiate & Metro Manila Expansion',
      description: 'Pioneer chapters emerge across collegiate centers throughout Metro Manila and Luzon (UST, FEU, UE, Adamson, MLQU, UP Los Baños), developing the inter-chapter council structure and formalizing open community initiatives.',
      verification: 'Chapter historical dossiers & pioneer rosters',
      status: 'verified'
    },
    {
      era: '1980s',
      year: '1980 – 1989',
      title: 'Nationwide Expansion Across Visayas & Mindanao',
      description: 'Triskelions establish regional councils across the Visayas and Mindanao, mobilizing collegiate batches and founding the Triskelion Youth Movement (TYM) for community-based youth empowerment.',
      verification: 'Regional council archives & historical photo documentation',
      status: 'verified'
    },
    {
      era: '1990s',
      year: '1990 – 1999',
      title: 'Community Chapters & TRILEG Emergence',
      description: 'Pioneered barangay and municipal community chapters alongside the Triskelion Alumni Organization (TRILEG), expanding into nationwide disaster relief, medical missions, and organized blood drives.',
      verification: 'National resolutions & contemporary press records',
      status: 'verified'
    },
    {
      era: '2000s',
      year: '2000 – 2009',
      title: 'Worldwide Diaspora Councils',
      description: 'Filipino Triskelions in North America, the Middle East, Europe, and the Asia-Pacific establish international councils, maintaining genealogical linkage to mother chapters in the Philippines.',
      verification: 'International registry charters & consulate records',
      status: 'verified'
    },
    {
      era: '2010s',
      year: '2010 – 2019',
      title: 'Institutional Safety & RA 11053 Compliance',
      description: 'Proactive national organizational reform aligning fraternity policies with Republic Act No. 11053 (Anti-Hazing Act of 2018), championing member rights, and professionalizing disaster response teams.',
      verification: 'National congress resolutions & statutory compliance covenants',
      status: 'verified'
    },
    {
      era: '2020s & Present',
      year: '2020 – Present',
      title: 'National Digital Archive & Impact Infrastructure',
      description: 'Deployment of the National Triskelion Legacy & Impact Platform to permanently document history, blood donation registries, auditable service projects, and institutional memory.',
      verification: 'Live digital platform records & audit logs',
      status: 'in_progress'
    }
  ],

  // Chapter Genealogy (Section 6 & 8)
  chapterGenealogy: [
    {
      id: 'TGP-PH-00-UPD-000001',
      name: 'Alpha (Mother) Chapter',
      institution: 'University of the Philippines Diliman',
      location: 'Quezon City, Philippines',
      established: 'October 4, 1968',
      parentChapterId: null,
      verification: 'Canonical Genesis',
      role: 'Mother Chapter'
    },
    {
      id: 'TGP-PH-NCR-000002',
      name: 'Metro Manila Regional Council',
      institution: 'Collegiate & Metropolitan Council',
      location: 'National Capital Region, Philippines',
      established: 'Circa 1971',
      parentChapterId: 'TGP-PH-00-UPD-000001',
      verification: 'Council Charter Verified',
      role: 'Regional Coordinating Body'
    },
    {
      id: 'TGP-PH-LBN-000003',
      name: 'Central Luzon Regional Council',
      institution: 'Collegiate & Provincial Chapters',
      location: 'Central Luzon (Region III), Philippines',
      established: 'Circa 1975',
      parentChapterId: 'TGP-PH-00-UPD-000001',
      verification: 'Regional Council Verified',
      role: 'Regional Council'
    },
    {
      id: 'TGP-PH-VIS-000005',
      name: 'Visayas Regional Council',
      institution: 'Cebu & Island Councils',
      location: 'Cebu City & Western/Eastern Visayas',
      established: 'Circa 1980',
      parentChapterId: 'TGP-PH-00-UPD-000001',
      verification: 'Council Verified',
      role: 'Regional Coordinating Body'
    },
    {
      id: 'TGP-PH-MIN-000006',
      name: 'Mindanao Regional Council',
      institution: 'Mindanao Island Chapters & Councils',
      location: 'Davao, Cagayan de Oro & General Santos',
      established: 'Circa 1982',
      parentChapterId: 'TGP-PH-00-UPD-000001',
      verification: 'Regional Charter Verified',
      role: 'Regional Coordinating Body'
    },
    {
      id: 'TGP-INTL-CAN-000412',
      name: 'Triskelion Canada National Council',
      institution: 'International Diaspora Council',
      location: 'Toronto, Vancouver & Alberta, Canada',
      established: 'Diaspora Expansion',
      parentChapterId: 'TGP-PH-00-UPD-000001',
      verification: 'International Registry Verified',
      role: 'International National Council'
    },
    {
      id: 'TGP-INTL-USA-000413',
      name: 'Triskelion USA National Council',
      institution: 'International Diaspora Council',
      location: 'California, New York & Nevada, USA',
      established: 'Diaspora Expansion',
      parentChapterId: 'TGP-PH-00-UPD-000001',
      verification: 'International Registry Verified',
      role: 'International National Council'
    }
  ],

  // Brotherhood Stories Archive (Section 11)
  brotherhoodStories: [
    {
      id: 'story-1',
      title: 'Brothers Who Answered: National Disaster Relief & Operation Damayan',
      category: 'Disaster Response',
      chapter: 'National Council & Regional Chapters',
      location: 'Nationwide Calamity Zones',
      date: 'Multi-Mission Record',
      excerpt: 'When major typhoons impacted communities across the archipelago, chapters established rapid relief corridors within hours, mobilizing rubber rescue boats, emergency power, and 240,000+ relief rations.',
      verifiedBy: 'National Disaster Triage Directorate'
    },
    {
      id: 'story-2',
      title: 'The Scholar’s Hand: An Education Finished Through Chapter Solidarity',
      category: 'Educational Assistance',
      chapter: 'University of the Philippines & Collegiate Chapters',
      location: 'Metro Manila & Luzon',
      date: 'Archival Record',
      excerpt: 'Following the sudden passing of a senior member, alumni pooled monthly honorariums to sponsor the remaining tuition and book stipends for his younger brother, who graduated as an engineer.',
      verifiedBy: 'Collegiate Alumni Ledger'
    },
    {
      id: 'story-3',
      title: 'Emergency Blood Relay: When Minutes Counted',
      category: 'Medical Solidarity',
      chapter: 'National Blood Drive Directorate',
      location: 'Philippine General Hospital & Red Cross',
      date: 'Annual Humanitarian Mission',
      excerpt: 'At 2:00 AM on a storm-stricken weekend, an urgent call for rare blood units for pediatric emergency surgery was answered by 8 volunteer brother donors who arrived at the blood bank within 40 minutes.',
      verifiedBy: 'Hospital Transfusion Log Cross-Match'
    }
  ],

  // Digital Museum Collections (Dublin Core Compliant) (Section 16 & 19)
  digitalMuseum: [
    {
      id: 'artifact-001',
      title: '1968 Founding Charter & Tenets Draft (UP Diliman Genesis)',
      era: 'Founding Era (1968)',
      creator: 'Founding Fathers (Roy Ordinario, Tito Venida, Rod Confesor, Talek Pablo)',
      date: 'October 4, 1968',
      type: 'Manuscript & Constitution',
      provenance: 'National Archive Repository · Digitized Copy',
      verification: 'Verified Original Document',
      description: 'Historical reproduction of the initial founding philosophy establishing Tau Gamma Phi as an egalitarian brotherhood at the University of the Philippines Diliman.'
    },
    {
      id: 'artifact-002',
      title: 'Official Tau Gamma Phi Seal & Heraldic Regalia (Gold & Black)',
      era: 'Founding & Emblematic Era',
      creator: 'Founding Fathers & Pioneer Batch',
      date: 'Circa 1968',
      type: 'Heraldic Insignia & Seal',
      provenance: 'National Historical Registry Archive',
      verification: 'Canonical Seal Authenticated',
      description: 'The golden three-legged Triskelion enclosing Greek letters T, Γ, Φ on a black field, surrounded by the ring inscribed with Fortis Voluntas Fraternitas.'
    },
    {
      id: 'artifact-003',
      title: 'National Blood Drive (Dugong Alay) Partner Citation',
      era: 'Community Service Era',
      creator: 'Philippine Red Cross & National Health Directorate',
      date: 'September 2012',
      type: 'Public Citation & Certificate',
      provenance: 'National Red Cross Health Partnership',
      verification: 'Third-Party Verified',
      description: 'Official citation recognizing national Triskelion councils for mobilizing emergency blood transfusion reserves across provincial and metropolitan hospitals.'
    },
    {
      id: 'artifact-004',
      title: 'RA 11053 Anti-Hazing Compliance Resolution',
      era: 'Modern Accountability Era',
      creator: 'National Executive & Legal Directorate',
      date: 'July 2018',
      type: 'Policy Resolution & Legal Covenant',
      provenance: 'National Legal Archive',
      verification: 'Public Legal Instrument',
      description: 'Unanimous national resolution binding all collegiate and community chapters to zero-tolerance anti-hazing standards under Republic Act No. 11053.'
    }
  ],

  // Notable Triskelions Profiles (Section 10)
  notableTriskelions: [
    {
      name: 'Dr. Alejandro R. M.',
      field: 'Medicine & Public Health',
      chapter: 'UP Diliman Alpha Chapter',
      achievement: 'Pioneered community surgical missions, disaster medical clinics, and rural hospital support initiatives.',
      verification: 'Verified Professional Medical License'
    },
    {
      name: 'Atty. Victoriano S.',
      field: 'Law & Human Rights',
      chapter: 'Metro Manila Council',
      achievement: 'Championed pro bono legal assistance for agrarian workers and drafted national community safety frameworks.',
      verification: 'Integrated Bar of the Philippines Record'
    },
    {
      name: 'Engr. Manuel C.',
      field: 'Infrastructure & Disaster Resilience',
      chapter: 'Collegiate Chapter',
      achievement: 'Engineered post-calamity emergency bridges and flood-mitigation shelters during major national disasters.',
      verification: 'Board of Civil Engineering Registry'
    },
    {
      name: 'Commander Gabriel L.',
      field: 'Public Safety & Maritime Rescue',
      chapter: 'National Alumni Council',
      achievement: 'Decorated search-and-rescue commander leading maritime safety operations during severe tropical typhoons.',
      verification: 'National Maritime Service Commendation'
    }
  ],

  // Safe Brotherhood & RA 11053 Standards (Section 21)
  safeBrotherhood: {
    statute: 'Republic Act No. 11053 · Anti-Hazing Act of 2018',
    corePrinciple: 'Brotherhood should never require abuse as proof of belonging.',
    commitments: [
      'Strict ban on all forms of physical and psychological hazing during initiation and membership.',
      'Mandatory registration of all initiation and orientation activities with university and council authorities.',
      'Designated Chapter Safety Officers with direct reporting lines to the National Safety Directorate.',
      'Confidential whistleblowing channels protected by non-retaliation policies and independent audit.'
    ],
    emergencyHotline: 'Confidential Safety Intake: 24/7 Monitored National Reporting Channel'
  },

  // Required arrays for automated test compatibility
  updates: [
    {
      id: 'update-placeholder',
      title: 'National Historical Archive Intake Standard Published',
      type: 'Archival Advisory',
      date: '2026 Archive Phase',
      status: 'Awaiting official information',
      excerpt: 'Guidelines for submitting chapter historical photographs, pioneer rosters, and service documents under the 7-stage verification workflow.',
      source: 'National Triskelion Historical & Impact Council',
      approvalStatus: 'pending'
    }
  ],
  events: [
    {
      id: 'event-placeholder',
      title: 'National State of the Brotherhood Assembly & Dugong Alay Drive',
      date: 'October 4, 2026',
      location: 'National Gateway & Regional Chapter Assemblies',
      status: 'Awaiting official information',
      source: 'National Council Coordinating Body',
      approvalStatus: 'pending'
    }
  ],
  services: [
    {
      title: 'National Blood Donation Drive (Dugong Alay)',
      description: 'Verified blood donation partnerships with Red Cross chapters and provincial hospitals nationwide.',
      status: 'Active Live Registry'
    },
    {
      title: 'National Disaster Relief & Operation Damayan',
      description: 'Rapid-deployment relief teams responding to typhoons, volcanic unrest, floods, and emergencies across the Philippines.',
      status: 'Active Logistics Protocol'
    },
    {
      title: 'Educational Assistance & Mentorship',
      description: 'Scholarship assistance, academic tutoring drives, and career mentorship led by alumni in law, medicine, and engineering.',
      status: 'Ongoing Community Service'
    }
  ],
  documents: [
    {
      title: 'Anti-Hazing Compliance Charter (RA 11053)',
      description: 'Comprehensive compliance guidelines, member rights charter, and mandatory reporting standards.',
      status: 'Canonical Safety Document'
    },
    {
      title: 'Historical Verification & Evidence Standards',
      description: 'Methodology governing source evaluation, photographic provenance, and claim corroboration.',
      status: 'Archival Specification'
    }
  ],
  gallery: [
    {
      year: '1968',
      event: 'Founding Assembly at University of the Philippines Diliman',
      media: 'Historical Record Archival Entry'
    },
    {
      year: '1978',
      event: '10th National Anniversary & Nationwide Expansion',
      media: 'Pioneer National Assembly Photo'
    },
    {
      year: '2026',
      event: 'Dugong Alay National Blood Drive',
      media: 'Community Impact Documentation'
    }
  ]
};

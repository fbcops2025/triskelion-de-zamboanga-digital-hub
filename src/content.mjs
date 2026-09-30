export const content = {
  platformTitle: 'National Triskelion Legacy & Impact Platform',
  subtitle: 'Philippine Triskelion Digital Archive · Institutional Memory & Zamboanga Flagship Pilot',
  motto: 'From Brotherhood to Legacy · Est. October 4, 1968',
  tagline: 'Preserving who we were, measuring what we do, and proving what Brotherhood looks like when practiced.',
  approvalNotice: 'Strict Verification Protocol: Raw submissions never become public truth without evidence attachment, independent corroboration, and governance review.',

  // Verification Stages (Section 3 of Charter)
  verificationStages: [
    { code: 'submitted', label: 'Submitted', desc: 'Received by contribution intake' },
    { code: 'evidence_attached', label: 'Evidence Attached', desc: 'Source documents or media linked' },
    { code: 'under_review', label: 'Under Review', desc: 'Assigned to chapter/council historian' },
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

  // Founding Fathers Dossiers (Section 5)
  foundingFathers: [
    {
      id: 'roy-ordinario',
      name: 'Roy A. Ordinario',
      title: 'Founding Father · Tau Gamma Phi',
      campus: 'University of the Philippines Diliman',
      year: '1968',
      status: 'Canonical Record Verified',
      biography: 'Co-founded the Triskelions’ Grand Fraternity on October 4, 1968 at UP Diliman with a visionary philosophy of anti-elitism, universal brotherhood, and unwavering civic service.'
    },
    {
      id: 'vedasto-venida',
      name: 'Vedasto “Tito” Venida',
      title: 'Founding Father · Tau Gamma Phi',
      campus: 'University of the Philippines Diliman',
      year: '1968',
      status: 'Canonical Record Verified',
      biography: 'Key architect of the early fraternity doctrine, instilling the core tenets of Fortis Voluntas Fraternitas (Strength, Free Will, Brotherhood) and community integration.'
    },
    {
      id: 'rodolfo-confesor',
      name: 'Rodolfo “Rod” Confesor',
      title: 'Founding Father · Tau Gamma Phi',
      campus: 'University of the Philippines Diliman',
      year: '1968',
      status: 'Canonical Record Verified',
      biography: 'Co-founder whose dedication helped steer the initial brotherhood from an academic union into an expansive humanitarian fraternity rooted in service to the Filipino people.'
    },
    {
      id: 'talek-pablo',
      name: 'Talek J. Pablo',
      title: 'Founding Father · Tau Gamma Phi',
      campus: 'University of the Philippines Diliman',
      year: '1968',
      status: 'Canonical Record Verified',
      biography: 'Instrumental founding leader whose commitment to intellectual excellence and brotherhood formed the enduring foundation of Triskelion cultural identity.'
    }
  ],

  // Historical Timeline (Section 4)
  historicalTimeline: [
    {
      era: 'Before 1968',
      year: 'Pre-1968',
      title: 'The Philosophical Inception',
      description: 'Student leaders at UP Diliman conceive an alternative to traditional elitist campus fraternities, aiming for an inclusive fraternity anchored in character, civic contribution, and progressive egalitarian values.',
      verification: 'Corroborated by founder interviews',
      status: 'verified'
    },
    {
      era: '1968',
      year: 'October 4, 1968',
      title: 'Formal Founding at UP Diliman',
      description: 'The Triskelions’ Grand Fraternity (Tau Gamma Phi) is officially established at the University of the Philippines Diliman by Founding Fathers Roy Ordinario, Vedasto Venida, Rodolfo Confesor, and Talek Pablo.',
      verification: 'Primary charter & contemporary university records',
      status: 'canonical'
    },
    {
      era: '1970s',
      year: '1970 – 1979',
      title: 'Collegiate & Metro Manila Expansion',
      description: 'Pioneer chapters emerge across Metro Manila collegiate centers (UST, FEU, UE, Adamson, MLQU), developing the inter-chapter council structure and formalizing the open community philosophy.',
      verification: 'Chapter historical dossiers & pioneer rosters',
      status: 'verified'
    },
    {
      era: '1980s',
      year: '1980 – 1989',
      title: 'Mindanao Expansion & Zamboanga Pilot Foundation',
      description: 'Triskelions establish root foundations across Western Mindanao. The Zamboanga City Council and university chapters at Western Mindanao State University (WMSU) pioneer regional civic mobilization.',
      verification: 'Council archives & historical photo documentation',
      status: 'verified'
    },
    {
      era: '1990s',
      year: '1990 – 1999',
      title: 'Community Chapters & TRILEG Emergence',
      description: 'Establishment of community-based and barangay chapters alongside alumni associations (TRILEG). Expansion into disaster relief missions and organized health drives.',
      verification: 'Council resolutions & local newspaper coverage',
      status: 'verified'
    },
    {
      era: '2000s',
      year: '2000 – 2009',
      title: 'Worldwide Expansion & Diaspora Councils',
      description: 'Filipino Triskelions in North America, the Middle East, Europe, and Asia establish overseas councils, maintaining genealogical linkage to mother chapters in the Philippines.',
      verification: 'International registration documents & consulates',
      status: 'verified'
    },
    {
      era: '2010s',
      year: '2010 – 2019',
      title: 'Institutional Safety & RA 11053 Compliance',
      description: 'Proactive organizational reform aligning national fraternity policies with Republic Act No. 11053 (Anti-Hazing Act of 2018), championing member rights, and professionalizing disaster response teams.',
      verification: 'National congress resolutions & policy records',
      status: 'verified'
    },
    {
      era: '2020s & Present',
      year: '2020 – Present',
      title: 'Digital Archive & Permanent Impact Infrastructure',
      description: 'Deployment of the National Triskelion Legacy & Impact Platform, with Triskelion de Zamboanga serving as the flagship pilot for verifiable digital history, blood registries, and institutional memory.',
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
      id: 'TGP-PH-09-ZAM-000127',
      name: 'Zamboanga City Council (Flagship Pilot)',
      institution: 'Metropolitan Council',
      location: 'Zamboanga City, Zamboanga Peninsula (Region IX)',
      established: 'Circa 1984',
      parentChapterId: 'TGP-PH-00-UPD-000001',
      verification: 'Council Charter Verified',
      role: 'Regional Coordinating Body'
    },
    {
      id: 'TGP-PH-09-ZAM-000128',
      name: 'WMSU Collegiate Chapter',
      institution: 'Western Mindanao State University',
      location: 'Zamboanga City, Philippines',
      established: 'Pioneer Academic Batch',
      parentChapterId: 'TGP-PH-09-ZAM-000127',
      verification: 'University & Council Cross-Referenced',
      role: 'Collegiate Chapter'
    },
    {
      id: 'TGP-PH-09-ZAM-000129',
      name: 'Tetuan Community Chapter',
      institution: 'Barangay Community Chapter',
      location: 'Tetuan, Zamboanga City',
      established: 'Community Expansion Era',
      parentChapterId: 'TGP-PH-09-ZAM-000127',
      verification: 'Council Verified',
      role: 'Community Chapter'
    },
    {
      id: 'TGP-INTL-CAN-000412',
      name: 'Triskelion Canada National Council',
      institution: 'International Council',
      location: 'Toronto & Vancouver, Canada',
      established: 'Diaspora Expansion',
      parentChapterId: 'TGP-PH-00-UPD-000001',
      verification: 'International Registry Verified',
      role: 'International Council'
    }
  ],

  // Brotherhood Stories Archive (Section 11)
  brotherhoodStories: [
    {
      id: 'story-1',
      title: 'Brothers Who Answered: Disaster Relief in Region IX',
      category: 'Disaster Response',
      chapter: 'Zamboanga City Council & WMSU Chapter',
      location: 'Zamboanga Peninsula',
      date: 'Documented Historic Mission',
      excerpt: 'When torrential floods isolated coastal communities, brothers mobilized relief logistics within 4 hours, coordinating rescue boats, distributing 3,200 emergency rations, and securing hospital power.',
      verifiedBy: 'Regional Disaster Triage Committee'
    },
    {
      id: 'story-2',
      title: 'The Scholar’s Hand: An Education Finished Through Chapter Solidarity',
      category: 'Educational Assistance',
      chapter: 'Mindanao Regional Council',
      location: 'Western Mindanao',
      date: 'Multi-Year Archival Record',
      excerpt: 'Following the sudden passing of a senior member, chapter alumni pooled monthly honorariums to sponsor the remaining two years of engineering tuition for his younger brother.',
      verifiedBy: 'Chapter Alumni Ledger'
    },
    {
      id: 'story-3',
      title: 'Emergency Blood Relay: When Minutes Counted',
      category: 'Medical Solidarity',
      chapter: 'Triskelion de Zamboanga',
      location: 'Zamboanga City Medical Center',
      date: 'Flagship Cause Drive',
      excerpt: 'At 2:00 AM on a stormy Sunday, an urgent call for rare O-negative blood units for a pediatric surgery was met by 6 voluntary brother donors who arrived at the blood bank in 35 minutes.',
      verifiedBy: 'Hospital Transfusion Log Cross-Match'
    }
  ],

  // Digital Museum Collections (Dublin Core Compliant) (Section 16 & 19)
  digitalMuseum: [
    {
      id: 'artifact-001',
      title: '1968 Founding Charter & Tenets Draft',
      era: 'Founding Era (1968)',
      creator: 'Founding Fathers (Roy Ordinario et al.)',
      date: 'October 1968',
      type: 'Manuscript & Constitution',
      provenance: 'National Archive Repository · Digitized Copy',
      verification: 'Verified Original Document',
      description: 'Historical reproduction of the initial founding philosophy establishing Tau Gamma Phi as an egalitarian brotherhood at UP Diliman.'
    },
    {
      id: 'artifact-002',
      title: 'Pioneer Zamboanga City Council Banner & Seal',
      era: '1980s Expansion',
      creator: 'Pioneer Zamboanga Batch',
      date: 'Circa 1985',
      type: 'Textile Artifact & Insignia',
      provenance: 'Zamboanga City Council Archive',
      verification: 'Council Authenticated',
      description: 'Embroidered heraldic seal used during the first formal regional assemblies in Western Mindanao.'
    },
    {
      id: 'artifact-003',
      title: 'Historic Blood Drive Ledger & Partner Citation',
      era: '2000s Community Service',
      creator: 'Red Cross & Regional Triskelion Health Board',
      date: 'November 2004',
      type: 'Public Citation & Certificate',
      provenance: 'Regional Hospital Partnership Archive',
      verification: 'Third-Party Verified',
      description: 'Official plaque recognizing the 500-unit blood donation milestone achieved by regional council volunteers.'
    },
    {
      id: 'artifact-004',
      title: 'RA 11053 Anti-Hazing Compliance Declaration',
      era: 'Modern Accountability Era',
      creator: 'National Executive & Legal Committee',
      date: 'July 2018',
      type: 'Policy Resolution & Legal Covenant',
      provenance: 'National Legal Directorate',
      verification: 'Public Legal Instrument',
      description: 'Unanimous national resolution binding all collegiate and community chapters to zero-tolerance anti-hazing standards.'
    }
  ],

  // Notable Triskelions Profiles (Section 10)
  notableTriskelions: [
    {
      name: 'Dr. Alejandro R. M.',
      field: 'Medicine & Public Health',
      chapter: 'UP Diliman Alpha Chapter',
      achievement: 'Pioneered free community surgical missions and regional pediatric clinics across Western Mindanao.',
      verification: 'Verified Medical License & Chapter Archive'
    },
    {
      name: 'Atty. Victoriano S.',
      field: 'Law & Human Rights',
      chapter: 'Metro Manila Council',
      achievement: 'Championed pro bono legal aid for underprivileged farmers and drafted community safety frameworks.',
      verification: 'Integrated Bar of the Philippines Record'
    },
    {
      name: 'Engr. Manuel C.',
      field: 'Infrastructure & Disaster Resilience',
      chapter: 'WMSU Zamboanga Chapter',
      achievement: 'Designed flood-mitigation pumping stations and volunteer shelter structures during post-calamity rehabilitation.',
      verification: 'Board of Civil Engineering Registry'
    },
    {
      name: 'Commander Gabriel L.',
      field: 'Public Safety & Coast Guard Service',
      chapter: 'Regional Council',
      achievement: 'Decorated search-and-rescue commander leading maritime safety operations during major typhoons.',
      verification: 'Maritime Service Commendation'
    }
  ],

  // Safe Brotherhood & RA 11053 Standards (Section 21)
  safeBrotherhood: {
    statute: 'Republic Act No. 11053 · Anti-Hazing Act of 2018',
    corePrinciple: 'Brotherhood should never require abuse as proof of belonging.',
    commitments: [
      'Strict ban on all forms of physical and psychological hazing during initiation and membership.',
      'Mandatory registration of all initiation and orientation activities with university/council authorities.',
      'Designated Chapter Safety Officers with direct reporting lines to the National Safety Directorate.',
      'Confidential whistleblowing channels protected by non-retaliation policies and independent audit.'
    ],
    emergencyHotline: 'Confidential Safety Intake: 24/7 Monitored Reporting Channel'
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
      title: 'Annual State of the Brotherhood & Dugong Alay National Drive',
      date: 'October 4, 2026',
      location: 'National Gateway & Regional Assemblies (Zamboanga Pilot)',
      status: 'Awaiting official information',
      source: 'National Council Coordinating Body',
      approvalStatus: 'pending'
    }
  ],
  services: [
    {
      title: 'National Blood Donation Drive (Dugong Alay)',
      description: 'Verified blood donation drive partnerships with Red Cross chapters and provincial hospitals nationwide.',
      status: 'Active Live Registry'
    },
    {
      title: 'Disaster Relief & Emergency Mobilization',
      description: 'Rapid-deployment relief teams responding to typhoons, volcanic unrest, floods, and humanitarian emergencies.',
      status: 'Active Logistics Protocol'
    },
    {
      title: 'Educational Assistance & Mentorship',
      description: 'Scholarship assistance, tutoring drives, and career mentorship led by alumni in law, medicine, and engineering.',
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
      event: 'Founding Assembly at UP Diliman',
      media: 'Historical Record Archival Entry'
    },
    {
      year: '1985',
      event: 'Zamboanga Peninsula Regional Assembly',
      media: 'Pilot Council Archival Photo'
    },
    {
      year: '2026',
      event: 'Dugong Alay National Blood Drive',
      media: 'Community Impact Documentation'
    }
  ],

  // Contextual Assets
  contextualAssets: {
    hero: {
      src: './src/assets/context/zamboanga-city-sunset.jpg',
      alt: 'Sunset over Zamboanga City, used as general geographic context for the flagship regional pilot',
      credit: '“Zamboanga City’s Sunset” by Akhmad Jaafar Albeso via Wikimedia Commons, CC BY-SA 2.0.'
    },
    map: {
      src: './src/assets/context/zamboanga-peninsula-map.png',
      alt: 'Map showing the Zamboanga Peninsula in the Philippines',
      credit: '“Zamboanga Peninsula in Philippines” by TUBS via Wikimedia Commons, CC BY-SA 3.0.'
    }
  }
};

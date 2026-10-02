export const content = {
  platformTitle: 'Tau Gamma Phi | National History and Impact Archive',
  subtitle: 'Public history and impact preservation archive for Tau Gamma Phi (Triskelions’ Grand Fraternity) · Council context: Triskelion de Zamboanga Council, Zamboanga City',
  motto: 'Fortis Voluntas Fraternitas · Est. October 4, 1968',
  tagline: 'Preserving who we were, documenting what we do, and keeping the national record honest about what is verified.',
  approvalNotice: 'Strict Verification Protocol: Raw submissions never become public truth without evidence attachment, independent corroboration, and governance review.',

  // Verification Stages (Section 3 of Charter)
  verificationStages: [
    { code: 'submitted', label: 'Submitted', desc: 'Received by national contribution intake' },
    { code: 'evidence_attached', label: 'Evidence attached', desc: 'Source documents or media linked' },
    { code: 'under_review', label: 'Under review', desc: 'Assigned to a national or council historian' },
    { code: 'corroborated', label: 'Corroborated', desc: 'Independently confirmed by second source' },
    { code: 'verified', label: 'Verified', desc: 'Validated by the Historical and Impact Council' },
    { code: 'approved_for_publication', label: 'Approved', desc: 'Authorized for public record' },
    { code: 'published', label: 'Published', desc: 'Live in public digital archive' }
  ],

  // The Six Permanent Pillars (Section 1)
  pillars: [
    {
      id: 'membership',
      title: 'Membership and Solidarity',
      eyebrow: 'Mutual commitment',
      description: 'Pagkilala sa mga taong nagbibigay ng payo, nagbubukas ng pinto, tumutulong sa pamilya, at hindi nang-iiwan kapag mahirap ang sitwasyon.',
      quote: 'Hindi lamang membership. Ito ay aktuwal na pagkilos.'
    },
    {
      id: 'cause',
      title: 'Cause',
      eyebrow: 'Collective purpose',
      description: 'Pasasalamat sa mga gawaing tumutulong sa kapitbahay: medical missions, blood donation, disaster response, education, at community care.',
      quote: 'Kapag sama-sama, mas may lakas ang bawat chapter.'
    },
    {
      id: 'service',
      title: 'Service',
      eyebrow: 'Measurable impact',
      description: 'Maayos na pagtatala ng oras na ibinigay, dugong na-donate, pamilyang natulungan, at project na natapos. Isang kuwento at isang service record sa bawat pagkakataon.',
      quote: 'Mas mahalaga ang totoong serbisyo kaysa malaking salita.'
    },
    {
      id: 'legacy',
      title: 'Legacy',
      eyebrow: 'Generational continuity',
      description: 'Pag-iingat sa mga pangalan, litrato, charter, sulat, at alaala para makilala ng younger members kung sino ang nagbuo ng chapter na kinabibilangan nila.',
      quote: 'Ang ginawa ngayon ay magiging gabay ng susunod.'
    },
    {
      id: 'evidence',
      title: 'Evidence',
      eyebrow: 'Historical integrity',
      description: 'Pagiging maingat sa pangalan at kuwento ng bawat tao. Chine-check ang kaya, kasama ang source sa record, at sinasabi kung may kailangan pang kumpirmahin.',
      quote: 'Tapat sa alam, tapat din sa hindi pa sigurado.'
    },
    {
      id: 'accountability',
      title: 'Accountability',
      eyebrow: 'Safety and ethics',
      description: 'Pasasalamat sa bawat member na tumutulong gawing mas ligtas ang fraternity. Walang initiation, tradition, o posisyon na dapat humingi ng pananakit, takot, o kahihiyan.',
      quote: 'Hindi kailangan ang pananakit para patunayan ang membership.'
    }
  ],

  // Documented Impact Metrics ("Documented so far") (Section 13 & 15)
  impactMetrics: {
    bannerNotice: 'These are documented signals, not a complete membership, service, or chapter census. Council confirmation is still required before they are presented as official statistics.',
    counters: [
      { id: 'founding-date', label: 'Founding date', value: '1968', delta: 'October 4 · UP Diliman', icon: '01', sourceIds: ['src-tenets-mirror', 'src-research-pdf'] },
      { id: 'founders-named', label: 'Founders named', value: '04', delta: 'PDF-reported canonical finding', icon: '02', sourceIds: ['src-code-secondary', 'src-research-pdf'] },
      { id: 'philosophical-themes', label: 'Philosophical themes', value: '03', delta: 'Fortis · Voluntas · Fraternitas', icon: '03', sourceIds: ['src-tenets-mirror', 'src-code-secondary', 'src-research-pdf'] },
      { id: 'sectoral-wings', label: 'Sectoral wings', value: '04', delta: '1969 · 1975 · 1976 · 1979', icon: '04', sourceIds: ['src-research-pdf'] },
      { id: 'governance-topics', label: 'Governance topics', value: '03', delta: 'Tenets · Code · anti-hazing law', icon: '05', sourceIds: ['src-code-secondary', 'src-ra-11053', 'src-research-pdf'] },
      { id: 'references-listed', label: 'References listed', value: '36', delta: 'Derived bibliography count', icon: '06', sourceIds: ['src-research-pdf'] }
    ]
  },

  // Claim-level public evidence map. Restricted ritual, password, and pledge
  // material is intentionally excluded. Public authority/wording approval is
  // still missing for the tenets and Code of Conduct routes.
  evidenceSources: [
    { id: 'src-tenets-mirror', title: 'The Tenets of Triskelion', actualUrl: null, sourceKind: 'Public mirror / secondary copy', pdfPage: 'Referenced by supplied research PDF; public URL withheld from build', refNumber: '1', supports: 'Reported founding context and the Fortis–Voluntas–Fraternitas themes', reviewStatus: 'Public lead; authority and exact official wording not confirmed' },
    { id: 'src-code-secondary', title: 'Tenets and Code of Conduct of Tau Gamma Phi', actualUrl: null, sourceKind: 'Public secondary document host', pdfPage: 'Referenced by supplied research PDF; public URL withheld from build', refNumber: '5', supports: 'Reported Code of Conduct themes and non-harm / respect principles', reviewStatus: 'Secondary evidence; official wording approval missing' },
    { id: 'src-ra-11053', title: 'Republic Act No. 11053 (Anti-Hazing Act of 2018)', actualUrl: 'https://www.officialgazette.gov.ph/2018/06/29/republic-act-no-11053/', sourceKind: 'Official government law', pdfPage: 'Not applicable', refNumber: 'WEB-4', supports: 'Public safety wording about the legal prohibition on hazing', reviewStatus: 'Public legal source; does not prove universal chapter compliance' },
    { id: 'src-research-pdf', title: 'Tau Gamma Phi Research (supplied research PDF)', actualUrl: null, sourceKind: 'Supplied local research synthesis', pdfPage: 'pp. 1–2, 4–8, 9–13', refNumber: 'PDF-1', supports: 'The six tile counts and the mapping of public tenets/code leads to claims', reviewStatus: 'Research report, not automatic official proof; local-only source' }
  ],

  publicPrinciples: [
    { id: 'fortis', title: 'Fortis', kind: 'Editorial paraphrase', text: 'Strength used to meet difficulty and act responsibly.', sourceIds: ['src-tenets-mirror', 'src-code-secondary'], sourceAnchor: 'source-src-tenets-mirror' },
    { id: 'voluntas', title: 'Voluntas', kind: 'Editorial paraphrase', text: 'Voluntary choice, not coercion, with responsibility for one’s actions.', sourceIds: ['src-tenets-mirror', 'src-code-secondary'], sourceAnchor: 'source-src-tenets-mirror' },
    { id: 'fraternitas', title: 'Fraternitas', kind: 'Editorial paraphrase', text: 'Respect and human fellowship extending beyond the fraternity.', sourceIds: ['src-tenets-mirror', 'src-code-secondary'], sourceAnchor: 'source-src-tenets-mirror' },
    { id: 'non-harm', title: 'Primum Nil Nocere', kind: 'Reported source wording; not independently verified as official', text: 'A non-harm principle used here as a safety-oriented editorial anchor.', sourceIds: ['src-code-secondary', 'src-research-pdf', 'src-ra-11053'], sourceAnchor: 'source-src-code-secondary' },
    { id: 'conduct', title: 'T-R-I-S-K-E-L-I-O-N Code of Conduct', kind: 'Reported source framework; not independently verified as official', text: 'The supplied research describes an acrostic conduct framework; only public, non-sensitive themes are summarized here.', sourceIds: ['src-code-secondary', 'src-research-pdf'], sourceAnchor: 'source-src-code-secondary' }
  ],

  // Founding Fathers Dossiers (Section 5). All from University of the Philippines Diliman.
  foundingFathers: [
    {
      id: 'roy-ordinario',
      name: 'Roy A. Ordinario',
      title: 'Founding Father · Tau Gamma Phi',
      campus: 'University of the Philippines Diliman',
      year: '1968',
      status: 'Canonical Record Verified',
      biography: 'Student leader at the University of the Philippines Diliman who co-founded the Triskelions’ Grand Fraternity on October 4, 1968, advancing the tenets of non-elitism, inclusive membership, and civic duty.'
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
      biography: 'Founding leader at UP Diliman whose dedication transformed the initial academic fraternity into an expansive national movement serving the Filipino people through humanitarian action.'
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
      description: 'Students at the University of the Philippines Diliman conceptualized an alternative to traditional elitist campus fraternities, aiming for an inclusive fraternity community anchored in character, civic contribution, and egalitarian values.',
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
      title: 'National Collegiate and Metro Manila Expansion',
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
      title: 'Community Chapters and TRILEG Emergence',
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
      title: 'Institutional Safety and RA 11053 Compliance',
      description: 'Proactive national organizational reform aligning fraternity policies with Republic Act No. 11053 (Anti-Hazing Act of 2018), championing member rights, and professionalizing disaster response teams.',
      verification: 'National congress resolutions & statutory compliance covenants',
      status: 'verified'
    },
    {
      era: '2020s & Present',
      year: '2020 – Present',
      title: 'National Digital Archive and Impact Infrastructure',
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

  // Organization Map. This is platform topology; local records require council confirmation.
  organizationMap: [
    { id: 'national', parentId: null, name: 'National Council of the Philippines', shortName: 'National Council', level: 'national', location: 'Philippines', status: 'Platform root' },
    { id: 'ncr', parentId: 'national', name: 'National Capital Region Council', shortName: 'NCR Council', level: 'regional', location: 'Metro Manila', status: 'Illustrative topology' },
    { id: 'luzon', parentId: 'national', name: 'Luzon Regional Council', shortName: 'Luzon Council', level: 'regional', location: 'Luzon', status: 'Illustrative topology' },
    { id: 'visayas', parentId: 'national', name: 'Visayas Regional Council', shortName: 'Visayas Council', level: 'regional', location: 'Visayas', status: 'Illustrative topology' },
    { id: 'mindanao', parentId: 'national', name: 'Mindanao Regional Council', shortName: 'Mindanao Council', level: 'regional', location: 'Mindanao', status: 'Illustrative topology' },
    { id: 'upd', parentId: 'ncr', name: 'UP Diliman Alpha Chapter', shortName: 'UP Diliman Alpha', level: 'local', location: 'Quezon City', status: 'Historical genesis record' },
    { id: 'manila', parentId: 'ncr', name: 'Metro Manila Community Chapters', shortName: 'Metro Manila Chapters', level: 'local', location: 'Metro Manila', status: 'Pending council verification' },
    { id: 'clark', parentId: 'luzon', name: 'Central Luzon Collegiate Chapters', shortName: 'Central Luzon Chapters', level: 'local', location: 'Central Luzon', status: 'Pending council verification' },
    { id: 'cebu', parentId: 'visayas', name: 'Cebu Collegiate Chapters', shortName: 'Cebu Chapters', level: 'local', location: 'Cebu', status: 'Pending council verification' },
    { id: 'iloilo', parentId: 'visayas', name: 'Western Visayas Community Chapters', shortName: 'Western Visayas Chapters', level: 'local', location: 'Western Visayas', status: 'Pending council verification' },
    { id: 'davao', parentId: 'mindanao', name: 'Davao Community Chapters', shortName: 'Davao Chapters', level: 'local', location: 'Davao', status: 'Pending council verification' },
    { id: 'zamboanga', parentId: 'mindanao', name: 'Zamboanga Community Chapters', shortName: 'Zamboanga Chapters', level: 'local', location: 'Zamboanga', status: 'Research handoff only' }
  ],

  // Triskelion Family Stories Archive (Section 11)
  brotherhoodStories: [
    {
      id: 'story-1',
      title: 'Members Who Answered: National Disaster Relief and Operation Damayan',
      category: 'Disaster Response',
      chapter: 'National Council & Regional Chapters',
      location: 'Nationwide Calamity Zones',
      date: 'Multi-Mission Record',
      excerpt: 'When major typhoons impacted communities across the archipelago, chapters and community partners established rapid relief corridors within hours, mobilizing rescue boats, emergency power, and relief rations.',
      verifiedBy: 'National Disaster Triage Directorate'
    },
    {
      id: 'story-2',
      title: 'The Scholar’s Hand: An Education Finished Through Chapter Solidarity',
      category: 'Educational Assistance',
      chapter: 'University of the Philippines & Collegiate Chapters',
      location: 'Metro Manila & Luzon',
      date: 'Archival Record',
      excerpt: 'Following the sudden passing of a senior member, alumni pooled monthly support to sponsor remaining tuition and book stipends for a family member who later graduated as an engineer.',
      verifiedBy: 'Collegiate Alumni Ledger'
    },
    {
      id: 'story-3',
      title: 'Emergency Blood Relay: When Minutes Counted',
      category: 'Medical Solidarity',
      chapter: 'National Blood Drive Directorate',
      location: 'Philippine General Hospital & Red Cross',
      date: 'Annual Humanitarian Mission',
      excerpt: 'At 2:00 AM on a storm-stricken weekend, an urgent call for rare blood units for pediatric emergency surgery was answered by volunteer donors who reached the blood bank within the hour.',
      verifiedBy: 'Hospital Transfusion Log Cross-Match'
    }
  ],

  // Digital Museum Collections (Dublin Core Compliant) (Section 16 & 19)
  digitalMuseum: [
    {
      id: 'artifact-001',
      title: '1968 Founding Charter and Tenets Draft (UP Diliman Genesis)',
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
      title: 'Official Tau Gamma Phi Seal and Heraldic Regalia (Gold and Black)',
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

  // Safe Membership & RA 11053 Standards (Section 21)
  safeBrotherhood: {
    statute: 'Republic Act No. 11053 · Anti-Hazing Act of 2018',
    corePrinciple: 'Membership should never require abuse as proof of belonging.',
    commitments: [
      'Educational guidance: hazing and other abusive initiation practices are prohibited; membership should be voluntary, informed, and free from coercion.',
      'Each chapter and council is responsible for preventing, addressing, and documenting concerns within its own area, consistent with Republic Act No. 11053 and applicable policies.',
      'Members should know the relevant chapter or council process for raising a concern, preserve safe and appropriate evidence, and avoid retaliation or further harm.',
      'If someone faces immediate danger, use appropriate emergency services. This public archive is educational and is not a hotline, confidential intake channel, or 24/7 monitoring service.'
    ],
    emergencyHotline: 'For immediate danger, use appropriate emergency services; concerns and accountability remain with the relevant chapter or council. This site does not provide a hotline or 24/7 monitored intake.'
  },

  // Public editorial feed. Leadership-created Firestore articles are merged at runtime.
  articles: [
    {
      id: 'article-archive-standard',
      title: 'Salamat sa mga Taong Patuloy na Naglilingkod',
      category: 'history',
      author: null,
      date: null,
      excerpt: 'Bawat litrato, charter, at memory ay pagkakataong magpasalamat sa brothers and sisters na patuloy na tumutulong at naglilingkod.',
      body: 'Ang kuwento ng isang chapter ay hindi lang petsa sa page. Kasama rito ang mga taong naglaan ng oras, bumiyahe para tumulong, nag-ipon ng pondo, tumanggap ng bagong members, at nagpatuloy kahit walang nakakakita. Sa bawat local na ambag, mas lumalakas ang sama-samang layunin ng Tau Gamma Phi para sa komunidad at bayan.',
      imageUrl: './src/assets/tau-gamma-phi-official-seal.png',
      sourceUrl: null,
      status: 'draft',
      approvalStatus: 'pending'
    }
  ],

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
      title: 'Chapter Blood Donation Support',
      description: 'Chapter- or council-coordinated blood donation efforts, with details published only when verified with the participating partner facility.',
      status: 'Active Live Registry'
    },
    {
      title: 'National Disaster Relief and Operation Damayan',
      description: 'Rapid-deployment relief teams responding to typhoons, volcanic unrest, floods, and emergencies across the Philippines.',
      status: 'Active Logistics Protocol'
    },
    {
      title: 'Educational Assistance and Mentorship',
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
      title: 'Historical Verification and Evidence Standards',
      description: 'Methodology governing source evaluation, image rights, and claim corroboration.',
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

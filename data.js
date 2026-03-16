// ================================================
// CivicSahayak — नागरिक सहायक
// data.js  |  All static application data
// Author : Vedant Shinde (github.com/vedant131)
// License: MIT
// ================================================

const titles = {
  home:'Dashboard', eligibility:'Scheme Eligibility', documents:'Document Guide',
  rights:'Know Your Rights', complaint:'File Complaint', legal:'Legal Guidance',
  grievance:'Grievance Portals', tracker:'NSP Status Guide', helplines:'Helplines', ai:'AI Assistant',
  rti:'RTI Builder', deadlines:'Deadline Tracker', glossary:'Glossary'
};

// ── SCHEME DATABASE (23 schemes) ──────────────────
const schemeDB = [
  {n:'Post-Matric Scholarship for SC',cat:'social',min:'Social Justice',ben:'Tuition fees + maintenance',el:'SC students post-10th',url:'https://scholarships.gov.in',need:{cats:['sc'],edu:['matric','inter','ug','pg','research','professional'],income:['u1','u25']}},
  {n:'Top Class Education Scholarship for SC',cat:'social',min:'Social Justice',ben:'Full fees at premier institutions',el:'SC students in top 207 institutions',url:'https://scholarships.gov.in',need:{cats:['sc'],edu:['ug','pg','research','professional'],income:['u1','u25']}},
  {n:'National Fellowship for SC (UGC)',cat:'social',min:'Social Justice',ben:'₹31,000–₹35,000/month for research',el:'SC students doing M.Phil/PhD',url:'https://ugc.ac.in',need:{cats:['sc'],edu:['research'],income:['u1','u25','u6']}},
  {n:'Dr. Ambedkar Scholarship (EBC/DNT)',cat:'social',min:'Social Justice',ben:'Scholarship for EBC/DNT post-matric students',el:'EBC/DNT; income < ₹1L',url:'https://scholarships.gov.in',need:{cats:['ebc','dnt'],edu:['matric','inter','ug','pg'],income:['u1']}},
  {n:'PM-YASASVI Scholarship',cat:'social',min:'Social Justice',ben:'₹75,000–₹1.25 lakh/year',el:'OBC/EBC/DNT; entrance test',url:'https://yet.nta.ac.in',need:{cats:['obc','ebc','dnt'],edu:['matric','inter'],income:['u1','u25']}},
  {n:'Scholarship for Students with Disabilities',cat:'social',min:'Social Justice',ben:'₹3,500/month for higher studies',el:'PwD with 40%+ disability',url:'https://scholarships.gov.in',need:{cats:['sc','st','obc','minority','general','ebc','dnt','pwd'],dis:['above40'],edu:['inter','ug','pg'],income:['u1','u25']}},
  {n:'Post-Matric Scholarship for OBC',cat:'social',min:'Social Justice',ben:'Tuition fees + maintenance',el:'OBC; income < ₹1L/year',url:'https://scholarships.gov.in',need:{cats:['obc'],edu:['matric','inter','ug','pg'],income:['u1']}},
  {n:'Pre-Matric Scholarship for Minorities',cat:'minority',min:'Minority Affairs',ben:'₹1,000–₹10,000/year',el:'Minority; income < ₹1L; class 1–10',url:'https://scholarships.gov.in',need:{cats:['minority'],edu:['school','matric'],income:['u1']}},
  {n:'Post-Matric Scholarship for Minorities',cat:'minority',min:'Minority Affairs',ben:'Tuition + maintenance for post-10th',el:'Minority; income < ₹2L/year',url:'https://scholarships.gov.in',need:{cats:['minority'],edu:['matric','inter','ug','pg','professional'],income:['u1','u25']}},
  {n:'Merit-cum-Means Scholarship (Minority)',cat:'minority',min:'Minority Affairs',ben:'₹20,000 fees + ₹10,000 maintenance',el:'Minority; professional courses; income < ₹2.5L',url:'https://scholarships.gov.in',need:{cats:['minority'],edu:['ug','professional'],income:['u1','u25']}},
  {n:'Maulana Azad National Fellowship',cat:'minority',min:'Minority Affairs',ben:'₹31,000–₹35,000/month for research',el:'NET-qualified minority students',url:'https://manf.ugc.ac.in',need:{cats:['minority'],edu:['research'],income:['u1','u25','u6']}},
  {n:'Begum Hazrat Mahal Scholarship',cat:'minority',min:'Minority Affairs',ben:'₹10,000–₹12,000/year for girls',el:'Minority girls; income < ₹2L',url:'https://scholarships.gov.in',need:{cats:['minority'],edu:['matric','inter'],income:['u1','u25'],gen:['female']}},
  {n:'Padho Pardesh — Abroad Study',cat:'minority',min:'Minority Affairs',ben:'Interest subsidy on education loans',el:'Minority; masters/PhD abroad; income < ₹6L',url:'https://minorityaffairs.gov.in',need:{cats:['minority'],edu:['pg','research'],income:['u1','u25','u6']}},
  {n:'Naya Savera Free Coaching',cat:'minority',min:'Minority Affairs',ben:'Free coaching for UPSC/SSC/Banking',el:'Minority; income < ₹6L; pre-service exams',url:'https://minorityaffairs.gov.in',need:{cats:['minority'],income:['u1','u25','u6']}},
  {n:'AICTE Pragati Scholarship for Girls',cat:'education',min:'Education',ben:'₹50,000/year for technical education',el:'Girls in AICTE-approved institutions; income < ₹8L',url:'https://scholarships.gov.in',need:{cats:['sc','st','obc','minority','general','ebc','dnt'],edu:['ug','professional'],income:['u1','u25','u6','u8'],gen:['female']}},
  {n:'Central Sector Scheme of Scholarships',cat:'education',min:'Education',ben:'₹10,000–₹20,000/year for merit students',el:'Top 20 percentile in class 12; income < ₹8L',url:'https://scholarships.gov.in',need:{cats:['sc','st','obc','minority','general','ebc','dnt'],edu:['ug'],income:['u1','u25','u6','u8']}},
  {n:'INSPIRE Scholarship (DST)',cat:'education',min:'Science & Technology',ben:'₹80,000/year for science students',el:'Top 1% in class 12; natural science',url:'https://online-inspire.gov.in',need:{cats:['sc','st','obc','minority','general','ebc','dnt'],edu:['ug','pg'],income:['u1','u25','u6','u8','a8']}},
  {n:'Post-Matric Scholarship for ST',cat:'tribal',min:'Tribal Affairs',ben:'Tuition + maintenance for ST students',el:'ST; income < ₹2.5L',url:'https://scholarships.gov.in',need:{cats:['st'],edu:['matric','inter','ug','pg','professional'],income:['u1','u25']}},
  {n:'Top Class Education for ST',cat:'tribal',min:'Tribal Affairs',ben:'Full fees at premier institutions',el:'ST students in top 227 institutions',url:'https://scholarships.gov.in',need:{cats:['st'],edu:['ug','pg','research'],income:['u1','u25']}},
  {n:'One Stop Centre (Sakhi)',cat:'women',min:'Women & Child Development',ben:'Medical, legal, police, shelter integrated support',el:'Women affected by any form of violence',url:'https://wcd.nic.in',need:{gen:['female']}},
  {n:'Mahila Shakti Kendra',cat:'women',min:'Women & Child Development',ben:'Skill development & digital literacy for rural women',el:'Rural women in aspirational districts',url:'https://wcd.nic.in',need:{gen:['female']}},
  {n:'PM Kaushal Vikas Yojana (PMKVY)',cat:'labour',min:'Skill Development',ben:'Free skill training + ₹8,000 reward on certification',el:'Indian youth; school/college dropouts welcome',url:'https://pmkvyofficial.org',need:{emp:['yes']}},
  {n:'Seekho Aur Kamao (Minority)',cat:'minority',min:'Minority Affairs',ben:'Free skill training + placement for minority youth',el:'Minority youth; income < ₹6L',url:'https://minorityaffairs.gov.in',need:{cats:['minority'],income:['u1','u25','u6'],emp:['yes']}},
];

const catCfg = {
  social:   {c:'var(--or)',   bg:'var(--or3)',   lbl:'Social Justice'},
  minority: {c:'var(--teal)', bg:'var(--teal3)', lbl:'Minority'},
  education:{c:'var(--grn)',  bg:'var(--grnl)',  lbl:'Education'},
  women:    {c:'var(--pur)',  bg:'var(--purl)',  lbl:'Women'},
  tribal:   {c:'var(--yel)',  bg:'var(--yell)',  lbl:'Tribal'},
  labour:   {c:'var(--blu)',  bg:'var(--blu3)',  lbl:'Skill & Labour'},
};

// ── DOCUMENT GUIDE (8 types) ──────────────────────
const docData = {
  caste:{title:'Caste Certificate',icon:'🏷️',desc:'Required for SC/ST/OBC scholarships, job reservations, and all government benefits. Must be issued by competent authority — NOT a notary.',steps:[
    {t:'Get Application Form',d:'Visit your local SDM/Tehsildar/Circle Officer office. Get the caste certificate application form (free). In many states, also available on DigiLocker or State e-District portal.',tip:'Check your state\'s e-District portal first — online applications save queuing time.'},
    {t:'Prepare Documents',d:'You\'ll need: (1) Aadhaar Card, (2) Father\'s caste certificate or school leaving certificate mentioning caste, (3) Passport size photos, (4) Residence proof, (5) Self-declaration affidavit.'},
    {t:'Submit Application',d:'Submit to the SDM/Tehsildar office. They will issue an acknowledgment slip with a reference number. Keep this safe.'},
    {t:'Verification Visit',d:'An officer may visit your home for verification, especially for new applications. Ensure family members are available.'},
    {t:'Collect Certificate',d:'Usually takes 15–30 days. Collect from the issuing office or check your e-District account. Verify your name spelling matches your Aadhaar exactly.',tip:'If name doesn\'t match Aadhaar, NSP application will be rejected.'},
  ],docs:['Aadhaar Card (applicant + father/guardian)','Father\'s caste certificate (if available)','School Transfer/Leaving Certificate','Residence proof (Ration Card / Voter ID)','Passport size photos (2–4)','Self-declaration affidavit (on stamp paper)'],warn:'Caste certificates signed by Notary Public are NOT valid. Only SDM, Tehsildar, Revenue Officer, or District Magistrate signatures are accepted.'},

  income:{title:'Income Certificate',icon:'💰',desc:'Required to prove family\'s annual income for scholarships. The definition of "income" for scholarships is TOTAL income — not taxable income.',steps:[
    {t:'Visit SDM/Tehsildar Office',d:'Income certificates are issued by the local Revenue Officer / SDM / Tehsildar. In some states, also available via e-District portal online.',tip:'For scholarships, "income" = ALL sources including agricultural income, rent, pension. Not just salary.'},
    {t:'Prepare Documents',d:'Salary slips (if employed), Bank statements (6 months), Agricultural land records (if applicable), Aadhaar, Residence proof, Ration card.'},
    {t:'Officer Visit / Verification',d:'Revenue officer may visit for field verification. Be truthful about all income sources. False declaration is a criminal offense.',tip:'Income must be stated as per the scholarship scheme\'s calculation method — includes all family income.'},
    {t:'Collection & Validity',d:'Valid for 1 year (for most scholarship schemes). For multi-year courses, you need the certificate for the year of ADMISSION only.'},
  ],docs:['Aadhaar Card','Salary slips / Form 16 (if salaried)','Bank passbook (6 months)','Land records / Khasra (if farmer)','Ration Card','Residence proof'],warn:'NSP requires income = ALL sources of family income, including agricultural. Certificates older than 1 year are not accepted.'},

  domicile:{title:'Domicile / Residence Certificate',icon:'🏠',desc:'Proves you are a resident of a particular state. For NSP: you must apply under your HOME state, even if studying elsewhere.',steps:[
    {t:'Visit Revenue Office',d:'Apply at the SDM/Tehsildar/MRO office of the district where you have been residing. Online via e-District portal in most states.',tip:'NSP Critical: Apply under your STATE OF DOMICILE, not where your college is located. Most common NSP error.'},
    {t:'Documents Needed',d:'Aadhaar Card, Birth Certificate or class 10 certificate, Residence proof for 3–5 years (Voter ID / Ration Card / Property documents), Photos.'},
    {t:'Submit & Wait',d:'Processing time: 7–21 days depending on state. Track via e-District portal if applied online.'},
  ],docs:['Aadhaar Card','Birth Certificate or Class 10 Certificate','Voter ID or Ration Card','Electricity/Water bill (for address proof)','Passport size photos'],warn:'Students studying in a different state must apply for NSP scholarships under their HOME/DOMICILE state, not study-state.'},

  aadhaar:{title:'Aadhaar–Bank Seeding',icon:'🪪',desc:'Your Aadhaar must be linked to your bank account for DBT scholarship transfer. Mandatory from 2025 onwards.',steps:[
    {t:'Check Current Status',d:'Visit NPCI BASE platform: npci.org.in/what-we-do/aadhaar-seeding or check your bank\'s net banking portal.',tip:'Status shows: Aadhaar Mapper / NPCI Mapper — both must be active for DBT.'},
    {t:'Link via Bank Branch',d:'Visit your bank branch with Aadhaar card. Fill the Aadhaar linking form. Staff will update immediately or within 24 hours.'},
    {t:'Link via Net Banking',d:'Most banks: Login → Service Requests / Profile Settings → Link Aadhaar → Enter Aadhaar number → OTP verification.',tip:'If your bank account has a "limited KYC" tag, full KYC is needed first before Aadhaar seeding.'},
    {t:'Link via UMANG App',d:'Download UMANG app → Aadhaar section → Aadhaar Seeding service. Verify via OTP.'},
    {t:'Re-verify on NSP',d:'After seeding, update Aadhaar details on NSP if there was a mismatch. Use the OTR correction option on scholarships.gov.in.',tip:'Allow 48–72 hours after seeding before scholarship payment can be processed via PFMS.'},
  ],docs:['Aadhaar Card (original)','Bank passbook or cheque book (for account number)','Registered mobile number linked to Aadhaar'],warn:'Scholarship money is transferred ONLY to the Aadhaar-seeded bank account. Check seeding status BEFORE submitting NSP application.'},

  bonafide:{title:'Bonafide Certificate',icon:'🎓',desc:'Issued by your school/college confirming you are currently enrolled. Required for NSP scholarship applications.',steps:[
    {t:'Request from Institution',d:'Visit your college/school\'s scholarship cell, accounts section, or administrative office. Mention it is for NSP/government scholarship application.',tip:'Ask for it to be on official letterhead with institution seal.'},
    {t:'Content to Verify',d:'Check that the certificate mentions: your full name (matching Aadhaar), course name, enrollment number, academic year, institute name and recognition status.'},
    {t:'Upload on NSP',d:'Scan clearly at 300 DPI. Save as PDF/JPEG under 200KB. File name should not contain special characters.'},
  ],docs:['Nothing extra needed — request from institution','Bring your admission letter / enrollment proof if newly admitted'],warn:'If your institute is not on NSP\'s recognized list, your application will be rejected. Verify institute code on NSP before applying.'},

  disability:{title:'Disability Certificate (UDID)',icon:'♿',desc:'The Unique Disability ID (UDID) card is the official document for PwD benefits. Old-format certificates are being phased out.',steps:[
    {t:'Apply for UDID Online',d:'Visit swavlambancard.gov.in → Apply for UDID card. Fill details including disability type, percentage, and medical history.',tip:'UDID replaces all old disability certificates. Apply now if you have an old certificate.'},
    {t:'Medical Assessment',d:'You will be called to a designated Government hospital/medical board for assessment of disability type and percentage. Bring all old medical records.'},
    {t:'Certificate Issued',d:'After assessment, a provisional/final UDID certificate is issued. Physical UDID card is mailed within 30–60 days.',tip:'For 40%+ disability — eligible for scholarship, job reservations. Less than 40% — limited benefits.'},
  ],docs:['Aadhaar Card','Old disability certificate (if any)','Medical records related to disability','Passport size photo'],warn:'Apply early. If your disability type has been recently added to the RPwD 2016 list (21 types), you may need fresh assessment even with old certificate.'},

  rti:{title:'RTI Application',icon:'📁',desc:'The RTI Act gives you the right to request any information from government bodies. Response must come within 30 days.',steps:[
    {t:'Identify the Right Department',d:'Write to the Public Information Officer (PIO) of the specific department holding the information. For NSP scholarship: RTI to the concerned Ministry.',tip:'Wrong department = transfer of application + delay. Research which department holds the info before filing.'},
    {t:'Write the Application',d:'Write in simple language — no format required. State: your name, address, specific information sought (be precise), preferred format. Attach ₹10 fee (postal order / court fee stamp). BPL = free.'},
    {t:'Submit',d:'By post, hand delivery, or online at rtionline.gov.in (for central government). Many state govts have separate RTI portals.',tip:'Get acknowledgment / receipt. This is your proof of submission.'},
    {t:'Wait for Response',d:'30 days for normal information. 48 hours if life/liberty is at stake. If no response in 30 days, it is deemed refused.'},
    {t:'Appeal if Denied',d:'First Appeal: to the First Appellate Authority (same department) within 30 days. Second Appeal: to CIC at cic.gov.in within 90 days.'},
  ],docs:['Written application (no specific format)','₹10 fee — Postal Order / Court Fee Stamp (BPL = free)','Proof of BPL status if claiming fee exemption'],warn:'You cannot ask for opinions, Cabinet notes, information affecting national security, or personal information of third parties under RTI.'},

  minority:{title:'Minority Community Certificate',icon:'🕌',desc:'Needed for Ministry of Minority Affairs scholarships. Issued by the competent authority of your state.',steps:[
    {t:'Identify Your Minority Community',d:'6 notified minority communities: Muslim, Christian, Sikh, Buddhist, Jain, Parsi. You must belong to one of these.'},
    {t:'Get from SDM/Competent Authority',d:'Apply at your local SDM / Tehsildar office. Some states have specific forms. Alternatively, a certificate from your religious institution may be accepted.',tip:'Self-declaration is accepted for Pre-Matric Minority Scholarship. Post-Matric and MCM require proper authority-signed certificate.'},
    {t:'Verify on NSP Upload',d:'Ensure the certificate mentions your specific community name and has official seal + signature.'},
  ],docs:['Aadhaar Card','Proof of religious affiliation if available','Application form from SDM office'],warn:'NSP scholarship applications for minority communities require the certificate to be issued by a competent authority, NOT self-declaration (except Pre-Matric scheme).'},
};

// ── GRIEVANCE PORTALS (12) ──────────────────────
const grievPortals = [
  {n:'CPGRAMS',ico:'🏛️',bg:'var(--blu3)',c:'var(--blu)',desc:'Centralised Public Grievance Redress and Monitoring System — file complaints against any central government ministry or department.',tags:['Central Govt','Most Effective','All Issues'],url:'https://pgportal.gov.in'},
  {n:'NHRC — National Human Rights Commission',ico:'⚖️',bg:'var(--or3)',c:'var(--or)',desc:'For human rights violations by state authorities, police, and government bodies.',tags:['Human Rights','Police Misconduct','State Violence'],url:'https://nhrc.nic.in'},
  {n:'NCW — National Commission for Women',ico:'♀️',bg:'var(--purl)',c:'var(--pur)',desc:'Complaints related to domestic violence, sexual harassment, dowry, rape, trafficking, and gender discrimination.',tags:['Women','Violence','Harassment'],url:'https://ncw.nic.in'},
  {n:'NCM — National Commission for Minorities',ico:'🕌',bg:'var(--yell)',c:'var(--yel)',desc:'Discrimination, harassment, or denial of rights to minority communities.',tags:['Minorities','Discrimination','Religious Rights'],url:'https://ncm.nic.in'},
  {n:'NCSC — National Commission for Scheduled Castes',ico:'🛡️',bg:'var(--grnl)',c:'var(--grn)',desc:'Caste-based atrocities, discrimination, reservation violations, and SC rights violations.',tags:['SC Rights','Caste Discrimination','Atrocity'],url:'https://ncsc.nic.in'},
  {n:'NCST — National Commission for Scheduled Tribes',ico:'🌿',bg:'var(--yell)',c:'var(--yel)',desc:'ST rights violations, forest rights, land grabbing, tribal welfare scheme denials.',tags:['ST Rights','Tribal','Forest Rights'],url:'https://ncst.nic.in'},
  {n:'SHe-Box — POSH Complaints',ico:'💼',bg:'var(--purl)',c:'var(--pur)',desc:'Workplace sexual harassment complaints for both government and private sector employees.',tags:['POSH','Workplace','Sexual Harassment'],url:'https://shebox.nic.in'},
  {n:'NSP Grievance Portal',ico:'📚',bg:'var(--blu3)',c:'var(--blu)',desc:'For scholarship-related issues: payment not received, application rejected, Aadhaar linking problems.',tags:['NSP','Scholarships','Payment Issues'],url:'https://scholarships.gov.in'},
  {n:'Lokpal of India',ico:'🔍',bg:'var(--or3)',c:'var(--or)',desc:'Corruption complaints against central government officers. Established under Lokpal Act 2013.',tags:['Corruption','Bribery','Central Govt Officers'],url:'https://lokpal.gov.in'},
  {n:'CVC — Central Vigilance Commission',ico:'🏢',bg:'var(--yell)',c:'var(--yel)',desc:'Corruption by central government employees. Focus on PSUs, banks, and ministries.',tags:['Corruption','PSUs','Banks'],url:'https://cvc.gov.in'},
  {n:'NALSA — Free Legal Aid',ico:'⚖️',bg:'var(--grnl)',c:'var(--grn)',desc:'Request free legal representation. Call 15100 or apply online. For SC/ST, women, PwD, income < ₹1L/year.',tags:['Free Legal Aid','Lok Adalat','All Categories'],url:'https://nalsa.gov.in'},
  {n:'RTI Online — Central Govt',ico:'📁',bg:'var(--blu3)',c:'var(--blu)',desc:'File Right to Information requests online to any central government ministry or department.',tags:['RTI','Information','All Ministries'],url:'https://rtionline.gov.in'},
];

// ── HELPLINES (12) ──────────────────────────────
const helplines = [
  {num:'112',     name:'Emergency',          desc:'Police, fire, ambulance — single emergency number',          c:'var(--or)',   bg:'var(--or3)'},
  {num:'14433',   name:'NHRC Helpline',       desc:'National Human Rights Commission — rights violations',       c:'var(--blu)',  bg:'var(--blu3)'},
  {num:'181',     name:'Women Helpline',      desc:'24/7 support for women in distress or violence',             c:'var(--pur)',  bg:'var(--purl)'},
  {num:'1098',    name:'Childline',           desc:'Children in distress, abuse, or needing care',               c:'var(--or)',   bg:'var(--or3)'},
  {num:'14567',   name:'Senior Citizen',      desc:'Abuse of elderly citizens; labour law grievances',           c:'var(--yel)',  bg:'var(--yell)'},
  {num:'1800-11-0031',name:'Disability',      desc:'Rights and assistance for persons with disabilities',        c:'var(--blu)',  bg:'var(--blu3)'},
  {num:'1930',    name:'Cyber Crime',         desc:'Online fraud, financial cyber crime, digital harassment',    c:'var(--blu)',  bg:'var(--blu3)'},
  {num:'15100',   name:'NALSA Legal Aid',     desc:'Free legal services and Lok Adalat guidance',                c:'var(--grn)',  bg:'var(--grnl)'},
  {num:'1800-11-4000',name:'Consumer',        desc:'Consumer fraud, defective products, service issues',         c:'var(--yel)',  bg:'var(--yell)'},
  {num:'011-26178854',name:'NCM Minorities',  desc:'Minority community rights and discrimination',               c:'var(--yel)',  bg:'var(--yell)'},
  {num:'0120-6619540',name:'NSP Helpdesk',    desc:'Scholarship portal issues, payment problems (10AM–6PM)',     c:'var(--blu)',  bg:'var(--blu3)'},
  {num:'1800-11-6090',name:'SC/ST Helpline',  desc:'Atrocities against Scheduled Castes and Tribes',            c:'var(--grn)',  bg:'var(--grnl)'},
];

// ── COMPLAINT WIZARD DATA ──────────────────────
const portals = {
  discrimination:[{n:'NHRC',url:'https://nhrc.nic.in',note:'Primary body for rights violations'},{n:'National Commission for SC',url:'https://ncsc.nic.in',note:'Caste-based atrocities'},{n:'National Commission for Minorities',url:'https://ncm.nic.in',note:'Religious/linguistic minority issues'},{n:'CPGRAMS',url:'https://pgportal.gov.in',note:'Central govt grievance portal'}],
  harassment:[{n:'National Commission for Women',url:'https://ncw.nic.in',note:'Gender-based harassment'},{n:'SHe-Box (POSH)',url:'https://shebox.nic.in',note:'Workplace sexual harassment'},{n:'One Stop Centre',url:'https://wcd.nic.in',note:'Call 181 — integrated women support'},{n:'Police — File FIR',url:'#',note:'Criminal harassment — file FIR'}],
  corruption:[{n:'Lokpal of India',url:'https://lokpal.gov.in',note:'Senior central govt officers'},{n:'CVC',url:'https://cvc.gov.in',note:'Central government employees'},{n:'CPGRAMS',url:'https://pgportal.gov.in',note:'Central public grievance portal'}],
  police:[{n:'SP/DCP Office',url:'#',note:'Superintendent of Police for misconduct'},{n:'State SHRC',url:'#',note:'Custodial torture, illegal detention'},{n:'NHRC',url:'https://nhrc.nic.in',note:'National Human Rights Commission'},{n:'High Court — Writ',url:'#',note:'Habeas corpus under Article 226'}],
  scheme:[{n:'CPGRAMS',url:'https://pgportal.gov.in',note:'Most effective central grievance portal'},{n:'NSP Grievance Portal',url:'https://scholarships.gov.in',note:'For scholarship-specific issues'},{n:'Ministry of Social Justice',url:'https://socialjustice.gov.in',note:'SC/OBC scheme denials'}],
  rights:[{n:'NHRC',url:'https://nhrc.nic.in',note:'Primary body for rights violations'},{n:'High Court — Art. 226',url:'#',note:'Writ petition — state level'},{n:'Supreme Court — Art. 32',url:'#',note:'Fundamental rights violation'},{n:'CPGRAMS',url:'https://pgportal.gov.in',note:'Govt grievance portal'}],
};

const docsMap = {
  discrimination:['Aadhaar Card / Identity Proof','Evidence (messages, witnesses, photos)','FIR copy if police complaint filed','Caste/religion certificate if applicable'],
  harassment:['Aadhaar Card','Evidence (screenshots, messages, CCTV)','Medical report if physical harm occurred','List of witnesses'],
  corruption:['Evidence of bribery (video/audio/transaction records)','Official receipts or communications','ID proof and details of accused official'],
  police:['FIR copy if available','Medical report if injured','Witness details','Aadhaar Card'],
  scheme:['Application reference/scheme ID','Bank details (for DBT issues)','Income certificate, caste certificate','Rejection letter if received'],
  rights:['Aadhaar Card','Documentary proof of violation','Details of state/authority responsible','Prior complaints filed'],
};

const issueLabel = {
  discrimination:'Caste / Religious Discrimination', harassment:'Harassment / Violence',
  corruption:'Corruption / Bribery', police:'Police Misconduct',
  scheme:'Scheme / Scholarship Denied', rights:'Rights Violation'
};

// ── RIGHTS MODAL DATA ──────────────────────────
const rData = {
  fundamental:{title:'⚖️ Fundamental Rights (Art. 12–35)',blocks:[
    {t:'Right to Equality (Art. 14–18)',d:'Equal before law. No discrimination on religion, race, caste, sex, or birth. Untouchability abolished under Art. 17 — punishable under PCR Act 1955.',bg:'var(--or3)',bc:'var(--or)'},
    {t:'Right to Freedom (Art. 19–22)',d:'Freedom of speech, assembly, movement, residence, and profession. If arrested, must be informed of reason and produced before magistrate within 24 hours.',bg:'var(--blu3)',bc:'var(--blu)'},
    {t:'Right against Exploitation (Art. 23–24)',d:'Prohibition of trafficking, forced labour, and child labour in factories/mines (under 14). Violation is a criminal offense.',bg:'var(--grnl)',bc:'var(--grn)'},
    {t:'Freedom of Religion (Art. 25–28)',d:'Freedom to profess, practice, and propagate religion. No compulsory religious instruction in state-funded schools.',bg:'var(--yell)',bc:'var(--yel)'},
    {t:'Cultural & Educational Rights (Art. 29–30)',d:'Minorities can conserve language/culture and establish educational institutions. No discrimination in state-aided institutions.',bg:'var(--purl)',bc:'var(--pur)'},
    {t:'Right to Constitutional Remedies (Art. 32)',d:'Approach the Supreme Court directly for any fundamental rights violation. Called the "heart and soul of the Constitution" by Dr. Ambedkar.',bg:'var(--or3)',bc:'var(--or)'},
  ]},
  minority:{title:'🕌 Minority Rights (Art. 25–30)',blocks:[
    {t:'Freedom of Religion (Art. 25)',d:'Right to freely profess, practice, and propagate religion — subject only to public order, morality, and health.',bg:'var(--yell)',bc:'var(--yel)'},
    {t:'Manage Religious Affairs (Art. 26)',d:'Religious denominations can establish institutions for religious/charitable purposes and manage their own affairs.',bg:'var(--blu3)',bc:'var(--blu)'},
    {t:'Minority Educational Rights (Art. 30)',d:'All minorities (religious or linguistic) have the right to establish and administer educational institutions.',bg:'var(--grnl)',bc:'var(--grn)'},
    {t:'National Commission for Minorities',d:'Investigates discrimination complaints. Contact: 011-26178854 or ncm.nic.in.',bg:'var(--purl)',bc:'var(--pur)'},
  ]},
  scst:{title:'🛡️ SC/ST Protections',blocks:[
    {t:'SC/ST (Prevention of Atrocities) Act, 1989',d:'Stringent law against caste-based atrocities — verbal abuse, forced labor, social boycott, sexual exploitation. Special fast-track courts.',bg:'var(--grnl)',bc:'var(--grn)'},
    {t:'Constitutional Reservations',d:'SC 15% / ST 7.5% reservation in Parliament, state assemblies, government jobs, and higher education.',bg:'var(--blu3)',bc:'var(--blu)'},
    {t:'Abolition of Untouchability (Art. 17)',d:'Untouchability abolished. Practice is punishable under the Protection of Civil Rights Act, 1955.',bg:'var(--or3)',bc:'var(--or)'},
    {t:'What to Do — Immediate Steps',d:'File FIR immediately under SC/ST Act. If refused, approach DSP directly. File with NCSC. NALSA (15100) provides free legal aid.',bg:'var(--yell)',bc:'var(--yel)'},
  ]},
  women:{title:"♀️ Women's Rights",blocks:[
    {t:'Domestic Violence Act, 2005',d:'Covers physical, sexual, verbal, emotional, economic abuse. Get a Protection Order or Residence Order from Magistrate via Protection Officer. Call 181.',bg:'var(--purl)',bc:'var(--pur)'},
    {t:'POSH Act — Workplace Harassment',d:'Every workplace with 10+ employees must have an ICC. File at SHe-Box (shebox.nic.in) or NCW.',bg:'var(--or3)',bc:'var(--or)'},
    {t:'Anti-Dowry Law (Section 498A IPC)',d:'Giving/taking dowry is criminal (up to 5 years). Cruelty for dowry — file FIR under 498A.',bg:'var(--yell)',bc:'var(--yel)'},
    {t:'Equal Remuneration Act',d:'Employers must pay equal wages to men and women for the same work. Complaint to Labour Commissioner or Labour Court.',bg:'var(--grnl)',bc:'var(--grn)'},
  ]},
  disability:{title:'♿ Disability Rights (RPwD Act 2016)',blocks:[
    {t:'RPwD Act 2016 — 21 Disability Types',d:'Recognizes 21 disability types including mental illness, autism, learning disabilities. 4% reservation in govt jobs, 5% in higher education.',bg:'var(--blu3)',bc:'var(--blu)'},
    {t:'Unique Disability ID (UDID)',d:'Every person with disability entitled to UDID card. Apply at swavlambancard.gov.in. Required for all government benefits.',bg:'var(--grnl)',bc:'var(--grn)'},
    {t:'Accessibility Rights',d:'All public buildings, transport, and information systems must be accessible. Private companies with 20+ employees must ensure workplace accessibility.',bg:'var(--yell)',bc:'var(--yel)'},
    {t:'Helpline & Grievance',d:'Disability Helpline: 1800-11-0031. Complaints at disabilityaffairs.gov.in or Chief Commissioner for Persons with Disabilities.',bg:'var(--or3)',bc:'var(--or)'},
  ]},
  rti:{title:'📁 Right to Information (RTI Act 2005)',blocks:[
    {t:'What is RTI?',d:'Request any information held by public authorities. Response within 30 days (48 hours for life/liberty). Free for BPL citizens; ₹10 for others.',bg:'var(--yell)',bc:'var(--yel)'},
    {t:'How to File',d:'Write to the PIO of the relevant department. Send by post, hand deliver, or online at rtionline.gov.in for central govt.',bg:'var(--blu3)',bc:'var(--blu)'},
    {t:'Appeals Process',d:'Denied? First Appeal to FAA within 30 days. Second Appeal to CIC at cic.gov.in within 90 days.',bg:'var(--grnl)',bc:'var(--grn)'},
    {t:'NSP RTI',d:'File RTI to Ministry of Social Justice/Minority Affairs for scholarship status, rejection reasons, or disbursement details.',bg:'var(--or3)',bc:'var(--or)'},
  ]},
};

// ── AI KNOWLEDGE BASE (14 topics) ─────────────
const kb = [
  {k:['nsp','scholarship not received','scholarship payment','pfms','dbt','scholarship stuck','scholarship delay'],
   r:'If your NSP scholarship payment hasn\'t been received:\n\n1. Check status at scholarships.gov.in → your dashboard → "Application Status"\n2. If "Approved" but no payment — check if your Aadhaar is seeded to your bank account\n3. Verify your IFSC code and account number entered on NSP are correct\n4. Track via pfms.nic.in → "Know Your Payments"\n5. File NSP Grievance: Login → Services → Grievance Registration\n6. Call NSP Helpdesk: 0120-6619540 (Mon–Fri, 10AM–6PM)\n\nCommon causes: Aadhaar not seeded, wrong account number, application still "Defective" at verification stage.'},
  {k:['caste certificate','sc certificate','st certificate','obc certificate','how to get caste'],
   r:'To get a Caste Certificate:\n\n1. Visit your local SDM/Tehsildar/Circle Officer office\n2. Bring: Aadhaar, father\'s caste certificate (if available), school leaving certificate, residence proof, photos\n3. Submit application form (free in most states)\n4. Officer may visit for verification\n5. Collect in 15–30 days\n\n⚠️ Critical: Only SDM/Tehsildar/Revenue Officer signatures are valid. Notary certificates are REJECTED on NSP.\n\nOnline: Check your state\'s e-District portal — many states accept online applications.'},
  {k:['income certificate','how to get income','income proof'],
   r:'Income Certificate procedure:\n\n1. Apply at SDM/Tehsildar office or state e-District portal\n2. Documents needed: salary slips, bank statements (6 months), land records (if farmer), Aadhaar, residence proof\n3. NSP counts ALL income sources — salary + agricultural + rent + pension.\n4. Valid for 1 year. For multi-year courses, only needed at time of admission.\n\n⚠️ NSP-specific: Income certificate must be for the financial year IMMEDIATELY PRECEDING the scholarship year.'},
  {k:['aadhaar seeding','aadhaar link','bank link aadhaar','dbt not working'],
   r:'To link Aadhaar to bank account for scholarship DBT:\n\n1. Visit bank branch with Aadhaar card → fill Aadhaar linking form\n2. OR use net banking: Service Requests → Link Aadhaar → OTP verification\n3. OR use UMANG app → Aadhaar Seeding service\n4. Check status at npci.org.in (NPCI BASE platform)\n\nAllow 48–72 hours after seeding before PFMS can process payment.'},
  {k:['minority scholarship','minority community','maulana azad','pre matric minority','post matric minority'],
   r:'Key scholarships for Minority communities (Muslim/Christian/Sikh/Buddhist/Jain/Parsi):\n\n• Pre-Matric: Class 1–10, income < ₹1L/year. Up to ₹10,000/year.\n• Post-Matric: Post-10th studies, income < ₹2L/year.\n• Merit-cum-Means (MCM): Professional courses, income < ₹2.5L. ₹20,000 fees + ₹10,000 maintenance.\n• Maulana Azad Fellowship: Research (M.Phil/PhD), must be NET-qualified. ₹31,000–35,000/month.\n• Naya Savera: Free coaching for UPSC, SSC, Banking exams.\n\nApply at scholarships.gov.in by Aug–Dec each year.'},
  {k:['fir','first information report','police refuse','police complaint','file fir'],
   r:'How to File an FIR:\n\n1. Go to the police station in whose jurisdiction the crime occurred\n2. Request the SHO (Station House Officer) to register FIR — FREE, your legal right under Section 154 CrPC\n3. If refused:\n   → Write to the DSP/SP directly\n   → File a complaint to the Magistrate under Section 156(3) CrPC\n   → File a Zero-FIR if the crime occurred in another jurisdiction\n4. Always get a FREE copy — this is your right\n5. Note the FIR number for follow-up'},
  {k:['legal aid','free lawyer','nalsa','free legal'],
   r:'Free Legal Aid through NALSA — your right:\n\n✅ Eligible: SC/ST, women, children, PwD, persons in custody, trafficking victims, income < ₹1 lakh/year\n\nHow to get it:\n1. Call NALSA helpline: 15100\n2. Apply online at nalsa.gov.in\n3. Visit your District Legal Services Authority (DLSA)\n\nServices include: Free lawyers, pre-litigation counselling, Lok Adalat for out-of-court settlement, paralegal volunteers.'},
  {k:['rti','right to information','information act','file rti'],
   r:'Filing an RTI Application:\n\n1. Write to the PIO (Public Information Officer) of the department you want info from\n2. Be specific — state exactly what information you need\n3. Pay ₹10 (postal order/court fee stamp). BPL = free.\n4. Send by post, in person, or online at rtionline.gov.in (central govt)\n5. Response must come within 30 days\n\nIf denied: First Appeal to FAA (same dept, 30 days), then Second Appeal to CIC at cic.gov.in (90 days).'},
  {k:['domicile','residence certificate','wrong state nsp','home state','study state'],
   r:'Domicile Certificate and NSP Home State Rule:\n\n⚠️ CRITICAL NSP RULE: You must apply for NSP under your HOME STATE (where you have domicile), NOT the state where your college is located.\n\nHow to get domicile certificate:\n1. Apply at SDM/Tehsildar of your home district\n2. Need: Aadhaar, birth certificate or class 10 certificate, residence proof (Voter ID/Ration card showing 3-5 years residence)\n3. Processing: 7–21 days'},
  {k:['cpgrams','pgportal','grievance portal','where to complain','which portal'],
   r:'For government complaints, use the right portal:\n\n• CPGRAMS (pgportal.gov.in): Any central govt issue — most effective\n• NHRC (nhrc.nic.in): Human rights violations, police misconduct\n• NCW (ncw.nic.in): Women — violence, harassment, discrimination\n• SHe-Box (shebox.nic.in): Workplace sexual harassment (POSH)\n• NSP Grievance (scholarships.gov.in): Scholarship issues specifically\n• Lokpal (lokpal.gov.in): Corruption by central govt officers\n• NCSC (ncsc.nic.in): SC rights violations, caste atrocities\n• RTI Online (rtionline.gov.in): Information requests from central govt'},
  {k:['sc scholarship','post matric sc','national fellowship','top class sc','dalit'],
   r:'Scholarships for SC (Scheduled Caste) students:\n\n• Post-Matric Scholarship: Tuition + maintenance, income < ₹2.5L/year. Apply at scholarships.gov.in\n• Top Class Education: Full fees at 207 premier institutions (IITs, AIIMS, NITs etc)\n• National Fellowship (UGC): ₹31,000/month JRF for M.Phil/PhD research\n• Dr. Ambedkar Scholarship (EBC/DNT): For EBC and Denotified Tribe students\n• PM-YASASVI: ₹75,000–1.25L/year for OBC/EBC/DNT students via entrance exam\n\nDeadline: Typically Aug–Dec. Apply EARLY.'},
  {k:['fundamental right','article 21','article 19','article 14','equality','freedom','life liberty'],
   r:'Your Fundamental Rights (Part III, Art. 12–35):\n\n• Equality (Art. 14–18): Equal before law, no discrimination based on religion/race/caste/sex/birth. Untouchability abolished.\n• Freedom (Art. 19–22): Speech, assembly, movement, profession. If arrested — must be told reason, produced before magistrate within 24 hours.\n• Against Exploitation (Art. 23–24): No forced labour, no child labour in mines/factories under age 14.\n• Religion (Art. 25–28): Freedom to practice and propagate religion.\n• Culture & Education (Art. 29–30): Minorities can run own institutions.\n• Constitutional Remedies (Art. 32): Go directly to Supreme Court for violations.'},
  {k:['disability','rpwd','udid','pwd','handicap','person with disability'],
   r:'Disability Rights under RPwD Act 2016:\n\n• 21 disability types recognized (includes mental illness, learning disabilities, autism)\n• 4% reservation in government jobs (Benchmark disabilities)\n• 5% reservation in higher education institutions\n• UDID card required for all benefits — apply at swavlambancard.gov.in\n• Scholarship: ₹3,500/month for 40%+ disability students in higher education\n• Helpline: 1800-11-0031'},
  {k:['domestic violence','dv act','women violence','harassment at home','protection order'],
   r:'Domestic Violence Act, 2005 protections:\n\n1. Covers: Physical, sexual, verbal/emotional, economic abuse — including by in-laws\n2. You don\'t have to leave your home (Residence Order)\n3. Get a Protection Order from Magistrate via Protection Officer\n4. Immediate help: Call 181 (Women Helpline) or go to nearest One Stop Centre (Sakhi)\n5. Free legal aid via NALSA (15100)\n\nYou can file complaint without a lawyer. The Protection Officer will help you draft the application.'},
];

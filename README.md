# CivicSahayak — नागरिक सहायक

> Your rights. Your schemes. Your language.

A fully offline civic tech web app for Indian citizens — no backend, no framework, no internet required after first load. Built by [Vedant Shinde](https://github.com/vedant131) · MIT-WPU, Pune.

[![MIT License](https://img.shields.io/badge/License-MIT-orange.svg)](LICENSE)
[![HTML](https://img.shields.io/badge/Built%20with-HTML%2FCSS%2FJS-F4651A.svg)]()
[![No Framework](https://img.shields.io/badge/Framework-None-0B7B6B.svg)]()
[![Offline](https://img.shields.io/badge/Works-Offline-1B4FD8.svg)]()

---

## What it does

CivicSahayak is a civic rights portal that helps Indian citizens navigate the government system — without needing a lawyer, internet connection, or knowledge of bureaucratic jargon.

It covers the questions that come up every day:
- *My NSP scholarship hasn't arrived — what do I do?*
- *How do I get a caste certificate?*
- *The police refused to file my FIR — where do I complain?*
- *What schemes am I eligible for?*
- *How do I file an RTI?*

---

## 10 Panels

| Panel | What it does |
|---|---|
| 🏠 **Dashboard** | Hero + live ticker + stat counters + quick-access feature tiles |
| 🎯 **Scheme Eligibility** | 6-field filter → instant match against 23 central government schemes |
| 📄 **Document Guide** | Step-by-step for 8 critical certificates (caste, income, domicile, Aadhaar seeding, bonafide, disability, RTI, minority) |
| ⚖️ **Know Your Rights** | 6 rights categories with constitutional citations and detailed modals |
| 📋 **Complaint Wizard** | 5-step: issue → describe → exact portal → document checklist → action plan |
| 🏛️ **Legal Guidance** | FIR filing timeline + NALSA free legal aid cards |
| 🌐 **Grievance Portals** | 12 official portals (CPGRAMS, NHRC, NCW, NCM, SHe-Box…) with direct links |
| 🔍 **NSP Status Guide** | 5-stage scholarship pipeline + top rejection reasons + fixes |
| 📞 **Helplines** | 12 national emergency numbers with one-tap call |
| 🤖 **AI Assistant** | Local KB chatbot — 14 topics, no API, no internet, 100% private |

---

## Features

- **3 languages** — English / Hinglish / हिंदी, switch instantly from the topbar
- **Eligibility engine** — 23 schemes across 6 filters, instant results with apply links
- **Complaint routing** — 6 issue types mapped to exact portals + document checklists
- **Local AI** — keyword matching across 14 KB topics, no API key needed
- **Animations** — 3D card tilt, click particle burst, ink ripple, text scramble, staggered panel entry, magnetic buttons
- **Zero dependencies** — no npm, no build step, no CDN, no external requests at runtime

---

## Run it

```bash
git clone https://github.com/vedant131/CivicSahayak
cd CivicSahayak
open frontend/index.html
```

No server. No install. Just open and go.

---

## Structure

```
CivicSahayak/
├── frontend/
│   ├── index.html        ← App shell + all 10 panels + navigation
│   ├── css/
│   │   └── style.css     ← Design system + 40+ keyframe animations
│   └── js/
│       ├── data.js       ← All static data: schemes, KB, portals, helplines, rights
│       ├── ui.js         ← Eligibility engine, complaint wizard, AI chat, modals
│       ├── lang.js       ← EN / Hinglish / Hindi translation engine
│       └── anim.js       ← Interactive animations: tilt, burst, scramble, ripple
├── docs/
│   ├── DESIGN_SYSTEM.md
│   └── PANELS.md
├── LICENSE
└── README.md
```

---

## Related

Second project in this civic tech series. The first was **[VidyaSetu](https://github.com/vedant131/VidyaSetu-Bridge-of-Knowledge)** — a scholarship discovery portal for students with an eligibility engine covering schemes from MoSJE and Ministry of Minority Affairs.

---

MIT © [Vedant Shinde](https://github.com/vedant131)

# Financial Literacy and UPI Safety Awareness Website

**Community Engagement Project (CEP)**  
**Institution:** MIT Chhatrapati Sambhajinagar  
**Cohort:** SY B.Tech, Academic Year 2026–27  
**Project Topic:** Financial Literacy and UPI Safety Awareness

---

## 1. Overview

This project is a responsive, accessible, privacy-first educational website developed for our college Community Engagement Project (CEP). It provides practical, non-judgmental guidance on everyday personal budgeting and safe Unified Payments Interface (UPI) practices for college students and community members.

### Core Educational Modules
- **Floating Navigation Bar & Brand Emblem**: Custom SVG Security Shield logo (Teal & Blue gradient with stylized Rupee ₹ and verified security halo), screen-following floating pill design with glassmorphism, dynamic reading progress bar, systematic segmented category links, and a quick-dial **📞 1930 Helpline** pill with pulsing status indicator.
- **Home (Hero Section)**: Symmetrical 50/50 hero presentation pairing the project's educational mission with an interactive **UPI Golden Rule Guardian Card** (*"You NEVER enter a PIN to receive money"*).
- **Money Basics**: Needs vs. Wants, 50/30/20 budgeting rule, emergency funds (3–6 months buffer), simple vs. compound interest, and responsible borrowing checks. Includes an **Interactive Monthly Budget Sandbox** with a synchronized range slider, quick allowance presets (`₹5,000`, `₹10,000`, `₹15,000`, `₹25,000`), and a live proportional visual allocation bar.
- **UPI Safety & Defense**: 
  - **3-Step Safe Transaction Pipeline**: Symmetrical visual flow (Initiation → Verification → Authorization).
  - **6-Point Pre-Payment Checklist**: Clear, actionable verification rules.
  - **30-Second Scam Risk Triage Tool**: Interactive checklist that instantly alerts users to high-risk fraud signals.
  - **PIN vs. OTP Comparison Table**: Detailed distinction with mobile horizontal swipe support.
  - **QR Code & Collect Request Deep Dive**: Explaining why QR codes are strictly for sending money and how scam collect requests function.
- **Interactive Scenarios ("What Would You Do?")**: 5 realistic scenarios with **Category Filter Tabs** (`All`, `QR Codes`, `Impersonation & OTP`, `Pending Debits`, `Collect Requests`, `Remote Apps`), offering instant educational explanations and key takeaways.
- **Knowledge Check (Quiz)**: 10 interactive questions with category tags, progress tracking, scoring summaries, performance tiers, and in-memory retry flows.
- **If Something Goes Wrong (Emergency Protocol)**: Calm 4-step action sequence, direct emergency cards for **Helpline 1930** and **cybercrime.gov.in**, a **1930 Call Preparedness Checklist**, and a **"Copy Incident Report Template"** button with instant toast feedback.
- **Official Sources**: Direct citations to regulatory publications from NPCI, RBI, and the Ministry of Home Affairs.

---

## 2. Quick Start: How to Run the Website

You can run and test the website anywhere with **Node.js / npm**, Python, or by opening the HTML file directly.

### Method 1: Using npm (Recommended for Computer & Mobile Testing)
Open terminal in `c:\cep project`:
```powershell
# Start the local & network server
npm start
# or: npm run dev
```
The terminal will display both your local and network URLs:
- **Local (PC)**: `http://localhost:3000`
- **Network (Mobile Phone)**: `http://192.168.x.x:3000` (open this URL on your phone when connected to the same Wi-Fi network)

*Note: Uses a built-in zero-dependency Node HTTP server (`server.js`), so it runs immediately without needing `npm install`!*

### Method 2: Direct File Opening (Simplest)
1. Navigate to the project directory: `c:\cep project`.
2. Double-click [index.html](file:///c:/cep%20project/index.html) to open it in Google Chrome, Microsoft Edge, Mozilla Firefox, or any modern web browser.

### Method 3: Using Python's Built-in Local Server
```powershell
python -m http.server 8000
```
Then visit: `http://localhost:8000` in your web browser.

---

## 3. Project Architecture

The codebase cleanly separates presentation, educational content, and application behavior:

```
c:\cep project\
├── package.json                  # NPM project metadata & scripts (npm start, npm run dev)
├── server.js                     # Built-in zero-dependency development & mobile-network server
├── index.html                    # Semantic HTML5 document (custom SVG logo, landmarks, accessibility)
├── css\
│   └── styles.css                # Premium, mobile-responsive, high-contrast stylesheet with CSS variables
├── js\
│   ├── data.js                   # Educational content store (scenarios, quiz questions, sources)
│   └── app.js                    # Interaction handlers (navigation, budget sandbox, triage, quiz engines)
├── Antigravity_Financial_Literacy_UPI_Safety_Website_Brief.md  # Original project specification brief
└── README.md                     # Project documentation & student implementation guide
```

---

## 4. Student Implementation Guide & Customization

The website is designed strictly as a public-facing, educational, privacy-first resource with zero tracking and zero credentials collection.

### Customizing Educational Content in `js/data.js`
All questions and scenarios are maintained cleanly in [js/data.js](file:///c:/cep%20project/js/data.js). You can easily:
- **Add or edit quiz questions**: Add an object to the `quizQuestions` array with `question`, `category`, `options`, `correctIndex`, and `explanation`.
- **Add new real-world scenarios**: Add an object to `scenarios` with `situation`, `category`, `question`, `options`, and `takeaway`.
- **Update accessed dates for sources**: Update the `accessedDate` field in `officialSources`.

---

## 5. Research-Led Project Cycle Checklist

Follow this checklist for your college CEP milestone submissions:

- [ ] **Needs Assessment**:
  - [ ] Prepare a short, voluntary, privacy-respecting awareness questionnaire (on paper or via a private college Google Form).
  - [ ] Survey at least 20–30 community peers or campus residents regarding their familiarity with UPI PIN rules and emergency reporting.
- [ ] **Prioritize from Evidence**:
  - [ ] Identify the top 2–3 payment misconceptions from the survey (e.g., "scan QR to receive cashback").
  - [ ] Tailor your live demonstration around those scenarios using this website.
- [ ] **Deliver Community Awareness**:
  - [ ] Present the website and run through the interactive scenarios, the 30-second triage tool, and the quiz with community participants.
  - [ ] Share the **1930** emergency helpline and **cybercrime.gov.in** portal details.
- [ ] **Honest Evaluation & Documentation**:
  - [ ] Record the actual participant headcount in your college CEP project diary.
  - [ ] Document qualitative feedback and participant reactions without collecting or revealing any personal financial data.
  - [ ] Replace the "To be collected" badge in `index.html` with your actual summary findings.
- [ ] **Accessibility & Testing**:
  - [ ] Test the website on mobile phone screens (Chrome / Safari mobile).
  - [ ] Verify that all scenarios and quiz buttons can be operated with the `Tab` and `Enter` keys.
  - [ ] Confirm all official source links open correctly in a new tab.

---

## 6. Official Regulatory Citations

The educational guidance on this website is verified against official publications:
1. **National Payments Corporation of India (NPCI)** — *UPI FAQs & Operating Guidelines*:  
   [https://www.npci.org.in/what-we-do/upi/faqs](https://www.npci.org.in/what-we-do/upi/faqs)
2. **National Payments Corporation of India (NPCI)** — *Fraud Awareness & Safe Digital Payments*:  
   [https://www.npci.org.in/fraud-awareness](https://www.npci.org.in/fraud-awareness)
3. **Reserve Bank of India (RBI)** — *Financial Awareness Messages (FAME 2024)*:  
   [https://www.rbi.org.in/commonperson/images/FAME202426022024.pdf](https://www.rbi.org.in/commonperson/images/FAME202426022024.pdf)
4. **Ministry of Home Affairs, Government of India** — *National Cyber Crime Reporting Portal & 1930 Helpline*:  
   [https://cybercrime.gov.in/](https://cybercrime.gov.in/)

---

## 7. Academic Printing & PDF Export

The site includes full `@media print` styling:
- Simply press `Ctrl + P` (or `Cmd + P` on Mac) in your browser.
- Floating buttons and navigation bars are automatically hidden.
- All cards, tables, scenarios, and official citations format neatly with high-contrast borders and printed URLs, making it easy to include as an appendix in your college CEP project report.

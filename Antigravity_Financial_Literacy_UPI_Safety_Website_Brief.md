# Antigravity Website Build Brief

## Project

**Financial Literacy and UPI Safety Awareness**  
Community Engagement Project (CEP), MIT Chhatrapati Sambhajinagar  
SY B.Tech, Academic Year 2026–27

## Instructions for Antigravity

Build a polished, responsive, accessible educational website for a college community-awareness project. Treat this document as the website specification. Implement a working website, not just a design mockup. Use sensible defaults where a detail is unspecified, and keep the code easy for a student to understand and maintain.

Do not invent the students’ names, roll numbers, project guide, community-survey findings, number of people reached, impact, or deployment status. Use clearly marked editable placeholders for student/team details. Survey and field-activity results must be shown as “To be collected” or omitted until the project team supplies real data. Do not copy another project’s names, survey results, content, graphics, or screenshots.

## 1. Purpose and audience

Help college students and community members make safer everyday money decisions and use UPI more confidently. Explain concepts in plain English, with short examples and actionable steps. The content should work for readers with varied digital and financial literacy. Keep the tone calm, respectful, practical, and non-judgmental.

This is an educational awareness resource, not a bank, payment application, investment service, legal service, or personalized financial adviser. Do not enable or simulate real payments.

## 2. Learning outcomes

After using the site, a visitor should be able to:

1. Make a simple spending plan and distinguish needs, wants, saving, and borrowing.
2. Explain basic ideas such as budgeting, emergency savings, interest, and responsible borrowing without being promised a particular financial outcome.
3. Recognize that a UPI PIN authorizes a payment and must remain secret.
4. Identify common scam signals involving fake payment/collect requests, QR codes, impersonation, suspicious links, screen-sharing apps, and false refunds or rewards.
5. Pause, verify the recipient and amount in the payment app, and know what to do after a suspected fraud or failed transaction.

## 3. Site structure

Create a single-page site with clear navigation and distinct sections, or a small multi-page site if that produces a cleaner, more usable result. The following content must be easy to find from the main navigation:

- **Home** — project purpose, short safety message, and clear calls to action to learn or take the quiz.
- **Money Basics** — budgeting, needs versus wants, saving, emergency funds, interest, and borrowing basics.
- **UPI Safety** — safe payment checklist, PIN and OTP protection, QR-code and collect-request guidance, recipient verification, and common scam patterns.
- **Scenarios** — short realistic situations with “What would you do?” choices and a clear explanation after each answer.
- **Knowledge Check** — an interactive quiz with feedback and a final score.
- **If Something Goes Wrong** — immediate practical steps and official reporting links.
- **About the Project** — CEP purpose, institution/programme fields, team placeholders, guide placeholder, and a note that community activity/results will be added only after completion.
- **Sources** — official references used to prepare the educational material, with title, organization, and direct link.

Use a persistent but unobtrusive navigation bar, a visible mobile menu, a footer with key links, and a “Back to top” affordance on long pages.

## 4. Content and interactions

### Money Basics

Use concise explanations, visual examples, and simple tables or cards. Include a small sample monthly budget using fictional rupee values and label it as an example, not a recommendation. Explain that goals and budgets vary by person. Avoid claims that saving or investing guarantees returns. Explain borrowing in terms of total repayment, interest, fees, and checking trusted lender details; do not recommend a particular financial product.

### UPI Safety checklist

Include a memorable checklist before paying:

- Verify the person or merchant and the displayed recipient name.
- Check the amount and payment details before authorizing.
- Never disclose a UPI PIN, OTP, password, or full card details to a caller or message sender.
- Enter a UPI PIN only in the trusted payment app when you intend to authorize a payment; receiving money does not require entering a PIN.
- Treat unexpected links, remote-access/screen-sharing requests, urgent threats, prizes, and refund promises with caution.
- If uncertain, stop and verify using an independently obtained official contact channel.

Phrase guidance carefully. UPI app flows and bank processes can vary; point users to their bank/payment app’s official support for transaction-specific questions.

### Scenario cards

Provide at least four scenarios, each with a choice and a short explanation. Include:

1. A stranger says to scan a QR code and enter a PIN to receive a refund.
2. A caller claiming to be bank support asks for an OTP or PIN.
3. A payment shows pending or failed after the account appears debited.
4. An unexpected collect request arrives with a familiar-looking name or urgent message.

Use fictional names and amounts. Never include real account details, phone numbers, UPI IDs, or scannable payment QR codes.

### Quiz

Build at least eight questions covering budgeting and UPI safety. Mix multiple-choice and scenario questions. Give immediate, supportive explanations for correct and incorrect choices. Show score and a short learning summary at the end, plus a retry button. Do not store quiz answers or send them to a server. Do not represent a quiz score as proof of financial competence.

### If something goes wrong

Use a clear, calm action sequence:

1. Contact the bank and payment app through their official channels as soon as possible; ask them to secure the account and register a complaint.
2. Report suspected cyber financial fraud through India’s official cybercrime reporting channel; where appropriate, call **1930** promptly.
3. Keep transaction IDs, dates, messages, and complaint references. Do not post sensitive evidence publicly.
4. Do not pay anyone who promises guaranteed recovery of lost money.

Label this as general information, not a guarantee of recovery or a substitute for bank/police instructions. Link directly to the official reporting portal.

## 5. Research-led project approach

Use this project cycle, inspired by the sample report’s evidence-led structure, without importing its data:

1. **Assess needs:** the student team may conduct a short voluntary awareness survey before outreach. The website can include an optional, privacy-conscious feedback form only if it is clearly explained and the team can actually review submissions. Prefer an offline paper survey or a form managed by the student team when no backend exists.
2. **Prioritize from evidence:** update content based on the team’s own collected responses. Until then, do not show charts, percentages, testimonials, or claims about what the community prefers.
3. **Deliver awareness:** use the site as a learning aid during the CEP session and provide official references for further reading.
4. **Evaluate honestly:** after the activity, report actual participant counts and observations in the college report. On the website, publish results only with consent and appropriate aggregation; disclose sample size, collection method, date, and limitations. Do not expose identifiable responses.
5. **Iterate:** document improvements made after real feedback.

The sample report used a small, non-random survey and a deployed educational site. This brief borrows the useful workflow—needs assessment, implementation, evaluation, limitations, and future improvements—but all measures and outcomes for this project must come from this project’s own work.

## 6. Visual direction

Create an original, trustworthy visual identity for a financial-awareness education site. Use a light, high-contrast palette with deep navy/ink text, teal or green for positive actions, and restrained amber for caution. Avoid alarmist red except for urgent warnings. Use generous spacing, clear hierarchy, rounded cards, simple diagrams/icons, and friendly illustrations. Avoid banking brand logos and copied designs. Make the result feel appropriate for a college project and useful to the general public rather than like a commercial fintech product.

Use responsive layouts for small phones, tablets, and desktop. Keep paragraphs short and avoid dense walls of text. Use icons with text labels; never communicate meaning through color alone.

## 7. Accessibility and usability

- Use semantic headings, landmarks, buttons, and links.
- Ensure keyboard navigation and a visible focus indicator.
- Provide accessible names for controls and meaningful alternative text for informative images.
- Maintain sufficient text/background contrast and readable font sizing.
- Respect reduced-motion preferences; avoid flashing or distracting animation.
- Make quiz choices usable by keyboard and screen reader, and announce feedback accessibly.
- Ensure the mobile menu can be opened and closed by keyboard and has a clear state.
- Use plain language and explain unfamiliar terms on first use.

## 8. Privacy and security boundaries

- Build a static, front-end-only site unless the student team explicitly supplies and approves a real backend requirement.
- Do not request or collect bank account numbers, UPI IDs, PINs, OTPs, passwords, card details, phone numbers, government identifiers, or transaction screenshots.
- Do not add login, payment processing, analytics trackers, third-party chat widgets, or external form submissions by default.
- Keep quiz state in memory only; clear it when the page reloads.
- If a feedback form is included, make it local/demo-only by default and clearly state that it does not submit. Do not present a nonfunctional form as if submissions are being received.
- Use HTTPS links for external official sources and open external links safely.

## 9. Technical expectations

First inspect the available project files and preserve any existing setup. Choose the simplest maintainable implementation compatible with the workspace. If starting from scratch, a lightweight static site is preferred; avoid unnecessary libraries, accounts, APIs, and build complexity. Keep educational content separated from UI components so students can update it easily. Include a README with local run instructions and a short guide to editing content and replacing placeholders.

Do not claim the site is deployed, tested with the community, or formally evaluated unless the team has done those things. Include a project-team checklist in the README for filling details, validating sources, testing the site, conducting awareness work, and adding real findings later.

## 10. Quality checklist

Before considering the site complete, confirm:

- All navigation items reach the right section/page.
- All quiz questions produce feedback and the score/retry flow works.
- Scenario answers reveal understandable explanations.
- The site remains readable and functional on narrow mobile screens.
- Main interactions can be completed using keyboard alone.
- No personal or financial information is requested or stored.
- Official links work and are labeled clearly.
- Placeholder identities and pending research are visibly marked for the student team.
- No fabricated survey statistics, participant counts, endorsements, or impact statements appear.
- README explains how to run and maintain the site.

## 11. Official content references

Use these official sources to verify the educational content. Cite them in the website’s Sources section and re-check the relevant page before publication:

- NPCI, UPI FAQs: https://www.npci.org.in/what-we-do/upi/faqs
- NPCI, Fraud Awareness: https://www.npci.org.in/fraud-awareness
- Reserve Bank of India, Financial Awareness Messages (FAME): https://www.rbi.org.in/commonperson/images/FAME202426022024.pdf
- National Cyber Crime Reporting Portal: https://cybercrime.gov.in/

If the exact advice on a source page changes, update the site content to match the current official guidance and include an “Accessed/checked” date in the source list.

## 12. Student-owned fields to fill before final submission

- Student name(s): **[ADD AFTER TEAM CONFIRMS]**
- Roll number(s): **[ADD AFTER TEAM CONFIRMS]**
- Programme / division: **[CONFIRM FROM COLLEGE FORMAT]**
- Guide name: **[ADD AFTER CONFIRMATION]**
- Community / outreach location: **[ADD AFTER ACTIVITY]**
- Survey and awareness activity dates: **[ADD AFTER COMPLETION]**
- Actual participants and results: **[ADD ONLY FROM VERIFIED PROJECT RECORDS]**
- Deployment URL: **[ADD ONLY AFTER DEPLOYMENT]**


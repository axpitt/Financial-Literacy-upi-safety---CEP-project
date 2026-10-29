/**
 * Financial Literacy & UPI Safety Awareness - Educational Content Data Store
 * MIT Chhatrapati Sambhajinagar | Community Engagement Project (SY B.Tech 2026-27)
 * 
 * NOTE FOR STUDENTS:
 * All educational scenarios, quiz questions, and official sources are stored here.
 * You can edit, add, or customize scenarios and questions below without changing HTML/CSS logic.
 */

const EDUCATIONAL_DATA = {
  // Metadata & Project Info
  projectInfo: {
    title: "Financial Literacy and UPI Safety Awareness",
    programme: "Community Engagement Project (CEP), MIT Chhatrapati Sambhajinagar",
    cohort: "SY B.Tech, Academic Year 2026–27",
    disclaimer: "This website is an educational awareness resource created for a college community project. It does not provide banking, investment, legal, or commercial payment services. No real financial credentials or transactions are ever requested or simulated."
  },

  // Realistic UPI & Money Scenarios ("What Would You Do?")
  scenarios: [
    {
      id: "scenario-1",
      title: "Scenario 1: The 'Scan to Receive' Refund Scam",
      category: "QR Codes & Refunds",
      badge: "Critical Scam Signal",
      situation: "Rohan listed an old textbook on an online student classifieds board. A prospective buyer contacts him on WhatsApp, agreeing to buy it for ₹450 without bargaining. The buyer immediately sends a QR code image saying: 'I am paying you from my business UPI wallet. Please scan this QR code on PhonePe/Google Pay and enter your 6-digit UPI PIN to receive the ₹450 in your bank account right now.'",
      question: "What should Rohan do?",
      options: [
        {
          id: "opt-1a",
          text: "Refuse to scan or enter a PIN. Explain that receiving UPI payments only requires sharing a phone number, VPA, or showing his own receive QR, never entering a PIN.",
          isCorrect: true,
          explanation: "Correct! The golden rule of UPI: You NEVER enter a UPI PIN to receive money. Anyone asking you to enter your PIN or scan a QR code to 'receive funds or refunds' is attempting fraud."
        },
        {
          id: "opt-1b",
          text: "Scan the QR code and enter his UPI PIN immediately to receive the ₹450 credit.",
          isCorrect: false,
          explanation: "Dangerous! Entering your UPI PIN NEVER receives money. UPI PIN is exclusively used to authorize a DEBIT from your bank account. If Rohan enters his PIN, ₹450 (or more) will be deducted from his account."
        },
        {
          id: "opt-1c",
          text: "Scan the QR code, but deliberately enter a wrong PIN three times to test the buyer.",
          isCorrect: false,
          explanation: "Unsafe practice. Interacting with malicious QR codes or phishing payment links exposes you to risks. Simply reject the request and stop communicating."
        }
      ],
      takeaway: "Golden Rule: A UPI PIN is strictly for sending money. Receiving money requires ZERO PIN entries."
    },
    {
      id: "scenario-2",
      title: "Scenario 2: The Urgent 'Bank Customer Care' KYC Threat",
      category: "Impersonation & OTP",
      badge: "High Urgency Signal",
      situation: "Priya receives a phone call from an unknown mobile number. The caller speaks authoritatively: 'Hello, I am calling from State Bank Verification Cell. Your account KYC has expired. Your UPI services and debit card will be permanently suspended within 2 hours. I have triggered a verification SMS. Please read out the 6-digit OTP you just received so I can renew your account.'",
      question: "What is Priya's safest response?",
      options: [
        {
          id: "opt-2a",
          text: "Share the OTP quickly before the 2-hour deadline to avoid having her account frozen.",
          isCorrect: false,
          explanation: "Extremely risky! Banks and official agencies will NEVER ask you to disclose an OTP, UPI PIN, or card details over a call. Fraudsters create false urgency ('within 2 hours') so victims panic and bypass rational checks."
        },
        {
          id: "opt-2b",
          text: "Tell the caller half of the digits to verify if they are really from the bank.",
          isCorrect: false,
          explanation: "Never disclose partial or full OTPs. Disclosing even fragments or engaging with scammers can lead to social engineering breaches."
        },
        {
          id: "opt-2c",
          text: "Disconnect the call immediately. Do not share any OTP. Verify account status directly inside her official bank mobile app or visit her bank branch.",
          isCorrect: true,
          explanation: "Exactly right! Genuine bank staff never ask for OTPs or PINs. If someone threatens urgent suspension, hang up, check your official banking app, or call the verified helpline number printed on the back of your debit card."
        }
      ],
      takeaway: "OTP and PIN are confidential secrets. No legitimate bank official will ever ask for them."
    },
    {
      id: "scenario-3",
      title: "Scenario 3: Payment Debited but Merchant Status Shows Failed",
      category: "Transaction Troubleshooting",
      badge: "Everyday UPI Issue",
      situation: "Aniket pays ₹180 at a campus cafeteria by scanning the merchant's QR code. His phone screen displays 'Transaction Pending / In Progress', but his bank SMS arrives showing ₹180 was debited. The cafeteria owner refuses to give him the food, stating: 'My soundbox didn't speak and I have not received the money. You must pay cash or pay again.'",
      question: "What should Aniket do in this situation?",
      options: [
        {
          id: "opt-3a",
          text: "Get into a heated argument, panic, and click unverified 'instant refund' links found on Google Search.",
          isCorrect: false,
          explanation: "Do not search for random customer care numbers or refund links on search engines—scammers deliberately place fake support numbers there."
        },
        {
          id: "opt-3b",
          text: "Show the merchant the active transaction screen with the UTR / UPI Ref ID. If pending, explain that UPI systems auto-reconcile or auto-reverse within 24-48 hours. If paying again, obtain a receipt or note the merchant's contact.",
          isCorrect: true,
          explanation: "Proper procedure! When an account is debited but the merchant hasn't received funds, the transaction is in an inter-bank pending status. Per NPCI guidelines, failed/pending transactions are auto-reversed back to the payer's account (usually within T+1 or T+2 working days). Always note the 12-digit UTR/UPI Ref ID."
        },
        {
          id: "opt-3c",
          text: "Install an app suggested by an online comment claiming to speed up NPCI server approvals.",
          isCorrect: false,
          explanation: "Never install unverified apps. They are usually remote-access malware (such as screen-sharing trojans) that steal banking credentials."
        }
      ],
      takeaway: "Always track the 12-digit UPI Reference / UTR Number. Inter-bank pending transactions auto-reconcile under RBI/NPCI guidelines."
    },
    {
      id: "scenario-4",
      title: "Scenario 4: The Unexpected Collect Request & 'Reward' Claim",
      category: "Collect Requests",
      badge: "Trap Collect Request",
      situation: "Sneha opens her UPI app to check her balance. A pop-up notification appears on her screen: 'Collect Request: ₹2,000 requested by cashback-offers@upi. Description: Congratulation! You won festival cashback of ₹2,000. Click Pay and enter PIN to claim.'",
      question: "What is happening here?",
      options: [
        {
          id: "opt-4a",
          text: "This is a disguised collect request scam. Sneha should decline/reject the collect request and tap 'Block / Report Spam' in the app.",
          isCorrect: true,
          explanation: "Correct! Fraudsters frequently abuse the 'Collect Request' feature with misleading remarks like 'Claim ₹2,000' or 'Refund'. Legitimate rewards or refunds never ask you to approve a collect request or enter a PIN."
        },
        {
          id: "opt-4b",
          text: "It is an official cash reward from the UPI network; she should tap 'Pay' to claim the ₹2,000 prize.",
          isCorrect: false,
          explanation: "Beware! A 'Collect Request' is a demand to PULL money FROM you. Tapping 'Pay' and entering your PIN will TRANSFER ₹2,000 from Sneha's bank account to the fraudster."
        },
        {
          id: "opt-4c",
          text: "Accept the request, expecting that the app will deposit the funds into her linked wallet.",
          isCorrect: false,
          explanation: "Entering your PIN on any collect request initiates an immediate debit from your account."
        }
      ],
      takeaway: "Decline unexpected collect requests. Tapping 'Pay' on a collect request sends YOUR money away."
    },
    {
      id: "scenario-5",
      title: "Scenario 5: The 'Install Screen-Share App for Support' Scam",
      category: "Remote Access Apps",
      badge: "Malware Alert",
      situation: "Varun's online food delivery order failed. He searches online for the delivery app's helpline and dials a mobile number. The person answering says: 'Sir, our servers are overloaded. To get your instant refund, please install an app called AnyDesk / QuickSupport from the Play Store and share the 9-digit code on your screen.'",
      question: "What will happen if Varun follows these instructions?",
      options: [
        {
          id: "opt-5a",
          text: "The support agent will securely fix the connection and refund the order.",
          isCorrect: false,
          explanation: "Catastrophic error. Screen-sharing apps allow the caller to view everything on your phone screen in real time, including your incoming OTPs and UPI login screens."
        },
        {
          id: "opt-5b",
          text: "The app will speed up his smartphone's 5G data speeds.",
          isCorrect: false,
          explanation: "This is an established cyber scam tactic used to steal financial session tokens and OTPs."
        },
        {
          id: "opt-5c",
          text: "The fraudster will gain complete remote viewing access to his phone, watch him enter credentials, read his OTPs, and drain his bank balance.",
          isCorrect: true,
          explanation: "Correct! Never install remote access tools (AnyDesk, TeamViewer, RustDesk, QuickSupport) at the instruction of someone on a phone call. Legitimate companies never demand remote control of your personal device for customer support."
        }
      ],
      takeaway: "Never install screen-sharing or remote-control apps on the advice of unverified customer support callers."
    }
  ],

  // Interactive Quiz (10 Questions covering Budgeting & UPI Safety)
  quizQuestions: [
    {
      id: "q1",
      category: "UPI PIN Security",
      question: "What is the primary function of your 4-digit or 6-digit UPI PIN?",
      options: [
        "To verify your identity whenever you receive money from friends",
        "To log in to your mobile network provider's cellular data service",
        "To authorize a debit/transfer of funds from your linked bank account",
        "To check whether your college Wi-Fi is connected"
      ],
      correctIndex: 2,
      explanation: "Your UPI PIN is an authorization secret. It is required ONLY when debits (outgoing payments) are made from your bank account. It is never needed to receive money."
    },
    {
      id: "q2",
      category: "Budgeting Fundamentals",
      question: "Under the simple 50/30/20 budgeting rule of thumb, how is monthly take-home income broadly allocated?",
      options: [
        "50% Needs (essentials), 30% Wants (lifestyle), 20% Savings/Debt repayment",
        "50% Investments, 30% Wants, 20% Needs",
        "50% Shopping, 30% Food delivery, 20% Rent",
        "50% Emergency fund, 30% Credit cards, 20% Entertainment"
      ],
      correctIndex: 0,
      explanation: "The 50/30/20 framework is an educational guideline: roughly 50% for vital needs (rent, groceries, basic utilities), 30% for discretionary wants, and 20% for future savings or debt reduction."
    },
    {
      id: "q3",
      category: "QR Code Mechanics",
      question: "Which of the following is TRUE about scanning a UPI QR code?",
      options: [
        "Scanning a QR code is required to receive cashbacks and student awards",
        "Scanning a QR code automatically encrypts your phone from cyber attacks",
        "A QR code can be scanned to directly withdraw cash from any street streetlight",
        "Scanning a merchant QR code prepares your app to SEND money; it never deposits money into your account on its own"
      ],
      correctIndex: 3,
      explanation: "A QR code encodes recipient payment destination details. When you scan it, your app prepares an outgoing payment. You never scan someone else's QR code to receive a payment."
    },
    {
      id: "q4",
      category: "Emergency Savings",
      question: "Why is building an emergency fund of 3 to 6 months of essential expenses recommended before aggressive investing?",
      options: [
        "Because emergency funds guarantee a fixed 25% return every year",
        "To provide a financial buffer against unexpected events without resorting to high-interest borrowing",
        "Because banks legally mandate everyone to keep 6 months of salary locked",
        "To completely replace the need for any health or term insurance"
      ],
      correctIndex: 1,
      explanation: "An emergency fund acts as a safety cushion for unplanned emergencies (such as medical needs or sudden job transitions), preventing you from taking high-cost loans."
    },
    {
      id: "q5",
      category: "Emergency Incident Reporting",
      question: "What is the dedicated National Cyber Crime Reporting helpline number in India for reporting cyber financial fraud?",
      options: [
        "1930",
        "100",
        "1098",
        "1800"
      ],
      correctIndex: 0,
      explanation: "Helpline 1930 (Citizen Financial Cyber Fraud Reporting and Management System) is India's dedicated emergency number to report financial cyber fraud quickly."
    },
    {
      id: "q6",
      category: "Responsible Borrowing",
      question: "If a loan app offers 'instant money with zero paperwork and no interest check', what critical safety check should you always perform?",
      options: [
        "Check how colorful their mobile application logo looks",
        "Share your phone contacts and photo gallery immediately to get higher limits",
        "Verify whether the digital lending application is partnered with an RBI-regulated bank or NBFC",
        "Pay an upfront advance processing fee into a private UPI account"
      ],
      correctIndex: 2,
      explanation: "Under RBI guidelines, all legitimate digital lending apps must be backed by a registered bank or NBFC and listed on the RBI website. Illegal loan apps frequently harvest contacts for harassment."
    },
    {
      id: "q7",
      category: "UPI Transaction Verification",
      question: "Before entering your UPI PIN on your phone, what two details must you ALWAYS verify on the confirmation screen?",
      options: [
        "The battery percentage of your phone and the current weather",
        "Your bank branch IFSC code and your debit card expiry date",
        "The number of followers the merchant has on social media",
        "The displayed verified recipient name and the exact payment amount"
      ],
      correctIndex: 3,
      explanation: "Always pause and verify the recipient's registered name and the exact rupee amount on the confirmation dialog before entering your PIN."
    },
    {
      id: "q8",
      category: "Secondary Scam Awareness",
      question: "A stranger on social media claims they can 'recover 100% of your lost scam money' for an advance fee of ₹500. What is this?",
      options: [
        "A recognized government consumer recovery initiative",
        "A secondary recovery scam targeting victims who have already lost money",
        "An automated feature provided by NPCI UPI servers",
        "A legitimate police cyber cell investigation procedure"
      ],
      correctIndex: 1,
      explanation: "This is a secondary recovery scam. Scammers prey on distressed victims by posing as hackers or recovery agents. Official authorities never ask for private recovery fees."
    },
    {
      id: "q9",
      category: "Interest Concepts",
      question: "Which of the following describes compound interest compared to simple interest?",
      options: [
        "Compound interest calculates interest on both the initial principal and accumulated interest over time",
        "Compound interest is only calculated once at the end of ten years",
        "Simple interest always produces higher total returns than compound interest",
        "Compound interest applies only to cash payments made at bank counters"
      ],
      correctIndex: 0,
      explanation: "Compound interest is 'interest on interest'. Over time, earning interest on previously earned interest allows savings to grow faster, but compounding also makes unpaid loan debt escalate."
    },
    {
      id: "q10",
      category: "Dispute & Resolution",
      question: "If you accidentally transfer money to an incorrect UPI ID due to a typing mistake, what is your immediate first step?",
      options: [
        "Delete the UPI app from your phone to cancel the transfer",
        "Wait 30 days to see if the recipient notices and returns it voluntarily",
        "Immediately notify your bank with the 12-digit UTR/transaction ID and file a dispute in your UPI app",
        "Post the recipient's phone number on social media forums"
      ],
      correctIndex: 2,
      explanation: "Immediately contact your bank's customer support and lodge a transaction dispute using the 12-digit UTR number. You can also raise a complaint on the NPCI portal (npci.org.in)."
    }
  ],

  // Official Educational Sources (as cited in the Project Brief)
  officialSources: [
    {
      title: "UPI FAQs & Operational Guidelines",
      organization: "National Payments Corporation of India (NPCI)",
      description: "Official explanations of UPI transactions, PIN mechanics, dispute resolution workflows, and user safety standards.",
      url: "https://www.npci.org.in/what-we-do/upi/faqs",
      accessedDate: "October 2026",
      type: "Official Payment Authority"
    },
    {
      title: "Fraud Awareness & Safe Digital Payments",
      organization: "National Payments Corporation of India (NPCI)",
      description: "Comprehensive catalogue of social engineering vectors, fake collect requests, phishing QR traps, and preventive checklists.",
      url: "https://www.npci.org.in/fraud-awareness",
      accessedDate: "October 2026",
      type: "Cyber Defense & Awareness"
    },
    {
      title: "Financial Awareness Messages (FAME 2024)",
      organization: "Reserve Bank of India (RBI)",
      description: "Core financial education standards covering budgeting, emergency savings, safe borrowing, credit discipline, and consumer rights.",
      url: "https://www.rbi.org.in/commonperson/images/FAME202426022024.pdf",
      accessedDate: "October 2026",
      type: "Central Banking Authority"
    },
    {
      title: "National Cyber Crime Reporting Portal",
      organization: "Ministry of Home Affairs, Government of India",
      description: "Official statutory portal and 1930 national helpline for reporting financial cyber fraud and cyber crimes in India.",
      url: "https://cybercrime.gov.in/",
      accessedDate: "October 2026",
      type: "Law Enforcement & Reporting"
    }
  ]
};

// Make available globally in browser window
if (typeof window !== "undefined") {
  window.EDUCATIONAL_DATA = EDUCATIONAL_DATA;
}

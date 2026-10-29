/**
 * Financial Literacy & UPI Safety Awareness - Application Logic
 * MIT Chhatrapati Sambhajinagar | SY B.Tech Community Engagement Project
 * 
 * Features:
 * - High-contrast glassmorphic navbar with sticky scrollspy & mobile drawer
 * - Interactive Monthly Budget Planner sandbox (Client-side, slider + presets + live visual bar)
 * - Interactive Realistic Scenario Cards with category filter tabs & instant explanations
 * - 30-Second Scam Risk Triage interactive tool
 * - Interactive Knowledge Check Quiz with scoring, feedback, category tags & retry
 * - Dynamic Official Sources generator
 * - 1930 Incident Report Clipboard copy helper with toast feedback
 * - Back to top button & smooth navigation
 */

document.addEventListener("DOMContentLoaded", () => {
  initNavigation();
  initBudgetSandbox();
  initScenarios();
  initScamTriage();
  initQuiz();
  initSources();
  initEmergencyCopy();
  initBackToTop();
});

/* ==========================================================================
   1. Floating Upgraded Navigation Bar
   ========================================================================== */
function initNavigation() {
  const header = document.querySelector(".site-header");
  const toggleBtn = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");
  const links = document.querySelectorAll(".nav-link");

  if (header) {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 15) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    }, { passive: true });
  }

  if (!toggleBtn || !navLinks) return;

  function closeMenu() {
    navLinks.classList.remove("open");
    toggleBtn.setAttribute("aria-expanded", "false");
    const icon = toggleBtn.querySelector(".nav-toggle-icon");
    if (icon) icon.textContent = "☰";
    toggleBtn.focus();
  }

  function openMenu() {
    navLinks.classList.add("open");
    toggleBtn.setAttribute("aria-expanded", "true");
    const icon = toggleBtn.querySelector(".nav-toggle-icon");
    if (icon) icon.textContent = "✕";
  }

  toggleBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    const isOpen = navLinks.classList.contains("open");
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // Close when clicking any nav link
  links.forEach(link => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 1140) {
        closeMenu();
      }
    });
  });

  // Close when clicking outside of the floating header
  document.addEventListener("click", (e) => {
    if (navLinks.classList.contains("open") && !header.contains(e.target)) {
      closeMenu();
    }
  });

  // Close on Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && navLinks.classList.contains("open")) {
      closeMenu();
    }
  });

  // Active section observer for scrollspy (offset adjusted for floating bar)
  const sections = document.querySelectorAll("section[id]");
  window.addEventListener("scroll", () => {
    const scrollY = window.pageYOffset;
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 180;
      const sectionId = current.getAttribute("id");
      const matchedLink = document.querySelector(`.nav-link[href*="#${sectionId}"]`);
      if (matchedLink) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          matchedLink.classList.add("active");
        } else {
          matchedLink.classList.remove("active");
        }
      }
    });
  }, { passive: true });
}

/* ==========================================================================
   2. Interactive Monthly Budget Sandbox
   ========================================================================== */
function initBudgetSandbox() {
  const incomeInput = document.getElementById("budgetIncomeInput");
  const incomeSlider = document.getElementById("budgetSlider");
  const calculateBtn = document.getElementById("budgetCalcBtn");
  const resetBtn = document.getElementById("budgetResetBtn");
  const presetBtns = document.querySelectorAll(".preset-btn");

  const valNeeds = document.getElementById("valNeeds");
  const valWants = document.getElementById("valWants");
  const valSavings = document.getElementById("valSavings");

  if (!incomeInput || !valNeeds) return;

  function updateBudget(income) {
    const parsed = Math.max(500, Math.min(100000, Number(income) || 0));
    
    if (incomeInput.value != parsed) incomeInput.value = parsed;
    if (incomeSlider && incomeSlider.value != parsed) incomeSlider.value = parsed;

    const needs = Math.round(parsed * 0.50);
    const wants = Math.round(parsed * 0.30);
    const savings = Math.round(parsed * 0.20);

    valNeeds.textContent = `₹${needs.toLocaleString('en-IN')}`;
    valWants.textContent = `₹${wants.toLocaleString('en-IN')}`;
    valSavings.textContent = `₹${savings.toLocaleString('en-IN')}`;
  }

  incomeInput.addEventListener("input", (e) => {
    updateBudget(e.target.value);
  });

  if (incomeSlider) {
    incomeSlider.addEventListener("input", (e) => {
      updateBudget(e.target.value);
    });
  }

  if (calculateBtn) {
    calculateBtn.addEventListener("click", () => {
      updateBudget(incomeInput.value);
    });
  }

  presetBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const val = parseInt(btn.getAttribute("data-preset"), 10);
      if (val) updateBudget(val);
    });
  });

  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      updateBudget(10000);
    });
  }

  updateBudget(incomeInput.value || 10000);
}

/* ==========================================================================
   3. Interactive Realistic Scenarios with Category Filtering
   ========================================================================== */
function initScenarios() {
  const container = document.getElementById("scenariosContainer");
  const filterBtns = document.querySelectorAll(".scenario-filter-btn");

  if (!container || !window.EDUCATIONAL_DATA || !window.EDUCATIONAL_DATA.scenarios) return;

  // Helper: Fisher-Yates array shuffle for dynamic option order
  function shuffleArray(arr) {
    const copy = [...arr];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  // Pre-shuffle scenario options dynamically so answers are randomized across A, B, C
  const scenarios = window.EDUCATIONAL_DATA.scenarios.map(s => ({
    ...s,
    options: shuffleArray(s.options)
  }));

  function renderFilteredScenarios(categoryFilter = "all") {
    container.innerHTML = "";

    const filtered = categoryFilter === "all" 
      ? scenarios 
      : scenarios.filter(s => s.category.toLowerCase().includes(categoryFilter.toLowerCase()));

    filtered.forEach((scenario, index) => {
      const card = document.createElement("article");
      card.className = "scenario-card";
      card.setAttribute("aria-labelledby", `scenario-title-${scenario.id}`);

      card.innerHTML = `
        <div>
          <div class="scenario-header">
            <span class="badge badge-caution">${scenario.badge}</span>
            <span style="font-size: 0.825rem; font-weight: 700; color: var(--color-text-light);">
              ${scenario.category}
            </span>
          </div>
          
          <h3 id="scenario-title-${scenario.id}" style="font-size: 1.25rem; margin-bottom: 0.85rem; line-height: 1.35;">
            ${scenario.title}
          </h3>

          <div class="scenario-situation">
            <strong>Situation:</strong> ${scenario.situation}
          </div>

          <div class="scenario-question-label">
            ${scenario.question}
          </div>

          <div class="scenario-options" role="group" aria-label="Choices for ${scenario.title}">
            ${scenario.options.map((opt, optIdx) => `
              <button 
                type="button" 
                class="scenario-btn" 
                data-scenario-id="${scenario.id}" 
                data-opt-idx="${optIdx}"
                aria-describedby="feedback-${scenario.id}"
              >
                <span style="font-weight: 700; width: 26px; height: 26px; border-radius: 50%; background: var(--color-surface-subtle); display: inline-flex; align-items: center; justify-content: center; flex-shrink: 0; font-size: 0.85rem;">
                  ${String.fromCharCode(65 + optIdx)}
                </span>
                <span>${opt.text}</span>
              </button>
            `).join("")}
          </div>
        </div>

        <div id="feedback-${scenario.id}" class="scenario-feedback" aria-live="polite"></div>
      `;

      container.appendChild(card);
    });

    // Reattach listeners
    container.querySelectorAll(".scenario-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const scenarioId = btn.getAttribute("data-scenario-id");
        const optIdx = parseInt(btn.getAttribute("data-opt-idx"), 10);
        const targetScenario = scenarios.find(s => s.id === scenarioId);
        if (!targetScenario) return;

        const selectedOpt = targetScenario.options[optIdx];
        const parentCard = btn.closest(".scenario-card");
        const buttons = parentCard.querySelectorAll(".scenario-btn");
        const feedbackEl = parentCard.querySelector(".scenario-feedback");

        buttons.forEach(b => {
          b.classList.remove("selected", "correct-choice", "incorrect-choice");
          b.setAttribute("aria-pressed", "false");
        });

        btn.classList.add("selected");
        btn.setAttribute("aria-pressed", "true");

        if (selectedOpt.isCorrect) {
          btn.classList.add("correct-choice");
          feedbackEl.className = "scenario-feedback active safe";
          feedbackEl.innerHTML = `
            <div style="font-weight: 700; display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.35rem;">
              <span>Safe & Correct Decision</span>
            </div>
            <p style="margin: 0; color: inherit;">${selectedOpt.explanation}</p>
            <div class="takeaway-box">
              <span>Key Takeaway:</span> ${targetScenario.takeaway}
            </div>
          `;
        } else {
          btn.classList.add("incorrect-choice");
          feedbackEl.className = "scenario-feedback active unsafe";
          feedbackEl.innerHTML = `
            <div style="font-weight: 700; display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.35rem;">
              <span>High Risk / Scam Hazard</span>
            </div>
            <p style="margin: 0; color: inherit;">${selectedOpt.explanation}</p>
            <div class="takeaway-box">
              <span>Key Takeaway:</span> ${targetScenario.takeaway}
            </div>
          `;
        }
      });
    });
  }

  // Filter button clicks
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const category = btn.getAttribute("data-filter");
      renderFilteredScenarios(category);
    });
  });

  // Initial render with all scenarios
  renderFilteredScenarios("all");
}

/* ==========================================================================
   4. 30-Second Scam Risk Triage Tool
   ========================================================================== */
function initScamTriage() {
  const checkboxes = document.querySelectorAll(".triage-check");
  const resultContainer = document.getElementById("triageResult");
  const resetBtn = document.getElementById("triageResetBtn");

  if (!resultContainer || checkboxes.length === 0) return;

  function evaluateRisk() {
    let checkedCount = 0;
    checkboxes.forEach(cb => {
      if (cb.checked) checkedCount++;
    });

    if (checkedCount >= 1) {
      resultContainer.className = "triage-result badge-danger";
      resultContainer.innerHTML = `
        <div>
          <span style="font-size: 1.1rem;">⚠️ HIGH SCAM PROBABILITY DETECTED (${checkedCount} Flag${checkedCount > 1 ? 's' : ''})</span>
          <p style="font-size: 0.875rem; margin: 0.25rem 0 0 0; color: #7f1d1d;">
            Do NOT enter your PIN, do NOT share any OTP, and do NOT install remote apps. Disconnect immediately.
          </p>
        </div>
        <a href="#emergency" class="btn btn-danger btn-sm">Take Emergency Action →</a>
      `;
    } else {
      resultContainer.className = "triage-result badge-safe";
      resultContainer.innerHTML = `
        <div>
          <span style="font-size: 1.05rem;">No Red Flags Selected Yet</span>
          <p style="font-size: 0.85rem; margin: 0.25rem 0 0 0; color: #14532d;">
            Check any warning signs above that match what the stranger/caller is asking you to do.
          </p>
        </div>
        <span class="badge badge-safe">Standard Caution</span>
      `;
    }
  }

  checkboxes.forEach(cb => {
    cb.addEventListener("change", evaluateRisk);
  });

  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      checkboxes.forEach(cb => cb.checked = false);
      evaluateRisk();
    });
  }

  evaluateRisk();
}

/* ==========================================================================
   5. Interactive Knowledge Check Quiz
   ========================================================================== */
function initQuiz() {
  const container = document.getElementById("quizApp");
  if (!container || !window.EDUCATIONAL_DATA || !window.EDUCATIONAL_DATA.quizQuestions) return;

  // Helper: Fisher-Yates array shuffle
  function shuffle(arr) {
    const copy = [...arr];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  // Prepares questions with dynamically randomized option orders across A, B, C, D
  function prepareRandomizedQuestions() {
    return window.EDUCATIONAL_DATA.quizQuestions.map(q => {
      const items = q.options.map((optText, origIdx) => ({
        text: optText,
        isCorrect: (origIdx === q.correctIndex)
      }));

      const shuffledItems = shuffle(items);
      const newCorrectIndex = shuffledItems.findIndex(item => item.isCorrect);

      return {
        ...q,
        options: shuffledItems.map(item => item.text),
        correctIndex: newCorrectIndex
      };
    });
  }

  let questions = prepareRandomizedQuestions();
  let currentQuestionIndex = 0;
  let score = 0;
  let answeredState = false;

  function renderQuestion() {
    answeredState = false;
    const q = questions[currentQuestionIndex];
    const total = questions.length;
    const progressPercent = Math.round(((currentQuestionIndex) / total) * 100);

    container.innerHTML = `
      <div class="quiz-status-bar">
        <span>Question ${currentQuestionIndex + 1} of ${total}</span>
        <span>Score: ${score} / ${currentQuestionIndex}</span>
      </div>

      <div class="quiz-progress-track" role="progressbar" aria-valuenow="${progressPercent}" aria-valuemin="0" aria-valuemax="100">
        <div class="quiz-progress-fill" style="width: ${progressPercent}%;"></div>
      </div>

      <div class="quiz-question-category">
        ${q.category || "UPI & Financial Awareness"}
      </div>

      <div class="quiz-question-text" id="quizQuestionText">
        ${q.question}
      </div>

      <div class="quiz-choices" role="group" aria-labelledby="quizQuestionText">
        ${q.options.map((optText, i) => `
          <button 
            type="button" 
            class="quiz-option" 
            data-option-idx="${i}"
            id="quizOpt-${i}"
          >
            <span style="font-weight: 700; width: 28px; height: 28px; border-radius: 50%; background: var(--color-surface-subtle); display: inline-flex; align-items: center; justify-content: center; margin-right: 0.85rem; flex-shrink: 0; font-size: 0.85rem;">
              ${String.fromCharCode(65 + i)}
            </span>
            <span>${optText}</span>
          </button>
        `).join("")}
      </div>

      <div id="quizFeedbackBox" class="quiz-feedback" aria-live="polite"></div>

      <div class="quiz-footer">
        <button type="button" class="btn btn-primary" id="quizNextBtn" style="display: none;">
          ${currentQuestionIndex === total - 1 ? "Finish Quiz & View Results" : "Next Question →"}
        </button>
      </div>
    `;

    const optionBtns = container.querySelectorAll(".quiz-option");
    const feedbackBox = container.querySelector("#quizFeedbackBox");
    const nextBtn = container.querySelector("#quizNextBtn");

    optionBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        if (answeredState) return;
        answeredState = true;

        const selectedIndex = parseInt(btn.getAttribute("data-option-idx"), 10);
        const isCorrect = (selectedIndex === q.correctIndex);

        optionBtns.forEach(b => {
          b.disabled = true;
          const idx = parseInt(b.getAttribute("data-option-idx"), 10);
          if (idx === q.correctIndex) {
            b.classList.add("correct");
          }
        });

        if (isCorrect) {
          score++;
          btn.classList.add("correct");
          feedbackBox.className = "quiz-feedback visible correct-feedback";
          feedbackBox.innerHTML = `
            <strong>Correct!</strong> ${q.explanation}
          `;
        } else {
          btn.classList.add("incorrect");
          feedbackBox.className = "quiz-feedback visible incorrect-feedback";
          feedbackBox.innerHTML = `
            <strong>Incorrect.</strong> ${q.explanation}
          `;
        }

        nextBtn.style.display = "inline-flex";
        nextBtn.focus();
      });
    });

    nextBtn.addEventListener("click", () => {
      currentQuestionIndex++;
      if (currentQuestionIndex < total) {
        renderQuestion();
        const quizHeading = document.getElementById("quiz");
        if (quizHeading && window.innerWidth < 768) {
          quizHeading.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      } else {
        renderResults();
      }
    });
  }

  function renderResults() {
    const total = questions.length;
    const percentage = Math.round((score / total) * 100);

    let summaryText = "";
    let summaryTitle = "";

    if (percentage >= 80) {
      summaryTitle = "Excellent Financial & UPI Safety Awareness!";
      summaryText = "You demonstrated strong mastery of the golden rules: keeping UPI PINs secret, verifying amounts and recipients, watching out for collect requests, and following a balanced budgeting method.";
    } else if (percentage >= 60) {
      summaryTitle = "Good Foundation with Room to Strengthen!";
      summaryText = "You have a solid basic understanding of safe transactions. Review the UPI checklist and incident reporting section to sharpen your defense against sophisticated social engineering scams.";
    } else {
      summaryTitle = "Safety Fundamentals Need Refreshing!";
      summaryText = "Remember the core rule: You NEVER need to enter a UPI PIN or disclose an OTP to receive money or get refunds. Take a few minutes to explore the Scenarios section and try again!";
    }

    container.innerHTML = `
      <div class="quiz-result-view">
        <div class="quiz-score-badge">
          ${score}/${total}
        </div>
        
        <h2>${summaryTitle}</h2>
        <p style="color: var(--color-text-muted); font-size: 1.15rem; max-width: 600px; margin: 0 auto 1.5rem auto;">
          You scored <strong>${percentage}%</strong> on this knowledge check (${score} out of ${total} correct).
        </p>

        <div class="quiz-summary-box">
          <h4 style="margin-bottom: 0.5rem; color: var(--color-primary-dark);">Summary Assessment:</h4>
          <p style="margin: 0; color: var(--color-text-main);">${summaryText}</p>
          <div style="margin-top: 1rem; font-size: 0.85rem; color: var(--color-text-light);">
            * Note: This educational quiz is an interactive learning tool for college awareness and does not represent professional certification or legal endorsement.
          </div>
        </div>

        <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; margin-top: 2rem;">
          <button type="button" class="btn btn-primary" id="retryQuizBtn">
            ↻ Retry Quiz
          </button>
          <a href="#scenarios" class="btn btn-secondary">
            Review Real-World Scenarios
          </a>
          <a href="#emergency" class="btn btn-secondary">
            Check Incident Reporting Steps
          </a>
        </div>
      </div>
    `;

    document.getElementById("retryQuizBtn").addEventListener("click", () => {
      questions = prepareRandomizedQuestions();
      currentQuestionIndex = 0;
      score = 0;
      renderQuestion();
    });
  }

  renderQuestion();
}

/* ==========================================================================
   6. Dynamic Official Sources List
   ========================================================================== */
function initSources() {
  const container = document.getElementById("sourcesContainer");
  if (!container || !window.EDUCATIONAL_DATA || !window.EDUCATIONAL_DATA.officialSources) return;

  const sources = window.EDUCATIONAL_DATA.officialSources;
  container.innerHTML = "";

  sources.forEach(src => {
    const card = document.createElement("div");
    card.className = "source-card";
    card.innerHTML = `
      <div>
        <div class="source-org">${src.organization}</div>
        <h3 class="source-title">${src.title}</h3>
        <p class="source-desc">${src.description}</p>
      </div>
      <div>
        <div class="source-meta">
          <span>Authority: <strong>${src.type}</strong></span> • 
          <span>Verified: <strong>${src.accessedDate}</strong></span>
        </div>
        <a 
          href="${src.url}" 
          target="_blank" 
          rel="noopener noreferrer" 
          class="btn btn-secondary btn-sm"
          style="display: inline-flex; width: 100%; justify-content: center;"
        >
          Visit Official Portal ↗
        </a>
      </div>
    `;
    container.appendChild(card);
  });
}

/* ==========================================================================
   7. Emergency Incident Template Copy Helper with Toast
   ========================================================================== */
function initEmergencyCopy() {
  const copyBtn = document.getElementById("copyIncidentTemplateBtn");
  const toast = document.getElementById("toastNotice");

  if (!copyBtn) return;

  function showToast(msg) {
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add("show");
    setTimeout(() => {
      toast.classList.remove("show");
    }, 3000);
  }

  copyBtn.addEventListener("click", () => {
    const templateText = `[CYBER FINANCIAL FRAUD REPORT TEMPLATE - DIAL 1930 / CYBERCRIME.GOV.IN]
• Victim Name: [Your Full Name]
• Victim Bank Name: [Your Bank Name]
• Victim Account Number: [Your Account Number]
• Mobile Number Linked to Bank: [Your Mobile Number]
• Disputed Transaction Amount: ₹[Exact Amount]
• Date & Exact Time of Debit: [DD/MM/YYYY, HH:MM AM/PM]
• 12-Digit UPI Reference (UTR) Number: [12-Digit Number from App]
• Fraudster Beneficiary UPI ID / Mobile: [Scammer VPA or Phone]
• Summary of Fraud: [e.g. Scan to receive refund scam / fake KYC call]`;

    navigator.clipboard.writeText(templateText).then(() => {
      showToast("Incident Report Template copied to clipboard!");
    }).catch(() => {
      showToast("Unable to copy automatically. Please select text manually.");
    });
  });
}

/* ==========================================================================
   8. Back to Top Affordance
   ========================================================================== */
function initBackToTop() {
  const btn = document.getElementById("backToTopBtn");
  if (!btn) return;

  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 400) {
      btn.classList.add("visible");
    } else {
      btn.classList.remove("visible");
    }
  }, { passive: true });

  btn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

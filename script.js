(function () {
  const projects = [
    {
      title: "AurivaLTD",
      category: "client",
      type: "client projects",
      year: "2024",
      label: "Corporate",
      description: "",
      link: "https://aurivaltd.com/",
      mockup: "resolved",
    },
    {
      title: "Portfolio",
      category: "experiment",
      type: "Portfolio",
      year: "2025",
      label: "Personal Project",
      description:
        "Conversational CV and portfolio project questioning standard biographical resumes with responsive interaction models and direct chat-style career exploration.",
      link: "https://portfolio.technav.store/",
      mockup: "portfolio",
    },
    {
      title: "CouncilCare",
      category: "client",
      type: "Django & Systems",
      year: "2024",
      label: "Corporate",
      description:
        "Django-based IT repair request management system designed to eliminate email friction and track equipment maintenance across departmental councils.",
      link: "https://councilcare.onrender.com/",
      mockup: "resolved",
    },
    {
      title: "Debtly",
      category: "product",
      type: "FinTech",
      year: "2023 – 2024",
      label: "Corporate",
      description:
        "A lightweight credit tracking system designed for small Kenyan retail businesses to replace manual notebooks and make customer balances painless to audit.",
      link: "https://deni-tracker.vercel.app/",
      mockup: "ledger",
    },
    {
      title: "MiniPay",
      category: "product",
      type: "M-Pesa API",
      year: "2024",
      label: "Corporate",
      description:
        "A Django + M-Pesa payment integration framework facilitating seamless mobile money transactions with zero drop-off, instant webhooks, and automatic receipting.",
      link: "https://github.com/mrrugby/minipay",
      mockup: "payment",
    },
  ];

  const container = document.querySelector("#projects-container");
  const filters = document.querySelector("#work-filters");
  if (!container || !filters) return;

  const escapeHTML = (value) =>
    String(value).replace(
      /[&<>"']/g,
      (char) =>
        ({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;",
        })[char],
    );

  function renderMockup(type) {
    const mockups = {
      portfolio: `<div class="project-mock project-mock--loose">
        <div class="project-mock__bar"><div class="project-mock__dots">
          <span class="project-mock__dot project-mock__dot--close"></span><span class="project-mock__dot project-mock__dot--minimize"></span><span class="project-mock__dot project-mock__dot--maximize"></span>
        </div></div>
        <p class="project-mock__quote">“Hello. I am a conversational CV designed to articulate career impact dynamically.”</p><div class="project-mock__accent"></div>
      </div>`,
      resolved: `<div class="project-mock project-mock--loose">
        <div class="project-mock__bar"><span class="project-mock__badge">RESOLVED</span></div><div class="project-mock__grid"></div>
        <div class="project-mock__progress"><div class="project-mock__progress-fill"></div></div>
      </div>`,
      ledger: `<div class="project-mock">
        <span class="project-mock__caption">Ledger Overview</span>
        <div class="project-mock__figures"><span class="project-mock__amount">KES 142,500</span><span class="project-mock__delta">−12% pending</span></div>
        <div class="project-mock__segments"><div class="project-mock__segment project-mock__segment--primary"></div><div class="project-mock__segment project-mock__segment--secondary"></div><div class="project-mock__segment project-mock__segment--muted"></div></div>
      </div>`,
      payment: `<div class="project-mock">
        <div class="project-mock__status-row"><span class="project-mock__dot project-mock__dot--live"></span></div>
        <p class="project-mock__log">&gt; M-Pesa Express Triggered: +254 7** *** 102</p><div class="project-mock__status">Status: 200 OK • Response Time: 412ms</div>
      </div>`,
    };
    return mockups[type] || "";
  }

  function renderProjectCard(project) {
    const title = escapeHTML(project.title || "Untitled project");
    const label = project.label
      ? `<span class="project-card__label${project.label.toLowerCase() === "corporate" ? " project-card__label--accent project-card__label--corporate" : ""}">${escapeHTML(project.label)}</span>`
      : "";
    const link = project.link || "#contact";
    return `<article class="project-card" data-cat="${escapeHTML(project.category || "")}">
      <div class="project-card__preview">
        <div class="project-card__top"><span class="project-card__category">${escapeHTML(project.type || "Project")}</span><span class="project-card__year">${escapeHTML(project.year || "")}</span></div>
        ${renderMockup(project.mockup)}
        <div class="project-card__bottom">${label}</div>
      </div>
      <div class="project-card__body"><div class="project-card__heading">
        <h3 class="project-card__title">${title}</h3>
        <a class="project-card__link" href="${escapeHTML(link)}"><span>View case study</span><span>↗</span></a>
      </div><p class="project-card__text">${escapeHTML(project.description || "Project details coming soon.")}</p></div>
    </article>`;
  }

  function updateProjectCount() {
    const count = filters.querySelector("[data-project-count]");
    if (count) count.textContent = String(projects.length).padStart(2, "0");
  }

  function renderProjects() {
    container.innerHTML = projects.map(renderProjectCard).join("");
    updateProjectCount();
  }

  function setupFilters() {
    filters.addEventListener("click", (event) => {
      const button = event.target.closest(".filter-btn");
      if (!button || !filters.contains(button)) return;
      filters.querySelectorAll(".filter-btn").forEach((item) => {
        const active = item === button;
        item.classList.toggle("is-active", active);
        item.setAttribute("aria-pressed", String(active));
      });
      const category = button.dataset.filter;
      container.querySelectorAll(".project-card").forEach((card) => {
        card.classList.toggle(
          "is-hidden",
          category !== "all" && card.dataset.cat !== category,
        );
      });
    });
  }

  renderProjects();
  setupFilters();
})();

(function () {
  const navs = Array.from(document.querySelectorAll(".site-nav, .mobile-nav"));
  if (!navs.length) return;

  const HEADER_OFFSET = 80;

  const navData = navs.map((nav) => ({
    links: Array.from(nav.querySelectorAll('a[href^="#"]')),
  }));

  // One entry per unique link target; About uses two sections sharing one id.
  const entries = [];
  navData.forEach((data) => {
    data.links.forEach((link) => {
      const href = link.getAttribute("href");
      if (entries.some((e) => e.href === href)) return;
      const sections = Array.from(
        document.querySelectorAll('[id="' + href.slice(1) + '"]'),
      );
      if (sections.length) entries.push({ href, sections });
    });
  });

  if (!entries.length) return;

  function setActive(activeHref) {
    navData.forEach((data) => {
      data.links.forEach((link) => {
        if (link.getAttribute("href") === activeHref) {
          link.setAttribute("aria-current", "page");
        } else {
          link.removeAttribute("aria-current");
        }
      });
    });
  }

  function update() {
    const atBottom =
      window.innerHeight + window.scrollY >=
      document.documentElement.scrollHeight - 2;
    let current = entries[0];

    if (atBottom) {
      current = entries[entries.length - 1];
    } else {
      let bestTop = -Infinity;
      entries.forEach((entry) => {
        entry.sections.forEach((section) => {
          const top = section.getBoundingClientRect().top;
          if (top <= HEADER_OFFSET + 1 && top > bestTop) {
            bestTop = top;
            current = entry;
          }
        });
      });
    }

    setActive(current.href);
  }

  let ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      update();
      ticking = false;
    });
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
  update();
})();

(function () {
  // Set this to the deployed Cloudflare Worker URL when the API is ready.
  const PROJECT_ENQUIRY_ENDPOINT = "";
  const dialog = document.querySelector(".project-dialog");
  if (!dialog) return;

  const steps = Array.from(dialog.querySelectorAll(".project-step"));
  const stepLabel = dialog.querySelector(".project-dialog__step");
  const progress = dialog.querySelector(".project-dialog__progress span");
  const backButton = dialog.querySelector("[data-project-back]");
  const nextButton = dialog.querySelector("[data-project-next]");
  const form = dialog.querySelector(".project-form");
  const error = dialog.querySelector(".project-form__error");
  const status = dialog.querySelector(".project-form__status");
  let currentStep = 0;
  let opener = null;
  let isSubmitting = false;

  function renderStep() {
    steps.forEach((step, index) => {
      step.hidden = index !== currentStep;
    });
    stepLabel.textContent = `0${currentStep + 1} / 04`;
    progress.style.width = `${((currentStep + 1) / steps.length) * 100}%`;
    backButton.hidden = currentStep === 0;
    nextButton.textContent =
      currentStep === steps.length - 1 ? "Send enquiry →" : "Next →";
    error.hidden = true;
    status.hidden = true;
    const heading = steps[currentStep].querySelector("h2");
    heading.setAttribute("tabindex", "-1");
    heading.focus({ preventScroll: true });
  }

  document.querySelectorAll("[data-open-project]").forEach((button) => {
    button.addEventListener("click", () => {
      opener = button;
      dialog.showModal();
      renderStep();
    });
  });

  dialog
    .querySelector("[data-close-project]")
    .addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });
  dialog.addEventListener("close", () => {
    if (opener) opener.focus();
  });

  dialog.querySelectorAll(".project-options").forEach((group) => {
    const multiple = group.classList.contains("project-options--multi");
    group.querySelectorAll(".project-option").forEach((option) => {
      option.setAttribute("aria-pressed", "false");
      option.addEventListener("click", () => {
        const wasSelected = option.getAttribute("aria-pressed") === "true";
        if (!multiple || option.dataset.choice === "not sure") {
          group
            .querySelectorAll(".project-option")
            .forEach((item) => item.setAttribute("aria-pressed", "false"));
        } else if (option.dataset.choice !== "not sure") {
          const unsure = group.querySelector('[data-choice="not sure"]');
          if (unsure) unsure.setAttribute("aria-pressed", "false");
        }
        option.setAttribute(
          "aria-pressed",
          multiple && wasSelected ? "false" : "true",
        );
        group.removeAttribute("data-error");
        error.hidden = true;
      });
    });
  });

  function selectedIn(stepIndex) {
    return Array.from(
      steps[stepIndex].querySelectorAll('.project-option[aria-pressed="true"]'),
    ).map((option) => option.dataset.choice);
  }

  nextButton.addEventListener("click", async () => {
    if (isSubmitting) return;
    status.hidden = true;

    if (currentStep < 3) {
      if (!selectedIn(currentStep).length) {
        const group = steps[currentStep].querySelector(".project-options");
        group.setAttribute("data-error", "true");
        error.textContent = "Choose an option to continue.";
        error.hidden = false;
        steps[currentStep].querySelector(".project-option").focus();
        return;
      }
      currentStep += 1;
      renderStep();
      return;
    }

    const name = form.elements.name.value.trim();
    const contact = form.elements.contact.value.trim();
    error.hidden = true;
    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact);
    const isPhone = /^[+\d][\d\s().-]{6,}$/.test(contact);
    if (!name || !(isEmail || isPhone)) {
      error.textContent =
        "Please add your name and a valid email address or contact number.";
      error.hidden = false;
      (name ? form.elements.contact : form.elements.name).focus();
      return;
    }

    if (!PROJECT_ENQUIRY_ENDPOINT) {
      error.textContent =
        "Project enquiries are not connected yet. Please contact SNJI directly by email or WhatsApp.";
      error.hidden = false;
      return;
    }

    const payload = {
      projectType: selectedIn(0)[0],
      needs: selectedIn(1),
      budget: selectedIn(2)[0],
      description: form.elements.details.value.trim(),
      name,
      contact,
    };

    isSubmitting = true;
    nextButton.disabled = true;
    nextButton.textContent = "Sending…";
    form.setAttribute("aria-busy", "true");
    status.textContent = "Sending your enquiry…";
    status.hidden = false;

    try {
      const response = await fetch(PROJECT_ENQUIRY_ENDPOINT, {
        method: "POST",
        mode: "cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      let result = null;
      try {
        result = await response.json();
      } catch {
        // Treat an empty or non-JSON response as an unsuccessful submission.
      }

      if (!response.ok || !result || result.success !== true) {
        throw new Error(
          result && typeof result.message === "string"
            ? result.message
            : "Unable to send your enquiry right now. Please try again.",
        );
      }

      status.textContent =
        "Thanks, your project enquiry has been sent. SNJI will follow up using the contact details you provided.";
      status.hidden = false;
    } catch (submissionError) {
      error.textContent =
        submissionError instanceof TypeError
          ? "We couldn't send your enquiry just now. Please check your connection and try again."
          : submissionError.message ||
            "Unable to send your enquiry right now. Please try again.";
      error.hidden = false;
      status.hidden = true;
    } finally {
      isSubmitting = false;
      nextButton.disabled = false;
      nextButton.textContent = "Send enquiry →";
      form.removeAttribute("aria-busy");
    }
  });

  backButton.addEventListener("click", () => {
    if (currentStep > 0) {
      currentStep -= 1;
      renderStep();
    }
  });
})();

(function () {
  const dialog = document.querySelector(".founder-dialog");
  const openButton = document.querySelector("[data-open-founder]");
  if (!dialog || !openButton) return;

  openButton.addEventListener("click", () => dialog.showModal());
  dialog
    .querySelector("[data-close-founder]")
    .addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });
  dialog.addEventListener("close", () => openButton.focus());
  dialog
    .querySelector("[data-founder-contact]")
    .addEventListener("click", () => dialog.close());
})();

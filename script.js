(function () {
  const filterBtns = document.querySelectorAll(".filter-btn");
  const projectItems = document.querySelectorAll(".project-card");

  function applyFilter(filter) {
    projectItems.forEach((item) => {
      if (filter === "all" || item.getAttribute("data-cat") === filter) {
        item.style.display = "flex";
      } else {
        item.style.display = "none";
      }
    });
  }

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.toggle("is-active", b === btn));

      const filter = btn.getAttribute("data-filter");
      applyFilter(filter);
    });
  });

  // Apply the active filter when the page first loads
  const activeBtn = document.querySelector(".filter-btn.is-active");

  if (activeBtn) {
    applyFilter(activeBtn.getAttribute("data-filter"));
  }
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
    nextButton.textContent = currentStep === steps.length - 1 ? "Send enquiry →" : "Next →";
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

  dialog.querySelector("[data-close-project]").addEventListener("click", () => dialog.close());
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
          group.querySelectorAll(".project-option").forEach((item) => item.setAttribute("aria-pressed", "false"));
        } else if (option.dataset.choice !== "not sure") {
          const unsure = group.querySelector('[data-choice="not sure"]');
          if (unsure) unsure.setAttribute("aria-pressed", "false");
        }
        option.setAttribute("aria-pressed", multiple && wasSelected ? "false" : "true");
        group.removeAttribute("data-error");
        error.hidden = true;
      });
    });
  });

  function selectedIn(stepIndex) {
    return Array.from(steps[stepIndex].querySelectorAll('.project-option[aria-pressed="true"]'))
      .map((option) => option.dataset.choice);
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
      error.textContent = "Please add your name and a valid email address or contact number.";
      error.hidden = false;
      (name ? form.elements.contact : form.elements.name).focus();
      return;
    }

    if (!PROJECT_ENQUIRY_ENDPOINT) {
      error.textContent = "Project enquiries are not connected yet. Please contact SNJI directly by email or WhatsApp.";
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
        throw new Error(result && typeof result.message === "string" ? result.message : "Unable to send your enquiry right now. Please try again.");
      }

      status.textContent = "Thanks, your project enquiry has been sent. SNJI will follow up using the contact details you provided.";
      status.hidden = false;
    } catch (submissionError) {
      error.textContent = submissionError instanceof TypeError
        ? "We couldn't send your enquiry just now. Please check your connection and try again."
        : submissionError.message || "Unable to send your enquiry right now. Please try again.";
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

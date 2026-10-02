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

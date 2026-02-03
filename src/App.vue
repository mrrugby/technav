<template>
  <div class="page" id="top">
    <div class="bg-texture" aria-hidden="true"></div>

    <header class="topbar">
      <a class="brand" href="#top">
        <span class="brand-mark" aria-hidden="true"></span>
        <span class="brand-name">TaifaDevs</span>
      </a>

      <nav class="nav">
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>

        <button
          class="icon-btn"
          type="button"
          @click="toggleTheme"
          aria-label="Toggle theme"
          :title="themeLabel"
        >
          <span class="dot"></span>
        </button>
      </nav>
    </header>

    <main class="main" id="contact">
      <div class="container">
        <section class="hero-copy">
          <p class="eyebrow">TaifaDevs (hosted on technav.store)</p>

          <h1>Minimal websites & systems that feel effortless.</h1>

          <p class="lead">
            We design and build modern web experiences with calm UI, clean code, and
            smooth delivery — so you get exactly what you asked for (and more).
          </p>

          <div class="cta-row">
            <button class="submit" type="button" @click="focusEmail">
              Start a project
            </button>

            <a class="secondary-cta" href="#projects">
              View projects →
            </a>
          </div>
        </section>

        <form class="form" @submit.prevent="submit" aria-label="Contact form">
          <label for="email">Your Email</label>

          <div class="input-row">
            <input
              id="email"
              ref="emailEl"
              v-model="email"
              type="email"
              placeholder="hello@example.com"
              autocomplete="email"
            />

            <button class="submit submit--soft" type="submit">
              Email us
            </button>
          </div>
        </form>

        <p class="footer">
          Prefer direct email?
          <a href="mailto:hello@taifadevs.com">*******</a>
        </p>

        <section id="projects" class="projects">
          <h2>Projects</h2>

          <div class="project-list">
            <a
              class="project"
              :href="p.url"
              target="_blank"
              rel="noopener"
              v-for="p in projects"
              :key="p.url"
            >
              <div class="project-title">{{ p.name }}</div>
              <div class="project-meta">{{ p.note }}</div>
            </a>
          </div>
        </section>

        <p class="tiny-note">
         TaifaDevs is the brand — technav.store is the current domain.
        </p>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";

const email = ref("");
const emailEl = ref(null);

const projects = [
  {
    name: "Portfolio",
    url: "https://portfolio.technav.store",
    note: "Conversational CV",
  },
  {
    name: "CouncilCare",
    url: "********",
    note: "Simple Ticketing System",
  },
];

function focusEmail() {
  emailEl.value?.focus();
  emailEl.value?.scrollIntoView({ behavior: "smooth", block: "center" });
}

function submit() {
  const v = email.value.trim();
  if (!v) return;

  window.location.href =
    `mailto:hello@taifadevs.com?subject=Project%20Inquiry&body=` +
    encodeURIComponent(`My email is: ${v}`);

  email.value = "";
}

function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("taifa_theme", theme);
}

function toggleTheme() {
  const current = document.documentElement.getAttribute("data-theme") || "light";
  setTheme(current === "dark" ? "light" : "dark");
}

const themeLabel = computed(() => {
  const current = document.documentElement.getAttribute("data-theme") || "light";
  return current === "dark" ? "Switch to light" : "Switch to dark";
});

onMounted(() => {
  setTheme(localStorage.getItem("taifa_theme") || "light");
});
</script>
<style src="./styles/app.css"></style>

<template>
  <div class="page" id="top">
    <div class="bg-texture" aria-hidden="true"></div>

    <header class="topbar">
      <a class="brand" href="#top">
        <img src="/logo-white.webp" alt="taifadevs logo" width="120" height="40" decoding="async"
          fetchpriority="high" />
      </a>

      <nav class="nav">
        <a href="#services" class="nav-link">
          <svg class="nav-ico" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M4 4h7v7H4V4zm9 0h7v7h-7V4zM4 13h7v7H4v-7zm9 0h7v7h-7v-7z"></path>
          </svg>
          <span>Services</span>
        </a>

        <a href="#pricing" class="nav-link">
          <svg class="nav-ico" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M20 10V4H14L4 14l6 6 10-10zm-5.5 1.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"></path>
          </svg>
          <span>Pricing</span>
        </a>

        <a href="#projects" class="nav-link">
          <svg class="nav-ico" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M10 4h4l1 2h5v14H4V6h5l1-2zm2 6a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"></path>
          </svg>
          <span>Projects</span>
        </a>

        <a href="#contact" class="nav-link">
          <svg class="nav-ico" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M20 4H4v14h4v3l4-3h8V4zm-2 6H6V8h12v2zm0 4H6v-2h12v2z"></path>
          </svg>
          <span>Contacts</span>
        </a>
      </nav>

      <button class="icon-btn" type="button" @click="toggleTheme" aria-label="Toggle theme" :title="themeLabel">
        <span class="dot"></span>
      </button>


    </header>

    <main class="main">
      <div class="container">
        <!-- HERO -->
        <section id="hero">
          <Hero @go-contact="goToContact" />
        </section>

        <!-- SERVICES -->
        <section id="services">
          <Services />
        </section>

        <!-- PRICING -->
        <section id="pricing">
          <Pricing />
        </section>

        <!-- WORK -->
        <section id="projects">
          <Suspense>
            <Work />
          </Suspense>
        </section>

        <!-- CONTACT -->
        <section id="contact">
          <Suspense>
            <Contact />
          </Suspense>
        </section>

      </div>
    </main>
  </div>
</template>

<script setup>
import { defineAsyncComponent, ref, computed, onMounted } from "vue";

const Work = defineAsyncComponent(() =>
  import("./components/Work.vue")
);

const Contact = defineAsyncComponent(() =>
  import("./components/Contact.vue")
);

import Hero from "./components/Hero.vue";
import Services from "./components/Services.vue";
import Pricing from "./components/Pricing.vue";

const email = ref("");
const emailEl = ref(null);
const theme = ref(localStorage.getItem("taifa_theme") || "dark");

function goToContact() {
  document.getElementById("contact")?.scrollIntoView({
    behavior: "auto",
    block: "start"
  });
}

function setTheme(t) {
  theme.value = t;
  document.documentElement.setAttribute("data-theme", t);
  localStorage.setItem("taifa_theme", t);
}

function toggleTheme() {
  setTheme(theme.value === "dark" ? "light" : "dark");
}
onMounted(() => {
  setTheme(theme.value);
});

const themeLabel = computed(() => {
  return theme.value === "dark"
    ? "Switch to light"
    : "Switch to dark";
});


function submit() {
  const v = email.value.trim();
  if (!v) return;

  window.location.href =
    `mailto:hello@taifadevs.com?subject=TaifaDevs%20Inquiry&body=` +
    encodeURIComponent(
      `My email is: ${v}\n\nWhat I need:\n- (Starter / Business / System / E-commerce)\n\nBusiness name:\n\nShort description:\n`
    );

  email.value = "";
}


</script>

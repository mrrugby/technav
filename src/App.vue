<template>
  <div class="page" id="top">
    <div class="bg-texture" aria-hidden="true"></div>

    <header class="topbar">
      <a class="brand" href="#top" @click.prevent="scrollTo('top')">
        <img 
        :src="logoSrc" 
        alt="taifadevs logo" 
        decoding="async"
        fetchpriority="high"
        />
      </a>

    <nav class="nav">
    <a href="#services" @click.prevent="scrollTo('services')" class="nav-link">
      <svg class="nav-ico" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 4h7v7H4V4zm9 0h7v7h-7V4zM4 13h7v7H4v-7zm9 0h7v7h-7v-7z"></path>
      </svg>
      <span>Services</span>
    </a>

    <a href="#pricing" @click.prevent="scrollTo('pricing')" class="nav-link">
      <svg class="nav-ico" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20 10V4H14L4 14l6 6 10-10zm-5.5 1.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"></path>
      </svg>
      <span>Pricing</span>
    </a>

    <a href="#projects" @click.prevent="scrollTo('projects')" class="nav-link">
      <svg class="nav-ico" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M10 4h4l1 2h5v14H4V6h5l1-2zm2 6a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"></path>
      </svg>
      <span>Projects</span>
    </a>

    <a href="#contact" @click.prevent="scrollTo('contact')" class="nav-link">
      <svg class="nav-ico" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20 4H4v14h4v3l4-3h8V4zm-2 6H6V8h12v2zm0 4H6v-2h12v2z"></path>
      </svg>
      <span>Contacts</span>
    </a>
    </nav>

    <button
      class="icon-btn"
      type="button"
      @click="toggleTheme"
      aria-label="Toggle theme"
      :title="themeLabel"
    >
      <span class="dot"></span>
    </button>
    

    </header>

    <main class="main">
      <div class="container">
        <!-- HERO -->
        <section class="hero-copy" aria-label="Hero">
          <p class="eyebrow">TaifaDevs • Nairobi, Kenya</p>

          <h1>Your trusted partner for modern IT solutions.</h1>

          <p class="lead">
            We make technology accessible to Business owners, starting with the smallest businesses. 
            You’ll get a clean website, clear pricing, and support you can depend on.
          </p>

          <div class="cta-row">
            <button class="submit" type="button" @click="goToContact">
              Get a quote
            </button>

            <a class="secondary-cta" href="#pricing" @click.prevent="scrollTo('pricing')">
              View packages →
            </a>
          </div>

          <p class="tiny-note">
            What you see is what you get. 
            We believe honest work starts with an honest quote.
          </p>
        </section>

        <!-- SERVICES -->
        <section id="services" class="projects" aria-label="Services">
          <h2>Services</h2>

          <div class="project-list">
            <div class="project" role="article" aria-label="Websites">
              <div class="project-title">Websites</div>
              <div class="project-meta">
                Simple, clean, mobile-friendly sites that help customers trust you and find you quickly.
              </div>
            </div>

            <div class="project" role="article" aria-label="Business tools">
              <div class="project-title">Business Tools & Simple Systems</div>
              <div class="project-meta">
                We build tools like Debtly — systems that help you track credit, customers, records, and daily operations.
              </div>
            </div>

            <div class="project" role="article" aria-label="Support">
              <div class="project-title">Support & Improvements</div>
              <div class="project-meta">
                Fix slow or outdated websites, update content, improve usability, and keep your site working properly.
              </div>
            </div>
          </div>
        </section>

        <!-- PRICING -->
        <section id="pricing" class="projects" aria-label="Pricing">
          <h2>Pricing</h2>

          <p class="lead" style="margin-top: 0;">
            Clear packages. Clear deliverables. If you need something custom, we will inform you of the cost upfront.
          </p>

          <div class="project-list">
            <!-- Starter -->
            <div class="project" role="article" aria-label="Starter Website Package">
              <div class="project-title">Starter Website — KES 25,000</div>
              <div class="project-meta">
                Best for: small businesses, shops, freelancers, side hustles.
                <br /><br />
                <strong>Includes:</strong>
                <ul style="margin: 10px 0 0; padding-left: 18px;">
                  <li>1–3 pages (Home, About, Contact)</li>
                  <li>Mobile-friendly design</li>
                  <li>WhatsApp chat button</li>
                  <li>Contact form + Google Maps</li>
                  <li>Basic SEO setup</li>
                  <li>1 round of revisions</li>
                </ul>
              </div>
            </div>

            <!-- Business -->
            <div class="project" role="article" aria-label="Business Website Package">
              <div class="project-title">Business Website — KES 40,000–70,000</div>
              <div class="project-meta">
                Best for: established SMEs that want a stronger online presence.
                <br /><br />
                 <strong>Includes</strong> everything in Starter, plus:
                <ul style="margin: 10px 0 0; padding-left: 18px;">
                  <li>Up to 6 pages</li>
                  <li>Custom layout based on your brand</li>
                  <li>Better SEO setup + image optimization</li>
                  <li>Basic analytics setup</li>
                  <li>2 rounds of revisions</li>
                </ul>
              </div>
            </div>

            <!-- Systems -->
            <div class="project" role="article" aria-label="Business Systems Package">
              <div class="project-title">Business Systems — From KES 80,000</div>
              <div class="project-meta">
                Best for: businesses that want to track operations and reduce manual work.
                <br /><br />
                 <strong>Examples:</strong>
                <ul style="margin: 10px 0 0; padding-left: 18px;">
                  <li>Credit tracking / customer balances (Debtly-style)</li>
                  <li>Simple CRM</li>
                  <li>Sales & records dashboard</li>
                </ul>

                <div style="margin-top: 10px;">
                   <strong>Includes:</strong> requirements call, secure login, training & handover, and post-launch support.
                </div>
              </div>
            </div>

            <!-- E-commerce -->
            <div class="project" role="article" aria-label="E-commerce Package">
              <div class="project-title">E-Commerce & Payments — From KES 120,000</div>
              <div class="project-meta">
                Best for: sellers who want orders + payments handled properly.
                <br /><br />
                <strong>Includes:</strong>
                <ul style="margin: 10px 0 0; padding-left: 18px;">
                  <li>Product/service catalogue</li>
                  <li>M-Pesa integration (where applicable)</li>
                  <li>Order management</li>
                  <li>Admin dashboard</li>
                  <li>Training on how to run it</li>
                </ul>
              </div>
            </div>
          </div>

          <p class="tiny-note">
            Note: Hosting and domain costs are usually separate (paid directly to the provider). We’ll guide you on the best options.
          </p>
        </section>

        <!-- WORK -->
        <section id="projects" class="projects" aria-label="Work">
        <div class="projects-header">
          <h2>Work</h2>

          <div class="tabs">
            <button
              :class="{ active: activeTab === 'projects' }"
              @click="activeTab = 'projects'"
            >
              Projects
            </button>

            <button
              :class="{ active: activeTab === 'ongoing' }"
              @click="activeTab = 'ongoing'"
            >
              Ongoing
            </button>
          </div>
        </div>

          <div class="project-list">
            <a
              class="project"
              :href="p.url"
              target="_blank"
              rel="noopener"
              v-for="p in displayedProjects"
              :key="p.url"
            >
              <div class="project-title">{{ p.name }}</div>
              <div class="project-meta">{{ p.note }}</div>
            </a>
          </div>

        <p class="tiny-note" v-if="activeTab === 'projects'">
          Debtly was built to help small businesses track credit without complicated setups. That’s the TaifaDevs spirit.
        </p>

        <p class="tiny-note" v-else>
          I am currently working on these projects, feel free to follow along, click on the projects to view live builds.
        </p>
        </section>

        <!-- CONTACT -->
        <section id="contact" class="projects" aria-label="Contact">
  <h2>Contact</h2>

  <p class="lead" style="margin-top: 0;">
    Tell us what you need. We will respond with a straightforward plan and a cost.
  </p>

  <form class="form" @submit.prevent="submitContact" aria-label="Contact form">
    <label for="name">Your Name</label>
    <input
      id="name"
      v-model="contactName"
      type="text"
      placeholder="Your name"
      autocomplete="name"
      required
    />

    <label for="email" style="margin-top: 12px;">Your Email</label>
    <input
      id="email"
      v-model="contactEmail"
      type="email"
      placeholder="hello@example.com"
      autocomplete="email"
      required
    />

    <label for="message" style="margin-top: 12px;">Message</label>
    <textarea
      id="message"
      v-model="contactMessage"
      placeholder="Briefly describe what you need (e.g. Starter Website, Business Website, System...)"
      required
    ></textarea>

    <div class="contact-actions">
      <button class="submit submit--soft" type="submit" :disabled="contactStatus === 'sending'">
        <span v-if="contactStatus !== 'sending'">Send</span>
        <span v-else>Sending…</span>
      </button>

      <a class="wa-btn" :href="whatsAppLink" target="_blank" rel="noopener">
        WhatsApp
      </a>
    </div>

    <p v-if="contactStatus === 'success'" class="form-status success">
      Message sent ✓ <br>We will reply shortly.
    </p>

    <p v-if="contactStatus === 'error'" class="form-status error">
      Something went wrong. Please try again or WhatsApp us.
    </p>
  </form>

  <p class="footer">
    Prefer direct email?
    <a href="mailto:taifa.devs@proton.me">taifa.devs@proton.me</a>
  </p>
        </section>

      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";

const email = ref("");
const emailEl = ref(null);
const theme = ref("light")
const contactName = ref("");
const contactEmail = ref("");
const contactMessage = ref("");
const contactStatus = ref("idle")
const activeTab = ref("projects");

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xaqbrvqk";
const WHATSAPP_NUMBER = "254704210555";

const whatsAppLink = computed(() => {
  const text =
    `Hi TaifaDevs, my name is ${contactName.value || ""}. ` +
    `I need help with: ${contactMessage.value || ""}`.trim();

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
});

const ongoingProjects = [
  {
    name: "AurivaLtd",
    url:"https://aurivabookkeeping.com/",
    note:"setting up email autoreply using resend",
  },
  {
    name: "ingo Tenant Tracker",
    url:"https://ingo-git-dev-snjshakas-projects.vercel.app/",
    note:"wiring up mpesa to receive payment data"
  }
];

const displayedProjects = computed(() =>{
  return activeTab.value === "projects"
  ? projects
  : ongoingProjects
})

async function submitContact() {
  contactStatus.value = "sending";

  try {
    const payload = {
      name: contactName.value.trim(),
      email: contactEmail.value.trim(),
      message: contactMessage.value.trim(),
    };

    const res = await fetch(FORMSPREE_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) throw new Error("Form submit failed");

    contactStatus.value = "success";
    contactName.value = "";
    contactEmail.value = "";
    contactMessage.value = "";

    // auto-hide success after a bit
    window.setTimeout(() => {
      contactStatus.value = "idle";
    }, 4500);
  } catch (e) {
    contactStatus.value = "error";
  }
}

const projects = [
  {
    name: "Portfolio",
    url: "https://portfolio.technav.store",
    note: "Conversational CV",
  },
  {
    name: "CouncilCare",
    url: "https://councilcare.onrender.com/",
    note: "Django-based system for IT repair request management across departments.",
  },
  {
    name: "Debtly",
    url: "https://deni-tracker.vercel.app/",
    note: "Simple mobile-friendly credit tracker for small businesses (stores locally on the phone).",
  },
  {
    name: "MiniPay",
    url: "https://github.com/mrrugby/minipay",
    note: "Simple M-Pesa + Django payment gateway project.",
  },
];


function setTheme(t){
  theme.value = t;
  document.documentElement.setAttribute("data-theme", t);
  localStorage.setItem("taifa_theme", t);
}

function toggleTheme(){
  setTheme(theme.value === "dark" ? "light" : "dark");
}

const logoSrc = computed(() => {
  return theme.value === "dark"
    ? "/logo-white.png"  
    : "/logo.png";  
});

onMounted(() => {
  setTheme(localStorage.getItem("taifa_theme") || "light");
});
function scrollTo(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

function goToContact() {
  scrollTo("contact");
  // small delay so scroll finishes before focusing
  window.setTimeout(() => emailEl.value?.focus(), 250);
}

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



const themeLabel = computed(() => {
  const current = document.documentElement.getAttribute("data-theme") || "light";
  return current === "dark" ? "Switch to light" : "Switch to dark";
});

onMounted(() => {
  setTheme(localStorage.getItem("taifa_theme") || "light");
});
</script>

<style src="./styles/app.css"></style>

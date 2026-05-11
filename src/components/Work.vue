<template>
  <section id="projects" class="projects" aria-label="Work">
    <div class="projects-header">
      <h2 style="font-size: 25px;">Work</h2>

      <div class="tabs">
        <button :class="{ active: activeTab === 'ongoing' }" @click="activeTab = 'ongoing'">
          Ongoing.
        </button>
        <button :class="{ active: activeTab === 'projects' }" @click="activeTab = 'projects'">
          Projects.
        </button>


      </div>
    </div>

    <div class="project-list">
      <a class="project" :class="{ featured: p.featured }" :href="p.url" target="_blank" rel="noopener"
        v-for="p in displayedProjects" :key="p.url" v-memo="[p.url]">
        <div class="project-title">{{ p.name }}
          <span v-if="p.featured" class="badge">Featured</span>
        </div>
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
</template>
<script setup>
import { ref, computed } from "vue";
const activeTab = ref("projects");
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
    note: "A lightweight credit tracking system built for small businesses. Designed to replace manual notebooks and reduce payment confusion.",
    featured: true
  },
  {
    name: "MiniPay",
    url: "https://github.com/mrrugby/minipay",
    note: "Simple M-Pesa + Django payment gateway project.",
  },
];
const ongoingProjects = [
  {
    name: "AurivaLtd",
    url: "https://aurivabookkeeping.com/",
    note: "setting up email autoreply using resend",
  },
  {
    name: "ingo Tenant Tracker",
    url: "https://ingo-git-dev-snjshakas-projects.vercel.app/",
    note: "wiring up mpesa to receive payment data"
  }
];


const displayedProjects = computed(() => {
  return activeTab.value === "projects"
    ? projects
    : ongoingProjects;

});


</script>
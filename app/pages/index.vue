<template>
  <div class="relative flex min-h-screen w-full flex-col">
    

    <!-- Main Content -->
    <main class="flex-grow pt-24 pb-10 px-4 md:px-10 flex flex-col items-center">
      <!-- Hero Section -->
      <section class="w-full max-w-[1200px] mx-auto flex flex-col items-center justify-center py-20 md:py-32 relative">
  <!-- Glow -->
  <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
    <div class="w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]"></div>
  </div>

  <!-- Content -->
  <div class="relative z-10 flex flex-col items-center gap-8 text-center max-w-[720px]">
    <!-- Badge -->
    <div class="inline-flex items-center gap-2 rounded-full border border-border-dark bg-card-dark px-3 py-1">
      <span class="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
      <span class="text-xs font-medium text-gray-300 uppercase tracking-wider">
        Accepting new projects
      </span>
    </div>

    <!-- Heading -->
    <h1 class="text-5xl md:text-7xl font-bold tracking-tight leading-[1.15] text-[#111714] dark:text-white">
      We build digital products
      <span class="block text-gray-400 dark:text-[#9FBBBB]">
        founders love.
      </span>
    </h1>

    <!-- Subtitle -->
    <p class="text-lg md:text-xl text-gray-600 dark:text-[#E0E0DB] leading-relaxed">
      Technav transforms complex ideas into scalable, high-performance web applications.
      No jargon — just results.
    </p>

    <!-- Buttons -->
    <div class="flex flex-col sm:flex-row gap-4 mt-4 w-full justify-center">
      <NuxtLink
        to="/contact"
        class="h-14 px-8 w-full sm:w-auto
               flex items-center justify-center
               rounded-full bg-primary text-[#111714]
               text-base font-bold
               transition-all hover:bg-[#00B0B3]
               hover:scale-[1.02] active:scale-[0.98]
               shadow-lg shadow-primary/20"
      >
        Get a Free Quote
      </NuxtLink>

      <NuxtLink
        to="/work"
        class="h-14 px-8 w-full sm:w-auto
               flex items-center justify-center
               rounded-full border border-gray-300 dark:border-border-dark
               text-[#111714] dark:text-white
               text-base font-bold
               transition-all
               hover:bg-gray-100 dark:hover:bg-card-dark"
      >
        View Work
      </NuxtLink>
    </div>
  </div>
      </section>


      <!-- Stats Section -->
      <section class="w-full max-w-[1200px] py-10 border-y border-gray-200 dark:border-border-dark/50">
        <div class="flex flex-wrap justify-center md:justify-between items-center gap-8 md:gap-4 px-4">
          <div class="flex items-center gap-4 opacity-70 hover:opacity-100 transition-opacity">
            <span class="material-symbols-outlined text-4xl text-gray-400 dark:text-[#7A9E9E]">verified_user</span>
            <div class="flex flex-col">
              <span class="text-2xl font-bold text-[#111714] dark:text-white">..</span>
              <span class="text-sm text-gray-500 dark:text-gray-400 font-medium">Startups Trusted</span>
            </div>
          </div>
          <div class="w-px h-12 bg-gray-200 dark:bg-border-dark hidden md:block"></div>
          <div class="flex items-center gap-4 opacity-70 hover:opacity-100 transition-opacity">
            <span class="material-symbols-outlined text-4xl text-gray-400 dark:text-[#7A9E9E]">monetization_on</span>
            <div class="flex flex-col">
              <span class="text-2xl font-bold text-[#111714] dark:text-white">$..</span>
              <span class="text-sm text-gray-500 dark:text-gray-400 font-medium">Revenue Generated</span>
            </div>
          </div>
          <div class="w-px h-12 bg-gray-200 dark:bg-border-dark hidden md:block"></div>
          <div class="flex items-center gap-4 opacity-70 hover:opacity-100 transition-opacity">
            <span class="material-symbols-outlined text-4xl text-gray-400 dark:text-[#7A9E9E]">star</span>
            <div class="flex flex-col">
              <span class="text-2xl font-bold text-[#111714] dark:text-white">../5</span>
              <span class="text-sm text-gray-500 dark:text-gray-400 font-medium">Clutch Rating</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Why Choose Technav -->
      <section class="w-full max-w-[1200px] py-24 flex flex-col gap-12">
        <div class="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div class="max-w-2xl">
            <h2 class="text-3xl md:text-5xl font-bold text-[#111714] dark:text-white tracking-tight mb-4">
              Why founders choose Technav
            </h2>
            <p class="text-lg text-gray-600 dark:text-[#E0E0DB]">
              We strip away the agency fluff and focus on speed, clarity, and results to help you scale efficiently.
            </p>
          </div>
          <NuxtLink class="text-primary font-bold hover:underline decoration-2 underline-offset-4 flex items-center gap-1" to="#">
            Read our manifesto <span class="material-symbols-outlined text-sm">arrow_forward</span>
          </NuxtLink>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="group relative rounded-2xl border border-gray-200 dark:border-border-dark bg-white dark:bg-card-dark p-8 transition-all hover:border-primary/50 hover:shadow-[0_0_30px_-10px_rgba(0,206,209,0.1)]">
            <div class="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-black transition-colors">
              <span class="material-symbols-outlined">rocket_launch</span>
            </div>
            <h3 class="mb-2 text-xl font-bold text-[#111714] dark:text-white">Velocity</h3>
            <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
              Ship your MVP in weeks, not months. Our agile process ensures you get to market faster than the competition.
            </p>
          </div>
          <div class="group relative rounded-2xl border border-gray-200 dark:border-border-dark bg-white dark:bg-card-dark p-8 transition-all hover:border-primary/50 hover:shadow-[0_0_30px_-10px_rgba(0,206,209,0.1)]">
            <div class="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-black transition-colors">
              <span class="material-symbols-outlined">visibility</span>
            </div>
            <h3 class="mb-2 text-xl font-bold text-[#111714] dark:text-white">Clarity</h3>
            <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
              Transparent pricing and a clear roadmap. You'll always know what's being built and when it will ship.
            </p>
          </div>
          <div class="group relative rounded-2xl border border-gray-200 dark:border-border-dark bg-white dark:bg-card-dark p-8 transition-all hover:border-primary/50 hover:shadow-[0_0_30px_-10px_rgba(0,206,209,0.1)]">
            <div class="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-black transition-colors">
              <span class="material-symbols-outlined">trending_up</span>
            </div>
            <h3 class="mb-2 text-xl font-bold text-[#111714] dark:text-white">Scalability</h3>
            <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
              Code that grows with your MRR. We build robust architectures ready to handle millions of users from day one.
            </p>
          </div>
        </div>
      </section>

      <!-- Call to Action Section -->
      <section class="w-full max-w-[1200px] py-16 md:py-32">
        <div class="relative overflow-hidden rounded-[2.5rem] bg-[#111714] dark:bg-gradient-to-br dark:from-[#133030] dark:to-[#0A2A2A] px-6 py-20 text-center md:px-20 md:py-28 border border-gray-200 dark:border-border-dark">
          <div class="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[100px] pointer-events-none"></div>
          <div class="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[100px] pointer-events-none"></div>
          <div class="relative z-10 flex flex-col items-center gap-6">
            <h2 class="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl">
              Ready to scale? <br/> Let's discuss your roadmap.
            </h2>
            <p class="max-w-xl text-lg text-gray-300 md:text-xl">
              Join the founders building the future with Technav. No pressure, just a conversation about your goals.
            </p>
                <div class="mt-8 flex flex-col sm:flex-row gap-4 w-full justify-center">
  <NuxtLink
    to="/contact"
    class="h-14 px-10 w-full sm:w-auto
           flex items-center justify-center
           rounded-full border border-[#3E6060]
           bg-[#1E3B3B] text-white
           text-lg font-bold
           transition-all hover:bg-[#2A4C4C]"
  >
    Get a Free Quote
  </NuxtLink>

  <NuxtLink
    to="/schedule-call"
    class="h-14 px-10 w-full sm:w-auto
           flex items-center justify-center
           rounded-full border border-[#3E6060]
           bg-[#1E3B3B] text-white
           text-lg font-bold
           transition-all hover:bg-[#2A4C4C]"
  >
    Schedule a Call
  </NuxtLink>
</div>

          </div>
        </div>
      </section>

      
    </main>
  </div>
</template>

<script setup>
  useHead({
    title: "Technav Landing Page",
    meta: [
      {
        name: "description",
        content: "Transforming complex ideas into scalable, high-performance web applications."
      }
    ]
  })
</script>




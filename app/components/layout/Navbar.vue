<template>
  <header class="fixed top-0 left-0 right-0 z-50 flex items-center justify-center px-4 py-4 md:px-10">
    <div
      class="flex w-full max-w-[1200px] items-center justify-between rounded-full
             border border-gray-200 dark:border-border-dark
             bg-white/80 dark:bg-[#1E3B3B]/80
             backdrop-blur-md px-6 py-3 shadow-sm"
    >
      <!-- Logo -->
      <div class="flex items-center gap-3">
        <span class="material-symbols-outlined text-primary">code_blocks</span>
        <NuxtLink
          to="/"
          class="text-[#111714] dark:text-white text-lg font-bold tracking-tight"
        >
          TechNav
        </NuxtLink>
      </div>

      <!-- Desktop Nav -->
      <nav class="hidden md:flex items-center gap-8">
        <NuxtLink
          to="/portfolio"
          class="nav-link"
        >Portfolio</NuxtLink>

        <NuxtLink
          to="/services"
          class="nav-link"
        >Services</NuxtLink>


        <NuxtLink
          to="/about"
          class="nav-link"
        >About</NuxtLink>
      </nav>

      <!-- Actions -->
      <div class="flex items-center gap-4">
        <NuxtLink
          to="/contact"
          class="hidden sm:flex h-10 px-6 items-center justify-center rounded-full
                 bg-primary text-[#111714] text-sm font-bold
                 transition-transform hover:scale-105 active:scale-95
                 shadow-[0_0_15px_rgba(0,206,209,0.3)]
                 hover:shadow-[0_0_25px_rgba(0,206,209,0.5)]"
        >
          Get Started
        </NuxtLink>

        <!-- Mobile Menu Button -->
        <button class="md:hidden text-[#111714] dark:text-white">
          <span class="material-symbols-outlined">menu</span>
        </button>
      </div>
    </div>
  </header>
</template>

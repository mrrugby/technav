<template>
  <footer
    class="w-full max-w-[1200px] mx-auto py-10
           border-t border-gray-200 dark:border-border-dark
           flex flex-col md:flex-row
           justify-between items-center gap-6"
  >
    <!-- Logo -->
    <div class="flex items-center gap-3">
      <span class="material-symbols-outlined text-primary">
        code_blocks
      </span>
      <span class="text-[#111714] dark:text-white font-bold text-lg">
        Technav
      </span>
    </div>

    <!-- Links -->
    <div class="flex gap-8 flex-wrap justify-center">
      <NuxtLink
        to="/privacy"
        class="text-sm text-gray-500 hover:text-[#111714] dark:hover:text-white transition-colors"
      >
        Privacy Policy
      </NuxtLink>

      <NuxtLink
        to="/terms"
        class="text-sm text-gray-500 hover:text-[#111714] dark:hover:text-white transition-colors"
      >
        Terms of Service
      </NuxtLink>

      <a
        href="https://twitter.com"
        target="_blank"
        rel="noopener"
        class="text-sm text-gray-500 hover:text-[#111714] dark:hover:text-white transition-colors"
      >
        Twitter
      </a>

      <a
        href="https://linkedin.com"
        target="_blank"
        rel="noopener"
        class="text-sm text-gray-500 hover:text-[#111714] dark:hover:text-white transition-colors"
      >
        LinkedIn
      </a>
    </div>

    <!-- Copyright -->
    <div class="text-sm text-gray-500 text-center">
      © {{ new Date().getFullYear() }} Technav Inc. All rights reserved.
    </div>
  </footer>
</template>

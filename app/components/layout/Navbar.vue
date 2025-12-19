<template>
    <nav class="border-b">
        <div class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <NuxtLink to="/" class="text-xl font-bold">TechNav</NuxtLink>
          
          <div class="space-x-6">
            <NuxtLink to="/services">Services</NuxtLink>
            <NuxtLink to="/about">About</NuxtLink>
            <NuxtLink to="/contact" class="font-semibold">
                Contact
            </NuxtLink>
            <NuxtLink to="/Portfolio">Portfolio</NuxtLink>
          </div>
        </div>
    </nav>
</template>
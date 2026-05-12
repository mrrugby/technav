<template>
  <section class="hero-copy" aria-label="Hero">
    <p class="eyebrow">TaifaDevs • Nairobi, Kenya</p>

    <h1>The Trusted Partner for Custom Business Systems and High-Converting Websites in Kenya.</h1>

    <p class="lead">
      We don't just build generic websites; we create mobile-first, high-performance digital assets that drive leads,
      increase sales, and edge out your competition. Experience reliable support and measurable growth tailored to your
      unique goals.
    </p>

    <div class="cta-row">
      <button class="submit" type="button" @click="handleClick">
        Start Your Project
      </button>

      <a class="secondary-cta" href="#pricing">
        Explore Our Solutions →
      </a>
    </div>

    <p class="tiny-note">
      Whether you’re just starting out or growing your business, we’ll help you build something solid and professional.
    </p>
  </section>
</template>

<script setup>
const emit = defineEmits(["go-contact"]);

function handleClick() {
  emit("go-contact");
}
</script>
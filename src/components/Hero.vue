<template>
  <section class="hero-copy" aria-label="Hero">
    <p class="eyebrow">TaifaDevs • Nairobi, Kenya</p>

    <h1>Helping businesses in Kenya build a stronger online presence.</h1>

    <p class="lead">
      From simple business websites to custom systems, we build clean, reliable solutions with clear pricing and support
      you can rely on.
    </p>

    <div class="cta-row">
      <button class="submit" type="button" @click="handleClick">
        Let’s build your website
      </button>

      <a class="secondary-cta" href="#pricing">
        View pricing →
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
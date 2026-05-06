<template>
    <section class="hero-copy" aria-label="Hero">
          <p class="eyebrow">TaifaDevs • Nairobi, Kenya</p>

          <h1>Your trusted partner for modern IT solutions.</h1>

          <p class="lead">
            We make technology accessible to Business owners, starting with the smallest businesses. 
            You’ll get a clean website, clear pricing, and support you can depend on.
          </p>

          <div class="cta-row">
            <button class="submit" type="button" @click="handleClick">
              Get a tailored quote
            </button>

            <a class="secondary-cta" href="#pricing">
              View packages →
            </a>
          </div>

          <p class="tiny-note">
            What you see is what you get. 
            We believe honest work starts with an honest quote.
          </p>
        </section>
</template>

<script setup>
const emit = defineEmits(["go-contact"]);

function handleClick() {
  emit("go-contact");
}
</script>
<script setup>
    useHead({
        title: 'TechNav - Your Gateway to Technology',
        meta: [
            {
                name: 'description',
                content: 'We build fast, secure and scalable websites for modern businesses.'
            },
        ]
    })
</script>

<template>
    <section class="py-24 text-center">
        <h1 class="text-5xl font-bold mb-6">
            Modern websites  that help businesses grow
        </h1>
        <p class="text-lg max-w-2xl mx-auto mb-8">
            technav designs and builds fast, seo-optimized websites
        </p>


        <NuxtLink
            to="/contact"
            class="inline-block px-6 py-3 bg-black text-white rounded-lg"
        >
            Get a free quote    
        </NuxtLink>
    </section>
</template>
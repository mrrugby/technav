<script setup>
    useHead({
        title: 'Contact - TechNav',
        meta: [
            {
                name: 'description',
                content: 'Get in touch with us for inquiries, collaborations, or to learn more about our services.'
            }
        ]
    })
</script>

<template>
    <section>
        <h1 class="text-4xl font-bold mb-6">contact</h1>
        <p class="max-w-xl mb-8 text-lg">
            tell us about your project and we'll get back to you shortly.
        </p>

        <form action="" class="max-w-xl space-y-4">
            <input type="text" class="w-full border px-4 py-3 rounded-lg" placeholder="Your Name" />
            <input type="email" class="w-full border px-4 py-3 rounded-lg" placeholder="Your Email" />
            <textarea class="w-full border px-4 py-3 rounded-lg" rows="5" placeholder="Your Message"></textarea>
            <button type="submit" class="bg-black text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
                send message
            </button>
        </form>
    </section>
</template>
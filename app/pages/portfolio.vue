<script setup>
    useHead({
        title: 'Portfolio - TechNav',
        meta: [
            {
                name: 'description',
                content: 'Showcase of our latest projects and case studies demonstrating our expertise in web design and development.'
            }
        ]
    })
</script>

<template>
    <section>
        <h1 class="text-4xl font-bold mb-6">portfolio</h1>
        <p class="max-w-2xl mb-12 text-lg">
            explore our latest projects and case studies that highlight our expertise in web design and development.    
        </p>

        <div class="grid md:grid-cols-3 gap-8">
            <div class="border rounded-xl p-6">
                <h3 class="font-semibold mb-2">local restaurant website</h3>
                <p class="text-sm">
                    clean responsive design for a local eatery, boosting online reservations by 30%.
                </p>
            </div>

            <div class="border rounded-xl p-6">
                <h3 class="font-semibold mb-2">startup landing page</h3>
                <p class="text-sm">
                    modern and engaging landing page for a tech startup, increasing conversion rates by 40%.
                </p>
            </div>

            <div class="border rounded-xl p-6">
                <h3 class="font-semibold mb-2">e-commerce platform</h3>
                <p class="text-sm">
                    robust and user-friendly e-commerce site for a retail brand, enhancing user experience and sales.
                </p>
            </div>

        </div>
    </section>
</template>
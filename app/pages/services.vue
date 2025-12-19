<script setup>
    useHead({
        title: 'Services - TechNav',
        meta: [
            {
                name: 'description',
                content: 'Proffesional website design and development services for modern businesses.'
            }
        ]
    })
</script>

<template>
    <section>
        <h1 class="text-4xl font-bold mb-6">Services</h1>
        <p class="max-w-2xl mb-12 text-lg">
            we design and build fast secure and seo friendly websites for modern businesses.
        </p>

        <div class="grid md:grid-cols-3 gap-8">
            <div class="border rounded-xl p-6">
                <h3 class="text-xl font-semibold mb-2">starter website</h3>
                <p class="mb-4">perfect for individuals and small businesses.</p>
                <ul class="list-disc list-inside text-sm space-y-1">
                    <li>1-3 pages</li>
                    <li>responsive design</li>
                    <li>basic SEO</li>
                </ul>
            </div>

            <div class="border rounded-xl p-6">
                <h3 class="text-xl font-semibold mb-2">business website</h3>
                <p class="mb-4">ideal for growing businesses and enterprises.</p>
                <ul class="list-disc list-inside text-sm space-y-1">
                    <li>4-8 pages</li>
                    <li>responsive design</li>
                    <li>advanced SEO</li>
                </ul>
            </div>

            <div class="border rounded-xl p-6">
                <h3 class="text-xl font-semibold mb-2">maintanance</h3>
                <p class="mb-4">best for ongoing support and updates.</p>
                <ul class="list-disc list-inside text-sm space-y-1">
                    <li>monthly updates</li>
                    <li>security patches</li>
                    <li>performance optimization</li>
                </ul>
            </div>

        </div>
    </section>
</template>
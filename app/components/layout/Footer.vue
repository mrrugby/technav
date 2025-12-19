<template>
    <footer class="bg-gray-800 text-white py-12">
        <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
                <h2 class="text-xl font-bold mb-4">TechNav</h2>
                <p class="text-gray-400">
                    Your trusted partner in navigating the tech landscape. We provide top-notch services to help your business thrive in the digital age.
                </p>
            </div>
            <div>
                <h2 class="text-xl font-bold mb-4">Quick Links</h2>
                <ul class="space-y-2">
                    <li><NuxtLink to="/" class="hover:underline">Home</NuxtLink></li>
                    <li><NuxtLink to="/services" class="hover:underline">Services</NuxtLink></li>
                    <li><NuxtLink to="/about" class="hover:underline">About Us</NuxtLink></li>
                    <li><NuxtLink to="/contact" class="hover:underline">Contact</NuxtLink></li>
                    <li><NuxtLink to="/portfolio" class="hover:underline">Portfolio</NuxtLink></li>
                </ul>
            </div>
            <div>
                <h2 class="text-xl font-bold mb-4">Contact Us</h2>
                <p class="text-gray-400">
                    123 Tech Street<br />
                    Innovation City, TX 75001<br />
                    Email: info@technav.com<br />
                    Phone: (123) 456-7890
                </p>
            </div>
        </div>
        <div class="text-center text-gray-500 mt-8">
            &copy; 2024 TechNav. All rights reserved.
        </div>
    </footer>
</template>
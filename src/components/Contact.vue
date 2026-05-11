<template>
    <section id="contact" class="projects" aria-label="Contact">
        <h2 style="font-size: 25px;">Contact</h2>

        <p class="lead" style="margin-top: 0;">
            Tell us what you need. We will respond with a straightforward plan and a cost.
        </p>

        <form class="form" @submit.prevent="submitContact" aria-label="Contact form">
            <label for="name">Your Name</label>
            <input id="name" v-model="contactName" type="text" placeholder="Your name" autocomplete="name" required />

            <label for="email" style="margin-top: 12px;">Your Email</label>
            <input id="email" v-model="contactEmail" type="email" placeholder="hello@example.com" autocomplete="email"
                required />

            <label for="message" style="margin-top: 12px;">Message</label>
            <textarea id="message" v-model="contactMessage"
                placeholder="Briefly describe what you need (e.g. Starter Website, Business Website, System...)"
                required></textarea>

            <div class="contact-actions">
                <button class="submit submit--soft" type="submit" :disabled="contactStatus === 'sending'">
                    <span v-if="contactStatus !== 'sending'">Send</span>
                    <span v-else>Sending....</span>
                </button>

                <a class="wa-btn" :href="getWhatsAppLink()" target="_blank" rel="noopener"
                    aria-label="Talk on WhatsApp">
                    <svg viewBox="0 0 32 32" class="wa-icon" aria-hidden="true">
                        <path
                            d="M19.11 17.53c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.12-.41-2.13-1.3-.79-.7-1.32-1.56-1.48-1.83-.16-.27-.02-.42.12-.56.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.04-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.44-.46-.61-.47h-.52c-.18 0-.48.07-.73.34-.25.27-.95.93-.95 2.27s.98 2.65 1.12 2.83c.14.18 1.92 2.93 4.66 4.11.65.28 1.16.45 1.56.58.66.21 1.26.18 1.73.11.53-.08 1.6-.66 1.83-1.29.23-.63.23-1.17.16-1.29-.07-.12-.25-.2-.52-.34z" />
                        <path
                            d="M26.67 5.33A13.33 13.33 0 0 0 4.18 20.91L3 28l7.26-1.15a13.33 13.33 0 0 0 16.41-21.52zM16 24.44c-1.9 0-3.75-.5-5.36-1.45l-.38-.23-4.31.68.73-4.2-.25-.4a10.67 10.67 0 1 1 9.57 5.6z" />
                    </svg>
                </a>
            </div>

            <p v-if="contactStatus === 'success'" class="form-status success">
                Message sent ✓ <br>We will reply shortly.
            </p>

            <p v-if="contactStatus === 'error'" class="form-status error">
                Something went wrong. Please try again or WhatsApp us.
            </p>
        </form>

        <p class="footer">
            Prefer direct email?
            <a href="mailto:taifa.devs@proton.me" style="color: whitesmoke;">taifa.devs@proton.me</a>
        </p>
    </section>
</template>
<script setup>
import { ref } from "vue";
const EMAILURL = "https://emailsendr.taifa-devs.workers.dev";
const WHATSAPP_NUMBER = "254704210555";

const contactName = ref("");
const contactEmail = ref("");
const contactMessage = ref("");
const contactStatus = ref("idle");


function getWhatsAppLink() {
    const text = (
        `Hi TaifaDevs, my name is ${contactName.value || ""}. ` +
        `I need help with: ${contactMessage.value || ""}`
    ).trim();

    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

async function submitContact() {
    contactStatus.value = "sending";

    try {
        const payload = {
            name: contactName.value.trim(),
            email: contactEmail.value.trim(),
            message: contactMessage.value.trim(),
        };

        const res = await fetch(EMAILURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(payload),
        });

        if (!res.ok) throw new Error("Form submit failed");

        contactStatus.value = "success";
        contactName.value = "";
        contactEmail.value = "";
        contactMessage.value = "";

        setTimeout(() => {
            contactStatus.value = "idle";
        }, 4500);
    } catch (e) {
        contactStatus.value = "error";
    }
}
</script>
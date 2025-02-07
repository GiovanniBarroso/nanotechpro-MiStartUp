<template>
    <div class="home">
        <!-- HERO SECTION -->
        <section class="hero">
            <div class="hero-overlay">
                <div class="hero-content">
                    <h1>Reparamos tu dispositivo con <span>precisión y rapidez</span></h1>
                    <p>
                        Diagnóstico rápido, reparaciones eficientes y garantía de calidad. En Nanotechpro,
                        hacemos que tu dispositivo vuelva a la vida sin complicaciones.
                    </p>
                </div>
            </div>
        </section>

        <!-- BOTÓN SEPARADO DEL HERO -->
        <div class="cta-container">
            <router-link to="/contact" class="cta-button">Solicita tu reparación ahora</router-link>
        </div>

        <!-- MARCAS -->
        <section class="brands">
            <h2 class="brands-text">Trabajamos con las mejores marcas</h2>
            <div class="brand-logos">
                <img v-for="brand in brands" :key="brand.name" :src="brand.logo" :alt="brand.name" />
            </div>
        </section>

        <!-- VALORES DE LA EMPRESA -->
        <section class="values">
            <h2 class="section-title">Nuestros Valores</h2>
            <div class="values-grid">
                <div v-for="value in values" :key="value.title" class="value-card">
                    <img :src="value.icon" :alt="value.title" />
                    <h3>{{ value.title }}</h3>
                    <p>{{ value.description }}</p>
                </div>
            </div>
        </section>

        <!-- RESEÑAS DE CLIENTES -->
        <section class="reviews">
            <h2 class="section-title"> Lo que dicen nuestros clientes</h2>
            <div class="review-container">
                <button @click="prevReview" class="arrow">&lt;</button>
                <div class="review-card">
                    <img :src="reviews[currentReview].image" class="client-photo" :alt="reviews[currentReview].name" />
                    <h3>{{ reviews[currentReview].name }}</h3>
                    <p>"{{ reviews[currentReview].comment }}"</p>
                    <p class="rating">Valoración: ⭐⭐⭐⭐⭐</p>
                </div>
                <button @click="nextReview" class="arrow">&gt;</button>
            </div>
        </section>

        <!-- UBICACIÓN Y FAQ -->
        <section class="location-faq">
            <div class="info-box">
                <h3>Ubicación</h3>
                <div class="map-container">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.9059169721113!2d-5.983557023026339!3d37.486546496999544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd124200766660cd%3A0x876b94055cebd47!2s41309%20La%20Rinconada%2C%20Sevilla!5e0!3m2!1ses!2ses!4v1738930312185!5m2!1ses!2ses"
                        width="100%" height="350" style="border:0;" allowfullscreen="" loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <p>📍 Dirección: Calle Ejemplo 123, Ciudad.</p>
                <p>📞 Teléfono: +34 123 456 789</p>
            </div>
            <div class="info-box">
                <h3>FAQ</h3>
                <p><strong>⏳ ¿Cuánto tarda la reparación?</strong><br> En promedio 24-48 horas.</p>
                <p><strong>✅ ¿Tienen garantía?</strong><br> Sí, de 3 a 6 meses.</p>
                <p><strong>📩 ¿Cómo contactar?</strong><br> WhatsApp o formulario.</p>
            </div>
        </section>

    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import "../assets/css/home.css";

const brands = ref([
    { name: "Apple", logo: "/brands/apple.png" },
    { name: "Samsung", logo: "/brands/samsung.png" },
    { name: "Huawei", logo: "/brands/huawei.png" },
    { name: "Oppo", logo: "/brands/oppo.png" },
    { name: "Xiaomi", logo: "/brands/xiaomi.png" },
]);

const values = ref([
    { title: "Tiempo Récord", description: "Reparamos en menos de 48 horas.", icon: "../../public/brands/card1.png" },
    { title: "Calidad", description: "Usamos repuestos originales.", icon: "../../public/brands/card2.png" },
    { title: "Sin Compromiso", description: "Presupuesto sin compromiso.", icon: "../../public/brands/card3.png" },
]);

const reviews = ref([
    { name: "Carlos López", comment: "Servicio rápido y confiable.", image: "../../public/brands/cliente1.jpg" },
    { name: "María González", comment: "Repararon mi móvil en 24 horas.", image: "../../public/brands/cliente2.jpeg" },
    { name: "David Fernández", comment: "Muy satisfecho con la atención.", image: "../../public/brands/cliente3.jpg" },
]);

const currentReview = ref(0);
let interval = null;

const prevReview = () => {
    currentReview.value = (currentReview.value - 1 + reviews.value.length) % reviews.value.length;
};

const nextReview = () => {
    currentReview.value = (currentReview.value + 1) % reviews.value.length;
};

onMounted(() => {
    interval = setInterval(nextReview, 3000);
});

onUnmounted(() => {
    clearInterval(interval);
});
</script>
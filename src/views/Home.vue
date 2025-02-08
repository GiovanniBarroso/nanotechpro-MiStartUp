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
        <section class="brands fade-in" v-intersect>
            <h2 class="brands-text">Trabajamos con las mejores marcas</h2>
            <div class="brand-logos">
                <img v-for="brand in brands" :key="brand.name" :src="brand.logo" :alt="brand.name" />
            </div>
        </section>

        <!-- VALORES DE LA EMPRESA -->
        <section class="values fade-in" v-intersect>
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
        <section class="reviews fade-in" v-intersect>
            <h2 class="section-title"> Lo que dicen nuestros clientes</h2>
            <div class="review-container">
                <button @click="prevReview" class="arrow">&lt;</button>
                <div class="review-card">
                    <img :src="reviews[currentReview]?.image" class="client-photo"
                        :alt="reviews[currentReview]?.name" />
                    <h3>{{ reviews[currentReview]?.name }}</h3>
                    <p>"{{ reviews[currentReview]?.comment }}"</p>
                    <p class="rating">Valoración: ⭐⭐⭐⭐⭐</p>
                </div>
                <button @click="nextReview" class="arrow">&gt;</button>
            </div>
        </section>

        <!-- UBICACIÓN Y FAQ -->
        <section class="location-faq ">
            <div class="info-box">
                <h3>📍 Ubicación</h3>
                <div class="map-container">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.9059169721113!2d-5.983557023026339!3d37.486546496999544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd124200766660cd%3A0x876b94055cebd47!2s41309%20La%20Rinconada%2C%20Sevilla!5e0!3m2!1ses!2ses!4v1738930312185!5m2!1ses!2ses"
                        width="100%" height="350" style="border:0;" allowfullscreen="" loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <p>📍 Dirección: Calle Ejemplo 123, Ciudad.</p>
                <p>📞 Teléfono: +34 123 456 789</p>
            </div>

            <div class="info-box faq-box">
                <h3>📌 Preguntas Frecuentes (FAQ)</h3>
                <ul class="faq-list">
                    <li>
                        <span class="faq-icon">⏳</span>
                        <strong>¿Cuánto tiempo tardan en reparar mi dispositivo?</strong> <br>
                        Nuestro tiempo de reparación varía según el daño y la disponibilidad de piezas. Sin embargo, en
                        la mayoría de los casos, lo tendrás listo en **24 a 48 horas**.
                    </li>
                    <li>
                        <span class="faq-icon">🔧</span>
                        <strong>¿Usan repuestos originales?</strong> <br>
                        Sí, trabajamos únicamente con **piezas originales y de alta calidad**, garantizando un
                        rendimiento óptimo y duradero para tu dispositivo.
                    </li>
                    <li>
                        <span class="faq-icon">✅</span>
                        <strong>¿Tienen garantía?</strong> <br>
                        Ofrecemos garantía de **3 a 6 meses** en todas nuestras reparaciones, para que tengas la
                        tranquilidad de que tu equipo estará en las mejores condiciones.
                    </li>
                    <li>
                        <span class="faq-icon">💳</span>
                        <strong>¿Qué métodos de pago aceptan?</strong> <br>
                        Puedes pagar con **tarjeta de crédito/débito, transferencia bancaria o efectivo en nuestra
                        tienda**.
                    </li>
                    <li>
                        <span class="faq-icon">📩</span>
                        <strong>¿Cómo puedo contactarlos?</strong> <br>
                        Puedes comunicarte con nosotros a través de **WhatsApp, llamada telefónica o nuestro formulario
                        en línea**. ¡Estamos aquí para ayudarte!
                    </li>
                </ul>
            </div>

        </section>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import "../assets/css/home.css";
import appleLogo from "@/assets/img/brands/apple.png";
import samsungLogo from "@/assets/img/brands/samsung.png";
import huaweiLogo from "@/assets/img/brands/huawei.png";
import oppoLogo from "@/assets/img/brands/oppo.png";
import xiaomiLogo from "@/assets/img/brands/xiaomi.png";
import value1 from "@/assets/img/brands/card1.png";
import value2 from "@/assets/img/brands/card2.png";
import value3 from "@/assets/img/brands/card3.png";
import client1 from "@/assets/img/brands/cliente1.jpg";
import client2 from "@/assets/img/brands/cliente2.jpeg";
import client3 from "@/assets/img/brands/cliente3.jpg";

const brands = ref([
    { name: "Apple", logo: appleLogo },
    { name: "Samsung", logo: samsungLogo },
    { name: "Huawei", logo: huaweiLogo },
    { name: "Oppo", logo: oppoLogo },
    { name: "Xiaomi", logo: xiaomiLogo },
]);

const values = ref([
    { title: "Tiempo Récord", description: "Optimizamos cada proceso para que tu reparación esté lista en menos de 48 horas, sin comprometer la calidad.", icon: value1 },
    { title: "Calidad Garantizada", description: "Trabajamos exclusivamente con repuestos originales y certificaciones de fábrica para asegurar el mejor rendimiento.", icon: value2 },
    { title: "Sin Compromiso", description: "Te ofrecemos un diagnóstico gratuito y un presupuesto sin compromiso. ¡Decide con total confianza!", icon: value3 },
]);

const reviews = ref([
    { name: "Carlos López", comment: "Servicio rápido y confiable.", image: client1 },
    { name: "María González", comment: "Repararon mi móvil en 24 horas.", image: client2 },
    { name: "David Fernández", comment: "Muy satisfecho con la atención.", image: client3 },
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

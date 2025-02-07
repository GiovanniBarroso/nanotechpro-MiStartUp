<template>
    <div class="home">
        <!-- HERO SECTION -->
        <section class="hero">
            <div class="hero-content">
                <h1>Reparamos tu dispositivo con <span>precisión y rapidez</span></h1>
                <p>
                    Diagnóstico rápido, reparaciones eficientes y garantía de calidad. En Nanotechpro,
                    hacemos que tu dispositivo vuelva a la vida sin complicaciones.
                </p>
                <router-link to="/contact" class="cta-button">Solicita tu reparación ahora</router-link>
            </div>
        </section>

        <!-- MARCAS -->
        <section class="brands">
            <h2>Trabajamos con las mejores marcas</h2>
            <div class="brand-logos">
                <img v-for="brand in brands" :key="brand.name" :src="brand.logo" :alt="brand.name" />
            </div>
        </section>

        <!-- VALORES DE LA EMPRESA -->
        <section class="values">
            <h2>Nuestros Valores</h2>
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
            <div class="location">
                <h3>Ubicación</h3>
                <img src="/map.png" alt="Ubicación" />
            </div>
            <div class="faq">
                <h3>FAQ</h3>
                <p><strong>¿Cuánto tarda en repararse mi dispositivo?</strong><br />Depende del daño, pero en promedio
                    24-48 horas.</p>
                <p><strong>¿Ofrecen garantía en las reparaciones?</strong><br />Sí, todas las reparaciones tienen
                    garantía de 6 meses.</p>
            </div>
        </section>
    </div>
</template>

<script setup>
import { ref } from 'vue';

// Marcas
const brands = ref([
    { name: "Apple", logo: "/brands/apple.png" },
    { name: "Samsung", logo: "/brands/samsung.png" },
    { name: "Huawei", logo: "/brands/huawei.png" },
    { name: "Oppo", logo: "/brands/oppo.png" },
    { name: "Xiaomi", logo: "/brands/xiaomi.png" },
]);

// Valores de la empresa
const values = ref([
    { title: "Tiempo Récord", description: "Reparamos en menos de 48 horas.", icon: "/icons/time.png" },
    { title: "Calidad", description: "Usamos repuestos originales.", icon: "/icons/quality.png" },
    { title: "Sin Compromiso", description: "Presupuesto sin compromiso.", icon: "/icons/no_commitment.png" },
]);

// Reseñas de clientes (carrusel)
const reviews = ref([
    { name: "Carlos López", comment: "Servicio rápido y confiable.", image: "../../public/brands/cliente1.jpg" },
    { name: "María González", comment: "Repararon mi móvil en 24 horas.", image: "../../public/brands/cliente2.jpeg" },
    { name: "David Fernández", comment: "Muy satisfecho con la atención.", image: "../../public/brands/cliente3.jpg" },
]);

const currentReview = ref(0);

const prevReview = () => {
    currentReview.value = (currentReview.value - 1 + reviews.value.length) % reviews.value.length;
};
const nextReview = () => {
    currentReview.value = (currentReview.value + 1) % reviews.value.length;
};
</script>

<style scoped>
/* GENERAL */
.home {
    font-family: 'Poppins', sans-serif;
    background: #f5f5f5;
    color: #333;
}

/* HERO SECTION */
.hero {
    background: url('/hero-bg.jpg') no-repeat center center/cover;
    text-align: center;
    padding: 100px 20px;
}

.hero-content {
    background: rgba(0, 0, 0, 0.8);
    padding: 40px;
    border-radius: 10px;
    display: inline-block;
    color: white;
}

.hero h1 {
    font-size: 2.5rem;
}

.hero span {
    color: #ffeb3b;
}

.cta-button {
    background: #ffeb3b;
    padding: 12px 20px;
    text-decoration: none;
    color: black;
    border-radius: 5px;
    font-weight: bold;
}

/* MARCAS */
.brands {
    text-align: center;
    padding: 50px;
}

.brand-logos {
    display: flex;
    justify-content: center;
    gap: 40px;
}

.brand-logos img {
    width: 80px;
}

/* VALORES */
.section-title {
    background: #007bff;
    color: white;
    padding: 10px;
    border-radius: 5px;
    text-align: center;
}

.values {
    background: #1a1a1a;
    color: white;
    padding: 0px;
    text-align: center;
}

.values-grid {
    display: flex;
    justify-content: center;
    gap: 30px;
}

.value-card {
    background: #222;
    padding: 20px;
    border-radius: 10px;
    width: 200px;
}

.value-card img {
    width: 50px;
}

/* CARRUSEL */
.review-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
}

.review-card {
    background: white;
    padding: 20px;
    border-radius: 15px;
    width: 350px;
    text-align: center;
}

.client-photo {
    width: 80px;
    height: 80px;
    border-radius: 50%;
}

.arrow {
    font-size: 2.5rem;
    cursor: pointer;
}

/* UBICACIÓN Y FAQ */
.location-faq {
    display: flex;
    justify-content: space-between;
    padding: 50px;
}

.location img {
    width: 300px;
    border-radius: 10px;
}

.faq p {
    margin-bottom: 10px;
}
</style>
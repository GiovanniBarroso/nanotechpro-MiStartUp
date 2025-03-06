<template>
    <nav class="navbar">
        <div class="container">
            <!-- Logo -->
            <div class="logo">
                <img :src="logo" alt="Logo Nanotechpro" />
                <span>NANOTECHPRO</span>
            </div>

            <!-- Botón menú hamburguesa -->
            <button class="menu-toggle" @click="toggleMenu">
                <span :class="{ 'open': isMenuOpen }"></span>
                <span :class="{ 'open': isMenuOpen }"></span>
                <span :class="{ 'open': isMenuOpen }"></span>
            </button>

            <!-- Enlaces navegación -->
            <ul :class="['nav-links', { 'open': isMenuOpen }]">
                <li><router-link to="/" @click="closeMenu">Inicio</router-link></li>
                <li><router-link to="/products" @click="closeMenu">Productos</router-link></li>
                <li><router-link to="/contact" @click="closeMenu">Contacto</router-link></li>
                <li><router-link to="/login" @click="closeMenu">Login</router-link></li>
            </ul>
        </div>
    </nav>
</template>

<script setup>
import { ref } from 'vue';
import logo from '@/assets/img/brands/logo.png';

const isMenuOpen = ref(false);

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
    isMenuOpen.value = false;
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Exo+2:wght@400;600;700&family=Orbitron:wght@400;700&display=swap');

/* NAVBAR */
.navbar {
    background: #007bff;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    padding: 12px 0;
    position: sticky;
    top: 0;
    width: 100%;
    z-index: 1000;
    transition: background 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

/* CONTENEDOR */
.container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
}

/* LOGO */
.logo {
    display: flex;
    align-items: center;
    gap: 12px;
}

.logo img {
    width: 50px;
    height: 50px;
}

.logo span {
    font-size: 1.8rem;
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #fff;
    font-family: 'Orbitron', sans-serif;
}

/* ENLACES */
.nav-links {
    list-style: none;
    display: flex;
    gap: 25px;
}

.nav-links li a {
    position: relative;
    color: #fff;
    text-decoration: none;
    font-size: 1.1rem;
    font-weight: 600;
    font-family: 'Exo 2', sans-serif;
    transition: color 0.3s;
}

.nav-links li a::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: #FF9800;
    transition: width 0.3s;
}

.nav-links li a:hover {
    color: #FFD166;
}

.nav-links li a:hover::after {
    width: 100%;
}

/* MENÚ HAMBURGUESA */
.menu-toggle {
    display: none;
    flex-direction: column;
    gap: 5px;
    background: none;
    border: none;
    cursor: pointer;
}

.menu-toggle span {
    width: 25px;
    height: 3px;
    background: #fff;
    border-radius: 2px;
    transition: transform 0.4s, opacity 0.4s;
}

.menu-toggle span.open:nth-child(1) {
    transform: translateY(8px) rotate(45deg);
}

.menu-toggle span.open:nth-child(2) {
    opacity: 0;
}

.menu-toggle span.open:nth-child(3) {
    transform: translateY(-8px) rotate(-45deg);
}

/* RESPONSIVE */
@media (max-width: 768px) {

    .menu-toggle {
        display: flex;
    }

    .nav-links {
        position: absolute;
        top: 70px;
        right: 0;
        flex-direction: column;
        width: 100%;
        background: #007bff;
        padding: 20px 0;
        gap: 15px;
        align-items: center;
        transform: translateY(-100%);
        opacity: 0;
        pointer-events: none;
        transition: transform 0.4s ease, opacity 0.4s ease;
    }

    .nav-links.open {
        transform: translateY(0);
        opacity: 1;
        pointer-events: all;
    }

    .nav-links li {
        width: 100%;
        text-align: center;
    }

    .nav-links li a {
        display: block;
        width: 100%;
        padding: 10px 0;
    }
}
</style>
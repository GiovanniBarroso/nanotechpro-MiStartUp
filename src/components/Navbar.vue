<template>
    <nav class="navbar">
        <div class="container">
            <!-- Logo -->
            <div class="logo">
                <img src="/brands/logo.png" alt="Logo Nanotechpro" />
                <span>NANOTECHPRO</span>
            </div>

            <!-- Botón de menú hamburguesa -->
            <button class="menu-toggle" @click="toggleMenu">☰</button>

            <!-- Enlaces de navegación -->
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

const isMenuOpen = ref(false);

// Función para abrir/cerrar el menú
const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
};

// Función para cerrar el menú al hacer clic en un enlace
const closeMenu = () => {
    isMenuOpen.value = false;
};
</script>

<style scoped>
/* IMPORTAMOS LAS TIPOGRAFÍAS */
@import url('https://fonts.googleapis.com/css2?family=Exo+2:wght@400;600;700&family=Orbitron:wght@400;700&display=swap');

/* NAVBAR GENERAL */
.navbar {
    background: #007bff;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    padding: 15px 0;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1000;
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
    width: 55px;
    height: 55px;
}

.logo span {
    font-size: 2rem;
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: white;
    font-family: 'Orbitron', sans-serif;
}

/* ENLACES DE NAVEGACIÓN */
.nav-links {
    list-style: none;
    display: flex;
    gap: 25px;
}

.nav-links li a {
    color: white;
    text-decoration: none;
    font-size: 1.1rem;
    font-weight: 600;
    font-family: 'Exo 2', sans-serif;
    transition: all 0.3s ease-in-out;
}

.nav-links li a:hover {
    color: #FF9800;
    transform: scale(1.1);
}

/* BOTÓN MENÚ HAMBURGUESA */
.menu-toggle {
    display: none;
    background: none;
    border: none;
    font-size: 2rem;
    color: white;
    cursor: pointer;
}

/* ESTILO RESPONSIVE */
@media (max-width: 768px) {

    /* Ajustar contenedor */
    .container {
        flex-direction: row;
        justify-content: space-between;
        padding: 10px 20px;
    }

    /* Botón hamburguesa visible */
    .menu-toggle {
        display: block;
    }

    /* Ocultar menú en móvil */
    .nav-links {
        display: none;
        flex-direction: column;
        position: absolute;
        top: 70px;
        right: 0;
        width: 100%;
        background: #007bff;
        text-align: center;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        padding: 15px 0;
    }

    /* Mostrar menú cuando está abierto */
    .nav-links.open {
        display: flex;
    }

    .nav-links li {
        padding: 10px 0;
    }
}
</style>
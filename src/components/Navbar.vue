<template>
    <nav class="navbar">
        <div class="container">
            <div class="logo">
                <img src="/brands/logo.png" alt="Logo Nanotechpro" />
                <span>NANOTECHPRO</span>
            </div>
            <ul class="nav-links">
                <li><router-link to="/">Inicio</router-link></li>
                <li><router-link to="/products">Productos</router-link></li>
                <li><router-link to="/contact">Contacto</router-link></li>
                <li><router-link to="/login">Login</router-link></li>
            </ul>
        </div>
    </nav>
</template>

<style scoped>
.navbar {
    background: #007bff;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    padding: 15px 0;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1000;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
}

.logo {
    display: flex;
    align-items: center;
    gap: 12px;
}

.logo img {
    width: 60px;
    height: 60px;
}

.logo span {
    font-size: 1.6rem;
    font-weight: bold;
    color: white;
    font-family: 'Poppins', sans-serif;
}

.nav-links {
    list-style: none;
    display: flex;
    gap: 25px;
}

.nav-links li a {
    color: white;
    text-decoration: none;
    font-size: 1rem;
    font-weight: 500;
    transition: all 0.3s ease-in-out;
}

.nav-links li a:hover {
    color: #ffeb3b;
    transform: scale(1.1);
}

@media (max-width: 768px) {
    .container {
        flex-direction: column;
        align-items: center;
    }

    .nav-links {
        flex-direction: column;
        text-align: center;
        gap: 15px;
    }
}
</style>

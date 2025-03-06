<template>
    <footer class="footer">
        <div class="footer-container">
            <!-- Sección de contacto -->
            <div class="footer-section">
                <h3>📌 Sección de Contacto</h3>
                <p>📍 Dirección: Calle Ejemplo 123, Ciudad.</p>
                <p>📞 Teléfono: +34 123 456 789</p>
                <p>✉️ Email: nanotechpro@gmail.com</p>
                <p>⏳ Horario: Lunes a Sábado - 9:00 AM a 7:00 PM.</p>
            </div>

            <!-- Mapa del Sitio -->
            <div class="footer-section">
                <h3>🗺️ Mapa del Sitio</h3>
                <ul>
                    <li><router-link to="/" @click="scrollToTop">🏠 Inicio</router-link></li>
                    <li><router-link to="/products" @click="scrollToTop">🛠️ Servicios</router-link></li>
                    <li><router-link to="/products" @click="scrollToTop">💼 Marcas</router-link></li>
                    <li><router-link to="/contact" @click="scrollToTop">📩 Contacto</router-link></li>
                    <li><router-link to="/login" @click="scrollToTop">🔐 Área de Clientes</router-link></li>
                </ul>
            </div>

            <!-- Redes Sociales -->
            <div class="footer-section">
                <h3>📱 Redes Sociales</h3>
                <div class="social-icons">
                    <a href="#" target="_blank" aria-label="Facebook">
                        <img :src="facebookIcon" alt="Facebook">
                    </a>
                    <a href="#" target="_blank" aria-label="Twitter">
                        <img :src="twitterIcon" alt="Twitter">
                    </a>
                    <a href="#" target="_blank" aria-label="Instagram">
                        <img :src="instagramIcon" alt="Instagram">
                    </a>
                    <a href="#" target="_blank" aria-label="YouTube">
                        <img :src="youtubeIcon" alt="YouTube">
                    </a>
                </div>
            </div>
        </div>

        <!-- Call to Action -->
        <div class="footer-cta">
            <p>⚡ ¡Confía en Nanotechpro, expertos en darle vida a tu tecnología! ⚡</p>
        </div>

        <!-- Copyright -->
        <div class="footer-bottom">
            <p>© 2024 NANOTECHPRO - Todos los derechos reservados</p>
            <p>
                <a href="#">Política de Privacidad</a> |
                <a href="#">Términos y Condiciones</a>
            </p>
        </div>
    </footer>
</template>

<script setup>
import facebookIcon from "@/assets/img/brands/facebook-icon.png";
import twitterIcon from "@/assets/img/brands/twitter-icon.png";
import instagramIcon from "@/assets/img/brands/ig-icon.png";
import youtubeIcon from "@/assets/img/brands/yt-icon.png";

const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
};
</script>

<style scoped>
/* Estilo general */
.footer {
    background: #222;
    color: #fff;
    padding: 40px 0;
    font-family: 'Poppins', sans-serif;
}

/* Grid responsive */
.footer-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 40px;
    max-width: 1200px;
    margin: 0 auto;
    padding: 50px;
    text-align: left;
}

/* Secciones uniformes */
.footer-section {
    margin: 20px 0;
}

/* Títulos */
.footer-section h3 {
    font-size: 1.3rem;
    margin-bottom: 10px;
    border-bottom: 2px solid #FF9800;
    padding-bottom: 5px;
    color: #FF9800;
    display: inline-block;
}

/* Textos */
.footer-section p {
    margin: 5px 0;
    font-size: 0.9rem;
}

/* Enlaces */
.footer-section a,
.footer-bottom a {
    color: white;
    text-decoration: none;
    position: relative;
    transition: color 0.3s;
}

.footer-section a:hover,
.footer-bottom a:hover {
    color: #FFD166;
}

.footer-section a::after,
.footer-bottom a::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -3px;
    width: 0;
    height: 2px;
    background-color: #FF9800;
    transition: width 0.3s;
}

.footer-section a:hover::after,
.footer-bottom a:hover::after {
    width: 100%;
}

/* Listas */
.footer-section ul {
    list-style: none;
    padding: 0;
}

.footer-section ul li {
    margin-bottom: 5px;
}

/* Iconos sociales */
.social-icons {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 15px;
    margin-top: 10px;
}

.social-icons img {
    width: 40px;
    height: 40px;
    transition: transform 0.4s ease, filter 0.4s ease;
    filter: brightness(0) invert(1);
}

.social-icons img:hover {
    transform: scale(1.3) rotate(10deg);
    filter: brightness(1.2);
}

/* Call to action */
.footer-cta {
    text-align: center;
    margin: 30px 0;
    font-size: 1rem;
    color: #FFD166;
}

/* Copyright */
.footer-bottom {
    text-align: center;
    padding-top: 15px;
    border-top: 1px solid #444;
    margin-top: 20px;
    font-size: 0.9rem;
}

/* Responsive */
@media (max-width: 600px) {
    .footer-container {
        grid-template-columns: 1fr;
        text-align: center;
    }
    .social-icons {
        justify-content: center;
    }
}
</style>

<template>
    <div class="contact-page">
        <!-- TÍTULO -->
        <h2 class="contact-title">
            ¿Tienes dudas? <br />
            <span>Te ayudamos de inmediato</span>
        </h2>

        <!-- CONTENEDOR PRINCIPAL -->
        <div class="contact-container">
            <!-- FORMULARIO -->
            <form class="contact-form" @submit.prevent="handleSubmit">
                <div class="input-group">
                    <i class="fas fa-user"></i>
                    <input type="text" v-model="name" placeholder="Nombre de Usuario" required />
                </div>
                <div class="input-group">
                    <i class="fas fa-envelope"></i>
                    <input type="email" v-model="email" placeholder="Email" required />
                </div>
                <div class="input-group">
                    <i class="fas fa-phone"></i>
                    <input type="tel" v-model="phone" placeholder="Número de teléfono" required />
                </div>
                <textarea v-model="message" placeholder="Mensaje" required></textarea>
                <button type="submit" :disabled="loading">
                    <span v-if="!loading">Enviar</span>
                    <span v-else class="loader"></span>
                </button>
            </form>

            <!-- INFORMACIÓN DE CONTACTO + REDES SOCIALES -->
            <div class="contact-info">
                <h3>Otros métodos de contacto</h3>
                <div class="social-icons">
                    <a href="#" target="_blank">
                        <img src="../../brands/facebook icon.png" alt="Facebook" />
                    </a>
                    <a href="#" target="_blank">
                        <img src="../../brands/twitter icon.png" alt="Twitter" />
                    </a>
                    <a href="#" target="_blank">
                        <img src="../../brands/ig icon.png" alt="Instagram" />
                    </a>
                </div>
                <p><i class="fas fa-envelope"></i> <strong>Correo:</strong> nanotechpro@gmail.com</p>
                <p><i class="fas fa-phone"></i> <strong>Teléfono:</strong> +34 123 456 789</p>
                <p><i class="fas fa-map-marker-alt"></i> <strong>Dirección:</strong> Calle Ejemplo 123, Ciudad</p>
                
                <!-- MAPA INTERACTIVO -->
                <div class="map-container">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.9059169721113!2d-5.983557023026339!3d37.486546496999544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd124200766660cd%3A0x876b94055cebd47!2s41309%20La%20Rinconada%2C%20Sevilla!5e0!3m2!1ses!2ses!4v1738930312185!5m2!1ses!2ses"
                        width="100%" height="185" style="border:0;" allowfullscreen="" loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import "../assets/css/contact.css";

const name = ref("");
const email = ref("");
const phone = ref("");
const message = ref("");
const loading = ref(false);

const handleSubmit = () => {
    loading.value = true;
    setTimeout(() => {
        loading.value = false;
        alert("Mensaje enviado con éxito");
    }, 2000);
};
</script>

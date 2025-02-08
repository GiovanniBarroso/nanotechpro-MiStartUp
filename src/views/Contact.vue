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
            <form class="contact-form">
                <input type="text" placeholder="Nombre de Usuario" required />
                <input type="email" placeholder="Email" required />
                <input type="tel" placeholder="Número de teléfono" required />
                <textarea placeholder="Mensaje" required></textarea>
                <button type="submit">Enviar</button>
            </form>

            <!-- INFORMACIÓN DE CONTACTO + REDES SOCIALES -->
            <div class="contact-info">
                <h3>Otros métodos de contacto</h3>

                <!-- Redes sociales con logos -->
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
            </div>
        </div>
    </div>
</template>

<script setup>
import "../assets/css/contact.css";
</script>
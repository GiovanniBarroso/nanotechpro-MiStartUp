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

            <!-- Enlaces rápidos -->
            <div class="footer-section">
                <h3>⚡ Enlaces Rápidos</h3>
                <ul>
                    <li><router-link to="/">🏠 Inicio</router-link></li>
                    <li><router-link to="/products">🛒 Productos</router-link></li>
                    <li><router-link to="/contact">📩 Contacto</router-link></li>
                    <li><router-link to="/login">🔐 Login</router-link></li>
                </ul>
            </div>

            <!-- Redes Sociales -->
            <div class="footer-section">
                <h3>Redes Sociales 📱</h3>
                <div class="social-icons">
                    <a href="#" target="_blank"><img src="../../brands/facebook icon.png" alt="Facebook"></a>
                    <a href="#" target="_blank"><img src="../../brands/twitter icon.png" alt="Twitter"></a>
                    <a href="#" target="_blank"><img src="../../brands/ig icon.png" alt="Instagram"></a>
                    <a href="#" target="_blank"><img src="../../brands/yt icon.png" alt="YouTube"></a>
                </div>
            </div>
        </div>

        <!-- Copyright -->
        <div class="footer-bottom">
            <p>© 2024 NANOTECHPRO - Todos los derechos reservados</p>
            <p><a href="#">Política de Privacidad</a> | <a href="#">Términos y Condiciones</a></p>
        </div>
    </footer>
</template>

<style scoped>
/* Estilos generales */
.footer {
    background: #222;
    color: white;
    padding: 40px 0;
    font-family: 'Poppins', sans-serif;
}

/* Contenedor principal */
.footer-container {
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    flex-wrap: wrap;
    max-width: 1200px;
    margin: 0 auto;
    text-align: left;
    padding: 50px;
}

/* Sección del footer */
.footer-section h3 {
    align-items: center;
    flex: 1;
    min-width: 250px;
    margin: 20px;

}

/* Títulos */
.footer-section h3 {
    font-size: 1.1rem;
    margin-bottom: 10px;
    border-bottom: 2px solid #ffeb3b;
    padding-bottom: 5px;
    display: inline-block;
}

/* Texto del footer */
.footer-section p {
    margin: 5px 0;
    font-size: 0.9rem;
}

/* Enlaces */
.footer-section a {
    color: white;
    text-decoration: none;
}

.footer-section a:hover {
    color: #ffeb3b;
    text-decoration: underline;
}

/* Estilos de lista */
.footer-section ul {
    list-style: none;
    padding: 0;
}

.footer-section ul li {
    margin-bottom: 5px;
}

.footer-section ul li a {
    color: white;
    text-decoration: none;
    transition: color 0.3s ease-in-out;
}

.footer-section ul li a:hover {
    color: #ffeb3b;
}

/* Redes sociales */
.social-icons {
    display: flex;
    justify-content: center; /* Centra los iconos horizontalmente */
    align-items: center; /* Alinea los iconos verticalmente */
    gap: 15px;
    margin-top: 10px;
    text-align: center;
}

.social-icons img {
    width: 35px;
    height: 35px;
    filter: brightness(0) invert(1); /* Convierte iconos negros a blancos */
    transition: transform 0.3s ease-in-out, filter 0.3s ease-in-out;
    display: block; /* Asegura que no haya espacio extra debajo del icono */
}

.social-icons img:hover {
    transform: scale(1.2);
    filter: brightness(1); /* Cambia el color al hacer hover */
}



/* Copyright */
.footer-bottom {
    text-align: center;
    padding-top: 15px;
    border-top: 1px solid #444;
    margin-top: 20px;
    font-size: 0.9rem;
}

.footer-bottom a {
    color: #ffeb3b;
    text-decoration: none;
    font-weight: bold;
}

.footer-bottom a:hover {
    text-decoration: underline;
}
</style>
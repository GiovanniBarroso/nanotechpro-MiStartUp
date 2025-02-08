<template>
    <div class="login-page">
        <div class="login-container">
            <!-- Logo de la empresa (opcional) -->
            <div class="logo">
                <img src="/brands/logo.png" alt="Nanotechpro Logo" />


            </div>

            <!-- Título -->
            <h2>Iniciar Sesión</h2>

            <!-- Formulario -->
            <form class="login-form" @submit.prevent="handleLogin">
                <div class="input-group">
                    <i class="fas fa-user"></i>
                    <input type="text" placeholder="Nombre de Usuario" v-model="username" required />
                </div>

                <div class="input-group">
                    <i class="fas fa-lock"></i>
                    <input type="password" placeholder="Contraseña" v-model="password" required />
                </div>

                <div class="options">
                    <label>
                        <input type="checkbox" v-model="rememberMe" />
                        Recordar sesión
                    </label>
                    <a href="#">¿Olvidaste tu contraseña?</a>
                </div>

                <button type="submit" :disabled="loading || !username || !password">
                    <span v-if="!loading">Entrar</span>
                    <span v-else class="loader"></span>
                </button>

            </form>

            <!-- Divider -->
            <div class="divider">
                <span>O inicia sesión con</span>
            </div>

            <!-- Redes sociales -->
            <div class="social-login">
                <button class="google-login"><i class="fab fa-google"></i> Google</button>
                <button class="facebook-login"><i class="fab fa-facebook"></i> Facebook</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import "../assets/css/login.css";

const username = ref("");
const password = ref("");
const rememberMe = ref(false);
const loading = ref(false);

const handleLogin = () => {
    loading.value = true;

    setTimeout(() => {
        loading.value = false;
        alert("Inicio de sesión exitoso");
    }, 2000);
};
</script>
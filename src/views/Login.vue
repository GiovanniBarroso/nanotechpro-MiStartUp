<template>
    <div class="login-page">
        <div class="login-container">
            <!-- Logo de la empresa -->
            <div class="logo">
                <img :src="logo" alt="Nanotechpro Logo" />
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

                <!-- Botón de envío con animación de carga -->
                <button type="submit" :disabled="loading || !isFormValid">
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
import { ref, computed } from "vue";
import logo from "@/assets/img/brands/logo.png"; 
import "../assets/css/login.css";

const username = ref("");
const password = ref("");
const rememberMe = ref(false);
const loading = ref(false);

// ✅ Validación del formulario (deshabilita botón si falta info)
const isFormValid = computed(() => username.value.trim() !== "" && password.value.trim() !== "");

const handleLogin = () => {
    if (!isFormValid.value) return; // Previene el login si el formulario está incompleto

    loading.value = true;
    setTimeout(() => {
        loading.value = false;
        alert("Inicio de sesión exitoso");
    }, 2000);
};
</script>

<template>
    <div class="product-details">
        <div class="container">
            <!-- Imagen del producto -->
            <div class="product-image">
                <img v-if="product?.image" :src="getImageUrl(product.image)" :alt="product?.name" class="product-img" />
                <div v-else class="error-message">❌ Imagen no disponible</div>
            </div>

            <!-- Información del producto -->
            <div class="product-info">
                <h1 class="product-title">{{ product?.name }}</h1>
                <p class="category"><strong>Categoría:</strong> {{ product?.category }}</p>
                <p class="brand"><strong>Marca:</strong> {{ product?.brand }}</p>
                <p class="description">{{ product?.description }}</p>

                <!-- Sección de precio y botones -->
                <div class="actions">
                    <p class="price">💰 <strong>{{ formatPrice(product?.price) }}</strong></p>
                    <button class="cart-button" @click="addToCart">🛒 Añadir al carrito</button>
                    <router-link to="/products" class="back-button">🔙 Volver a Productos</router-link>
                </div>
            </div>
        </div>

        <!-- Notificación flotante -->
        <transition name="fade">
            <div v-if="showNotification" class="notification">
                ✅ {{ product?.name }} se ha añadido al carrito.
            </div>
        </transition>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import products from "@/data/products";
import "@/assets/css/productdetails.css";

const route = useRoute();
const router = useRouter();
const product = ref(null);
const cart = ref([]);
const showNotification = ref(false);

onMounted(() => {
    const productId = parseInt(route.params.id);
    product.value = products.find((p) => p.id === productId);

    if (!product.value) {
        router.push("/products");
        return;
    }

    // Cargar carrito desde localStorage
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
        cart.value = JSON.parse(savedCart);
    }
});

// Añadir producto al carrito
const addToCart = () => {
    if (!product.value) return;
    cart.value.push(product.value);
    localStorage.setItem("cart", JSON.stringify(cart.value));

    showNotification.value = true;
    setTimeout(() => {
        showNotification.value = false;
    }, 3000);
};

// Formato de precio en euros
const formatPrice = (price) => {
    return price ? new Intl.NumberFormat("es-ES", { style: "currency", currency: "EUR" }).format(price) : "No disponible";
};

// Obtener ruta de imagen
const getImageUrl = (imagePath) => {
    return new URL(imagePath, import.meta.url).href;
};
</script>

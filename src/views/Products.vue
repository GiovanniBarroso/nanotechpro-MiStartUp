<template>
    <div class="products-page">
        <h2>Selecciona una marca</h2>
        <div class="brands">
            <img v-for="brand in brands" :key="brand.name" :src="brand.logo" :alt="brand.name" />
        </div>

        <h3>Productos disponibles</h3>
        <div class="product-grid">
            <div v-for="product in products" :key="product.id" class="product-card">
                <img :src="product.image" :alt="product.name" />
                <h4>{{ product.name }}</h4>
                <p>{{ product.description }}</p>
                <button class="details-button">Ver detalles</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

// Simulación de marcas
const brands = ref([
    { name: "Apple", logo: "/brands/apple.png" },
    { name: "Samsung", logo: "/brands/samsung.png" },
    { name: "Huawei", logo: "/brands/huawei.png" },
    { name: "Oppo", logo: "/brands/oppo.png" },
    { name: "Xiaomi", logo: "/brands/xiaomi.png" },
]);

// Simulación de productos
const products = ref([
    { id: 1, name: "iPhone 14", description: "Pantalla OLED, 128GB", image: "/products/iphone14.png" },
    { id: 2, name: "Samsung Galaxy S22", description: "Exynos 2200, 256GB", image: "/products/galaxys22.png" },
    { id: 3, name: "Xiaomi Mi 12", description: "Snapdragon 8 Gen 1, 128GB", image: "/products/mi12.png" },
    { id: 4, name: "Huawei P50", description: "Pantalla OLED, 128GB", image: "/products/p50.png" },
]);
</script>

<style scoped>
.products-page {
    text-align: center;
    padding: 80px 20px;
    color: white;
}

h2,
h3 {
    margin-bottom: 20px;
    font-family: 'Poppins', sans-serif;
}

.brands {
    display: flex;
    justify-content: center;
    gap: 50px;
    margin-bottom: 40px;
}

.brands img {
    width: 70px;
    cursor: pointer;
    transition: transform 0.3s ease-in-out;
}

.brands img:hover {
    transform: scale(1.1);
}

.product-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 30px;
}

.product-card {
    background: #1a1a1a;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease-in-out;
}

.product-card img {
    width: 100%;
    height: auto;
    border-radius: 10px;
}

.product-card:hover {
    transform: scale(1.05);
}

.details-button {
    background: #FF9800;
    border: none;
    padding: 12px;
    cursor: pointer;
    border-radius: 5px;
    transition: background 0.3s ease-in-out;
}

.details-button:hover {
    background: #ffc107;
}
</style>
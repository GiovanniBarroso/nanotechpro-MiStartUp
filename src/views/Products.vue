<template>
    <div class="products-page">
        <!-- MARCAS -->
        <section class="brands" id="brands">
            <h2 class="brands-text">Trabajamos con las mejores marcas</h2>
            <div class="brand-logos">
                <img v-for="brand in brands" :key="brand.name" :src="brand.logo" :alt="brand.name"
                    @click="filterByBrand(brand.name)" class="brand-logo" />
            </div>
        </section>


        <!-- Contenedor de la cabecera de productos -->
        <div class="products-header">
            <h3 class="products-title" id="productos">Productos disponibles</h3>
            <div class="filters">
                <input type="text" v-model="searchQuery" placeholder="🔍 Buscar producto..." class="search-bar" />
                <select v-model="selectedCategory" class="category-filter">
                    <option value="">📂 Todas las categorías</option>
                    <option v-for="category in categories" :key="category">{{ category }}</option>
                </select>
            </div>
        </div>

        <!-- Grid de productos -->
        <div class="product-grid">
            <div v-for="product in filteredProducts" :key="product.id" class="product-card">
                <div class="product-image-wrapper">
                    <img :src="product.image" :alt="product.name" class="product-image" />
                </div>
                <div class="product-info">
                    <h4>{{ product.name }}</h4>
                    <p>{{ product.description }}</p>
                    <button class="details-button">Ver detalles</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from "vue";
import "../assets/css/products.css";

// Simulación de marcas
const brands = ref([
    { name: "Apple", logo: "/brands/apple.png" },
    { name: "Samsung", logo: "/brands/samsung.png" },
    { name: "Huawei", logo: "/brands/huawei.png" },
    { name: "Oppo", logo: "/brands/oppo.png" },
    { name: "Xiaomi", logo: "/brands/xiaomi.png" },
    { name: "MSI", logo: "/brands/msi icon.png" },
    { name: "Gigabyte", logo: "/brands/gigabyte icon.png" },
    { name: "HP", logo: "/brands/hp icon.png" },
    { name: "Xbox", logo: "/brands/xbox icon.png" },
    { name: "Sony", logo: "/brands/sony icon.png" },
    { name: "Nintendo", logo: "/brands/switch icon.png" },
]);

// Categorías
const categories = ref(["Móviles", "Ordenadores", "Consolas"]);


// Simulación de productos
const products = ref([
    // Móviles 📱
    {
        id: 1,
        name: "iPhone 14",
        category: "Móviles",
        description: "Pantalla Super Retina XDR OLED de 6.1”, chip A15 Bionic, doble cámara de 12MP y Face ID.",
        image: "/products/iphone14.png",
        brand: "Apple"
    },
    {
        id: 2,
        name: "Samsung Galaxy S22",
        category: "Móviles",
        description: "Pantalla Dynamic AMOLED 2X de 6.1”, Exynos 2200, 256GB de almacenamiento y triple cámara con 50MP.",
        image: "/products/galaxys22.png",
        brand: "Samsung"
    },
    {
        id: 3,
        name: "Xiaomi Mi 12",
        category: "Móviles",
        description: "Snapdragon 8 Gen 1, pantalla AMOLED de 6.28” a 120Hz, batería de 4500mAh y carga rápida de 67W.",
        image: "/products/mi12.png",
        brand: "Xiaomi"
    },

    // Ordenadores 💻
    {
        id: 4,
        name: "HP Pavilion",
        category: "Ordenadores",
        description: "Laptop con procesador Intel Core i7 de 12ª gen, 16GB RAM DDR4, SSD NVMe de 512GB y pantalla Full HD de 15.6”.",
        image: "/products/hp-pavilion.png",
        brand: "HP"
    },
    {
        id: 5,
        name: "MSI Raider",
        category: "Ordenadores",
        description: "Gaming laptop con Intel Core i9, 64GB RAM DDR5, NVIDIA RTX 4090 y pantalla 4K 144Hz.",
        image: "/products/msi-raider.png",
        brand: "MSI"
    },
    {
        id: 6,
        name: "Gigabyte Aero",
        category: "Ordenadores",
        description: "Ultrabook con Ryzen 7 6800H, 32GB RAM, SSD NVMe de 1TB y pantalla OLED de 16” con resolución 4K.",
        image: "/products/gigabyte.png",
        brand: "Gigabyte"
    },

    // Consolas 🎮
    {
        id: 7,
        name: "PlayStation 5",
        category: "Consolas",
        description: "Consola de última generación con SSD de 825GB, Ray Tracing, 4K a 120Hz y mando DualSense con respuesta háptica.",
        image: "/products/ps5.png",
        brand: "Sony"
    },
    {
        id: 8,
        name: "Xbox Series X",
        category: "Consolas",
        description: "Potente consola con CPU AMD Zen 2, 1TB SSD NVMe, Ray Tracing, 4K real y compatibilidad con juegos de generaciones anteriores.",
        image: "/products/xbox.png",
        brand: "Xbox"
    },
    {
        id: 9,
        name: "Nintendo Switch OLED",
        category: "Consolas",
        description: "Consola híbrida con pantalla OLED de 7”, batería de larga duración y compatibilidad con juegos de Nintendo exclusivos.",
        image: "/products/switch.png",
        brand: "Nintendo"
    },
]);

// Filtros
const searchQuery = ref("");
const selectedCategory = ref("");

// Función para filtrar por marca al hacer clic en el logo
const filterByBrand = (brandName) => {
    searchQuery.value = brandName;
    document.getElementById("productos").scrollIntoView({ behavior: "smooth" });
};

// Productos filtrados dinámicamente
const filteredProducts = computed(() => {
    return products.value.filter((product) => {
        return (
            (selectedCategory.value === "" || product.category === selectedCategory.value) &&
            product.name.toLowerCase().includes(searchQuery.value.toLowerCase())
        );
    });
});
</script>

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
                    <img :src="product.image" :alt="product.name" class="product-image" loading="lazy" />
                </div>
                <div class="product-info">
                    <h4>{{ product.name }}</h4>
                    <p>{{ product.description }}</p>
                    <button class="details-button" @click="viewDetails(product.id)">Ver detalles</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import "@/assets/css/products.css";

// 🔹 Importamos imágenes de marcas correctamente
import appleLogo from "@/assets/img/brands/apple.png";
import samsungLogo from "@/assets/img/brands/samsung.png";
import huaweiLogo from "@/assets/img/brands/huawei.png";
import oppoLogo from "@/assets/img/brands/oppo.png";
import xiaomiLogo from "@/assets/img/brands/xiaomi.png";
import msiLogo from "@/assets/img/brands/msi-icon.png";
import gigabyteLogo from "@/assets/img/brands/gigabyte-icon.png";
import hpLogo from "@/assets/img/brands/hp-icon.png";
import xboxLogo from "@/assets/img/brands/xbox-icon.png";
import sonyLogo from "@/assets/img/brands/sony-icon.png";
import nintendoLogo from "@/assets/img/brands/switch-icon.png";

// 🔹 Importamos imágenes de productos
import iphone14 from "@/assets/img/products/iphone14.png";
import galaxyS22 from "@/assets/img/products/galaxys22.png";
import mi12 from "@/assets/img/products/mi12.png";
import huaweiP50 from "@/assets/img/products/p50.png";
import oppoFindX5 from "@/assets/img/products/oppo-findx5.png";
import hpPavilion from "@/assets/img/products/hp-pavilion.png";
import msiRaider from "@/assets/img/products/msi-raider.png";
import gigabyteAero from "@/assets/img/products/gigabyte.png";
import ps5 from "@/assets/img/products/ps5.png";
import xboxSeriesX from "@/assets/img/products/xbox.png";
import switchOled from "@/assets/img/products/switch.png";

// 🔹 Simulación de marcas
const brands = ref([
    { name: "Apple", logo: appleLogo },
    { name: "Samsung", logo: samsungLogo },
    { name: "Huawei", logo: huaweiLogo },
    { name: "Oppo", logo: oppoLogo },
    { name: "Xiaomi", logo: xiaomiLogo },
    { name: "MSI", logo: msiLogo },
    { name: "Gigabyte", logo: gigabyteLogo },
    { name: "HP", logo: hpLogo },
    { name: "Xbox", logo: xboxLogo },
    { name: "Sony", logo: sonyLogo },
    { name: "Nintendo", logo: nintendoLogo },
]);

// 🔹 Categorías
const categories = ref(["Móviles", "Ordenadores", "Consolas"]);

// 🔹 Productos corregidos con nombres de marca exactos
const products = ref([
    { id: 1, name: "iPhone 14", category: "Móviles", description: "Pantalla Super Retina XDR OLED...", image: iphone14, brand: "Apple" },
    { id: 2, name: "Samsung Galaxy S22", category: "Móviles", description: "Pantalla Dynamic AMOLED 2X...", image: galaxyS22, brand: "Samsung" },
    { id: 3, name: "Xiaomi Mi 12", category: "Móviles", description: "Snapdragon 8 Gen 1...", image: mi12, brand: "Xiaomi" },
    { id: 4, name: "Huawei P50 Pro", category: "Móviles", description: "Cámara Leica Ultra Vision...", image: huaweiP50, brand: "Huawei" },
    { id: 5, name: "Oppo Find X5 Pro", category: "Móviles", description: "Carga SuperVOOC 80W...", image: oppoFindX5, brand: "Oppo" },
    { id: 6, name: "HP Pavilion", category: "Ordenadores", description: "Laptop con procesador Intel Core i7...", image: hpPavilion, brand: "HP" },
    { id: 7, name: "MSI Raider", category: "Ordenadores", description: "Gaming laptop con Intel Core i9...", image: msiRaider, brand: "MSI" },
    { id: 8, name: "Gigabyte Aero", category: "Ordenadores", description: "Ultrabook con Ryzen 7 6800H...", image: gigabyteAero, brand: "Gigabyte" },
    { id: 9, name: "PlayStation 5", category: "Consolas", description: "Consola de última generación...", image: ps5, brand: "Sony" },
    { id: 10, name: "Xbox Series X", category: "Consolas", description: "Potente consola con CPU AMD Zen 2...", image: xboxSeriesX, brand: "Xbox" },
    { id: 11, name: "Nintendo Switch OLED", category: "Consolas", description: "Consola híbrida con pantalla OLED...", image: switchOled, brand: "Nintendo" },
]);



const router = useRouter();

const viewDetails = (productId) => {
    router.push(`/product/${productId}`);
};


// 🔹 Filtros
const searchQuery = ref("");
const selectedCategory = ref("");

// 🔹 Normaliza el nombre de la marca para hacer comparaciones más precisas
const normalizeBrandName = (brand) => brand.toLowerCase().replace(/\s+/g, "");

// 🔹 Filtrar productos por marca
const filterByBrand = (brandName) => {
    searchQuery.value = brandName;
    selectedCategory.value = ""; // Reiniciamos la categoría al filtrar por marca
    document.getElementById("productos").scrollIntoView({ behavior: "smooth" });
};

const filteredProducts = computed(() => {
    return products.value.filter((product) => {
        const matchCategory = selectedCategory.value === "" || product.category === selectedCategory.value;
        const matchBrand = searchQuery.value === "" || normalizeBrandName(product.brand).includes(normalizeBrandName(searchQuery.value));
        const matchName = searchQuery.value === "" || product.name.toLowerCase().includes(searchQuery.value.toLowerCase());

        return matchCategory && (matchBrand || matchName);
    });
});
</script>

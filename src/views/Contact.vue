<template>
    <div class="contact-container">
        <h2>Contacto</h2>
        <form>
            <input type="text" placeholder="Nombre" />
            <input type="email" placeholder="Correo" />
            <textarea placeholder="Mensaje"></textarea>
            <button>Enviar</button>
        </form>
    </div>
</template>

<style scoped>
.contact-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 80vh;
}

form {
    display: flex;
    flex-direction: column;
    width: 400px;
    gap: 15px;
}

input,
textarea {
    padding: 10px;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 5px;
}

button {
    background: orange;
    color: white;
    border: none;
    padding: 10px;
    cursor: pointer;
    font-size: 1rem;
}

button:hover {
    background: darkorange;
}
</style>
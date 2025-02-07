<template>
    <div class="login">
        <h2>Iniciar Sesión</h2>
        <input type="text" placeholder="Usuario" />
        <input type="password" placeholder="Contraseña" />
        <button>Entrar</button>
    </div>
</template>

<style scoped>
.login {
    text-align: center;
    padding: 20px;
}

input {
    display: block;
    margin: 10px auto;
    padding: 8px;
}

button {
    background: #007bff;
    color: white;
    border: none;
    padding: 10px;
}
</style>
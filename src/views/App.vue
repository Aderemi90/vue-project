<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <header class="navbar">
    <router-link to="/"><img src="../assets/Remi.jpeg" alt="Logo" class="logo" /></router-link>
    <nav>
      <div class="navlist">
        <span><RouterLink to="/">Home</RouterLink></span>
        <span><RouterLink to="/AboutUs">About</RouterLink></span>
        <span><RouterLink to="/notaroute">Trigger Error</RouterLink></span>
      </div>
    </nav>
  </header>
  <RouterView />
  <footer class="footer">
      <p>&copy; 2024 Aderemi Oje. All rights reserved.</p>
  </footer>
</template>

<style scoped>
body {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
}
header {
  line-height: 2.5;
  max-height: 100vh;
  display: flex;
  background-color: rgb(57, 101, 246);
  justify-content: space-between;
}
  .logo {
    border-radius: 50%;
    height: 60px;
    width: 60px;
    margin-top: 5px;
}

.navlist {    
  display: flex;
  justify-content: space-between;
  list-style-type: none;
  margin: 0;
  padding: 0;
  background-color: rgb(57, 101, 246); 
}

span a{
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  text-align: center;
  font-size: 18px;
}
span :hover {
  background-color: rgb(246, 108, 3);
}
.footer {
  color: #272525;
  padding: 15px 0;
  text-align: center;
}
</style>

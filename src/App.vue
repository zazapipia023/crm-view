<template>
  <div>
    <h1>Выберите платформу</h1>
    <nav>
      <router-link to="/steam">Steam</router-link>
      <router-link to="/vkplay">VkPlay</router-link>
      <router-link to="/ubisoft">Ubisoft</router-link>
      <router-link to="/battlenet">BattleNet</router-link>
      <router-link to="/epicgames">Epic Games</router-link>
      <router-link to="/guide">Гайды</router-link>
    </nav>

    <!-- This is where the routed components will be injected -->
    <router-view></router-view>
  </div>
</template>

<style>
nav {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
}
nav a {
  text-decoration: none;
  color: black;
  background-color: yellow;
  padding: 10px;
  text-align: center;
}
nav a:hover {
  background-color: #e6c300;
}
</style>

<script setup lang="ts">
</script>

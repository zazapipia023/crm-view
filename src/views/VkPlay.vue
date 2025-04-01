<template>
  <div>
    <h1>VK Play</h1>
    <form @submit.prevent="addGame">
      <input v-model="name" placeholder="Название игры" required />
      <button type="submit">Добавить</button>
    </form>
    <ul>
      <li v-for="game in games" :key="game.name">
        {{ game.name }}
        <button @click="deleteGame(game.name)">Удалить</button>
      </li>
    </ul>
  </div>
</template>

<script>
import vkPlayService from '../services/vkPlayService.js'

export default {
  data() {
    return {
      name: '',
      games: []
    };
  },
  methods: {
    async fetchGames() {
      this.games = await vkPlayService.getGames();
    },
    async addGame() {
      await vkPlayService.addGame({ name: this.name });
      this.name = '';
      this.fetchGames();
    },
    async deleteGame(name) {
      await vkPlayService.deleteGame(name);
      this.fetchGames();
    }
  },
  created() {
    this.fetchGames();
  }
};
</script>
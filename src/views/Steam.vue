<template>
  <div>
    <h1>Steam</h1>
    <form @submit.prevent="addGame">
      <input v-model="name" placeholder="Название игры" required />
      <input v-model="manifestId" placeholder="Manifest ID" required />
      <button type="submit">Добавить</button>
    </form>
    <ul>
      <li v-for="game in games" :key="game.name">
        {{ game.name }} ({{ game.manifestId }})
        <button @click="deleteGame(game.name)">Удалить</button>
      </li>
    </ul>
  </div>
</template>

<script>
import steamService from '../services/steamService';

export default {
  data() {
    return {
      name: '',
      manifestId: '',
      games: []
    };
  },
  methods: {
    async fetchGames() {
      this.games = await steamService.getGames();
    },
    async addGame() {
      await steamService.addGame({ name: this.name, manifestId: this.manifestId });
      this.name = '';
      this.manifestId = '';
      this.fetchGames();
    },
    async deleteGame(name) {
      await steamService.deleteGame(name);
      this.fetchGames();
    }
  },
  created() {
    this.fetchGames();
  }
};
</script>
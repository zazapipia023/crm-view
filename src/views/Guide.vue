<template>
  <div>
    <h1>Guides</h1>
    <form @submit.prevent="addGuide">
      <input v-model="title" placeholder="Название статьи" required />
      <input v-model="link" placeholder="Ссылка на статью" required />
      <button type="submit">Добавить</button>
    </form>
    <ul>
      <li v-for="guide in guides" :key="guide.title">
        {{ guide.title }} ({{ guide.link }})
        <button @click="deleteGuide(guide.title)">Удалить</button>
      </li>
    </ul>
  </div>
</template>

<script>
import guideService from '../services/guideService.js'

export default {
  data() {
    return {
      title: '',
      link: '',
      guides: []
    };
  },
  methods: {
    async fetchGuides() {
      this.guides = await guideService.getGuides();
    },
    async addGuide() {
      await guideService.addGuide({ name: this.title, link: this.link });
      this.title = '';
      this.link = '';
      this.fetchGames();
    },
    async deleteGuide(name) {
      await guideService.deleteGame(name);
      this.fetchGuides();
    }
  },
  created() {
    this.fetchGuides();
  }
};
</script>
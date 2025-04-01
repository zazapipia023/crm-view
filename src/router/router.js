import { createRouter, createWebHistory } from 'vue-router';
import Steam from '../views/Steam.vue';
import VkPlay from '../views/VkPlay.vue';
import Ubisoft from '../views/Ubisoft.vue';
import BattleNet from '../views/BattleNet.vue';
import EpicGames from '../views/EpicGames.vue';
import Guide from '../views/Guide.vue';

const routes = [
    { path: '/steam', component: Steam },
    { path: '/vkplay', component: VkPlay },
    { path: '/ubisoft', component: Ubisoft },
    { path: '/battlenet', component: BattleNet },
    { path: '/epicgames', component: EpicGames },
    { path: '/guide', component: Guide }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
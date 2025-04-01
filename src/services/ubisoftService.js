const API_URL = 'http://localhost:8080/ubisoft';

export default {
    async getGames() {
        const response = await fetch(`${API_URL}/games`);
        return response.json();
    },
    async addGame(game) {
        await fetch(`${API_URL}/create`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(game)
        });
    },
    async deleteGame(name) {
        await fetch(`${API_URL}/delete?name=${name}`, {
            method: 'DELETE'
        });
    }
};
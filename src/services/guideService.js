const API_URL = 'http://localhost:8080/guide';

export default {
    async getGuides() {
        const response = await fetch(`${API_URL}/guides`);
        return response.json();
    },
    async addGuide(game) {
        await fetch(`${API_URL}/create`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(game)
        });
    },
    async deleteGuide(title) {
        await fetch(`${API_URL}/delete?title=${title}`, {
            method: 'DELETE'
        });
    }
};
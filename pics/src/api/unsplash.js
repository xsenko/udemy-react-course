import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID DVau8d9Jbe1ggGdQR-JWQm8xNYpNctnVLacnzSvGjOo'
    }
});
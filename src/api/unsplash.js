import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 00ca856654ff137effb8e9047ae02f427905de47660eafef85d130d991a6a191'
    }
});
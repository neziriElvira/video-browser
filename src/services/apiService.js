import axios from 'axios';

const KEY = "AIzaSyAp3_NKT0qggajtJH3veVYjvmhriHQcynM";

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        mayResult: 5,
        key: KEY
    }
})
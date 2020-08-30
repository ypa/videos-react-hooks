import axios from 'axios';


const KEY = 'AIzaSyB5s4TdUsK8m_GwOE-dMTo6xQe2nHRQ59s';



export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});
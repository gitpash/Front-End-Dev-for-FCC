import axios from 'axios'
const config = {
  headers: {'Access-Control-Allow-Origin': '*', "Content-Type": "json"}
};
const baseURL = 'https://wind-bow.gomix.me/twitch-api/channels/'

const api = axios.get(baseURL, config).then(response => response.json())
export default api;
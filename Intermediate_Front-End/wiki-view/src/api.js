import axios from 'axios'

let api = {
fetchArticles: function (keyword) {
        let encodedURI = window.encodeURI('https://en.wikipedia.org/w/api.php?action=opensearch&format=json&origin=*&search=' + keyword);
    
        return axios.get(encodedURI) // return promise
            .then(response => response.data)
            
}
}
export default api
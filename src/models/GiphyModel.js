import axios from 'axios';
const API_KEY = 'g7FJSuBOaK5Be2W7dM6NceeBQ29JmuoG';

class GiphyModel {
  static search = (query) => {
    
    const request = axios.get(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=${API_KEY}`);
    return request;
  }

  static searchById = (id) => {
    
    const request = axios.get(`http://api.giphy.com/v1/gifs/${id}?api_key=${API_KEY}`);
    return request;
  }
}

export default GiphyModel;

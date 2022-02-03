import axios from 'axios';

const KEY = 'AIzaSyBzW96klZzXRlZ-CAVmws8jV02y8rCHaNk';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});
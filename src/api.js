import axios from 'axios';

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      headers:{
        Authorization : 'Client-ID V_ZL_mO-5TpBrCEhHJiB4l0rGIJVqZ4yf5Gg9pak6cY'
      },
      params:{
        query:term
      }
    });
    return response.data.results;
  };

  export default searchImages;
import axios from 'axios';

const API_URL = 'https://near-api-tawny.vercel.app/request'; 

const createPost = async (title, option, userID) => {
    try {
      const data = {
        title: `${title}`,
        option: `${option}`,
        userID: `${userID}`,
        active: true,
         };
      const response = await axios.post(`${API_URL}/create`, data);
      return response.data
    } catch (error) {
      console.error('Error in create post:', error);
      throw error;
    }
  }
  
export { createPost }
import axios from 'axios';

const API_URL = 'https://near-api-tawny.vercel.app'; 


const findUserEmail = async (email) => {
  try {
    const response = await axios.get(`${API_URL}/user/email/${email}`);
    return response.data
  } catch (error) {
    console.error('Error correct email:', error);
    throw error;
  }
};

const createUser = async (name, lastName, email, password, number, gender, age) => {
  
}




export { findUserEmail }

// const User = new mongoose.Schema({
//     name: {type: String, required: true},
//     lastName: {type: String, required: true},
//     email: {type: String, required: true},
//     password: {type: String, required: true},
//     number: {type: Number, required: true},
//     gender: {type: String, required: true},
//     age: {type: Number, required: true},
//     status: {type: String, default: 'user'},
// })


// userRouter.post('/create', userController.create);
// userRouter.get('/:id', userController.getUserOfId);
// userRouter.put('/:id', userController.updateUserOfId);
// userRouter.get('/email/:email', userController.getUserEmail);
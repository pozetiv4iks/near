import axios from 'axios';

const API_URL = 'https://near-api-tawny.vercel.app/user'; 


const findUserEmail = async (email) => {
  try {
    const response = await axios.get(`${API_URL}/email/${email}`);
    return response.data
  } catch (error) {
    console.error('Error correct email:', error);
    throw error;
  }
};


const createUser = async (name, lastName, email, password, number, gender, age) => {
  try {
    const data = {
           name: name,
           lastName: lastName,
           email: email,
           password: password,
           number: +number,
           gender: gender,
           age: +age,
       };
    const response = await axios.post(`${API_URL}/create`, data);
    return response.data
  } catch (error) {
    console.error('Error in create user:', error);
    throw error;
  }
}

const updateDataUser = async (id, name, lastName, email, password, number, gender, age) => {
  try {
    const data = {
           name: name,
           lastName: lastName,
           email: email,
           password: password,
           number: +number,
           gender: gender,
           age: +age,
       };
       console.log(id)
    const response = await axios.put(`${API_URL}/${id}`, data);
    return response.data
  } catch (error) {
    console.error('Error in update user:', error);
    throw error;
  }
}




export { findUserEmail, createUser, updateDataUser}

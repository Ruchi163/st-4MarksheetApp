import axios from 'axios';


const API_URL='http://localhost:3002/users'


export const addUser=async (data)=>{
   try{
   return await axios.post(API_URL, data );
   }
   catch(error){
    console.log("Error Found")
   }
}
export const getUsers=async() => {
   try{
      return await axios.get(API_URL);
   }
   catch(error){
      console.log("Error found in api")
   }
}

export const getUser=async(data) => {
   try{
      return await axios.get(`${API_URL}/${data}`);
   }
   catch(error){
      console.log("Error found in getUser api");
   }
}


export const editUser= async(data,id)=>{
    try{
      return await axios.put(`${API_URL}/${id}`,data);
    }
    catch(error){
      console.log("error in api fo edit user")
    }
}

export const deleteUser=async(id)=>{
   try{
      return await axios.delete(`${API_URL}/${id}`);
   }
   catch(error){
      console.log("Error in delete api");
   }
}

import  axios from "axios";
import * as api from "../api";
import setCurrentUser from "./setCurrentUser";


// get All Questions
export const getAllUsers = () => async (dispatch) => {
    try {

        const { data } = await api.getAllUsers();
        console.log(data);
        dispatch({ type: "FETCH_ALL_USER", payLoad: data });
    }
    catch (error) {
        console.log(error);
    }
}

const uploadImage= async(image)=>{
    const data = new FormData();                 
    data.append("file", image);                  
    data.append("upload_preset", "avatar_preset");
    try{
        let cloudName= 'dmsj5goq0';
        let resourceType = 'image';
        let api = `https://api.cloudinary.com/v1_1/${cloudName}/${resourceType}/upload`
        const  res = await axios.post(api, data);
        console.log(res);
        const {secure_url} = res.data;
        console.log(secure_url);
        console.log(data);
        return secure_url;

    }   
    catch(err){
console.log(err);
    }
}

// for Update profile
export const updateProfile = (id, data) => async (dispatch) => {

    try {
        const {image}= data;
        // upload file 
        const image_url = await uploadImage(image)
        data.image = image_url;
        await api.updateProfile(id, data);

       
        try{
             const {data} = await api.getUserById(id);
             dispatch({ type: "Auth", data });
        dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))));
        console.log(data);
        }
        catch(err){
            console.log(err)
        }

        try {
            const apiResponse = await api.getUserById(id);
            console.log(apiResponse.data); // Log the entire response
            // const { fetchedData } = await  apiResponse.data; // Adjust this based on the actual response structure
            // console.log(fetchedData);
        } catch (err) {
            console.log(err);
        }
       
        
        dispatch(getAllUsers());
      
        
    }
    catch (err) {
        console.log(err);
    }
}
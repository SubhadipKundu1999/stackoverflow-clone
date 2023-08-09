
import * as api from "../api";

export const getAllUsers = () => async (dispatch) => {


    try {
        const { data } = await api.getAllUsers();
        // console.log(data);
        dispatch({ type: "FETCH_ALL_USER", payLoad: data });

    }
    catch (error) {
        console.log(error);

    }

}

export const updateProfile=(id, data)=> async (dispatch)=>{
console.log("hello");
console.log("action", id, data)
    try{    
       await api.updateProfile( id, data);
       dispatch(getAllUsers());

    }
    catch(err){
        console.log(err);
    }
}
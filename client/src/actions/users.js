
import * as api from "../api";



// get All Questions
export const getAllUsers = () => async (dispatch) => {
    try {
        const { data } = await api.getAllUsers();
        dispatch({ type: "FETCH_ALL_USER", payLoad: data });

    }
    catch (error) {
        console.log(error);
    }

}


// for Update profile
export const updateProfile = (id, data) => async (dispatch) => {

    try {
        await api.updateProfile(id, data);
        dispatch(getAllUsers());

    }
    catch (err) {
        console.log(err);
    }
}
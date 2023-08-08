
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
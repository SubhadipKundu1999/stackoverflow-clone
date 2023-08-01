import * as Api from "../api/index"

export const getQuestions = ()=> async(dispatch)=>{
    try{
 const {data} = await Api.getAllQuestions();
 dispatch({type:"FETCH_ALL_QUESTIONS", payload:data});
    }

        catch(error){
            console.log(error);
            
            
    }
}
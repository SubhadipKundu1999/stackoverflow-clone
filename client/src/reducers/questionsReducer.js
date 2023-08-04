const questionReducer =(state={data:null},action)=>{
switch (action.type) {


    case "POST_QUESTION":
       return { ...state,data:action.payload }
    
       case "FETCH_ALL_QUESTIONS":
       return { ...state,data:action.payload }

    case "FETCH_ANSWER":
        return {...state}
   
    case "DELETE_ANSWER":
        return {...state}
    case "DELETE_QUESTION":
        return{...state};
    
        default:  
         return state;
}
}

export default questionReducer;
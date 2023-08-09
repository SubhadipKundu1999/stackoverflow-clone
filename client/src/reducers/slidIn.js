const slideInReducer =(state={slide:false}, action) =>{
    switch(action.type){
        case "CHANGE_STATE" :
           return {slide:action.payLoad};
       default:
           return state
    }
}

export default slideInReducer
const usersReducer =(state=[], action)=>{
switch(action.type){
    case "FETCH_ALL_USER":
      return action.payLoad;
    default:
        return state;

}
}

export default usersReducer;
const loggedReducer=(state=false,action)=>{
    switch (action.type) {

        case 'logIn':
            return state=true;

        case 'logOut':
            return state=false;
    
        default:
            return state;
    }
}
export default loggedReducer;
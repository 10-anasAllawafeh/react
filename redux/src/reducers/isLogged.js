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

const nameReducer=(state="",action)=>{
    switch (action) {
        case "name":
            return state= action.name;
    
        default:
            return state;
    }
}
export default loggedReducer;nameReducer;
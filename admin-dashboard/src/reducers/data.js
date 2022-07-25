export default function(state=[], action) {
    switch (action.type) {
        case "deleteData":
            return state=[...state,action.index] ;
    
        default:
            return state;
    }
}
import { type } from "@testing-library/user-event/dist/type";

export const increment=(color)=>{
    return{
        type:"INCREMENT",
        color,
    };
}
export const decrement=(color)=>{
    return{
        type:"DECREMENT",
        color,
    };
}
export const logIn=()=>{
    return{
        type:"logIn",
    };
}
export const logOut=()=>{
    return{
        type:"logOut",
    };
}
export const name=()=>{
    return{ type:"name",}
}
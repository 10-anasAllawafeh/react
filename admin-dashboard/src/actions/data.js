import { delete_Data } from "./types"
// export const getData=()=>{
//     return{
//         type:"getData",
//     }
// }

export const deleteData=(i)=>{
    return{
        type:delete_Data,
        index:i,
    }
}
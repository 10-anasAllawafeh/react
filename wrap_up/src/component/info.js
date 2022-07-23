import React, { Component } from 'react';
import axios from 'axios';

class Info extends Component {
    constructor(props){
        super(props);
        this.state={
            id:1,
            data:[],
            isloaded:false,
        }
    } 

    componentDidMount(){
        const obj={
         id:1,   
        }
        axios.get('http://localhost/react/wrap_up/src/index.php')
        .then((data) =>{
            this.setState({
                isloaded:true,
                data:data.data 
            })
            console.log(data);
        })
    }
    render() { 
        return (
            <h1>hello</h1>
        );
    }
}
 
// import './App.css';
// import React,{ useEffect } from 'react';
// import Axios from 'axios';

// function Info() {
//   useEffect(()=>{
//     Axios.get('http://localhost/react/wrap_up/src/index.php')
//     .then(res=>console.log(res.data)).catch(err => console.log(err))
//   },[])
//   return (
//     <div className="App">
// <h1 className='App-logo'>Hadi</h1>
//  <h2></h2>
//     </div>
//   );
// }

export default Info;
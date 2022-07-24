import React, { Component } from "react";
import { Navigate } from 'react-router-dom';
import { connect } from "react-redux";
import axios from "axios";

class Profile extends Component {

  state={data:[], deleted:[],filtered:[]};
  componentDidMount(){
    axios.get('https://api.edamam.com/api/food-database/v2/parser?app_id=37c5d334&app_key=8cd3b4bd9124c2a592c3dfcb94564740&ingr=apple&nutrition-type=cooking&health=alcohol-free&category=fast-foods')
    .then(
      (response)=>{
        // const hi=response.data.hints;
        // hi.map(to =>this.setState({data:[...data,to]}));
        this.setState({data:response.data.hints});
        // console.log(response.data.hints[0]['food']['label']);    
        // console.log(this.state.data);    
      },
      (error)=>{
        if (error.response){

          console.log("respnse error");
          
          }else if(error.request){
          
            console.log("request error");
          
          }else if(error.message){
          
            console.log("message error");
          
          }
      }
    )
  };

  deleteItem(i){
    this.setState({deleted:[...this.state.deleted,i]})
    console.log(this.state.deleted);
  };

    render() {
    const { user: currentUser } = this.props;
    const { data ,deleted , filtered} = this.state;
    console.log(data);
    console.log(deleted);
    console.log("filtered",filtered);
    if (!currentUser) {
      return <Navigate to="/login" />;
    }
    return (
      <div className="container">
        <header className="jumbotron">
          <h3>
            <strong>{currentUser.name}</strong> Profile
          </h3>
        </header>
        {/* <p>
          <strong>Token:</strong> {currentUser.accessToken.substring(0, 20)} ...{" "}
          {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
        </p> */}
        <p>
          <strong>Id:</strong> {currentUser.id}
        </p>
        <p>
          <strong>Email:</strong> {currentUser.email}
        </p>
        <strong>Phone:</strong>
        <p>{currentUser.phone}</p>
        <ul>
        {this.state.data.map((food,i) => {
          if (this.state.deleted.includes(i)) {
            return <li key={i}>Deleted {i}</li>
          }
          else{
              return(
                <li key={i}>
                  <p>Dish: {food['food']['label']}</p>
                  <p>category: {food['food']['category']}</p>
                  <p>Content: {food['food']['foodContentsLabel']}</p>
                  {/* <form onSubmit={this.deleteItem(i)}> */}
                    {/* <input type={"hidden"} value={i}></input> */}
                    <button type="submit" className="btn btn-danger" onClick={()=>this.deleteItem(i)}>Delete</button>
                  {/* </form> */}
                </li>
              )
              }
        })}
        </ul>
      </div>
    );
  }
}
function mapStateToProps(state) {
  const { user } = state.auth;
  return {
    user,
  };
}
export default connect(mapStateToProps)(Profile);
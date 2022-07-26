import React, { Component } from "react";
import { Navigate } from 'react-router-dom';
import { connect, useDispatch } from "react-redux";
import axios from "axios";
import { deleteData } from "../actions/data";

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
    if (localStorage.getItem('session')) {
      this.setState({deleted:JSON.parse(localStorage.getItem('session'))})
    }
  };
  componentDidUpdate(){
    localStorage.setItem('session', JSON.stringify(this.state.deleted));
  }

  deleteItem(i){
    const { dispatch } = this.props;
    this.setState({deleted:[...this.state.deleted,i]});
    dispatch(deleteData(i));
    console.log(this.state.deleted);
  };
    render() {
    const { user: currentUser } = this.props;
    const { dataFrom: deletedItems } = this.props;
    const { data ,deleted , filtered} = this.state;
    const session =JSON.parse(localStorage.getItem('session'));
    console.log('session',session);
    console.log(data);
    console.log(deleted);
    console.log("filtered",filtered);
    if (!currentUser) {
      return <Navigate to="/login" />;
    }
    return (
      <div className="container row">
        {this.state.data.map((food,i) => {
          if (session){
            if (session.includes(i) ||this.state.deleted.includes(i)) {
              return ;
            }
            else{
              return(
                <div className="card col-4" key={i}>
                <div className="card-body">
                  <h5 className="card-title">Dish: {food['food']['label']}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">category: {food['food']['category']}</h6>
                  <p className="card-text" style={{height:"240px"}}>Content: {food['food']['foodContentsLabel']}</p>
                  <button type="submit" className="btn btn-danger" onClick={()=>this.deleteItem(i)}>Delete</button>
                </div>
            </div>
              )
              }
          }
          else{
          if (this.state.deleted.includes(i)) {
            return ;
          }
          else{
              return(
                <div className="card col-4" key={i}>
                <div className="card-body">
                  <h5 className="card-title">Dish: {food['food']['label']}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">category: {food['food']['category']}</h6>
                  <p className="card-text" style={{height:"240px"}}>Content: {food['food']['foodContentsLabel']}</p>
                  <button type="submit" className="btn btn-danger" onClick={()=>this.deleteItem(i)}>Delete</button>
                </div>
            </div>
              )
              }
    }})}
      </div>
    );
  }
}
function mapStateToProps(state) {
  const { user } = state.auth;
  const { dataFrom } = state.data;
  return {
    user,
    dataFrom,
  };
}
export default connect(mapStateToProps)(Profile);
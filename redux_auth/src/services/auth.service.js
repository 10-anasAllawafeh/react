import axios from "axios";
const API_URL = "http://localhost/react/redux_auth/php/connect.php?email=`+email+'&pass='+pass";
class AuthService {
  login(username, password) {
    return axios
      .post(`http://localhost/react/redux_auth/php/rUser.php?email=`+username+'&pass='+password)
      .then((response) => {
        if (response.data) {
          console.log(response.data);
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
      });
  }
  logout() {
    localStorage.removeItem("user");
  }
  register(username, email, phone, password) {
      console.log("done");
      return axios.post('http://localhost/project7/seaneighbor/php/insertuser.php?name='+username+'&email='+email+'&phone='+phone+'&pass='+password);
  }
}
export default new AuthService();
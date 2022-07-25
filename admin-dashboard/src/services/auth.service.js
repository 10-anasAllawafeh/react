import axios from "axios";
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
}
export default new AuthService();
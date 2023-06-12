function sendLogin() {
    var username = document.getElementById("userNameLogin").value;
    var password = document.getElementById("passwordLogin").value;

    axios.post('/users/login', {
        username: username,
        password: password
      })
      .then(function (response) {
        if(response.status == 200) {
          window.location = "/users/users"
        }
      })
      .catch(function (error) {
        console.log(error);
      });
}
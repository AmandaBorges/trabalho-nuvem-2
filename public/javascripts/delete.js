function deleteUser(userId) {
    axios.post('/users/delete', {
        id: userId
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

function telaCadastro() {
    window.location = "/users/register"
}

function sair() {
    window.location = "/"
}
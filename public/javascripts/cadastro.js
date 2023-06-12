function cadastro() {
    var nome = document.getElementById("nomeCadastro").value;
    var email = document.getElementById("emailCadastro").value;
    var password = document.getElementById("passwordCadastro").value;

    axios.post('/users/create', {
        email: email,
        nome: nome,
        password: password,
        is_admin: true
      })
      .then(function (response) {
        if(response.status == 201) {
          window.location = "/users/users"
        }
      })
      .catch(function (error) {
        console.log(error);
      });
}
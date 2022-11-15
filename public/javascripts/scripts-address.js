var btnAddress = document.getElementsByClassName("btn-get-address")[0];
btnAddress.onclick = function() {
    var inputCep = document.getElementsByName("cep")[0];
    axios.get('/api/address-by-zip-code?cep='+inputCep.value)
  .then(function (response) {
    console.log(response.data);
    alert(JSON.stringify(response.data));
  })
  .catch(function (error) {
    alert(JSON.stringify(error.message));
  });
};
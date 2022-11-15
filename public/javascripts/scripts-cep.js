var btnCep = document.getElementsByClassName("btn-get-cep")[0];
btnCep.onclick = function() {
    var state = document.getElementsByName("state")[0].value;
    var city = document.getElementsByName("city")[0].value;
    var place = document.getElementsByName("place")[0].value;

    axios.get('/api/zip-code-by-address?state='+state+'&city='+city+'&place='+place)
  .then(function (response) {
    console.log(response.data);
    alert(JSON.stringify(response.data));
  })
  .catch(function (error) {
    alert(JSON.stringify(error.message));
  });
    console.log(state, city,place);
};
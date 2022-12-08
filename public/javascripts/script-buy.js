var buttonBuy = document.getElementById("finish-buy");
buttonBuy.onclick = function () {
    alert("compra realizada com sucesso");
}

var inputQtt = document.getElementById("inputQtt");
inputQtt.onchange = function () {
    var qtt = parseInt(this.value);
    if(qtt > 0) {
        var valueInitial = this.dataset.value.replace('R$ ', '')
        valueInitial = valueInitial.replace(',', '.')
        document.getElementById("total-value").innerHTML = "<strong>Valor Total:</strong> R$ "+parseFloat(valueInitial)*qtt;
    }
}
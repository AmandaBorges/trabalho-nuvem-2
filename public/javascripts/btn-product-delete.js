var btnDelete = document.getElementsByClassName("btn-delete-product");
for(var i = 0; i < btnDelete.length; i++){
    btnDelete[i].onclick = function () {
        if (confirm('Deseja realmente deletar o produto?')) {
            axios.delete('/admin/products/'+this.dataset.slug+'/delete')
            .then(function (response) {
                location.reload();
            })
            .catch(function (error) {
                alert(JSON.stringify(error.message));
            });    
        } else {
        // Do nothing!
        }
    }
    console.log(btnDelete[i]);
}
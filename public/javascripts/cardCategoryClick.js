var cardCategory = document.getElementsByClassName("card-category");
for(var i = 0; i < cardCategory.length; i++) {
    cardCategory[i].onclick = function() {
        window.location = "/categories/products?category="+this.dataset.slug;   
    }
}
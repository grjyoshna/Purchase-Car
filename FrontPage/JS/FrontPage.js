$("#slideshow > div:gt(0)").hide();

setInterval(function () {
    $('#slideshow > div:first')
        .fadeOut(1000)
        .next()
        .fadeIn(1000)
        .end()
        .appendTo('#slideshow');
}, 3000);


currentUser = $.parseJSON(localStorage.getItem('currentUser'));
selectedType = currentUser.role;

if (selectedType == 'Supplier') {   
    var element = document.getElementById("shoppingCart")
    element.outerHTML = "";
    delete element;
}
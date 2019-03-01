//Set rates 

var taxRate = 0.085;
var fadeTime = 300;




var purchasearr = $.parseJSON(localStorage.getItem('purch'));

var cartGrandTotal = 0;
var shippingPrice = 0;




//Assign actions

$('.quantity input').change(function () {

    updateQuantity(this);

});




$('.remove button').click(function () {

    removeItem(this);

});



//Recalculate cart

function recalculateCart(onlyTotal) {

    var subtotal = 0;




    //Sum up row total

    $('.shopping-product').each(function () {

        subtotal += parseInt($(this).children('.subtotal').text());

    });




    //Calculate tax & total

    var tax = subtotal * taxRate;

    var total = subtotal + tax;




    //Update total display




    if (onlyTotal) {

        $('.total-value').fadeOut(fadeTime, function () {

            $('#cart-total').html(total.toFixed(0));

            $('.total-value').fadeIn(fadeTime);

        });

    } else {

        $('.final-value').fadeOut(fadeTime, function () {

            $('#cart-subtotal').html(subtotal.toFixed(0));

            $('#cart-tax').html(tax.toFixed(0));

            $(document).ready(function () {

                $("#delivery").change(function () {

                    var value = $("#delivery option:selected").val();

                    $("#delivery").val(value);

                });

            });

            $('#cart-total').html(total.toFixed(0));

            if (total == 0) {

                $('.purchase-order-convert').fadeOut(fadeTime);

            } else {

                $('.purchase-order-convert').fadeIn(fadeTime);

            }

            $('.final-value').fadeIn(fadeTime);

        });

    }

}


function productpic(ProductName) {

    return "../Images/" + ProductName + ".jpg";

}


function shoppingCart() {

    var tableBody = "";

    for (var i = 0; i < purchasearr.length; i++) {

        tableBody += "<tr"+i+"><td><img class='tablepic' src= " + productpic(purchasearr[i].ProductName) + "></td>";

        tableBody += "<td>" + purchasearr[i].ProductName + "</td>"

        tableBody += "<td>" + purchasearr[i].Price + "</td>"

        tableBody += "<td>" + purchasearr[i].count + "</td>"

        tableBody += "<td>" + updateQuantity(purchasearr[i].count, purchasearr[i].Price) + "</td>"

        tableBody += "<td><button type='button'   onclick='DeleteProduct(" + i +")' class='table_buttons'><span class='glyphicon glyphicon-trash'></span></button ></td></tr>";


    }



    document.getElementById("shoppingproduct").innerHTML = "<table id='ProductTable'>" + tableBody + "</table>";


    //retreiving the cart Sub total 
    document.getElementById("cart-subtotal").innerHTML = getcartSubTotal();
    //Retreiving taxes 
    document.getElementById("cart-tax").innerHTML = getCratTaxTotal(getcartSubTotal());
    //Retreiving Cart total cart-total
    document.getElementById("cart-total").innerHTML = parseInt(getcartSubTotal()) + parseInt(getCratTaxTotal(getcartSubTotal()));
    cartGrandTotal = parseInt(getcartSubTotal()) + parseInt(getCratTaxTotal(getcartSubTotal()));
}

var prdarr = $.parseJSON(localStorage.getItem('MainArr'));

function DeleteProduct(rownum)
{



        for (var j = 0; j < prdarr.length; j++) {
            if (prdarr[j].ProductName == purchasearr[rownum].ProductName) {
                prdarr[j].Inventory += purchasearr[rownum].count;
                break;
            }
        }

    purchasearr.splice(rownum, 1);

    localStorage.setItem('purch', JSON.stringify(purchasearr));
    localStorage.setItem('MainArr', JSON.stringify(prdarr));
    shoppingCart();
}
function getcartSubTotal() {

    var cartTotal = 0;
    for (var i = 0; i < purchasearr.length; i++) {
        cartTotal = cartTotal + parseInt(purchasearr[i].Price);
    }
    return cartTotal;
}

function getCratTaxTotal(total) {
    var tax = 0;
    if (parseInt(total) > 0) {
        tax = (parseInt(total) * 0.085);
    }
    return tax.toFixed(2);
}

function reCalculateCart() {
    var selectedIndex = document.getElementById("delivery").selectedIndex;
    if (selectedIndex ===0) {
        document.getElementById("cart-total").innerHTML=  parseInt(cartGrandTotal);
    }
    else if (selectedIndex === 1) {
        document.getElementById("cart-total").innerHTML= parseInt(cartGrandTotal) + 300;
    }
    else if (selectedIndex ===2) {
        document.getElementById("cart-total").innerHTML=  parseInt(cartGrandTotal) + 500;
    }
}

//Update quantity

function updateQuantity(quantityInput, prc) {

    //Calculate line price

    return prc * quantityInput;




    //Update line price display and recalcalculate shopping cart total
}




////Remove items from shopping cart

function removeItem(removeButton) {

    //Remove row from DOM and recalcalculate total in the cart

    var productRow = $(removeButton).parent().parent();

    productRow.slideUp(fadeTime, function () {

        productRow.remove();

        recalculateCart();

    });

}

function testclear() {
    localStorage.removeItem('purch');
    location.href = "loginPage.html";
}


//////Set rates


//////Assign actions



//////Recalculate cart
//function recalculateCart(onlyTotal) {
//    var subtotal = 0;

////    //Sum up row total
//    $('.shopping-product').each(function () {
//        subtotal += parseInt($(this).children('.subtotal').text());
//    });

////    //Calculate tax & total
//    var tax = subtotal * taxRate;
//    var total = subtotal + tax;

////    //Update total display



//////Update quantity


////    //Update line price display and recalcalculate shopping cart total


////////Remove items from shopping cart



function po() {



    var userinfo = localStorage.getItem("currentUser");
    var userinfo2 = JSON.parse(userinfo);
    var purchase1 = localStorage.getItem("purch");
    var purchase = JSON.parse(purchase1);

    var userinfo1 = userinfo2["username"] + "<br /> 2700 Bay Area Blvd  <br />Houston, TX 77058 <br />Phone:" + userinfo2["phone"];
    var ponum = Math.floor((Math.random() * 100000));
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!

    var yyyy = today.getFullYear();
    if (dd < 10) {
        dd = '0' + dd;
    }
    if (mm < 10) {
        mm = '0' + mm;
    }
    var today = dd + '/' + mm + '/' + yyyy;
    

    document.getElementById("customer-address").innerHTML = userinfo1;
    document.getElementById("ponum").innerHTML = ponum;
    document.getElementById("date").innerHTML = today;

    var tableBody = "";
    var subtotal = 0;

    for (var i = 0; i < purchase.length; i++) {

        

        tableBody += "<tr class='item-row'> <td><div class='item- name'>" + (purchase[i].Supplier + " " +purchase[i].ProductName ) + "</div></td>"

        tableBody += "<td><div class='description'>" + purchase[i].Description + "</div></td>";

        tableBody += "<td><div class='cost'>" + purchase[i].Price + "</div></td>";

        tableBody += "<td><div class='qty'>" + purchase[i].count + "</div></td>";

        tableBody += "<td><span class='price'>" + (purchase[i].count * purchase[i].Price) + "</span></td></tr>";

        subtotal += ((purchase[i].count * purchase[i].Price));


    }

    var header = "<table id='items'><tr><th>Item</th><th>Description</th><th>Unit Cost</th><th>Quantity</th><th>Price</th></tr>";
    var tax = 0.20;
    var sub = "<tr><td colspan='2' class='blank'> </td><td colspan='2' class='total-line'>Subtotal</td> <td class='total-value'><div id='subtotal'>" +subtotal+"</div></td></tr><tr><td colspan='2' class='blank'></td><td colspan='2' class='total-line'>Taxes & Fees</td><td class='total-value'><div id='paid'>"+(subtotal * tax) + "</div></td></tr>";
    sub += "<tr><td colspan='2' class='blank'> </td>  <td colspan='2' class='total-line'>Total</td><td class='total-value'><div id='total'> $" + (subtotal + (subtotal * tax)) +"</div></td></tr>";
    sub += "<tr><td colspan='2' class='blank'> </td> <td colspan='2' class='total-line balance'>Balance Due</td> <td class='total-value balance'><div class='due'> $" + (subtotal + (subtotal * tax)) +" </div></td></tr>";



    var tableclose = "</table>";

    var newtable = header + tableBody + sub + tableclose;

    document.getElementById("shoppingtable").innerHTML = newtable;


    localStorage.removeItem('purch');

}



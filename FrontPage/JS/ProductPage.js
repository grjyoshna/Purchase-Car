var selectedType;

// Get the modal
var modal = document.getElementById('ProductModal');
var delmodal = document.getElementById('DeleteModal');
var addcartmodal = document.getElementById('AddCartModal');


var currentUser;

if (typeof (Storage) !== "undefined") {
    currentUser = $.parseJSON(localStorage.getItem('currentUser'));
    selectedType = currentUser.role;

} else {
    // Sorry! No Web Storage support..
}

// Get the button that opens the modal
var btn = document.getElementById("AddProductDesc_Btn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function () {
    modal.style.display = "block";
    document.getElementById("ProductName_Txt").value = "";
    document.getElementById("Description_Txt").value = "";
    document.getElementById("Price_Txt").value = "";
    document.getElementById("Inventory_Txt").value = "";
    document.getElementById("row_Txt").value = "";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

closeDelModel = function () {
    delmodal.style.display = "none";
}



// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


function ProductDetails(Image, ProductName, Description, Price, Inventory, Supplier) {
    this.Image = Image;
    this.ProductName = ProductName;
    this.Description = Description;
    this.Price = Price;
    this.Inventory = Inventory;
    this.Supplier = Supplier;
}

var MainProductArr = [];
var ProductArr = [];

var ProductDetails1 = new ProductDetails("Image1", "COROLLA", "Sedan- Automatic", "15000", "20", "Toyota");
var ProductDetails2 = new ProductDetails("Image2", "Camry", "Sedan-Sports car", "23490", "15", "Toyota");
var ProductDetails3 = new ProductDetails("Image3", "Tundra", "Sedan-Automatic", "27000", "12", "Toyota");
var ProductDetails4 = new ProductDetails("Image4", "CR-V", "Versatility, competency and reliability", "25000", "12", "Honda");
var ProductDetails5 = new ProductDetails("Image5", "CIVIC", "White Sedan-Manual", "19000", "15", "Honda");
var ProductDetails6 = new ProductDetails("Image6", "Accord", "Adaptive cruise control", "24000", "12", "Honda");
var ProductDetails7 = new ProductDetails("Image7", "X3-M40i", "Versatility, adventure and driving passion", "41000", "10", "BMW");
var ProductDetails8 = new ProductDetails("Image8", "X5", "Efficient eDrive engine", "58000", "5", "BMW");
var ProductDetails9 = new ProductDetails("Image9", "X1", "Compact Sports Activity vehicle", "37000", "12", "BMW");

var ProductDetails10 = new ProductDetails("Image10", "C-300", "Multicolor LED ambient lighting", "40000", "20", "Mercedes");
var ProductDetails11 = new ProductDetails("Image11", "GLC-SUV", "Standard power liftgate", "42490", "15", "Mercedes");
var ProductDetails12 = new ProductDetails("Image12", "CLA-Coupe", "Diamond-block grille to its LED taillamps", "32000", "10", "Mercedes");
var ProductDetails13 = new ProductDetails("Image13", "SPARK", "Hatchback-Manual", "15000", "12", "Chevrolet");
var ProductDetails14 = new ProductDetails("Image14", "BOLT-EV", "SUV-Auomatic", "19000", "15", "Chevrolet");
var ProductDetails15 = new ProductDetails("Image15", "CAMARO", "Sedan-Automatic", "25000", "12", "Chevrolet");
var ProductDetails16 = new ProductDetails("Image16", "Versa", "Hatchback-Manual", "21000", "10", "Nissan");
var ProductDetails17 = new ProductDetails("Image17", "Sentra", "Efficient eDrive engine", "28000", "5", "Nissan");
var ProductDetails18 = new ProductDetails("Image18", "Maxima", "Sedan-Automatic", "17000", "12", "Nissan");

var ProductDetails19 = new ProductDetails("Image19", "XC90", "SUV-Automatic", "25000", "20", "Volvo");
var ProductDetails20 = new ProductDetails("Image20", "S90", "Sedan-Automatic", "33490", "15", "Volvo");
var ProductDetails21 = new ProductDetails("Image21", "V90", "Sedan-Sports Car", "47000", "12", "Volvo");
var ProductDetails22 = new ProductDetails("Image22", "LACROSSE", "Versatility, competency and reliability", "39000", "10", "Buick");
var ProductDetails23 = new ProductDetails("Image23", "ENCORE", "White Sedan-Manual", "32000", "15", "Buick");
var ProductDetails24 = new ProductDetails("Image24", "ENVISION", "Adaptive cruise control", "24000", "12", "Buick");
var ProductDetails25 = new ProductDetails("Image25", "Durango", "SUV-Automatic", "30000", "10", "Dodge");
var ProductDetails26 = new ProductDetails("Image26", "Challenger", "Sedan-Automatic", "28000", "15", "Dodge");
var ProductDetails27 = new ProductDetails("Image27", "Grand-Caravan", "Caravan-Automatic", "37000", "6", "Dodge");
var ProductDetails28 = new ProductDetails("Image28", "9-3X", "Sedan-Automatic", "21000", "10", "Saab");
var ProductDetails29 = new ProductDetails("Image29", "9-4X", "Aero Sedan", "28000", "5", "Saab");
var ProductDetails30 = new ProductDetails("Image30", "9-5", "Sedan-Manual", "17000", "12", "Saab");




MainProductArr = [ProductDetails1, ProductDetails2, ProductDetails3, ProductDetails4, ProductDetails5, ProductDetails6, ProductDetails7, ProductDetails8, ProductDetails9, ProductDetails10,
    ProductDetails11, ProductDetails12, ProductDetails13, ProductDetails14, ProductDetails15, ProductDetails16, ProductDetails17, ProductDetails18, ProductDetails19, ProductDetails20,
    ProductDetails21, ProductDetails22, ProductDetails23, ProductDetails24, ProductDetails25, ProductDetails26, ProductDetails27, ProductDetails28, ProductDetails29, ProductDetails30];

var prdarr = $.parseJSON(localStorage.getItem('MainArr'));
if (prdarr == null) {
    localStorage.setItem('MainArr', JSON.stringify(MainProductArr));
} else {
    MainProductArr = prdarr;
}



function checkProduct(prd) {
    return prd.Supplier == currentUser.company;
}

function filterProductArr() {

    if (currentUser != undefined && currentUser != '' && currentUser.role == 'Supplier') {
        ProductArr = MainProductArr.filter(checkProduct);
        selectedType = currentUser.role;
    } else {
        selectedType = currentUser.role;
        ProductArr = MainProductArr;
    }

}



function Addproduct() {

    var ProductName = document.getElementById("ProductName_Txt").value;
    var Description = document.getElementById("Description_Txt").value;
    var Price = document.getElementById("Price_Txt").value;
    var Inventory = document.getElementById("Inventory_Txt").value;
    var Supplier = currentUser.company;
    var row_num = document.getElementById("row_Txt").value;

    if (ProductName != '' && Price != '' && Inventory != '') {

        if (row_num != "" && row_num != undefined) {
            ProductArr[row_num].ProductName = ProductName;
            ProductArr[row_num].Description = Description;
            ProductArr[row_num].Price = Price;
            ProductArr[row_num].Inventory = Inventory;
            ProductArr[row_num].Supplier = Supplier;

        }
        else {

            var prod = new ProductDetails("Image1", ProductName, Description, Price, Inventory, Supplier);

            MainProductArr.push(prod);
        }
        localStorage.setItem('MainArr', JSON.stringify(MainProductArr));
        modal.style.display = "none";

        ProductPage();
    }

}

function editproduct(i) {
    modal.style.display = "block";
    document.getElementById("ProductName_Txt").value = ProductArr[i].ProductName;
    document.getElementById("Description_Txt").value = ProductArr[i].Description;
    document.getElementById("Price_Txt").value = ProductArr[i].Price;
    document.getElementById("Inventory_Txt").value = ProductArr[i].Inventory;
    document.getElementById("row_Txt").value = i;

    localStorage.setItem('MainArr', JSON.stringify(MainProductArr));

}

function DeleteProduct(num, inp) {
    delmodal.style.display = "block";
   
    if (inp == false) {

        document.getElementById("delrow_Txt").value = num;

    } else {
        num = document.getElementById("delrow_Txt").value;
            for (var i = 0; i < MainProductArr.length; i++){
                if (MainProductArr[i].ProductName == ProductArr[num].ProductName) {
                    num = i;
                    break;
                }
            }
       
        MainProductArr.splice(num, 1);
        localStorage.setItem('MainArr', JSON.stringify(MainProductArr));
        ProductPage();
        delmodal.style.display = "none";
    }

}

function saveArray() {

    var prdarr = $.parseJSON(localStorage.getItem('MainArr'));
    if (prdarr == null) {
        localStorage.setItem('MainArr', JSON.stringify(MainProductArr));
    }


}

loadShoppingCart();
if (selectedType == 'Supplier' || selectedType == 'Admin')
{    
    var element = document.getElementById("shoppingCart")
    element.outerHTML = "";
    delete element;
}

function ProductPage() {

    filterProductArr();


    var th = "<tr><th>Image</th><th>Product Name</th><th>Description</th><th>Price</th><th>Inventory</th><th>Supplier</th>";
    if (selectedType == 'Regular User' || selectedType == 'Admin') {
        document.getElementById("AddProductDesc_Btn").style.visibility = 'hidden';
    }
    if (selectedType == 'Regular User') {

        th += "<th>Add</th>";
    }
    if (selectedType == 'Supplier' || selectedType == 'Admin') {
        th += "<th>Edit</th> <th>Delete</th>";
    }
    th += "</tr > ";
    var tableBody = "";

    function productpic(ProductName) {

        return "../Images/" + ProductName + ".jpg";

    }


    for (var i = 0; i < ProductArr.length; i++) {
        tableBody += "<tr id = row" + i + "><td><img class='tablepic' src= " + productpic(ProductArr[i].ProductName) + "></td>";
        tableBody += "<td>" + ProductArr[i].ProductName + "</td>";
        tableBody += "<td>" + ProductArr[i].Description + "</td>";
        tableBody += "<td>" + ProductArr[i].Price + "</td>";
        tableBody += "<td>" + ProductArr[i].Inventory + "</td>";
        tableBody += "<td>" + ProductArr[i].Supplier + "</td>";
        if (selectedType == 'Regular User') {
            tableBody += "<td> <button type='button'  onclick='AddCart(" + i + ")' class='table_buttons'><span class='glyphicon glyphicon-plus'></span></button ></td >";
        }
        if (selectedType == 'Supplier' || selectedType == 'Admin') {
            tableBody += "<td><button type='button'  onclick='editproduct(" + i + ")' class='table_buttons'><span class='glyphicon glyphicon-pencil'></span></button ></td >";
            tableBody += "<td><button type='button'   onclick='DeleteProduct(" + i + "," + false + ")' class='table_buttons'><span class='glyphicon glyphicon-trash'></span></button ></td >";
        }
    }

    var table = "<table id='ProductTable'>" + th + tableBody + "</tr></table>"
    document.getElementById("Table").innerHTML = table;
}

var purchasearr = $.parseJSON(localStorage.getItem('purch'));

if (purchasearr == null) {
    purchasearr = [];
}



var purchObj = "";
var purchdata
var selectedRow;

function AddCart(nos) {
    addcartmodal.style.display = "block";
    var th = "<tr id='Addcarthead'><th>Product Name</th><th>Description</th><th>Price</th><th>Inventory</th><th>Supplier</th></tr>";
    var tableBody = "";

    var options = "";
    for (var i = 1; i <= ProductArr[nos].Inventory; i++)
        options += "<option>" + i + "</option>";

    tableBody += "<tr id='Addcartrow'><td>" + ProductArr[nos].ProductName + "</td>";
    tableBody += "<td>" + ProductArr[nos].Description + "</td>";
    tableBody += "<td>" + ProductArr[nos].Price + "</td>";
    tableBody += "<td><select id='AddcartDDL'>" + options + "</select></td>"
    tableBody += "<td>" + ProductArr[nos].Supplier + "</td></tr>";

    var Addcarttable = "<table id='AddCartTable'>" + th + tableBody + "</table>"
    document.getElementById("AddCart").innerHTML = Addcarttable;
    selectedRow = nos;
}
addCart = [];

function addCartConfirm() {
    var e = document.getElementById("AddcartDDL");
    //var value = parseInt(e.options[e.selectedIndex].value);
    //ProductArr[selectedRow].count = value;
    //ProductArr[selectedRow].Inventory -= value;
    //var check = false;
    //var int;
    if (purchasearr.length != 0)
    {
        for (int = 0; int < purchasearr.length; int++)
        {
            if (ProductArr[selectedRow].ProductName == purchasearr[int].ProductName)
            {
                check = true;
                break;
            }

        }

        if (check == true)
        {
            purchasearr[int].count += parseInt(value);
        }
        else
        {

            purchasearr.push(ProductArr[selectedRow]);
        }
    }
    else
    {
        purchasearr.push(ProductArr[selectedRow]);
    }
    if (ProductArr[selectedRow].Inventory == 0) {
        ProductArr.splice(selectedRow, 1);
    }

    ProductPage();
    addcartmodal.style.display = "none";
    selectedRow = '';
    localStorage.setItem('MainArr', JSON.stringify(MainProductArr));
    localStorage.setItem('purch', JSON.stringify(purchasearr));
    loadShoppingCart();


}

function loadShoppingCart() {

    var purArr = $.parseJSON(localStorage.getItem('purch'));
    if (purArr != null && purArr != undefined) {
        document.getElementById("productno").innerHTML = purArr.length;
    }
}




declineDelModel = function () {

    addcartmodal.style.display = "none";
    selectedRow = '';
}

function search() {
  //  var text = document.getElementById("ProductSearch_Txt").value;
   // highlightWord(document.body, text);

    var input, filter, table, tr, td, i;
    input = document.getElementById("ProductSearch_Txt");
    filter = input.value.toUpperCase();
    table = document.getElementById("ProductTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        //Column 1
        td_1 = tr[i].getElementsByTagName("td")[1];
        //Column 5
        td_2 = tr[i].getElementsByTagName("td")[5];
         //Column 2
        td_3 = tr[i].getElementsByTagName("td")[2];
        //column 3
        td_4 = tr[i].getElementsByTagName("td")[3];
        if (td_1 || td_2||td_3) {
            if (td_1.innerHTML.toUpperCase().indexOf(filter) > -1 || td_2.innerHTML.toUpperCase().indexOf(filter) > -1 || td_3.innerHTML.toUpperCase().indexOf(filter) > -1 || td_4.innerHTML.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }

}


function logout()
{
    for (var i = 0; i < purchasearr.length; i++)
    {
        for (var j = 0; j < ProductArr.length; j++)
        {
            if (ProductArr[j].ProductName == purchasearr[i].ProductName)
                {
                ProductArr[j].Inventory += purchasearr[i].count;
                break;
                }
        }
    }
    purchasearr = [];
    localStorage.setItem('purch', JSON.stringify(purchasearr));
    localStorage.setItem('MainArr', JSON.stringify(MainProductArr));
    location.href = "loginPage.html";

}
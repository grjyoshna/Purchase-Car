//Rendering of Table:
function company(name, email, phone, owner, street, city, state, country, duns, type) {
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.owner = owner;
    this.street = street;
    this.city = city;
    this.state = state;
    this.country = country;
    this.duns = duns;
    this.type = type;
}
var user = $.parseJSON(localStorage.getItem('currentUser'));
var seltype = user.role;
if (seltype != 'Admin') {
    document.getElementById("Add-btn").style.visibility = 'Hidden';
}

var companyID1 = new company('BMW', 'bmw@gmail.com', '100001', 'BMW', 'Park street', 'Phoenix', 'Arizona', 'USA', 'DUNS1', 'Seller');
var companyID2 = new company('Mercedes', 'Mercedes@gmail.com', '100002', 'Mercedes Benz', 'Salt Street', 'Dallas', 'Texas', 'USA', 'DUNS2', 'Seller');
var companyID3 = new company('Toyota', 'Toyota@gmail.com', '100003', 'Toyota', 'lake street', 'Houston', 'Texas', 'USA', 'DUNS3', 'Seller');
var companyID4 = new company('Chevrolet', 'Chevrolet@gmail.com', '100004', 'Chevrolet', 'Down street', 'Colorado', 'Denver', 'USA', 'DUNS4', 'Seller');
var companyID5 = new company('Nissan', 'Nissan@gmail.com', '100005', 'Nissan', 'Bay street', 'Georgia', 'Atlanta', 'USA', 'DUNS5', 'Seller');
var companyID6 = new company('Volvo', 'Volvo@gmail.com', '100006', 'Volvo', 'Pine  street', 'New York', 'Albany', 'USA', 'DUNS6', 'Seller');
var companyID7 = new company('Honda', 'Honda@gmail.com', '100007', 'Honda', 'Maple  street', 'Oregon', 'Salem', 'USA', 'DUNS7', 'Seller');
var companyID8 = new company('Buick', 'Buick@gmail.com', '100008', 'Buick', 'Hill  street', 'Washington', 'Olympia', 'USA', 'DUNS8', 'Seller');
var companyID9 = new company('Dodge', 'Dodge@gmail.com', '100009', 'Dodge', 'Elm  street', 'New Jersey', 'Trenton', 'USA', 'DUNS9', 'Seller');
var companyID10 = new company('Saab', 'Saab@gmail.com', '100010', 'Saab', 'Cedar street', 'Missouri', 'Kansas City', 'USA', 'DUNS10', 'Seller');

var tableHeader = "<tr><th >Name</th><th >Email</th><th  >Phone</th><th >Owner</th><th >Street</th><th >City</th><th >State</th><th >Country</th><th >Duns</th><th >Type</th>";
if (seltype == 'Supplier' || seltype == 'Admin')
    tableHeader += " <th>edit</th>";
if (seltype == 'Admin')
    tableHeader += "<th>delete</th>";

tableHeader += "</tr> ";

if (seltype == 'Supplier' || seltype == 'Admin') {    
    var element = document.getElementById("shoppingCart")
    element.outerHTML = "";
    delete element;
}

var companyList = [companyID1, companyID2, companyID3, companyID4, companyID5, companyID6, companyID7, companyID8, companyID9, companyID10];

var cmpList = $.parseJSON(localStorage.getItem('comparr'));
if (cmpList == null) {
    localStorage.setItem('comparr', JSON.stringify(companyList));
    cmpList = companyList;
}

function renderCompany(companyList) {

    var tableBody = "";

    for (var index = 0; index < companyList.length; index++) {

        tableBody += "<tr id=" + index + "><td>" + companyList[index].name + "</td>";
        tableBody = tableBody + "<td >" + companyList[index].email + "</td>";
        tableBody = tableBody + "<td>" + companyList[index].phone + "</td>";
        tableBody = tableBody + "<td >" + companyList[index].owner + "</td>";
        tableBody = tableBody + "<td >" + companyList[index].street + "</td>";
        tableBody = tableBody + "<td >" + companyList[index].city + "</td>";
        tableBody = tableBody + "<td >" + companyList[index].state + "</td>";
        tableBody = tableBody + "<td >" + companyList[index].country + "</td>";
        tableBody = tableBody + "<td >" + companyList[index].duns + "</td>";
        tableBody = tableBody + "<td >" + companyList[index].type + "</td>";
        if (seltype == 'Supplier' || seltype == 'Admin')
            tableBody = tableBody + "<td ><button type='button' value='edit' class='popup' onclick='selectedRowToInput2(" + index + ")'><span class='glyphicon glyphicon-pencil'></span></button></td>";
        if (seltype == 'Admin')
            tableBody = tableBody + "<td><button type='button' class='Add-trash' onclick='deleteCompany(" + index + ")'><span class='glyphicon glyphicon-trash'></span></button></td>";
    }
    var table = "<table width=1400px id='table1'>" + tableHeader + tableBody + "</tr></table>";

    document.getElementById("CompanyList").innerHTML = table;


}
renderCompany(cmpList);



/*Search Function */
function SearchFunction() {
    var input, filter, table, tr, td, i;
    input = document.getElementById("Searchinput-btn");
    filter = input.value.toUpperCase();
    table = document.getElementById("table1");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            }
            else {
                tr[i].style.display = "none";
            }

        }
    }
}


/*Add Functions */
function addHtmlTableRow() {


    var name = document.getElementById("nametxt").value;
    var email = document.getElementById("emailtxt").value;
    var phone = document.getElementById("phonetxt").value;
    var owner = document.getElementById("ownertxt").value;
    var street = document.getElementById("streetxt").value;
    var city = document.getElementById("citytxt").value;
    var state = document.getElementById("statetxt").value;
    var country = document.getElementById("countrytxt").value;
    var duns = document.getElementById("dunstxt").value;
    var type = document.getElementById("typetxt").value;
    var companyID = new company(name, email, phone, owner, street, city, state, country, duns, type)
    cmpList.push(companyID);
    renderCompany(cmpList);
    localStorage.setItem('comparr', JSON.stringify(cmpList));





}
function add_popup() {

    var popup_add = document.getElementById("popup_addbtn");
    popup_add.classList.add("show");

}
function closeAddPopup() {

    var popup = document.getElementById("popup_addbtn");
    popup.classList.remove("show");

}
/*Add functions end */



/*Edit functions*/
// display selected row data into input text
var selectedRow;
function selectedRowToInput2(i) {
    selectedRow = i;
    var popup = document.getElementById("EditPopup");
    popup.classList.add("show");


    document.getElementById("nametxt1").value = cmpList[i].name;
    document.getElementById("emailtxt1").value = cmpList[i].email;
    document.getElementById("phonetxt1").value = cmpList[i].phone;
    document.getElementById("ownertxt1").value = cmpList[i].owner;
    document.getElementById("streetxt1").value = cmpList[i].street;
    document.getElementById("citytxt1").value = cmpList[i].city;
    document.getElementById("statetxt1").value = cmpList[i].state;
    document.getElementById("countrytxt1").value = cmpList[i].country;
    document.getElementById("dunstxt1").value = cmpList[i].duns;
    document.getElementById("typetxt1").value = cmpList[i].type;




}
function editHtmlTbleSelectedRow() {
    cmpList[selectedRow].name = document.getElementById("nametxt1").value;
    cmpList[selectedRow].email = document.getElementById("emailtxt1").value;
    cmpList[selectedRow].phone = document.getElementById("phonetxt1").value;
    cmpList[selectedRow].owner = document.getElementById("ownertxt1").value;
    cmpList[selectedRow].street = document.getElementById("streetxt1").value;
    cmpList[selectedRow].city = document.getElementById("citytxt1").value;
    cmpList[selectedRow].state = document.getElementById("statetxt1").value;
    cmpList[selectedRow].country = document.getElementById("countrytxt1").value;
    cmpList[selectedRow].duns = document.getElementById("dunstxt1").value;
    cmpList[selectedRow].type = document.getElementById("typetxt1").value;
    selectedRow = '';
    localStorage.setItem('comparr', JSON.stringify(cmpList));
    renderCompany(cmpList);
}
function closePopupedit() {

    var popup = document.getElementById("EditPopup");
    popup.classList.remove("show");

}
/*Edit functions end */



/* Delete functions */
function deleteCompany(index) {

    cmpList.splice(index, 1);
    localStorage.setItem('comparr', JSON.stringify(cmpList));
    renderCompany(cmpList);
    confirm('Item deleted');

}
/* Delete functions end*/

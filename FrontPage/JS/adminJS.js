function User(username, firstName, lastName, phone, role, company, password) {
    this.username = username;
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.role = role;
    this.company = company;
    this.password = password;
}


var companies = $.parseJSON(localStorage.getItem('comparr'));

var mainUserArray = $.parseJSON(localStorage.getItem('userArray'));

var usr = $.parseJSON(localStorage.getItem('currentUser')); //usr is logged in user
var userRole;

if (usr != undefined && usr != '' && usr != null) {
   // mainUserArray.push(usr);
    userRole = usr.role;
}

function checkSupplier(user) {
    return user.company == usr.company;
}


if (userRole == 'Supplier') {

    userArray = mainUserArray.filter(checkSupplier);
} else {
    userArray = mainUserArray;
}

if (userRole == 'Supplier' || userRole == 'Admin') {    
    var element = document.getElementById("shoppingCart")
    element.outerHTML = "";
    delete element;
}

var th = "<thead><tr><th>First Name</th><th>Last Name</th> <th>Phone No</th><th>Company</th><th>Role</th>";
if (userRole == 'Admin') {
    th += "<th class='text-center'>Action</th>";
}
th+="</tr ></thead > ";

var tablebody = "";

function dynamicSelect(arr) {
    var option = '';

    for (var i = 0; i < arr.length; i++)
        option += "<option value='" + arr[i].name + "'>" + arr[i].name + "</option>";

    return option;

}


function loadPage() {
    tablebody = "";

    for (var i = 0; i < userArray.length; i++) {
        tablebody +=  "<tr><td id='fname_row"+i+"'>" + userArray[i].firstName + "</td>";
        tablebody = tablebody + "<td id='lname_row" + i +"'>" + userArray[i].lastName + "</td>";
        tablebody = tablebody + "<td id='phone_row" + i +"'>" + userArray[i].phone + "</td>";
        tablebody = tablebody + "<td id='company_row" + i +"'>" + userArray[i].company + "</td>";
        tablebody = tablebody + "<td id='role_row" + i + "'>" + userArray[i].role + "</td>";
        if (userRole=='Admin') {
            tablebody += "<td> <button type='button' id='edit_button" + i + "' class='update btn btn-warning btn-sm' onclick='edit_row(" + i + ")'><span class='glyphicon glyphicon-pencil'></span> EDIT </button></td>";
            tablebody += "<td> <button type='button' id='save_button" + i + "' class='btn btn-danger btn-sm' onclick='save_row(" + i + ")'><span class='glyphicon glyphicon-floppy-saved'></span> Save </button></td>";
            tablebody += "<td> <button type='button' id='delete_button" + i + "' class='delete btn btn-danger btn-sm' onclick='delete_row(" + i + ")'><span class='glyphicon glyphicon-trash'></span> DELETE </button></td></tr>";

        }
       
    }
    var tAdd = "";

    if (userRole == 'Admin') {
        tAdd = "<tr><td><input type='text' id='new_fname'></td><td><input type='text' id='new_lname'></td><td><input type='text' id='new_phone'></td><td><select name='Company' id='new_company'><option value='' selected>Select your Company</option>" + dynamicSelect(companies) + "</select></td><td><select name='Role' id='new_role'><option value='' selected>Select Role</option><option value='Admin'>Admin</option><option value='Supplier'>Supplier</option><option value='Regular User'>Regular User</option></select></td><td><button type='button' class='add btn btn-info btn-sm' onclick='add_row();'><span class='glyphicon glyphicon-plus'></span> ADD </button></td></tr>";
    }
    var table = "<table id='data_table' class='table table-striped custab'>" + th + tablebody+tAdd+"</table>";

    document.getElementById("tableInfo").innerHTML = table;


    if (userRole == 'Admin') {
     for (var i = 0; i < userArray.length; i++) {
            var save = document.getElementById("save_button" + i);
            save.style.display = "none";
        }
    }

}


function edit_row(no) {
    var x = document.getElementById("edit_button" + no);
    var save = document.getElementById("save_button" + no);
    save.style.display = "block";
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }

    var fname = document.getElementById("fname_row" + no);
    var lname = document.getElementById("lname_row" + no);
    var phone = document.getElementById("phone_row" + no);
    var company = document.getElementById("company_row" + no);
    var role = document.getElementById("role_row" + no);

    var fname_data = fname.innerHTML;
    var lname_data = lname.innerHTML;
    var company_data = company.innerHTML;
    var phone_data = phone.innerHTML;
    var role_data = role.innerHTML;

    fname.innerHTML = "<input type='text' id='fname_text" + no + "' value='" + fname_data + "'>";
    lname.innerHTML = "<input type='text' id='lname_text" + no + "' value='" + lname_data + "'>";
    company.innerHTML = "<select name='Company' id='company_text" + no + "'><option value='' selected>Select your Company</option>" + dynamicSelect(companies) + "</select>";
    phone.innerHTML = "<input type='text' id='phone_text" + no + "' value='" + phone_data + "'>";
    role.innerHTML = "<select name='Role' id='role_text" + no + "'><option value='' selected>Select Role</option><option value='Admin'>Admin</option><option value='Supplier'>Supplier</option><option value='Regular User'>Regular User</option></select>";    
}

function save_row(no) {

    var usr = userArray[no];
    var fname_val = document.getElementById("fname_text" + no).value;
    var lname_val = document.getElementById("lname_text" + no).value;
    var company_val = document.getElementById("company_text" + no).value;
    var phone_val = document.getElementById("phone_text" + no).value;
    var role_val = document.getElementById("role_text" + no).value;

    document.getElementById("fname_row" + no).innerHTML = fname_val;
    document.getElementById("lname_row" + no).innerHTML = lname_val;
    document.getElementById("company_row" + no).innerHTML = company_val;
    document.getElementById("phone_row" + no).innerHTML = phone_val;
    document.getElementById("role_row" + no).innerHTML = role_val;
    usr.firstName = fname_val;
    usr.lastName = lname_val;
    usr.company = company_val;
    usr.phone = phone_val;
    usr.role = role_val;
    localStorage.setItem('userArray', JSON.stringify(userArray));

    var x = document.getElementById("save_button" + no);

    var edit = document.getElementById("edit_button" + no);
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }

    edit.style.display = "block";

}

function add_row() {
    var new_fname = document.getElementById("new_fname").value;
    var new_lname = document.getElementById("new_lname").value;
    var new_company = document.getElementById("new_company").value;
    var new_phone = document.getElementById("new_phone").value;
    var new_role = document.getElementById("new_role").value;

    var user = new User("", new_fname, new_lname, new_phone, new_role, new_company, "");

    userArray.push(user);
    localStorage.setItem('userArray', JSON.stringify(userArray));

    loadPage();



}

function delete_row(no) {
    var retVal = confirm("Do you want to Delete the information?");
    if (retVal == true) {
        userArray.splice(no, 1);
        localStorage.setItem('userArray', JSON.stringify(userArray));
        loadPage();
        return true;
    }
    else {
        return false;
    }
}


function search() {
    var input, filter, table, tr, td, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("data_table");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        //Column 1
        td_1 = tr[i].getElementsByTagName("td")[0];
        //Column 2
        td_2 = tr[i].getElementsByTagName("td")[1];
        if (td_1 || td_2) {
            if (td_1.innerHTML.toUpperCase().indexOf(filter) > -1 || td_2.innerHTML.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

function model() {
    // Get the modal
    var modal = document.getElementById('myModal');

    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal 
    btn.onclick = function () {
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}
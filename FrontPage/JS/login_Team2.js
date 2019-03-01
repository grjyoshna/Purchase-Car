var user1_Q1 = new Question("Q1", "Bingo")
var user1_Q2 = new Question("Q2", "Jones")
var user1_Q3 = new Question("Q3", "Houston")
var user2_Q1 = new Question("Q1", "Ruff")
var user2_Q2 = new Question("Q2", "Ashley")
var user2_Q3 = new Question("Q3", "Boston")
var user3_Q1 = new Question("Q1", "Jonny")
var user3_Q2 = new Question("Q2", "Saleem")
var user3_Q3 = new Question("Q3", "Austin")
var user4_Q1 = new Question("Q1", "Charlotte")
var user4_Q2 = new Question("Q2", "Williams")
var user4_Q3 = new Question("Q3", "Michigan")
var user5_Q1 = new Question("Q1", "No Pet")
var user5_Q2 = new Question("Q2", "Lee")
var user5_Q3 = new Question("Q3", "China")
var user6_Q1 = new Question("Q1", "Rio ")
var user6_Q2 = new Question("Q2", "Jacky")
var user6_Q3 = new Question("Q3", "New Orleans")
var user7_Q1 = new Question("Q1", "Lucky")
var user7_Q2 = new Question("Q2", "Roger")
var user7_Q3 = new Question("Q3", "Toronto")
var user8_Q1 = new Question("Q1", "Titan")
var user8_Q2 = new Question("Q2", "Smith")
var user8_Q3 = new Question("Q3", "Chicago")
var user9_Q1 = new Question("Q1", "Bruno")
var user9_Q2 = new Question("Q2", "Mark")
var user9_Q3 = new Question("Q3", "New Jersey")
var user10_Q1 = new Question("Q1", "Goofy")
var user10_Q2 = new Question("Q2", "Russell")
var user10_Q3 = new Question("Q3", "New York")

var user1_QuestionArray = [user1_Q1, user1_Q2, user1_Q3]
var user2_QuestionArray = [user2_Q1, user2_Q2, user2_Q3]
var user3_QuestionArray = [user3_Q1, user3_Q2, user3_Q3]
var user4_QuestionArray = [user4_Q1, user4_Q2, user4_Q3]
var user5_QuestionArray = [user5_Q1, user5_Q2, user5_Q3]
var user6_QuestionArray = [user6_Q1, user6_Q2, user6_Q3]
var user7_QuestionArray = [user7_Q1, user7_Q2, user7_Q3]
var user8_QuestionArray = [user8_Q1, user8_Q2, user8_Q3]
var user9_QuestionArray = [user9_Q1, user9_Q2, user9_Q3]
var user10_QuestionArray = [user10_Q1, user10_Q2, user10_Q3]


var user1 = new User("wealthjo@mercedes.com", "Jon", "Wealth", "832-837-509", "Supplier", "Mercedes", "5H6c*4f8", "F", user1_QuestionArray);
var user2 = new User("bayneor@bmw.com", "Orlando", "Bayne", "281-837-509", "Supplier", "BMW", "1L2rxo3$", "M", user2_QuestionArray);
var user3 = new User("sampsonwy@toyota.com", "Wyatt", "Sampson", "713-837-509", "Supplier", "Toyota", "p7mw8Y9@", "F", user3_QuestionArray);
var user4 = new User("shoboikito@supplier.com", "Tony", "Shoboiki", "703-837-509", "Admin", "Supplier Dealership", "6%gJ0h8", "M", user4_QuestionArray);

var user5 = new User("rankinfr@toypas.com", "Frank", "Rankin", "283-837-509", "Regular User", "Toyota of Pasadena", "m7@6HkYS", "M", user5_QuestionArray);
var user6 = new User("dunbarem@cardeals.com", "Emily", "Dunbar", "832-281-713", "Regular User", "Car Deals Dealership", "2rxo*8Y9", "F", user6_QuestionArray);
var user7 = new User("carltongi@eastdeal.edu", "Gillian", "Carlton", "713-832-281", "Regular User", "Eastend Dealership", "6HkY5%gJ", "M", user7_QuestionArray);
var user8 = new User("Ludgateap@auto.com", "April", "Ludgate", "503-283-837", "Admin", "Auto", "@6Hkft*G", "F", user8_QuestionArray);

var user9 = new User("knopele@cars.com", "Leslie", "Knope", "509-837-832", "Admin", "Cars", "iL4$j#FO", "M", user9_QuestionArray);
var user10 = new User("perkinsch@cars.com", "Chris", "Perkins", "738-095-281", "Admin", "Cars", "4@nDftWm", "M", user10_QuestionArray);

var userArray = [user1, user2, user3, user4, user5, user6, user7, user8, user9, user10];

var localUsrArry;

localUsrArry = $.parseJSON(localStorage.getItem("userArray"));

if (localUsrArry == null || localUsrArry == undefined) {
    localStorage.setItem('userArray', JSON.stringify(userArray));
} else {
    userArray = localUsrArry;
}

function User(username, firstName, lastName, phone, role, company, password, gender, pwdQuestionArray) {
    this.username = username;
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.role = role;
    this.company = company;
    this.password = password;
    this.gender = gender;
    this.pwdQuestionArray = pwdQuestionArray;
    
}

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


var companyList = [companyID1, companyID2, companyID3, companyID4, companyID5, companyID6, companyID7, companyID8, companyID9, companyID10];

var cmpList = $.parseJSON(localStorage.getItem('comparr'));
if (cmpList == null) {
    localStorage.setItem('comparr', JSON.stringify(companyList));
    cmpList = companyList;
}

function login(inputUsername, inputPwd, user) {
    if (inputUsername == user.username) {
        if (inputPwd == user.password) {
            return true;
        }
    }
    return false;
}

function loginUser() {

    inputUsername = document.getElementById("username").value;
    inputPwd = document.getElementById("password").value;
    msg = "";
    //condition 1:username length
    if (inputUsername.length < 2 || inputUsername.length > 50) {
        msg = "Your username must be > 2 chars and < 50 chars!";
    }
    //condition 2: username is email
    if (!validateEmail(inputUsername)) {
        msg += "<br/>Your username must be an email!";
    }
    //condition 3: password length
    if (inputPwd.length < 8 || inputPwd.length > 13) {
        msg += "<br/>Your password must between 8-13 characters!";
    }
    //condition 4:password characters
    if (!validatePassword(inputPwd))
        msg += "Password must contain at least one lower letter, <br/> One up letter, One number, and one special character from the following 7 characters: !@#\$%\^&\*";

    //check if validation is ok? if not not ok, return
    if (msg != "") {
        document.getElementById("warningMSG").innerHTML = msg;
        return;
    }
    ////////////////////////////////////////////////
    usertochange1 = sessionStorage.getItem("currentUser");
    userdetails1 = JSON.parse(usertochange1);
    var isUserFound = false;
    for (i = 0; i < userArray.length; i++) {
        if (login(inputUsername, inputPwd, userArray[i])) {
            localStorage.setItem('currentUser', JSON.stringify(userArray[i]));
            isUserFound = true;
            location.href = "FrontPage.html";
            break;
        }
    }

    if (!isUserFound) {
        msg = "User and password pair are not found!";
    }
   
      
    document.getElementById("warningMSG").innerHTML = msg; 
}

function validatePassword(password) {
    var re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    return re.test(password);
}

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function popupForgetPassword() {
    var username = document.getElementById("username").value;
    if (username.length == 0) {
        var msg = "Your username is empty!";
        document.getElementById("warningMSG").innerHTML = msg;
        return;
    }
    else {
        userFoundFlag = false;
        for (var i = 0; i < userArray.length; i++) {
            if (userArray[i].username == username) {
                userFoundFlag = true;
                sessionStorage.setItem("currentUser", JSON.stringify(userArray[i]));

            }
        }
        if (!userFoundFlag) {
            var msg = "User is not found!";
            document.getElementById("warningMSG").innerHTML = msg;
            return;
        }
    }
    var popup = document.getElementById("myPopup");
    popup.classList.add("show");
}

function closePopup() {
    var popup = document.getElementById("myPopup");
    popup.classList.remove("show");
}

function Question(QuestionNo, Key) {
    this.QuestionNo = QuestionNo;
    this.Key = Key;
}

function resetPassword() {
    userString = sessionStorage.getItem("currentUser");
    currentUser = JSON.parse(userString);
    questionArray = currentUser.pwdQuestionArray;

    var ddl = document.getElementById("questionList");
    var selectedQuestion = ddl.options[ddl.selectedIndex].value;

    for (var i = 0; i < questionArray.length; i++) {
        if (questionArray[i].QuestionNo == selectedQuestion) {
            if (questionArray[i].Key == document.getElementById("passwordAnswer").value) {
                var msg = "Congratulation! you can reset your password with the link below <br/> <a href='resetPassword.html' style='color:red;'>Reset</a>";
                document.getElementById("warningMSG").innerHTML = msg;
                return;
            }
        }
    }
    var msg = "Sorry your answer is wrong, please try a new one!";
    document.getElementById("warningMSG").innerHTML = msg;

}


function changepassword() {
    newpassword = document.getElementById("newpassword").value;
    found = validatePassword(newpassword);
    var msg = "";
    exist = false;
    if (found = true) {
        usertochange = sessionStorage.getItem("currentUser");
        userdetails = JSON.parse(usertochange);
        for (i = 0; i <= userArray.length; i++) {
            if (userArray[i].username == userdetails.username) {
                userArray[i].password = newpassword;
                msg = "your password has been successfully reset <br/> <a href='loginPage.html' style='color:red;'>Login</a>";
                var newuser = new User(userdetails.username, userdetails.firstName, userdetails.lastName, userdetails.phone, userdetails.role, userdetails.company, newpassword, userdetails.gender, userdetails.pwdQuestionArray);
                sessionStorage.setItem("currentUser", JSON.stringify(newuser));
                exist = true;
                break;
            }
        }
    }
    else {
        msg = "something went wrong try again later";
    }

    document.getElementById("msg").innerHTML = msg;

}
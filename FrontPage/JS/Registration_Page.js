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

var userArray = [];
var localUsrArry;

var cmpList = $.parseJSON(localStorage.getItem('comparr'));



function dynamicSelect(arr) {
    var option = '';

    for (var i = 0; i < arr.length; i++)
        option += "<option value='" + arr[i].name + "'>" + arr[i].name + "</option>";

    return option;

}

var company = "<select id='companyDDL' name='Company'><option value= '' selected>Select your Company</option>" + dynamicSelect(cmpList) + "</select >";

document.getElementById("cmp").innerHTML = company;

localUsrArry = $.parseJSON(localStorage.getItem("userArray"));

function validatePassword(password) {
    var re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    return re.test(password);
}

function validatePhone(phone) {
    var Ph = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    return Ph.test(phone);
}


function Submit() {
    var e = document.getElementById('companyDDL');
    var emailRegex = /^[A-Za-z0-9._]*\@[A-Za-z]*\.[A-Za-z]{2,5}$/;
    var fname = document.form.Name.value,
        lname = document.form.LastName.value,
        femail = document.form.Email.value,
        freemail = document.form.enterEmail.value,
        fpassword = document.form.Password.value,
        fphone = document.form.Phone.value,
        fmonth = document.form.birthday_month.value,
        fday = document.form.birthday_day.value,
        fyear = document.form.birthday_year.value,        
        cTitle = e.options[e.selectedIndex].value;
    cROle = document.form.Role.value;

    if (fname == "") {
        document.form.Name.focus();
        document.getElementById("errorBox").innerHTML = "*enter the first name";
        return false;
    }
    if (lname == "") {
        document.form.LastName.focus();
        document.getElementById("errorBox").innerHTML = "*enter the last name";
        return false;
    }

    if (femail == "") {
        document.form.Email.focus();
        document.getElementById("errorBox").innerHTML = "*enter the email";
        return false;
    } else if (!emailRegex.test(femail)) {
        document.form.Email.focus();
        document.getElementById("errorBox").innerHTML = "*enter the valid email";
        return false;
    }

    if (freemail == "") {
        document.form.enterEmail.focus();
        document.getElementById("errorBox").innerHTML = "*Re-enter the email";
        return false;
    } else if (!emailRegex.test(freemail)) {
        document.form.enterEmail.focus();
        document.getElementById("errorBox").innerHTML = "*Re-enter the valid email";
        return false;
    }

    if (freemail != femail) {
        document.form.enterEmail.focus();
        document.getElementById("errorBox").innerHTML = "*emails are not matching, re-enter again";
        return false;
    }


    if (fpassword == "") {
        document.form.Password.focus();
        document.getElementById("errorBox").innerHTML = "*enter the password";
        return false;
    }

    if (!validatePassword(fpassword)) {
        document.getElementById("errorBox").innerHTML = "Password must contain at least one lower letter, <br /> One up letter, One number, and one special character from the following 7 characters: !@#\$ %\^&\*";
        return false;
    }
    if (fphone == "") {
        document.form.Phone.focus();
        document.getElementById("errorBox").innerHTML = "*enter the Phone Number";
        return false;
    }
    if (!validatePhone(fphone)) {
        document.getElementById("errorBox").innerHTML = "Enter the telephopne number in valid American format! <br/> for eg: 123-456-7890";
        return false;
    }

    if (fmonth == "") {
        document.form.birthday_month.focus();
        document.getElementById("errorBox").innerHTML = "*select the birthday month";
        return false;

    }
    if (fday == "") {
        document.form.birthday_day.focus();
        document.getElementById("errorBox").innerHTML = "*select the birthday day";
        return false;
    }
    if (fyear == "") {
        document.form.birthday_year.focus();
        document.getElementById("errorBox").innerHTML = "*select the birthday year";
        return false;
    }
    if (cTitle == "") {
        document.form.Company.focus();
        document.getElementById("errorBox").innerHTML = "*select a Company Name";
        return false;
    }
    if (cROle == "") {
        document.form.Role.focus();
        document.getElementById("errorBox").innerHTML = "*select your Role";
        return false;
    }
    if (document.form.radiobutton[0].checked == false && document.form.radiobutton[1].checked == false) {
        document.getElementById("errorBox").innerHTML = "*select your gender";
        return false;
    }
    if (fname != '' && lname != '' && femail != '' && freemail != '' && fpassword != '' && fmonth != '' && fday != '' && fyear != '') {
        document.getElementById("errorBox").innerHTML = "*form submitted successfully";

        var user = new User(femail, fname, lname, fphone, cROle, cTitle, fpassword, '', []);

        var localUsrArry = $.parseJSON(localStorage.getItem("userArray"));
        localUsrArry.push(user);

        localStorage.setItem('userArray', JSON.stringify(localUsrArry));

        location.href = "loginPage.html";
    }



}

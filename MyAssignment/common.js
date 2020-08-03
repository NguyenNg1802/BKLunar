var mapping_month = {
    January: 1,
    February: 2,
    March: 3,
    April: 4,
    May: 5,
    June: 6,
    July: 7,
    August: 8,
    September: 9,
    October: 10,
    November: 11,
    December: 12
};

function createSlot(name, price, img) {

    return '<div class="col-12 col-sm-6 col-md-4 col-lg-3 content place-container">' +
        '<div class="carousel slide" data-ride="carousel">' +
        '<div class="carousel-inner">\
                            <div class="prod-img">\
                                <a href="#" id="'+ name + '"onclick=toProductDetail(this.id)>\
                                    <img class="d-block img-fluid zoom-hover" src="'+ img + '" alt="Responsive image">\
                                </a>\
                            </div>\
                        </div>\
                </div>\
                <div class="d-flex flex-column place-container">\
                                    <div class="product-name-search">'+ name + '</div>\
                                    <div class="product-price-search"> '+ price + '<sup> &#273</sup></div>\
                                </div>\
                            </div>'
        ;
}
//<div class="place-price"> From 100d per night / Free cancellation</div>\
function addSearchResult(id, name, price, img) {
    //console.log("NAME: " + name);
    return `<a href="#" id="search-result-${id}" class="search-product-result-container" onclick="toProductDetail('${name}')">
                <img src="${img}" class="search-product-image">
                <div class='product-search-description'>
                <div class="product-name-search">${name}</div>
                <br>
                <div class="product-price-search">${price}<sup> &#273</sup></div>
                </div>
            </a>
            <hr class="search-divider">`
}

function searchProduct() {
    $('.search-result-container').html('');
    var search_string = $('#search-input').val().trim();
    if (search_string === "") {
        return;
    }
    $.ajax(
        {
            type: "POST",
            url: "rest/searchProduct.php",
            data: {
                keyword: search_string
            },
            success: function (result) {

                var json_result = JSON.parse(result);
                json_result.forEach(function (element) {
                    //console.log(element);
                    var string = addSearchResult(element.id, element.name, element.price, element.image);
                    $('.search-result-container').append(string);
                });

            }
        });
}

var coffees;
var teas;
var milks;
/*function initFakeCoffeeData() {
    var coffee1 = { name: "The first Coffee", price: 5000, img: "images/coffee1.jpg" };
    var coffee2 = { name: "The second Coffee", price: 10000, img: "images/coffee2.jpg" };
    var coffee3 = { name: "The third Coffee", price: 12000, img: "images/coffee3.jpg" };
    var coffee4 = { name: "The fourth Coffee", price: 20000, img: "images/coffee4.jpg" };
    coffees = [coffee1, coffee2, coffee3, coffee4];
}*/

function displayCoffeeData() {
    var i;
    for (i = 0; i < coffees.length; i++) {
        code = createSlot(coffees[i].name, coffees[i].price, coffees[i].image);
        $(".contents-1").append(code);
    }
}

/*function initFakeTeaData() {
    var tea1 = { name: "The first Tea", price: 5000, img: "images/tea1.png" };
    var tea2 = { name: "The second Tea", price: 10000, img: "images/tea2.jpg" };
    var tea3 = { name: "The third Tea", price: 12000, img: "images/tea3.jpg" };
    var tea4 = { name: "The fourth Tea", price: 20000, img: "images/tea4.jpg" };
    teas = [tea1, tea2, tea3, tea4];
}*/



function displayTeaData() {
    var i;
    for (i = 0; i < teas.length; i++) {
        code = createSlot(teas[i].name, teas[i].price, teas[i].image);
        $(".contents-2").append(code);
    }
}

/*function initFakeMilkData() {
    var milk1 = { name: "The first Milk", price: 5000, img: "images/milk1.jpg" };
    var milk2 = { name: "The second Milk", price: 10000, img: "images/milk2.jpg" };
    var milk3 = { name: "The third Milk", price: 12000, img: "images/milk3.jpg" };
    var milk4 = { name: "The fourth Milk", price: 20000, img: "images/milk4.jpg" };
    milks = [milk1, milk2, milk3, milk4];
}*/

function displayMilkData() {
    var i;
    for (i = 0; i < milks.length; i++) {
        code = createSlot(milks[i].name, milks[i].price, milks[i].image);
        $(".contents-3").append(code);
    }
}





function signup() {
    var form = document.getElementById('signupform');
    var email = form.elements["email"].value;
    var firstname = form.elements["firstname"].value;
    var lastname = form.elements["lastname"].value;
    var password = form.elements["password"].value;
    var retype = form.elements['repassword'].value;
    var day = $("#input-day").val();
    var month = $("#input-month").val();
    var year = $("#input-year").val();
    //var birthdate = $("#input-day").val() + "/" + mapping_month[$("#input-month").val()] + "/" + $("#input-year").val();
    var birthdate = day + "/" + mapping_month[month] + "/" + year;
    // check user info at front end
    var errors = [];
    if (!isValidDate(day, mapping_month[month], year)) {
        errors.push("Error: Invalid date");
        $("#signup-alert-birthdate").show();
    }
    if (retype != password) {
        errors.push("Error: Password not same as retype passwoard");
        $("#signup-alert-pass").show();
    }
    if (errors.length > 0) {
        return false;
    }
    //send data to server

    $.ajax(
        {
            type: "POST",
            url: "rest/signup.php",
            data: {
                email: email,
                firstname: firstname,
                lastname: lastname,
                password: password,
                birthdate: birthdate
            },
            success: function (result) {
                //console.log(result);
                var json_result = JSON.parse(result);
                if (json_result.status == 0) {// tell the user that the email already registered
                    //document.getElementById('alert-email').innerHTML = json_result.error;
                    $("#signup-alert-email").show();
                }
                else {// signup successfull
                    alert("Sign up successfully");
                    $('#signup-email-modal').modal('hide');
                    clearSignupModal();
                }
            }
        });
    /*var xhttp = new XMLHttpRequest();
    var url = "/MyAss/rest/signup.php";
    //var value = "firstname=" + firstname + "&lastname=" + lastname + "&email=" + email + "&password=" + password + "&birthyear=" + birthyear + "&birthday=" + birthday+ "&birthmonth=" + birthmonth;
    //var value = "firstname=" + firstname + "&lastname=" + lastname + "&email=" + email + "&password=" + password + "&birthdate=" + birthdate;\
    var value = "firstname=" + firstname + "&lastname=" + lastname + "&email=" + email + "&password=" + password + "&birthdate=" + birthdate;
    xhttp.open("POST", url, true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            console.log(xhttp.response);
            var response = JSON.parse(xhttp.response);
            if (response.status == 0) {// tell the user that the email already registered
                document.getElementById('alertemail').innerHTML = response.error;
            }
            else {// signup successfull
                $('#signup-email-modal').modal('hide');
            }
        }
    }
    xhttp.send(value);*/
}

function mysignin() {
    var form = document.getElementById("loginform");
    var email = form.elements['email'].value;
    var password = form.elements['password'].value;

    var xhttp = new XMLHttpRequest();
    var url = "rest/login.php";
    var value = "email=" + email + "&password=" + password;
    xhttp.open("POST", url, true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            //console.log(xhttp.responseText);
            var response = JSON.parse(xhttp.response);
            if (response.status == 0) alert("Login failed, please check your email and password");
            else {
                //store user to local storage
                var login_div = document.getElementById("login");
                login_div.innerHTML = response.firstname + " " + response.lastname;
                //login_div.style.pointerEvents = "none";
                setUserProfile(response);
                $('#login').off('click').click(function () {
                    showProfileModal(response);
                });
                $('#login-modal').modal('hide');
            }
        }
    }
    xhttp.send(value);
}

function getFeaturesData() {
    var xhttp = new XMLHttpRequest();
    var url = "rest/getFeatureProduct.php";
    xhttp.open('GET', url, true);
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            var response = JSON.parse(xhttp.response);
            teas = parseProductData(response.teas);
            milks = parseProductData(response.milks);
            coffees = parseProductData(response.coffees);
            displayTeaData();
            displayMilkData();
            displayCoffeeData();
        }
    }
    xhttp.send();
}

function parseProductData(json_string) {
    var product_array = JSON.parse(json_string);
    var i;
    for (i = 0; i < product_array.length; i++) {
        product_array[i] = JSON.parse(product_array[i]);
    }
    return product_array;
}

function checkLoggedIn() {
    var user_div = document.getElementById("login");
    $.ajax(
        {
            type: "GET",
            url: "rest/checkLoggedIn.php",
            success: function (result) {
                //console.log(result);
                var json_result = JSON.parse(result);
                if (json_result.status == 1) { // is logged in
                    // set user name
                    user_div.innerHTML = json_result.firstname + " " + json_result.lastname;
                    // set profile modal 
                    setUserProfile(json_result);
                    $('#login').off('click').click(function () {
                        showProfileModal(json_result);
                    });
                }
                else { // not log in yet
                    user_div.innerHTML = "Login";
                    $('#login').off('click').click(showLoginModal);
                    $("#special-bttn").hide();
                }
            }
        });
}

function logOut() {
    $.ajax(
        {
            type: "GET",
            url: "rest/logout.php",
            success: function (result) {
                $('#login').html('Login');
                $('#login').off('click').click(showLoginModal);
                $.ajax(
                    {
                        type: "GET",
                        url: "rest/logout.php",
                        success: function (result) {// hide the button when sign out
                            $("#special-bttn").hide();
                        }
                    });
            }
        });
}


function setUserProfile(profile) {
    //console.log(profile);
    var birthdate = profile.birthdate;
    if (birthdate !== null) {
        var day_value = parseInt(birthdate.split("-")[0]);
        var month_value = parseInt(birthdate.split("-")[1]);
        var year_value = parseInt(birthdate.split("-")[2]);
        /*console.log("day value:" + day_value);
        console.log("month value:" + month[month_value - 1]);
        console.log("year value:" + year_value);*/
        $('#profile-day').val(day_value);
        $('#profile-month').val(month[month_value - 1]);
        $('#profile-year').val(year_value);
        /*console.log("day value:" + $('#profile-day').val());
        console.log("month value:" + $('#profile-month').val());
        console.log("year value:" + $('#profile-year').val());*/
    }
    if (profile.email === null) {
        $('#profile-email-container').hide();
    }
    else {
        $('#profile-email').val(profile.email);
    }
    $('#profile-phone').val(profile.phone);
    $('#profile-first-name').val(profile.firstname);
    $('#profile-last-name').val(profile.lastname);
    $('#profile-address').val(profile.address);
    $('#profile-country').val(profile.country);

    // Handle the button that link to the dashboard if admin and user order otherwise
    if (profile.role === "user") {
        $("#special-bttn").html('My Order');
        //$("#special-bttn").prop("href", "user/orders.php");
        $("#special-bttn").off('click').click(function () {
            gotoOrderList();
        });
    }
    else if (profile.role === "admin") {
        console.log('ADMINNNNNN');
        $("#special-bttn").html('Dashboard');
        $("#special-bttn").off('click').click(function () {
            gotoDashBoard();
        });
        //$("#special-bttn").prop("href", "admin/users.php");
    }
    $("#special-bttn").show();
}

function initUserInterface() {// function init necessary component for the user interface include: profile modal, sign in information, collapse sidebar
    $.ajax( // Get the list of countries
        {
            type: "GET",
            url: "rest/getCountries.php",
            success: function (result) {
                var json_result = JSON.parse(result);
                $.each(json_result, function (i, item) {
                    $('#profile-country').append($('<option>', {
                        value: item.country_name,
                        text: item.country_name
                    }));
                });
            }
        });
    // add birthdate related option   
    $(function () {
        for (i = 1; i <= 31; i++) {
            $('#input-day').append($('<option>', {
                value: i,
                text: i
            }));
            $('#profile-day').append($('<option>', {
                value: i,
                text: i
            }));
        }
        for (i = 0; i < 12; i++) {
            $('#input-month').append($('<option>', {
                value: month[i],
                text: month[i]
            }));
            $('#profile-month').append($('<option>', {
                value: month[i],
                text: month[i]
            }));

        }
        for (i = 0; i <= 99; i++) {
            var year = i + 1970;
            $('#input-year').append($('<option>', {
                value: year,
                text: year
            }));
            $('#profile-year').append($('<option>', {
                value: year,
                text: year
            }));
        }
        $('#sidebarCollapse').on('click', function () {
            $('#sidebar').toggleClass('active');
        });
        // Why put check logged in here: the select element need to be init first to select it // there might be something wrong with the country too
        checkLoggedIn();
    });
    $(".signup-error-container").hide();
    $(".profile-error-container").hide();
    $('.change-error-container').hide();
}

function updateUserProfile() {
    var phone = $('#profile-phone').val();
    var country = $('#profile-country').val();
    var firstname = $('#profile-first-name').val();
    var lastname = $('#profile-last-name').val();
    var day = $('#profile-day').val();
    var month = $('#profile-month').val();
    var year = $('#profile-year').val();
    var address = $('#profile-address').val();
    var birthdate = year + "-" + mapping_month[month] + "-" + day;
    // check valid birthdate
    var errors = [];
    if (!isValidDate(day, mapping_month[month], year)) {
        errors.push("Error: Invalid date");
        $("#profile-alert-birthdate").show();
    }
    if (errors.length > 0) {
        return false;
    }
    // send data to backend
    $.ajax(
        {
            type: "POST",
            url: "rest/updateUserProfile.php",
            data: {
                phone: phone,
                country: country,
                firstname: firstname,
                lastname: lastname,
                birthdate: birthdate,
                address: address
            },
            success: function (result) {
                //console.log(result);
                var json_result = JSON.parse(result);
                //console.log(json_result);
                if (json_result.status >= 0) {
                    alert("Update successfully");
                    setUserProfile(json_result);
                }
                else {
                    alert(json_result.message);
                }
            }
        });
}

function changePassword() {
    var new_pass = $("#change-pass-new").val();
    var new_pass_confirm = $("#change-pass-new-confirm").val();
    // check new pass and retype pass
    if (new_pass === new_pass_confirm) {//same : success
        var old_pass = $("#change-pass-old").val();
        $.ajax(
            {
                type: "POST",
                url: "rest/changeUserPassword.php",
                data: {
                    new_pass: new_pass,
                    old_pass: old_pass
                },
                success: function (result) { // TO DO: do something went receive result
                    //console.log("Debug change password: " + result);
                    var json_result = JSON.parse(result);
                    if (json_result.status >= 0) { // password successfully change
                        alert("Successfully change password");
                        $('#change-pass-modal').modal('hide');
                        clearChangePassModal();
                    }
                    else {
                        alert(json_result.message);
                    }
                }
            });
    }
    else {// alert not equal
        $("#change-alert-pass").show()
        //$("#alert-pass-change").html('Password and re-type password not match');
    }
}


function showLoginModal() {
    $('#login-modal').modal("show");
}

function showProfileModal(profile) {
    // set profile data
    if (profile.type === 'facebook') {//hide email div due to no email when login using facebook
        $('#profile-email-container').hide();
    }
    else {
        $('#profile-email-container').show();
    }
    $('#profile-modal').modal('show');
}

var daysInMonth = function (m, y) {
    switch (m) {
        case 2:
            return (y % 4 == 0 && y % 100) || y % 400 == 0 ? 29 : 28;
        case 9: case 4: case 6: case 11:
            return 30;
        default:
            return 31;
    }
};
var isValidDate = function (d, m, y) {

    if (m > 12 || m < 1) {
        return false;
    }
    var day_in_month = daysInMonth(m, y);
    if (d > day_in_month || d < 1) {
        return false;
    }
    return true;
}

function clearSignupModal() { // clear the signup modal when user successfully register
    $('.signup-error-container').hide(); // hide all the alert box

    // reset the input field
    $('#signup-email').val('');
    $('#signup-first-name').val('');
    $('#signup-last-name').val('');
    $('#signup-password').val('');
    $('#signup-repassword').val('');
    $("#input-day").val('');
    $("#input-month").val('');
    $("#input-year").val('');
}

function clearChangePassModal() {
    $('.change-error-container').hide();
    $('#change-pass-old').val('');
    $('#change-pass-new').val('');
    $('#change-pass-new-confirm').val('');
}

function resetPassword() {
    var email = $('#input-forgot').val();
    $.ajax(
        {
            type: "POST",
            url: "rest/resetPassword.php",
            data: {
                email: email
            },
            success: function (result) { // TO DO: do something went receive result
                //console.log("Reset password result: " + result);
                var json_result = JSON.parse(result);
                if (json_result.status >= 0) { // password successfully reset
                    alert(json_result.message);
                    $('#input-forgot').val('');
                }
                else {
                    alert(json_result.message);
                }
            }
        });
}

function titleCase(str) {
    var splitStr = str.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
        // You do not need to check if i is larger than splitStr length, as your for does that for you
        // Assign it back to the array
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    // Directly return the joined string
    return splitStr.join(' ');
}


function toProductDetail(id) {
    //console.log(titleCase(id));
    var url = './product_detail.html?name=' + encodeURIComponent(id);
    document.location.href = url;
}

function goToHomePage(){
    window.location.href = 'index.html';
}

function goToCoffeePage(tag){
    //window.location.href = 'index.html';
    var url = './products.html?name=' + encodeURIComponent("Coffee") + "&tag=" + encodeURIComponent(tag);
    document.location.href = url;
}

function goToTeaPage(tag){
    //window.location.href = 'index.html';
    var url = './products.html?name=' + encodeURIComponent("Tea") + "&tag=" + encodeURIComponent(tag);
    document.location.href = url;
}

function goToMilkPage(tag){
    //window.location.href = 'index.html';
    var url = './products.html?name=' + encodeURIComponent("Milk") + "&tag=" + encodeURIComponent(tag);
    document.location.href = url;
}

function gotoDashBoard(){
    window.location.href = 'admin/users.php';
}

function gotoOrderList(){
    window.location.href = 'user/orders.php';
}


function makeOrder(id) {
    var quantity = $('#quantityNumber').html();


    $.ajax(
        {
            type: "POST",
            url: "rest/makeOrder.php",
            data: {
                product_id: id,
                quantity: quantity
            },
            success: function (result) {
                var json_result = JSON.parse(result);
                if (json_result.status > 0) {
                    alert(json_result.message);
                }
                else {// signup successfull
                    alert(json_result.message);
                }
            }
        });
}
function facebookLoginInit() {
    console.log("Facebook init start");
    document.getElementById('facebooksignin').addEventListener('click', function () {
        FB.login(statusChangeCallback, { scope: 'email,public_profile', return_scopes: true });
    }, false);
}

function statusChangeCallback(response) {

    if (response.status === 'connected') {
        //Fetching your information from facebook
        FB.api('/me', function (response) {
            var xhttp = new XMLHttpRequest();
            var url = "rest/facebooklogin.php";
            var value = "idtoken=" + response.id + "&name=" + response.name;
            xhttp.open("POST", url, true);
            xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xhttp.onreadystatechange = function () {
                if (xhttp.readyState == 4 && xhttp.status == 200) {
                    console.log(xhttp.response);
                    var response = JSON.parse(xhttp.response);
                    if (response.status == 0) {
                        alert(response.error);
                      }
                      else {// login success
                        var login_div = document.getElementById("login");
                        login_div.innerHTML = response.firstname + " " + response.lastname;
                        //login_div.style.pointerEvents = "none";
                        //Set profile modal
                        /*login_div.removeEventListener('click', showLoginModal, false);
                        login_div.addEventListener('click', showProfileModal, false);*/
                        setUserProfile(response);
                        $('#login').off('click').click(function(){
                            showProfileModal(response);
                        });
                        $('#login-modal').modal('hide');
                      }
                }
            }
            xhttp.send(value);
            /*console.log(response);
            console.log('Successful login for: ' + response.name);
            sessionStorage.setItem("name", response.name);*/
        });
    } else {
        // The person is not logged into your app or we are unable to tell.
        console.log("Not yet log in using facebook account")
    }
}

// This function is called when someone finishes with the Login
// Button.  See the onlogin handler attached to it in the sample
// code below.
function checkLoginState() {
    FB.getLoginStatus(function (response) {
        statusChangeCallback(response);
    });
}

window.fbAsyncInit = function () {
    FB.init({
        appId: '572271909870965',
        cookie: true,  // enable cookies to allow the server to access 
        // the session
        xfbml: true,  // parse social plugins on this page
        version: 'v2.8' // use graph api version 2.8
    });

    // Now that we've initialized the JavaScript SDK, we call 
    // FB.getLoginStatus().  This function gets the state of the
    // person visiting this page and can return one of three states to
    // the callback you provide.  They can be:
    //
    // 1. Logged into your app ('connected')
    // 2. Logged into Facebook, but not your app ('not_authorized')
    // 3. Not logged into Facebook and can't tell if they are logged into
    //    your app or not.
    //
    // These three cases are handled in the callback function.

    /*FB.getLoginStatus(function (response) {
        statusChangeCallback(response);
    });*/

};

// Load the SDK asynchronously
(function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

// Here we run a very simple test of the Graph API after login is
// successful.  See statusChangeCallback() for when this call is made.
function testAPI() {
    console.log('Welcome!  Fetching your information.... ');
    FB.api('/me', function (response) {
        console.log('Successful login for: ' + response.name);
        document.getElementById('status').innerHTML =
            'Thanks for logging in, ' + response.name + '!';
    });
}
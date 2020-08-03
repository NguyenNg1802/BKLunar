var googleUser = {};
var startApp = function () {
  console.log("Google init start")
  gapi.load('auth2', function () {
    // Retrieve the singleton for the GoogleAuth library and set up the client.
    auth2 = gapi.auth2.init({
      client_id: '605216785871-d0h8gi8g19ifncnt5t42s46kdkoggt2j.apps.googleusercontent.com',

      cookiepolicy: 'single_host_origin',
      // Request scopes in addition to 'profile' and 'email'
      //scope: 'additional_scope'
    });
    attachSignin(document.getElementById('googlesignin'));
  });
};

function attachSignin(element) {
  auth2.attachClickHandler(element, {},
    function (googleUser) {//successfully login with google credenti...
      //get the id_token to send to server to validate
      var id_token = googleUser.getAuthResponse().id_token;
      var xhttp = new XMLHttpRequest();
      var value = "idtoken=" + id_token;
      var url = "rest/googlelogin.php";
      xhttp.open('POST', url, true);
      xhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
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
            // set profile modal
            /*login_div.removeEventListener('click', showLoginModal, false);
            login_div.addEventListener('click', showProfileModal, false);*/
            setUserProfile(response);
            $('#login').off('click').click(function () {
              showProfileModal(response);
            });
            $('#login-modal').modal('hide');
          }
        }
      }
      xhttp.send(value);

    }, function (error) {
      console.log(JSON.stringify(error, undefined, 2));
    });
}



function initMap() {
  var location = { lat: 10.773327, lng: 106.659249 };
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: location
  });
  var marker = new google.maps.Marker({
    position: location,
    map: map
  });

}

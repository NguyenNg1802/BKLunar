    var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    /*$(function () {
        for (i = 1; i <= 31; i++) {
            $('#input-date').append('<option>' + i + '</option>');
        }
        for (i = 0; i < 12; i++) {
            $('#input-month').append('<option>' + month[i] + '</option>');
        }
        for (i = 0; i <= 99; i++) {
            var year = i + 1970;
            $('#input-year').append('<option>' + year + '</option>')
        }
        $('#sidebarCollapse').on('click', function () {
            $('#sidebar').toggleClass('active');
        });
    });*/
    initUserInterface();
    getFeaturesData();
    
    //initFakeCoffeeData();
    //displayCoffeeData();
    
    
    //initLoginStatus();
    /*initFakeTeaData();
    displayTeaData();

    initFakeMilkData();
    displayMilkData();*/
    
    //start the google login init
    startApp();
    //start the facebook login init
    facebookLoginInit();
    

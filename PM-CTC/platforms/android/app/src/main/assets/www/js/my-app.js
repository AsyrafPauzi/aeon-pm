// Initialize app
var myApp = new Framework7();


// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

var app = new Framework7({
});

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we want to use dynamic navbar, we need to enable it for this view:
    dynamicNavbar: true

});

// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {



    console.log(navigator.notification);

    console.log("Device is ready!");


});



myApp.onPageInit('index', function(page) {


     $$('#serial').on('click', function() {

        alert("test");

      
    });
            $$('.form-to-json').on('click', function() {
            var formData = myApp.formToJSON('#my-form');
            alert(JSON.stringify(formData));


         });

    document.getElementById("cameraTakePicture").addEventListener("click", cameraTakePicture);

    function cameraTakePicture() {
        navigator.camera.getPicture(onSuccess, onFail, {
            quality: 50,
            destinationType: Camera.DestinationType.DATA_URL
        });

        function onSuccess(imageData) {
            var image = document.getElementById('myImage');
            image.src = "data:image/jpeg;base64," + imageData;
        }

        function onFail(message) {
            alert('Failed because: ' + message);
        }
    }



})
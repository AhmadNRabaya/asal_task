$(document).ready(function (){
    var accessToken = 'EAARZAEmPufoYBAKF4S7FsEaX2icKlWapAD6ZB4rP3fVDFWmZBZAtZAxcJNUZBqQMlzzvwsBN3ynZCejTlDsas0OelltgXZCAsZCqEosWbxKQ1ugSHmtbO9wduHDXbnXA47BPDNnp4ZCCZBKAFQdZCv0BCVj2g5JZBvypy2uAZD';

        function statusChangeCallback(response) {
            if (response.status === 'connected') {
                //accessToken = response.authResponse.accessToken;
                getInfo();
            } else if (response.status === 'not_authorized') {
                login();
            } else {
                login();
            }
        }

        window.fbAsyncInit = function() {
            FB.init({
                appId      : '1223835427700358',
                cookie     : true,
                xfbml      : true,
                version    : 'v2.8'
            });

            FB.getLoginStatus(function(response) {
                statusChangeCallback(response);
            });

        };

        // Load the SDK asynchronously
        (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = "//connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
        function login() {
            FB.login(function (response) {


            },{scope:'public_profile,email,user_birthday,user_education_history,user_location,user_work_history'});
        };



    function getInfo(){

             FB.api('/me?access_token='+accessToken,'GET',{fields: 'name,link,id,email,picture.width(500).height(500),location,gender,birthday,education,work'},function(res){
                 $('#picture').attr('src',res.picture.data.url );
                 $('#link').attr('href',res.link);
                 $('#userName').html(res.name);
                 $('#location').html(res.location.name);
                 $('#userEmail').html(res.email);
                 $('#birthday').html(res.birthday);
                 $('#gender').html(res.gender);
                 for(var i=0;i<=res.work.length;i++) {
                     $('#work').html(
                         '<div class="row">' +
                            '<div class="col-offset-1 col-xs-12 col-sm-12 col-md-9">' +
                                '<h4>'+res.work[0].position.name+'</h4>' +
                            '</div>' +
                            '<div class="col-xs-12 col-sm-12 col-md-3">' +
                                '<label class="label label-danger">'+res.work[0].location.name +' </label>' +
                                '||<label class="label label-primary">'+res.work[0].employer.name+'</label>' +
                            '</div>' +
                            '<div class="col-xs-12 col-sm-12">' +
                                '<label>'+res.work[0].description+'</label>' +
                            '</div>' +
                         '</div>');
                 }
                for(var i=0;i<=res.education.length;i++) {
                    $('#education').html(
                        '<div class="row">' +
                            '<div class="col-offset-1 col-xs-12 col-sm-12 col-md-9">' +
                                '<h4>' + res.education[i].degree.name +'</h4>' +
                            '</div>' +
                        '<div class="col-xs-12 col-sm-12 col-md-3">' +
                            '<label class="label label-danger">'+res.education[i].year.name +' </label>'+
                            '||<label class="label label-primary">'+res.education[i].school.name+'</label>' +
                        '</div>');
                }
             });
         };


});

$(document).ready(function() {
  var readURL = function(input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();
      reader.onload = function (e) {
        $('.profile-pic').attr('src', e.target.result);
      }
      reader.readAsDataURL(input.files[0]);
    }
  }
  $(".file-upload").on('change', function(){
    readURL(this);
  });
  
  $(".upload-button").on('click', function() {
     $(".file-upload").click();
  });
});

$("#toggle_button").on("click", function() {
   $("#nav-main").toggleClass("toggled") 
});

$("#nav-main").find('.has-submenu').on("click", function(){
  $(this).parent().find(".sub-list-page").toggleClass("closed", 2000) ;
});
function IsEmail(email) {
    var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if(!regex.test(email)) {
      return false;
    }else{
      return true;
    }
  }

$(".subscribe").on("click", function () {
    var email = $("#email").val();

    if (IsEmail(email)) {
        $("strong").text(email);
        $(".main").css("visibility", "hidden");
        $(".error").css("visibility", "hidden");
        $(".thanks-message").css("visibility", "visible");
    } else {
        $(".error").css("visibility", "visible");
        $("#email").css("color", "red").css("background-color", "rgb(255, 0, 0, 0.2)");
    }
    
    var visibility = $(".thanks-message").css("visibility");
  console.log(visibility);
})

$(".dismiss").on("click", function () {
    $(".thanks-message").css("visibility", "hidden");
    $(".main").css("visibility", "visible");
})

var x = window.matchMedia("(max-width: 675px)")
console.log(x.matches)

if (x.matches == true) {
  $(".flex-container").css("height", "100%");
  $(".flex-container-item2").remove();
  $(".flex-container-item1").before("<img src='../assets/images/illustration-sign-up-mobile.svg' alt='mobile-image'>")
  if ($(".thanks-message").css("visibility") === "visible") {
    
  }
}
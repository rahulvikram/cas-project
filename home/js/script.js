// Load header and footer components
$(function(){
    $("#header").load("../global-func/header.html");
    $("#footer").load("../global-func/footer.html");
  });

// Random background image for homepage
var mainSect = document.getElementById('main-sect');
let imgChoices = ["../img/img3.jpg", "../img/img.jpg", "../img/img2.jpg"];
var bgImg = imgChoices[Math.floor(Math.random() * imgChoices.length)];
mainSect.style.backgroundImage = `linear-gradient(to bottom, rgba(0,0,0,0.58) 0%,rgba(0,0,0,0.66) 100%), url("${bgImg}")`;

// Toggles 'scrolled' class on header to change it's background color
$(function() {
  $(document).scroll(function() {
    var $nav = $(".header-bar");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});
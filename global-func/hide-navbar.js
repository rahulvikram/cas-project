var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar2").style.top = "50px";
  } else {
    document.getElementById("navbar2").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}
//--------------------------------------------------------------My jQuery tutorial - web-page-------------------------------------------------------//
// Function - tab Menu  - menu - Start.
function tabMenuBtn(evt, tabMenuLi) {
    var i, tabcontent, menuBtn;
    var footerAbsolute = document.getElementById('footerAbsolute');
    var StartJqueryTutotrial = document.getElementById('StartJqueryTutotrial');
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
        StartJqueryTutotrial.style.display = "none";
        footerAbsolute.style.position = "relative";
    }
    menuBtn = document.getElementsByClassName("menuBtn");
    for (i = 0; i < menuBtn.length; i++) {
        menuBtn[i].className = menuBtn[i].className.replace(" active", "");
    }
    document.getElementById(tabMenuLi).style.display = "block";
    evt.currentTarget.className += " active";
}
// Function - tab Menu  - menu - End.
//--------------------------------------------------------------------------------------------------------------------------------------------------//

//--------------------------------------------------------------------------------------------------------------------------------------------------//
// Scroll Back To Top Button code - Start.
var mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
// Scroll Back To Top Button code - End.
//--------------------------------------------------------------------------------------------------------------------------------------------------//

//--------------------------------------------------------------------------------------------------------------------------------------------------//
// Function - finish tutorial - Start.
function myFunf() {
    alert("well done!")
}
// Function - finish tutorial - End.
//-------------------------------------------------------------------------End----------------------------------------------------------------------//



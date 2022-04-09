
var hText = new Array(
    "Programmer.",
    "Graphic Artist.",
    "Aspiring Animator."
    );
var iSpeed = 100;
var iIndex = 0; 
var iArrLength = hText[0].length; 
var iScrollAt = 50; 
     
var iTextPos = 0; 
var sContents = ''; 
var iRow; 
     
function typewriter() {
     sContents =  ' ';
     iRow = Math.max(0, iIndex-iScrollAt);
     var destination = document.getElementById("home");

     while ( iRow < iIndex ) {
      sContents += hText[iRow++] + '<br />';
     }
     destination.innerHTML = sContents + hText[iIndex].substring(0, iTextPos) + "_";
     if ( iTextPos++ == iArrLength ) {
      iTextPos = 0;
      iIndex++;
      if ( iIndex != hText.length ) {
       iArrLength = hText[iIndex].length;
       setTimeout("typewriter()", 400);
      }
     } else {
      setTimeout("typewriter()", iSpeed);
     }

     if (iIndex == hText.length) {
         showAbout();
     }

}

typewriter();

function showAbout() { 
    var aboutContent = document.getElementById("about");
    var display = getComputedStyle(aboutContent).display;

    if (display == "none") {
        aboutContent.style.display = "inline";
        window.scroll({
            top: 600,
            behavior: 'smooth'
        })
    } else {
        aboutContent.style.display = "none";
    }

}
showAbout();

    // Works cited:
    // "Typewriter Effect". Geoff, Graham. Web. https://css-tricks.com/snippets/css/typewriter-effect/
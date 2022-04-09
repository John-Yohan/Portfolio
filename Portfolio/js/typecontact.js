
var hText = new Array(
    "Contact."
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
     var destination = document.getElementById("contact-heading");
     var work = document.getElementById("col-2");
     
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
         more.style.display = "inline";
         window.scroll({
             top: 50,
             behavior: 'smooth'
         })
     }
}

typewriter();

    // Works cited:
    // "Typewriter Effect". Geoff, Graham. Web. https://css-tricks.com/snippets/css/typewriter-effect/
// To use this effect set your Text container to an id = "type-text" From MD//
// Ensure that the text container is empty//
var typeText = document.getElementById("type-text");
var textToType = "Input the text you want to take the effect here";
var typingLine = "|";
var i = 0;
typeText.innerHTML = "";

function typeWriter() {
  if (i < textToType.length) {
    // typeText.innerHTML += textToType.charAt(i); //
    typeText.innerHTML = textToType.substring(0, i + 1) + typingLine;
    i++;
    setTimeout(typeWriter, 100);
  } else {
    setTimeout(function () {
      i = 0;
      typeWriter();
    }, 3000);
  }
}
typeWriter();

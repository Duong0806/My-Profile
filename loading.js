var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 7300);
}

function showPage() {
  document.getElementById("myDiv").style.display = "block";
}

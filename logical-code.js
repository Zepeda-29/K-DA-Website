function dropdownMenu () {
  var ulElement = document.getElementById("dropdownClick");
  if(ulElement.className === "topnav")
    ulElement.className += " responsive";
  else
    ulElement.className = "topnav";
}
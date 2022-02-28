function printi() {
  document.getElementById('topnav').style.position = "relative"
  window.print()
  document.getElementById('topnav').style.position = "fixed"
  window.alert("I don't care if you wanted to save it as a pdf, why would you want to print a page???")
}

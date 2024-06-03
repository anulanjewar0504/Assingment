function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }

  const openForm = document.getElementById("openForm");
  const formPopup = document.getElementById("frm");
  const closeForm = document.querySelector(".close-form");

  openForm.addEventListener("click", function (e) {
    e.preventDefault(); // Prevent default link behavior
    formPopup.classList.add("show"); // Add "show" class to display form
  });

  closeForm.addEventListener("click", function (e) {
    e.preventDefault();
    formPopup.classList.remove("show"); // Remove "show" class to hide form
  });
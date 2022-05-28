$(document).ready(function() {
  $(document).on("click", "#toggleDarkMode", function(event) {
    event.preventDefault();
    event.stopPropagation(); 

    const htmlPage = document.getElementsByTagName("html")[0];
    htmlPage.classList.toggle("dark");
  });

});
document.addEventListener("DOMContentLoaded", function() {
    var dropdownItems = document.querySelectorAll(".dropdown");
  
    dropdownItems.forEach(function(item) {
      item.addEventListener("click", function() {
        var dropdownMenu = this.querySelector(".dropdown-menu");
        dropdownMenu.classList.toggle("collapsed");
      });
    });
  
    document.addEventListener("click", function(e) {
      var target = e.target;
      dropdownItems.forEach(function(item) {
        if (!item.contains(target)) {
          item.querySelector(".dropdown-menu").classList.add("collapsed");
        }
      });
    });
  });
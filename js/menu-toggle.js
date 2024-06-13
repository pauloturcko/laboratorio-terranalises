document.addEventListener("DOMContentLoaded", function() {
    var servicosBtn = document.getElementById("servicosBtn");
    
    servicosBtn.addEventListener("click", function() {
        servicosBtn.classList.add("active");
    });
  
    document.addEventListener("click", function(event) {
        var targetElement = event.target;
        if (!servicosBtn.contains(targetElement)) {
            servicosBtn.classList.remove("active");
        }
    });
  });
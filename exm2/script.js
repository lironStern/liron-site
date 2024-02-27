const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".left");

menu.addEventListener("click", function () {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");

});

function clickOnLink(id){
  
  const elements = document.getElementsByClassName("link-el");
  menuLinks.classList.remove("active")
  menu.classList.remove("is-active");

  for(var j=0 ;j<elements.length; j++){
          if(elements[j].classList.contains("active")) {
            elements[j].classList.remove("active")
            const displayDiv = elements[j].id.substring(5)
            $("." + displayDiv).removeClass("active-div")
            $("." + displayDiv).addClass("not-active-div")
            
            
            // removeDiv.style.display = "none"
          }  
      }
      
      $("#" + id).addClass("active")
      displayDiv = id.substring(5)
      $("." + displayDiv).removeClass("not-active-div")
      $("." + displayDiv).addClass("active-div")
      
}


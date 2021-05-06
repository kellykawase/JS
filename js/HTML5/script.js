let image = document.getElementById("like");

image.addEventListener("click", function(){
   // image.src = "vermelho.png"

   let lastImage = image.getAttribute("src");
   image.setAttribute("src","vermelho.png")

   console.log(lastImage);
})
console.log('%c HI', 'color: firebrick')
document.addEventListener("DOMContentLoaded", DogCEOFetch)
function DogCEOFetch(){
  fetch("https://dog.ceo/api/breeds/image/random/4")
  .then(response => response.json())
  .then((json) => {
    const dogContainer = document.getElementById("dog-image-container");
    const dogsAry = json.message;
    for (const dog of dogsAry){
      const img = document.createElement("img");
      img.setAttribute("src", dog);
      img.setAttribute("width", 200);
      img.setAttribute("height", 200);
      dogContainer.appendChild(img);
    }
  })
}

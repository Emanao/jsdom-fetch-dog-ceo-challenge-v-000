console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = 'https://dog.ceo/api/breeds/list/all';

document.addEventListener("DOMContentLoaded", DogCEOPicsFetch);
document.addEventListener("DOMContentLoaded", DogCEOBreedsFetch);

function DogCEOPicsFetch(){
  fetch(imgUrl)
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
  });
}

function DogCEOBreedsFetch(){
  fetch(breedUrl)
  .then(response => response.json())
  .then((json) => {
    console.log(json);
     const breedsContainer = document.getElementById("dog-breeds");
     const typesAry = json.message;
     console.log(typesAry);
     for (const type in typesAry){
       const breedsAry= typesAry[type];
       if (Array.isArray(breedsAry)){
         for (const breed of breedsAry){
           const li = document.createElement("li");
           li.innerText = breed;
           li.addEventListener("click", changeFontColor);
           breedsContainer.appendChild(li);
         }
       }
    }
  })
}
function changeFontColor(event){
  event.currentTarget.style.color = "red";
}

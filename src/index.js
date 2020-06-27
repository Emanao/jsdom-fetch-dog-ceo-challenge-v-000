console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = 'https://dog.ceo/api/breeds/list/all';
let breeds = [];

document.addEventListener("DOMContentLoaded", DogCEOPicFetch);
document.addEventListener("DOMContentLoaded", DogCEOBreedFetch);
document.addEventListener("DOMContentLoaded", () => document.getElementById("breed-dropdown").addEventListener("change", sortBreedsBy));

function getDogContainer(){
  const dogContainer = document.getElementById("dog-image-container");
  return dogContainer;
}

function DogCEOPicFetch(){
  fetch(imgUrl)
  .then(response => response.json())
  .then((json) => {
    const dogsAry = json.message;
    for (const dog of dogsAry){
      addDogToDogContainer(dog);
    }
  });
}

function addDogToDogContainer(dog){
  const img = document.createElement("img");
  img.setAttribute("src", dog);
  img.setAttribute("width", 200);
  img.setAttribute("height", 200);
  getDogContainer().appendChild(img);
}

function getBreedContainer(){
  const breedContainer= document.getElementById("dog-breeds");
  return  breedContainer;
}

function DogCEOBreedFetch(){
  fetch(breedUrl)
  .then(response => response.json())
  .then((json) => {
     const jsonDogTypesAry = json.message;
     breeds = [];
     addToBreedContainer(jsonDogTypesAry);
  });
}

function addToBreedContainer(jsonDogTypesAry){
  for (const type in jsonDogTypesAry){
    const jsonDogBreedsAry= jsonDogTypesAry[type];
    if (Array.isArray(jsonDogBreedsAry)){
      for (const breed of jsonDogBreedsAry){
        addBreedToBreedContainer(breed);
        breeds.push(breed);
      }
    }
  }
}

function addBreedToBreedContainer(breed){
  const li = document.createElement("li");
  li.innerText = breed;
  li.addEventListener("click", changeFontColor, false);
  getBreedContainer().appendChild(li);
}

function updateBreedContainer(updatedBreeds){
  resetBreedContainer();
  for (const breed of updatedBreeds){
    addBreedToBreedContainer(breed);
  }
}

function resetBreedContainer(){
  getBreedContainer().textContent ="";
}


function sortBreedsBy(event){
  const selectedOption = event.currentTarget.value;
  const sortedBreeds = breeds.filter((breed)=>breed.startsWith(selectedOption));
  updateBreedContainer(sortedBreeds);
}

function changeFontColor(event){
  event.currentTarget.style.color = "red";
}

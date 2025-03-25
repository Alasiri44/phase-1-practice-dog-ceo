console.log('%c HI', 'color: firebrick')
let imageContainer = document.getElementById('dog-image-container');

function loadingImages(){
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(res => res.json())
    .then(data => {
        data.message.forEach(element => {
            let imageContainer = document.getElementById('dog-image-container');
            let createdImage = document.createElement('img');
            createdImage.src = element;
            imageContainer.appendChild(createdImage)
            
        });
        
    })
}
const breeds = [];
function loadingDogBreeds(){
    fetch("https://dog.ceo/api/breeds/list/all")
    .then(res => res.json())
    .then(data => {
        console.log(data);
        
        for(let element in data.message){
            let dogBreedsContainer = document.getElementById('dog-breeds');
            let createdBreeds = document.createElement('li');
            breeds.push(element);
            createdBreeds.textContent = element;
            dogBreedsContainer.appendChild(createdBreeds)

            // adding event listener on the list
            createdBreeds.addEventListener('click', function(){
                createdBreeds.style.color = 'green';
            })           
            
    }
    })
}

function filteringDogBreeds(){
    let breedDropdown = document.getElementById('breed-dropdown');
    breedDropdown.addEventListener('change', function(){
        const letter = this.value.toLowerCase();
        const filteredBreeds = letter? breeds.filter(breed => breed.toLowerCase().startsWith(letter)) : breeds;
        console.log(filteredBreeds);

        let dogBreedsContainer = document.getElementById('dog-breeds');
        dogBreedsContainer.textContent ='';
        for(let element of filteredBreeds){
            let dogBreedsContainer = document.getElementById('dog-breeds');
            let createdBreeds = document.createElement('li');
           
            createdBreeds.innerHTML = element;
            dogBreedsContainer.appendChild(createdBreeds)

            // adding event listener on the list
            createdBreeds.addEventListener('click', function(){
                createdBreeds.style.color = 'green';
            })
        }
    })
    
}


function main(){
    loadingImages();
    loadingDogBreeds();
    filteringDogBreeds();
}

document.addEventListener('DOMContentLoaded', function(){
    main();
})
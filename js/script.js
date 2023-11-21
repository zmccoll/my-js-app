let pokemonRepository = (function(){
    //Pokemon List
    let pokedex = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
    
    //function that will be used to display info when a pokemon is clicked on
    function showModal (pokemon) {
       let modalTitle = document.querySelector('.modal-title');
       let modalBody = document.querySelector('.modal-body');
       let modalHeader = document.querySelector('.modal-header');

       //clear existing content of modal
       modalTitle.innerHTML = '';
       modalBody.innerHTML = '';
       modalHeader.innerHTML = '';

       

       //creating elements for name in modal content
        //adding name to title
       let nameElement = document.createElement('h1');
       nameElement.innerText = pokemon.name;
        //adding image
       let imageElement = document.createElement('img');
       imageElement.src = pokemon.imageUrl;
        //adding height
       let heightElement = document.createElement('p');
       heightElement.innerText = 'Pokemon Height: ' + pokemon.height;
        //adding weight
       let weightElement = document.createElement('p');
       weightElement = 'Pokemon Weight: ' + pokemon.weight;

       let typeElement = document.createElement('p');
       typeElement.innerText = 'Type(s): ' + JSON.stringify(pokemon.types);

       modalTitle.appendChild(nameElement);
       modalBody.appendChild(imageElement);
       modalBody.appendChild(heightElement);
       modalBody.appendChild(weightElement);
       modalBody.appendChild(typeElement);
       modalHeader.appendChild(modalTitle);

    };
    /*
    function hideModal () {
        let modalContainer = document.querySelector('.modal-container');
            modalContainer.classList.remove('is-visible');
    }
    window.addEventListener('keydown', (e) => {
        let modalContainer = document.querySelector('.modal-container')
        if (e.key === 'escape' && modalContainer.classList.contains('is-visible')) {
            hideModal();
        }
    });
    */
    //code used to display list of pokemon on screen, displays them as a buttons which can be clicked
    function addListItem(pokemon) {
        let pokemonList = document.querySelector('.pokemon-list');
        let listItem= document.createElement('li');//list items being created
        listItem.classList.add('list-group-item');
        let button = document.createElement('button');//button being created
        button.innerText = pokemon.name;//button text will now display the pokemon name
        button.addEventListener('click', function(event) {
            showDetails(pokemon);
        });
        button.classList.add('button-class');//attached the css stylings to button
        button.classList.add('btn');
        button.classList.add('btn-secondary');
        button.classList.add('col-3');
        listItem.classList.add('list-group-item');
        //listItem.classList.add('col-');
        listItem.appendChild(button);//attached button to the list item
        pokemonList.appendChild(listItem);//attached list items to ul in index.htmlad
    };

    //functions used to fetch data from url above
    function loadList() {
        return fetch(apiUrl).then(function(response) {
            return response.json();
        }).then(function(json) {
            json.results.forEach(function (item) {
                let pokemon = {
                    name: item.name,
                    detailsUrl: item.url,
                    imageUrl: item.myImage,
                };
                add(pokemon);
            });
        }).catch(function (e) {
            console.error(e);
        })
    }

    function loadDetails(item) {
        let url = item.detailsUrl;
        return fetch(url).then(function (response) {
            return response.json();
        }).then(function (details) {
            item.imageUrl = details.sprites.front_default;
            item.height = details.height;
            item.types = details.types;
            item.weight = details.weight;
            
            showModal(item);
        }).catch(function (e) {
            console.error(e);
        });
    }
    

    function getAll () {
       return pokedex;
    };

    function add (pokemon) {
        pokedex.push(pokemon);
    };

    function showDetails(pokemon) {
        loadDetails(pokemon).then(function (data) {
            console.log(data.name);
            showModal(data);
        })
    };


    return {
        getAll : getAll,
        add : add,
        addListItem: addListItem,
        loadList: loadList,
        loadDetails: loadDetails,
        showModal: showModal
};
})();

pokemonRepository.loadList().then(function() {
    //data is now loaded!
    pokemonRepository.getAll().forEach(function(pokedex) {
        pokemonRepository.addListItem(pokedex);
    }); 
});
    


/*
//loop to display all of the pokemon information
for (i = 0; i < pokemonList.length; i++) {
    document.write('<p>', pokemonList[i].name + "(height: " + pokemonList[i].height + ")", '</p>');
    //condition saying if a pokemon is big or not
    if (pokemonList[i].height >= 0.6) {
        document.write(" - That's a decent sized Pokemon")
    }
}*/

//forEach()
/*pokemonRepository.getAll().forEach(function(pokedex) {
    //info display
    document.write("<p>", pokedex.name + " (height: " + pokedex.height + ")", "</p>");
    //condition commenting whether pokemon is big or not
    if (pokedex.height >= 0.6) {
        document.write(" - That's a decent sized Pokemon!");
    let pokemonList = document.querySelector('pokemon-list')
    }
}); 
*/
/* old way of getting modal
let modalContainer = document.querySelector('#modal-container');

//clearing existing html
modalContainer.innerHTML = '';

let modal = document.createElement('div');
modal.classList.add('modal');

//add new modal content
let closeButtonElement = document.createElement('button')
closeButtonElement.innerText = 'x';
closeButtonElement.classList.add('modal-close');
closeButtonElement.addEventListener('click', hideModal);

let titleElement = document.createElement('h1')
titleElement.innerText = pokemon.name;

//pokemon info
let height = document.createElement('p');
height.innerText = "Pokemon Height: " + pokemon.height;
let weight = document.createElement('p');
weight.innerText = 'Pokemon Weight: ' + pokemon.weight;
let type = document.createElement('p');
type.innerText = "Pokemon Type: " + pokemon.types;



//adding image to modal
let myImage = document.createElement('img');
myImage.src = pokemon.imageUrl;
myImage.classList.add('img');

modal.appendChild(closeButtonElement);
modal.appendChild(titleElement);
modal.appendChild(height);
modal.appendChild(weight);
modal.appendChild(type);
modal.appendChild(myImage);
modalContainer.appendChild(modal);
modalContainer.classList.add('is-visible');
*/
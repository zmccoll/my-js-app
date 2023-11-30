let pokemonRepository = (function(){
    //Pokemon List
    let pokedex = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
    
    //function that will be used to display info when a pokemon is clicked on
    function showModal(pokemon) {
       let modalContainer = document.querySelector('#modal-container');

        //clearing existing html
        modalContainer.innerHTML = '';

        let modal = document.createElement('div');
        modal.classList.add('modal-personal');

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
        const typeNames = pokemon.types.map(function(pokemon) {
            return pokemon.type.name;
        });

        type.innerText = 'Type(s): ' + typeNames.join(', ');

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

        //so when user clicks outside of modal it closes
        modalContainer.addEventListener('click', (e) => {
            let target = e.target;
            if (target === modalContainer) {
            hideModal();
            }
        });

    };
    
    
    function hideModal () {
        let modalContainer = document.querySelector('#modal-container');
            modalContainer.classList.remove('is-visible');
    }
    
    window.addEventListener('keydown', (e) => {
        let modalContainer = document.querySelector('#modal-container');
        if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
            hideModal();
        }
    });

 
    //code used to display list of pokemon on screen, displays them as a buttons which can be clicked
    function addListItem(pokemon) {
        let pokemonList = document.querySelector('.pokemon-list');
        let listItem= document.createElement('li');//list items being created
        //listItem.classList.add('list-group-item');
        let button = document.createElement('button');//button being created
        button.innerText = pokemon.name;//button text will now display the pokemon name
        button.addEventListener('click', function(event) {
            showDetails(pokemon);
        });
       /*
        button.classList.add('button-class');//attached the css stylings to button
        button.classList.add('btn');
        button.classList.add('btn-secondary');
        button.classList.add('col-3');
        listItem.classList.add('list-group-item');
        //listItem.classList.add('col-');
        */
        //button.classList.add('col-3');
        //listItem.classList.add('list-group-item');
        button.classList.add('col-8');
        listItem.classList.add('col-4');
        listItem.classList.add('list-group-item');
        button.classList.add('button-class');//attached the css stylings to button
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
        loadDetails(pokemon).then(function () {
            showModal(pokemon);
        })
    };


    return {
        getAll : getAll,
        add : add,
        addListItem: addListItem,
        loadList: loadList,
        loadDetails: loadDetails,
        showDetails: showDetails,
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

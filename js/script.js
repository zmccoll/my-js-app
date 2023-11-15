let pokemonRepository = (function(){
    //Pokemon List
    let pokedex = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
    
    //function that will be used to display info when a pokemon is clicked on
    function showModal (pokemon) {
        let modalContainer = document.querySelector('#modal-container');
        modalContainer.addEventListener('click', function() {
            modalContainer.classList.add('is-visible');
        })
        

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

        let content = document.createElement('p')
        content.innerText = "Pokemon Height: " + pokemon.height;

        modal.appendChild(closeButtonElement);
        modal.appendChild(titleElement);
        modal.appendChild(content);
        modalContainer.appendChild(modal);
    }

    function hideModal () {
        modal.classList.remove('modal');
    }
    

    //code used to display list of pokemon on screen, displays them as a buttons which can be clicked
    function addListItem(pokemon) {
        let pokemonList = document.querySelector('.pokemon-list');
        let listItem= document.createElement('li');//list items being created
        let button = document.createElement('button');//button being created
        button.innerText = pokemon.name;//button text will now display the pokemon name
        button.addEventListener('click', function(event) {
            showDetails(pokemon);
        });
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
                    detailsUrl: item.url
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
        });
    }
        
        /*    //this is where we add details to the item
            item.imageUrl = details.sprites.front_default;
            item.height = details.height;
            item.types = details.types;
        }).catch(function (e) {
            console.error(e);
        });
    }*/

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


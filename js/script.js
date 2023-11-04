let pokemonRepository = (function(){
    //Pokemon List
    let pokedex = [
    {name: 'Pikachu', height: 0.5, types: 'electric'},
    {name: 'Oddish', height: 0.5, types: ['grass', 'poison']},
    {name: 'Koffing', height: 0.6, types: 'poison'},
    ];
    
    function getAll () {
       return pokedex;
    };

    function add (pokemon) {
        pokedex.push(pokemon);
    };

    function addListItem(pokemon) {
        let pokemonList = document.querySelector('.pokemon-list');
        let listItem= document.createElement('li');
        let button = document.createElement('butotn');
        button.innerText = pokemon.name;
        button.classList.add('button-class');
        listItem.appendChild(button);
        pokemonList.appendChild(listItem);
    }

    return {
        getAll : getAll,
        add : add,
        addListItem: addListItem
};
})();
console.log(pokemonRepository.getAll());
    


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
pokemonRepository.getAll().forEach(function(pokedex) {
    pokemonRepository.addListItem(pokedex);
}); 

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

/*test function
function divide(dividend, divisor) {
    if(divisor === 0) {
        return "you're trying to divide by 0";
    }
    else {
        let result = dividend / divisor;
        return result;
    }
}
console.log(divide(4,2));
console.log(divide(7,0));
console.log(divide(1,4));
console.log(divide(12,-3));

*/
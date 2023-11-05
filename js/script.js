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

    function showDetails(pokemon) {
        console.log(pokemon.name);
    };

    //code used to display list of pokemon on screen, displays them as a buttons which can be clicked
    function addListItem(pokemon) {
        let pokemonList = document.querySelector('.pokemon-list');
        let listItem= document.createElement('li');//list items being created
        let button = document.createElement('button');//button being created
        button.innerText = pokemon.name;//button text will now display the pokemon name
        button.addEventListener('click', showDetails(pokemon));
        button.classList.add('button-class');//attached the css stylings to button
        listItem.appendChild(button);//attached button to the list item
        pokemonList.appendChild(listItem);//attached list items to ul in index.html
    };

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
let pokemonRepository = (function(){
    //Pokemon List
    let pokemonList = [
    {name: 'Pikachu', height: 0.5, types: 'electric'},
    {name: 'Oddish', height: 0.5, types: ['grass', 'poison']},
    {name: 'Koffing', height: 0.6, types: 'poison'},
    ];
    
    function getAll () {
       return pokemonList;
    };

    function add () {
        pokemonList.push(Pokemon);
    }
    return {
        getAll : getAll,
        add : add
}
})();
 

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
pokemonRepository.getAll().forEach(function(pokemonList) {
    document.write("<p>", pokemonList.name + "(height: " + pokemonList.height + ")", "</p>");
    //condition commenting whether pokemon is big or not
    if (pokemonList.height >= 0.6) {
        document.write(" - That's a decent sized Pokemon!");
    }
}); 

//test function
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

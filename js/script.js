//Pokemon List
let pokemonList = [
    {name: 'Pikachu', height: 0.5, types: 'electric'},
    {name: 'Oddish', height: 0.5, types: ['grass', 'poison']},
    {name: 'Koffing', height: 0.6, types: 'poison'},
];
//loop to display all of the pokemon information
for (i = 0; i < pokemonList.length; i++) {
    document.write('<p>', pokemonList[i].name + "(height: " + pokemonList[i].height + ")", '</p>');
}
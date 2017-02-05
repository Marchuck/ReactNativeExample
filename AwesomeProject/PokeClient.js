//Poke API
const pokedex = 'http://pokeapi.co/api/v2/pokedex/1/';
export default fetchData = (owner, _dataSource) => {
    fetch(pokedex)
        .then((response) => response.json())
        .then((responseJson) => {
        var pokemons = responseJson.pokemon_entries;
        var arrayOfPokeNames = ['Wow', 'so much pokemons'];
        if (typeof pokemons[0] === 'undefined') {
            return ['bulbasaur'];
        }
        else if (typeof pokemons[1] === 'undefined') {
            return ['raichu'];
        }
        else {
            for (poke of pokemons) {
                if (poke === null || poke.pokemon_species === null || poke.pokemon_species.name === null) {
                    arrayOfPokeNames.push('x');
                }
                else {
                    arrayOfPokeNames.push(poke.pokemon_species.name);
                }
            }
            return arrayOfPokeNames;
        }
    }).then((arrayOfPokeNames) => {
        owner.setState({
            dataSource: _dataSource.cloneWithRows(arrayOfPokeNames)
        });
        return 'xD';
    }).catch((error) => {
        owner.setState({
            dataSource: _dataSource.cloneWithRows(['Ooops!', 'No internet!'])
        });
    });
};
//Poke API

const poke_endpoint = 'http://pokeapi.co/api/';
const pokedex = poke_endpoint+'v2/pokedex/1/';

export default fetchData = (owner, _dataSource) => {
    fetch(pokedex)
        .then((response) => response.json())
        .then((responseJson) => {
        var pokemons = responseJson.pokemon_entries;
       
        var arrayOfPokeNames = [{name:'Wow',id: -1}, {name: 'so much pokemons', id: -1}];
        if (typeof pokemons[0] === 'undefined') {
            return [{name:'Wow',id: -1}];
        }
        else if (typeof pokemons[1] === 'undefined') {
            return [{name:'Wow',id: -1}];
        }
        else {
            var _id = 1;
            for (poke of pokemons) {
                if (poke === null || poke.pokemon_species === null || poke.pokemon_species.name === null) {
                    arrayOfPokeNames.push({name: 'x', id: -1});
                }
                else {
                    arrayOfPokeNames.push({name: poke.pokemon_species.name, id: _id});
                     _id = _id + 1;
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
            dataSource: _dataSource.cloneWithRows([{name: 'Ooops!', id: -1}, {name: 'No internet!', id: -1}])
        });
    });
};
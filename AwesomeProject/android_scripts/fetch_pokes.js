
const pokedex = 'http://pokeapi.co/api/v2/pokedex/1/';

const fetch_pokes = (owner, _dataSource) => {

    
    fetch(pokedex).then((response) => response.json()).then((responseJson) => {
            var pokemons = responseJson.pokemon_entries;
            var arrayOfPokeNames = ['Wow','','so much pokemons', ''];
            if (typeof pokemons[0] === 'undefined') {
                return ['bulbasaur'];
            }
            else if (typeof pokemons[1] === 'undefined') {
                return ['raichu'];
            }
            else {
                for (poke of pokemons) {
                    arrayOfPokeNames.push(poke.pokemon_species.name);
                }
                return arrayOfPokeNames;
            }
        }).then((arrayOfPokeNames) => {
            owner.setState({
                dataSource: _dataSource.cloneWithRows(arrayOfPokeNames)
            });
            return undefined;
        }).catch((error) => {
            console.error(error);
            owner.setState({
                dataSource: _dataSource.cloneWithRows(['Ooops!', 'No content!'])
            });
            console.error(error);
        });
    };
export default fetch_pokes;
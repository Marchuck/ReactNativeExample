//Poke API

const poke_endpoint = 'http://pokeapi.co/api/';

export default fetchDescription = (owner, pokemonId) => {
    fetch(poke_endpoint + 'v1/description/' + pokemonId + '/')
    .then( (response) => response.json() )
    .then( (responseJson) => {
        var _description = responseJson.description 
         owner.setState({
            description: _description
        });
        return _description;
    }).catch((error) =>{
        owner.setState({
            description: 'This pokemon is very mysterious! '
        });
    });
};
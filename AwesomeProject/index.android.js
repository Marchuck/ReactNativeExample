import React, {
    Component
}
from 'react';
import {
    AppRegistry, ListView, Text, View, StyleSheet, Image
}
from 'react-native';
const pikachu   = 'http://img.pokemondb.net/sprites/heartgold-soulsilver/normal/pikachu.png';
const urlPrefix = 'http://img.pokemondb.net/sprites/heartgold-soulsilver/';
const frontPrefix = urlPrefix + 'normal/';
const backPrefix = urlPrefix + 'back-normal/';
const suffix = '.png';
const pokedex = 'http://pokeapi.co/api/v2/pokedex/1/';

 const styles = StyleSheet.create({
        
        container: {
            flex: 1
            , padding: 12
        , }
        , viewContainer: {
            flexDirection: 'row'
            , flexWrap: 'wrap'
            , alignItems: 'flex-start'
            , flex: 1
        }
        , text: {
            marginLeft: 16
            , fontSize: 21
            , padding: 8
        , }
        , photo: {
            height: 80
            , width: 80
        , }
    , });

//business logic
fetchData = (owner, _dataSource) => {
    fetch(pokedex).then((response) => response.json()).then((responseJson) => {
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
class AwesomeProject extends Component {
    constructor(props) {
        super(props);
        const _dataSource = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.state = {
            dataSource: _dataSource.cloneWithRows(['Downloading  data...'])
        };
        fetchData(this, _dataSource);
    }
    render() {
        return ( < ListView style = {
                    styles.container
                }
                dataSource = {
                    this.state.dataSource
                }
                renderRow = {
                    (data) => <View style={{flex: 1, flexDirection: 'row'}}><Text style = {
                        styles.text
                    }>{data}</Text>
            <Image style = {
                        styles.photo
                    }
                    source = {
                        {
                            uri: backPrefix + data + '.png'
                        }
                    }
                    /><Image style = {
                        styles.photo
                    }
                    source = {
                        {
                            uri: frontPrefix + data + '.png'
                        }
                    }
                    />< /View >
                }
                / > );
            }
            
    }
    
   
    // App registration and rendering
    AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);

import React, {
    Component
}
from 'react';
import {
    AppRegistry, ListView, Text, View, StyleSheet, Image
}
from 'react-native';

import PokeRow from './PokeRow';

//business logic module
import fetchData from './PokeClient';

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



class Poke_ extends Component {
  render() {
    return (
      <View style={{flex: 1, flexDirection: 'row'}}>
            <Text style = { styles.text}>{this.props._data}</Text>
            <PokeImage url=  {backPrefix + this.props._data + '.png'} />
            <PokeImage url=  {frontPrefix + this.props._data + '.png'} />
        < /View >
    );
  }
}

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
                    (data) =>  <PokeRow _data={data} />
                }
                / > );
            }
            
    }
    
   
    AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
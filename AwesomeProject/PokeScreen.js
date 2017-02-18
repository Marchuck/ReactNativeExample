import React, {Component} from 'react';
import {
      Text, View, StyleSheet,TouchableWithoutFeedback
}
from 'react-native';

import SinglePokeImage from './SinglePokeImage';

const styles = StyleSheet.create({
         text: {
            marginLeft: 16
            , fontSize: 21
            , padding: 8
        , }
    , });

const urlPrefix = 'http://img.pokemondb.net/sprites/heartgold-soulsilver/';
const frontPrefix = urlPrefix + 'normal/';
const backPrefix = urlPrefix + 'back-normal/';
const prefix = 'http://img.pokemondb.net/artwork/';

export default class PokeScreen extends React.Component {
    
    render() { 
        
      return ( 
        <TouchableWithoutFeedback onPress={() => this.props.onMoveBack() } >
        <View style={{flex: 1, flexDirection: 'column'}} >
            <Text style = { styles.text}>{this.props.pokemonName.name}</Text>
            <SinglePokeImage pokeId={this.props.pokemonName.id}   url=  {prefix + this.props.pokemonName.name + '.jpg'} />
        < /View >
        </TouchableWithoutFeedback>
       );
    }
}
 
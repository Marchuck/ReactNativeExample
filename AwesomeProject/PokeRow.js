import React, {Component} from 'react';
import {
      Text, View, StyleSheet,TouchableWithoutFeedback,ToastAndroid
}
from 'react-native';

import PokeImage from './PokeImage';

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

export default class PokeRow extends React.Component {
  
    render() { 
    
      return (
      <TouchableWithoutFeedback onPress={() => {  this.props.onPokeClick(this.props.pok)  } } >
        <View style={{flex: 1, flexDirection: 'row'}} >
            <Text style = { styles.text}>{this.props.pok.name}</Text>
            <PokeImage url=  {backPrefix + this.props.pok.name + '.png'} />
            <PokeImage url=  {frontPrefix + this.props.pok.name + '.png'} />
        < /View >
       </TouchableWithoutFeedback>
    );
  }
}
 
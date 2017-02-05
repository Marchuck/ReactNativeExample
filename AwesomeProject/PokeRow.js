//PokeRow

import React, {
    Component
}
from 'react';
import {
      Text, View, StyleSheet 
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


class Poke extends Component {
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
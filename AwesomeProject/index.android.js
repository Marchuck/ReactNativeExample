/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image
} from 'react-native';

export default class AwesomeProject extends Component {
  render() {
    return (
            <ScrollView style={styles.container}>
            <Text style={styles.goalName}>HELLO REACT NATIVE!!!</Text>
            <View style={styles.viewContainer}>
             <Image
            style={{width: 300, height: 300}}
            source={{uri: 'http://img.pokemondb.net/artwork/weezing.jpg'}} />
            </View>
            </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
                                    container: {
                                    backgroundColor: 'transparent',
                                    paddingLeft:20,
                                    paddingRight:20
                                    },
                                    viewContainer:{
                                    flexDirection:'row',
                                    flexWrap: 'wrap',
                                    alignItems: 'flex-start',
                                    flex: 1
                                    },
                                    iconText:{
                                    paddingLeft:15,
                                    paddingRight:15,
                                    paddingTop:15,
                                    paddingBottom:15
                                    },
                                    goalName:{
                                    textAlign:'center',
                                    marginTop:40,
                                    marginBottom:10,
                                    fontSize:20
                                    }
                                    });

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);

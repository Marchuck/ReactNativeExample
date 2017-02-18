
import React, {  Component}from 'react';
import {  AppRegistry, ListView,  StyleSheet ,ToastAndroid
       }from 'react-native';


import PokeListView from './PokeListView';

import fetchData from './PokeClient';
import PokeScreen from './PokeScreen';



const styles = StyleSheet.create({
        
        container: {
            flex: 1
            , padding: 12
        , }
        
    , });

 class AwesomeProject extends React.Component {
    
    constructor(props) {
        super(props);
        const _dataSource = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        
        this.state = {
            dataSource: _dataSource.cloneWithRows([{name:'Downloading  data...', id:-1}]),
            chosenPokemon: 'undefined'
        };
        fetchData(this, _dataSource);
    }
     
    onPokeClick  = (poke) => {
        ToastAndroid.show('A '+poke.name+' appeared nearby !', ToastAndroid.SHORT);
        this.setState({ chosenPokemon : poke });
    }
    
    onMoveBack = () => {
        this.setState({ chosenPokemon : 'undefined' });
    }
    
    render() { 
        if(this.state.chosenPokemon != 'undefined'){
            return (<PokeScreen pokemonName={this.state.chosenPokemon} onMoveBack = {this.onMoveBack}/> );
        }else{
            return (<PokeListView sourceForList={this.state.dataSource} onPokeClick={this.onPokeClick } /> );           
        }  
    }          
}

             
AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
import React, {
    Component
}
from 'react';
import {
    StyleSheet,View, Image,Text
}
from 'react-native';
import fetchDescription from './PokeDescription';

const styles = StyleSheet.create({
    photo: {
        height: 300
        , width: 300
    , },
    text: {
            marginLeft: 16
            , fontSize: 21
            , padding: 8
        , }
, });

export default class SinglePokeImage extends React.Component {
    
     constructor(props) {
        super(props);
        
        
       fetchDescription(this, this.props.pokeId);
        this.state = {
            description: '...'
        };
    }
    
    render() {
        
        return (
            <View style={{flex: 1, flexDirection: 'column'}} >
            <Image style = {
                styles.photo
            }
            source = {
                {
                    uri: this.props.url
                }
            } />
            <Text style = { styles.text}>{this.state.description}</Text>
            </View>
             );
    }
};
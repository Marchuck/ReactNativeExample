//PokeListView

import React, {
    Component
}
from 'react';

import PokeRow from './PokeRow';


import {
    StyleSheet, ListView,TouchableWithoutFeedback, 
}
from 'react-native';
 
const styles = StyleSheet.create({
        
        container: {
            flex: 1
            , padding: 12
        , }
        
    , });


export default class PokeListView extends React.Component {
    
    render() {
        
        return ( < ListView style = {
                    styles.container
                }
                dataSource = {
                    this.props.sourceForList
                }
                renderRow = {
                    (data) =>  
                                            
                            <PokeRow pok={data} onPokeClick={this.props.onPokeClick} />
                }
                />);
    }
    
    
};
import React, {
    Component
}
from 'react';
import {
    StyleSheet, Image
}
from 'react-native';
const styles = StyleSheet.create({
    photo: {
        height: 80
        , width: 80
    , }
, });

export default class PokeImage extends Component {
    render() {
        return ( < Image style = {
                styles.photo
            }
            source = {
                {
                    uri: this.props.url
                }
            }
            />);
    }
};
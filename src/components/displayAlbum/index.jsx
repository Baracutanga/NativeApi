import { StyleSheet, Text, View } from 'react-native';
import FormPesquisa from '../formPesquisa';
import React, { useState } from 'react';

const DisplayAlbum = () => {
    return (
        <View style={styles.container} id='containerAlbum'>
            <Text>{nomeAlbum}</Text>
        </View>
    )
}

export default DisplayAlbum

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#dedede',
        padding: 20,
        borderRadius: 5
    },
    titulo: {
        textAlign: 'center',
        marginBottom: 10,
        fontSize: 15,
        fontWeight: '600'
    }
})
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FormPesquisa from './src/components/formPesquisa/';
import DisplayAlbum from './src/components/displayAlbum';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Pesquisar Álbum</Text>
      <FormPesquisa style={styles.form} />
      <DisplayAlbum />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 27,
    fontWeight: 'bold',
    marginBottom: 20
  },
  form: {
    marginBottom: 20
  }
});

import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import React from 'react'


const FormPesquisa = ({ style }) => {
    const [nameAlbum, setNomeAlbum] = useState(''); 
    const inputValue = nameAlbum;
    
    return (
        <View style={[styles.container, style]}>
            <Text style={styles.labels}>Nome do álbum</Text>
            <TextInput placeholder='Ex: Meteora' id='pesquisaNomeAlbum' style={styles.input} onChangeText={setNomeAlbum} />
            <Text style={styles.labels}>Artista</Text>
            <TextInput placeholder='Ex: Linkin Park' id='pesquisaNomeArtista' style={styles.input} />
            <Button title='Pesquisar' onPress={getAlbum(nameAlbum)}/>
        </View>
    )
}

export default FormPesquisa

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#dedede',
        width: '90%',
        padding: 20,
        borderRadius: 5
    },
    input: {
        backgroundColor: '#FFF',
        borderRadius: 30,
        height: 40,
        marginBottom: 20,
        paddingStart: 10
    },
    labels: {
        marginBottom: 5,
        marginStart: 10
    }
})
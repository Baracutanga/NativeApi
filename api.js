import { useState } from "react";
import FormPesquisa from "./src/components/formPesquisa";
const DEEZER_URL = 'https://api.deezer.com';

// * GET album by name
async function getAlbum(nomeAlbum) {
    try {
        const response = await fetch(`${DEEZER_URL}/album/${nomeAlbum}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if (!response.ok) {
            throw new Error('Erro ao se conectar')
        }
        const albuns = await response.json();
        const nomeValue = inputValue;

        albuns.forEach(album => {
            if (album.title === nomeValue) {
                return album.title
            }
        })
        console.log('Sucesso!: ', albuns);
    } catch (err) {
        console.error(`Erro: ${err}`);
    }
}

export default getAlbum;
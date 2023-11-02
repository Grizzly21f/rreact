import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CharactersList() {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {

        axios.get('https://rickandmortyapi.com/api/character/')
            .then(response => setCharacters(response.data.results))
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            <h1>Список персонажів Rick and Morty</h1>
            <ul>
                {characters.map(character => (
                    <li key={character.id}>
                        <h2>{character.name}</h2>
                        <img src={character.image} alt={character.name} />
                        <p>ID: {character.id}</p>
                        <p>Species: {character.species}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CharactersList;

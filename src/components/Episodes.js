import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Episodes() {
    const [episodes, setEpisodes] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const perPage = 10;

    useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/episode')
            .then(response => setEpisodes(response.data.results))
            .catch(error => console.error(error));
    }, []);

    const handlePreviousPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if ((currentPage + 1) * perPage < episodes.length) {
            setCurrentPage(currentPage + 1);
        }
    };

    const offset = currentPage * perPage;
    const episodesToDisplay = episodes.slice(offset, offset + perPage);

    return (
        <div>
            <h1>Епізоди Rick and Morty</h1>
            <ul>
                {episodesToDisplay.map(episode => (
                    <li key={episode.id}>
                        <p>ID: {episode.id}</p>
                        <p>Name: {episode.name}</p>
                            <p>Character: {`${episode.episode}`}</p>
                        <Link to={`/characters/${episode.id}`}>Перейти до персонажів</Link>
                    </li>
                ))}
            </ul>

            <div>
                <button onClick={handlePreviousPage} disabled={currentPage === 0}>
                    Попередня сторінка
                </button>
                <button onClick={handleNextPage}>
                    Наступна сторінка
                </button>
            </div>
        </div>
    );
}

export default Episodes;

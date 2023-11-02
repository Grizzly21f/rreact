import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Episodes from './components/Episodes';
import Characters from './components/Characters';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Episodes />} />
                    <Route path="/characters/:episodeId" element={<Characters />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;

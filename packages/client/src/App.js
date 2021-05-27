import { useState, useEffect } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

function App() {
    const [list, setList] = useState([]);
    const [item, setItem] = useState({});

    useEffect(() => {
        (async () => {
            const { data } = await axios.get('/api/list');
            console.log(data);

            const { data: test } = await axios.get('/api/item');
            console.log(test);
        })();
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>

                <div>112</div>
            </header>

        </div>
    );
}

export default App;

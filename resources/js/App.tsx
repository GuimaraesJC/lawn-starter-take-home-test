import React from 'react';
import ReactDOM from 'react-dom/client';
import '../css/app.css';
import './bootstrap';


function App() {
    return (
        <div>
            <h1>Welcome to the SPA</h1>
            <p>This is a React Single Page Application built with Vite and Laravel.</p>
        </div>
    );
}

const rootElement = document.getElementById('root');
if (rootElement) {
    ReactDOM.createRoot(rootElement).render(<App />);
}

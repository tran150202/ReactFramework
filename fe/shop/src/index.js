import React from 'react';
import ReactDOM from 'react-dom/client';
import HomePage from "./Pages/user/home";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <HomePage />
    </React.StrictMode>,
    document.getElementById('root')
);


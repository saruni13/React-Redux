import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { Store } from './app/Store'; // Ensure the correct import path for your store
import App from './App.tsx';
import './index.css';

const rootElement = document.getElementById('root');

if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);

    root.render(
        <React.StrictMode>
            <Provider Store={Store}>
                <App />
            </Provider>
        </React.StrictMode>
    );
} else {
    console.error("Root element not found");
}

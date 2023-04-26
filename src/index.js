import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import BaseStyle from '~/components/styles/baseStyle'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BaseStyle>
            <App />
        </BaseStyle>
    </React.StrictMode>,
);
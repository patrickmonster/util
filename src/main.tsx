import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import '@/assets/css/app.css';
import React from 'react';
import './index.css';

import Router from '@/router';

console.log('PUBLIC_URL', import.meta.env.PUBLIC_URL);
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <BrowserRouter basename={'/util'}>
            <Router />
        </BrowserRouter>
    </React.StrictMode>
);

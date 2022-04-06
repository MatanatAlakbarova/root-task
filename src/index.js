import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './pages/Home.css'
import App from './App';
import { createRoot } from 'react-dom/client';
import {  BrowserRouter as Router} from "react-router-dom"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"


const container = document.getElementById('root');
const root = createRoot(container);
root.render
(
<Router>
<App />
</Router>
);



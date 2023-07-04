import React from 'react';
import ReactDOM from 'react-dom';
import Home from './js/components/Home';
/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.css';

// start the Stimulus application
import './bootstrap';

console.log("Hola munda");
console.log(process.env);
ReactDOM.render(<Home />, document.getElementById('root'));
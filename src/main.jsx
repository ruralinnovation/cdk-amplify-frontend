import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

const root_id = 'react-app';
const root_container = document.getElementById(root_id);
const root_content = document.createElement("div");
const root_init = (evt) => {
    // console.log(evt);
    // evt.preventDefault();
    // console.log(root_container.childNodes.length, root_container.childNodes);

    for (const elm of root_container.childNodes) {
        const innerElm = elm;
        if (elm.nodeType === 1) {
            console.log(elm.nodeType, elm);
            root_content.appendChild(innerElm);
        } else if (elm.nodeType === 3) {
            console.log(elm.nodeType, elm);
        }
    }

    const root = createRoot(root_container);
    root.render(
        <React.StrictMode>
            <App content={ () => root_content } />
        </React.StrictMode>
    )

    root_container.style.opacity = "1.0";
};

if (typeof Shiny === 'object') {
    document.body.addEventListener('cori.apps:init', root_init);
} else {
    document.body.childNodes.forEach(n => ("data" in n && n.data.match(/headContent/) !== null) ? document.body.removeChild(n) : true);
    root_init({ preventDefault: () => {} })
}

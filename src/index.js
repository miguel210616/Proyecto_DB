//*const element = document.createElement('h1');
//element.innerText = "Hello manito";

//const container = document.getElementById('app');

//container.appendChild(element);//

import React from 'react';
import ReactDOM from 'react-dom';
import BadgeNew from './Pages/BadgeNew';
import 'bootstrap/dist/css/bootstrap.css';
import './global.css';
//const jsx = <h1>hello de Nuevo manito</h1>
//const element = React.createElement('a', {href: 'https://platzi.com'},'Vamos por el curso');

//const element = React.createElement('h1',{},'Hola, soy Mikitp');
//const name = 'Ale';
//const sum = () => 3+3;
//const jsx = <h1>Hola soy, {sum()}</h1>
/*const jsx = (
  <div>
    <h1>Hola, soy Miguel</h1>
    <p>Ale es mi hija</p>
  </div>
);
*/
const container = document.getElementById('app');

//ReactDOM.render(__qué__; __donde__);
ReactDOM.render(<BadgeNew />,container);




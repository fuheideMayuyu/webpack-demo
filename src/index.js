import _ from 'lodash';
import './style.css';
import mayuyu from './img.jpg'
import Data from './data.xml';


function component() {
  const element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');
  var myIcon = new Image();
  myIcon.src = mayuyu;
  element.appendChild(myIcon);
  
  console.log(Data);
  return element;
}

document.body.appendChild(component());
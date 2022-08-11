import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));

function tick(){
  const element = (
    <div>
      <h1>Hello World</h1>
      <h3>It is {new Date().toLocaleTimeString()}</h3>
    </div>
  )
  root.render(element)
}



setInterval(tick, 1000)
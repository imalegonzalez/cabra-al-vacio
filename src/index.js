import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Html } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import Iframe from 'react-iframe';


function Overlay() {
    return (
      <div style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none', width: '100%', height: '100%', margin: 'auto' }}>

        <div style={{ position: 'absolute', zIndex:99, top: 40, left: 40, fontSize: '18px', fontWeight: 400, color: 'white' }}>
        
          music by
          <br />
          <span style={{fontWeight: 700}}>unmillondehectareas</span></div>
        <div className='dev' style={{ position: 'absolute', bottom: 40, right: 40, fontSize: '13px', fontWeight: 400, color: 'white' }}>with ❤ by <span style={{fontWeight: 700}}>@imalegonzalez</span> </div>
      </div>
    )
}


  

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
    <App />
    <Overlay />
   
    
    <Iframe
        url="https://bandcamp.com/EmbeddedPlayer/album=738043988/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=3319097207/transparent=true/"
        width="400"
        height="120"
        id=""
        className="iframe"
        position="absolute"
        styles={{position: 'absolute', bottom: 40, left: 40, border: 0}}
    
    />
    
    </>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import ColorBox from './components/ColorBox';
import SelectColor from './components/SelectColors';
import ColorContext, { ColorProvider } from './contexts/color';

function App() {
  return (
    <ColorProvider>
   <div>
     <SelectColor />
     <ColorBox />
   </div> 
   </ColorProvider>
  );
}

export default App;

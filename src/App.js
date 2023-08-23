import React, { useState } from 'react';
import './Component/App.css';
import SearchBox from './Component/SearchBox';
import Image from './Component/Image';


function App() {
  const [image,setImage]=useState([]);
  console.log(image);
  return (
    <div className="App">
   <SearchBox setImage={setImage}/>
<Image images={image}/>
    </div>
  );
}

export default App;

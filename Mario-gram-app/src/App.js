import React from 'react';
import ImageGrid from './comps/ImageGrig';
import Title from './comps/Title';
import UploadForm from './comps/UploadForm';

function App() {
  return (
    <div className="App">
      <Title/>
      <UploadForm/>
      <ImageGrid/>
    </div>
  );
}

export default App;

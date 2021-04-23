import React,{useState} from 'react';
import ImageGrid from './comps/ImageGrid';
import Modal from './comps/Modal';
import Title from './comps/Title';
import UploadForm from './comps/UploadForm';
import {ThemeProvider,CssBaseline,createMuiTheme,Switch} from '@material-ui/core'
import FormControlLabel from '@material-ui/core/FormControlLabel';

function App() {
  const [selectedImg,setSelectedImg] = useState(null)

  const [darkMode,setDarkMode] = useState(false)
  const theme = createMuiTheme({
    palette:{
      type:darkMode ? "dark":"light"
    }
  })
  const handleDarkMode =()=>{
    setDarkMode(!darkMode)
  }

  return (
    <ThemeProvider  theme={theme}>
      <CssBaseline>
    <div className="App">
      <Title/>
     
      <div className="theme">
      <FormControlLabel className="switch-theme" control ={<Switch onChange={handleDarkMode} value={darkMode}/>} label ="Change Theme"/>
      </div>
      
      <UploadForm/>
      <ImageGrid setSelectedImg ={setSelectedImg}/>
      {selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg}/>}
    </div>
    
    </CssBaseline>
    </ThemeProvider>
  );
}

export default App;

import React from 'react'
import {useState} from 'react'
import ProgressBar from './ProgressBar'
import AddAPhotoTwoToneIcon from '@material-ui/icons/AddAPhotoTwoTone';



const UploadForm =()=>{

    const [file,setFile] = useState(null)
    const [error,setError] = useState(null)
    

    const types =['image/png','image/jpeg']

    const changeHandler = (e)=>{
    let selected = e.target.files[0]
    
    if(selected && types.includes(selected.type)){
        setFile(selected)
        setError("")
    }else{
        setFile(null)
        setError("Please select an image file")

    }
}
    return(
        <form>
      <label>
        <input type="file" onChange={changeHandler} />
        <span><AddAPhotoTwoToneIcon className="photo_icon"/></span>
        
      </label>
      <div className="output">
        { error && <div className="error">{ error }</div>}
        { file && <div>{ file.name }</div> }
        { file && <ProgressBar file={file} setFile={setFile} /> }
      </div>
    </form>
    )
}
export default UploadForm
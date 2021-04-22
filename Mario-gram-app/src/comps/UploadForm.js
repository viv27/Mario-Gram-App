import React from 'react'
import {useState} from 'react'
import ProgressBar from './ProgressBar'


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
        <form action="">
            <input type="file" onChange={changeHandler}/>
            <div className="output">
                {error && <div className="error">{error}</div>}
                {file && <div className="file">{file.name}</div>}
                {file && <ProgressBar setFile ={setFile} file ={file}/>}
            </div>
        </form>
    )
}
export default UploadForm
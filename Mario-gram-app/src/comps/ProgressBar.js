import React from 'react'
import {useEffect} from 'react'
import useStorage from '../hooks/useStorage'


const ProgressBar = ({file,setFile})=>{

    const {url,progress} = useStorage(file)
    useEffect(()=>{
        if(url){
            setFile(null)
        }
    },[url,setFile])

    return(
        <div style ={{width:progress+'%'}} className="progress-bar"></div>
    )
}

export default ProgressBar
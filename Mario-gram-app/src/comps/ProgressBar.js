import React from 'react'
import {useEffect} from 'react'
import useStorage from '../hooks/useStorage'
import LinearProgress from '@material-ui/core/LinearProgress';

import CircularProgress from '@material-ui/core/CircularProgress';


const ProgressBar = ({file,setFile})=>{

    const {url,progress} = useStorage(file)
    useEffect(()=>{
        if(url){
            setFile(null)
        }
    },[url,setFile])

    return(
        <div>
        {/* <div style ={{width:progress+'%'}} className="progress-bar"></div>
        <CircularProgress /> */}
        <LinearProgress />
        </div>
    )
}

export default ProgressBar
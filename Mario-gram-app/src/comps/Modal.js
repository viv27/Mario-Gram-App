import React from 'react'

const Modal =({selectedImg,setSelectedImg})=>{

    const handleCheck =(e)=>{
        if(e.target.classList.contains('backdrop')){
        setSelectedImg(null)}
    }
    return(
        <div onClick ={handleCheck} className="backdrop">
            <img src={selectedImg} alt="enlrged pic"/>
        </div>
    )
}
export default Modal
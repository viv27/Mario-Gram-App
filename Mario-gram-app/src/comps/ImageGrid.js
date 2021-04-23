import React from 'react'
import useFirestore from '../hooks/useFirestore'


const ImageGrid = ({setSelectedImg})=>{
    const {docs} = useFirestore('images')
    console.log(docs)
    return (
        <div className ="img-grid">
           {docs && docs.map(doc=>(
               <div onClick={()=>setSelectedImg(doc.url)} key ={doc.id} className="img-wrap">
                   <img src={doc.url} alt="uploaded"/>
               </div>
           ))}
        </div>
    )

}

export default ImageGrid
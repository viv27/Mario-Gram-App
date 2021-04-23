import React from 'react'
import useFirestore from '../hooks/useFirestore'
import {motion} from 'framer-motion'

const ImageGrid = ({setSelectedImg})=>{
    const {docs} = useFirestore('images')
    console.log(docs)
    return (
        <div className ="img-grid">
           {docs && docs.map(doc=>(
               <motion.div onClick={()=>setSelectedImg(doc.url)} key ={doc.id} layout whileHover={{opacity:1}} className="img-wrap">
                   <motion.img initial={{opacity:0}} animate={{opacity:1}}  src={doc.url} alt="uploaded"/>
               </motion.div>
           ))}
        </div>
    )

}

export default ImageGrid
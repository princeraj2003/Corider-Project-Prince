import React from 'react'
import './FilePopup.css'
import Document from "../../icons/Document.svg";
import Video from "../../icons/Video.svg";
import Camera from "../../icons/Camera.svg";

const FilePopup = () => {
  return (
    <div className='file-popup-block'>
        <img src={Camera} alt='camera'/>
        <img src={Video} alt='video'/>
        <img src={Document} alt='document'/>
        <div className='triangle'></div>
    </div>
  )
}

export default FilePopup
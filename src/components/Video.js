import React from 'react'
import Player from "react-player";

export const Video = () => {
  return (
    <div>

    <div>
      <Player url="./img/Secuencia01.mp4" 
       playing={true}
        loop={true}
        muted={true}
        width="100%"
        height="100%"/>
        
    </div>


    </div>




)
}

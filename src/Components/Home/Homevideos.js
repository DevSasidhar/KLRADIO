import React from 'react'
import ReactPlayer from "react-player"
const Homevideos = () => {
    return (
        <div>
            <div className='box'>
            <div className="popshow">Videos</div>
            <div className='vid-container'>
                <div className='row'>
                    <div className='column'>
                    <ReactPlayer width={506}
        url="https://www.youtube.com/watch?v=R4gF2Po1HUM"/>
                    </div>      
                    <div className='column'>
                    <ReactPlayer width={506}
        url="https://www.youtube.com/watch?v=pyVmopYLxxY&t=224s"/>
                    </div> 
                    <div className='column'>
                    <ReactPlayer width={506}
        url="https://www.youtube.com/watch?v=4l0Kgm-9Ssk"/>
                    </div> 
                    <div className='column'>
                    <ReactPlayer width={506}
        url="https://www.youtube.com/watch?v=G1GVCSrSJ_o"/>
                    </div> 
                    <div className='column'>
                    <ReactPlayer width={506}
        url="https://www.youtube.com/watch?v=rpaJWGLTI_Q"/>
                    </div> 
                    <div className='column'>
                    <ReactPlayer width={506}
        url="https://www.youtube.com/watch?v=wlnAoh-R29U&t=71s"/>
                    </div>           
                </div>
            </div>
            </div>
      
    </div>
    )
}

export default Homevideos

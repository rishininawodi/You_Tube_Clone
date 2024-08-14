import React from 'react';
import { Link } from 'react-router-dom';
import Time from "../loader/Time";


function Video({video}) {
  console.log(video);
  return < div className=''>
    <Link to ={`/video/${video?.videoId}`}>
            <div className='flex flex-col'>
              <div className='relative h-48 md:h-56 md: rounded-xl  hover:rounded-none duration-200 overflow-hidden'>
                <img className='h-full w-full' 
                src={video?.thumbnails[0]?.url}
                 alt=""  />
                 {video?.lengthSeconds && <Time time={video?.lengthSeconds}/> }
              </div>
              <div className='flex space-x-2 items-start'>
              <div className=''>
                <div className='flex h-9 w-9 rounded-full overflow-hidden border'>
                  <img 
                     className='h-full w-full rounded-full overflow-hidden'
                   src={video?.author?.avatar[0].url}
                    alt=""/>
                </div>
              </div>
              <div>
                <span className='text-sm fonnt-bold line-clamp-2'>{video?.title}</span>
              </div>
              </div>
            </div>
    </Link>
  </div>
  ;
  
}

export default Video;
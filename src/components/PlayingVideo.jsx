import React, { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';
import {fetchData} from "../utils/rapidapi";
import ReactPlayer from "react-player";

function PlayingVideo() {
  const [video,setVideo]=useState();
  const[realatedVideo,setRelativeVideo]=useState();
  const {id}=useParams();

  useEffect(()=>{
    fetchVideoDetails();
  },[id]);

  const fetchVideoDetails=()=>{
    fetchData(`video/details/?id=${id}`).then((res)=>{
      console.log(res);
      setVideo(res);
    })
  }
  return (
    <div className='flex justify-center flex-row h-[calc(100%-56px)] mt-16'>
      <div className='w-full max-w-[1580px] flex-col lg:flex-row'>
        <div className='flex  flex-col lg:w-[calc(100%-350px)] xl:w-[100%-400px] px-4 py-3 lg:py-6'>
          <div className='h-[200px] md:h-[600px] ml-[-16px] mr-[-16px] lg:ml-0 lg:mr-0'>
            <ReactPlayer
            url={`https://www.youtube.com/watch?v=${id}`}
            height="100%"
            width="100%"
            controls
            style={{backgroundColor:"#000000"}}
            playing={true}

            />
          </div>
          <div>
            <span className='text-sm fonnt-bold line-clamp-2'>
              {video?.title}
            </span>
            <span className='flex items-center font-semibold mt-2 text-[12px] text-gray-500 '>
              {video?.author?.title}
              {video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && 
              (<BsFillCheckCircleFill className='text-gray-600 ml-1 text-[12px]'/>
              ) }

            </span>
            <div className='flex text-gray-500 text-[12px]'>
                  <span>
                    {`${abbreviateNumber(
                      video?.stats?.views,
                      2
                    )}views`}
                  </span>
                  <span className='flex text-[12px] leading-none font-bold relative top-[10px] mx-1 '>
                    .
                  </span>
                  <span>{video?.publishedTimeText}</span>
            </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default PlayingVideo;
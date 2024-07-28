import React from "react"
import { GoHomeFill } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";

import { MdOutlinePersonalVideo } from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import { MdPlaylistPlay } from "react-icons/md";
import { BiVideo } from "react-icons/bi";
import { MdWatchLater } from "react-icons/md";
import { GrLike } from "react-icons/gr";
import { FaChevronRight } from "react-icons/fa";

import { FaFire } from "react-icons/fa";
import { MdLiveTv } from "react-icons/md";
import { FaTrophy } from "react-icons/fa";
import { MdFeedback } from "react-icons/md";


import { IoIosHelpCircle } from "react-icons/io";
import { CiFlag1 } from "react-icons/ci";


import { FaYoutube } from "react-icons/fa";
import { SiYoutubestudio } from "react-icons/si";
import { SiYoutubekids } from "react-icons/si";
import { SiYoutubemusic } from "react-icons/si";
import { SiTrendmicro } from "react-icons/si";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { PiMusicNoteLight } from "react-icons/pi";
import { PiFilmSlateLight } from "react-icons/pi";
import { CgMediaLive } from "react-icons/cg";
import { SiYoutubegaming } from "react-icons/si";
import { FaRegNewspaper } from "react-icons/fa";
import { TfiCup } from "react-icons/tfi";
import { PiLightbulbLight } from "react-icons/pi";
import { SiStylelint } from "react-icons/si";
import { MdPodcasts } from "react-icons/md";


function Sidebar(){
    const sidebarItems=[
        {
            id:1,
            name:"Home",
            icon:<GoHomeFill/>
        },
        {
            id:2,
            name:"Shorts",
            icon:<SiYoutubeshorts/>
        },
        {
            id:3,
            name:"Subscriptions",
            icon:<MdOutlineSubscriptions/>
        }
    ]

    const sidebarItems2=[
        {
            id:1,
            name:"Your Channel",
            icon:<MdOutlinePersonalVideo />
        },
        {
            id:2,
            name:"History",
            icon:<FaHistory />
        },
        {
            id:3,
            name:"Playlist",
            icon:<MdPlaylistPlay />

        },
        {
            id:4,
            name:"Your vedioe",
            icon:<BiVideo />

        },
        {
            id:5,
            name:"Watch Later",
            icon:<MdWatchLater />

        },
        {
            id:6,
            name:"Liked vedioe",
            icon:<GrLike />

        },
    ]

    const sidebarItems3=[
        {
            id:1,
            name:"Trending",
            icon:<FaFire />

        },
        {
            id:2,
            name:"Shopping",
            icon:<HiOutlineShoppingBag/>
        },
        {
            id:3,
            name:"Music",
            icon:<MdPlaylistPlay />

        },
        {
            id:4,
            name:"Films",
            icon:<BiVideo />

        },
        {
            id:5,
            name:"Live",
            icon:<CgMediaLive />

        },
        {
            id:6,
            name:"Gaming",
            icon:<SiYoutubegaming />

        },
        {
            id:7,
            name:"News",
            icon:<FaRegNewspaper />

        },
        {
            id:8,
            name:"Sport",
            icon:<TfiCup />

        },
        {
            id:9,
            name:"Courses",
            icon:<PiLightbulbLight />

        },
        {
            id:10,
            name:"fashion & Beauty",
            icon:<SiStylelint />

        },
        {
            id:11,
            name:"Podcasts",
            icon:<MdPodcasts/>

        },
    ]

    const sidebarItems4=[
        {
            id:1,
            name:"Youtube Premium",
            icon:<FaYoutube/>
        },
        {
            id:2,
            name:"Youtube Studio",
            icon:<SiYoutubestudio/>
        },
        {
            id:3,
            name:" Youtube Music",
            icon:<SiYoutubemusic />
        },
        {
            id:4,
            name:" Youtube Kids",
            icon:<SiYoutubekids/>
        }
    ]
    const sidebarItems5=[
        {
            id:1,
            name:"Settings",
            icon:<IoSettingsOutline />
        },
        {
            id:2,
            name:"Report history",
            icon:<CiFlag1 />
        },
        {
            id:3,
            name:" Help",
            icon:<IoIosHelpCircle />
        },
        {
            id:4,
            name:" Send feedback",
            icon:<MdFeedback/>
        }
    ]
    return (
        
        <div className="px-6 w-[15%] h-[calc(100vh-6.625rem)] overflow-y-scroll overflow-x-hidden mt-16">
            {/*home*/}
            <div className="space-y-3 items-center">
            {
               sidebarItems.map((item)=>{
                return(
                    <div className="flex items-center space-x-6 hover:bg-gray-300 duration-300 rounded-xl p-1">
                    <div className="text-xl cursor-pointer" >{item.icon}</div>
                    <span className="cursor-pointer">{item.name}</span>
                    </div>
                );
               }) 
            }
            </div>
            <br/>
            <hr/>

            {/*you*/}
            <div className="mt-4 space-y-3 items-center">
                <div className="flex item-center space-x-2">
                    <h1>You</h1>
                    <FaChevronRight/>
                </div>
            {
               sidebarItems2.map((item)=>{
                return(
                    <div className="flex items-center space-x-6 hover:bg-gray-300 duration-300 rounded-xl p-1">
                    <div className="text-xl cursor-pointer" >{item.icon}</div>
                    <span className="cursor-pointer">{item.name}</span>
                    </div>
                );
               }) 
            }
            
            </div>
            <br/>
            <hr/>

            {/*Explore*/}
            <div className="mt-4 space-y-3 items-center">
                <div className="item-center space-x-2">
                    <h1 className="font-semibold">Explore</h1>
                </div>
            {
               sidebarItems3.map((item)=>{
                return(
                    <div className="flex items-center space-x-6 hover:bg-gray-300 duration-300 rounded-xl p-1">
                    <div className="text-xl cursor-pointer" >{item.icon}</div>
                    <span className="cursor-pointer">{item.name}</span>
                    </div>
                );
               }) 
            }
            
            </div>
            <br/>
            <hr/>

            {/**/}
            <div className="mt-4 space-y-3 items-center">
               
            {
               sidebarItems5.map((item)=>{
                return(
                    <div className="flex items-center space-x-6 hover:bg-gray-300 duration-300 rounded-xl p-1">
                    <div className="text-xl cursor-pointer" >{item.icon}</div>
                    <span className="cursor-pointer">{item.name}</span>
                    </div>
                );
               }) 
            }
            
            </div>
            <br/>
            <hr/>
            
            {/*More*/}
            <div className="mt-4 space-y-3 items-center">
                <div className="item-center space-x-2">
                    <h1 className="font-semibold">More From YouTube</h1>
                </div>
            {
               sidebarItems4.map((item)=>{
                return(
                    <div className="flex items-center space-x-6 hover:bg-gray-300 duration-300 rounded-xl p-1">
                    <div className="text-xl cursor-pointer text-red-500" >{item.icon}</div>
                    <span className="cursor-pointer">{item.name}</span>
                    </div>
                );
               }) 
            }
            <hr/>
            </div>{" "}
            <br/>
            <span className="text-xs font-semibold text-gray-400">
                About Press Copyright<br/>Contact usbCreators<br/> Advertise Developers<br/><br/>
            <p>Terms Privacy Policy & Safety<br/>How YouTube works<br/>Test new features</p></span>
            <br/>
            <p className="text-xs text-gray-800 mt-1"> © 2024 Learn Coding</p>
        </div>
    )
}
export default Sidebar
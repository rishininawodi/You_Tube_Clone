import React from "react"
import { GoHomeFill } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { FaChevronRight } from "react-icons/fa";
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
    return (
        <div className="px-6 w-[15%]">
            <div className="space-y-3 items-center">
            <div className="flex items-center space-x-6 hover:bg-gray-300 duration-300 rounded-xl p-1">
            <GoHomeFill className="text-xl cursor-pointer" />
            <span className="cursor-pointer">Home</span>
            </div>
            <div className="flex items-center space-x-6 hover:bg-gray-300 duration-300 rounded-xl p-1">
            <SiYoutubeshorts className="text-xl cursor-pointer" />
            <span className="cursor-pointer">Shorts</span>
            </div>

            <div className="flex items-center space-x-6 hover:bg-gray-300 duration-300 rounded-xl p-1">
            <MdOutlineSubscriptions  className="text-xl cursor-pointer" />
            <span className="cursor-pointer">Subscription</span>
            </div>
            </div>
            <hr/>
        </div>
    )
}
export default Sidebar
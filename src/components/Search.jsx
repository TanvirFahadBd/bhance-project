import Creative from "./Creative"
import Searchtag from "./Searchtag"
import creativeit from "../images/creativeit.png";
import arrow from "../images/arrow.png"
import tools from "../images/tools.png"
import color from "../images/color.png"



function Search() {
    return (
        <form className="pt-6.25 pb-6.25 border-b-1">
            <div className="conteiner max-w-360 mx-auto my-4">
                <div className="inpurFlex flex  ">
                    <input className=" placeholder-font-bold placeholder-sm w-205 h-12.5 border-1 outline-0  border-borderGray rounded-tl-full rounded-bl-full px-2" type="search" placeholder="Search the creative world at work" />
                    <div className="tagflex flex items-center border-1 border-borderGray rounded-tr-full rounded-br-full gap-2 px-5 ">
                        <Searchtag first>Projects</Searchtag>
                        <Searchtag>Images</Searchtag>
                        <Searchtag>Prototypes</Searchtag>
                        <Searchtag>Streams</Searchtag>
                        <Searchtag>People</Searchtag>
                        <Searchtag>Moodboards</Searchtag>
                    </div>
                </div>
                <div className="ffflex flex gap-82 items-center ">
                    <div className="creativeComponents flex gap-2 pt-6.25">
                        <Creative><img src={creativeit} alt="" />
                            <p>Creative Fields</p>
                            <img src={arrow} alt="" />
                        </Creative>
                        <Creative><img src={tools} alt="" />
                            <p>tools</p>
                            <img src={arrow} alt="" />
                        </Creative>
                        <Creative><img src={color} alt="" />
                            <p>colors</p>
                            <img src={arrow} alt="" />
                        </Creative>
                        <Creative><img src={color} alt="" />
                            <p>colors</p>
                            <img src={arrow} alt="" />
                        </Creative>
                        <Creative><img src={color} alt="" />
                            <p>colors</p>
                            <img src={arrow} alt="" />
                        </Creative>
                        <Creative><img src={color} alt="" />
                            <p>colors</p>
                            <img src={arrow} alt="" />
                        </Creative>
                        <Creative><img src={color} alt="" />
                            <p>colors</p>
                            <img src={arrow} alt="" />
                        </Creative>

                    </div>
                    <div>
                        <p className="text-gray-400">short</p>
                        <p>Recomendet
                            <img src={arrow} />
                        </p>
                    </div>
                </div>

            </div>
        </form>
    )
}

export default Search

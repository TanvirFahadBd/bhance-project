import gari from "../images/gari.png"
import like from "../images/Likes (1).png"
import view from "../images/Views (1).png"
import thambnail from "../images/Thumbnail.jpg"
import GariConteiner from "./GariConteiner"
import sadakala from "../images/sadakala.jpg"
import goru from "../images/goru.jpg"

function GariImage() {
    return (
        <section>
            <div className="conteiner max-w-348 mx-auto my-4">
                <div className="grirflex flex   gap-5  ">
                    <GariConteiner>
                        <img className="hover:scale-110 transform transition duration-300" src={gari} />
                        <div className="imagegroup flex gap-5.25 group">
                            <div className="per">
                                <p>2d Arcade style experiments</p>
                                <p>ARCADE STUDIO</p>
                            </div>
                            <div className="magee flex gap-1 items-baseline">
                                <img src={like} alt="" />
                                <img src={view} alt="" />
                            </div>
                        </div>

                    </GariConteiner>
                    <GariConteiner>
                        <img className="hover:scale-110 transform transition duration-300" src={thambnail} />
                        <div className="imagegroup flex gap-5.25">
                            <div className="per">
                                <p>2d Arcade style experiments</p>
                                <p>ARCADE STUDIO</p>
                            </div>
                            <div className="magee flex gap-1 items-baseline">
                                <img src={like} alt="" />
                                <img src={view} alt="" />
                            </div>
                        </div>

                    </GariConteiner><GariConteiner>
                        <img className="hover:scale-110 transform transition duration-300" src={sadakala} />
                        <div className="imagegroup flex gap-5.25">
                            <div className="per">
                                <p>2d Arcade style experiments</p>
                                <p>ARCADE STUDIO</p>
                            </div>
                            <div className="magee flex gap-1 items-baseline">
                                <img src={like} alt="" />
                                <img src={view} alt="" />
                            </div>
                        </div>

                    </GariConteiner>
                    <GariConteiner>
                        <img className="hover:scale-110 transform transition duration-300" src={goru} />
                        <div className="imagegroup flex gap-5.25">
                            <div className="per">
                                <p>2d Arcade style experiments</p>
                                <p>ARCADE STUDIO</p>
                            </div>
                            <div className="magee flex gap-1 items-baseline">
                                <img src={like} alt="" />
                                <img src={view} alt="" />
                            </div>
                        </div>

                    </GariConteiner>
                </div>
            </div>
        </section>
    )
}

export default GariImage

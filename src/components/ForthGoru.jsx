import GariConteiner from './GariConteiner'
import gari from "../images/gari.png"
import like from "../images/Likes (1).png"
import view from "../images/Views (1).png"
import thambnail from "../images/Thumbnail.jpg"
import sadakala from "../images/sadakala.jpg"
import goru from "../images/goru.jpg"

function ForthGoru() {
  return (
    <section>
       <div className="conteiner max-w-348 mx-auto my-4">
         <div className="grirflex flex   gap-5  ">
        <GariConteiner>
          <img src={gari} />
                        <div className="imagegroup flex gap-5.25 group justify-between">
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
                        <img src={thambnail} />
                        <div className="imagegroup flex justify-between gap-5.25">
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
                        <img src={sadakala} />
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
                        <img src={goru} />
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

export default ForthGoru
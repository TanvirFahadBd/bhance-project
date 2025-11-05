import GariConteiner from './GariConteiner'
import like from "../images/Likes (1).png"
import view from "../images/Views (1).png"
import Nigga from "../images/Nigga.png"
import tree from "../images/tree.png"
import loson from "../images/loson.png";
import fish from "../images/fish.png";

function SecondGari() {
  return (
    <section>
       <div className="conteiner max-w-348 mx-auto my-4">
         <div className="grirflex flex   gap-5  ">
        <GariConteiner>
          <img src={Nigga} />
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
                        <img src={tree} />
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
                        <img src={loson} />
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
                        <img src={fish} />
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

export default SecondGari


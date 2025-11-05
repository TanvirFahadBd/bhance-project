import CreativeCCedit from "./CreativeCCedit"
import creaticeCloud from "../images/creative-cloud-product-image.png.jpg"
import coudLogo from "../images/Logo (2).png";
import photo from "../images/photoshop-product-image.png.jpg"
import photologo from "../images/Frame.png"


function CreativeCC() {
  return (
   <section className="py-13 bg-secondry">
    <div className="conteiner conteiner max-w-348 mx-auto">
        <div className="CCflex px-7.5 flex gap-15">
            <div className="cctext max-w-75 flex flex-col gap-7.5 justify-start items-start">
                <div className="header flex flex-col gap-1">
                    <h1 className="font-bold">Create with Creative Cloud</h1>
                    <p>Whatever you want to create, Adobe Creative Cloud has what you need to make it amazing.</p>
                </div>
                <button className=" bg-primary duration-300 hover:bg-black text-white font-bold hover:text-green-400 px-4 py-2 rounded-full cursor-pointer">
                    See all plans
                </button>
            </div>
            <div className="ccconteiner flex gap-4">
                <CreativeCCedit>
                  <div>
                    <img className="hover:scale-90 duration-300" src={creaticeCloud} />
                  </div>
                  <div className="flex gap-3 ">
                    <div>
                        <img src={coudLogo}  />
                    </div>
                    <div className="max-w-48">
                        <p className="font-bold">Creative Cloud All Apps</p>
                        <p className="font-light text-0.5">Easily create stunning social graphics, short videos, and web pages that make you stand out.</p>
                    </div>
                  </div>
                </CreativeCCedit>
                <CreativeCCedit>
                  <div >
                    <img className="hover:scale-90 duration-300" src={photo} />
                  </div>
                  <div className="flex gap-3 ">
                    <div>
                        <img src={photologo}  />
                    </div>
                    <div className="max-w-48">
                        <p className="font-bold">Creative Cloud All Apps</p>
                        <p className="font-light text-0.5">Easily create stunning social graphics, short videos, and web pages that make you stand out.</p>
                    </div>
                  </div>
                </CreativeCCedit>
                <CreativeCCedit>
                  <div>
                    <img className="hover:scale-90 duration-300" src={creaticeCloud} />
                  </div>
                  <div className="flex gap-3 ">
                    <div>
                        <img src={coudLogo}  />
                    </div>
                    <div className="max-w-48">
                        <p className="font-bold">Creative Cloud All Apps</p>
                        <p className="font-light text-0.5">Easily create stunning social graphics, short videos, and web pages that make you stand out.</p>
                    </div>
                  </div>
                </CreativeCCedit>
                <CreativeCCedit>
                  <div>
                    <img className="hover:scale-90 duration-300" src={creaticeCloud} />
                  </div>
                  <div className="flex gap-3 ">
                    <div>
                        <img src={coudLogo}  />
                    </div>
                    <div className="max-w-48">
                        <p className="font-bold">Creative Cloud All Apps</p>
                        <p className="font-light text-0.5">Easily create stunning social graphics, short videos, and web pages that make you stand out.</p>
                    </div>
                  </div>
                </CreativeCCedit>
            </div>
        </div>

    </div>
   </section>
  )
}

export default CreativeCC

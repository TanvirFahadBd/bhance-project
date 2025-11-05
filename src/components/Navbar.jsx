import  logo  from "../images/bhannce.png";
import Buttons from "./Buttons";
import cc from "../images/cc.png"
import adobe from "../images/adobe.png"
import CCButtons from "./CCButtons";

function Navbar() {
    return (
        <nav className="border-b-1">
            <div className="conteiner max-w-360 mx-auto my-4">
                <div className="flex gap-126">
                    <div className="imagess flex gap-6 items-center">
                     <a href="">   <img src={logo} /></a>
                        <ul className="font-bold flex gap-6">
                            <li><a href="">For You</a></li>
                            <li><a href="">Discover</a></li>
                            <li><a href="">Livestreams</a></li>
                            <li><a href="">Hire</a></li>
                            <li><a href="">Jobs</a></li>
                        </ul>
                    </div>
                    <div className="icons flex items-center gap-3">
                        <Buttons secondry> sign in </Buttons>
                        <Buttons primary> sign up </Buttons>
                        <span></span>
                        <CCButtons>
                            <img src={cc}  />
                        </CCButtons>
                        <CCButtons>
                            <img src={adobe}  />
                        </CCButtons>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar

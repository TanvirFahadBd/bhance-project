import React from 'react'
import Footerwrite from './Footerwrite'
import Footermenu from './Footermenu'
import adobe from "../images/adobe.png";
import arrow from "../images/arrow.png";


function Footer() {
    return (
        <footer>
            <div className="conteiner max-w-360 mx-auto my-4">
                <div className="flle flex justify-between items-center">
                    <div className="flrx flex gap-4">
                        <div className='flex gap-4'>
                            <Footerwrite>
                                <p>More Behance</p>
                                <img src={arrow} />
                            </Footerwrite>
                            <Footerwrite>
                                <p>English</p>
                                <img src={arrow} />
                            </Footerwrite>
                        </div>
                        <div className='flex gap-4 font-semibold'>
                            <Footermenu Tab='a' >
                                TOU
                            </Footermenu>
                            <Footermenu Tab='p'>
                                Privacy
                            </Footermenu>
                            <Footermenu>
                                Community
                            </Footermenu>
                            <Footermenu>
                                Help
                            </Footermenu>
                            <Footermenu>
                                Cookie preferences
                            </Footermenu>
                            <Footermenu>
                                Do not sell or share my personal information
                            </Footermenu>
                        </div>
                    </div>
                    <div className='cursor-pointer'>
                       <a href="#"> <img src={adobe} /> </a> 
                    </div>


                </div>
            </div>
        </footer>
    )
}

export default Footer

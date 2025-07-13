import React from 'react'
import './Main.css'
import { assets } from '../../assets/assets'

const Main= () => {
    return(
        <div className='main'>
            <div className="nav">
                <p>Smart Chatbot    </p>
                {/* <img src={assets.user_icon} alt=""/> */}
            </div>

            <div className="main-container">
                <div className="greet">
                    <p><span>Hello Dev!</span></p>
                    <p>How can i help uh</p>
                </div>
                <div className="cards">
                    <div className="card">
                        <p>Suggest some place to visit in winter</p>
                        <img src={assets.compass_icon} alt=""/>
                    </div>
                    <div className="card">
                        <p>Briefly summarise the concept of urban planning</p>
                        <img src={assets.bulb_icon} alt=""/>
                    </div>
                    <div className="card">
                        <p>Brainstrom team bonding ideas for office party</p>
                        <img src={assets.message_icon} alt=""/>
                    </div>
                    <div className="card">
                        <p>
                            Suggest some optimisation in my code if possible
                        </p>
                        <img src={assets.code_icon} alt=""/>
                    </div>
                </div>
                <div className="main_bottom">
                    <div className="searchbox">
                        <input type="text" placeholder='Enter a prompt here'/>
                        <div>
                            <img src={assets.gallery_icon} alt=""/>
                            <img src={assets.mic_icon} alt=""/>
                            <img src={assets.send_icon} alt=""/>
                        </div>
                    </div>
                    <p className='bottominfo'>
                        This chatbot may be inaccurate, crosscheck the info.

                    </p>

                </div>

            </div>

        </div>
    )
}
export default Main
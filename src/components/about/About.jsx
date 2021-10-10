import React from 'react';
import './About.css';
import computerImage from '../../images/computers.svg';
import Typewriter from 'typewriter-effect';

const About = () => {
    return (
        <div className="a">
            <div className="a-left">
                <div className="a-bg"></div>
                <div className="a-card">
                    <img src={computerImage} alt="aboutImage" className="a-img" />
                </div>
            </div>

            <div className="a-right">
                <div className="a-right-wrapper">
                    <div className="a-right-title">
                        About <span id="a-title-end">Me</span>  
                    </div>                    

                    <p className="a-desc" id="desc">
                        Final year Computer Science student who's
                        <div className="a-desc-type">
                            <Typewriter
                                options={{
                                    strings: ['Hardworking', 'Proactive', 'Self-Starter', 'Team Player', 'Loves Challenges'],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </div>
                    </p>
                </div>
            </div>
            
        </div>
    )
}

export default About

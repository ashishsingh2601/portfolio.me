import React from 'react';
import './Education.css';
import Typewriter from 'typewriter-effect';

const Education = () => {
    return (
        <div className="e">
            <div className="e-left">
                <div className="e-edu">
                    <div className="e-edu-wrapper">
                        <div className="e-edu-item">
                            <div className="e-edu-item-title">
                                Dr. Akhilesh Das Gupta Institute of Technology and Management
                            </div>
                            <div className="e-edu-item-type">
                                <Typewriter
                                    options={{
                                        strings: ['2018-2022'],
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                                <Typewriter
                                    options={{
                                        strings: ['CGPA: 9.1'],
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                             </div>
                        </div>
                    </div>
                </div>



            </div>
            <div className="e-right">
                <div className="e-right-wrapper">
                    <div className="e-bg"></div>
                    <div className="e-title">Education</div>
                </div>
                
            </div>
            
        </div>
    )
}

export default Education

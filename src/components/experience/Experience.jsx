import React from 'react';
import { Steps, Divider } from 'antd';
import './Experience.css';

const { Step } = Steps;

const Experience = () => {
    return (
        <div className="exp">
            <h1 className="header">Professional E<span id="header-x">x</span>perience</h1>
            <div className="steps">
                <Steps progressDot current={1} direction="vertical">
                    <Step title="JWilliamson.INC" description="Full Stack Web Developer" subTitle="March-July"/>
                    <Step title="CodeChef ADGITM" description="DSA Team" subTitle="Current" />
                </Steps>
            </div>
        </div>
    )
}

export default Experience

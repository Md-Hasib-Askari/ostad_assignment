import React from 'react';
import AboutImg from '../assets/images/about-img.png';

function About() {
    return (
        <section className="bg-white flex items-center justify-center">
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 w-[50%]">
                <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl">About MyLAB</h1>
                <p className="mb-8 text-lg font-normal text-gray-600 lg:text-xl sm:px-16 lg:px-20">
                    Welcome to MyLAB: Your Partner in Scientific Discovery and Laboratory Excellence!
                    <br/>
                    At MyLAB, we are dedicated to advancing scientific research and fostering innovation in the world of laboratory facilities.
                </p>
            </div>
            <div className="text-white w-[50%] h-full">
                <img src={AboutImg} alt=""/>
            </div>
        </section>
    );
}

export default About;
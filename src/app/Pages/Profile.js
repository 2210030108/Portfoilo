"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const Profile = () => {
    const [animationState, setAnimationState] = useState("initial");

    useEffect(() => {
        const animationTimeouts = [];

        const initialTimeout = setTimeout(() => {
            setAnimationState("typing");
            const typingTimeout = setTimeout(() => {
                setAnimationState("remove");
                const removeTimeout = setTimeout(() => {
                    setAnimationState("developer");
                    const developerTimeout = setTimeout(() => {
                        setAnimationState("reverse");
                    }, 2000); // Delay before reversing
                    animationTimeouts.push(developerTimeout);
                }, 3000); // Delay before showing "I'm Developer"
                animationTimeouts.push(removeTimeout);
            }, 3000); // Delay before removing "Sai Venkatesh"
            animationTimeouts.push(typingTimeout);
        }, 1000); // Initial delay before animation starts

        return () => {
            animationTimeouts.forEach(timeout => clearTimeout(timeout));
        };
    }, []);

    return (
        <div className='flex justify-center p-24'>
            <div className="flex flex-row items-center w-full max-w-4xl">
                <div className='flex justify-center w-1/2'>
                    <div className='rounded-full bg-slate-400'>
                        <Image src="/hero.jpg" alt="my" width={500} height={500} />
                    </div>
                </div>
                <div className='w-1/2 pl-8'>
                    <h4 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-lime-500 to-green-400 lg:text-6xl">
                        <AnimatedText animationState={animationState} />
                    </h4>
                    <p className="mt-4 text-slate-900">
                        Sai Venkatesh is a passionate web developer skilled in modern technologies like React, Next.js, and Node.js. He has a strong foundation in programming languages such as C, C++, Python, and Java. Sai is dedicated to continuous learning and thrives on building innovative and efficient web solutions.
                    </p>
                    <div className="mt-6 flex space-x-4 gap-2">
                        <button className='py-3 px-6 rounded-full bg-green-500 text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50'>
                            <a href='/'>Hire Me!</a>
                        </button>
                        <button className='py-3 px-6 rounded-full bg-slate-100 text-slate-900 hover:bg-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-opacity-50'>
                            <a href="/resume.pdf" download>
                                Download Resume
                            </a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

const AnimatedText = ({ animationState }) => {
    let textToShow = "Hello, I'm Sai Venkatesh";

    switch (animationState) {
        case "initial":
            textToShow = "";
            break;
        case "typing":
            textToShow = "Hello, I'm ";
            break;
        case "remove":
            textToShow = "";
            break;
        case "developer":
            textToShow = "I'm Developer";
            break;
        case "reverse":
            textToShow = "Hello, I'm Sai Venkatesh";
            break;
        default:
            textToShow = "Hello, I'm Sai Venkatesh";
    }

    return (
        <span className={`animated-text ${animationState}`}>
            {textToShow}
        </span>
    );
};

export default Profile;

"use client";

import React, { useState } from 'react';
import Image from 'next/image';

const Certificates = () => {
    const items = [
        { imageSrc: '/gov1.jpg', text: 'NASH MUKT BHARAT A3HYAAN ' },
        { imageSrc: '/gov2.jpg', text: 'QUIZ ON INTERNATIONAL PERSON WITH DISABLITIES' },
        { imageSrc: '/gov3.jpg', text: 'HERITAGE QUIZ' },
        { imageSrc: '/and.jpg', text: 'SIGN LANGUAGE QUIZ' },
        { imageSrc: '/c1.png', text: 'THE BITS AND BYTES OF COMPUTER NETWORK' },
        { imageSrc: '/c2.png', text: 'NODE JS DEVELOPER PATH' },
        { imageSrc: '/c3.png', text: 'DEEP LERANING' },
        { imageSrc: '/c5.png', text: 'SUPERVISED LEARNING' },
        { imageSrc: '/c6.png', text: 'CIRCUNO CHALLANGE' },
        { imageSrc: '/c7.png', text: 'CODE CONQUER' },
        { imageSrc: '/c8.png', text: 'BLOCK CHAIN TECHNOLOGY' },
        { imageSrc: '/c4.png', text: 'FACIAL RECOGNITION' },
        { imageSrc: '/c9.png', text: 'AWARNESS ON SAVING ENERGY' },
        { imageSrc: '/c10.png', text: 'SANKRANTI CELEBRATIONS' },
        { imageSrc: '/c11.png', text: 'AWS ACADEMY CLOUD ARCHITECTING' },
        { imageSrc: '/c12.png', text: 'AWS ACADEMY CLOUD FOUNDATION' },
        { imageSrc: '/c13.png', text: 'AWS ACADEMY CLOUD WEB APPLICATION BUILDER' },

    ];

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

    const handleNextPage = () => {
        if (indexOfLastItem < items.length) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div className='container mx-auto px-4 py-8 p-2'>
            <div className='mb-8'>
                <h1 className='text-black font-semibold text-3xl mb-4'>Global Certifications</h1>
                <div className='flex justify-center mb-4'>
                    <Image src="/redhat.png" alt="Global Certification" width={500} height={300} className="rounded-lg" />
                </div>
                <a href='https://www.credly.com/badges/ba5d43fb-7af5-41df-8892-48d00c2ed56f/public_url' className="text-blue-500 hover:underline">Redhat Enterprise Application Developer EX183</a>
            </div>
            <div>
                <h1 className='text-black font-semibold text-3xl mb-4'>Course Completed Certification</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {currentItems.map((item, index) => (
                        <div key={index} className="relative flex flex-col items-center justify-center group">
                            <div className="overflow-hidden rounded-lg">
                                <Image 
                                    src={item.imageSrc} 
                                    alt={`Image ${index + 1}`} 
                                    width={500} 
                                    height={300} 
                                    className="w-full h-auto"
                                />
                            </div>
                            <p className="mt-2 text-center">{item.text}</p>
                        </div>
                    ))}
                </div>
                <div className="flex justify-between mt-6">
                    <button 
                        onClick={handlePreviousPage} 
                        disabled={currentPage === 1} 
                        className={`py-2 px-4 rounded-lg ${currentPage === 1 ? 'bg-gray-300' : 'bg-blue-500 text-white hover:bg-blue-700'}`}
                    >
                        Previous Page
                    </button>
                    <button 
                        onClick={handleNextPage} 
                        disabled={indexOfLastItem >= items.length} 
                        className={`py-2 px-4 rounded-lg ${indexOfLastItem >= items.length ? 'bg-gray-300' : 'bg-blue-500 text-white hover:bg-blue-700'}`}
                    >
                        Next Page
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Certificates;

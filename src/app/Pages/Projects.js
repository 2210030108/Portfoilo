"use client";

import React, { useState } from 'react';
import Image from 'next/image';

const ProjectPage = () => {
  const items = [
    { imageSrc: '/img1.png', text: 'Hospital management system' },
    { imageSrc: 'https://img.freepik.com/free-vector/online-job-interview_23-2148613123.jpg?size=626&ext=jpg&ga=GA1.1.673742711.1719340419&semt=ais_user', text: 'Student management system' },
    { imageSrc: 'https://img.freepik.com/free-vector/goals-habits-tracking-application-template_23-2148653123.jpg?ga=GA1.1.673742711.1719340419&semt=ais_user', text: 'Beauty salon billing app' },
    { imageSrc: 'https://img.freepik.com/free-psd/education-template-design_23-2150326874.jpg?ga=GA1.1.673742711.1719340419&semt=ais_user', text: 'Student Guide Webpage' },
    { imageSrc: 'https://img.freepik.com/free-vector/business-people-arranging-appointment-digital-booking-app_74855-20006.jpg?ga=GA1.1.673742711.1719340419&semt=ais_user', text: 'Chat application' },
    { imageSrc: 'https://img.freepik.com/free-vector/list-concept-illustration_114360-2498.jpg?ga=GA1.1.673742711.1719340419&semt=ais_user', text: 'Todo list' },
    { imageSrc: 'https://img.freepik.com/free-vector/blog-concept-illustration-idea-posting-sharing-following_613284-2970.jpg?ga=GA1.1.673742711.1719340419&semt=sph', text: 'Blog' },
    { imageSrc: 'https://img.freepik.com/free-vector/concept-house-searching-landing-page_52683-26832.jpg?ga=GA1.1.673742711.1719340419&semt=ais_user', text: 'IP location finder' },
    { imageSrc: 'https://img.freepik.com/free-vector/students-studying-reading-library-people-sitting-sofa-bookcases-bookshelves-education-concept-website-design-landing-web-page_74855-9191.jpg?ga=GA1.1.673742711.1719340419&semt=ais_user', text: 'Movie recommendation system' },
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
    <div className="container mx-auto px-4 py-8">
      <h1 className='text-black font-semibold text-3xl mb-6'>Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {currentItems.map((item, index) => (
          <div key={index} className="relative flex flex-col items-center justify-center group">
            <div className="overflow-hidden rounded-lg" style={{ height: '350px' }}>
              <Image 
                src={item.imageSrc} 
                alt={`Image ${index + 1}`} 
                width={500} 
                height={300} 
                className="w-full h-auto transition duration-300 transform hover:scale-105"
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
          className={`py-2 px-4 rounded-lg ${currentPage === 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-700'}`}
        >
          Previous Page
        </button>
        <button 
          onClick={handleNextPage} 
          disabled={indexOfLastItem >= items.length} 
          className={`py-2 px-4 rounded-lg ${indexOfLastItem >= items.length ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-700'}`}
        >
          Next Page
        </button>
      </div>
    </div>
  );
};

export default ProjectPage;

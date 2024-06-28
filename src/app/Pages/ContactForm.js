import React from 'react';

const ContactForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Add logic to handle form submission (e.g., send data to backend, display success message)
        alert('Form submitted!');
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6  shadow-md rounded-md bg-slate-200 outline-green-800 gap-3">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Me</h2>
            <form id="myForm" action="https://formspree.io/f/xkndnqyr" method="post" className="space-y-4">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your Name</label>
                    <input type="text" id="name" name="name" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Your Email</label>
                    <input type="email" id="email" name="email" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" />
                </div>
                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                    <textarea id="message" name="message" rows="4" required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"></textarea>
                </div>
                <div className="flex justify-end">
                    <button type="submit" className="inline-block px-6 py-3 text-white bg-blue-500 hover:bg-blue-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">Send Message</button>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;

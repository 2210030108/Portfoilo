import React from 'react';
import Image from 'next/image';

const AIBootcampSummary = () => {
    return (
        <div className="p-8 text-center w-full">
            <h2 className="text-3xl font-bold mb-6">Swecha Summer of AI Bootcamp Summary</h2>

            <div className="mb-8 text-gradient-from-blue-400 to-blue-600">
                <h3 className="text-xl font-semibold mb-4">What I Learned</h3>
                <p className="text-slate-500 leading-relaxed">
                    During the AI Bootcamp, I gained a deep understanding of machine learning algorithms, including supervised and unsupervised learning techniques. We explored advanced topics such as neural networks, convolutional neural networks (CNNs), and recurrent neural networks (RNNs). Additionally, I learned how to apply these algorithms using popular frameworks like TensorFlow and PyTorch.
                </p>
            </div>

            <div className="mb-8 text-gradient-from-blue-400 to-blue-600">
                <h3 className="text-xl font-semibold mb-4">Projects Completed</h3>
                <p className="text-slate-500 leading-relaxed">
                    One of the notable projects I completed was a sentiment analysis application using natural language processing (NLP). This project involved data preprocessing, model training with LSTM networks, and deploying the model using Flask. Another project focused on image classification using CNNs, where we built a classifier to identify objects in images with high accuracy.
                </p>
            </div>

            <div className="mb-8 text-gradient-from-blue-400 to-blue-600">
                <h3 className="text-xl font-semibold mb-4">Key Takeaways</h3>
                <ul className="list-disc text-slate-500 pl-6">
                    <li>Hands-on experience with state-of-the-art AI tools and technologies.</li>
                    <li>Collaboration and teamwork skills through group projects and peer learning.</li>
                    <li>Practical insights into deploying AI models and integrating them into real-world applications.</li>
                </ul>
            </div>

            <div className="flex justify-center">
                <div className="w-full max-w-4xl overflow-hidden">
                    {/* Example scrolling images */}
                    <div className="flex space-x-4 p-2 -ml-2 overflow-x-auto scrollbar-hide">
                        <Image src="/s1.jpg" alt="Image 1" className="w-full h-auto max-h-96 rounded-lg shadow-md" width={800} height={500} />
                        <Image src="/s2.jpg" alt="Image 2" className="w-full h-auto max-h-96 rounded-lg shadow-md" width={800} height={500} />
                        <Image src="/s3.jpg" alt="Image 3" className="w-full h-auto max-h-96 rounded-lg shadow-md" width={800} height={500} />
                        <Image src="/s4.jpg" alt="Image 4" className="w-full h-auto max-h-96 rounded-lg shadow-md" width={800} height={500} />
                        <Image src="/s5.jpg" alt="Image 5" className="w-full h-auto max-h-96 rounded-lg shadow-md" width={800} height={500} />
                        <Image src="/s6.jpg" alt="Image 6" className="w-full h-auto max-h-96 rounded-lg shadow-md" width={800} height={500} />
                        <Image src="/s7.jpg" alt="Image 7" className="w-full h-auto max-h-96 rounded-lg shadow-md" width={800} height={500} />
                        <Image src="/s8.jpg" alt="Image 8" className="w-full h-auto max-h-96 rounded-lg shadow-md" width={800} height={500} />
                        <Image src="/s9.jpg" alt="Image 9" className="w-full h-auto max-h-96 rounded-lg shadow-md" width={800} height={500} />
                        <Image src="/s10.jpg" alt="Image 10" className="w-full h-auto max-h-96 rounded-lg shadow-md" width={800} height={500} />
                        <Image src="/s11.jpg" alt="Image 11" className="w-full h-auto max-h-96 rounded-lg shadow-md" width={800} height={500} />
                        <Image src="/s12.jpg" alt="Image 12" className="w-full h-auto max-h-96 rounded-lg shadow-md" width={800} height={500} />
                        <Image src="/s13.jpg" alt="Image 13" className="w-full h-auto max-h-96 rounded-lg shadow-md" width={800} height={500} />
                        <Image src="/s14.jpg" alt="Image 14" className="w-full h-auto max-h-96 rounded-lg shadow-md" width={800} height={500} />
                        <Image src="/s15.jpg" alt="Image 15" className="w-full h-auto max-h-96 rounded-lg shadow-md" width={800} height={500} />
                        <Image src="/w1.jpg" alt="Image 10" className="w-full h-auto max-h-96 rounded-lg shadow-md" width={800} height={500} />
                        <Image src="/w2.jpg" alt="Image 11" className="w-full h-auto max-h-96 rounded-lg shadow-md" width={800} height={500} />
                        <Image src="/w3.jpg" alt="Image 12" className="w-full h-auto max-h-96 rounded-lg shadow-md" width={800} height={500} />
                        <Image src="/w4.jpg" alt="Image 13" className="w-full h-auto max-h-96 rounded-lg shadow-md" width={800} height={500} />
                        <Image src="/w5.jpg" alt="Image 14" className="w-full h-auto max-h-96 rounded-lg shadow-md" width={800} height={500} />
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AIBootcampSummary;

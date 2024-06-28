import React from 'react';

const Skills = () => {
    return (
      <div>
        <h2 className="text-3xl font-bold text-center mb-6">Skills</h2>

        {/* Programming Languages Section */}
        <div className="p-8 text-center w-full mb-6">
          <h3 className="text-2xl  font-bold mb-4"><ul>Programming Languages</ul></h3>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-slate-100 shadow-md p-4 rounded-lg flex items-center">
              <img
                src="https://cdn-icons-png.flaticon.com/128/3098/3098090.png"
                alt="Python"
                className="w-8 h-8 mr-2"
              />
              Python
            </div>
            <div className="bg-slate-100 shadow-md p-4 rounded-lg flex items-center">
              <img
                src="https://cdn-icons-png.flaticon.com/128/5968/5968292.png"
                alt="JavaScript"
                className="w-8 h-8 mr-2"
              />
              JavaScript
            </div>
            <div className="bg-slate-100 shadow-md p-4 rounded-lg flex items-center">
              <img src="https://cdn-icons-png.flaticon.com/128/8142/8142820.png" alt="C" className="w-8 h-8 mr-2" />C
            </div>
            <div className="bg-slate-100 shadow-md p-4 rounded-lg flex items-center">
              <img src="https://cdn-icons-png.flaticon.com/128/226/226777.png" alt="Java" className="w-8 h-8 mr-2" />
              Java
            </div>
            <div className="bg-slate-100 shadow-md p-4 rounded-lg flex items-center">
              <img src="https://cdn-icons-png.flaticon.com/128/6132/6132222.png" alt="C++" className="w-8 h-8 mr-2" />
              C++
            </div>
          </div>
        


        <div className=" shadow-md p-8 gap-4 rounded-lg flex items-center">

          <div className="bg-slate-100 shadow-md p-4 rounded-lg flex items-center">
          <img src="https://cdn-icons-png.flaticon.com/128/4429/4429903.png" alt="Os" className="w-8 h-8 mr-2" />
            <h3 className=" mb-4">Operating Systems</h3>

          </div>


          <div className="bg-slate-100 shadow-md p-4 rounded-lg flex items-center">
          <img src="https://cdn-icons-png.flaticon.com/128/12489/12489666.png" alt="DB" className="w-8 h-8 mr-2" />
            <h3 className="mb-4">Database Management</h3>
           
          </div>


          <div className="bg-slate-100 shadow-md p-4 rounded-lg flex items-center">
          <img src="https://cdn-icons-png.flaticon.com/128/2082/2082812.png" alt="CN" className="w-8 h-8 mr-2" />
            <h3 className="font-bold mb-4">Computer Networks</h3>

          </div>

          <div className="bg-slate-100 shadow-md p-4 rounded-lg flex items-center">
          <img src="https://cdn-icons-png.flaticon.com/128/1329/1329016.png" alt="WD" className="w-8 h-8 mr-2" />
            <h3 className="font-bold mb-4">Web Development</h3>

          </div>


          <div className="bg-slate-100 shadow-md p-4 rounded-lg flex items-center">
          <img src="https://cdn-icons-png.flaticon.com/128/3732/3732936.png" alt="CC" className="w-8 h-8 mr-2" />
            <h3 className="font-bold mb-4">Cloud Computing</h3>

          </div>

          <div className="bg-slate-100 shadow-md p-4 rounded-lg flex items-center">
          <img src="https://cdn-icons-png.flaticon.com/128/14491/14491492.png" alt="AI-ML" className="w-8 h-8 mr-2" />
            <h3 className="font-bold mb-4">Machine Learning and AI</h3>

          </div>

          <div className="bg-slate-100 shadow-md p-4 rounded-lg flex items-center">
          <img src="https://cdn-icons-png.flaticon.com/128/4744/4744315.png" alt="cs" className="w-8 h-8 mr-2" />
            <h3 className="font-bold mb-4">Cybersecurity</h3>
  
          </div>
          </div>
  
          <div className="p-8  text-center w-full mb-6 align-middle space-x-3 ">
            <h3 className="font-bold mb-4 text-3xl">Soft Skills</h3>
            <div className="flex items-center space-x-3 justify-center">
            <h1 className='bg-slate-100 shadow-md p-4 rounded-lg '><img src="https://cdn-icons-png.flaticon.com/128/12681/12681113.png" alt="cs" className="w-8 h-8 mr-2" />Communication</h1>
                    <h1 className='bg-slate-100 shadow-md p-4 rounded-lg '><img src="https://cdn-icons-png.flaticon.com/128/5371/5371115.png" alt="cs" className="w-8 h-8 mr-2" />Teamwork</h1>
                    <h1 className='bg-slate-100 shadow-md p-4 rounded-lg '><img src="https://cdn-icons-png.flaticon.com/128/5271/5271506.png" alt="cs" className="w-8 h-8 mr-2" />Adaptability</h1>
                    <h1 className='bg-slate-100 shadow-md p-4 rounded-lg '><img src="https://cdn-icons-png.flaticon.com/128/12105/12105223.png" alt="cs" className="w-8 h-8 mr-2" />Leadership</h1>
                    </div>
          </div>

          <div className="p-8  text-center w-full mb-6 ">
            <h3 className="font-bold mb-4 text-3xl">Additional Skills</h3>
            <div className="flex items-center space-x-3 justify-center">
            <h1 className='bg-slate-100 shadow-md p-4 rounded-lg '><img src="https://cdn-icons-png.flaticon.com/128/9662/9662287.png" alt="cs" className="w-8 h-8 mr-2" />Mobile Development</h1>
                <h1 className='bg-slate-100 shadow-md p-4 rounded-lg '><img src="https://cdn-icons-png.flaticon.com/128/1449/1449312.png" alt="cs" className="w-8 h-8 mr-2" />Data Science:</h1>
                <h1 className='bg-slate-100 shadow-md p-4 rounded-lg '><img src="https://cdn-icons-png.flaticon.com/128/5956/5956592.png" alt="cs" className="w-8 h-8 mr-2" />Project Management</h1>
                </div>
          </div>
        </div>
      </div>
    );
};

export default Skills;

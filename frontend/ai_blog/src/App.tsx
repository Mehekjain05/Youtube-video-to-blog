import './App.css'
import React, { useState } from 'react'
import Navbar from './Navbar'

function App() {
  const [video, setVideo] = useState('');
  const [blog, setBlog] = useState('');

  const fetchData = async () => {
    try {
      const response = await fetch('api/home', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ video_id: video })
      });

      const data = await response.json();
      setBlog(data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className='overflow-y-hidden overflow-x-hidden'>
      <Navbar />
      <div className='border-[1px] border-amber-50'></div>
      <div className='w-[99vw] text-white bg-gray-900 flex flex-col items-center'>
        {/* Input for Video ID */}
        <label className="block mb-2 text-sm font-medium dark:text-white mt-4">Youtube Video ID</label>
        <input
          type="text"
          value={video}
          onChange={(e) => setVideo(e.target.value)} // Update state on change
          className="block p-2 text-slate-600 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-96 mb-4"
        />

        {/* Fetch Button */}
        <button
          onClick={fetchData}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 mb-5 mt-4"
        >
          Generate Blog
        </button>

        {/* AI Blog Output */}
        <label className="block mb-2 text-sm font-medium dark:text-white">AI Blog Generator</label>
        {/* <textarea
          value={blog}
          readOnly
          className="block h-[500px] text-slate-600 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-[60%] p-2 text-[16px]"
        ></textarea> */}
        <div
          className="prose dark:prose-invert w-[60%] bg-gray-50 dark:bg-gray-700 p-4 rounded-lg"
          dangerouslySetInnerHTML={{ __html: blog }}
        ></div>
      </div>
    </div>
  );
}

export default App;

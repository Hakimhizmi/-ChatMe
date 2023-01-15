import './App.css';
import React, { useEffect, useState } from 'react';


function App() {
  const [val, setVal] = useState()


  
  async function handlerclick() {
    document.querySelector("#input").value = "";
    document.getElementById("qestion").innerHTML = val ;
    let response = await fetch(`http://127.0.0.1:5000/ask?q=${val}`)
    response = await response.json()
    document.getElementById("reponse").innerHTML = response.ans
  }
  function search(event) {
    if(event.key === 'Enter') {
      handlerclick()
    }
}

  return (
    <div className="flex-1 p:2 sm:p-6 justify-between flex flex-col h-screen">
      <div className="flex sm:items-center justify-between py-3 border-b-2 border-gray-200">
        <a href="" class="text-lg font-semibold tracking-widest text-gray-900 uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline">@CHAT ME</a>

      </div>
      <div id="messages" className="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch">

        <div className="chat-message">
          <div className="flex items-end justify-end">
            <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
              <div><span id='reponse' className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white ">...</span></div>
            </div>
            <img src="https://i.pinimg.com/originals/dc/30/1d/dc301dd6fac108a2a60f103e01539f04.jpg" alt="My profile" className="w-6 h-6 rounded-full order-2" />
          </div>
        </div>
        <div className="chat-message">
          <div className="flex items-end">
            <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
              <div><span id='qestion' className="px-2 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">...</span></div>
            </div>
            <img src="https://editzstock.com/wp-content/uploads/2022/05/Name-logo-png.jpg" alt="My profile" className="w-6 h-6 rounded-full order-1" />
          </div>
        </div>




      </div>
      <div className="border-t-2 border-gray-200 px-4 pt-4 mb-2 sm:mb-0">
        <div className="relative flex">
          <input onKeyDown={(e)=>search(e)} id='input'  type="text" onChange={(e) => { setVal(e.target.value) }} placeholder="Write your message!" className="w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-12 bg-gray-200 rounded-md py-3" />
          <div className="absolute right-0 items-center inset-y-0 hidden sm:flex">
            <button onClick={() => handlerclick()} type="button" className="inline-flex items-center justify-center rounded-lg px-4 py-3 transition duration-500 ease-in-out text-white bg-blue-500 hover:bg-blue-400 focus:outline-none">
              <span className="font-bold">- ---</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-6 w-6 ml-2 transform rotate-90">
                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

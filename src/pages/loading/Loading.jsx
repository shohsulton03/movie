import React from "react";

const Loading = () => {
  return (
    <div className="bg-black text-white">
      <div className="flex flex-wrap items-center justify-around py-4 bg-slate-800 w-full">
        <div className="w-full h-[36px]"></div>
      </div>
      <div className="flex flex-col items-center mt-3">
        <div className="container w-[900px] h-[400px] relative rounded-xl bg-slate-800"></div>
      </div>
      <div className="bg-slate-700 flex gap-4 mt-3 w-[450px] mx-auto">
        <div className="w-[25%] h-12 bg-slate-800 rounded-lg"></div>
        <div className="w-[25%] h-12 bg-slate-800 rounded-lg"></div>
        <div className="w-[25%] h-12 bg-slate-800 rounded-lg"></div>
        <div className="w-[25%] h-12 bg-slate-800 rounded-lg"></div>
      </div>
      <div className="w-[970px] flex justify-between flex-row container mt-3">
        <div className="w-[20%] h-5 bg-slate-800 rounded-xl "></div>
        <div className="w-[20%] h-5 bg-slate-800 rounded-xl"></div>
      </div>
      <div className="container justify-center flex gap-4 mt-3">
        <div>
          <div className="bg-slate-800 w-56 rounded-lg h-[300px]"></div>
          <div className="w-[60%] h-6 bg-slate-800 rounded-lg mt-2"></div>
        </div>
        <div>
          <div className="bg-slate-800 w-56 rounded-lg h-[300px]"></div>
          <div className="w-[60%] h-6 bg-slate-800 rounded-lg mt-2"></div>
        </div>
        <div>
          <div className="bg-slate-800 w-56 rounded-lg h-[300px]"></div>
          <div className="w-[60%] h-6 bg-slate-800 rounded-lg mt-2"></div>
        </div>
        <div>
          <div className="bg-slate-800 w-56 rounded-lg h-[300px]"></div>
          <div className="w-[60%] h-6 bg-slate-800 rounded-lg mt-2"></div>
        </div>
      </div>
      <div className="bg-slate-800 container mx-auto h-44 mt-4 rounded-lg"></div>
    </div>
  );
};

export default Loading;

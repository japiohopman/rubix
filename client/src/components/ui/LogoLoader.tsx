import React from 'react';

const LogoLoader: React.FC = () => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-900 overflow-hidden fade-in-out">
      <img src="/assets/DAI.png" alt="DAI Artsen Logo" className="h-32 w-auto animate-pulse" />
      <div className="flex flex-col items-center gap-2 mt-8">
        <div className="text-teal-400 text-lg font-medium tracking-widest uppercase animate-shimmer">
          Laden...
        </div>
        <div className="w-48 h-1 bg-slate-800 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-teal-500 to-emerald-500 animate-[loading_2s_ease-in-out_infinite]"></div>
        </div>
      </div>
    </div>
  );
};

export default LogoLoader;

/** @format */

import React from "react";

const ThreeDGlassCard = () => {
  return (
    // Background Container (with pattern to enhance blur/depth)
    <div className='min-h-screen flex items-center justify-center p-6 relative bg-[#0a0a0c] overflow-hidden'>
      {/* Dynamic Background Elements for depth perception */}
      <div className='absolute top-1/4 left-1/4 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob'></div>
      <div className='absolute bottom-1/4 right-1/3 w-72 h-72 bg-gray-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000'></div>

      {/* The 3D Glass Volume */}
      <div
        className='
        relative 
        w-full max-w-sm 
        p-1 
        rounded-[2.5rem] 
        transition-transform duration-500 hover:scale-105
        
        /* 1. External Shadow (Lifts the card off the page) */
        shadow-[0_20px_80px_-15px_rgba(0,0,0,0.7)]
      '>
        {/*
          2. Multiple Border Layers (Creates the 'Bevel' edge)
          This inner div defines the volume.
        */}
        <div
          className='
          w-full 
          p-9
          rounded-[2.4rem] 
          bg-gradient-to-br from-white/10 to-transparent
          backdrop-blur-xl 

          /* Top & Left Bevel (Light catcher) */
          border-t border-l border-white/20 
          
          /* Bottom & Right Bevel (Shadow edge) */
          border-b border-r border-black/30
          
          /* Inner Glow/Shadow for volume */
          shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),_inset_0_-1px_1px_rgba(0,0,0,0.4)]
        '>
          {/* Graphite Accent Glow */}
          <div className='absolute top-0 right-10 w-24 h-1 bg-gray-400/30 blur-sm rounded-full'></div>

          {/* Content */}
          <div className='relative z-10'>
            <h2 className='text-3xl font-extrabold text-white mb-3 tracking-tight'>
              Depth Glass
            </h2>

            <p className='text-gray-400 leading-relaxed mb-8'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis veritatis cum dolore illo commodi, impedit, natus perferendis esse?  Cum exercitationem officiis obcaecati voluptates ullam, quo earum fugiat neque animi repellat?
              Sequi provident id expedita qui ea. Similique quis harum voluptates dolor placeat perspiciatis nesciunt fuga, iure atque? Eligendi eveniet sit, ullam eos architecto aliquid quos. Optio doloremque fugit dolorem quidem.
            </p>

            <button
              className='
              group
              w-full 
              py-4 
              px-8 
              rounded-2xl 
              bg-white text-[#0a0a0c]
              font-bold 
              transition-all duration-300
              hover:bg-red-700/50
              shadow-[0_10px_30px_-10px_rgba(255,255,255,0.3)]
              hover:shadow-[0_15px_40px_-8px_rgba(255,255,255,0.4)]
            '>
              Interact
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreeDGlassCard;

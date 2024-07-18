import React from 'react'
import MotionGraphicsReel from './components/workItems/MotionGraphicsReel';

function MotionGraphics() {

  const MotionGraphicsReels = {
    vid1: '/videos/Gita jeevan geet motion graphics.mp4',
    vid2: '/videos/divy gita satsang motion graphics.mp4',
    vid3: '/videos/divy gita satsang motion graphics video.mp4',
    vid4: '/videos/Gita jeevan geet motion graphics.mp4',
    vid5: '/videos/Gita jeevan geet motion graphics.mp4',
    vid6: '/videos/Gita jeevan geet motion graphics.mp4',
  };
  return (
    <div>
        <h2 className="text-2xl">Motion Graphics:- </h2>
        <p className="text-xl text-slate-600 text-justify">
          To creating Motion Graphics or animations, I mostly use Adobe After
          Effects.
        </p>
        <div className="flex flex-wrap gap-2 my-3 justify-between">
          {Object.entries(MotionGraphicsReels).map(([key, src], index) => {
            if (index > 3) return;
            return <MotionGraphicsReel key={key} src={src} />;
          })}
        </div>
        
          
            
          
        
      </div>
  )
}

export default MotionGraphics
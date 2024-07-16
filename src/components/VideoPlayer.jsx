import React from 'react';
import ReactPlayer from 'react-player';

const VideoPlayer =({ url, width = '100%', height = '100%' }) => {
  return (
    <div className="flex justify-center ">
      <div className="w-full md:w-2/3 lg:w-1/2">
        <ReactPlayer url={url} controls width={width} height={height} />
      </div>
    </div>
  );
};

export default VideoPlayer;

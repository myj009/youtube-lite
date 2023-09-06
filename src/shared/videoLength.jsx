import React from "react";
import moment from "moment";

const VideoLength = ({ time }) => {
  const videoLengthInSeconds = moment()
    .startOf("day")
    .seconds(time)
    .format("H:mm:ss");

  return (
    <div className="absolute bottom-2 right-2 bg-black py-1 px-2 text-xs text-white rounded-md">
      {videoLengthInSeconds}
    </div>
  );
};

export default VideoLength;

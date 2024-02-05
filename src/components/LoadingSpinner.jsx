import React from "react";
import BounceLoader from "react-spinners/BounceLoader";

function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center h-[50vh]">
      <BounceLoader color="#3b82f6" />
    </div>
  );
}

export default LoadingSpinner;

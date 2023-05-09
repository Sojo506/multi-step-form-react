import { useState } from "react";

const useResize = () => {
  const [dimension, setDimension] = useState("");

  const handleResize = () => {
    const { innerWidth } = window;
    let dimension = "";
    if (innerWidth < 768) {
      dimension = "mobile";
    } else {
      dimension = "desktop";
    } /* else {
      dimension = "large";
    } */
    setDimension(dimension);
  };

  return {
    handleResize,
    dimension,
  };
};
export default useResize;

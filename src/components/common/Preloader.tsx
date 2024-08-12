import React, { useEffect } from "react";

const Preloader: React.FC = () => {
  useEffect(() => {
    const preloader = document.getElementById("preloader");
    const handleLoad = () => {
      if (preloader) preloader.remove();
    };
    window.addEventListener("load", handleLoad);
    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return <div id="preloader"></div>;
};

export default Preloader;
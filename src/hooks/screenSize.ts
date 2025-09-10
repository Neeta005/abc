import { useEffect, useState } from "react";

const useScreenSize = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
console.log("screen size is ", isSmallScreen)
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    handleResize(); 

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isSmallScreen;
};
export default useScreenSize;


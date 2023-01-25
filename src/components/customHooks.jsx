import { useState, useEffect } from "react";

export const useScreenWidth = (limit, handler, width) => {
  useEffect(() => {
    if (width <= limit) {
      handler(true);
    } else {
      handler(false);
    }
  }, [width, handler, limit]);
};

export function useWindowDimensions() {
  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  }

  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}

export const useScroll = (limit, handler) => {
  useEffect(() => {
    const handleIsYScreenScrolled = () => {
      if (window.scrollY >= limit) {
        handler(true);
      } else {
        handler(false);
      }
    };

    window.addEventListener("scroll", handleIsYScreenScrolled);

    return () => window.removeEventListener("scroll", handleIsYScreenScrolled);
  }, [handler, limit]);
};

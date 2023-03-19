import { useState, useEffect, useRef } from "react";
import axios from "axios";

// Changes the handler's state to false or true, depending on wether the width of the screen is reached the limit or not
export const useScreenWidth = (limit, handler, width) => {
  useEffect(() => {
    if (width <= limit) {
      handler(true);
    } else {
      handler(false);
    }
  }, [width, handler, limit]);
};

// Returns the current height and with of the screen in pixels
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

// Changes the handler's state to false, if the horizontal scrolling on the screen reached the limit
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

// Old implementation, soon to be removed
export const useFetchData = (url, handler) => {
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(url);
      handler(request.data.results);
    }
    fetchData();
  }, [url, handler]);
};

//TODO
export const useFilterData = (url, handler, input) => {
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(url);
      handler(request.data.results);
    }
    fetchData();
  }, [url, handler, input]);
};

// Changes the handler's state to false, if the mouse is inside or outside the element it's attached to during an event
export const useMouseOutside = (handler) => {
  let domNode = useRef();

  useEffect(() => {
    document.addEventListener(
      "mousedown",
      (event) => {
        if (!domNode.current.contains(event.target)) {
          handler(false);
        }
      },
      []
    );

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return domNode;
};

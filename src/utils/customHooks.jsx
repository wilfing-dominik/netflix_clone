import { useState, useEffect, useRef } from "react";
import axios from "axios";

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

export const useMouseOutside = (handler) => {
  let domNode = useRef();

  useEffect(() => {
    document.addEventListener("mousedown", (event) => {
      if (!domNode.current.contains(event.target)) {
        handler(false);
      }
    });

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });
  return domNode;
};

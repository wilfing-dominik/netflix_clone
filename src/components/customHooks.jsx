import { useEffect } from "react";

export const useScreenWidth = (limit, handler, width) => {
  useEffect(() => {
    if (width <= limit) {
      handler(true);
    } else {
      handler(false);
    }
  }, [width, handler, limit]);
};

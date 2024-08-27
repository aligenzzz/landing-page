import { useEffect } from "react";

export const useBlockScrolling = (isHidden) => {
  useEffect(() => {
    document.body.style.overflow = isHidden ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isHidden]);
};

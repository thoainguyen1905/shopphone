import React from "react";
import { useMediaQuery } from "react-responsive";

export const useScreenQuery = () => {
  const isDesktop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isMobile = useMediaQuery({
    query: "(max-width: 560px)",
  });
  return { isDesktop, isMobile };
};

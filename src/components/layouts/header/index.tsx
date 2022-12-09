import React, { useState, useEffect } from "react";
import styled from "styled-components";
import HeaderBody from "./headerBody";
import HeaderTop from "./headerTop";
import HeaderMob from "./headerMob";
import { useScreenQuery } from "@hooks/useScreenQuery";

function Header() {
  const { isMobile, isDesktop } = useScreenQuery();
  const [scrollPosition, setScrollPosition] = useState<any>(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };
  console.log({ scrollPosition });

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      {isDesktop && (
        <ScrollViewHeader valueScroll={scrollPosition}>
          <HeaderTop scrollPosition={scrollPosition} />
          <HeaderBody />
        </ScrollViewHeader>
      )}
      {isMobile && <HeaderMob />}
    </div>
  );
}

const ScrollViewHeader: any = styled.div`
  width: 100%;
  height: auto;
  top: 0;
  left: 0;
  z-index: 10;
  right: 0;
  background-size: cover;
  animation-duration: 0.6s;
  animation-timing-function: ease;
  animation-delay: 0s;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation-name: stuckMoveDown;
  box-shadow: 1px 1px 10px rgb(0 0 0 / 15%);
  -webkit-transition: background 0.5s ease-out;
  -moz-transition: background 0.5s ease-out;
  -o-transition: background 0.5s ease-out;
  transition: background 0.5s ease-out;
  position: ${(props: any) => (props.valueScroll > 200 ? "fixed" : "relative")};
`;

export default Header;

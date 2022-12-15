import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Styles from "./style.module.scss";
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

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  console.log(scrollPosition);

  return (
    <div>
      {isDesktop && (
        <ScrollViewHeader
          valueScroll={scrollPosition}
          className={
            scrollPosition > 250 ? `${Styles.stuck}` : `${Styles.stumb}`
          }
        >
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
  /* height: auto; */
  position: relative;
  z-index: 30;
  background-size: cover;
  background-position-x: 50%;
  background-position-y: 0px;
  box-shadow: 1px 1px 10px rgb(0 0 0 / 15%);
  transition-duration: 0.3s, 0.3s;
  transition-timing-function: ease, ease;
  transition-delay: 0s, 0s;
  transition-property: background-color, opacity;
  transition: background-color 0.3s, opacity 0.3s;
`;

export default Header;

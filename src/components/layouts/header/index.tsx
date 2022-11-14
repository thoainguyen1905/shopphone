import React from "react";
import HeaderBody from "./headerBody";
import HeaderTop from "./headerTop";
import { useScreenQuery } from "@hooks/useScreenQuery";

function Header() {
  const { isMobile, isDesktop } = useScreenQuery();

  return (
    <div>
      {isDesktop && (
        <>
          <HeaderTop />
          <HeaderBody />
        </>
      )}
    </div>
  );
}

export default Header;

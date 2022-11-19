import React from "react";
import HeaderBody from "./headerBody";
import HeaderTop from "./headerTop";
import HeaderMob from "./headerMob";
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
      {isMobile && <HeaderMob />}
    </div>
  );
}

export default Header;

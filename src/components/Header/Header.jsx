// Bài 3: chọn Desktop hay Mobile
// 1. isMobile = useMobileDetect()
// 2. menu = useMenu()
// 3. isMobile ? <HeaderMobile menu={menu} /> : <HeaderDesktop menu={menu} />
import HeaderDesktop from "./HeaderDesktop.jsx";
import useMobileDetect from "../../hooks/useMobileDetect.js";
import  useMenu from "../../hooks/useMenu";

// TODO: import useMobileDetect, useMenu, HeaderMobile

function Header() {
  const isMobile = useMobileDetect();
  const menu = useMenu();

  if (isMobile) return null;
  return <HeaderDesktop menu={menu} />;
}

export default Header;

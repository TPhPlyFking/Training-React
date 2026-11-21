// Bài 3: chọn Desktop hay Mobile
// 1. isMobile = useMobileDetect()
// 2. menu = useMenu()
// 3. isMobile ? <HeaderMobile menu={menu} /> : <HeaderDesktop menu={menu} />
import HeaderDesktop from "./HeaderDesktop.jsx";
// TODO: import useMobileDetect, useMenu, HeaderMobile

function Header() {
  // TODO
  return <HeaderDesktop />;
}

export default Header;

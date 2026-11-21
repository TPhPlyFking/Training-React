// Bài 3: Header (file cha) - chọn giao diện Desktop hay Mobile
// Giống Header.jsx bên react_component, thêm menu lấy từ API.
//
// Viết ý trước:
// 1. isMobile = useMobileDetect()   (Bài 2)
// 2. menu = useMenu()               (Bài 1, API: /api/menu.json)
// 3. isMobile ? <HeaderMobile menu={menu} /> : <HeaderDesktop menu={menu} />
import HeaderDesktop from "./HeaderDesktop.jsx";
// TODO: import useMobileDetect, useMenu, HeaderMobile

function Header() {
  // TODO
  return <HeaderDesktop />;
}

export default Header;

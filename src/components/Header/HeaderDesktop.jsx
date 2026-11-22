// Bài 3: Header desktop (Figma: Desktop 1440, phần header)
// Logo (trái) | nav (giữa) | nút "Đăng nhập" (phải)
// Nhận prop menu: menu.map(...) ra các link, key = link.id
import logoIcon from "../../assets/logo.svg";


function HeaderDesktop({menu}) {
  return (
    <header className="header-desktop">
      <div className="header-content">
        <div className="header-logo">
          <img src={logoIcon} alt="logo" className="logo-icon"/>
          <p>BookNest</p>
        </div>

        <nav className="header-link"> 

        </nav>

      </div>
    </header>
  );
}

export default HeaderDesktop;

// Bài 3: Header desktop (Figma: Desktop 1440, phần header)
// Logo (trái) | nav (giữa) | nút "Đăng nhập" (phải)
// Nhận prop menu: menu.map(...) ra các link, key = link.id
import logoIcon from "../../assets/logo.svg";
import { Button } from "antd";

function HeaderDesktop({menu = []}) {
  return (
    <header className="header-desktop">
      <div className="header-content">
        <div className="header-logo">
          <img src={logoIcon} alt="logo" className="logo-icon"/>
          <p>BookNest</p>
        </div>
        
        
        <nav className="header-link" > 
          {menu.map((link) => (
            <a key= {link.id} href={link.href}>{link.label}</a>
          ))}
        </nav>
      
      <Button className="btn-sign" type="primary" size="large" style={{
        background:"#C2410C",
        color:"#FFF"
      }}>Đăng nhập</Button>

      </div>
    </header>
  );
}

export default HeaderDesktop;

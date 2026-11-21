// Bài 3 + Bài 4: Header mobile + menu trượt từ phải
// Figma: frame "Mobile – BookNest (390)" và "Mobile – Menu mở (390)"
//
// Bài 3 - Header: logo (trái) | nút menu 3 gạch (phải)
//   1. <header className="header-mobile">
//   2. Logo giống desktop nhưng nhỏ hơn
//   3. Nút 3 gạch: <button className="btn-menu"> với 3 <span>
//
// Bài 4 - Menu trượt (useState), nhận prop `menu` từ API:
//   1. const [isOpen, setIsOpen] = useState(false)
//   2. Lớp nền mờ .menu-overlay: bấm vào thì đóng
//   3. Bảng .menu-panel: thêm class "open" khi isOpen (xem HeaderMobile bên react_component)
//   4. Trong bảng: chữ "Menu" + nút X, menu.map(...) ra 4 link (nhớ key), nút "Đăng nhập"
//   5. Bấm X, nền mờ, hoặc 1 link -> đóng

function HeaderMobile() {
  return (
    <header className="header-mobile">
      
    </header>
  );
}

export default HeaderMobile;

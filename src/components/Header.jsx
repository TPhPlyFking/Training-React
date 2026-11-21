// Bài 1 + Bài 2 + Bài 3: Header
// Figma: Desktop -> logo trái | nav giữa | nút "Đăng nhập" phải.
//        Mobile  -> logo trái | nút menu 3 gạch phải. Bấm menu -> bảng trượt từ phải.
//
// Viết ý bằng comment trước, rồi mới viết JSX:
// Bài 1: <header> -> logo -> nav 4 link -> nút "Đăng nhập"
// Bài 2: const isMobile = useMobileDetect(); mobile thì trả về header mobile
// Bài 3: const [isOpen, setIsOpen] = useState(false); lớp nền mờ + bảng menu

// TODO (Bài 2): import useMobileDetect từ "../hooks/useMobileDetect.js"
// TODO (Bài 3): import useState

function Header() {
  return (
    <header className="header">
      {/* TODO */}
    </header>
  );
}

export default Header;

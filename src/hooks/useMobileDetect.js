// Bài 2: Hook nhận biết đang ở màn hình mobile hay không
// Trả về true khi màn hình <= 768px, false khi lớn hơn.
// Kéo nhỏ / kéo to cửa sổ thì giá trị phải tự đổi theo.
//
// Viết ý trước:
// 1. Tạo mediaQuery bằng window.matchMedia("(max-width: 768px)")
// 2. useState với giá trị ban đầu là mediaQuery.matches
// 3. useEffect: lắng nghe sự kiện "change" -> cập nhật state bằng e.matches
// 4. Nhớ return hàm dọn dẹp (removeEventListener)
// 5. return state

import { useState, useEffect } from "react";

function useMobileDetect() {
  const mediaQuery = window.mediaQuery("(max-width: 768px)");
  const [isMobile, setIsMobile] = useState(mediaQuery.matches);

  useEffect (() => {
    const handleChange = (event) => {
      setIsMobile(event.matches);
    }

    addEventListener.mediaQuery("change", handleChange);
    return () => {
      removeEventListener.mediaQuery("change", handleChange);
    }

  }, []);
  return isMobile;
}

export default useMobileDetect;

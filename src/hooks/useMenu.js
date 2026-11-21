// Bài 1: Hook lấy 4 link menu (Trang chủ, Sách, Tác giả, Liên hệ) từ API
//
// >>> ĐƯỜNG DẪN API: "/api/menu.json"
// >>> File thật nằm ở: public/api/menu.json
// >>> Mở http://localhost:5173/api/menu.json để xem dữ liệu. Mỗi link có: id, label, href
//
// Viết ý trước (giống useClassrooms bên react_component):
// 1. 1 state: menu (mảng rỗng)
// 2. useEffect chạy 1 lần: const data = await fetchApiData(API_URL)
// 3. data === null thì dừng (return), ngược lại setMenu(data)
// 4. return menu
//
// Dùng ở: components/Header/Header.jsx, rồi truyền xuống Desktop/Mobile bằng props

import { useState, useEffect } from "react";
import { fetchApiData } from "../api/apiHelper.js";

const API_URL = "/api/menu.json";

function useMenu() {
  // TODO
}

export default useMenu;

// Bài 1: Hook lấy danh sách sách từ API
//
// >>> ĐƯỜNG DẪN API: "/api/books.json"
// >>> File thật nằm ở: public/api/books.json (Vite phục vụ thư mục public ở gốc nên bỏ chữ "public")
// >>> Mở http://localhost:5173/api/books.json để xem dữ liệu.
// Gọi API bằng fetchApiData (src/api/apiHelper.js): trả về mảng sách, hoặc null nếu lỗi.
//
// Viết ý trước:
// 1. 3 state: books (mảng rỗng), loading (true), error (null)
// 2. useEffect chạy 1 lần lúc đầu (mảng phụ thuộc rỗng [])
// 3. Bên trong: hàm async loadData -> const data = await fetchApiData(API_URL)
// 4. data === null -> setError("Không tải được dữ liệu"), ngược lại setBooks(data)
// 5. Cuối cùng setLoading(false)
// 6. return { books, loading, error }
//
// Dùng ở: components/BookList/BookList.jsx

import { useState, useEffect } from "react";
import { fetchApiData } from "../api/apiHelper.js";

const API_URL = "/api/books.json";

function useBooks() {
  // TODO
}

export default useBooks;

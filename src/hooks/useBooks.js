// Bài 9: Hook lấy danh sách sách từ API
// API giả: "/api/books.json" (file nằm trong thư mục public/api)
// Dữ liệu trả về có dạng: { status: "success", data: [ ...sách ] }
//
// Viết ý trước:
// 1. 3 state: books (mảng rỗng), loading (true), error (null)
// 2. useEffect chạy 1 lần lúc đầu (mảng phụ thuộc rỗng [])
// 3. Bên trong: hàm async, dùng fetch -> kiểm tra res.ok -> res.json()
// 4. Thành công: setBooks(json.data). Lỗi: setError(...)
// 5. Cuối cùng (finally): setLoading(false)
// 6. return { books, loading, error }

import { useState, useEffect } from "react";

const API_URL = "/api/books.json";

function useBooks() {
  // TODO
}

export default useBooks;

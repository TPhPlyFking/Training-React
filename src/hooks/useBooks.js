// Bài 1: lấy danh sách sách từ API
// API: "/api/books.json"  (file thật: public/api/books.json, khi gọi bỏ chữ "public")
//
// 1. state: books ([]), loading (true), error (null)
// 2. useEffect chạy 1 lần: const data = await fetchApiData(API_URL)
// 3. data === null -> setError("Không tải được dữ liệu"), ngược lại setBooks(data)
// 4. setLoading(false) ở cuối
// 5. return { books, loading, error }

import { useState, useEffect } from "react";
import { fetchApiData } from "../api/apiHelper.js";

const API_URL = "/api/books.json";

function useBooks() {
  // TODO
}

export default useBooks;

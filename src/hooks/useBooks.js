// Bài 1: lấy danh sách sách từ API
// API: "/api/books.json"  (file thật: public/api/books.json, khi gọi bỏ chữ "public")
//
// 1. state: books ([])
// 2. useEffect chạy 1 lần: const data = await fetchApiData(API_URL)
// 3. data === null thì return, ngược lại setBooks(data)
// 4. return books

import { useState, useEffect } from "react";
import { fetchApiData } from "../api/apiHelper.js";

const API_URL = "/api/books.json";

export default function useBooks() {
  const [books, setBooks] = useState([]);
  useEffect (()=>{
    async function loadData() {
      const data = await fetchApiData(API_URL);
      
      if (data === null) return;
      setBooks(data);
    }
    loadData();
  }, []);
  return books;
}



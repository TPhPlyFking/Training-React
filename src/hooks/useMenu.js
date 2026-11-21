// Bài 1: lấy 4 link menu từ API
// API: "/api/menu.json"  (file thật: public/api/menu.json). Mỗi link có: id, label, href
//
// 1. state: menu ([])
// 2. useEffect chạy 1 lần: const data = await fetchApiData(API_URL)
// 3. data === null thì return, ngược lại setMenu(data)
// 4. return menu

import { useState, useEffect } from "react";
import { fetchApiData } from "../api/apiHelper.js";

const API_URL = "/api/menu.json";

function useMenu() {
  // TODO
}

export default useMenu;

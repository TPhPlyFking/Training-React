// Hàm dùng chung để gọi API - giống src/api/apiHelper.jsx bên react_component.
// Mọi hook (useBooks, useMenu) đều gọi qua hàm này, nên chuyện fetch, kiểm tra lỗi nằm ở 1 chỗ.
//
// fetchApiData("/api/books.json") -> trả về json.data, hoặc null nếu lỗi.
// (Bên react_component dùng axios; ở đây dùng fetch có sẵn của trình duyệt nên không cần cài thêm.)

export async function fetchApiData(endpoint) {
  try {
    const res = await fetch(endpoint);
    if (!res.ok) {
      console.error("API báo lỗi:", endpoint, res.status);
      return null;
    }

    const json = await res.json();
    if (json.status !== "success") {
      console.error("API báo lỗi:", endpoint, json.status);
      return null;
    }

    return json.data;
  } catch (err) {
    console.error("Không gọi được API:", endpoint, err.message);
    return null;
  }
}

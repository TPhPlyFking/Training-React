// Hàm chung gọi API: trả về json.data, hoặc null nếu lỗi.
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

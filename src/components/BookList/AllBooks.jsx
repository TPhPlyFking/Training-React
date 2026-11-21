// Bài 7: Nút "Xem tất cả" / "Thu gọn" - dùng chung cho desktop và mobile
// Figma: btn-all (desktop 200x52, mobile 200x48), nền cam, chữ trắng, có mũi tên chevron-down
//
// Nhận props từ BookList: showAll (true/false) và onClick
// 1. <button className="btn-all" onClick={onClick}>
// 2. Chữ: showAll ? "Thu gọn" : "Xem tất cả"
// 3. Khoảng cách trên và dưới nút bằng nhau (40px desktop, 24px mobile)

function AllBooks() {
  return (
    <button className="btn-all">
      
    </button>
  );
}

export default AllBooks;

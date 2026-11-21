// Bài 5: Một thẻ sách - DESKTOP
// Figma: component "BookCard" (State=Collapsed / State=Expanded)
// Bố cục: ô bìa (trái) | phần chữ (phải): tên sách, tác giả, giá, giới thiệu, nút "Xem thêm"
//
// Nhận props { book } từ BookListDesktop. Một book (từ /api/books.json) có:
//   id, title, author, price, color, intro
// 1. Màu ô bìa: style={{ backgroundColor: book.color }}; tên sách + tác giả nằm góc dưới ô bìa
// 2. Giá dạng 320.000 đ (gợi ý: toLocaleString)
// 3. book.intro là 1 chuỗi có \n -> split("\n") rồi map, nhớ key. Mỗi dòng có dấu ▸ cam
// 4. Nút "Xem thêm" / "Thu gọn" (useState):
//    - lúc đầu chỉ hiện 2 dòng giới thiệu đầu (slice(0, 2))
//    - mỗi thẻ có state riêng nên mở nhiều thẻ cùng lúc được

function BookCardDesktop() {
  return (
    <article className="book-card-desktop">
      
    </article>
  );
}

export default BookCardDesktop;

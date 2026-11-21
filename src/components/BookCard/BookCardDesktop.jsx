// Bài 5: Thẻ sách desktop (Figma: BookCard, Collapsed / Expanded)
// Nhận props { book }: id, title, author, price, color, intro
// - Ô bìa (trái): màu từ book.color, tên + tác giả ở góc dưới
// - Chữ (phải): tên, tác giả, giá dạng 320.000 đ, giới thiệu, nút "Xem thêm"
// - book.intro có \n -> split("\n") rồi map, key
// - useState: lúc đầu chỉ hiện 2 dòng (slice(0, 2)), bấm nút hiện hết / "Thu gọn"

function BookCardDesktop() {
  return (
    <article className="book-card-desktop">
      
    </article>
  );
}

export default BookCardDesktop;

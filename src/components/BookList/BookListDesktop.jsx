// Bài 6: Danh sách thẻ - DESKTOP
// Figma: frame "book-list" trong "Desktop – BookNest (1440)"
// Nhận books (mảng từ API) từ BookList qua props.
//
// 1. Tiêu đề "Sách nổi bật"
// 2. Vùng cards: books.map(...) vẽ ra <BookCardDesktop book={...} />, nhớ key (dùng book.id)
//    Các thẻ xếp dọc, cách nhau 24px
import BookCardDesktop from "../BookCard/BookCardDesktop.jsx";

function BookListDesktop() {
  return (
    <section className="book-list-desktop">
      <h2 className="book-list-title">Sách nổi bật</h2>
      
    </section>
  );
}

export default BookListDesktop;

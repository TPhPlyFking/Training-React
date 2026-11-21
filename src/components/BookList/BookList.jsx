// Bài 6 + 7: Danh sách sách (cha)
// 1. isMobile = useMobileDetect()
// 2. { books, loading, error } = useBooks()
// 3. loading -> "Đang tải...", error -> "Không tải được dữ liệu"
// 4. showAll (useState false); show = showAll ? books : books.slice(0, 3)
// 5. isMobile ? <BookListMobile books={show} /> : <BookListDesktop books={show} />
// 6. <AllBooks showAll={showAll} onClick={() => setShowAll(!showAll)} />
import BookListDesktop from "./BookListDesktop.jsx";
// TODO: import useState, useMobileDetect, useBooks, BookListMobile, AllBooks

function BookList() {
  // TODO
  return (
    <>
      <BookListDesktop />
    </>
  );
}

export default BookList;

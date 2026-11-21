// Bài 6 + 7: Danh sách sách (cha)
// 1. isMobile = useMobileDetect()
// 2. books = useBooks()
// 3. showAll (useState false); show = showAll ? books : books.slice(0, 3)
// 4. isMobile ? <BookListMobile books={show} /> : <BookListDesktop books={show} />
// 5. <AllBooks showAll={showAll} onClick={() => setShowAll(!showAll)} />
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

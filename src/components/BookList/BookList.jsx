// Bài 6 + Bài 7: Danh sách sách (file cha) - giống Course.jsx bên react_component
//
// Viết ý trước:
// 1. isMobile = useMobileDetect()
// 2. { books, loading, error } = useBooks()   (API: /api/books.json)
// 3. loading -> hiện "Đang tải...", error -> hiện "Không tải được dữ liệu"
// 4. (Bài 7) const [showAll, setShowAll] = useState(false)
//    Lúc đầu chỉ hiện 3 cuốn: const show = showAll ? books : books.slice(0, 3)
// 5. isMobile ? <BookListMobile books={show} /> : <BookListDesktop books={show} />
// 6. Dưới danh sách: <AllBooks showAll={showAll} onClick={() => setShowAll(!showAll)} />
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

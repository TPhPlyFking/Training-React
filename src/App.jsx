// App là component cha: lấy dữ liệu và ghép các phần lại.
import Header from "./components/Header.jsx";
import BookList from "./components/BookList.jsx";
// TODO (Bài 5): import useBooks từ "./hooks/useBooks.js"

function App() {
  // TODO (Bài 5): const { books, loading, error } = useBooks();

  return (
    <>
      <Header />
      {/* TODO (Bài 5): đang tải -> "Đang tải...", lỗi -> "Không tải được dữ liệu" */}
      {/* TODO (Bài 6): truyền books xuống BookList qua props */}
      <BookList />
    </>
  );
}

export default App;

// App là component cha: giữ dữ liệu và ghép các phần lại.
import books from "./data.js";
import Header from "./components/Header.jsx";
import BookList from "./components/BookList.jsx";

function App() {
  return (
    <>
      <Header />
      {/* TODO (Bài 4): truyền books xuống BookList qua props */}
      <BookList />
    </>
  );
}

export default App;

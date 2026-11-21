// App là component cha: ghép các phần lại.
// Mỗi phần tự lấy dữ liệu bằng hook của nó:
//   Header   -> useMenu  (API: /api/menu.json)
//   BookList -> useBooks (API: /api/books.json)
import Header from "./components/Header/Header.jsx";
import BookList from "./components/BookList/BookList.jsx";

function App() {
  return (
    <>
      <Header />
      <BookList />
    </>
  );
}

export default App;

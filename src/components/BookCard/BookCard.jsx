// Bài 5 + 8: chọn thẻ Desktop hay Mobile
// 1. isMobile = useMobileDetect()
// 2. isMobile ? <BookCardMobile book={book} /> : <BookCardDesktop book={book} />
import BookCardDesktop from "./BookCardDesktop.jsx";
// TODO: import useMobileDetect, BookCardMobile

function BookCard() {
  // TODO
  return <BookCardDesktop />;
}

export default BookCard;

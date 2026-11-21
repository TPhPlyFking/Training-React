# logic_train — BookNest (luyện header + card + hook + API)

Trang nhỏ bán sách, gồm 2 phần: **Header** và **danh sách thẻ sách**. Dữ liệu sách lấy từ **API**.
Code theo Figma "BookNest – luyện tập": https://www.figma.com/design/qzvBdXmhj8Tacu2Jv7ilT9 (frame Desktop 1440, Mobile 390, Mobile – Menu mở).
Lý thuyết và cách tư duy nằm ở `LY_THUYET.md`.

## Chạy project
```
npm install
npm run dev
```
Mở link hiện ra (thường là http://localhost:5173).

## Cấu trúc
```
public/api/books.json        API giả (dữ liệu 6 cuốn sách)
src/hooks/useMobileDetect.js hook: đang ở mobile hay desktop
src/hooks/useBooks.js        hook: lấy sách từ API
src/components/Header.jsx    header desktop + mobile + menu
src/components/BookList.jsx  danh sách thẻ + nút Xem tất cả
src/components/BookCard.jsx  1 thẻ sách
src/App.jsx                  ghép tất cả lại
src/index.css                toàn bộ CSS
```

## Cách làm
- Làm **đúng thứ tự** bài 1 → 9. Mỗi bài làm xong mới qua bài sau.
- Mỗi bài làm **3 lần**: lần 1 được xem gợi ý, lần 2 tự làm, lần 3 (hôm sau) xóa code đi làm lại, bấm giờ.
- Kẹt quá 15 phút mới hỏi. Hỏi kèm ảnh F12 + đoạn code.

---

## Phần 1 — HEADER

### Bài 1 — Header desktop (CSS: flex)
File: `Header.jsx`, `index.css`. **Figma:** frame Desktop, phần Header.
- Cao 80px, nền trắng, viền dưới 1px `#E5E1DA`, padding trái phải 80px.
- Trái: logo (ô vuông 36px màu cam có chữ "B" + chữ "BookNest" 22px đậm).
- Giữa: 4 link `Trang chủ · Sách · Tác giả · Liên hệ`, cách nhau 40px, chữ 16px. Link đang chọn màu đậm.
- Phải: nút "Đăng nhập" 140×44, bo 10px, nền cam, chữ trắng.
- Header dính trên cùng khi cuộn (sticky).

**Tự kiểm tra:** 3 cụm nằm 2 đầu + giữa, canh giữa theo chiều dọc. Cuộn trang header vẫn ở trên, có nền, không bị chữ đè.

### Bài 2 — Hook `useMobileDetect` + header mobile (useState + useEffect + matchMedia)
File: `src/hooks/useMobileDetect.js`, `Header.jsx`. **Figma:** frame Mobile, phần Header.
- Viết hook trả về `true` khi màn hình ≤ 768px, `false` khi lớn hơn. Kéo cửa sổ qua mốc 768px thì tự đổi, **không cần F5**.
- Trong `Header.jsx`: `const isMobile = useMobileDetect();`
  - Desktop → render header của Bài 1.
  - Mobile → header cao 64px, padding 16px: logo trái (ô 32px, chữ 20px) + nút menu 3 gạch 44×44 bên phải.

**Tự kiểm tra:** viết tạm `<p>{isMobile ? "mobile" : "desktop"}</p>`, kéo cửa sổ thấy chữ đổi. Xong thì xóa dòng đó.

### Bài 3 — Menu trượt từ phải (useState)
File: `Header.jsx`, `index.css`. **Figma:** frame "Mobile – Menu mở".
- Bấm nút menu → lớp nền mờ (đen 45%) + bảng menu rộng 280px trượt từ phải vào.
- Trong bảng: chữ "Menu" + nút X, 4 link xếp dọc cách nhau 24px, nút "Đăng nhập" rộng hết.
- Bấm nền mờ, nút X, hoặc 1 link → đóng.

**Tự kiểm tra:** mở/đóng mượt (có transition). Kéo lên desktop thì menu không còn.

---

## Phần 2 — THẺ SÁCH + API

### Bài 4 — Một thẻ sách tĩnh (CSS)
File: `BookCard.jsx`, `index.css`. Gõ chữ thẳng vào JSX, chưa dùng props. Tạm render 1 `<BookCard />` trong `BookList`.
- Thẻ: nền trắng, viền 1px `#E5E1DA`, bo 20px, padding 32px, 2 cột cách nhau 40px.
- Trái: ô bìa 220×300, bo 12px, có màu, tên sách + tác giả nằm ở góc dưới ô bìa.
- Phải: tên sách 28px, tác giả 16px xám, giá 22px cam, 2 dòng giới thiệu có dấu ▸ cam, nút viền cam "Xem thêm" 140×44.

**Tự kiểm tra:** ô bìa luôn nằm trên cùng, không bị kéo dãn khi chữ dài ra.

### Bài 5 — Hook `useBooks`: lấy dữ liệu từ API (fetch + loading + error)
File: `src/hooks/useBooks.js`, `App.jsx`. API: `/api/books.json` (mở http://localhost:5173/api/books.json để xem).
- Hook trả về `{ books, loading, error }`. Dữ liệu nằm trong `json.data`, không phải `json`.
- Trong `App.jsx`: `const { books, loading, error } = useBooks();`
- Đang tải → hiện "Đang tải...". Lỗi → hiện "Không tải được dữ liệu". Có dữ liệu → hiện `BookList`. Header lúc nào cũng hiện.

**Tự kiểm tra:**
1. F12 → tab Network → thấy request `books.json` trạng thái 200, **chỉ 1 lần** (không lặp).
2. Đổi `API_URL` thành `/api/sai.json` → hiện chữ báo lỗi, trang không trắng. Xong đổi lại.
3. F12 → Network → chọn **Slow 4G** rồi F5 → thấy "Đang tải..." một lúc.

### Bài 6 — Vẽ nhiều thẻ bằng map (props)
File: `App.jsx`, `BookList.jsx`, `BookCard.jsx`.
- `App` truyền `books` (lấy từ API) xuống `BookList`.
- `BookList` dùng `map` vẽ ra `<BookCard book={...} />`, có `key`.
- `BookCard` nhận `book` rồi hiện đúng dữ liệu: màu ô bìa lấy từ `book.color` (`style={{ backgroundColor: book.color }}`), giá dạng `320.000 đ`, giới thiệu tách từ `book.intro` bằng `split("\n")`.

**Tự kiểm tra:** sửa 1 cuốn trong `public/api/books.json` rồi F5 → giao diện đổi theo.

### Bài 7 — Nút "Xem thêm" (useState)
File: `BookCard.jsx`.
- Lúc đầu giới thiệu chỉ hiện **2 dòng** đầu (`slice(0, 2)`).
- Bấm "Xem thêm" → hiện hết, chữ nút thành "Thu gọn", mũi tên xoay ngược.
- Nhiều thẻ mở cùng lúc được.

**Tự kiểm tra:** mở thẻ 1 thì thẻ 2 không bị ảnh hưởng. Ô bìa không nhảy, khoảng trống trên dưới thẻ luôn đều.

### Bài 8 — Nút "Xem tất cả" (state ở cha)
File: `BookList.jsx`.
- Lúc đầu hiện 3 cuốn. Nút "Xem tất cả" (200×52, nền cam) → hiện hết. Bấm lại "Thu gọn" → về 3.
- Số cuốn "hiện hết" lấy theo `books.length`, **không ghi cứng số 6** (API có thể trả nhiều hơn).
- Khoảng cách trên và dưới nút bằng nhau (40px).

**Tự kiểm tra:** thêm 1 cuốn vào `books.json` → "Xem tất cả" hiện 7.

---

## Phần 3 — RESPONSIVE

### Bài 9 — clamp + media query cho thẻ
File: `index.css`. **Figma:** frame Mobile.
- Font, padding, gap của thẻ và tiêu đề dùng `clamp(sàn, vw, trần)` (công thức trong `LY_THUYET.md`).
- ≤ 768px (dùng `@media`, **không** dùng hook): thẻ xếp dọc, ô bìa rộng 100% cao 180px, padding 16px, nút Xem thêm rộng 100%.

> Vì sao header dùng hook mà thẻ dùng `@media`? Header **đổi cả JSX** (desktop có nav, mobile có nút menu) → cần biết isMobile trong JS. Thẻ **chỉ đổi cách xếp**, JSX giữ nguyên → CSS là đủ.

**Tự kiểm tra:** F12 → chế độ điện thoại 390px nhìn giống frame Mobile trong Figma.

---

## Thử thách thêm (khi đã làm 9 bài nhanh)
- Thêm ô tìm kiếm trong header, gõ chữ → lọc sách theo tên (`filter` + `includes`).
- Nút ♥ yêu thích trên mỗi thẻ, header hiện số sách đã thích (state ở App).
- Thêm 1 trang chi tiết: `/api/books.json` → lấy 1 cuốn theo `id` (`find`).

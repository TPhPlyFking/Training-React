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

## Cấu trúc (giống react_component: mỗi phần 1 thư mục = file cha + Desktop + Mobile)
```
public/api/books.json                   API giả: 6 cuốn sách
public/api/menu.json                    API giả: 4 link menu
src/api/apiHelper.js                    hàm chung gọi API: fetchApiData(đường dẫn)
src/hooks/useMobileDetect.js            hook: đang ở mobile hay desktop
src/hooks/useBooks.js                   hook: lấy sách từ /api/books.json
src/hooks/useMenu.js                    hook: lấy menu từ /api/menu.json
src/components/Header/Header.jsx        cha: chọn Desktop hay Mobile
src/components/Header/HeaderDesktop.jsx header desktop
src/components/Header/HeaderMobile.jsx  header mobile + menu trượt
src/components/BookList/BookList.jsx    cha: useBooks + showAll, chọn Desktop hay Mobile
src/components/BookList/BookListDesktop.jsx  vẽ nhiều thẻ desktop
src/components/BookList/BookListMobile.jsx   vẽ nhiều thẻ mobile
src/components/BookList/AllBooks.jsx    nút Xem tất cả / Thu gọn
src/components/BookCard/BookCardDesktop.jsx  1 thẻ sách desktop
src/components/BookCard/BookCardMobile.jsx   1 thẻ sách mobile
src/App.jsx                             ghép Header + BookList
src/index.css                           toàn bộ CSS
```
Đường dẫn API được ghi sẵn ở đầu `useBooks.js` và `useMenu.js` (file thật nằm trong `public/api`, khi gọi thì bỏ chữ `public`). Hai hook gọi qua `apiHelper.js` (đã viết sẵn) giống `useClassrooms` gọi `fetchApiData` bên react_component.
Không có bài "làm tĩnh": mọi dữ liệu (sách, menu) đều lấy từ API ngay từ đầu.

## Cách làm
- Làm **đúng thứ tự** bài 1 → 8. Mỗi bài làm xong mới qua bài sau.
- Mỗi bài làm **3 lần**: lần 1 được xem gợi ý, lần 2 tự làm, lần 3 (hôm sau) xóa code đi làm lại, bấm giờ.
- Kẹt quá 15 phút mới hỏi. Hỏi kèm ảnh F12 + đoạn code.

---

## Phần 1 — API + hook

### Bài 1 — `useMenu` và `useBooks` (fetch + loading + error)
File: `src/hooks/useMenu.js`, `src/hooks/useBooks.js`. Đường dẫn API ghi sẵn ở đầu mỗi file. `src/api/apiHelper.js` đã viết sẵn, chỉ việc gọi.
- `useMenu` trả về mảng `menu` (4 link: id, label, href).
- `useBooks` trả về `{ books, loading, error }`.

**Tự kiểm tra:**
1. Mở http://localhost:5173/api/books.json và `/api/menu.json` thấy dữ liệu.
2. Viết tạm `console.log(books)` / `console.log(menu)` trong component, F12 → Console thấy mảng. F12 → Network thấy request trạng thái 200, **chỉ 1 lần** (không lặp).
3. Đổi `API_URL` thành `/api/sai.json` → hook báo lỗi, trang không trắng. Xong đổi lại.

### Bài 2 — Hook `useMobileDetect` (useState + useEffect + matchMedia)
File: `src/hooks/useMobileDetect.js`.
- Trả về `true` khi màn hình ≤ 768px, `false` khi lớn hơn. Kéo cửa sổ qua mốc 768px thì tự đổi, **không cần F5**.

**Tự kiểm tra:** viết tạm `<p>{isMobile ? "mobile" : "desktop"}</p>` trong App, kéo cửa sổ thấy chữ đổi. Xong thì xóa dòng đó.

---

## Phần 2 — HEADER

### Bài 3 — Header desktop + mobile (flex)
File: `Header/Header.jsx`, `Header/HeaderDesktop.jsx`, `Header/HeaderMobile.jsx`, `index.css`. **Figma:** frame Desktop và Mobile, phần Header.
- `Header.jsx` (cha): `isMobile` → `<HeaderMobile menu={menu} />`, ngược lại `<HeaderDesktop menu={menu} />`. `menu` lấy từ `useMenu()`.
- Desktop: cao 80px, nền trắng, viền dưới 1px `#E5E1DA`, padding trái phải 80px, sticky. Trái: logo (ô vuông 36px màu cam có chữ "B" + chữ "BookNest" 22px đậm). Giữa: 4 link cách nhau 40px, chữ 16px. Phải: nút "Đăng nhập" 140×44, bo 10px, nền cam, chữ trắng.
- Mobile: cao 64px, padding 16px: logo trái (ô 32px, chữ 20px) + nút menu 3 gạch 44×44 bên phải.

**Tự kiểm tra:** 4 link vẽ bằng `map` từ `menu`, không gõ tay. Kéo cửa sổ qua 768px thì header đổi giữa 2 bản.

### Bài 4 — Menu trượt từ phải (useState)
File: `Header/HeaderMobile.jsx`, `index.css`. **Figma:** frame "Mobile – Menu mở".
- Bấm nút menu → lớp nền mờ (đen 45%) + bảng menu rộng 280px trượt từ phải vào.
- Trong bảng: chữ "Menu" + nút X, 4 link xếp dọc cách nhau 24px, nút "Đăng nhập" rộng hết.
- Bấm nền mờ, nút X, hoặc 1 link → đóng.

**Tự kiểm tra:** mở/đóng mượt (có transition). Kéo lên desktop thì menu không còn.

---

## Phần 3 — THẺ SÁCH

### Bài 5 — Thẻ sách desktop (props + useState)
File: `BookCard/BookCardDesktop.jsx`, `index.css`. **Figma:** component BookCard (Collapsed / Expanded). Thẻ nhận `book` (props) từ API ngay từ đầu.
- Thẻ: nền trắng, viền 1px `#E5E1DA`, bo 20px, padding 32px, 2 cột cách nhau 40px.
- Trái: ô bìa 220×300, bo 12px, màu lấy từ `book.color`, tên sách + tác giả nằm ở góc dưới ô bìa.
- Phải: tên sách 28px, tác giả 16px xám, giá 22px cam dạng `320.000 đ`, giới thiệu tách từ `book.intro` bằng `split("\n")` có dấu ▸ cam, nút viền cam "Xem thêm" 140×44.
- Lúc đầu giới thiệu chỉ hiện **2 dòng** đầu (`slice(0, 2)`). Bấm "Xem thêm" → hiện hết, chữ nút thành "Thu gọn", mũi tên xoay ngược. Mỗi thẻ có state riêng.

**Tự kiểm tra:** mở thẻ 1 thì thẻ 2 không bị ảnh hưởng. Ô bìa luôn nằm trên cùng, không bị kéo dãn khi chữ dài ra. Sửa 1 cuốn trong `public/api/books.json` rồi F5 → giao diện đổi theo.

### Bài 6 — Danh sách thẻ (map + loading/error)
File: `BookList/BookList.jsx`, `BookList/BookListDesktop.jsx`, `index.css`.
- `BookList` (cha) gọi `useBooks()`: đang tải → "Đang tải...", lỗi → "Không tải được dữ liệu", có dữ liệu → truyền `books` xuống `BookListDesktop`.
- `BookListDesktop` dùng `map` vẽ ra `<BookCardDesktop book={...} />`, có `key`. Rộng 1100px canh giữa, các thẻ cách nhau 24px.

**Tự kiểm tra:** F12 → Network → chọn **Slow 4G** rồi F5 → thấy "Đang tải..." một lúc.

### Bài 7 — Nút "Xem tất cả" (state ở cha)
File: `BookList/BookList.jsx`, `BookList/AllBooks.jsx`.
- Lúc đầu hiện 3 cuốn. Nút "Xem tất cả" (200×52, nền cam) → hiện hết. Bấm lại "Thu gọn" → về 3.
- Số cuốn "hiện hết" lấy theo `books.length`, **không ghi cứng số 6** (API có thể trả nhiều hơn).
- Khoảng cách trên và dưới nút bằng nhau (40px).

**Tự kiểm tra:** thêm 1 cuốn vào `books.json` → "Xem tất cả" hiện 7.

---

## Phần 4 — MOBILE

### Bài 8 — Thẻ + danh sách mobile (clamp)
File: `BookCard/BookCardMobile.jsx`, `BookList/BookListMobile.jsx`, `BookList/BookList.jsx`, `index.css`. **Figma:** frame Mobile, component `BookCardMobile`.
- `BookList.jsx`: `isMobile` → `<BookListMobile />`, ngược lại `<BookListDesktop />`.
- Thẻ mobile xếp dọc: ô bìa rộng 100% cao 180px nằm trên, chữ ở dưới, padding 16px, nút Xem thêm rộng 100%. Dữ liệu và state giống thẻ desktop.
- Font, padding, gap dùng `clamp(sàn, vw, trần)` (công thức trong `LY_THUYET.md`, mobile = px Figma ÷ 3.9).

> Vì sao tách luôn thành 2 component thay vì chỉ dùng `@media`? Trong Figma, thẻ mobile là component riêng (`BookCardMobile`) có bố cục khác (bìa trên, chữ dưới), giống cách `react_component` tách `CourseDesktop` / `CourseMobile`.

**Tự kiểm tra:** F12 → chế độ điện thoại 390px nhìn giống frame Mobile trong Figma. Kéo qua mốc 768px thì tự đổi giữa 2 bản, không cần F5.

---

## Thử thách thêm (khi đã làm 9 bài nhanh)
- Thêm ô tìm kiếm trong header, gõ chữ → lọc sách theo tên (`filter` + `includes`).
- Nút ♥ yêu thích trên mỗi thẻ, header hiện số sách đã thích (state ở App).
- Thêm 1 trang chi tiết: `/api/books.json` → lấy 1 cuốn theo `id` (`find`).

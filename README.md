# logic_train — BookNest (luyện header + card)

Trang nhỏ bán sách, gồm 2 phần: **Header** và **danh sách thẻ sách**.
Code theo Figma "BookNest – luyện tập": https://www.figma.com/design/qzvBdXmhj8Tacu2Jv7ilT9 (frame Desktop 1440, Mobile 390, Mobile – Menu mở). Lý thuyết và cách tư duy nằm ở `LY_THUYET.md`.

## Chạy project
```
npm install
npm run dev
```
Mở link hiện ra (thường là http://localhost:5173).

## Cách làm
- Làm **đúng thứ tự** bài 1 → 7. Mỗi bài làm xong mới qua bài sau.
- Mỗi bài làm **3 lần**: lần 1 được xem gợi ý, lần 2 tự làm, lần 3 (hôm sau) xóa code đi làm lại, bấm giờ.
- Kẹt quá 15 phút mới hỏi. Hỏi kèm ảnh F12 + đoạn code.

---

## Bài 1 — Header desktop (CSS: flex)
**Figma:** frame Desktop, phần Header.
- Cao 80px, nền trắng, viền dưới 1px `#E5E1DA`, padding trái phải 80px.
- Trái: logo (ô vuông 36px màu cam có chữ "B" + chữ "BookNest" 22px đậm).
- Giữa: 4 link `Trang chủ · Sách · Tác giả · Liên hệ`, cách nhau 40px, chữ 16px. Link đang chọn màu đậm.
- Phải: nút "Đăng nhập" 140×44, bo 10px, nền cam, chữ trắng.

**Tự kiểm tra:** 3 cụm nằm 2 đầu + giữa, canh giữa theo chiều dọc. Kéo nhỏ cửa sổ không bị rớt dòng lộn xộn.

## Bài 2 — Header sticky + mobile + menu (CSS + useState)
- Header dính trên cùng khi cuộn.
- ≤ 768px: ẩn nav và nút Đăng nhập, hiện nút menu 3 gạch (44×44).
- Bấm menu → drawer trượt từ phải (rộng 280px) + lớp nền mờ. Bấm nền mờ hoặc nút X → đóng.

**Tự kiểm tra:** cuộn trang header vẫn ở trên, có nền, không bị chữ đè lên. Mở/đóng menu mượt.

## Bài 3 — Một thẻ sách tĩnh (CSS)
Gõ chữ thẳng vào `BookCard.jsx`, chưa dùng props.
- Thẻ: nền trắng, bo 20px, padding 32px, 2 cột cách nhau 40px.
- Trái: ô bìa 220×300, bo 12px, có màu.
- Phải: tên sách 28px, tác giả 16px xám, giá 22px cam, giới thiệu (gạch đầu dòng), nút "Xem thêm".

**Tự kiểm tra:** ô bìa luôn nằm trên cùng, không bị kéo dãn khi chữ dài ra.

## Bài 4 — Vẽ nhiều thẻ bằng map (props)
- `App` truyền `books` xuống `BookList`.
- `BookList` dùng `map` vẽ ra `<BookCard book={...} />`, có `key`.
- `BookCard` nhận `book` rồi hiện đúng dữ liệu. Giá hiện dạng `320.000 đ`.

**Tự kiểm tra:** sửa 1 cuốn trong `data.js` → giao diện đổi theo.

## Bài 5 — Nút "Xem thêm" (useState)
- Lúc đầu phần giới thiệu chỉ hiện **2 dòng** đầu.
- Bấm "Xem thêm" → hiện hết, chữ nút thành "Thu gọn", mũi tên xoay ngược.
- Nhiều thẻ mở cùng lúc được.

**Tự kiểm tra:** mở thẻ 1 thì thẻ 2 không bị ảnh hưởng. Ô bìa không nhảy.

## Bài 6 — Nút "Xem tất cả" (state ở cha)
- Lúc đầu hiện 3 cuốn. Nút "Xem tất cả" → hiện 6. Bấm lại "Thu gọn" → về 3.
- Khoảng cách trên và dưới nút bằng nhau.

## Bài 7 — Responsive bằng clamp + media query
- Font, padding, gap dùng `clamp(sàn, vw, trần)` (công thức trong `LY_THUYET.md`).
- ≤ 768px: thẻ xếp dọc (ô bìa trên, chữ dưới), ô bìa rộng 100%, nút Xem thêm rộng 100%.

**Tự kiểm tra:** F12 → chế độ điện thoại 390px nhìn giống frame Mobile trong Figma.

## Bài 8 — Hook `useMobileDetect` (useState + useEffect + matchMedia)
File: `src/hooks/useMobileDetect.js`
- Trả về `true` khi màn hình ≤ 768px, `false` khi lớn hơn.
- Kéo cửa sổ qua lại mốc 768px thì giá trị tự đổi, **không cần F5**.
- Dùng trong `Header.jsx`: `const isMobile = useMobileDetect();`
  → mobile thì render nút menu, desktop thì render nav + nút Đăng nhập (dùng `if (isMobile) return ...` hoặc `? :`).

**Tự kiểm tra:** viết tạm `<p>{isMobile ? "mobile" : "desktop"}</p>`, kéo cửa sổ thấy chữ đổi. Xong thì xóa dòng đó.

## Bài 9 — Lấy dữ liệu từ API (fetch + loading + error)
File: `src/hooks/useBooks.js`. API giả: `/api/books.json` (mở http://localhost:5173/api/books.json để xem dữ liệu).
- Hook trả về `{ books, loading, error }`.
- Trong `App.jsx`: bỏ `import books from "./data.js"`, thay bằng `const { books, loading, error } = useBooks();`
- Đang tải → hiện chữ "Đang tải...". Lỗi → hiện "Không tải được dữ liệu". Xong → hiện `BookList`.
- Lưu ý: dữ liệu nằm trong `json.data`, không phải `json`.

**Tự kiểm tra:**
1. F12 → tab Network → thấy request `books.json` trạng thái 200.
2. Đổi `API_URL` thành `/api/sai.json` → phải hiện chữ báo lỗi, trang không trắng.
3. F12 → Network → chọn **Slow 4G** rồi F5 → thấy chữ "Đang tải..." một lúc.

---

## Thử thách thêm (khi đã làm 7 bài nhanh)
- Thêm ô tìm kiếm trong header, gõ chữ → lọc sách theo tên (`filter` + `includes`).
- Nút ♥ yêu thích trên mỗi thẻ, header hiện số sách đã thích.

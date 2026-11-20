# Lý thuyết + hướng tư duy (header + card)

## Phần A — Hướng tư duy: nhìn Figma rồi code

Đừng nhìn Figma rồi gõ ngay. Làm theo 6 bước, bước nào xong mới qua bước sau.

**Bước 1. Vẽ hộp trong đầu (hoặc ra giấy)**
Nhìn Figma, khoanh từng khối chữ nhật. Hỏi: khối này nằm **ngang** hay **dọc** với khối bên cạnh?
- Ngang → cha của nó dùng `display: flex` (mặc định là ngang).
- Dọc → cha dùng `flex-direction: column`, hoặc để mặc định block.

Ví dụ header: `[logo] [nav] [nút]` → 3 hộp nằm ngang → header là flex.
Thẻ sách: `[bìa] [chữ]` ngang, trong `[chữ]` thì các dòng xếp dọc.

**Bước 2. Đặt tên class theo khối**
`header`, `header-logo`, `header-nav`, `book-card`, `book-cover`, `book-info`...
Tên đặt theo **vai trò**, không theo màu hay vị trí (`.red-box` là tên dở).

**Bước 3. JSX khung** — chỉ thẻ + class + chữ, chưa CSS. Mở web thấy chữ hiện đủ là được.

**Bước 4. CSS bố cục** — chỉ `display`, `flex-direction`, `justify-content`, `align-items`, `gap`. Lúc này chưa quan tâm đẹp.

**Bước 5. CSS khoảng cách và kích thước** — `padding`, `margin`, `width`, `height`, `border-radius`. Lấy số từ Figma.

**Bước 6. Màu + font, rồi mới responsive** — màu, cỡ chữ, rồi mới đổi sang `clamp` và `@media`.

**Khi bị lỗi giao diện:** F12 → chọn phần tử → nhìn tab Styles:
- Dòng bị **gạch ngang** = bị ghi đè.
- Rê chuột vào phần tử: **cam** là margin, **xanh lá** là padding.
- Không thấy CSS của mình → sai tên class.

**Khi làm state (useState), hỏi 3 câu:**
1. Cái gì **thay đổi** trên màn hình? → đó là state.
2. State là **1 giá trị** (true/false, 1 id) hay **nhiều** (mảng)?
3. **Ai cần biết** state này? Nếu 2 component cùng cần → đặt state ở cha chung, truyền xuống bằng props.

---

## Phần B — Lý thuyết CSS

### 1. Box model
Mỗi thẻ là 1 cái hộp: `nội dung → padding (bên trong) → border → margin (bên ngoài)`.
- `padding`: khoảng cách **bên trong** hộp, có màu nền.
- `margin`: khoảng cách **bên ngoài**, đẩy hộp khác ra.
- `box-sizing: border-box`: width đã tính luôn padding và border → dễ tính hơn.

Viết tắt: `margin: 20px auto` = trên dưới 20px, trái phải auto (canh giữa).
`padding: 10px 20px 30px` = trên 10, trái phải 20, dưới 30.

### 2. Flexbox (quan trọng nhất)
```css
.cha {
  display: flex;
  justify-content: space-between; /* trục chính (ngang): start | center | space-between */
  align-items: center;            /* trục phụ (dọc): flex-start | center | stretch */
  gap: 20px;                      /* khoảng cách giữa các con */
}
```
- `align-items` mặc định là `stretch` → con bị kéo cao bằng con cao nhất. Muốn ảnh đứng yên thì dùng `flex-start`.
- Con co giãn: `flex: 1 1 0` = chiếm phần còn lại. `flex: none` = giữ nguyên kích thước.
- Chữ dài làm vỡ khung → thêm `min-width: 0` cho con.

### 3. Sticky header
```css
.header { position: sticky; top: 0; z-index: 100; background: white; }
```
Thiếu `background` → chữ bên dưới lộ qua. Thiếu `z-index` → bị phần khác đè lên.

### 4. Kích thước co giãn: clamp
`clamp(sàn, giá trị theo màn hình, trần)`
- vw desktop = px trong Figma ÷ (rộng frame ÷ 100). Frame 1440 → chia **14.4**.
  Ví dụ chữ 28px → `28 ÷ 14.4 ≈ 1.94vw` → `clamp(20px, 1.94vw, 28px)`.
- Mobile frame 390 → chia **3.9**.

### 5. Ảnh / ô bìa
```css
.book-cover { width: 220px; aspect-ratio: 220 / 300; flex: none; object-fit: cover; }
```
`aspect-ratio` giữ tỉ lệ, chỉ cần đặt width. `object-fit: cover` để ảnh không méo.

### 6. Media query
```css
@media (max-width: 768px) {
  .book-card { flex-direction: column; }
}
```
Trong ngoặc là điều kiện: màn hình ≤ 768px thì dùng CSS bên trong.

### 7. Drawer trượt từ phải
```css
.menu-panel { position: fixed; top: 0; right: 0; height: 100vh; width: 280px;
              transform: translateX(100%); transition: transform 0.3s; }
.menu-panel.open { transform: translateX(0); }
```
`translateX(100%)` = đẩy ra ngoài bên phải bằng đúng chiều rộng của nó.

---

## Phần C — Lý thuyết JSX / React

### 1. Component
Hàm viết hoa chữ đầu, trả về JSX. `return` chỉ được **1 thẻ gốc** → bọc bằng `<> </>` nếu cần.

### 2. Props (cha → con)
```jsx
// Cha
<BookList books={books} />
// Con
function BookList({ books }) { ... }
```
Tên bên trái dấu `=` ở cha phải **trùng** tên con khai báo trong `{ }`.

### 3. map: vòng lặp trong JSX
```jsx
{books.map((book) => (
  <BookCard key={book.id} book={book} />
))}
```
`book` là tên tự đặt cho từng phần tử. `key` phải khác nhau → dùng `id`.

Chuỗi nhiều dòng → mảng: `book.intro.split("\n")`. Lấy 2 phần tử đầu: `.slice(0, 2)`.

### 4. useState
```jsx
const [isOpen, setIsOpen] = useState(false);
<button onClick={() => setIsOpen(!isOpen)}>...</button>
```
- `!isOpen` → 1 nút làm 2 việc (bật/tắt).
- `setIsOpen(true)` / `setIsOpen(false)` → nút chỉ làm 1 việc (nút mở, nút đóng).
- Gọi set → React vẽ lại component.

### 5. Hiện theo điều kiện
```jsx
{isOpen ? "Thu gọn" : "Xem thêm"}
{isOpen && <div>...</div>}
className={"more" + (isOpen ? " open" : "")}   // nhớ dấu cách trước open
```

### 6. Nhiều thẻ mở cùng lúc
Mỗi `BookCard` có **state riêng** → tự nhiên mở độc lập (cách dễ nhất).
Hoặc state mảng ở cha: `includes` để kiểm tra, `[...arr, id]` để thêm, `filter` để bỏ.

### 7. Đưa state lên cha
Nút "Xem tất cả" và danh sách cùng cần biết `showAll` → state đặt ở `BookList` (cha chung):
```jsx
const [showAll, setShowAll] = useState(false);
const hienThi = showAll ? books : books.slice(0, 3);
```

### 8. Format giá tiền
```js
book.price.toLocaleString("vi-VN") + " đ"   // 320000 → "320.000 đ"
```

---

## Sổ tay mẫu hay quên (tự ghi thêm vào đây)
| Muốn | Viết |
|---|---|
| Canh giữa ngang 1 khối | `margin: 0 auto;` + có width/max-width |
| 2 đầu + giữa dọc | `display:flex; justify-content:space-between; align-items:center` |
| Ảnh không bị kéo | cha `align-items: flex-start`, ảnh `flex: none` |
| Bật/tắt | `setX(!x)` |
| Vẽ danh sách | `arr.map((item) => <X key={item.id} .../>)` |
| |  |

---

## Phần D — Hook, useEffect và gọi API

### 1. Hook là gì
Hook là **hàm bắt đầu bằng `use`**, bên trong được dùng `useState`, `useEffect`.
Tự viết hook (custom hook) = gom logic dùng lại nhiều chỗ vào 1 hàm, component nào cần thì gọi.
Quy tắc: chỉ gọi hook **ở đầu component**, không gọi trong `if`, vòng lặp, hay trong hàm `onClick`.

### 2. useEffect
```jsx
useEffect(() => {
  // code chạy SAU khi component hiện lên màn hình
  return () => {
    // (không bắt buộc) dọn dẹp, chạy khi component bị gỡ
  };
}, [phụ thuộc]);
```
| Mảng phụ thuộc | Chạy khi nào |
|---|---|
| `[]` | 1 lần lúc đầu → dùng cho gọi API, gắn sự kiện |
| `[x]` | lúc đầu + mỗi khi `x` đổi |
| không ghi | sau **mỗi** lần render → dễ lặp vô hạn, tránh |

**Vì sao không gọi fetch thẳng trong component?** Vì component chạy lại mỗi lần render → fetch → setState → render → fetch... lặp mãi. Bỏ vào `useEffect(..., [])` thì chỉ chạy 1 lần.

### 3. matchMedia (cho hook detect mobile)
```js
const mediaQuery = window.matchMedia("(max-width: 768px)");
mediaQuery.matches;                       // true/false ngay lúc này
mediaQuery.addEventListener("change", fn); // gọi fn mỗi khi vượt qua mốc 768px
mediaQuery.removeEventListener("change", fn);
```
- `mediaQuery` là **object**, `.matches` là **thuộc tính** (true/false).
- Trong hàm lắng nghe `(e) => ...`, `e` là **sự kiện**, `e.matches` là kết quả mới.
- Phải `removeEventListener` trong hàm dọn dẹp → nếu không, component bị gỡ rồi mà vẫn còn lắng nghe.
- Muốn gỡ được thì phải truyền **đúng cùng 1 hàm** cho add và remove → đặt hàm vào 1 biến.

Khung tư duy:
```
state = mediaQuery.matches lúc đầu
useEffect [] → gắn "change" → set state
             → return gỡ "change"
return state
```

### 4. fetch + async/await (cho gọi API)
```js
const res = await fetch(url);   // gửi request, chờ phản hồi
if (!res.ok) throw new Error("HTTP " + res.status);  // 404, 500... fetch KHÔNG tự báo lỗi
const json = await res.json();  // đổi chữ JSON thành object
```
- `await` chỉ dùng được trong hàm `async`. Hàm trong `useEffect` **không được** là async trực tiếp → tạo hàm async bên trong rồi gọi nó.
- `try { } catch (err) { } finally { }`: `try` chạy bình thường, lỗi nhảy vào `catch`, `finally` luôn chạy (chỗ tắt loading).

Khung tư duy:
```
3 state: data=[], loading=true, error=null
useEffect [] → hàm async:
   try   → fetch → kiểm tra ok → json → setData
   catch → setError
   finally → setLoading(false)
→ gọi hàm đó
return { data, loading, error }
```

### 5. Component dùng dữ liệu API: 3 trạng thái
```jsx
if (loading) return <p>Đang tải...</p>;
if (error) return <p>Không tải được dữ liệu</p>;
return <BookList books={books} />;
```
Luôn nghĩ đủ 3 trường hợp: **đang tải / lỗi / có dữ liệu**. Thiếu "đang tải" → lúc đầu `books` rỗng, trang trống. Thiếu "lỗi" → API hỏng thì trang trắng không biết vì sao.

### 6. Hay sai
| Lỗi | Nguyên nhân |
|---|---|
| `books.map is not a function` | `setBooks(json)` thay vì `setBooks(json.data)` |
| Gọi API liên tục trong tab Network | quên `[]` ở useEffect |
| Kéo cửa sổ mà isMobile không đổi | chưa gắn sự kiện `change`, chỉ đọc `.matches` 1 lần |
| Lỗi `await is only valid in async` | quên chữ `async` trước hàm |

# Làm lại phần Course: từng bước, hỏi rồi mới code

## Cách dùng
1. Mỗi bước có **Câu hỏi**. Tự trả lời trong đầu (hoặc viết ra giấy) **trước**.
2. Mở phần **Đáp án** để so. Đúng rồi thì mới qua phần **Code tiếp**.
3. Code xong **chỉ phần nhỏ đó**, mở trang và F12 kiểm tra rồi mới qua bước sau.
4. Làm trong thư mục mới (vd `Course2/`) cạnh `Course/` để khỏi đụng bản cũ. Xong thì so với bản cũ.

Hình dung trước khi làm: mỗi lớp là 1 thẻ gồm **ảnh + tên + giá + mô tả (4 dòng đầu) + nút Xem thêm**. Dưới cùng có nút **Tất cả khóa học**.

---

## Bước 1. Dữ liệu đến từ đâu?
**Câu hỏi**
1. Danh sách lớp lấy từ đâu, file nào lo việc gọi API?
2. Course cần nhận về cái gì từ hook đó?
3. Trong lúc API chưa trả về, `classrooms` đang là gì? Có làm `map` lỗi không?

<details><summary>Đáp án</summary>

1. API, hook `useClassrooms` lo gọi.
2. Mảng `classrooms` (mảng các lớp).
3. Mảng rỗng `[]` nên `map` chạy 0 vòng, không lỗi.
</details>

**Code tiếp:** trong `Course.jsx` gọi `useClassrooms()` rồi `console.log(classrooms)`. Mở F12 Console xem có mảng không.

---

## Bước 2. Hiện 1 danh sách tên lớp (chưa CSS)
**Câu hỏi**
1. Muốn "mỗi lớp 1 thẻ" thì dùng hàm nào của mảng?
2. `key` phải lấy ở đâu, vì sao không để trống?
3. Tên khóa học nằm ở đâu trong 1 lớp (`lop....`)?

<details><summary>Đáp án</summary>

1. `map`.
2. `key={lop.id}`: để React phân biệt thẻ này với thẻ kia khi cập nhật.
3. `lop.course.name`.
</details>

**Code tiếp:** tạo `CourseDesktop` nhận `classrooms`, `map` ra mỗi lớp 1 `<section>` có `<h2>` tên. Course render nó.

---

## Bước 3. Thêm ảnh, giá, mô tả
**Câu hỏi**
1. Giá là số 2000000, muốn hiện `2.000.000 đ` thì dùng gì?
2. `shortDescription` là 1 chuỗi dài có `\n`. Muốn mỗi dòng 1 thẻ `<p>` thì làm sao?
3. Vòng `map` bên trong dùng gì làm `key`, vì sao?

<details><summary>Đáp án</summary>

1. `price.toLocaleString("vi-VN")`.
2. `split("\n")` ra mảng các dòng, rồi `map` ra `<p>`.
3. `index`, vì mỗi dòng chỉ là chuỗi, không có id, và danh sách cố định.
</details>

**Code tiếp:** thêm `<img>`, giá, và các dòng mô tả. Chưa cần cắt 4 dòng.

---

## Bước 4. Chỉ hiện 4 dòng đầu
**Câu hỏi**
1. Lấy 4 phần tử đầu của mảng dùng gì?
2. Dữ liệu có bị mất không hay chỉ là hiện ít đi?

<details><summary>Đáp án</summary>

1. `slice(0, 4)`.
2. Không mất, chỉ cắt khi hiển thị.
</details>

**Code tiếp:** chèn `.slice(0, 4)` sau `split("\n")`.

---

## Bước 5. Nút "Xem thêm" của từng thẻ
**Câu hỏi**
1. Bấm "Xem thêm" ở lớp A thì lớp B có mở theo không? Vậy component cần **nhớ** điều gì?
2. Vì sao dùng **mảng id** (`openId`) mà không dùng `true/false`?
3. Làm sao hỏi "lớp này đang mở không?"
4. Khi bấm: đang mở thì làm gì, đang đóng thì làm gì với mảng?
5. Vì sao không `openId.push(...)`?

<details><summary>Đáp án</summary>

1. Không. Cần nhớ **lớp nào đang mở**.
2. Vì có nhiều thẻ, mỗi thẻ mở đóng riêng. 1 biến `true/false` thì mở là mở cả đám.
3. `openId.includes(lop.id)`.
4. Đang mở: `filter` bỏ id ra. Đang đóng: `[...openId, lop.id]` thêm id vào.
5. React chỉ cập nhật khi nhận **mảng mới**.
</details>

**Code tiếp (chia 3 lần nhỏ):**
- (a) tạo `const [openId, setOpenId] = useState([])`.
- (b) dùng `includes` để đổi chữ nút "Xem thêm" / "Thu gọn" và quyết định `slice` hay không.
- (c) viết `onClick` với `filter` và spread.

---

## Bước 6. Nút "Tất cả khóa học"
**Câu hỏi**
1. Ai cần biết "đang xem tất cả hay chưa"? (liệt kê component)
2. Vậy state `showAll` đặt ở đâu?
3. Danh sách rút gọn viết thế nào, chưa bấm thì còn mấy lớp?
4. Cha truyền xuống con bằng cái gì? Con nhận bằng cái gì?

<details><summary>Đáp án</summary>

1. Nút (AllCourse) và danh sách lớp (CourseDesktop / CourseMobile).
2. Ở cha chung: `Course`.
3. `showAll ? classrooms : classrooms.slice(0, 4)`, chưa bấm còn 4 lớp.
4. Truyền bằng props trong thẻ, con khai báo cùng tên trong `{ }`.
</details>

**Code tiếp:** thêm `showAll` ở `Course`, đưa danh sách đã cắt xuống CourseDesktop, truyền `showAll` và `onClick` cho nút.

---

## Bước 7. Bản mobile
**Câu hỏi**
1. Ai quyết định dùng Desktop hay Mobile?
2. Hai bản khác nhau ở đâu, giống nhau ở đâu?
3. State `openId` của Mobile có dùng chung với Desktop không?

<details><summary>Đáp án</summary>

1. Hook `useMobileDetect` cho `isMobile`, `Course` chọn bằng `isMobile ? ... : ...`.
2. Khác phần giao diện (bố cục, class CSS), giống phần logic (`map`, `slice`, `openId`).
3. Không, mỗi bản có `openId` riêng vì chỉ 1 bản chạy 1 lúc.
</details>

**Code tiếp:** copy logic Desktop sang `CourseMobile`, đổi tên class.

---

## Bước 8. CSS: từng khối một
Làm theo thứ tự, mỗi khối xong mới qua khối sau.

**Câu hỏi**
1. Thẻ `.course` chia mấy cột, dùng flex hay grid?
2. Ảnh bị tụt lên xuống khi mở "Xem thêm", dùng thuộc tính gì để ảnh luôn nằm trên?
3. Muốn margin trên dưới đều nhau thì viết gọn thế nào?
4. Pixel Figma ra `vw` thế nào (khung 1440)?

<details><summary>Đáp án</summary>

1. 2 cột (ảnh | nội dung), dùng flex.
2. `align-items: flex-start`.
3. `margin: X auto`.
4. px ÷ 14.4 (dùng thêm `clamp()` để có min / max).
</details>

**Code tiếp:** CSS theo thứ tự: khung thẻ, ảnh, tên + giá, mô tả, nút.

---

## Bước 9. Chống lỗi khi dữ liệu thiếu
**Câu hỏi**
1. Trường nào của lớp có thể `null` / thiếu?
2. `?.` làm gì, `||` làm gì?
3. Làm sao biết trường nào thật sự có thể `null`?

<details><summary>Đáp án</summary>

1. Chỉ các trường lồng nhiều tầng, vd `lop.course`.
2. `?.`: không lỗi trắng trang, ra `undefined`. `||`: chữ thay thế, vd `lop.course?.name || "Khóa học"`.
3. F12, Network, tab Preview, xem từng phần tử.
</details>

**Code tiếp:** thêm `?.` và `||` vào tên, giá, mô tả.

---

## Bước 10. Tự kiểm tra
- Bấm "Xem thêm" ở 2 thẻ khác nhau, 2 thẻ có mở độc lập không?
- Bấm "Tất cả khóa học", số lớp có tăng, chữ nút có đổi không?
- Thu nhỏ trình duyệt, có chuyển sang bản mobile không?
- Tự giải thích được 3 câu: **vì sao `showAll` ở Course, vì sao `openId` là mảng, vì sao dùng `map`.**

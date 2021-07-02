/*
Thường đc dùng cho những hàm chỉ có 1 câu lệnh, sẽ khiến code trông clean, gọn hơn(dùng cho hơn 1 câu lệnh
cũng đc)
This trong arrow function sẽ khác với this trong function khai báo bình thường, cụ thể this trong function bình thường là object mà gọi cái hàm ấy, còn this
trong arrow function thì để chỉ object định nghĩa ra cái hàm ấy
*/
var introduction = (name, tuoi) => {
    console.log("Hello " + name + ", toi " + tuoi + " tuoi")
}
introduction("Binh", 20)

var introduction2 = (Nganh, truong) => {
    console.log(Nganh)
    console.log(truong)
}
introduction2("Cong Nghe thong tin", "Hoc vien cong nghe buu chinh vien thong")
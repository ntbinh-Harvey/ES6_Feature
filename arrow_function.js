/*
Thường đc dùng cho những hàm chỉ có 1 câu lệnh, sẽ khiến code trông clean, gọn hơn(dùng cho hơn 1 câu lệnh
cũng đc)
This trong arrow function sẽ khác với this trong function khai báo bình thường, cụ thể this trong function bình thường là object mà gọi cái hàm ấy, còn this
trong arrow function thì để chỉ object định nghĩa ra cái hàm ấy
*/
this.name = "Quynh Anh <3";
var introduction = (name, age) => {
    console.log("Hello " + name + ", toi " + age + " tuoi")
    console.log(this.name);
}
introduction("Binh", 20)

var introduction2 = (Nganh, truong) => {
    console.log(Nganh)
    console.log(truong)
}
introduction2("Cong Nghe thong tin", "Hoc vien cong nghe buu chinh vien thong")
// phân biệt apply, bind, call với từ khoá this
var globalObj = {
    name: "binh",
    age: 20
};
function a1(gender, relationship) {
    console.log("Hello " + this.name + ", i'm " + this.age + " years old, " + "i am " + gender + ", i'm " + relationship);
} 
// 1. Bind sẽ tạo ra 1 function bản sao với function lấy làm mẫu, đồng nghĩa với việc mình có thể truyền đối số cho function mới như function cũ
var a2 = a1.bind(globalObj); //this trong function này bây giờ sẽ được hiểu là globalObj 
a1("male", "single");
a2("female", "in-relationship");
/* 
2. Apply và call về cơ bản đều giống nhau, cũng truyền vào 1 obj để this trong function sẽ biết đấy là obj nào. Ngoài ra khi sử dụng apply và call thì các hàm 
sẽ được thực thi ngay, 2 cái này chỉ khác nhau ở chỗ call thì đối số thứ 2 sẽ là các dối số của hàm cũ nhưng viết từng cái 1, còn với apply đối số thứ 2 sẽ là 
các đối số của hàm cũ nhưng truyền vào dưới dạng mảng
*/
a1.apply(globalObj, ["Shemale", "in-relationship"]);
a1.call(globalObj, "Others", "in-relationship");
/*
Có thể đặt giá trị cho các biến theo thứ tự trong 1 object hay 1 array chỉ bằng 1 câu lệnh
*/
var randomThings = ["Cat", 12, "Binh"];
var [a, b, c] = randomThings;
console.log(a)
console.log(b)
console.log(c)

// Ví dụ object
var banThan = {
    name: "Binh",
    age: 20,
    gender: "male"
}
var {name: ten, age: tuoi, gender: gioiTinh} = banThan
console.log(ten)
console.log(tuoi)
console.log(gioiTinh)


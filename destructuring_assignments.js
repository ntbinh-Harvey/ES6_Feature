/*
Có thể đặt giá trị cho các biến theo thứ tự trong 1 object hay 1 array chỉ bằng 1 câu lệnh, cái này thường sử dụng trong import export, hoặc mấY cái hooks trong react
*/
var randomThings = ["Cat", 12, "Binh"];
var [a, b, c] = randomThings;
a = "Dog"; 
console.log(a);
console.log(b);
console.log(c);
for(let item of randomThings) {
    console.log(item);
}
// Ví dụ object
var banThan = {
    name: "Binh",
    age: 20,
    gender: "male"
};
var banThan2 = {
    name: "Binh",
    age: 22,
    gender: "female"
};
var {name: ten, age: tuoi, gender: gioiTinh} = banThan;
var {name, age, gender} = banThan2;
console.log(ten);
console.log(tuoi);
console.log(gioiTinh);
console.log(name);
console.log(age);
console.log(gender);

function addressMaker(address) {
    const {city, state} = address;
    const newAddress = {
        city,
        state,
        country:"United States"
    };
    console.log(newAddress);
}
addressMaker({city: 'Austin', state: 'Texas'});
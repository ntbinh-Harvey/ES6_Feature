/* 
đại diện cho các tham số còn lại, thường được đặt ở sau cùng
*/
var dongVat = (ten1, ten2, ...other) => {
    console.log(ten1)
    console.log(ten2)
    console.log(other)
}
dongVat("Cat","Dog","Tuan anh","Binh", "Tien anh")
var dog = {
    name: 'Binh',
    age: 20
};
var dog2 = {
    ...dog,
    gender: 'female'
};
console.log(dog2);
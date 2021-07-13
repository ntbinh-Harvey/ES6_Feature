/* 
đại diện cho các tham số còn lại, thường được đặt ở sau cùng
*/
var dongVat = (ten1, ten2, ...other) => { // this is rest operator, the same as spread but for function
    console.log(ten1)
    console.log(ten2)
    console.log(other)
}
dongVat("Cat","Dog","Tuan anh","Binh", "Tien anh")
var dog = {
    name: 'Binh',
    nestedKey: {
        gender: 'male',
    },
    age: 20
};
var arr = [1,2,3];
var arr2 = [...arr]; // cơ bản spread k tham chiếu đến các giá trị trong obj hay arr cũ
arr2.push(true);
var dog2 = {
    ...dog,
    gender: 'female'
};
var dog3 = {...dog};
dog3.nestedKey.gender = "female"; // 1 level deep copy
console.log(arr);
console.log(arr2);
console.log(dog);
console.log(dog2);
console.log(dog3);
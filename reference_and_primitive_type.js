const dog = {
    name: 'Tuan anh',
    age: 20
};
var dog2 = dog;
// dog.name = 'Quan';
console.log(dog2.name); // in ra tên Quân vì nó k copy giá trị mà copy con trỏ
// lúc sau con trỏ chỉ đến 1 giá trị khác nên obj dog2 cũng chỉ đến giá trị ấy theo con trỏ
var dog3 = {
    ...dog // dùng spread operator để copy giá trị của obj dog
};
dog.name = 'Tien';
console.log(dog3.name);
var a = 5;
var b = a;
a= 3;
console.log(b);
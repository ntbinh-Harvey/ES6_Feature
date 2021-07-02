/* 
tất cả các kiểu copy dưới đây chỉ là shallow copy(có nghĩa là chỉ copy tham chiếu, khi thay đổi giá trị của obj này thì cũng sẽ thay đổi giá trị của obj kia), riêng
cái resr opreator là 1 level deep, muốn có 1 deep copy thì dễ nhất là JSON.parse(JSON.stringify(obj));
*/
const dog = {
    name: 'Tuan anh',
    age: 20
};
var dog2 = dog;
// dog.name = 'Quan';
console.log("dog2: " + dog2.name); 
/* 
in ra tên Quân vì nó k copy giá trị mà copy con trỏ
lúc sau con trỏ chỉ đến 1 giá trị khác nên obj dog2 cũng chỉ đến giá trị ấy theo con trỏ
*/ 
var dog3 = {
    ...dog // dùng spread operator để copy giá trị của obj dog
};
dog.name = 'Tien';
console.log("dog3: " + dog3.name);
var dog4 = Object.assign(dog);
dog4.name = "Tien Anh";
console.log("dog4: " + dog4.name);
console.log("dog: " + dog.name);
/* 
1. Var thường sẽ là globally scoped, hoặc function locally scoped, trong khi let và const sẽ là block scoped(tức là cứ trong phạm vi của nó chỉ trong cặp dấu 
ngoặc nhọn bất kỳ)
2. Biến khai báo với keyword var khi hoisting(là việc chuyển declaration của 1 variable lên đầu scope của nó) thì sẽ được init với giá trị undefined, trong khi đó 
với biến khai báo keyword let và const thì cũng đc hoisting cơ mà sẽ không khởi tạo với bất cứ giá trị gì và sẽ báo lỗi
3. Const khi khai báo phải gán cho nó 1 giá trị ngay lúc khai báo, và sau đó không thể khởi tạo giá trị mới cho biến ấy nữa, trong khi let và var thì hoàn toàn có thể
4. Var sau khi khai báo xong thì có thể khai báo lại biến tương tự như thế với keyword var nhưng let và const thì không thế
5. Lưu ý vs const, mặc dù sau khi khi khai báo xong theo lý thuyết k thể gán cho biến ấy 1 giá trị mới nhưng nếu biến ấy là 1 object hoặc 1 array thì mình vẫn có thể
gán cho các property trong object ấy hoặc các phần tử trong array 1 giá trị mới, chỉ là k thể const a = obj, xong a = obj_khác dược thôi. 
*/
// nếu bỏ cmt những đoạn mình cmt ở dưới thì sẽ thấy chương trình gặp lỗi
// 1
var globallyA = 3;
console.log("globally a in globally scope: " + globallyA);
function doSthg() {
    var fncVariable = 5;
    console.log("In doSthg function:");
    console.log("fncVariable: " + fncVariable);
    console.log("globallyA: " + globallyA);
}
doSthg();
// console.log("fncVariable outside function scope: " + fncVariable);
if(true) {
    let a = 5;
    const b = 1;
    console.log("a in block scope: " + a);
    console.log("b in block scope: " + b);
}
// console.log("a outside block scope: " + a);
// console.log("b outside block scope: " + b);

// 2
if(10 === 10) {
    console.log(a2);
    // console.log(b2);
    // console.log(c2);
    var a2 = 5;
    let b2 = 1;
    const c2 = 2;
}

// 3
// const a3;  
const a3 = 5;
// a3 = 6;

// 4 
var a4 = 2;
var a4 = 3;
console.log("var a4: " + a4);
let b4 = 2;
// let b4 = 3;
console.log("let b4: " + b4);
const c4 = 2;
// const c4 = 3;
console.log("const c4: " + c4);

// 5 
const a5 = {
    name: "binh",
    age: 21
}
a5.name = "binh2";
// a5 = {
//     name: "binh3",
//     age: 21
// };
console.log("a5.name: " + a5.name);
const b5 = [1, 2, 3];
b5[2] = 4;
// b5 = [1];
console.log("b5[2]: " + b5[2]);




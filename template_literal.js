const str1 = "Binh";
const str2 = "Irene";
const a = true;
const aFunc = () => {
    return 5;
}
const res = `${a === true ? "introduce:" : "nah"} 
${str2} is ${str1}'s lovers. 
In ${aFunc()} years, we will have the first taste of each other`; // template literal
// You can put any js expression in the ${} 
const res2 = "hello \n" + "Binh"; // the old way to create multiline string
console.log(res);
console.log(res2);
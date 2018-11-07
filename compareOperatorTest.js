console.log('字符串按照字典顺序进行比较。');
console.log('cat' > 'dog'); // false
console.log('cat' > 'catalog'); // false

console.log('JavaScript 引擎内部首先比较首字符的 Unicode 码点。如果相等，再比较第二个字符的 Unicode 码点，以此类推。');
console.log('cat' > 'Cat'); // true'

console.log('由于所有字符都有 Unicode 码点，因此汉字也可以比较。“大”的 Unicode 码点是22823，“小”是23567');
console.log('大' > '小'); // false

console.log('如果两个运算子都是原始类型的值，则是先转成数值再比较。');
console.log(5 > '4'); // true
// 等同于 5 > Number('4')
// 即 5 > 4

console.log(true > false); // true
// 等同于 Number(true) > Number(false)
// 即 1 > 0

console.log(2 > true); // true
// 等同于 2 > Number(true)
// 即 2 > 1

console.log('任何值（包括NaN本身）与NaN比较，返回的都是false。');
console.log(1 > NaN); // false
console.log(1 <= NaN); // false
console.log('1' > NaN); // false
console.log('1' <= NaN); // false
console.log(NaN > NaN); // false
console.log(NaN <= NaN); // false


console.log('对象转换成原始类型的值，算法是先调用valueOf方法；如果返回的还是对象，再接着调用toString方法');
var x = [2];
console.log(x > '11'); // true
// 等同于 [2].valueOf().toString() > '11'
// 即 '2' > '11'

x.valueOf = function () { return '1' };
console.log(x > '11'); // false
// 等同于 [2].valueOf() > '11'
// 即 '1' > '11'

console.log('两个对象之间的比较也是如此。');
console.log([2] > [1]); // true
// 等同于 [2].valueOf().toString() > [1].valueOf().toString()
// 即 '2' > '1'

console.log([2] > [11]); // true
// 等同于 [2].valueOf().toString() > [11].valueOf().toString()
// 即 '2' > '11'

console.log({ x: 2 } >= { x: 1 }); // true
// 等同于 { x: 2 }.valueOf().toString() >= { x: 1 }.valueOf().toString()
// 即 '[object Object]' >= '[object Object]'


console.log('如果两个值的类型不同，直接返回false。');
console.log(1 === "1"); // false
console.log(true === "true"); // false


console.log('同一类型的原始类型的值（数值、字符串、布尔值）比较时，值相同就返回true，值不同就返回false。');
console.log(1 === 0x1); // true

console.log('需要注意的是，NaN与任何值都不相等（包括自身）。另外，正0等于负0。');
console.log(NaN === NaN);  // false
console.log(+0 === -0); // true


console.log('两个复合类型（对象、数组、函数）的数据比较时，不是比较它们的值是否相等，而是比较它们是否指向同一个地址。');
console.log({} === {}); // false
console.log([] === []); // false
console.log(function () {} === function () {}); // false


console.log('如果两个变量引用同一个对象，则它们相等。');
var v1 = {};
var v2 = v1;
console.log(v1 === v2); // true


console.log('注意，对于两个对象的比较，严格相等运算符比较的是地址，而大于或小于运算符比较的是值。');
var obj1 = {};
var obj2 = {};

console.log(obj1 > obj2); // false
console.log(obj1 < obj2); // false
console.log(obj1 === obj2); // false


console.log('undefined和null与自身严格相等。');
console.log(undefined === undefined); // true
console.log(null === null); // true

console.log('由于变量声明后默认值是undefined，因此两个只声明未赋值的变量是相等的。');
var v1;
var v2;
console.log(v1 === v2); // true


console.log('严格相等运算符有一个对应的“严格不相等运算符”（!==），它的算法就是先求严格相等运算符的结果，然后返回相反值。');
console.log(1 !== '1'); // true
// 等同于
console.log(!(1 === '1'));


console.log('相等运算符用来比较相同类型的数据时，与严格相等运算符完全一样。');
console.log(1 == 1.0);
// 等同于
console.log(1 === 1.0);

console.log('原始类型的值会转换成数值再进行比较。');
console.log(1 == true); // true
// 等同于 1 === Number(true)

console.log(0 == false); // true
// 等同于 0 === Number(false)

console.log(2 == true); // false
// 等同于 2 === Number(true)

console.log(2 == false); // false
// 等同于 2 === Number(false)

console.log('true' == true); // false
// 等同于 Number('true') === Number(true)
// 等同于 NaN === 1

console.log('' == 0); // true
// 等同于 Number('') === 0
// 等同于 0 === 0

console.log('' == false);  // true
// 等同于 Number('') === Number(false)
// 等同于 0 === 0

console.log('1' == true);  // true
// 等同于 Number('1') === Number(true)
// 等同于 1 === 1

console.log('\n  123  \t' == 123); // true
// 因为字符串转为数字时，省略前置和后置的空格


console.log('对象（这里指广义的对象，包括数组和函数）与原始类型的值比较时，对象转换成原始类型的值，再进行比较。');
// 对象与数值比较时，对象转为数值
console.log([1] == 1); // true
// 等同于 Number([1]) == 1

// 对象与字符串比较时，对象转为字符串
console.log([1] == '1'); // true
// 等同于 String([1]) == '1'
console.log([1, 2] == '1,2'); // true
// 等同于 String([1, 2]) == '1,2'

// 对象与布尔值比较时，两边都转为数值
console.log([1] == true); // true
// 等同于 Number([1]) == Number(true)
console.log([2] == true); // false
// 等同于 Number([2]) == Number(true)


console.log('undefined和null与其他类型的值比较时，结果都为false，它们互相比较时结果为true。');
console.log(false == null); // false
console.log(false == undefined); // false

console.log(0 == null); // false
console.log(0 == undefined); // false

console.log(undefined == null); // true


console.log('相等运算符隐藏的类型转换，会带来一些违反直觉的结果。');
console.log(0 == '');             // true
console.log(0 == '0');            // true

console.log(2 == true);           // false
console.log(2 == false);          // false

console.log(false == 'false');    // false
console.log(false == '0');        // true

console.log(false == undefined);  // false
console.log(false == null);       // false
console.log(null == undefined);   // true

console.log(' \t\r\n ' == 0);     // true

console.log('相等运算符有一个对应的“不相等运算符”（!=），它的算法就是先求相等运算符的结果，然后返回相反值。');
console.log(1 != '1'); // false

// 等同于
console.log(!(1 == '1'));
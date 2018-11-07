console.log(typeof 123);
console.log(typeof "123");
console.log(typeof true);
console.log(typeof a);
if (typeof a === "undefined") {
    // ...
}
a = null;
console.log(typeof a);
a = {};
console.log(typeof a);

function f() {

}
console.log(typeof f);
console.log(typeof window);
console.log(typeof {});
console.log(typeof []);



if (!undefined) {
    console.log('undefined is false');
}
// undefined is false

if (!null) {
    console.log('null is false');
}
// null is false

console.log(undefined == null);
// true

console.log(Number(null));
console.log(Number(undefined));



// 变量声明了，但没有赋值
var i;
console.log(i); // undefined

// 调用函数时，应该提供的参数没有提供，该参数等于 undefined
function f(x) {
    return x;
}
console.log(f()); // undefined

// 对象没有赋值的属性
var  o = new Object();
console.log(o.p); // undefined

// 函数没有返回值时，默认返回 undefined
function f() {}
console.log(f()); // undefined



if ([]) {
    console.log('true');
}
// true

if ({}) {
    console.log('true');
}
// true



console.log(0.1 + 0.2 === 0.3);
// false

console.log(0.3 / 0.1);
// 2.9999999999999996

console.log((0.3 - 0.2) === (0.2 - 0.1));
// false


console.log(Math.pow(2, 1024));
// TODO 这里有问题啊，https://wangdoc.com/javascript/types/number.html说下面这句返回0，但是我运行不是这样
console.log(Math.pow(2, -1075));
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);


// 小数点前的数字多于21位，会使用科学计数法
console.log(1234567890123456789012);
console.log(123456789012345678901);

// 小数点后的零多于5个，会使用科学计数法
console.log(0.0000003);
console.log(0.000003);

console.log(0xff);      // 255
console.log(0o377);     // 255
console.log(0b11);      // 255

console.log(+0 === -0);
console.log(0 === -0);
console.log(0 === +0);
console.log(1 / +0);
console.log(1 / -0);

console.log(5 - 'x');       // NaN
console.log(Math.acos(2));  // NaN
console.log(Math.log(-1));  // NaN
console.log(Math.sqrt(-1)); // NaN
console.log(typeof NaN);    // 'number'

// NaN不等于任何值
console.log(NaN == NaN);
console.log([NaN].indexOf(NaN));
console.log(Boolean(NaN));
console.log(NaN + 32);
console.log(0 / 0);

console.log(Infinity > 1000);       // true
console.log(-Infinity < -1000);     // true
console.log(Infinity > NaN);        // false
console.log(Infinity < NaN);        // false
console.log(-Infinity > NaN);       // false
console.log(-Infinity < NaN);       // false

// Infinity的四则运算，符合无穷的数学计算规则。
console.log(5 * Infinity);      // Infinity
console.log(5 - Infinity);      // -Infinity
console.log(Infinity / 5);      // Infinity
console.log(5 / Infinity);      // 0

// 0乘以Infinity，返回NaN；0除以Infinity，返回0；Infinity除以0，返回Infinity。
console.log(0 * Infinity);      // NaN
console.log(0 / Infinity);      // 0
console.log(Infinity / 0);      // Infinity

// Infinity加上或乘以Infinity，返回的还是Infinity。
console.log(Infinity + Infinity);   // Infinity
console.log(Infinity * Infinity);   // Infinity

// Infinity减去或除以Infinity，得到NaN。
console.log(Infinity - Infinity);   // NaN
console.log(Infinity / Infinity);   // NaN

// Infinity与null计算时，null会转成0，等同于与0的计算。
console.log(null * Infinity);       // NaN
console.log(null / Infinity);       // 0
console.log(Infinity / null);       // Infinity

// Infinity与undefined计算，返回的都是NaN。
console.log(undefined + Infinity); // NaN
console.log(undefined - Infinity); // NaN
console.log(undefined * Infinity); // NaN
console.log(undefined / Infinity); // NaN
console.log(Infinity / undefined); // NaN

console.log(parseInt('123'));       // 123
console.log(parseInt('   81'));     // 81
console.log(parseInt(1.23));        // 1
console.log(parseInt('1.23'));      // 1

console.log(parseInt('8a')); // 8
console.log(parseInt('12**')); // 12
console.log(parseInt('12.34')); // 12
console.log(parseInt('15e2')); // 15
console.log(parseInt('15px')); // 15

console.log(parseInt('abc')); // NaN
console.log(parseInt('.3')); // NaN
console.log(parseInt('')); // NaN
console.log(parseInt('+')); // NaN
console.log(parseInt('+1')) // 1

// 如果字符串以0x或0X开头，parseInt会将其按照十六进制数解析。
console.log(parseInt('0x10'));  // 16

// 如果字符串以0开头，将其按照10进制解析。
console.log(parseInt('011'));  // 11

// 对于那些会自动转为科学计数法的数字，parseInt会将科学计数法的表示方法视为字符串，因此导致一些奇怪的结果。
console.log(parseInt(1000000000000000000000.5)); // 1
// 等同于
console.log(parseInt('1e+21')); // 1

console.log(parseInt(0.0000008)); // 8
// 等同于
console.log(parseInt('8e-7')); // 8



console.log(parseInt('1000')); // 1000
// 等同于
console.log(parseInt('1000', 10)); // 1000



console.log(parseInt('1000', 2)); // 8
console.log(parseInt('1000', 6)); // 216
console.log(parseInt('1000', 8)); // 512



// 如果第二个参数不是数值，会被自动转为一个整数。这个整数只有在2到36之间，才能得到有意义的结果，超出这个范围，则返回NaN。如果第二个参数是0、undefined和null，则直接忽略。
console.log(parseInt('10', 37)); // NaN
console.log(parseInt('10', 1)); // NaN
console.log(parseInt('10', 0)); // 10
console.log(parseInt('10', null)); // 10
console.log(parseInt('10', undefined)); // 10

// 如果字符串包含对于指定进制无意义的字符，则从最高位开始，只返回可以转换的数值。如果最高位无法转换，则直接返回NaN。
console.log(parseInt('1546', 2)); // 1
console.log(parseInt('546', 2)); // NaN


// 前面说过，如果parseInt的第一个参数不是字符串，会被先转为字符串。这会导致一些令人意外的结果。
console.log(parseInt(0x11, 36)); // 43
console.log(parseInt(0x11, 2)); // 1
// 等同于
console.log(parseInt(String(0x11), 36));
console.log(parseInt(String(0x11), 2));
// 等同于
console.log(parseInt('17', 36));
console.log(parseInt('17', 2));

// 这种处理方式，对于八进制的前缀0，尤其需要注意。
console.log(parseInt(011, 2)); // NaN
// 等同于
console.log(parseInt(String(011), 2));
// 等同于
console.log(parseInt(String(9), 2));


console.log(parseFloat('3.14'));
console.log(parseFloat('314e-2')); // 3.14
console.log(parseFloat('0.0314E+2')); // 3.14
console.log(parseFloat('3.14more non-digit characters')); // 3.14

// parseFloat方法会自动过滤字符串前导的空格。\t是垂直制表符
console.log(parseFloat('\t\v\r12.34\n ')); // 12.34

// 如果参数不是字符串，或者字符串的第一个字符不能转化为浮点数，则返回NaN。
console.log(parseFloat([])); // NaN
console.log(parseFloat('FF2')); // NaN
console.log(parseFloat('')); // NaN


console.log(parseFloat(true));  // NaN
console.log(Number(true)); // 1

console.log(parseFloat(null)); // NaN
console.log(Number(null)); // 0

console.log(parseFloat('')); // NaN
console.log(Number('')); // 0

console.log(parseFloat('123.45#')); // 123.45
console.log(Number('123.45#')); // NaN


console.log(isNaN(NaN));    // true
console.log(isNaN(123));    // false

console.log(isNaN('Hello')); // true
// 相当于
console.log(isNaN(Number('Hello'))); // true



console.log(isNaN({})); // true
// 等同于
console.log(isNaN(Number({}))); // true

console.log(isNaN(['xzy'])); // true
// 等同于
console.log(isNaN(Number(['xzy']))); // true


console.log(isNaN([])); // false
console.log(isNaN([123])); // false
console.log(isNaN(['123'])); // false


// 判断NaN更可靠的方法是，利用NaN为唯一不等于自身的值的这个特点，进行判断。
function myIsNaN(value) {
    return value !== value;
}


console.log(isFinite(Infinity)); // false
console.log(isFinite(-Infinity)); // false
console.log(isFinite(NaN)); // false
console.log(isFinite(undefined)); // false
console.log(isFinite(null)); // true
console.log(isFinite(-1)); // true


multiLineString = (function () { /*
line 1
line 2
line 3
*/}).toString().split('\n').slice(1, -1).join('\n');
console.log(multiLineString);



console.log('\251'); // "©"
console.log('\xA9'); // "©"
console.log('\u00A9'); // "©"

console.log('\172' === 'z'); // true
console.log('\x7A' === 'z'); // true
console.log('\u007A' === 'z'); // true

// 如果在非特殊字符前面使用反斜杠，则反斜杠会被省略。
console.log('\a');

console.log("Prev \\ Next");


var s = 'hello';
console.log(s[0]); // "h"
console.log(s[1]); // "e"
console.log(s[4]); // "o"

// 直接对字符串使用方括号运算符
console.log('hello'[1]); // "e"

// 如果方括号中的数字超过字符串的长度，或者方括号中根本不是数字，则返回undefined。
console.log('abc'[3]); // undefined
console.log('abc'[-1]); // undefined
console.log('abc'['x']); // undefined


// 无法改变字符串之中的单个字符，字符串内部的单个字符无法改变和增删，这些操作会默默地失败。
var s = 'hello';

delete s[0];
console.log(s); // "hello"

s[1] = 'a';
console.log(s); // "hello"

s[5] = '!';
console.log(s); // "hello"

// length属性返回字符串的长度，该属性也是无法改变的。
var s = 'hello';
console.log(s.length); // 5

s.length = 3;
console.log(s.length); // 5

s.length = 7;
console.log(s.length); // 5

console.log('𝌆'.length);



var string = 'Hello World!';
// nodejs中没有btoa和atob，所以用Buffer代替
// console.log(btoa(string)); // "SGVsbG8gV29ybGQh"
// console.log(atob('SGVsbG8gV29ybGQh')); // "Hello World!"
var s1 = Buffer.from(string, 'utf8').toString('base64');
var s2 = Buffer.from(s1, 'base64').toString('utf8');
console.log(s1);
console.log(s2);

// 中文base64
// btoa('你好') // 报错，可能浏览器端是报错的，但是nodejs是不报错的
var ch = '你好';
var chBase64 = Buffer.from(ch, 'utf8').toString('base64');
console.log(chBase64);

// encodeURI和encodeURIComponent
// encodeURI是将中文转码，encodeURIComponent是将所有非a-zA-Z0-9的字符转码
console.log('encodeURI:', encodeURI('http://www.baidu.com'));
console.log('encodeURIComponent:', encodeURIComponent('http://www.baidu.com'));
console.log('encodeURI:', encodeURI('https://hellozjf.com/博客/1'));
console.log('encodeURIComponent:', encodeURIComponent('https://hellozjf.com/博客/1'));

function b64Encode(str) {
    var encodeURIComponentStr = encodeURIComponent(str);
    return Buffer.from(encodeURIComponentStr, 'utf8').toString('base64');
}

function b64Decode(str) {
    var decodeURIComponentStr = Buffer.from(str, 'base64').toString('utf8');
    return decodeURIComponent(decodeURIComponentStr);
}

// btoa('你好') // 报错，可能浏览器端是报错的，但是nodejs是不报错的
var ch = '你好';
var chBase64 = b64Encode(ch);
console.log(chBase64);
console.log(b64Decode(chBase64));
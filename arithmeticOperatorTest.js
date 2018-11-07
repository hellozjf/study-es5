console.log(1 + 1); // 2
console.log(true + true);   // 2
console.log(1 + true);   // 2

console.log('如果是两个字符串相加，这时加法运算符会变成连接运算符，返回一个新的字符串，将两个原字符串连接在一起。');
console.log('a' + 'bc'); // "abc"

console.log('如果一个运算子是字符串，另一个运算子是非字符串，这时非字符串会转成字符串，再连接在一起。');
console.log(1 + 'a'); // "1a"
console.log(false + 'a'); // "falsea"


console.log('加法运算符是在运行时决定，到底是执行相加，还是执行连接。也就是说，运算子的不同，导致了不同的语法行为，这种现象称为“重载”（overload）。');
console.log('3' + 4 + 5); // "345"
console.log(3 + 4 + '5'); // "75"


console.log('除了加法运算符，其他算术运算符（比如减法、除法和乘法）都不会发生重载。它们的规则是：所有运算子一律转为数值，再进行相应的数学运算。');
console.log(1 - '2'); // -1
console.log(1 * '2'); // 2
console.log(1 / '2'); // 0.5


console.log('如果运算子是对象，必须先转成原始类型的值，然后再相加。');
var obj = { p: 1 };
console.log(obj + 2); // "[object Object]2"


console.log('对象转成原始类型的值，规则如下。');
var obj = { p: 1 };
obj.valueOf().toString(); // "[object Object]"


console.log('知道了这个规则以后，就可以自己定义valueOf方法或toString方法，得到想要的结果。');
var obj = {
    valueOf: function () {
        return 1;
    }
};

console.log(obj + 2); // 3


console.log('下面是自定义toString方法的例子。');
var obj = {
    toString: function () {
        return 'hello';
    }
};

console.log(obj + 2); // "hello2"


console.log('这里有一个特例，如果运算子是一个Date对象的实例，那么会优先执行toString方法。');
var obj = new Date();
obj.valueOf = function () { return 1 };
obj.toString = function () { return 'hello' };

console.log(obj + 2); // "hello2"



console.log('余数运算符（%）返回前一个运算子被后一个运算子除，所得的余数。');
console.log(12 % 5); // 2


console.log('运算结果的正负号由第一个运算子的正负号决定');
console.log(-1 % 2); // -1
console.log(1 % -2); // 1


console.log('为了得到负数的正确余数值，可以先使用绝对值函数。');
// 正确的写法
function isOdd(n) {
    return Math.abs(n % 2) === 1;
}
console.log(isOdd(-5)); // true
console.log(isOdd(-4)); // false


console.log('余数运算符还可以用于浮点数的运算。但是，由于浮点数不是精确的值，无法得到完全准确的结果');
console.log(6.5 % 2.1); // 0.19999999999999973



console.log('数值运算符的作用在于可以将任何值转为数值（与Number函数的作用相同）。');
console.log(+true); // 1
console.log(+[]); // 0
console.log(+{}); // NaN


console.log('指数运算符（**）完成指数运算，前一个运算子是底数，后一个运算子是指数。');
console.log(2 ** 4); // 16


console.log('指数运算符是右结合，而不是左结合。即多个指数运算符连用时，先进行最右边的计算。');
// 相当于 2 ** (3 ** 2)
console.log(2 ** 3 ** 2);       // 512
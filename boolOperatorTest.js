console.log('对于非布尔值，取反运算符会将其转为布尔值。可以这样记忆，以下六个值取反后为true，其他值都为false。');
console.log(!undefined);    // true
console.log(!null);         // true
console.log(!0);            // true
console.log(!NaN);          // true
console.log(!"");           // true
console.log(!false);        // true

console.log(!54);           // false
console.log(!'hello');      // false
console.log(![]);           // false
console.log(!{});           // false

console.log('如果对一个值连续做两次取反运算，等于将其转为对应的布尔值，与Boolean函数的作用相同。');
var x = 1;
console.log(!!x);
// 等同于
console.log(Boolean(x));


console.log('且运算符（&&）往往用于多个表达式的求值。');
console.log('t' && ''); // ""
console.log('t' && 'f'); // "f"
console.log('t' && (1 + 2)); // 3
console.log('' && 'f'); // ""
console.log('' && ''); // ""

var x = 1;
console.log((1 - 1) && ( x += 1)); // 0
console.log(x); // 1


console.log('这种跳过第二个运算子的机制，被称为“短路”。有些程序员喜欢用它取代if结构，比如下面是一段if结构的代码，就可以用且运算符改写。');
var i;
function doSomething() {}
if (i) {
    doSomething();
}
// 等价于
i && doSomething();


console.log('且运算符可以多个连用，这时返回第一个布尔值为false的表达式的值。如果所有表达式的布尔值都为true，则返回最后一个表达式的值。');
console.log(true && 'foo' && '' && 4 && 'foo' && true);
// ''

console.log(1 && 2 && 3);
// 3


console.log('或运算符（||）也用于多个表达式的求值。它的运算规则是：如果第一个运算子的布尔值为true，则返回第一个运算子的值，且不再对第二个运算子求值；如果第一个运算子的布尔值为false，则返回第二个运算子的值。');
console.log('t' || ''); // "t"
console.log('t' || 'f'); // "t"
console.log('' || 'f'); // "f"
console.log('' || ''); // ""

console.log('短路规则对这个运算符也适用。');
var x = 1;
console.log(true || (x = 2)); // true
console.log(x); // 1


console.log('或运算符可以多个连用，这时返回第一个布尔值为true的表达式的值。如果所有表达式都为false，则返回最后一个表达式的值。');
console.log(false || 0 || '' || 4 || 'foo' || true);
// 4

console.log(false || 0 || '');
// ''


console.log('或运算符常用于为一个变量设置默认值。');
function saveText(text) {
    text = text || '';
    // ...
}

// 或者写成
saveText(this.text || '');

console.log('三元条件运算符由问号（?）和冒号（:）组成，分隔三个表达式。它是 JavaScript 语言唯一一个需要三个运算子的运算符。如果第一个表达式的布尔值为true，则返回第二个表达式的值，否则返回第三个表达式的值。');
console.log('t' ? 'hello' : 'world'); // "hello"
console.log(0 ? 'hello' : 'world'); // "world"
console.log(true ? 'T' : 'F');
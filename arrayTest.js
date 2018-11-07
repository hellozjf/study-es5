console.log('数组（array）是按次序排列的一组值。每个值的位置都有编号（从0开始），整个数组用方括号表示。');
var arr = ['a', 'b', 'c'];


console.log('除了在定义时赋值，数组也可以先定义后赋值。');
var arr = [];
arr[0] = 'a';
arr[1] = 'b';
arr[2] = 'c';


console.log('任何类型的数据，都可以放入数组。');
var arr = [
    {a: 1},
    [1, 2, 3],
    function() {return true;}
];
console.log(arr[0]); // Object {a: 1}
console.log(arr[1]); // [1, 2, 3]
console.log(arr[2]); // function (){return true;}


console.log('如果数组的元素还是数组，就形成了多维数组。');
var a = [[1, 2], [3, 4]];
console.log(a[0][1]); // 2
console.log(a[1][1]); // 4


console.log('本质上，数组属于一种特殊的对象。typeof运算符会返回数组的类型是object。');
console.log(typeof [1, 2, 3]);   // "object"


console.log('数组的特殊性体现在，它的键名是按次序排列的一组整数（0，1，2...）。');
var arr = ['a', 'b', 'c'];
console.log(Object.keys(arr));      // ["0", "1", "2"]


console.log('只要是数组，就一定有length属性。该属性是一个动态的值，等于键名中的最大整数加上1。');
var arr = ['a', 'b'];
console.log(arr.length); // 2
arr[2] = 'c';
console.log(arr.length); // 3
arr[9] = 'd';
console.log(arr.length); // 10
arr[1000] = 'e';
console.log(arr.length); // 1001


console.log('length属性是可写的。如果人为设置一个小于当前成员个数的值，该数组的成员会自动减少到length设置的值。');
var arr = [ 'a', 'b', 'c' ];
console.log(arr.length); // 3
arr.length = 2;
console.log(arr); // ["a", "b"]


console.log('清空数组的一个有效方法，就是将length属性设为0。');
var arr = [ 'a', 'b', 'c' ];
arr.length = 0;
console.log(arr); // []


console.log('如果人为设置length大于当前元素个数，则数组的成员数量会增加到这个值，新增的位置都是空位。');
var a = ['a'];
a.length = 3;
console.log(a[1]); // undefined



console.log('如果人为设置length为不合法的值，JavaScript 会报错。');
// 设置负值
// [].length = -1
// RangeError: Invalid array length

// 数组元素个数大于等于2的32次方
//     [].length = Math.pow(2, 32)
// RangeError: Invalid array length

// 设置字符串
//     [].length = 'abc'
// RangeError: Invalid array length



console.log('由于数组本质上是一种对象，所以可以为数组添加属性，但是这不影响length属性的值。');
var a = [];

a['p'] = 'abc';
console.log(a.length); // 0

a[2.1] = 'abc';
console.log(a.length); // 0


console.log('检查某个键名是否存在的运算符in，适用于对象，也适用于数组。匹配的时候会将数字转化为字符串');
var arr = [ 'a', 'b', 'c' ];
console.log(2 in arr);  // true
console.log('2' in arr); // true
console.log(4 in arr); // false


console.log('注意，如果数组的某个位置是空位，in运算符返回false。');
var arr = [];
arr[100] = 'a';

console.log(100 in arr); // true
console.log(1 in arr); // false



console.log('for...in循环不仅可以遍历对象，也可以遍历数组，毕竟数组只是一种特殊对象。');
var a = [1, 2, 3];

for (var i in a) {
    console.log(a[i]);
}



console.log('for...in不仅会遍历数组所有的数字键，还会遍历非数字键。');
var a = [1, 2, 3];
a.foo = true;

for (var key in a) {
    console.log(key);
}



console.log('数组的遍历可以考虑使用for循环或while循环。');
var a = [1, 2, 3];

// for循环
for(var i = 0; i < a.length; i++) {
    console.log(a[i]);
}

// while循环
var i = 0;
while (i < a.length) {
    console.log(a[i]);
    i++;
}

var l = a.length;
while (l--) {
    console.log(a[l]);
}


console.log('数组的forEach方法，也可以用来遍历数组');
var colors = ['red', 'green', 'blue'];
colors.forEach(function (color) {
    console.log(color);
});



console.log('当数组的某个位置是空元素，即两个逗号之间没有任何值，我们称该数组存在空位（hole）。');
var a = [1, , 1];
console.log(a.length); // 3


console.log('需要注意的是，如果最后一个元素后面有逗号，并不会产生空位。也就是说，有没有这个逗号，结果都是一样的。');
var a = [1, 2, 3,];

console.log(a.length); // 3
console.log(a); // [1, 2, 3]


console.log('数组的空位是可以读取的，返回undefined。');
var a = [, , ,];
console.log(a[1]); // undefined


console.log('使用delete命令删除一个数组成员，会形成空位，并且不会影响length属性。');
var a = [1, 2, 3];
delete a[1];
console.log(a[1]); // undefined
console.log(a.length); // 3
delete a[2];
console.log(a[2]);
console.log(a.length);


console.log('数组的某个位置是空位，与某个位置是undefined，是不一样的。如果是空位，使用数组的forEach方法、for...in结构、以及Object.keys方法进行遍历，空位都会被跳过。');
var a = [, , ,];

a.forEach(function (x, i) {
    console.log(i + '. ' + x);
})
// 不产生任何输出

for (var i in a) {
    console.log(i);
}
// 不产生任何输出

console.log(Object.keys(a));
// []


console.log('如果某个位置是undefined，遍历的时候就不会被跳过。');
var a = [undefined, undefined, undefined];

a.forEach(function (x, i) {
    console.log(i + '. ' + x);
});
// 0. undefined
// 1. undefined
// 2. undefined

for (var i in a) {
    console.log(i);
}
// 0
// 1
// 2

Object.keys(a)
// ['0', '1', '2']



console.log('类似数组的对象');
var obj = {
    0: 'a',
    1: 'b',
    2: 'c',
    length: 3
};

console.log(obj[0]); // 'a'
console.log(obj[1]); // 'b'
console.log(obj.length); // 3
// obj.push('d') // TypeError: obj.push is not a function



console.log('但是有一个问题，这种length属性不是动态值，不会随着成员的变化而变化。');
var obj = {
    length: 0
};
obj[3] = 'd';
console.log(obj.length); // 0


console.log('典型的“类似数组的对象”是函数的arguments对象，以及大多数 DOM 元素集，还有字符串。');
// arguments对象
function args() { return arguments }
var arrayLike = args('a', 'b');

console.log(arrayLike[0]); // 'a'
console.log(arrayLike.length); // 2
console.log(arrayLike instanceof Array); // false

// DOM元素集
// var elts = document.getElementsByTagName('h3');
// elts.length // 3
// elts instanceof Array // false

// 字符串
console.log('abc'[1]); // 'b'
console.log('abc'.length); // 3
console.log('abc' instanceof Array); // false


console.log('数组的slice方法可以将“类似数组的对象”变成真正的数组。');
var arr = Array.prototype.slice.call(arrayLike);


console.log('除了转为真正的数组，“类似数组的对象”还有一个办法可以使用数组的方法，就是通过call()把数组的方法放到对象上面。');
function print(value, index) {
    console.log(index + ' : ' + value);
}

Array.prototype.forEach.call(arrayLike, print);


console.log('下面的例子就是通过这种方法，在arguments对象上面调用forEach方法。');

// forEach 方法
function logArgs() {
    Array.prototype.forEach.call(arguments, function (elem, i) {
        console.log(i + '. ' + elem);
    });
}

// 等同于 for 循环
function logArgs() {
    for (var i = 0; i < arguments.length; i++) {
        console.log(i + '. ' + arguments[i]);
    }
}


console.log('字符串也是类似数组的对象，所以也可以用Array.prototype.forEach.call遍历。');
Array.prototype.forEach.call('abc', function (chr) {
    console.log(chr);
});


console.log('注意，这种方法比直接使用数组原生的forEach要慢，所以最好还是先将“类似数组的对象”转为真正的数组，然后再直接调用数组的forEach方法。');
var arr = Array.prototype.slice.call('abc');
arr.forEach(function (chr) {
    console.log(chr);
});
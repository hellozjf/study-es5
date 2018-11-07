// 对象的所有键名都是字符串（ES6 又引入了 Symbol 值也可以作为键名），所以加不加引号都可以。
var obj = {
    foo: 'Hello',
    bar: 'World'
};

// 最后一个属性后面可以加逗号（trailing comma），也可以不加。
var obj = {
    1: 'a',
    3.2: 'b',
    1e2: true,
    1e-2: true,
    .234: true,
    0xFF: true,
};
console.debug('obj = %o', obj);
console.debug(obj['100']);


var obj = {
    p: function (x) {
        return 2 * x;
    }
};

console.log(obj.p(1)); // 2


var o1 = {};
var o2 = { bar: 'hello' };

// 属性可以动态创建，不必在对象声明时就指定。
o1.foo = o2;
console.log(o1.foo.bar); // "hello"


var obj = {};
obj.foo = 123;
console.log(obj.foo); // 123


// 如果不同的变量名指向同一个对象，那么它们都是这个对象的引用，也就是说指向同一个内存地址。修改其中一个变量，会影响到其他所有变量
var o1 = {};
var o2 = o1;

o1.a = 1;
console.log(o2.a); // 1

o2.b = 2;
console.log(o1.b); // 2


// 如果取消某一个变量对于原对象的引用，不会影响到另一个变量
var o1 = {};
var o2 = o1;

o1 = 1;
console.log(o2); // {}

console.log('但是，这种引用只局限于对象，如果两个变量指向同一个原始类型的值。那么，变量这时都是值的拷贝。');
var x = 1;
var y = x;

x = 2;
console.log(y); // 1

console.log('如果对象在行首，最好加括号，eval语句（作用是对字符串求值）');
console.log(eval('{foo: 123}')); // 123
console.log(eval('({foo: 123})')); // {foo: 123}


console.log('读取对象的属性，有两种方法，一种是使用点运算符，还有一种是使用方括号运算符。');
var obj = {
    p: 'Hello World'
};

console.log(obj.p); // "Hello World"
console.log(obj['p']); // "Hello World"


console.log('如果使用方括号运算符，键名必须放在引号里面，否则会被当作变量处理。');
var foo = 'bar';

var obj = {
    foo: 1,
    bar: 2
};

console.log(obj.foo);  // 1
console.log(obj[foo]);  // 2


console.log('方括号运算符内部还可以使用表达式，数字键可以不加引号，因为会自动转成字符串');
var obj = {
    0.7: 'Hello World'
};

console.log(obj['0.7']); // "Hello World"
console.log(obj['0' + '.' + '7']); // "Hello World"
console.log(obj[0.7]); // "Hello World"

console.log('数值键名不能使用点运算符（因为会被当成小数点），只能使用方括号运算符。');
var obj = {
    123: 'hello world'
};

// console.log(obj.123); // 报错
console.log(obj[123]); // "hello world"


console.log('点运算符和方括号运算符，不仅可以用来读取值，还可以用来赋值。');
var obj = {};

obj.foo = 'Hello';
obj['bar'] = 'World';

console.log('JavaScript 允许属性的“后绑定”，也就是说，你可以在任意时刻新增属性，没必要在定义对象的时候，就定义好属性。');
var obj = {};
obj.p = 1;

console.log('查看一个对象本身的所有属性，可以使用Object.keys方法。');
var obj = {
    key1: 1,
    key2: 2
};

console.log(Object.keys(obj));



console.log('delete命令用于删除对象的属性，删除成功后返回true。');
var obj = { p: 1 };
console.log(Object.keys(obj)); // ["p"]

console.log(delete obj.p); // true
console.log(obj.p); // undefined
console.log(Object.keys(obj)); // []



console.log('删除一个不存在的属性，delete不报错，而且返回true。');
var obj = {};
console.log(delete obj.p); // true


console.log('只有一种情况，delete命令会返回false，那就是该属性存在，且不得删除。');
var obj = Object.defineProperty({}, 'p', {
    value: 123,
    configurable: false
});

console.log(obj.p); // 123
console.log(delete obj.p); // false


console.log('delete命令只能删除对象本身的属性，无法删除继承的属性');
var obj = {};
console.log(delete obj.toString); // true
console.log(obj.toString); // function toString() { [native code] }



console.log('in运算符用于检查对象是否包含某个属性（注意，检查的是键名，不是键值），如果包含就返回true，否则返回false。它的左边是一个字符串，表示属性名，右边是一个对象。');
var obj = { p: 1 };
console.log('p' in obj); // true
console.log('toString' in obj); // true

console.log('可以使用对象的hasOwnProperty方法判断一下，是否为对象自身的属性。');
var obj = {};
if ('toString' in obj) {
    console.log(obj.hasOwnProperty('toString')); // false
}


console.log('for...in循环用来遍历一个对象的全部属性。');
var obj = {a: 1, b: 2, c: 3};

for (var i in obj) {
    console.log('键名：', i);
    console.log('键值：', obj[i]);
}


console.log('对象obj继承了toString属性，该属性不会被for...in循环遍历到，因为它默认是“不可遍历”的');
var obj = {};

// toString 属性是存在的
console.log(obj.toString); // toString() { [native code] }

for (var p in obj) {
    console.log(p);
} // 没有任何输出


console.log('只想遍历对象自身的属性，所以使用for...in的时候，应该结合使用hasOwnProperty方法');
var person = { name: '老张' };

for (var key in person) {
    if (person.hasOwnProperty(key)) {
        console.log(key);
    }
}


console.log('with的作用是操作同一个对象的多个属性时，提供一些书写的方便。');
// 例一
var obj = {
    p1: 1,
    p2: 2,
};
with (obj) {
    p1 = 4;
    p2 = 5;
}
// 等同于
obj.p1 = 4;
obj.p2 = 5;

// 例二
if (0) {
    // 这个因为是nodejs，所以无法取到document
    with (document.links[0]){
        console.log(href);
        console.log(title);
        console.log(style);
    }
    // 等同于
    console.log(document.links[0].href);
    console.log(document.links[0].title);
    console.log(document.links[0].style);
}


console.log('如果with区块内部有变量的赋值操作，必须是当前对象已经存在的属性，否则会创造一个当前作用域的全局变量。');
var obj = {};
with (obj) {
    p1 = 4;
    p2 = 5;
}

console.log(obj.p1); // undefined
console.log(p1); // 4


console.log('建议不要使用with语句，可以考虑用一个临时变量代替with。');
if (0) {
    with(obj1.obj2.obj3) {
        console.log(p1 + p2);
    }

    // 可以写成
    var temp = obj1.obj2.obj3;
    console.log(temp.p1 + temp.p2);
}
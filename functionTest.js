console.log('function命令后面是函数名，函数名后面是一对圆括号，里面是传入函数的参数。函数体放在大括号里面。');

function print(s) {
    console.log(s);
}

console.log('除了用function命令声明函数，还可以采用变量赋值的写法。');
var print = function (s) {
    console.log(s);
};


console.log('采用函数表达式声明函数时，function命令后面不带有函数名。如果加上函数名，该函数名只在函数体内部有效，在函数体外部无效。');
var print = function x() {
    console.log(typeof x);
};
// console.log(x);
// ReferenceError: x is not defined
console.log(print());
// function


console.log('Function构造函数。');
var add = new Function(
    'x',
    'y',
    'return x + y'
);

// 等同于
function add(x, y) {
    return x + y;
}


console.log('可以传递任意数量的参数给Function构造函数，只有最后一个参数会被当做函数体，如果只有一个参数，该参数就是函数体。');
var foo = new Function(
    'return "hello world";'
);

// 等同于
function foo() {
    return 'hello world';
}


console.log('如果同一个函数被多次声明，后面的声明就会覆盖前面的声明。');

function f() {
    console.log(1);
}

f(); // 2
function f() {
    console.log(2);
}

f(); // 2


console.log('调用函数时，要使用圆括号运算符。圆括号之中，可以加入函数的参数。');

function add(x, y) {
    return x + y;
}

console.log(add(1, 1)); // 2


console.log('函数可以调用自身，这就是递归（recursion）。下面就是通过递归，计算斐波那契数列的代码。');

function fib(num) {
    if (num === 0) return 0;
    if (num === 1) return 1;
    return fib(num - 2) + fib(num - 1);
}

console.log(fib(6)); // 8


console.log('函数为第一等公民。');

function add(x, y) {
    return x + y;
}

// 将函数赋值给一个变量
var operator = add;

// 将函数作为参数和返回值
function a(op) {
    return op;
}

console.log(a(add)(1, 1));
// 2


console.log('JavaScript 引擎将函数名视同变量名，所以采用function命令声明函数时，整个函数会像变量声明一样，被提升到代码头部');
// f();
// function f() {}


console.log('如果采用赋值语句定义函数，JavaScript 就会报错');
// f();
// var f = function (){};
// TypeError: undefined is not a function


console.log('如果同时采用function命令和赋值语句声明同一个函数，最后总是采用赋值语句的定义。');
var f = function () {
    console.log('1');
}

function f() {
    console.log('2');
}

f(); // 1


console.log('函数的name属性返回函数的名字。');

function f1() {
}

console.log(f1.name); // "f1"


console.log('如果是通过变量赋值定义的函数，那么name属性返回变量名。');
var f2 = function () {
};
console.log(f2.name); // "f2"


console.log('上面这种情况，只有在变量的值是一个匿名函数时才是如此。如果变量的值是一个具名函数，那么name属性返回function关键字之后的那个函数名');
var f3 = function myName() {
};
console.log(f3.name); // 'myName'


console.log('name属性的一个用处，就是获取参数函数的名字。');
var myFunc = function () {
};

function test(f) {
    console.log(f.name);
}

test(myFunc); // myFunc


console.log('函数的length属性返回函数预期传入的参数个数，即函数定义之中的参数个数。');

function fff(a, b) {
}

console.log(fff.length); // 2


console.log('函数的toString方法返回一个字符串，内容是函数的源码。函数内部的注释也可以返回。');

function ffff() {
    /*
  这是一个
  多行注释
*/
    a();
    b();
    c();
}

console.log(ffff.toString());



console.log('利用这一点，可以变相实现多行字符串。');
var multiline = function (fn) {
    var arr = fn.toString().split('\n');
    return arr.slice(1, arr.length - 1).join('\n');
};
function f() {/*
  这是一个
  多行注释
*/}
multiline(f);
// " 这是一个
//   多行注释"


console.log('函数外部声明的变量就是全局变量（global variable），它可以在函数内部读取。');
var v = 1;
function fff2() {
    console.log(v);
}
fff2();


console.log('在函数内部定义的变量，外部无法读取，称为“局部变量”（local variable）。');
function f(){
    var v = 1;
}
// v // ReferenceError: v is not defined


console.log('函数内部定义的变量，会在该作用域内覆盖同名全局变量。');
var v = 1;
function fff3(){
    var v = 2;
    console.log(v);
}
fff3(); // 2
console.log(v); // 1



console.log('对于var命令来说，局部变量只能在函数内部声明，在其他区块中声明，一律都是全局变量。');
if (true) {
    var x = 5;
}
console.log(x);  // 5


console.log('函数内部的变量提升');
function foo(x) {
    if (x > 100) {
        var tmp = x - 100;
    }
}
// 等同于
function foo(x) {
    var tmp;
    if (x > 100) {
        tmp = x - 100;
    }
}


console.log('函数本身也是一个值，也有自己的作用域。它的作用域与变量一样，就是其声明时所在的作用域，与其运行时所在的作用域无关。');
var a = 1;
var x = function () {
    console.log(a);
};
function fff4() {
    var a = 2;
    x();
}
fff4(); // 1



var a = undefined;
console.log('很容易犯错的一点是，如果函数A调用函数B，却没考虑到函数B不会引用函数A的内部变量。');
var x = function () {
    console.log(a);
};
function yy(f) {
    var a = 2;
    f();
}
// yy(x);
// ReferenceError: a is not defined



console.log('函数参数不是必需的，Javascript 允许省略参数。');
function fff5(a, b) {
    return a;
}
console.log(fff5(1, 2, 3)); // 1
console.log(fff5(1)); // 1
console.log(fff5()); // undefined
console.log(fff5.length); // 2


console.log('如果一定要省略靠前的参数，只有显式传入undefined。');
function f(a, b) {
    return a;
}
// f( , 1) // SyntaxError: Unexpected token ,(…)
f(undefined, 1) // undefined



console.log('函数参数如果是原始类型的值（数值、字符串、布尔值），传递方式是传值传递（passes by value）。这意味着，在函数体内修改参数值，不会影响到函数外部。');
var p = 2;
function fff6(p) {
    p = 3;
}
fff6(p);
console.log(p); // 2


console.log('但是，如果函数参数是复合类型的值（数组、对象、其他函数），传递方式是传址传递（pass by reference）。也就是说，传入函数的原始值的地址，因此在函数内部修改参数，将会影响到原始值。');
var obj = { p: 1 };
function fff7(o) {
    o.p = 2;
}
fff7(obj);
console.log(obj.p); // 2


console.log('注意，如果函数内部修改的，不是参数对象的某个属性，而是替换掉整个参数，这时不会影响到原始值。');
var obj = [1, 2, 3];
function f(o) {
    o = [2, 3, 4];
}
f(obj);
console.log(obj); // [1, 2, 3]


console.log('如果有同名的参数，则取最后出现的那个值。');
function fff7(a, a) {
    console.log(a);
}
fff7(1, 2); // 2


console.log('上面代码中，函数f有两个参数，且参数名都是a。取值的时候，以后面的a为准，即使后面的a没有值或被省略，也是以其为准。');
function fff8(a, a) {
    console.log(a);
}
fff8(1); // undefined


console.log('这时，如果要获得第一个a的值，可以使用arguments对象。');
function f(a, a) {
    console.log(arguments[0]);
}
f(1); // 1



console.log('arguments 对象');
var f = function (one) {
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
};
f(1, 2, 3);



console.log('正常模式下，arguments对象可以在运行时修改。');
var f = function(a, b) {
    arguments[0] = 3;
    arguments[1] = 2;
    return a + b;
};
console.log(f(1, 1)); // 5



console.log('严格模式下，arguments对象是一个只读对象，修改它是无效的，但不会报错。');
var f = function(a, b) {
    'use strict'; // 开启严格模式
    arguments[0] = 3; // 无效
    arguments[1] = 2; // 无效
    return a + b;
};
console.log(f(1, 1)); // 2



console.log('通过arguments对象的length属性，可以判断函数调用时到底带几个参数。');
function fff7() {
    return arguments.length;
}
console.log(fff7(1, 2, 3)); // 3
console.log(fff7(1)); // 1
console.log(fff7()); // 0



console.log('需要注意的是，虽然arguments很像数组，但它是一个对象。数组专有的方法（比如slice和forEach），不能在arguments对象上直接使用。');
var f = function() {
    var args = Array.prototype.slice.call(arguments);

    // 或者
    var args = [];
    for (var i = 0; i < arguments.length; i++) {
        args.push(arguments[i]);
    }
};


console.log('arguments对象带有一个callee属性，返回它所对应的原函数。这个属性在严格模式里面是禁用的，因此不建议使用。');
var f = function () {
    console.log(arguments.callee === f);
};
f(); // true



console.log('闭包可以理解为，函数a返回函数b，函数b可以访问函数a内部的局部变量');
function fff10() {
    var n = 999;
    function fff11() {
        console.log(n);
    }
    return fff11;
}

var result = fff10();
result(); // 999



console.log('闭包的最大用处有两个，一个是可以读取函数内部的变量，另一个就是让这些变量始终保持在内存中，即闭包可以使得它诞生环境一直存在。');
function createIncrementor(start) {
    return function () {
        return start++;
    };
}
var inc = createIncrementor(5);
console.log(inc()); // 5
console.log(inc()); // 6
console.log(inc()); // 7



console.log('闭包的另一个用处，是封装对象的私有属性和私有方法。');
function Person(name) {
    var _age;
    function setAge(n) {
        _age = n;
    }
    function getAge() {
        return _age;
    }
    return {
        name: name,
        getAge: getAge,
        setAge: setAge
    };
}
var p1 = Person('张三');
p1.setAge(25);
console.log(p1.getAge()); // 25
var p2 = Person('李四');
p2.setAge(30);
console.log(p2.name, p2.getAge());
console.log(p1.name, p1.getAge());



console.log('立即调用的函数表达式（IIFE）');
// function(){ /* code */ }();          // 错误
console.log('如果function关键字出现在行首，一律解释成语句。因此，JavaScript 引擎看到行首是function关键字之后，认为这一段都是函数的定义，不应该以圆括号结尾');
// (function(){ /* code */ }());        // 正确
// 写法二
(function () {
    var tmp = 1;
    console.log(tmp);
}());



console.log('eval命令接受一个字符串作为参数，并将这个字符串当作语句执行。');
eval('var a = 1;');
console.log(a); // 1



console.log('eval没有自己的作用域，都在当前作用域内执行，因此可能会修改当前作用域的变量的值，造成安全问题。');
var a = 1;
eval('a = 2');
console.log(a); // 2
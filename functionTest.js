console.log('function命令后面是函数名，函数名后面是一对圆括号，里面是传入函数的参数。函数体放在大括号里面。');
function print(s) {
    console.log(s);
}

console.log('除了用function命令声明函数，还可以采用变量赋值的写法。');
var print = function(s) {
    console.log(s);
};


console.log('采用函数表达式声明函数时，function命令后面不带有函数名。如果加上函数名，该函数名只在函数体内部有效，在函数体外部无效。');
var print = function x(){
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
console.log('这个运算符的主要用途是浏览器的书签工具（bookmarklet），以及在超级链接中插入代码防止网页跳转。');

/**
<script>
function f() {
    console.log('Hello World');
}
</script>
<a href="http://example.com" onclick="f(); return false;">点击</a>
 */

console.log('上面代码中，点击链接后，会先执行onclick的代码，由于onclick返回false，所以浏览器不会跳转到 example.com。');


/**
 <a href="javascript: void(f())">文字</a>
 */


console.log('下面是一个更实际的例子，用户点击链接提交表单，但是不产生页面跳转。');

/**
 <a href="javascript: void(document.form.submit())">
 提交
 </a>
 */


console.log(
    '%cThis text is styled!',
    'color: red; background: yellow; font-size: 24px;'
)


console.group('一级分组');
console.log('一级分组的内容');

console.group('二级分组');
console.log('二级分组的内容');

console.groupEnd(); // 二级分组结束
console.groupEnd(); // 一级分组结束
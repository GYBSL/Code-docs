---
nav:
  title: LeetCode刷题
  path: /leetcode
---

## 第 9 题 回文数

```js
题目描述：

给你一个整数 x ，如果 x 是一个回文整数，返回 true ；否则，返回 false 。

回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。

例如，121 是回文，而 123 不是。

解答：

语言：JS

var isPalindrome = function(x) {
    if(x===0){
        return true;
    }
    if(x<0||x%10==0){
        return false;
    }

    let cur=0;
    let num=x;
    while(num>=10){
        cur=cur*10+num%10;
        num=Math.floor(num/10);
    }

    return (cur*10+num)==x;
};

执行结果：

执行用时：
156 ms, 在所有 JavaScript 提交中击败了 43.86% 的用户

内存消耗：
48.6 MB, 在所有 JavaScript 提交中击败了 96.35% 的用户

通过测试用例：
11510 / 11510
```

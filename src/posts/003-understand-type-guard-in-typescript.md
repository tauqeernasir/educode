---
title: "Explicit and Implicit type conversions in JavaScript"
date: "2020-11-05"
tags:
  - javascript
author: "Tauqeer Nasir"
avatar: ""
thumbnail: "https://i.imgur.com/46JcyHs.png"
---

![](https://i.imgur.com/46JcyHs.png)

<br />

In every programming language, we need to convert one type to some other type according to the problem we try to solve. In JavaScript, we can convert one type to another explicitly or JavaScript itself can convert a type to another according to the context of statement/expression.

For example, `alert()` function implicitly converts any value provided to it into a `string` to display it in the dialog. Similarly mathetical operations convert values to `numbers`.

But there are times, when we need to explicitly convert a value to some other type. Let's have a look at some basic of the type conversions below.

## String Conversions

As I mentioned above, `alert()` will convert any value provided to it in a string type. But what if we want to covert some given value into string explicitly?

We can use `String(value)` to convert a given value into a `string` type.

```javascript
let value = 2 // here we have a number type
console.log(typeof value) // number

value = String(value) // convert the given value into string, resulting into '2'
console.log(typeof value) // string
```

> `typeof` can be used on any value to know it's type.

You can pass different kind of values to `String()` to know how it works.

## Numeric Conversions

Numeric conversions happen implicitly, when you pass values to methametical function or expressions. For example, when you have two string values, "9" and "3" and you use these values with a division operator "/".

```javascript
console.log("9" / "3") // 3
```

Sometimes, you need to convert string values into `Numbers` explicitly so that they could be passed to some functions expecting numbers as values. To explicitly convert a string value into number, you can use `Number(str)`.

```javascript
let str = "321"
console.log(typeof str) // string

str = Number(str) // "321" => 321
console.log(typeof str) // number
```

> Important: `Number()` does not always convert a string into valid number, if string does not contain valid number that can be converted from type `string` to type `number`.

For example, converting a string `"hello world"` will result into `NaN` (Not a Number).

```javascript
let strToNumber = Number("hello world")
console.log(strToNumber) // NaN
```

> Attention: if you check the `typeof NaN`, you will see that it returns `number`.

That being said, if you convert a string that doesn't convert to a `valid number`, and even if you check `typeof` of that converted value, and pass that to a function or expression with is expecting that value to be a valid number can produce unexpected result. Have a look at the following code snippet.

```javascript
function add2(value) {
  return value + 2
}

let strToNumber = Number("hello world")
console.log(strToNumber) // NaN

if (typeof strToNumber === "number") {
  add2(strToNumber) // bug, returns NaN
}
```

> After converting `string` to a `number`, check if converted value is not a `NaN`.

You can use `Number.isNaN(value)` to check if the converted value is `NaN` or not.

Now the above code snippet can be like this.

```javascript
function add2(value) {
  return value + 2
}

let strToNumber = Number("hello world")
console.log(strToNumber) // NaN

if (!Number.isNaN(strToNumber)) {
  add2(strToNumber) // bug, returns NaN
} else {
  // throw or ignore
}
```

| TYPE      | CONVERTS TO                                                                                                                                                                                                                 |
| --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| null      | 0                                                                                                                                                                                                                           |
| undefined | NaN                                                                                                                                                                                                                         |
| true      | 1                                                                                                                                                                                                                           |
| false     | 0                                                                                                                                                                                                                           |
| string    | It removes white spaces from start and end of the string, and rest of the string is converted into number. Empty string results into 0. Otherwise number will be extracted from the string. Any error will result into NaN. |

> Important: `undefined` converts to `NaN` whereas `null` converts to `0`.

```javascript
console.log(Number(" 100   ")) // 100
console.log(Number("123a")) // NaN, error while converting "a" to number
console.log(Number(false)) // 0
console.log(Number())
```

## Boolean Conversions

Converting value to `boolean` is simple. It happens automatically (implicitly) in logical operations and can also be converted explicitly using `Bolean(value)`.

| VALUE                                       | CONVERTS TO |
| ------------------------------------------- | ----------- |
| 0, undefined, null, an empty string and NaN | false       |
| Any other value                             | true        |

> Note: `"0"` becomes `true` when converting to `boolean`, because `Boolean()` treats non-empty strings as `truthy`.

That's it for now. We will cover `objects` to premitive conversions in a future post.

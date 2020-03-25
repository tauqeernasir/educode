---
title: "Typescript for advance users - Part 2"
date: "2020-03-26"
tags:
  - typescript
author: "Tauqeer Nasir"
avatar: ""
thumbnail: "https://i.imgur.com/fPByLYh.png"
---

![](https://i.imgur.com/fPByLYh.png)

<br />

This article is part of series "Typescript for advance user". If you want to read the part 1, [click here](/post/001-typescript-for-advnace-users-part-1)

> This post is meant for developers who are already familiar with Typescript. If you want to learn the very basics of Typescript, please read official docs [`here`](https://www.typescriptlang.org/docs/home.html)

In this article, we will have a look at following types:

- <del>Partial</del>
- <del>Required</del>
- <del>Record</del>
- <del>Readonly</del>
- Extract
- Exclude
- Pick
- Omit
- \*Difference
- \*Intersection

<br />

## Extract - Generic Type

_Extract generic type returns a new type which contains items that exist in both passed arguments. In other words, unique items or properties are dropped._

<br />

This works the same way, intersection works in `Mathematics`.

```typescript
// Set Notation
// A∩B => (A intersection B)

Set(A) = { a, b, c }
Set(B) = { b, c, d }

// A intersection B will drop unique items and return matching items only.

A∩B = { b, c }
```

<br />

The above concept can be expressed in Typescript code and can be written using `Array.prototype.filter()` method.

```typescript
function Extract(arg1: string[], arg2: string[]): string[] {
  return arg1.filter((x: string): boolean => {
    return arg2.includes(x)
  })
}

Extract(["a", "b", "c"], ["b", "c", "d"]) // returns ['b', 'c']
```

Extract can be used as follow

```typescript
type SomeType = Extract<"a" | "b" | "c", "b" | "c" | "d"> // 'b' | 'c'
```

<br /><br />

## Exclude - Generic Type

_Exclude generic type also takes two arguments like `Extract` type, but main difference is, it works opposite to the `Extract` type. It returns new type which contains only unique items from the left (first) argument._

<br />

This works same way, difference works in `Mathematics`. It will return all the items from left argument excluding all the items from the right argument.

```typescript
// Set Notation
// A - B => (A difference B)

Set(A) = { a, b, c }
Set(B) = { b, c, x }

A-B = { a }

```

> Note: `Exclude` is not the symmetrical difference.

The above concept can also be expressed in Typescript using `Array.prototype.filter()` method.

```typescript
function Exclude(arg1: string[], arg2: string[]): string[] {
  return arg1.filter((x: string): boolean => {
    return !arg2.includes(x)
  })
}

Exclude(["a", "b", "c"], ["b", "c", "d"]) // returns ['b']
```

Exclude can be used as follow

```typescript
type SomeType = Exclude<"a" | "b" | "c", "b" | "c" | "d"> // "a"
```

<br /><br />

## Pick - Generic Type

_Pick generic type is similar to `Intersection`, but the only difference is that it is based on the keys defined in the left (first) argument. The right (second) argument is a list of keys to copy into new type._

<br />

```typescript
// Set Notation
// A∩B => (A intersection B)
```

<br />

```typescript
type SomeType = Pick<{ a: string; b: boolean; c: number }, "a" | "c"> // { a: string, c: number }
```

<br />

let's say we have an interface for a `User` as follow

```typescript
interface User {
  basic: {
    firstName: string
    lastName: string
    age: number
  }
  address: {
    street: string
    zip: string
    city: string
    country: string
  }
}
```

Now let's say we want to write a function which returns user's address. We can use `Pick` as follow to accomplish our task

```typescript
interface User {
  basic: {
    firstName: string
    lastName: string
    age: number
  }
  address: {
    street: string
    zip: string
    city: string
    country: string
  }
}

// this function could be loading data from database or other sources
// this is only for a demonstration purpose.

function getUserAddress(): Pick<User, "address"> {
  // perform db operation or whatever

  return {
    address: {
      street: "street# 1",
      zip: "ABC",
      city: "Lahore",
      country: "Pakistan",
    },
  }
}
```

<br /><br />

## Omit - Generic Type

_Omit generic type is similar to `Exclude` type, with a difference that it take left argument of an object and right argument of a list of keys. The keys indicates which properties to drop from the new type._

<br />

```typescript
// Set Notation
// A-B => (A difference B)
```

<br />

```typescript
type SomeType = Omit<{ a: string; b: boolean; c: number }, "a" | "c"> // { b: boolean }
```

<br />

let's take same `User` interface from above and see how `Omit` works.

```typescript
interface User {
  basic: {
    firstName: string
    lastName: string
    age: number
  }
  address: {
    street: string
    zip: string
    city: string
    country: string
  }
}

function getUserName(): Omit<User["basic"], "age"> {
  return {
    firstName: "Tauqeer",
    lastName: "Nasir",
  }
}
```

As you can see in the example above, Omit will drop the `age` key and allow you to return `firstName` and `lastName`.

<br /><br />

## Difference

_Using built-in types we can construct a new Difference generic type that returns a new type with symmetrical difference, which means it will return keys that are unique from both arguments._

<br />

```typescript
// Set Notation
// (A∩B) or (A∪B) - (A∩B)
```

<br />

```typescript
// it would work this way
const SomeType = Difference<{ a: number, b: boolean, c: string }, { a: number, b: boolean, d: string }> // { c: string, d: string }
```

<br />

This is a bit difficult to construct, so let's have a look at the following steps.

First of all, we will write key differencing type `AMinusB`, which will take two object types and keep all the keys of `A` that do not exist in `B`.

```typescript
export type AMinusB<A extends keyof any, B extends keyof any> = ({
  [P in A]: P
} &
  {
    [P in B]: never
  } & {
    [x: string]: never
  })[A]
```

<br />

The set notation for this is `A - B` (as you would expect) and that makes this type very similar to one that we’ve just explored - `Omit`. `AMinusB` is a little different in that it can take any two objects and calculate the keys that exist in A, but not in B. `Omit` on the other hand dictates that the keys it is supplied are on the object it is given.

To get the symmetrical difference of the keys we can execute the `AMinusB` type twice and join them in a sum type.

```typescript
export type SymmetricalKeyDiff<A extends object, B extends object> =
  | AMinusB<keyof A, keyof B>
  | AMinusB<keyof B, keyof A>
```

Note that the key lists are flipped between the two calls to AMinusB so as to get key difference both ways - thus powering the “symmetrical” part of this difference type.

<br />

With these two key types we can now create the final differencing type that will take the keys and apply them to an object type. Given what we’ve already learned about the inbuilt types we know that Pick takes an object type and a list of keys and will return a new object type with just the specified properties/keys.

<br />

So, given `SymmetricalKeyDiff` and `Pick` we can create a symmetrical difference type. The input object for Pick is the union of A and B and the list of keys is the SymmetricalKeyDiff of A and B.

<br />

```typescript
export type Difference<A extends object, B extends object> = Pick<
  A & B,
  SymmetricalKeyDiff<A, B>
>
```

<br />

Put this type into action as follow

```typescript
type SomeType = Difference<
  { a: number; b: number; x: number },
  { a: number; b: number; z: string }
> // { x: number; z: string }
```

<br /><br />

## Intersection

_Using the same basic types, we can construct a new `Intersection` type which returns symmetrical intersection from both arguments._

```typescript
export type Intersection<A extends object, B extends object> = Omit<
  A & B,
  SymmetricalKeyDiff<A, B>
>
```

<br />

Put this type into action in the following way:

```typescript
type SomeType = Intersection<
  { a: number; b: number; x: string },
  { a: number; b: number; z: string }
> // { a: number; b:number }
```


So, there you have it - Typescript has some built-in complex types defined for you. I hope, you enjoyed this article and you will implement what you have just learned.
If you haven't subscribed to the newsletter yet, do it right away to stay up to date with the latest content.

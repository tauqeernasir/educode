---
title: "Typescript for advance users - Part 1"
date: "2020-03-25"
tags:
  - typescript
author: "Tauqeer Nasir"
avatar: ""
thumbnail: "https://i.imgur.com/RqMBQH6.png"
---

![](https://i.imgur.com/RqMBQH6.png)

In this series, we are going to learn about _advance features of Typescript_. When you develop an application using Typescript, the code base can get more complex with the addition of new application features, so do the types required to describe it.
There are a number of basic and some advance built-in types that be used for such purpose or combined to create more complex and specialized types.

> This post is meant for developers who are already familiar with Typescript. If you want to learn the very basics of Typescript, please read official docs [`here`](https://www.typescriptlang.org/docs/home.html)

In this article, we will have a look at following types:

- Partial
- Required
- Record
- Readonly
- <del>Extract</del>
- <del>Exclude</del>
- <del>Pick</del>
- <del>Omit</del>
- <del>Difference</del>
- <del>Intersection</del>

Without further ado, let's have a look at what these types are and how we can them in our applications.

## Partial - Generic Type

_Partial generic type takes a single argument of an object type (interface), and returns a new type where all the properties of the object are defined as optional._
<br /><br />
let's say, you have an interface defined for a user as follow.

```typescript
interface IUser {
  name: string
  email: string
  age: number
  phone: number
}
```

With `Partial` type, Typescript will interpret `User` to have all properties as optional.

```typescript
type NewUserType = Partial<IUser>

// After using Partial type, NewUserType will have following interface
// without explicitly defining all properties as optional

type NewUserType = {
  name?: string
  email?: string
  age?: number
  phone?: number
}
```

<br /><br />

## Required - Generic Type

_Required generic type also takes a single argument of an object type and returns a new type where all the properties are defined as required. This works opposite to `Parital` type._
<br /><br />

```typescript
interface IUserAddress {
  street?: string
  zip?: string
  city?: string
  country: string
}

type DeliveryAddress = Required<IUserAddress>
```

The above `DeliveryAddress` type will be interpreted by Typescript as follow:

```typescript
type DeliveryAddress = {
  street: string
  zip: string
  city: string
  country: string
}
```

<br /><br />

## Record - Generic Type

_Record generic type is a little different, it take two arguments. It allows you to assign a map (object) with the mentioned `key` type and `value` type._
<br /><br />
Have a look at the following code:

```typescript
type Address = Record<string, string>
```

Now, `Address` type will allow you to have an object with `key` of type `string` and `value` of type `string`.

```typescript
type Address = Record<string, string>

const deliveryAddress: Address = {
  street: "street address",
  zip: "123",
  city: "lahore",
  country: "pakistan",
}
```

<br /><br />

We can also pass `type literals` and use `union` to be more specific.

```typescript
// Restrict properties to have only mentioned keys
// But value can be any string
type Address = Record<"street" | "zip" | "city" | "country", string>
```

Now Typescript will expand the above type as follow:

```typescript
type Address = {
  street: string
  zip: string
  city: string
  country: string
}
```

<br /><br />

We can get a little more creative and use `Partial` type to make all properties optional.

```typescript
type Address = Partial<Record<"street" | "zip" | "city" | "country", string>>
```

Now Typescript will expand the above type as follow:

```typescript
type Address = {
  street?: string
  zip?: string
  city?: string
  country?: string
}
```

<br /><br />

Furthermore, we can make use of `intersection (&) type` to have multiple kind of `value` types.

```typescript
type User = Record<"name" | "email", string> & Record<"height" | "age", number>
```

Typescript will expand the above type as follow:

```typescript
type User = {
  name: string
  email: string
  height: number
  age: number
}
```

<br /><br />

## Readonly - Generic Type

_Readonly generic type takes one argument of an object and returns a new type by marking all properties as `readonly`. Which means you cannot modify the values of an object with that type._

```typescript
interface ICar {
  model: string
  make: string
  seats?: number
  color?: string
}

type Car = Readonly<ICar>
```

Using `Readonly` type we can get a new type:

```typescript
type Cat = {
  readonly model: string
  readonly make: string
  readonly seats?: number
  readonly color?: string
}
```

<br /><br />

_`Partial<>`, `Required<>`, `Record<>`, `Readonly<>`_ can be used in combination to create new complex and specialized types.

In next post, we will cover remaining types and will learn how and when we should use them to write better types for our applications.

If you have any question or suggestion, please comment below.

If you liked reading this article, make sure to subscribe to our newsletter to stay up-to-date with the latest content.

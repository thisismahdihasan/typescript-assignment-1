# TypeScript Generics and Async Promise<T>

## Introduction

'Generics' is an important feature of TypeScript, which helps us use the same function with various types of Data.

By using 'Generics', we don't have to create an individual function for every Data Type, and we can maintain Type Safety at the same time.

## How Generics Work

Basically, to use 'Generics', we write `<T>`. This `<T>` is a Type Parameter, which may be fixed at the time of a function call.

```typescript
const getValue = <T>(value: T): T => {
  return value;
};

getValue<string>("Hello");
getValue<number>(9021999);
```

> ⬆️ **Note:** Here, we can use the same Function with two types of values, like String and Number.

'Generics' has a big advantage, which is that it maintains the Input and Output Types. On the other hand, by using 'any', TypeScript loses that particular Data's Type. As a result, TypeScript can't always catch Errors from using wrong methods.

## Generics with Async Promise<T>

Promises are basically used to handle Asynchronous work in JavaScript. In TypeScript, `Promise<T>` can be used to determine what type of data will be received when the Promise is successfully resolved.

```typescript
const getUser = async (): Promise<string> => {
  return 'Rahim';
};

const user = await getUser();
```

> ⬆️ **Note:** Here, `Promise<string>` indicates that this Function will return a Promise, and if successful, we will get a string value.

If a User Object comes from an API, then we can fix the Object's type by using `Promise<User>`. As a result, TypeScript helps to catch Errors when using wrong Properties or Methods while working with an API Response.

## Conclusion

'Generics' helps us make the Code Reusable and Type-safe. And `Promise<T>` defines the Type of an Asynchronous Result.

So that's why these two concepts are genuinely important when working with APIs, Async Functions, and Large Projects.
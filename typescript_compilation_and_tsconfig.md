# TypeScript Compilation (tsc) and tsconfig.json

## Introduction

The `tsc` is an important part of TypeScript, which helps us to convert TypeScript Code into JavaScript. Because JavaScript cannot directly understand the TypeScript Type. By using `tsc`, we can check Type Errors and convert the Code at the same time.

## How TypeScript Compilation Works

Basically, when we write TypeScript Code, the `tsc` Compiler checks our Code for Type Errors. After checking, it removes the Type information and converts the Code into JavaScript.

For example:

```typescript
const getValue = (value: number): number => {
  return value;
};
```

After Compilation, the JavaScript Code may look like this:

```javascript
const getValue = (value) => {
  return value;
};
```

> ⬆️ **Note:** Here, the `number` Type is removed because JavaScript does not need TypeScript's Type information.

One important thing is that `tsc` checks Type Errors before Runtime. But it does not check the actual Data Type when the JavaScript Code is running.

## How tsconfig.json Works

The `tsconfig.json` is basically a Configuration File, which tells the `tsc` Compiler how to convert our Code.

For example:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "strict": true,
    "outDir": "./dist"
  }
}
```

Here, `target` is used to select the JavaScript Version. `strict` is used for checking Type Errors more strictly. And `outDir` is used to select where the JavaScript Files will be saved.

By using `tsconfig.json`, we don't have to write the same Compiler Settings every time. As a result, it helps us to maintain the same Settings in our Project.

## Conclusion

The `tsc` Compiler helps us to check Type Errors and convert TypeScript Code into JavaScript. On the other hand, `tsconfig.json` helps us to control the Compilation Settings.

So that's why these two things are genuinely important when working with TypeScript and Large Projects.
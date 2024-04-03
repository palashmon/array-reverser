# array-reverser

> Seamlessly reverse arrays or segments with ease

`array-reverser` is a lightweight, easy-to-use npm package designed to reverse arrays or specific portions of arrays with precision and efficiency. Whether you need to invert the entire array or just a segment, `array-reverser` handles it effortlessly.

## Features

- **Flexible:** Reverse entire arrays or specify start and end indices for partial reversal.
- **Type-Safe:** Written in TypeScript, providing type safety for TypeScript projects.
- **Error Handling:** Robust error handling for invalid inputs and parameters.
- **Immutability:** Ensures immutability by returning a new array instance, preserving the original array.
- **Easy to Use:** Simple, intuitive API that integrates seamlessly into any project.

## Install

```sh
npm install array-reverser
```

Or with yarn:

```sh
yarn add array-reverser
```

## Usage

Import `array-reverser` into your project:

```typescript
import arrayReverser from "array-reverser";
```

Reverse an entire array:

```typescript
const array = [1, 2, 3, 4, 5];
const reversedArray = arrayReverser(array);
console.log(reversedArray);
//=> [5, 4, 3, 2, 1]
```

Reverse a segment of an array:

```typescript
const array = [1, 2, 3, 4, 5];
const reversedArray = arrayReverser(array, 1, 4);
console.log(reversedArray);
//=> [1, 4, 3, 2, 5]
```

Return a new array instance and preserve the original array:

```typescript
const array = [1, 2, 3, 4, 5];
const reversedArray = arrayReverser(array);

reversedArray[0] = 10; // Mutate the reversed array
console.log(array[0]); //=> 1
```

## API

### arrayReverser(array, start?, end?)

#### array

Type: `Array`<br>
The array to reverse.

#### start

Type: `number`<br>
Default: `0`

The index at which to start reversing the array. If not provided, the array will be reversed from the beginning. This index is inclusive and will be included in the reversed array.

#### end

Type: `number`<br>
Default: `array.length`

The index at which to stop reversing the array. This index is exclusive and will not be included in the reversed array. If not provided, defaults to `arr.length`, and the element at the `end` index is included in the reversal and the array will be reversed from the `start` index to the end of the array.

## License

MIT © [Palash Mondal](https://github.com/palashmon)

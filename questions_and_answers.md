<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B

It is declared as "greeting," but when you try to log "greetign," it will result in a ReferenceError because "greetign" is not defined. The correct variable name should be used to access the empty object, which would be "greeting" in this case.

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

In the above mentioned code, the sum function takes two parameters, a and b, and attempts to add them together using the + operator.Calling sum() with a number and a string, it will treat the number 1 as a string and concatenate it with the string "2", resulting in the string "12" as the output.

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

The reason the food array remains unchanged, favoriteFood does not modify the original food array.
In JavaScript, when you assign the value of one variable to another variable, you are making a copy of the value, not creating a reference to the original variable.As a result, the food array retains its original values, and when you log it.

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B

When you call the sayHi() function without passing any arguments, the name parameter inside the function is undefined. JavaScript will concatenate this undefined value with the string, resulting in "Hi there, undefined", which is what gets logged to the console.

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

The code uses the forEach method to iterate over each element in the nums array. Inside the iteration, it checks if the current element (num) is truthy, which means it's not equal to 0. For each truthy element (1, 2, and 3), it increments the count variable by 1. Since there are three truthy values in the nums array, the final value of the count variable is 3, and this is what gets logged to the console.

</p>
</details>

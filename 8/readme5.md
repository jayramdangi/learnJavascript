

All at one place 











Thought for 11 seconds
Below is an in-depth rundown of all the ways you can loop over arrays and every standard Array method you’re likely to encounter in JavaScript interviews. Each section includes descriptions, syntax, examples, and key notes. Citations point to MDN, StackOverflow, W3Schools, and other reputable sources.

1. Fundamental Loop Statements
JavaScript supports the classic loop constructs inherited from C-style syntax.

for loop

js
Copy code
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
Iterates by index; you control initialization, condition, and increment. 
MDN Web Docs

while loop

js
Copy code
let i = 0;
while (i < arr.length) {
  console.log(arr[i++]);
}
Checks condition before each iteration. 
MDN Web Docs

do…while loop

js
Copy code
let i = 0;
do {
  console.log(arr[i++]);
} while (i < arr.length);
Executes body at least once, then checks condition. 
MDN Web Docs

2. ES6 Iteration Statements
Newer syntax makes iterating arrays more concise.

for…of

js
Copy code
for (const value of arr) {
  console.log(value);
}
Directly iterates over values of any iterable (Arrays, Strings, Maps, etc.) 
MDN Web Docs

for…in

js
Copy code
for (const index in arr) {
  console.log(index, arr[index]);
}
Loops over enumerable property keys—not recommended for arrays as it includes inherited props. 
W3Schools

3. Array-Specific Iteration Methods
These methods accept callbacks and abstract away manual indexing.

.forEach(callback)

js
Copy code
arr.forEach((el, idx, array) => {
  console.log(idx, el);
});
Executes callback once per element; cannot be early-exited. 
MDN Web Docs

.map(callback)

js
Copy code
const squares = arr.map(x => x * x);
Transforms each element into a new array. 
LIA

.filter(callback)

js
Copy code
const evens = arr.filter(x => x % 2 === 0);
Returns subset of elements passing the predicate. 
LIA

.reduce(callback, [initial])

js
Copy code
const sum = arr.reduce((acc, x) => acc + x, 0);
Accumulates values to a single result. 
LIA

.reduceRight(callback, [initial])
Like reduce, but traverses from right to left. 
LIA

4. Search & Test Methods
Quickly find or test elements.

.find(callback) → returns first matching element

.findIndex(callback) → returns index of first match

.some(callback) → true if any pass

.every(callback) → true if all pass

.includes(value[, fromIndex]) → true if present

.indexOf(value[, fromIndex]) and .lastIndexOf() → index search 
Stack Overflow

Example:

js
Copy code
arr.some(x => x > 10);       // true/false
arr.find(x => x.id === id);  // object or undefined
5. Mutation (In-Place) Methods
These modify the original array.

push(...items) / pop() → add/remove end

unshift(...items) / shift() → add/remove front

splice(start, deleteCount, ...items) → insert/remove at arbitrary index

reverse(), sort([compare]) → reorder

fill(value[, start[, end]]), copyWithin(target, start[, end]) 
Stack Overflow

Example:

js
Copy code
arr.splice(2, 0, 'new');  // at index 2 insert 'new'
arr.reverse();            // in-place reverse
6. Accessor & Utility Methods
These return new arrays or computed results without mutating.

.slice([start[, end]]) → subarray

.concat(...items) → join arrays

.join([sep]) → string

.flat([depth]) / .flatMap(callback) → flatten

.entries(), .keys(), .values() → iteration helpers

.toString(), .toLocaleString() → string repr 
LIA

Example:

js
Copy code
const sub = arr.slice(1, 3);
const flat = nested.flat(); 
7. Static Array Methods & Properties
Defined on the Array constructor itself:

Array.isArray(obj) → true if array

Array.from(iterable[, mapFn, thisArg]) → make array from iterable

Array.of(...elements) → create array from args

Array.length (prototype) → reflect number of elements

Array.prototype[@@iterator]() → default iterator for for…of 
LIA

8. Loop vs. Method Trade-Offs
Approach	Mutates?	Early exit	Use case
for / for…of	No	✅ break	Maximum control, simple side-effects
.forEach()	No	❌	Side-effects, guaranteed full run
.some() / .every()	No	✅	Quick test with early termination
.map(), .filter()	No	❌	Data transformation, chaining
.reduce()	No	❌	Complex accumulation

✅ Interview Tips
Always mention whether a method mutates its input.

Know which support early termination (e.g., for, for…of, some, every, find, but not forEach, map, filter, reduce).

Be ready to discuss time/space complexity: most are O(n), but sorting is O(n log n).

This comprehensive survey should prepare you to answer any question on looping and array manipulation in JS interviews. Good luck!











Sources



Think



ChatGPT can make mistakes. Check important info. See Cookie Preferences.
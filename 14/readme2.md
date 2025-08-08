JSON.stringify() in JavaScript converts a JavaScript value (object, array, primitive) into a JSON-formatted string.

Key points:
Purpose – Serialize JavaScript objects so they can be stored or sent (e.g., API requests, localStorage).

Syntax

js
Copy code
JSON.stringify(value, replacer, space);
value → The data to convert.

replacer (optional) → Function or array to filter/transform properties.

space (optional) → Adds indentation for readability.

Example

js
Copy code
const obj = { a: 10, b: 20 };
console.log(JSON.stringify(obj));
// Output: '{"a":10,"b":20}'
Special behavior

Skips properties with undefined, functions, or symbol.

Ignores non-enumerable properties.

For circular references, it throws an error unless handled.

Why enumerable matters here
If a property has enumerable: false, JSON.stringify() will not include it in the result, because JSON only contains enumerable own properties.

Do you want me to show an example where enumerable: false makes JSON.stringify() skip a property?




data.json() is what 


ChatGPT said:
data.json() is a method (used mostly with Fetch API in JavaScript) that parses a JSON-formatted HTTP response body into a JavaScript object.

How it works
When you make a fetch request, the server usually sends back data as JSON text (string).

.json() reads that text and converts it into a JS object/array.

It returns a Promise, so you have to use await or .then().

Example:

javascript
Copy code
fetch("https://api.example.com/data")
  .then(response => response.json()) // Convert JSON string → JS object
  .then(data => {
    console.log(data); // Now it's a JS object
  });
If you want, I can explain how .json() is different from JSON.parse() since they are often confused.






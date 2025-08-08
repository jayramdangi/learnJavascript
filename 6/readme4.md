does it happens with all primitives or string only


ChatGPT said:
Great follow-up! 🔍

✅ Yes, all JavaScript primitive types (except null and undefined) behave similarly — they are auto-boxed (temporarily wrapped) into their corresponding object wrapper types when accessing properties or methods.
Here's the full breakdown:
Primitive Type	Wrapper Object	Example (auto-boxing)
string	String	"hi".length → 2
number	Number	(42).toFixed(2) → "42.00"
boolean	Boolean	(true).toString() → "true"
bigint	BigInt	(123n).toString() → "123"
symbol	Symbol	Symbol("x").toString() → "Symbol(x)"

❌ null and undefined are exceptions:
They do not have wrapper objects, so accessing properties/methods on them directly throws an error:

js
Copy code
null.toString();       // ❌ TypeError
undefined.valueOf();   // ❌ TypeError
✅ Example of auto-boxing:
js
Copy code
let num = 42;
console.log(typeof num);                // "number" (primitive)
console.log(num.toFixed(2));            // "42.00"
console.log(Object.getPrototypeOf(num)); // Number.prototype
This works because JavaScript internally does:

js
Copy code
new Number(42).toFixed(2);
🧠 TL;DR:
✔️ Auto-boxing happens with: string, number, boolean, bigint, symbol

❌ It does not happen with null or undefined

⚠️ The wrapper object is temporary and discarded immediately

Let me know if you want a diagram of this behavior too!












ChatGPT can make mistakes. Check important info. See Cookie Preferences
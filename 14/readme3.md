Not exactly — configurable only controls whether the property descriptor itself can be changed or the property can be deleted.

Here’s the breakdown:

A property descriptor has three main flags:

writable – can you change the value?

enumerable – will it show up in for...in or Object.keys()?

configurable – can you:

delete the property with delete

change enumerable or configurable itself

change writable from true → false (but not false → true)

change the value if it’s an accessor property (getter/setter)

If configurable is false:

You cannot delete the property.

You cannot change enumerable.

You cannot set configurable to true again.

You cannot change a non-writable data property to writable.

But you can still change the value if writable is true.

Example:

js
Copy code
let obj = {};
Object.defineProperty(obj, "x", {
  value: 10,
  writable: true,
  enumerable: true,
  configurable: false
});

obj.x = 20; // ✅ works, writable = true
delete obj.x; // ❌ fails, configurable = false
Object.defineProperty(obj, "x", { enumerable: false }); // ❌ fails
toString is on Object.prototype with:

js
Copy code
Object.getOwnPropertyDescriptor(Object.prototype, "toString")
// { writable: true, enumerable: false, configurable: true } in most engines
…but on some built-ins, configurable can be false, so you can’t delete or redefine it.

If you want, I can show you exactly why you can’t make toString configurable=true if it’s false using Object.defineProperty.
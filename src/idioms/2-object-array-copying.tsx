// ---------------------------------------------------------------------------------------------------------------------

/* Problem 👇

export function objectCopying() {
  const object = { a: { c: 1 }, b: 2 }
  const copy = { ...object }
  copy.a.c = 2
  return { ...object }
}

export function arrayCopying() {
  const array = [{ a: 1}, {a: 2}, {a: 3}]
  const copy = [...array]
  return copy;
}
*/

// ---------------------------------------------------------------------------------------------------------------------

/* Object Solution 👇

1) The spread operator does not creates a deep copy, it only creates a copy for the 1st level, so in this case "copy.a.c" will point to the "a" reference that lives in the object constant
2) We need to create a deep copy using multiple spreads or use structuredClone API
3) Last but not least we need to return the new "copy" object instead of the original "object"
*/

export function objectCopyingWithSpread() {
  const object = { a: { c: 1 }, b: 2 };

  const copy = {
    ...object,
    a: { ...object.a },
  };

  copy.a.c = 2;

  console.log('\n ~ objectCopyingWithSpread ~ copy:', copy)
  console.log('\n ~ objectCopyingWithSpread ~ object:', object)

  return copy;
}

export function objectCopyingWithStructuredClone() {
  const object = { a: { c: 1 }, b: 2 };
  const copy = structuredClone(object);

  copy.a.c = 2;

  console.log('\n ~ objectCopyingWithStructuredClone ~ copy:', copy)
  console.log('\n ~ objectCopyingWithStructuredClone ~ object:', object)

  return copy;
}

// ---------------------------------------------------------------------------------------------------------------------

/* Array Solution 👇

1) I don't see any specific problems in this scenario but if we want new objects reference we can do it with a simple map
2) We can map over each element and return a new array with a new object reference per element
3) Also we can fully avoid the "copy" constant in this scenario
*/

export function arrayCopying() {
  const array = [{ a: 1 }, { a: 2 }, { a: 3 }];
  return array.map(element => ({ ...element }))
}

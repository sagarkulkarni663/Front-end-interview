const original = {
    a: 1,
    b: {
      c: {
        d: 2
      }
    }
  };


  const copied=JSON.parse(JSON.stringify(original))

  copied.b.c.d = 999;

  console.log(copied)
  console.log(original)

  // Deep copy: Creates a new top-level object and recursively clones all nested objects so no shared references remain.
//   When you use JSON.stringify, your whole object (including all nested objects/arrays) is converted into a plain text string in JSON format.

//   In that string form, there are no references left — it’s just text data, no memory links.
  
//   Then, when you run JSON.parse on that string, JavaScript rebuilds a brand new object from scratch — creating new nested objects and arrays as needed.
  
//   The result: no old references are reused, so the copy is deep, not shallow.

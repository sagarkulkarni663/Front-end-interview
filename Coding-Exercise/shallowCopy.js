const original = {
    a: 1,
    b: {
      c: {
        d: 2
      }
    }
  };


//   const copied=Object.assign(original)
  const copied={...original}

  copied.b.c.d = 999;

  console.log(copied)
  console.log(original)

  // Shallow copy: Creates a new top-level object, but nested objects are still shared by reference.


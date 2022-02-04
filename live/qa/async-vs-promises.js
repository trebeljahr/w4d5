let counter = 0;

function createTimeoutPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      counter += 1;
      console.log("Before calling resolve");

      console.log("Value that we pass into resolve: ", counter);
      resolve(counter);
    }, 3000);
  });
}

// setTimeout(() => {
//   console.log(ourPromise);
// }, 5000);

//   .then((returnFromPreviousOne) => {
//     console.log(value);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// function hello() {
//   return "world";
// }
// console.log("hello", hello());

async function helloAsync() {
  const ourPromise = createTimeoutPromise();
  const firstValue = await ourPromise;
  console.log("First");
  console.log("Value from firstPromise: ", firstValue);

  const anotherPromise = createTimeoutPromise();
  const anotherValue = await anotherPromise;
  console.log("Second");
  console.log("Value from secondPromise: ", anotherValue);

  ourPromise
    .then((value) => {
      console.log("First then");
      console.log("Value from then: ", value);
      return createTimeoutPromise();
    })
    .then((value) => {
      console.log("Second then");
      console.log("Value from second then: ", value);
    });

  return "hello world";
}
console.log(helloAsync());

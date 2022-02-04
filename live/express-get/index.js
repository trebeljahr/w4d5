const express = require("express");
const axios = require("axios");
const hbs = require("hbs");

const app = express();

const PORT = 3000;

app.set("view engine", "hbs");

app.get("/", (req, res) => {
  res.render("mainPage", {});
});

// using :someName to retrieve query parameters
// the req.params.someName will then contain the value the user put in
// so in the example below if somebody visited say - "http://localhost:3000/example/pizza/margherita"
// req.params would be { somethingElse: pizza, anotherThing: margherita}
// thought exercise - what would you have to change the keys to "dish" and "type" respectively?
// answer is at bottom of the document
app.get("/example/:somethingElse/:anotherThing", (req, res) => {
  console.log(req.params);
  res.send("On Example Page");
});

app.get("/example2", (req, res) => {
  console.log(req.query);
  console.log(req.query.greeting);
  console.log(req.query.thirdGreeting);

  res.send("On Query Params Page");
});
//                                           ?query    &
//                                            key=value
// https://rickandmortyapi.com/api/character/?name=rick&status=alive

// usually you have an URL base for an api that you want to re-use and have as a const
const urlBase = "https://rickandmortyapi.com/api/character/";

// IIFE immediately invoked function expression
// a way to use await in NON .mjs files at the "top-level"
// just wrap it in an async function and execute that function immediately
// (async function() {...})()
(async function () {
  const urlToQuery = urlBase + 2;
  const response = await axios.get(urlToQuery);
  console.log(response.data);
})();

app.get("/findCharacter", async (req, res) => {
  const response = await axios.get(urlBase, {
    // using axios params object - assigning name to the req.query.name
    // axios will use that to construct our url properly

    // i.e. it will take urlBase -> "https://rickandmortyapi.com/api/character/"
    // and append
    // ?name={{req.query.name}}
    // so if req.query.name === "rick"
    // the resulting url axios uses for the GET would be this:
    // "https://rickandmortyapi.com/api/character/?name=rick"
    // notice the ?name=rick part at the end!
    params: { name: req.query.name },
  });

  // object de-structuring
  // with array de-structuring
  // link to mdn docs - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
  const {
    // if we would do response.data we do  { data } in object destructuring
    data: {
      // response.data.info -> would become { data: { info } }
      // response.data.info.count -> would become { data: { info: { count }}}
      info: { count, pages },
      // for arrays - we can use [ ] to destructure them as well
      // response.data.results[3].name -> would become { data: { results: [,,{ name }]}}
      results: [_, { name, image }],
    },
  } = response;

  console.log(count);
  console.log(pages);
  //   console.log(info);
  console.log(name);
  console.log(image);
  //   console.log("RESULTS", results);
  //   console.log("DATA", data);
  //   const data = response.data;
  //   const info = response.data.info;
  //   const results = response.data.results;

  //   res.send("You typed: " + req.query.name);

  const {
    // we can even rename things
    // -> name on the left is the original
    // -> name on the right is the one we want to use
    data: { results: characters },
  } = response;

  // this characters value is the same as response.data.results
  console.log(characters);

  // if we leave out the value in an object key/value notation and the name is a variable
  // -> it will use the name of the variable as key, and the value of the variable as value
  // example:
  // const hello = "Hello World"
  // console.log({ hello }) -> would log: { hello: "HelloWorld" }
  // const pizza = "Margherita"
  // console.log({ pizza }) -> would log { pizza: "Margherita" }
  // you can try to play around with these ideas in the node repl. by typing node in your terminal.
  res.render("multipleCharactersPage", { characters });
});

app.get("/character/:id", async (req, res) => {
  // assembling the url that we want to query from the rick and mortyAPI
  const urlToQuery = urlBase + req.params.id;
  // req.params.id === morty
  // "https://rickandmortyapi.com/api/character/morty"

  console.log(urlToQuery);

  /* 
  try {
      // we do code that might throw errors
      // can do multiple things that error

      // if this first one errors - then the error in catch block will be the error it threw
      await axios.get(...)

      // if this second one errors - then the error in catch block will be the error it threw
      await axios.get(...)
  } catch (error) {
      // we can catch any errors that occur and handle them
  }
   
*/
  try {
    const response = await axios.get(urlToQuery);
    console.log(response.data);

    res.render("characterPage", {
      name: response.data.name,
      src: response.data.image,
    });
  } catch (error) {
    console.log(error);
    // console.log(error.request);
    console.log("The error that happened", error.response.data.error);
    res.send("There was an error");
  }
});

app.listen(PORT, () => {
  console.log("Listening on PORT", 3000);
});

// answer ->
// app.get("/example/:somethingElse/:anotherThing", () => ...)

// would change to
// app.get("/example/:dish/:type", () => ...)

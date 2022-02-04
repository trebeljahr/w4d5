const response = {
  data: {
    reaaallyLongKey: {
      id: 1,
      name: "Rick Sanchez",
      status: "Alive",
      species: "Human",
      type: "",
      gender: "Male",
      origin: {
        name: "Earth (C-137)",
        url: "https://rickandmortyapi.com/api/location/1",
      },
      location: {
        name: "PokemonWorld",
        url: "https://rickandmortyapi.com/api/location/3",
      },
      image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
      episode: [
        "https://rickandmortyapi.com/api/episode/1",
        "https://rickandmortyapi.com/api/episode/49",
        "https://rickandmortyapi.com/api/episode/50",
        "https://rickandmortyapi.com/api/episode/51",
      ],
      url: "https://rickandmortyapi.com/api/character/1",
      created: "2017-11-04T18:48:46.250Z",
    },
    id: 1,
    name: "Rick Sanchez",
    status: "Alive",
    species: "Human",
    type: "",
    gender: "Male",
    origin: {
      name: "Earth (C-137)",
      url: "https://rickandmortyapi.com/api/location/1",
    },
    location: {
      name: "Citadel of Ricks",
      url: "https://rickandmortyapi.com/api/location/3",
    },
    image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    episode: [
      "https://rickandmortyapi.com/api/episode/1",
      "https://rickandmortyapi.com/api/episode/49",
      "https://rickandmortyapi.com/api/episode/50",
      "https://rickandmortyapi.com/api/episode/51",
    ],
    url: "https://rickandmortyapi.com/api/character/1",
    created: "2017-11-04T18:48:46.250Z",
  },
  aDifferentThing: {
    info: {
      name: "Rahaf",
      city: "Berlin",
    },
    moreInfo: "hello world again",
    evenMoreInfo: "hello hello hello",
  },
  name: "Viktor",
  surname: "Sonntag",
  thirdData: "hello world",
};

// console.log(response.data);
// console.log(response.data.id);
// console.log(response.data.location.name);
// console.log(response.data.episode);
// console.log(response.data.reaaallyLongKey.location.name);
// console.log(response.data.reaaallyLongKey.location.url);

// const {} = objectWeWantToDestructure;
const {
  data: { reaaallyLongKey, image },
} = response;

// with dot notation
const data = response.data;
// with object destructuring
// const { data } = response;

// console.log("========================");
// console.log(reaaallyLongKey);
// console.log(image);

// const city = response.secondData.info.city;

// we want "hello world"
const { thirdData } = response;
const { aDifferentThing } = response;

const { info } = response.aDifferentThing;

const {
  aDifferentThing: {
    info: { name: nameToAvoidConflict, city },
    moreInfo,
    evenMoreInfo,
  },
  name: thisIsRahaf,
  surname = "default surname",
} = response;
console.log("surname", surname);
console.log(thisIsRahaf);
console.log(nameToAvoidConflict);
console.log(city);
console.log(moreInfo);
console.log(evenMoreInfo);
// thisIsRahaf = "Not Rahaf";
// console.log(thisIsRahaf);

const name2 = response.aDifferentThing.info.name;
const city2 = response.aDifferentThing.info.city;
const moreInfo2 = response.aDifferentThing.moreInfo;
const evenMoreInfo2 = response.aDifferentThing.evenMoreInfo;
console.log(name2);
console.log(city2);
console.log(moreInfo2);
console.log(evenMoreInfo2);

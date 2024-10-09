const arr = [
  [
    {
      id: 1,
      name: "Mirror",
      image: "mirrortrack",
    },
    {
      id: 2,
      name: "Rule",
      image: "ruletrack",
    },
  ],
  [
    {
      id: 3,
      petname: "John cena",
      animaltype: "dog",
    },
  ],
  [
    {
      id: 4,
      name: "Invincible",
      image: "invincibletrack",
      release_year: "2022",
    },
    {
      id: 5,
      name: "Useewa",
      image: "useewatrack",
      release_year: "2022",
    },
  ],
];

// console.log(arr[1][0].name);
const filterwrd = "invincible";

// Flatten the array and filter based on the 'name' property
const result = arr.flat().filter((item) => item.name.includes(filterwrd));

console.log(result);

// const arr = [
//   [
//     {
//       id: 1,
//       name: "Mirror",
//       image: "mirrortrack",
//     },
//     {
//       id: 2,
//       name: "Rule",
//       image: "ruletrack",
//     },
//   ],
//   [
//     {
//       id: 3,
//       petname: "John cena",
//       animaltype: "dog",
//     },
//   ],
//   [
//     {
//       id: 4,
//       name: "Invincible",
//       image: "invincibletrack",
//       release_year: "2022",
//     },
//     {
//       id: 5,
//       name: "Useewa",
//       image: "useewatrack",
//       release_year: "2022",
//     },
//   ],
// ];

// // console.log(arr[1][0].name);
// // const filterwrd = "invincible";

// // // Flatten the array and filter based on the 'name' property
// // const result = arr.flat().filter((item) => item.name.includes(filterwrd));

// // console.log(result);
// // capitalize the first letter

// const word = "kimi no yawa";
// console.log(word[0].toUpperCase() + word.slice(1));

// const array = [
//   {
//     id: 1,
//     name: "Nuke",
//   },
//   {
//     id: 2,
//     name: "Atomic",
//   },
// ];
// console.time(array);
// console.timeLog(array);
// console.table(array);
// const new_word = array[0].name[0].toLowerCase() + array[0].name.slice(1);
// console.table(new_word);
// const time = "8:00 A.M";
// let split_time = time.split(":");
// console.log(split_time);
// console.log(split_time[0]);
// // console.log(split_time[1].replace(".", "").slice(-2));
// if (split_time[0] <= 5 && split_time[1].replace(".", "").slice(-2) == "AM") {
//   console.log("Madaling araw");
// } else if (split_time[0] > 5 && time.includes("A.M") && split_time[0] <= 11) {
//   console.log("Magandang umaga");
// } else {
//   console.log("Tangahaling tapat na");
// }
const voom = "Bakodam";

// let i = 0;
// for (i; i < voom.length; i++) {
//   console.log(voom[i]);
// }

const new_voom = voom.toLowerCase().split("");
console.log(new_voom.sort().reverse());

const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr.sort((a, b) => b - a));

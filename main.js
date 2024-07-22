for (let i = 0; i <= 100; i++) {
  console.log(i);
}

let counter = 0;

while (counter <= 100) {
  if (counter % 2 === 0) {
    console.log(counter);
  }
  counter++;
}

let sum = 0;

for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    sum = sum + i;
  }
}

console.log(sum);

let userName = "Naruto Shupinned";

let userAge = 0;

while (userAge < userName.length) {
  const char = userName.charAt(userAge);

  if (char === "u") {
    console.log("это буква есть");
  }
  userAge++;
}

let length = "hello";
let user2 = "";
let hello = length.length - 0;
while ((hello >= 0, hello--)) {
  user2 += length[hello];
}
console.log(user2);

let user1 = 10;
let user3 = 5;
let user4 = 0;
console.log(user1);

while (user4 < user3) {
  if (user4 === 0 || user4 === user3 - 1) {
    console.log("*".repeat(user1));
  } else {
    console.log("*" + "-".repeat(user1 - 3) + "*");
  }

  user4++;
}
let user6 = "";
while (user6.length < 7) console.log((user6 += "#"));

let abc = "abc";

console.log(abc.length);

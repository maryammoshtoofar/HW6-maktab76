// 3
// ● / Function that add a new course score and return the new user object (dynamic
// argument)
// ● // Function that add a new role and check if his age is under 18 add status:
// "veryyoung" to that object and return the object
// ●
// ● // Convert this object to array and after that add (fatherName: "ali") and then convert
// it to object

const user = {
  id: 6,
  lastName: "Zenderoh",
  name: "Hossein",
  roles: ["student", "admin"],
  age: 17,
  scores: { english: 10, math: 19.5, physics: 14 },
};

const newUser = JSON.parse(JSON.stringify(user));

function addCourse(newUser, course) {
  Object.assign(newUser.scores, course);
  return newUser;
}
function addRole(newUser, role) {
  Object.assign(newUser.roles.push(role));
  if (newUser.age < 18) Object.assign(newUser, { status: "very young" });
  return newUser;
}
function convertToArray(newUser, entry) {
  const entries = Object.entries(newUser);
  entries.push(entry);
  return Object.fromEntries(entries);
}

console.log("********Question 3********");
console.log("Add Course Score:");
console.log(addCourse(user, { history: 20 }));
console.log("Add New Role And Check Age:");
console.log(addRole(newUser, "developer"));
console.log("Convert to Array and Back:");
console.log(convertToArray(newUser, ["fatherName", "ali"]));

const students = ["nouman", "salman", "kalim", "hamza", "shahab"];
const marks = [45, 32, 40, 63, 28];
let status = ""; // pass || fail

marks.forEach((e, i) => {
  if (e < 33) status = "fail";
  else if (e >= 33) status = "pass";
  console.log(`${students[i]} is ${status}, total marks: ${e}`);
});
// output:
// nouman is pass, total marks: 45
// salman is fail, total marks: 32
// kalim is pass, total marks: 40
// hamza is pass, total marks: 63
// shahab is fail, total marks: 28

// we are given array of marks of student. filter out the marks of students that scored 90 plus

let marksarr = [21, 93, 45, 90, 23, 23, 98, 94, 87];

let output = marksarr.filter((marks) => {
    return marks >= 90;
});

console.log(output);
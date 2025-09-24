function calculateGrade(score) {
if (score >= 90) {
return "A";
} else if (score >= 80) {
return "B";
} else if (score >= 70) {
return "C";
} else if (score >= 60) {
return "D";
} else {
return "F";
}
}
// Test the function
console.log("Score 95:", calculateGrade(95)); // A
console.log("Score 82:", calculateGrade(82)); // B
console.log("Score 73:", calculateGrade(73)); // C
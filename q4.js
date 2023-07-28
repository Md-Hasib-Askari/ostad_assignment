function calculateGrade(score) {
    switch (true) {
        case score >= 90:
            return 'A';
        case score >= 80:
            return 'B';
        case score >= 70:
            return 'C';
        case score >= 60:
            return 'D';
        default:
            return 'F';
    }
}

console.log(calculateGrade(95));  // Output: 'A'
console.log(calculateGrade(84));  // Output: 'B'
console.log(calculateGrade(75));  // Output: 'C'
console.log(calculateGrade(68));  // Output: 'D'
console.log(calculateGrade(45));  // Output: 'F'
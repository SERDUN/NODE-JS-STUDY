// Homework 1

// This task requires calculating the average grade for a student.
// The average is defined as the sum of all *valid* scores divided by the number of specializations.

// Note:
// There is no strict requirement regarding how to treat invalid scores. 
// It's also unclear whether there is a semantic distinction between `null` and `undefined`.
// For example, `null` might represent a score that is pending (e.g., a lab that hasn't been submitted yet).
// To preserve business logic integrity, we will treat any `null`, `undefined`, or out-of-range score as invalid 
// and will throw an exception if encountered.

let student1 = { name: 'Chill Student', grades: [{ name: 'Math', score: 1 }, { name: 'Science', score: 5 }, { name: 'Biology', score: 10 }] };
let student2 = { name: 'Andrey', grades: [{ name: 'Algebra', score: 2 }, { name: 'Physics', score: 6 }, { name: 'Invalid Grade', score: null }, { name: 'Chemistry', score: undefined }, { name: 'History', score: 9 }] };
let student3 = { name: 'Bidosa', grades: [] };

let students = [student1, student2, student3];

// Calculate the average grade for a student use origingla length of grades from the person even if the score is invalid and not used in the calculation.
const averageGradeNotSava = (person) => {
    let score = person.grades.map((grade) => grade.score);
    let normalizedScore = score.filter((grade) => isScoreValid(grade));
    let sum = normalizedScore.reduce((acc, score) => acc + score, 0);
    return (sum / score.length).toFixed(2);
}

// Only calculate the average based on valid scores.
const averageGrade = (person) => {
    let score = person.grades.map((grade) => grade.score);
    let sum = score.reduce((acc, score) => acc + score, 0);

    if (score.length === 0) {
        throw new Error('No grades available');
    }

    return (sum / score.length).toFixed(2);
}

// Validate the student object.
const isStudentValid = (student) => {
    if (!student.name || typeof student.name !== 'string') {
        return
    }

    if (!Array.isArray(student.grades)) {
        return false;
    }

    return student.grades.map((grade) => grade.score).every(isScoreValid);
}

// Validate the score.
// Check if the score is a number between 1 and 10.
// Also check if the score is not null or undefined.
const isScoreValid = (score) => {
    return score >= 1 && score <= 10 && score !== null && score !== undefined;
}

// Calculate the average for each student and handle errors.
function calculateStudentAverage(students) {
    console.log('Average grade for each student(Save):');
    students.forEach((student) => {
        try {
            if (!isStudentValid(student)) {
                console.log(`Invalid student: ${student.name}`);
                return;
            }

            console.log(`Average grade for ${student.name}: ${averageGrade(student)}`);
        } catch (error) {
            console.error(`Error calculating average for ${student.name}: ${error.message}`);
        }
    });
}

// Calculate the average for each student without catching errors and additionally validate the student object.
function calculateStudentAverageNotSava(students) {
    console.log('Average grade for each student(Not save):');
    students.forEach((student) => {
        console.log(`Average grade for ${student.name}: ${averageGradeNotSava(student)}`);
    });
}

// Accordng imptrouved task
console.log('\n');
calculateStudentAverage(students);

// Accordion original task
console.log('\n');
calculateStudentAverageNotSava(students);

// You need to make simple quiz.

// 1. Ask the users a few questions (>4), using prompt.
// 2. If the answer is right add 10 points (for every right answers).
// 3. If the answer is wrong or user clicked cancel - you don't add any points.
// 4. When the user will answer all questions, show the result using alert (like: You have 30 points. You answered correctly for 3/10.).


// Some question for example:

// How much will 2+2?
// The sun rises in the east?
// How much will 5 / 0 be?
// What color is the sky?
// What is the correct answer to the ultimate question of life, the universe and all that. (42)


firstQuestion = +prompt("How much will 2+2?");
totalPoints = 0;
correctAnswers = 0;

if(firstQuestion === 4) {
    totalPoints += 10;
    correctAnswers ++;
}else {
    console.log ("you don't add any points");
}

secondQuestion = prompt("The sun rises in the east?");
if(secondQuestion === null) {
    console.log ("you don't add any points");
}else if(secondQuestion === "yes") {
    totalPoints += 10;
    correctAnswers ++;
} else {
    console.log ("you don't add any points");
}

thirdQuestion = prompt("How much will 5 / 0 be?");
if(thirdQuestion === null) {
    console.log ("you don't add any points");
}else if(thirdQuestion.toLowerCase() === "cannot be divided") {
    totalPoints += 10;
    correctAnswers ++;
} else {
    console.log ("you don't add any points");
}

fourthQuestion = prompt("What color is the sky?");
if(fourthQuestion === null) {
    console.log ("you don't add any points");
} else if(fourthQuestion.toLowerCase() === "blue") {
    totalPoints += 10;
    correctAnswers ++;
} else {
    console.log ("you don't add any points");
}

fifthQuestion = +prompt("What is the correct answer to the ultimate question of life, the universe and all that.");
if(fifthQuestion === 42) {
    totalPoints += 10;
    correctAnswers ++;
} else {
    console.log ("you don't add any points");
}

alert(`You have ${totalPoints} points. You answered correctly for ${correctAnswers}/5.`)

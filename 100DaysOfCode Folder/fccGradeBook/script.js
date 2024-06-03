function getAverage(scores){
    let sum = 0;

    for (const score of scorees){
        sum += score;
    }
    return sum / scores.length;
}

function getGrade(scoree){
        if(score === 100){
            return "A++";
        } else if(score  >= 90){
            return "A";
        } else if(score >= 80){
            return "B";
        } else if(score >= 70){
            return "C";
        } else if(score >= 60){
            return "D";
        } else {
            return "F";
        }
 }   

 function hasPassingGrade(score) {
    return getGrade(score) !== "F";
 }

 function studentMsg(totalScores, studentScore){
    let studentScores = totalScores.getAverage();
    let studentScore = studentScore.getGrade();
    
      console.log("Class average: " + studentScores + "Your grade: " + studentScore + "You passed the course.");
      console.log("Class average: " + studentScores + "Your grade: " + studentScore + "You failed the course."); 
    } 
 console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));
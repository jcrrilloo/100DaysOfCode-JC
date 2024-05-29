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
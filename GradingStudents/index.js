function gradingStudents(grades){
    for(let i = 0; i < grades.length; i++){
        if(grades[i] >= 38){
            let nextMultiple = Math.ceil(grades[i] / 5) * 5;
            console.log(nextMultiple);
            if(nextMultiple - grades[i] < 3){
                grades[i] = nextMultiple;
            }
        }
    }
    return grades;
}

let grades = [73, 67, 38, 33];
console.log(gradingStudents(grades)); // 
let students = [{
        name: 'JOHN',
        lastname: 'DOE',
        score: 4
    },
    {
        name: 'EVELYN',
        lastname: 'JACKSON',
        score: 8
    },
    {
        name: 'JAMES',
        lastname: 'SHAW',
        score: 2
    }
];

//Solution using .filter()

let studentsApproved = students.filter(student => student.score >= 4);
console.log(studentsApproved);

//Solution order using .sort()

let orderScore = studentsApproved.sort((a, b) => {
    return (a.score - b.score)
})
console.log(orderScore);

//Solution using for & .push()

for (let i = 0; i < students.length; i++) {
    let studentsApproved = [];
    let scoreStudents = students[i].score;

    if (scoreStudents >= 4) {
        studentsApproved.push(students[i])
    }
    console.log(studentsApproved);
}

//Solution using .forEach

students.forEach(student => {
    if(student.score >= 4)
    console.log(student);
});

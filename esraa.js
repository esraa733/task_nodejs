import express from 'express';
const app =express();
const students =[
    {
        id: 1,
        name: "esraa",
        city: "shebin",
    },
    {
        id: 2,
        name: "mai",
        city: "tanta",
    },
    {
        id: 3,
        name: "eman",
        city: "banha",
    },
    {
        id: 4,
        name: "aya",
        city: "cario",
    },
    {
        id: 5,
        name: "omar",
        city: "sadat",
    }
]

const studentfunction = (request,response) => {
    let output  = '<ul>';
    for(let i=0;i<students.length;i++){
        const student = students[i];

        output += "<li>" + student.name + "</li>";
    }

    output += "</ul>";
response.send(output);
};
app.get('/students',studentfunction)





app.listen(5000);
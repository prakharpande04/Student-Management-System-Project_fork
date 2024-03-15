var count = 0;
var students = []; 
var global_id;
function addStudent(){
 
    const nameValue = document.getElementById('name').value;
    const emailValue = document.getElementById('email').value;
    const ageValue = document.getElementById('age').value;
    const gradeValue = document.getElementById('grade').value;
    const degreeValue = document.getElementById('degree').value;

    if(document.querySelector("#submit").innerText == "Edit Student"){
        console.log("this will edit and not add");
        console.log(global_id);
        let index;

        for (let i = 0; i < students.length; i++) {
            if (students[i]['ID'] == global_id) {
                index=i;
                break;
            }
        }

        let studentobj = students[index];

        studentobj['name'] = nameValue;
        studentobj['email'] = emailValue;
        studentobj['grade'] = gradeValue;
        studentobj['age'] = ageValue;
        studentobj['degree'] = degreeValue;

        students[index] = studentobj;

        showTable();
        document.querySelector("#submit").innerHTML = "Add Student";

            document.getElementById('name').value="";
            document.getElementById('email').value="";
            document.getElementById('age').value="";
            document.getElementById('grade').value="";
            document.getElementById('degree').value="";
        
     return;

    }
    if(nameValue=='' || emailValue=='' || ageValue=='' || gradeValue =='' || degreeValue==""){
        alert("All fields are required!")
        return;
    }
    count++;

    students.push({
        ID:count,
        name:nameValue,
        email:emailValue,
        age:ageValue,
        grade:gradeValue,
        degree:degreeValue
    });


    document.getElementById('name').value="";
    document.getElementById('email').value="";
    document.getElementById('age').value="";
    document.getElementById('grade').value="";
    document.getElementById('degree').value="";
    console.log(students);
    showTable();
}



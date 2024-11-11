
let students = [];

function addStudent() {
    const name = document.getElementById("name").value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const group = document.getElementById("group").value;
    const web = parseInt(document.getElementById("web").value);
    const se = parseInt(document.getElementById("se").value);
    const mis = parseInt(document.getElementById("mis").value);
    const linux = parseInt(document.getElementById("linux").value);
    const ooad = parseInt(document.getElementById("ooad").value);

    const total = web + se + mis + linux + ooad;
    let grade = "F";
    if (total >= 400) grade = "A";
    else if (total >= 300) grade = "B";
    else if (total >= 200) grade = "C";
    else if (total >= 100) grade = "D";

    const student = { name, gender, group, web, se, mis, linux, ooad, total, grade };
    students.push(student);

    displayTable(students);


    document.getElementById("name").value = "";
    document.querySelector('input[name="gender"]:checked').checked = false;
    document.getElementById("group").value = "E1";
    document.getElementById("web").value = "";
    document.getElementById("se").value = "";
    document.getElementById("mis").value = "";
    document.getElementById("linux").value = "";
    document.getElementById("ooad").value = "";
}

function displayTable(data) {
    const table = document.getElementById("studentTable").getElementsByTagName("tbody")[0];
    table.innerHTML = "";

    data.forEach((student) => {
        const newRow = table.insertRow();

        newRow.innerHTML = `
            <td>${student.name}</td>
            <td>${student.gender}</td>
            <td>${student.group}</td>
            <td>${student.web}</td>
            <td>${student.se}</td>
            <td>${student.mis}</td>
            <td>${student.linux}</td>
            <td>${student.ooad}</td>
            <td>${student.total}</td>
            <td>${student.grade}</td>
        `;
    });
}

function filterTable() {
    const groupFilter = document.getElementById("filterGroup").value;
    const genderFilter = document.getElementById("filterGender").value;
    const gradeFilter = document.getElementById("filterGrade").value;

    const filteredData = students.filter((student) => {
        return (
            (groupFilter === "" || student.group === groupFilter) &&
            (genderFilter === "" || student.gender === genderFilter) &&
            (gradeFilter === "" || student.grade === gradeFilter)
        );
    });
    displayTable(filteredData);
}

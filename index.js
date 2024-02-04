

let id = 0;

document.getElementById('add').addEventListener('click', ()=>{
    let table = document.getElementById('Table1')
    let row = table.insertRow(1);// creates the new row
    row.insertCell(0).innerHTML = document.querySelector('#new-inputType').value;// adds the food type to the row
    row.insertCell(1).innerHTML = document.querySelector('#new-inputGroup').value;//adds the food group to the row
});






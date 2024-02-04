//need an array for food types
//need an array for food groups
// need a way to push new elements into table
// need the survey to ask for food type then group

let id = 0;

document.getElementById('add').addEventListener('click', ()=>{
    let table = document.getElementById('Table1')
    let row = table.insertRow(1);// creates the new row
    //row.setAttribute('id', `item-${id}`)
    row.insertCell(0).innerHTML = document.querySelector('#new-inputType').value;// adds the food type to the row
    row.insertCell(1).innerHTML = document.querySelector('#new-inputGroup').value;//adds the food group to the row
});






//need an array for food types
//need an array for food groups
// need a way to push new elements into table
// need the survey to ask for food type then group

let id = 0;

document.getElementById('add').addEventListener('click', ()=>{
    let addedFood = new Text ();
    let table = document.getElementById('list')
    let row = table.insertRow(1);
    row.setAttribute('id', `item-${id}`)
    row.insertCell(0).innerHTML = document.querySelector('#new-inputType').value;
    row.insertCell(1).innerHTML = document.querySelector('#new-inputGroup').value;
    let actions = row.insertCell(2);


});






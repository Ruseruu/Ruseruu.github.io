// 6. modify basic JS object, with "this" keyword
let person = {
  firstName: "Jane",
  lastName: "Doe",
  age: 45,
  streetAddress: "123 Main Street",
  city: "Saginaw",
  state: "MI",
  zipCode: "48710",
  fullAddress: function(){ return this.streetAddress + " " + this.city + " " + this.state + " " + this.zipCode},
  fullName: function() {return this.firstName  + " " + person.lastName}
}
document.getElementById("1A").innerHTML = person.fullName();
document.getElementById("1B").innerHTML = person.fullAddress();

// Instructions
// modify person object, above, as follows
// add properties, streetAddress, city, state, zipCode
// add method, fullAddress(), which prints full address on a single line.
// Display output of fullAddress() in <div id="1B">
person.streetAddress = "123 Main Street";

// ==================

// 7. create basic DOM object
let div2a = document.getElementById("2A");
let div2b = document.getElementById("2B");
let table2a = createTable("table2a");
let table2b = createTable("table2b");
div2a.appendChild(table2a);
div2b.appendChild(table2b);
table2a.setAttribute("style", "border:1px solid black;")
table2a.setAttribute("width", "100%")
table2b.setAttribute("style", "border:1px solid black;", )
table2b.setAttribute("width", "100%")
appendTableRow3(table2a,"1","2","3");
appendTableRow3(table2a,"4","5","6");
appendTableRow3(table2a,"7","8","9");
appendTableRow5(table2b,"1","2","3","4","5");
appendTableRow5(table2b,"6","7","8","9","10");
appendTableRow5(table2b,"11","12","13","14","15");
appendTableRow5(table2b,"16","17","18","19","20");
appendTableRow5(table2b,"21","22","23","24","25");
// Instructions
// add a new function, appendTableRow5(), which adds 5-column rows instead of 3-column rows
// create a 5-row by 5-column table showing the numbers, 1 through 25
// put borders around the cells, too, not just around the edge of the table
// Display output in <div id="2B">

// ==================

// 8. create "totals" row and column in a table

// Instructions
// don't change table3A. it's just a template.
// Use table03A to create table3B. Create new functions as in item 2, above. 
// in table3B, add a column, "Price * Qty", and use JS to compute the correct values to put in the column
// add to table03B a "totals" row which gives the "grand total" of all numbers in the "Price * Qty" column
let table03B = document.getElementById("3B")
let priceQty1 = table03B.children[0].children[0].children[1].children[1].innerHTML * table03B.children[0].children[0].children[1].children[2].innerHTML

let priceQty2 = table03B.children[0].children[0].children[2].children[1].innerHTML * table03B.children[0].children[0].children[2].children[2].innerHTML
let priceQty3 = table03B.children[0].children[0].children[3].children[1].innerHTML * table03B.children[0].children[0].children[3].children[2].innerHTML
table03B.children[0].children[0].children[4].children[1].innerHTML = priceQty1;
table03B.children[0].children[0].children[4].children[2].innerHTML = priceQty2;
table03B.children[0].children[0].children[4].children[3].innerHTML = priceQty3;

let grandTotal = priceQty1 + priceQty2 + priceQty3;
table03B.children[0].children[0].children[5].children[1].innerHTML = grandTotal;
// 9. Revise a non-object-oriented HTML form. Make it so the field in focus displays *only* its own error (not the errors of all the other fields), however, if the user clicks the "validate" button, then display all errors.
// code below is from: https://www.guru99.com/practical-code-examples-using-javascript.html 

    // initialize error div id array
    var divs = new Array();
    divs[0] = "errFirst";
    divs[1] = "errLast";
    divs[2] = "errEmail";
    divs[3] = "errUid";
    divs[4] = "errPassword";
    divs[5] = "errConfirm";

    // function: validate() ---------------------------------------------
    function validate(idInput) {
        // initialize input array
       var inputs = new Array();
        inputs[0] = document.getElementById('first').value;
        inputs[1] = document.getElementById('last').value;
        inputs[2] = document.getElementById('email').value;
        inputs[3] = document.getElementById('uid').value;
        inputs[4] = document.getElementById('password').value;
        inputs[5] = document.getElementById('confirm').value; 
        // initialize error array
        var errors = new Array();
        errors[0] = "<span style='color:red'>Please enter your first name!</span>";
        errors[1] = "<span style='color:red'>Please enter your last name!</span>";
        errors[2] = "<span style='color:red'>Please enter your email!</span>";
        errors[3] = "<span style='color:red'>Please enter your user id!</span>";
        errors[4] = "<span style='color:red'>Please enter your password!</span>";
        errors[5] = "<span style='color:red'>Please confirm your password!</span>";
        
      switch (idInput){
    case 'first':
      if (inputs[0] == ""){ // Couldn't figure how to get the for loop to work here for divs so did manually
        document.getElementById(divs[0]).innerHTML = errors[0];
        document.getElementById(divs[1]).innerHTML = "";
        document.getElementById(divs[2]).innerHTML = "";
        document.getElementById(divs[3]).innerHTML = "";
        document.getElementById(divs[4]).innerHTML = "";
        document.getElementById(divs[5]).innerHTML = "";
      } 
      else {
        document.getElementById(divs[0]).innerHTML = "OK!";
      }
      break;
    case 'last':
      if (inputs[1] == ""){
        document.getElementById(divs[1]).innerHTML = errors[1];
        document.getElementById(divs[0]).innerHTML = "";
        document.getElementById(divs[2]).innerHTML = "";
        document.getElementById(divs[3]).innerHTML = "";
        document.getElementById(divs[4]).innerHTML = "";
        document.getElementById(divs[5]).innerHTML = "";
      }
      else {
        document.getElementById(divs[1]).innerHTML = "OK!";
      }
      break;
    case 'email':
      var atpos = inputs[2].indexOf("@");
      var dotpos = inputs[2].lastIndexOf(".");
      if (inputs[2] == ""){
        document.getElementById(divs[2]).innerHTML = errors[2];
      } else if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= inputs[2].length){
        document.getElementById(divs[2]).innerHTML 
        = "<span style='color: red'>Enter a valid email address!</span>";
        document.getElementById(divs[0]).innerHTML = "";
        document.getElementById(divs[1]).innerHTML = "";
        document.getElementById(divs[3]).innerHTML = "";
        document.getElementById(divs[4]).innerHTML = "";
        document.getElementById(divs[5]).innerHTML = "";
      }
      else{
        document.getElementById(divs[2]).innerHTML = "OK!";
      }
      break;
    case 'uid':
      if (inputs[3] == ""){
        document.getElementById(divs[3]).innerHTML = errors[3];
        document.getElementById(divs[0]).innerHTML = "";
        document.getElementById(divs[1]).innerHTML = "";
        document.getElementById(divs[2]).innerHTML = "";
        document.getElementById(divs[4]).innerHTML = "";
        document.getElementById(divs[5]).innerHTML = "";
      }
      else {
        document.getElementById(divs[3]).innerHTML = "OK!";
      }
      break;
    case 'password':
      if (inputs[4] == ""){
        document.getElementById(divs[4]).innerHTML = errors[4];
        document.getElementById(divs[0]).innerHTML = "";
        document.getElementById(divs[1]).innerHTML = "";
        document.getElementById(divs[2]).innerHTML = "";
        document.getElementById(divs[3]).innerHTML = "";
        document.getElementById(divs[5]).innerHTML = "";
      }
      else {
        document.getElementById(divs[4]).innerHTML = "OK!";
      }
      break;
    case 'confirm':
      var first = inputs[4];
      var second = inputs[5];
      if (second != first)
        document.getElementById(divs[5]).innerHTML = "<span style='color: red'>Your passwords don't match!</span>";
      else
        document.getElementById(divs[5]).innerHTML = "OK!";
      break;
    default:
      break; // Not complete, couldn't figure this last part out
  }
}
      //if((inputs[0]) == "")
    //{
      //document.getElementById(div[0].innerHTML = errMessage[0]);
      //document.getElementById(div[1].innerHTML = "");
    //}
    

    // function: finalValidate() ------------------------------------
    function finalValidate() {
        var count = 0;
        for (i = 0; i < 6; i++) {
            var div = divs[i];
            if (document.getElementById(div).innerHTML == "OK!")
                count = count + 1;
        }
        if (count == 6)
            document.getElementById("errFinal").innerHTML 
              = "All the data you entered is correct!!!";
    }


// 10. Create a more object-oriented form

// Step 1. Create/append the DOM object 
let form00 = document.getElementById("form00");
let table00 = createTable("table00");

form00.appendChild(table00); // Create new error array
// Step 2. Create an JS object array containing form info 
let formArray = [
  {label: "First name:", inputType: "text", id: "first10", 
    onkeyup: "validate10('first10');", errorId: "errFirst10"}, 
  {label: "Last name:",  inputType: "text", id: "last10",  
    onkeyup: "validate10('last10');", errorId: "errLast10" }, 
  {label: "Email:",      inputType: "text", id: "email10", 
    onkeyup: "validate10('email10');", errorId: "errEmail10"}, 
  {label: "User id:",    inputType: "text", id: "uid10",   
    onkeyup: "validate10('uid10');", errorId: "errUid10"  }, 
  {label: "Password:",   inputType: "password", id: "password10", 
    onkeyup: "validate10('password10');", errorId: "errPassword10"}, 
  {label: "Confirm Password:", inputType: "password", id: "confirm10", 
    onkeyup: "validate10('confirm10');", errorId: "errConfirm10"}
];

// Step 3. loop through the JS object array to populate the form

// your code here
    var form = document.createElement("form");
    form.setAttribute("method", "post");
    form.setAttribute("action", "submit.php");
let fieldLabel, fieldEntry, fieldError;
for(let i=0; i<formArray.length; i++) {
  fieldLabel = formArray[i].label;
  fieldEntry =  `<input type='${formArray[i].inputType}' `
    + `id='${formArray[i].id}' name='${formArray[i].id}' `  
    + `onkeyup='${formArray[i].onkeyup}' \/>`;
  fieldError = `<span id='' + formArray[i].errorId + ''></span>`;
  appendTableRow3(table00,fieldLabel,fieldEntry,fieldError);
}
console.log(fieldLabel);
console.log(fieldEntry);
console.log(fieldError);

    var divs10 = new Array();
    divs10[0] = "errFirst10";
    divs10[1] = "errLast10";
    divs10[2] = "errEmail10";
    divs10[3] = "errUid10";
    divs10[4] = "errPassword10";
    divs10[5] = "errConfirm10";

function validate10(idInput) {
        // initialize input array
        var inputs10 = new Array();
        inputs10[0] = document.getElementById('first10').value;
        inputs10[1] = document.getElementById('last10').value;
        inputs10[2] = document.getElementById('email10').value;
        inputs10[3] = document.getElementById('uid10').value;
        inputs10[4] = document.getElementById('password10').value;
        inputs10[5] = document.getElementById('confirm10').value;
        // initialize error array
        var errors = new Array();
        errors[0] = "<span style='color:red'>Please enter your first name!</span>";
        errors[1] = "<span style='color:red'>Please enter your last name!</span>";
        errors[2] = "<span style='color:red'>Please enter your email!</span>";
        errors[3] = "<span style='color:red'>Please enter your user id!</span>";
        errors[4] = "<span style='color:red'>Please enter your password!</span>";
        errors[5] = "<span style='color:red'>Please confirm your password!</span>";
        
      switch (idInput){
    case 'first10':
      if (inputs10[0] == ""){ // Couldn't figure how to get the for loop to work here for divs so did manually
        document.getElementById(divs10[0]).innerHTML = errors[0];
        document.getElementById(divs10[1]).innerHTML = "";
        document.getElementById(divs10[2]).innerHTML = "";
        document.getElementById(divs10[3]).innerHTML = "";
        document.getElementById(divs10[4]).innerHTML = "";
        document.getElementById(divs10[5]).innerHTML = "";
      } 
      else {
        document.getElementById(divs10[0]).innerHTML = "OK!";
      }
      break;
    case 'last10':
      if (inputs10[1] == ""){
        document.getElementById(divs10[1]).innerHTML = errors[1];
        document.getElementById(divs10[0]).innerHTML = "";
        document.getElementById(divs10[2]).innerHTML = "";
        document.getElementById(divs10[3]).innerHTML = "";
        document.getElementById(divs10[4]).innerHTML = "";
        document.getElementById(divs10[5]).innerHTML = "";
      }
      else {
        document.getElementById(divs10[1]).innerHTML = "OK!";
      }
      break;
    case 'email10':
      var atpos = inputs10[2].indexOf("@");
      var dotpos = inputs10[2].lastIndexOf(".");
      if (inputs10[2] == ""){
        document.getElementById(divs10[2]).innerHTML = errors[2];
      } else if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= inputs10[2].length){
        document.getElementById(divs10[2]).innerHTML 
        = "<span style='color: red'>Enter a valid email address!</span>";
        document.getElementById(divs10[0]).innerHTML = "";
        document.getElementById(divs10[1]).innerHTML = "";
        document.getElementById(divs10[3]).innerHTML = "";
        document.getElementById(divs10[4]).innerHTML = "";
        document.getElementById(divs10[5]).innerHTML = "";
      }
      else{
        document.getElementById(divs10[2]).innerHTML = "OK!";
      }
      break;
    case 'uid10':
      if (inputs10[3] == ""){
        document.getElementById(divs10[3]).innerHTML = errors[3];
        document.getElementById(divs10[0]).innerHTML = "";
        document.getElementById(divs10[1]).innerHTML = "";
        document.getElementById(divs10[2]).innerHTML = "";
        document.getElementById(divs10[4]).innerHTML = "";
        document.getElementById(divs10[5]).innerHTML = "";
      }
      else {
        document.getElementById(divs10[3]).innerHTML = "OK!";
      }
      break;
    case 'password10':
      if (inputs10[4] == ""){
        document.getElementById(divs10[4]).innerHTML = errors[4];
        document.getElementById(divs10[0]).innerHTML = "";
        document.getElementById(divs10[1]).innerHTML = "";
        document.getElementById(divs10[2]).innerHTML = "";
        document.getElementById(divs10[3]).innerHTML = "";
        document.getElementById(divs10[5]).innerHTML = "";
      }
      else {
        document.getElementById(divs10[4]).innerHTML = "OK!";
      }
      break;
    case 'confirm10':
      var first10 = inputs10[4];
      var second10 = inputs10[5];
      if (second10 != first10)
        document.getElementById(divs10[5]).innerHTML = "<span style='color: red'>Your passwords don't match!</span>";
      else
        document.getElementById(divs10[5]).innerHTML = "OK!";
      break;
    default:
      break; // Not complete, couldn't figure this last part out
  }
}
// append to tableobj a 3-column table row 
function appendTableRow3 (tableobj, col1, col2, col3) {
  // create column (table division) DOM objects
  let td1 = document.createElement("td");
  let td2 = document.createElement("td");
  let td3 = document.createElement("td");
  // insert content into columns
  td1.innerHTML = col1;
  td2.innerHTML = col2;
  td3.innerHTML = col3;
  // create table row DOM object
  let tr = document.createElement("tr");
  // append table divisions (columns) to table row
  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  // append the row to the tbody element in the table
  tableobj.children[0].appendChild(tr);
}

function appendTableRow5 (tableobj, col1, col2, col3, col4, col5) {
  // create column (table division) DOM objects
  let td1 = document.createElement("td");
  let td2 = document.createElement("td");
  let td3 = document.createElement("td");
  let td4 = document.createElement("td");
  let td5 = document.createElement("td");
  // insert content into columns
  td1.innerHTML = col1;
  td2.innerHTML = col2;
  td3.innerHTML = col3;
  td4.innerHTML = col4;
  td5.innerHTML = col5;
  // create table row DOM object
  let tr = document.createElement("tr");
  // append table divisions (columns) to table row
  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  tr.appendChild(td4);
  tr.appendChild(td5);
  // append the row to the tbody element in the table
  tableobj.children[0].appendChild(tr);
}
// return a DOM object containing an empty table (with tbody element)
function createTable(id) {
  let table = document.createElement("table");
  table.setAttribute("id", id);
  let tbody = document.createElement("tbody");
  table.appendChild(tbody);
  return table;
}

function createLargerTable(id){
    let table = document.createElement("table");
  table.setAttribute("id", id);
  let tbody = document.createElement("tbody");
  table.appendChild(tbody);
  return table;
}
// possible object oriented form append code
/*
let fieldLabel, fieldEntry, fieldError;
for(let i=0; i<formArray.length; i++) {
  fieldLabel = formArray[i].label;
  fieldEntry =  `<input type='${formArray[i].inputType}' `
    + `id='${formArray[i].id}' name='${formArray[i].id}' `  
    + `onkeyup='${formArray[i].onkeyup}' \/>`;
  fieldError = `<span id='' + formArray[i].errorId + ''></span>`;
  appendTableRow3(table00,fieldLabel,fieldEntry,fieldError);
}
console.log(fieldLabel);
console.log(fieldEntry);
console.log(fieldError);
*/
